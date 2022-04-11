Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "home#index"
  # devise_for :users, controllers: { sessions: 'users/sessions' }

  namespace :api do
    namespace :v1 do
     get 'current_user', to: 'users#current_user'
    end
  end
end
