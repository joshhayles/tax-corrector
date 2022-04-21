class FavoritesController < ApplicationController

    def index
        render json: Favorite.all
    end

    def create 
        favorite = Favorite.create!(fav_params)
        render json: favorite, include: :comp, status: :created
    end

    def update 
        favorite = Favorite.find_by(id: params[:id])
            if favorite 
                favorite.update(fav_params)
                render json: favorite, status: :accepted
            else
                render json: { error: "Favorite not found" }, status: :not_found
            end

    end
    def destroy 
        favorite = Favorite.find_by(id: params[:id])
            if favorite 
                favorite.destroy 
                head :no_content
            else
                render json: { error: "Home not found" }, status: :not_found
            end
    end


    private 

    def fav_params 
        params.permit(:user_id, :comp_id)
    end

end
