# frozen_string_literal: true

# lib/json_web_token.rb
# payload is @current_user
class JsonWebToken
  class << self
    def encode(payload, exp = 2.hours.from_now)
      user = payload[:user]

      user_id = user["id"]
      return '' if user_id.blank?

      user_payload = {
        id: user['id'],
        email: user['email'],
        first_name: user['first_name'],
        last_name: user['last_name'],
        exp: exp.to_i
      }
      JWT.encode(user, "SECRET_TOKEN", 'HS256', typ: 'JWT')
    end

    def decode(token)
      begin
        body = JWT.decode(token, "SECRET_TOKEN")[0]
        ActiveSupport::HashWithIndifferentAccess.new(body)
      rescue JWT::DecodeError => e
        # Handle the error appropriately. For example, you could return nil or raise a custom error
        nil # or raise CustomError.new("Invalid token format")
      end
    end

    def current_user(user)
      prepare_payload(user)
    end

    private
  end
end
