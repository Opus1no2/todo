class Api::V1::TodoListItemsController < Api::V1::BaseController
  def index
    render json: TodoListItem.where(todo_list_id: params[:todo_list_id])
  end
end
