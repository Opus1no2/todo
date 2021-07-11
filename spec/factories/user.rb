FactoryBot.define do
  factory :user do
    password { 'password' }
    email { "test#{SecureRandom.uuid}@test.com" }
  end
end
