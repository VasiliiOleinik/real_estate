class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize
    token = cookies.signed[:token]

    unless token
      render json: { errors: ["No token provided"] }, status: :unauthorized
      return
    end

    decoded_token = JsonWebToken.decode(token)

    unless decoded_token
      render json: { errors: ["Invalid token"] }, status: :unauthorized
      return
    end

    
    current_user = User.find_by(id: decoded_token[:id])

    unless current_user
      render json: { errors: ["User not found"] }, status: :unauthorized
    end
  end

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end
end
