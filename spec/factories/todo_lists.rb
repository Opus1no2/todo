# frozen_string_literal: true

FactoryBot.define do
  factory :todo_list do
    user
    description { "description #{SecureRandom.uuid}" }

    trait :with_items do
      todo_list_items { create_list(:todo_list_item, 1) }
    end
  end
end
