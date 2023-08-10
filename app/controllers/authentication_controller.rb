class AuthenticationController < ApplicationController

  # POST /auth/login
  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])  # Use params[:password] instead of params[:password_digest]
      render json: { user: user }
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

  def admin
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password_digest])
      render json: {user: user}
    else
      render json: {error: "Invalid username or password"}, status: :unauthorized
    end
  end

  def verify
    #verify the token
    if logged_in?
      render json: {user: current_user}
    else
      render json: {error: "Invalid token"}, status: :unauthorized
    end
  end
end