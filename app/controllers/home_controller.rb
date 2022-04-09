class HomeController < ApplicationController
    before_action :protect_from_forgery
    before_action :authenticate_user!

    def index
        @message = "Hello World"
    end
end
