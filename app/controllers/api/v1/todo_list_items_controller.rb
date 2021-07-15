class Api::V1::TodoListItemsController < Api::V1::BaseController
  def index
    render json: TodoListItem.where(todo_list_id: params[:todo_list_id])
  end

  def update
    list_item = TodoListItem.find_by!(id: params[:id])
    if list_item.update(description: params[:description])
      render json: list_item, status: :ok
    else
      render json: list_item.errors.messages, status: :unprocessable_entity
    end
  end
end
