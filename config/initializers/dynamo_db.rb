# frozen_string_literal: true

module DynamoDB
  def dynamo_client
    @dynamo_client ||= client
  end

  private

  def client
    if Rails.env.development? || Rails.env.test?
      Aws::DynamoDB::Client.new(connection_params)
    else
      Aws::DynamoDB::Client.new
    end
  end

  def resource
    if Rails.env.development? || Rails.env.test?
      Aws::DynamoDB::Resource.new(connection_params)
    else
      Aws::DynamoDB::Resource.new
    end
  end

  def connection_params
    { credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY']),
      region: 'eu-north-1',
      endpoint: "https://dynamodb.eu-north-1.amazonaws.com" }
  end
end
