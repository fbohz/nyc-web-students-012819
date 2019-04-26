Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :stocks, only: [:index, :purchase]
      
      # login
      post '/login', to: 'auth#create'
      get '/auto_login', to: 'auth#auto_login'

      # signup
      post '/users', to: 'users#create'
      
    end
  end
end
