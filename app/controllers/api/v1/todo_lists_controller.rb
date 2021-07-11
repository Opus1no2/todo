class Api::V1::TodoListsController < Api::V1::BaseController
  def index
    render json: TodoList.where(user: current_user).to_json(index_options)
  end

  def index_options
    {
      only: [:id, :description, :created_at]
    }
  end
end
