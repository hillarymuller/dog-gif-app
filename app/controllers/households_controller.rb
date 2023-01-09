class HouseholdsController < ApplicationController
    skip_before_action :authorize

    def index
        households = Household.all
        render json: households
    end
    def create
        household = Household.create!(household_params)
        render json: household
    end
    def update
        household = Household.find(params[:id])
        household.update!(household_params)
        render json: household
    end
    private
    def household_params
        params.permit(:name, :id, :users)
    end
end
