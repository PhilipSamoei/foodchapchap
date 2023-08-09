class UsersController < ApplicationController
    # before_action :authorize_request, except: :create

    def index
        user = User.all
        render json: user
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
        end
    
        def show 
            user = find_user
            render json:user
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
