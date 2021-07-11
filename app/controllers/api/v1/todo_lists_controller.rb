class Api::V1::TodoListsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: TodoList.where(user: current_user).to_json(index_options)
  end

  def index_options
    {
      only: [:description, :created_at]
    }
  end
end
