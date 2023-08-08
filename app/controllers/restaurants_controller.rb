class RestaurantsController < ApplicationController
  # before_action :authorize_request

  def index
    restaurants = Restaurant.all
    render json: restaurants, include: [:dishes, :beverages]
  end

  def create
    restaurant = Restaurant.create!(restaurant_params)
    render json: restaurant, status: :created
  end

  def show
    restaurant = find_restaurant
    render json: restaurant, include: [:dishes, :beverages]
  end

  def update
      @restaurant = Restaurant.find(params[:id])
      if @restaurant.update(restaurant_params)
        render json: @restaurant
      else
        render json: { error: 'Failed to update restaurant Ambience' }, status: :unprocessable_entity
      end
    end
    
  def destroy
      restaurant = find_restaurant
      restaurant.destroy
      head :no_content
   
  end

  private

  def find_restaurant
    Restaurant.find(params[:id])
  end

  def restaurant_params
    params.permit(:name, :image, :address, :ambience)
  end
end

