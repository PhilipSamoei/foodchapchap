class OrdersController < ApplicationController
    before_action :authorize_request
    
    def index
        order = Order.all
        render json: order
    end

    def create
        order = Order.create!(order_params)
        render json: order, status: :created
        end
    
        def show 
            order = find_order
            render json:order
        end

        def update
           order = find_order
            if order
             order.update(order_update_params)
              render json:order
            else
              render json: { error: "order not found" }, status: :not_found
            end
        end
    

        def destroy
            order = find_order
            order.destroy
            head :no_content
        end

        private

        def find_order
            Order.find(params[:id])
        end

        def order_params
            params.permit(:user_id, :total_price, :estimated_time, :dish_id, :beverage_id)
        end 

        def order_update_params
            params.permit(:dish_id, :beverage_id, :estimated_time)
        end
end
