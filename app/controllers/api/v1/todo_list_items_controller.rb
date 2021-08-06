# frozen_string_literal: true

module Api
  module V1
    class TodoListItemsController < Api::V1::BaseController
      before_action :load_todo_list

      def index
        render json: @todo_list.todo_list_items.completed_last, status: :ok
      end

      def show
        render json: @todo_list.todo_list_items.find(permitted[:id])
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

      def destroy
        if todo_list_item.present?
          render json: todo_list_item.destroy, status: :ok
        else
          render json: {}, status: :not_found
        end
      end

      private

      def load_todo_list
        @todo_list = TodoList.find_by(id: permitted[:todo_list_id], user: current_v1_user)
      end

      def todo_list_item
        @todo_list.todo_list_items.find_by(id: permitted[:id])
      end

      def permitted
        params.permit(:id, :todo_list_id, :description)
      end

      def item_params
        params.permit(:description, :completed_at, :notes, :due_date)
      end
    end
  end
end
