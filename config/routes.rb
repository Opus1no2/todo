Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }
  get '/status', to: 'status#index'
end
