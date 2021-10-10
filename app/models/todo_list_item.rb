# frozen_string_literal: true

class TodoListItem < ApplicationRecord
  validates :todo_list, presence: true
  validates :description, presence: true

  belongs_to :todo_list

  scope :daily_list, lambda {
    where(completed_at: DateTime.current.beginning_of_day...DateTime.current)
      .or(where(completed_at: nil))
      .order(completed_at: :desc, created_at: :desc)
  }
end
