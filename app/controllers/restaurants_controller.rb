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
      if @restaurant.update(Ambience: params[:ambience])
        render json: @restaurant
      else
        render json: { error: 'Failed to update restaurant Ambience' }, status: :unprocessable_entity
      end
    end

    private

    def find_restaurant
      Restaurant.find(params[:id])
    end

    def restaurant_params
      params.permit(:name, :image, :address, :ambience)
    end
  end

