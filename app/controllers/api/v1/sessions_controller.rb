class Api::V1::SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.find_by(username: session_params[:username])
    if user&.authenticate(session_params[:password])
      token = JsonWebToken.encode(user: user, exp: 8.hours.from_now.to_i)
      cookies.signed[:token] = { value: token, httponly: false,  expires: 8.hour.from_now }
      render json: { status: :ok, message: 'Login successful', access_token: token }

    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  def session_params
    params.require(:session).permit(:username, :password)
  end
 
end
