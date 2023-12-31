class BeveragesController < ApplicationController
    def index
        beverages = Beverage.includes(:restaurant).all
        render json: beverages.map { |beverage| beverage.as_json.merge(restaurant_name: beverage.restaurant.name) }, include: :restaurant
      end

    def create
        beverage = Beverage.create!(beverage_params)
        render json: beverage, status: :created
        end

        def show
            beverage = find_beverage
            render json:beverage, include: :restaurant
        end

    def update
           beverage = find_beverage
            if beverage
             beverage.update(beverage_update_params)
              render json:beverage
            else
              render json: { error: "beverage not found" }, status: :not_found
            end
    end


        def destroy
            beverage = find_beverage
            beverage.destroy
            head :no_content
        end

        private

        def find_beverage
            Beverage.find(params[:id])
        end

        def beverage_params
            params.permit(:name, :image, :category, :price, :restaurant_id)
        end

        def beverage_update_params
            params.permit(:price)
        end
end