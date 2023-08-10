class UsersController < ApplicationController
    protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  before_action :authorize, only: [:show, :edit, :update, :destroy]

    def index
        user = User.all
        render json: user
    end

    def create
        if params["password_digest"] == params["confirmpassword"]
            #encrypt password
            new_user = {
                username: params["username"],
                email: params["email"],
                password_digest: BCrypt::Password.create(params["password_digest"])
            }
        user = User.create!(user_params)
        render json: user, status: :created
    else
        render json: {error: "Password does not match" }, status: :not_found
    end
        end
    
        def show 
        user = User.find_by(id: session[:user_id])
        render json: user
        end

        def update
            user = find_user
             if user
              user.update(user_update_params)
               render json:user
             else
               render json: { error: "user not found" }, status: :not_found
             end
         end

        def destroy
            user = find_user
            user.destroy
            head :no_content
        end

        private

        def find_user
            User.find(params[:id])
        end

        def user_params
            params.permit(:username, :password, :email , :image)
        end 

        def user_update_params
            params.permit(:username, :password, :email, :image)
        end
end
