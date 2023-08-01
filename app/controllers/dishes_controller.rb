class DishesController < ApplicationController
    def index
        dish = Dish.all
        render json: dish, include: :restaurant
    end

    def create
        dish = Dish.create!(dish_params)
        render json: dish, status: :created
        end

        def show
            dish = find_dish
            render json:dish, include: :restaurant
        end

        def update
           dish = find_dish
            if dish
             dish.update(dish_update_params)
              render json:dish
            else
              render json: { error: "dish not found" }, status: :not_found
            end
        end


        def destroy
            dish = find_dish
            dish.destroy
            head :no_content
        end

        private

        def find_dish
            Dish.find(params[:id])
        end

        def dish_params
            params.permit(:name, :image, :category, :price, :restaurant_id)
        end

        def dish_update_params
            params.permit(:price)
        end
end
