# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::TodoLists', type: :request do
  let(:user) { build(:user) }
  let(:todo_list) { create(:todo_list, user: user) }

  describe 'GET /index' do
    context 'when valid token given' do
      sign_in(:user)

      it 'returns a 200' do
        get "/v1/todo_lists/#{todo_list.id}/items"

        expect(response).to have_http_status(:ok)
      end
    end

    context 'when token not given' do
      it 'throws a 401' do
        get "/v1/todo_lists/#{todo_list.id}/items"

        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
