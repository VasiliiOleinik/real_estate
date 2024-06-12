class Estate < ApplicationRecord
  TABLE_NAME = "estates".freeze

  class << self
    def find_by_id(id)
      response = dynamo_client.get_item(table_name: TABLE_NAME, key: { 'id' => id })
      response.item
    rescue Aws::DynamoDB::Errors::ServiceError => e
      log_error("Error finding estate: #{e.message}")
      nil
    end

    def all
      estates = fetch_estates
      estates.items.sort_by { |item| item['created_at'] }.reverse
    rescue Aws::DynamoDB::Errors::ServiceError => e
      log_error("Error retrieving estates: #{e.message}")
      []
    end

    def create(attrs)
      required_attrs = %w(title property_type estate_status country region price media_contains)
      missing_attrs = required_attrs.reject { |attr| attrs.with_indifferent_access[attr].present? }
      
      if missing_attrs.any?
        log_error("Validation failed: Missing #{missing_attrs.join(', ')}")
        return nil
      end

      create_attrs = attrs.stringify_keys.merge!(
        'id' => SecureRandom.uuid.first(8),
        'created_at' => Time.now.iso8601,
      )

      begin
        response = dynamo_client.put_item(table_name: TABLE_NAME, item: create_attrs)
        response.successful? ? 'Success' : nil
      rescue Aws::DynamoDB::Errors::ServiceError => e
        log_error("Unable to create Estate: #{e.message}")
        nil
      end
    end

    def delete(id)
      response = dynamo_client.delete_item(table_name: TABLE_NAME, key: { 'id' => id })
      response.successful?
    rescue Aws::DynamoDB::Errors::ServiceError => e
      log_error("Error deleting estate #{e.message}")
      false
    end

    def log_error(message)
      Rails.logger.error(message)
    end

    def fetch_estates
      dynamo_client.scan(table_name: TABLE_NAME)
    end
  end
end
