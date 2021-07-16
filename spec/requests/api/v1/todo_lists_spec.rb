# frozen_string_literal: true

require 'rails_helper'
require 'devise/jwt/test_helpers'

RSpec.describe 'Api::V1::TodoLists', type: :request do
  let(:user) { create(:user) }
  let(:headers) { { 'Accept' => 'application/json', 'Content-Type' => 'application/json' } }
  let(:auth_headers) { Devise::JWT::TestHelpers.auth_headers(headers, user) }
  let(:create_params) { { todo_list: { description: 'test' } }.to_json }

  describe 'GET /index' do
    context 'with auth token given' do
      it 'returns a 200' do
        get '/api/v1/todo_lists', headers: auth_headers

        expect(response).to have_http_status(:ok)
      end
    end

    context 'without auth token given' do
      it 'throws a 401' do
        get '/api/v1/todo_lists', headers: headers

        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'POST /create' do
    context 'with a description' do
      before do
        post '/api/v1/todo_lists', params: create_params, headers: auth_headers
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
