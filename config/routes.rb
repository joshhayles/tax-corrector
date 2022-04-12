Rails.application.routes.draw do
  resources :homes
  resources :comps 
  resources :users

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  get '/dashboard', to: 'users#index'
  delete '/logout', to: 'sessions#destroy'

end
