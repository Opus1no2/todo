# frozen_string_literal: true

require 'rails_helper'

# rubocop:disable Metrics/BlockLength
RSpec.describe 'authentication', type: :request do
  let(:user) { FactoryBot.create(:user) }
  let(:params) { { email: user.email, password: user.password } }

  describe 'login' do
    context 'with correct credentials' do
      before do
        post '/v1/auth/sign_in', params: params
      end

      it 'returns an http success' do
        expect(response).to have_http_status(200)
      end

      it 'returns the user' do
        expect(JSON(response.body).dig('data', 'email')).to eq(user.email)
      end
    end

    context 'with incorrect credentials' do
      let(:params) { { email: user.email, password: 'incorrect' } }

      before do
        post '/v1/auth/sign_in', params: params
      end

      it 'returns an http unauthorized' do
        post '/v1/auth/sign_in', params: params
        expect(response).to have_http_status(401)
      end

      it 'returns success as false' do
        post '/v1/auth/sign_in', params: params
        expect(JSON(response.body).dig('success')).to eq(false)
      end
    end
  end

  describe 'validate token' do
    it 'validates tokens' do
      post '/v1/auth/sign_in', params: params

      get '/v1/auth/validate_token', params: {
        uid: response.headers['uid'],
        client: response.headers['client'],
        'access-token' => response.headers['access-token']
      }

      expect(response).to have_http_status(200)
    end
  end
end
# rubocop:enable Metrics/BlockLength