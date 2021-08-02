class AddNotesToTodoListItems < ActiveRecord::Migration[6.1]
  def change
    add_column :todo_list_items, :notes, :string
  end
end
