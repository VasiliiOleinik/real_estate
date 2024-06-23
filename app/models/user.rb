class User < ApplicationRecord
  has_secure_password
  TABLE_NAME = "users".freeze

  class << self
    def find_by_email(value)
      response = dynamo_client.get_item(table_name: TABLE_NAME, key: { 'email' => value })
      response.item
      rescue Aws::DynamoDB::Errors::ServiceError => e
        log_error("Error finding user: #{e.message}")
        nil
    end

    def create(attrs)
      is_user_exists = find_by_email(attrs[:email])

      if is_user_exists.present?
        return { success: false, errors: "User already exists with email: #{attrs[:email]}" }
      end

      required_attrs = %w(email username password first_name last_name phone_number role)
      missing_attrs = required_attrs.reject { |attr| attrs.with_indifferent_access[attr].present? }

      if missing_attrs.any?
        return { success: false, errors: "Validation failed: Missing #{missing_attrs.join(', ')}" }
      end

      create_attrs = attrs.stringify_keys.merge!(
        'id': SecureRandom.uuid.first(8),
        'created_at': Time.now.iso8601,
      )

      create_attrs['password'] = BCrypt::Password.create(create_attrs['password'])

      begin
        response = dynamo_client.put_item(table_name: TABLE_NAME, item: create_attrs)
        response.successful? ? create_attrs  : nil
      rescue Aws::DynamoDB::Errors::ServiceError => e
        return { success: false, errors: "Unable to create User: #{e.message}" }
      end
    end
    
    def log_error(message)
      Rails.logger.error(message)
    end

    def fetch_users
      dynamo_client.scan(table_name: TABLE_NAME)
    end
  end
end
