class CompsController < ApplicationController

#get /comps
def index
    render json: Comp.all
end

#get /comps/:id
def show 
    home = Comp.find_by(id: params[:id])
        if comp
            render json: comp
        else
            render json: { error: "COMP not found" }, status: :not_found 
        end
end


end
