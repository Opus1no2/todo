require 'rails_helper'

RSpec.describe TodoList, type: :model do
  let(:todo_list) { build(:todo_list, user: nil) }

  describe "validations" do
    it "validates user" do
      expect(todo_list).to_not be_valid
    end
  end
end
