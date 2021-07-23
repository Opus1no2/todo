# frozen_string_literal: true

module Api
  module V1
    class TodoListItemsController < Api::V1::BaseController
      before_action :load_todo_list

      def index
        render json: @todo_list.todo_list_items, status: :ok
      end

      def update
        if todo_list_item.update(item_params)
          render json: todo_list_item, status: :ok
        else
          render json: todo_list_item.errors.messages, status: :unprocessable_entity
        end
      end

      def create
        render json: @todo_list.todo_list_items.create!(item_params)
      end

      private

      def load_todo_list
        @todo_list = TodoList.find_by!(id: permitted[:todo_list_id], user: current_v1_user)
      end

      def todo_list_item
        @todo_list.todo_list_items.find(permitted[:id])
      end

      def permitted
        params.permit(:id, :todo_list_id, :description)
      end

      def item_params
        params.require(:todo_list_item).permit(:description, :completed_at)
      end
    end
  end
end
