# frozen_string_literal: true

FactoryBot.define do
  factory :todo_list do
    user
    description { "description #{SecureRandom.uuid}" }
  end
end
