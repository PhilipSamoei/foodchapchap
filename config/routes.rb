Rails.application.routes.draw do
  resources :mpesas
  resources :blogs
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :reviews, only: [:index, :show, :create, :update,:destroy]
  resources :orders, only: [:index, :show, :create, :update,:destroy]
  resources :users, only: [:index, :show, :create, :update,:destroy]
  resources :admins
  resources :beverages, only: [:index, :show, :create, :update,:destroy]
  resources :dishes, only: [:index, :show, :create, :update,:destroy]
  resources :restaurants, only: [:index, :show, :create, :destroy,  :update]
  resources :restaurants do
    resources :dishes, only: :show
    resources :beverages, only: :show
  end


  resources :blogs, only: [:index, :show, :create, :destroy,  :update]

  post "/auth/login", to: "authentication#login"
  post "auth/admin", to: "authentication#admin"
  post "/signup", to: "users#create"
  get "/auth/verify", to: "authentication#verify"
  delete '/auth/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  # post '/payments/create', to: 'payments#create'
  get '/*a', to: 'application#not_found'
  post '/stkpush',to:  'mpesas#stkpush'
  post '/polling_payments',to: 'mpesas#polling_payments'
  # root "articles#index"
end
