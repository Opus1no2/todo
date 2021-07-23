# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::TodoLists', type: :request do
  let(:user) { create(:user) }
  let(:create_params) { { todo_list: { description: 'test' } } }
  let(:auth_headers) { user.create_new_auth_token }

  describe 'GET /index' do
    context 'with auth token given' do
      it 'returns a 200' do
        get '/v1/todo_lists', params: {}, headers: auth_headers

        expect(response).to have_http_status(:ok)
      end
    end

    context 'without auth token given' do
      it 'throws a 401' do
        get '/v1/todo_lists'

        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'POST /create' do
    context 'with a description' do
      before do
        post '/v1/todo_lists', params: create_params, headers: auth_headers
      end

      it 'returns a new todo list' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns a description' do
        expect(response.body).to include('test')
      end
    end
  end
end
