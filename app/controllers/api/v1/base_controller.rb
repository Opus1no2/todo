# frozen_string_literal: true

module Api
  module V1
    class BaseController < ApplicationController
      respond_to :json

      before_action :authenticate_v1_user!

      rescue_from ActionController::RoutingError, with: :render_not_found

      def render_not_found
        render json: {}, status: :not_found
      end
    end
  end
end
