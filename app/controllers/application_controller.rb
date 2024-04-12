class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize
    token = cookies.signed[:token]
    decoded_token = JsonWebToken.decode(token)
    current_user = User.find_by(id: decoded_token[:id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end
end
