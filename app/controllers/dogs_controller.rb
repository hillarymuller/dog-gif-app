class DogsController < ApplicationController
    skip_before_action :authorize, only: :index
    before_action :find_dog, except: [:index, :create]
    
    def index
        dogs = Dog.all
        render json: dogs
    end

    def show
        render json: @dog
    end

    def create
        dog = Dog.create!(dog_params)
        render json: dog, status: :created
    end

    def adminedit
        if @current_user.username.downcase == "hillarymuller"
            @dog&.update!(dog_params)
            render json: @dog
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def update
       
        @dog&.update!(dog_params)
            if @dog.adopted
              if @dog.hunger == 10 || self.thirst == 10 || self.potty == 10 
                NotifierMailer.with(dog: @dog).dog_needs_attention.deliver_now
              end
            end
        render json: @dog
    end

    def destroy
        if @current_user.username.downcase == "hillarymuller"
            if @dog.delete
                render json: @dog, status: :ok
            else
                render json: {error: "Was not able to delete"}, status: :not_found
            end
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

 
    private
    def dog_params
        params.permit(:id, :user_id, :hunger, :thirst, :happiness, :energy, :potty, :adopted, :eat_gif, :drink_gif, :potty_gif, :play_gif, :treat_gif, :nap_gif, :walk_gif, :jog_gif, :pet_gif, :image, :name)
    end
    def find_dog
        @dog = Dog.find(params[:id])
    end

end
