class ReviewsController < ApplicationController
    before_action :authorize_request, except: [:index, :show]

    def index
        review = Review.all
        render json: review
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def show 
        review = find_review
        render json:review
    end

    def update
        review = find_review
        if review
        review.update(review_update_params)
        render json:review
        else
        render json: { error: "review not found" }, status: :not_found
        end
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:user_id, :restaurant_id :review, :rate)
    end 

    def review_update_params
        params.permit(:review, :rate)
    end
end
