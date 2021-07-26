# frozen_string_literal: true

class TodoListItem < ApplicationRecord
  validates :todo_list, presence: true
  validates :description, presence: true

  belongs_to :todo_list

  def self.completed_last
    order(completed_at: :desc, created_at: :desc)
  end
end
