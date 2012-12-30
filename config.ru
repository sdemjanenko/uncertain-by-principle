require 'rack/jekyll'
require 'newrelic_rpm'

run Rack::Jekyll.new(:destination => 'public')
