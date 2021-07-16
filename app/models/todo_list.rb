# frozen_string_literal: true

class TodoList < ApplicationRecord
  validates :user, presence: true

  belongs_to :user
  has_many :todo_list_items, dependent: :destroy
end
