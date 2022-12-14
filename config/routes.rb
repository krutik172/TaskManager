Rails.application.routes.draw do
  devise_for :users
  root "static#home"
  resources :tasks 
  post "tasks/:id/toggle", to: "tasks#toggle"
  get '/autocomplete' , to: 'tasks#autocomplete'
  get '/home', to: 'static#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
