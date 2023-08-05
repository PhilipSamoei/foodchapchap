class BlogsController < ApplicationController

    def index
        blog = Blog.all
        render json: blog
    end
    def create
        blog = Blog.create! (blog_params)
        render json: blog , status: :created
    end
    def show
        beverage = find_beverage
        render json: beverage
    end
    def update
        beverage = find_beverage
        if beverage
            beverage.update(blog_update_params)
            render json: blog
        else
            render json: {error: "blog not found"}
        end
    end
    def destroy
        blog = find_blog
        blog.destroy
        head :no_content
    end

    private
    def find_blog
        Blog.find(params[:id])
    end
    def blog_update_params
        params.permit(:content)
    end
    def blog_params
        params.permit(:title, :content , :publication_date,:user_id)
    end
end
