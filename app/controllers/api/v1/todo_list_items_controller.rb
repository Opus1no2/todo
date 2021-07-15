class Api::V1::TodoListItemsController < Api::V1::BaseController
  def index
    render json: todo_list.todo_list_items, status: :ok
  end

  def update
    if todo_list_item.update(description: permitted[:description])
      render json: todo_list_item, status: :ok
    else
      render json: todo_list_item.errors.messages, status: :unprocessable_entity
    end
  end

  private

  def todo_list
    @todo_list ||= TodoList.find_by!(id: permitted[:todo_list_id], user: current_user)
  end

  def todo_list_item
    @todo_list_item ||= todo_list.todo_list_items.find_by!(id: permitted[:id])
  end

  def permitted
    params.permit(:id, :todo_list_id, :description)
  end
end
