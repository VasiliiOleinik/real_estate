Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'bookmarks/index'
      get 'bookmarks/show'
      get '/user', to: 'users#show'
      post '/signup', to: 'users#create'
      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
      post 'image', to: 'images#create'
      post 'image/destroy', to: 'images#destroy'
      resources :estate, only: [:index, :show, :create]
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  match '*path', to: 'application#not_found', via: :all

  # Defines the root path route ("/")
  # root "posts#index"
end
