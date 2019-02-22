Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/parties', to: 'parties#index'
  get '/courses', to: 'courses#index'
  get '/absurd', to: 'courses#absurd'
  get '/parties/:id', to: 'parties#show', as: 'party'
  get '/insanelylongurlthatnoonewouldeverwanttouseortypeout', to: 'parties#index', as: 'easy'
  #verb url address, to controller action, as the name of variable + _path
  get '/anything', to: 'courses#weird', as: 'cool'
end
