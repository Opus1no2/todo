class Api::V1::TodoListItemsController < Api::V1::BaseController
  def index
    render json: TodoListItem.find_by(todo_list_id: params[:id])
  end
end
