require_relative '../../lib/tasks/json_web_token.rb'

class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by_email(params[:email])
    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)

      # Set the JWT as an HTTP-only cookie in the response
      cookies.signed[:jwt_token] = {
        value: token,
        httponly: true,
        expires: 24.hours.from_now
      }

      render json: { username: @user.username, user_id: @user.id }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def logout
    # Invalidate the JWT token by adding it to the blacklist
    jwt_token = cookies.signed[:jwt]
    Blacklist.create(jwt_token: jwt_token)

    # Clear the HTTP-only cookie
    cookies.delete(:jwt)

    render json: { message: "Logged out successfully" }, status: :ok
  end

  private

  def login_params
    params.permit(:email, :password)
  end  
end
