Rails.application.routes.draw do
  resources :posts
  devise_for :users
  root to: "posts#new"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
