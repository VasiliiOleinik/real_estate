class ApplicationController < ActionController::Base
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  skip_before_action :verify_authenticity_token
  before_action :authorize

  private

  def authorize
    auth_header = request.headers['Authorization']
    token = auth_header.split(' ').last if auth_header

    unless token
      render json: { message: "No token provided" }, status: :unauthorized
      return
    end
    
    begin
      decoded_token = JsonWebToken.decode(token)
    rescue JWT::ExpiredSignature
      render json: { message: "Token has expired" }, status: :unauthorized
      return
    end

    decoded_token = JsonWebToken.decode(token)

    unless decoded_token
      render json: { errors: ["Invalid token"] }, status: :unauthorized
      return
    end

    
    current_user = User.find_by_email(decoded_token[:email])
    puts current_user

    unless current_user
      render json: { errors: ["User not found"] }, status: :unauthorized
    end
  end

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found_response(exception)
    render json: { errors: ["Not found: #{exception.message}"] }, status: :not_found
  end

  def not_found
    render json: { error: 'Route not found' }, status: :not_found
  end
end
