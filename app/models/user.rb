# frozen_string_literal: true

class User < ApplicationRecord
  extend Devise::Models

  DEFAULT_LIST_NAME = "Daily"

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  include DeviseTokenAuth::Concerns::User

  has_many :todo_lists, dependent: :destroy

  after_create :create_default_list

  def create_default_list
    todo_lists.create!(description: DEFAULT_LIST_NAME)
  end
end
