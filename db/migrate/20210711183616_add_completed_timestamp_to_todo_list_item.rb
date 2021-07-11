class AddCompletedTimestampToTodoListItem < ActiveRecord::Migration[6.1]
  def change
    add_column :todo_list_items, :completed_at, :datetime
  end
end
