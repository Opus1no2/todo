# frozen_string_literal: true

Rails.application.routes.draw do
  get '/status', to: 'status#index'

  scope module: :api do
    namespace :v1 do
      resources :todo_lists, only: %i[index create update] do
        resources :items, controller: 'todo_list_items'
      end

      resources :user
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end
end
