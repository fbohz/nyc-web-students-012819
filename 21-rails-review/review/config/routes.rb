Rails.application.routes.draw do
  resources :puppies, except: :destroy
  resources :shelters
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  delete '/puppies/:id/adopt', to: 'puppies#adopt', as: 'adopt'
end
