class CreateTodoListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :todo_list_items do |t|
      t.string :description
      t.datetime :due_date
      t.belongs_to :todo_list
      t.timestamps
    end
  end
end
