Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :reviews, only: [:index, :show, :create, :update,:destroy]
  resources :orders, only: [:index, :show, :create, :update,:destroy]
  resources :users, only: [:index, :show, :create, :update,:destroy]
  resources :admins
  resources :beverages, only: [:index, :show, :create, :update,:destroy]
  resources :dishes, only: [:index, :show, :create, :update,:destroy]
  resources :restaurants, only: [:index, :show, :create, :destroy,  :update]
  # Defines the root path route ("/")
  post '/auth/login', to: 'authentication#login'
  delete '/auth/logout', to: 'authentication#logout'

  get '/*a', to: 'application#not_found'
  # root "articles#index"
end
