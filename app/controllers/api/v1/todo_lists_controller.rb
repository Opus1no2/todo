class Api::V1::TodoListsController < Api::V1::BaseController
  def index
    render json: TodoList.where(user: current_user).to_json(index_options)
  end

  def create
    render json: TodoList.create!(create_params.merge(user: current_user))
  end

  def index_options
    {
      only: [:id, :description, :created_at]
    }
  end

  def create_params
    params.require(:todo_list).permit(:description)
  end
end
