class HomeController < ApplicationController
    before_action :authenticate_user!, :except => [:index]
    respond_to :html, :json

    def index
        @message = "Hello World"
    end
end
