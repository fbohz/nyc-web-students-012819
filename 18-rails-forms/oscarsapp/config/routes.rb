Rails.application.routes.draw do
  resources :awards, only: [:new, :show, :create, :edit]
  # get '/awards/new', to:"awards#new"
  # get '/awards/:id', to:"awards#show"
  # post '/awards', to:"awards#create"



  post 'customrouterighthere', to:"awards#gainz", as:"helpmehelperrouteawesome"
  # get '/charlieisthebest', to:"ali#smort"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


end
