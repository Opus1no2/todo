# frozen_string_literal: true

class User < ApplicationRecord
  extend Devise::Models

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  include DeviseTokenAuth::Concerns::User

  has_many :todo_lists, dependent: :destroy
end
