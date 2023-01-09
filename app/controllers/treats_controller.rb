class TreatsController < ApplicationController
    def index
        treats = Treat.all
        render json: treats
    end
end
