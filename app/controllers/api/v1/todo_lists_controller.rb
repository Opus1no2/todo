# frozen_string_literal: true

module Api
  module V1
    class TodoListsController < Api::V1::BaseController
      def index
        render json: TodoList.where(user: current_v1_user).to_json(list_as_json)
      end

      def create
        render json: TodoList.create!(list_params.merge(user: current_v1_user))
      end

      def update
        todo_list = TodoList.find_by(id: params[:id])

        if todo_list.present? && todo_list.update(description: list_params[:description])
          render json: todo_list.to_json(list_as_json), status: :ok
        else
          render json: {}, status: :not_found
        end
      end

      def list_as_json
        {
          only: %i[id description created_at]
        }
      end

      def list_params
        params.require(:todo_list).permit(:description)
      end
    end
  end
end
