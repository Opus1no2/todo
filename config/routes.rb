Rails.application.routes.draw do
  devise_for :users

  get '/status', to: 'status#index'
end
