class CompsController < ApplicationController

#get /comps
def index
    render json: Comp.all
end

#get /comps/:id
def show 
    home = Comp.find_by(id: params[:comp_id])
        if home
            render json: home
        else
            render json: { error: "COMP not found" }, status: :not_found 
        end
end


end
