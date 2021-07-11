class CreateTodoLists < ActiveRecord::Migration[6.1]
  def change
    create_table :todo_lists do |t|
      t.string :description
      t.belongs_to :user
      t.timestamps
    end
  end
end
