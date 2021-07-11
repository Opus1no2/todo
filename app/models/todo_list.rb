class TodoList < ApplicationRecord
  validates :user, presence: true

  belongs_to :user
  has_many :todo_list_items
end
