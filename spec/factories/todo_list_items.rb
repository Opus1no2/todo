FactoryBot.define do
  factory :todo_list_item do
    todo_list
    description { "list item description" }
    due_date { Time.now + 1.day }
    completed_at { nil }
  end
end
