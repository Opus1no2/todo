FactoryBot.define do
  factory :user do
    password { 'password' }
    sequence(:email) { |i| "test#{i}@test.com" }
  end
end
