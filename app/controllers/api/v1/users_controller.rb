class Api::V1::UsersController < ApplicationController
  before_action :set_current_user, only: :show
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user.as_json(except: :password_digest), status: :created
  end

  def show
    render json: @current_user, status: :ok
  end

  private

  def set_current_user
    @current_user = User.find(session[:user_id])
  end

  def user_params
    params.permit(:email, :username, :password, :first_name, :last_name, :phone_number, :role, :avatar)
  end
end
