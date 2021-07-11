Rails.application.routes.draw do
  devise_for :users,
    defaults: { format: :json },
    path: '',
    path_names: {
      sign_in: 'api/login',
      sign_out: 'api/logout',
      registration: 'api/signup'
    }

  get '/status', to: 'status#index'

  namespace :api do
    namespace :v1 do
      resources :todo_lists, only: [:index, :create] do
        resources :items, controller: 'todo_list_items', only: [:index]
      end
    end
  end
end
