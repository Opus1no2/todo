# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TodoListItem, type: :model do
  let(:todo_list_item) { build(:todo_list_item, description: nil) }
  let(:without_list) { build(:todo_list_item, todo_list: nil) }

  describe 'validations' do
    it 'must have a description' do
      expect(todo_list_item).not_to be_valid
    end

    it 'must belong to a todo list' do
      expect(without_list).not_to be_valid
    end
  end
end
