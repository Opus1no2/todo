# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.3'

gem 'bcrypt', '~> 3.1.7'
gem 'bootsnap', '~> 1.1', '>= 1.1.7'
gem 'devise_token_auth'
gem 'factory_bot_rails'
gem 'pg', '~> 1.1'
gem 'puma', '5.3.2'
gem 'rack-cors'
gem 'rails', '~> 6.1.3', '>= 6.1.3.1'
gem 'webpacker'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'pry'
  gem 'rspec-rails', '~> 5.0.0'
end

group :development do
  gem 'listen', '~> 3.3'
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec', require: false
  gem 'spring'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
