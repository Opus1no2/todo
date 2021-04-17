require 'rails_helper'

RSpec.describe 'Authentication', type: :request do
  let(:user) { create(:user) }
  let(:headers) { { 'ACCEPT' => 'application/json' } }

  before do
    post '/api/login', params: { user: { email: user.email, password: user.password } }, headers: headers
  end

  it 'returns a token' do
    expect(response.body).to include(user.email)
  end

  it 'returns 200' do
    expect(response).to have_http_status(:created)
  end

  it 'returns json' do
    expect(response.content_type).to eq('application/json; charset=utf-8')
  end
end
