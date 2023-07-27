Rails.application.routes.draw do
  resources :reviews, only: [:index, :show, :create, :update,:destroy]
  resources :orders, only: [:index, :show, :create, :update,:destroy]
  resources :users, only: [:index, :show, :create, :update,:destroy]
  resources :admins
  resources :beverages, only: [:index, :show, :create, :update,:destroy]
  resources :dishes, only: [:index, :show, :create, :update,:destroy]
  resources :restaurants, only: [:index, :show, :create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
