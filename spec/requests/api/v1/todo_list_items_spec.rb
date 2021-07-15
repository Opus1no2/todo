require 'rails_helper'
require 'devise/jwt/test_helpers'

RSpec.describe "Api::V1::TodoLists", type: :request do
  let(:user) { create(:user) }
  let(:todo_list) { create(:todo_list, user: user) }
  let(:headers) { { 'Accept' => 'application/json', 'Content-Type' => 'application/json' } }
  let(:auth_headers) { Devise::JWT::TestHelpers.auth_headers(headers, user) }

  describe "GET /index" do
    context "authenticated user" do
      it "returns a 200" do
        get "/api/v1/todo_lists/#{todo_list.id}/items", headers: auth_headers

        expect(response).to have_http_status(:ok)
      end
    end

    context "unauthenticated user" do
      it "throws a 401" do
        get "/api/v1/todo_lists/#{todo_list.id}/items", headers: headers

        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
