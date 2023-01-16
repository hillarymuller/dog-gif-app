class DogsController < ApplicationController
    skip_before_action :authorize, only: :index
    before_action :find_dog, except: :index
    
    def index
        dogs = Dog.all
        render json: dogs
    end

    def show
        render json: @dog
    end

    def update
        if @current_user.dogs.include?(@dog) || @current_user.household.users.filter { |u| u.id == @dog.user_id }
            @dog&.update!(dog_params)
            render json: @dog
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
  
    private
    def dog_params
        params.permit(:id, :user_id, :hunger, :thirst, :happiness, :energy, :potty, :adopted)
    end
    def find_dog
        @dog = Dog.find(params[:id])
    end
end
