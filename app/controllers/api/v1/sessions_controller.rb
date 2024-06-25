class Api::V1::SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.find_by_email(session_params[:email])

    if user.present? && valid_password?(user["password"], session_params[:password])
        user_data = user.dup # Create a duplicate of the user hash to avoid modifying the original
        user_data.delete("password") # Manually remove the password key-value pair
        token = JsonWebToken.encode(user: user_data, exp: 8.hours.from_now.to_i)
        cookies.signed[:token] = { value: token, httponly: false, expires: 8.hours.from_now }
        render json: { status: :ok, message: 'Login successful', access_token: token }
    else
      render json: { errors: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def destroy
    # session.delete :user_id
    # head :no_content
    reset_session
    cookies[:token] = ''
    request.cookies['token'] = ''
  end

  def session_params
    params.require(:session).permit(:email, :password)
  end

  def valid_password?(stored_hash, provided_password)
    BCrypt::Password.new(stored_hash) == provided_password
  end
 
end
