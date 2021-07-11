class TodoListItem < ApplicationRecord
  validates :todo_list, presence: true
  validates :description, presence: true

  belongs_to :todo_list
end
