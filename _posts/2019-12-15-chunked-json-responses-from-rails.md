---
layout: post
title: "Chunked JSON responses from Rails"
---

In my time as a Rails developer at Cisco Meraki, we built many API endpoints that
could return 10-100 MB of data. A naive approach would be to construct the JSON response
in a controller and attempt to render that. Depending on the response size this could
result in an out-of-memory error. We used several patterns over the years to avoid this.

## Enumerator approach

One pattern was rendering an Enumerator instance as the response body.

```ruby
class UsersController < ApplicationController
  def index
    response_enumerator = Enumerator.new do |yielder|
      yielder << '['

      first_element = true
      User.all.find_each do |user|
        yielder << ',' unless first_element
        yielder << {id: user.id, value: user.name}.to_json
        first_element = false
      end

      yielder << ']'
    end

    headers['Cache-Controller'] = 'no-cache'
    headers['Last-Modified'] = Time.now.utc.httpdate
    headers['Content-Type'] = 'application/json'
    self.response_body = response_enumerator
  end
end
```

The web server (Unicorn, Puma, ...) then [executes](https://github.com/defunkt/unicorn/blob/5e3d05997769dd270123b9c2479938704de078de/lib/unicorn/http_response.rb#L58)
the enumerator until there are no more chunks.

```ruby
def http_response_write(socket, status, headers, body, req = Unicorn::HttpRequest.new)
  ...
  if hijack
    req.hijacked!
    hijack.call(socket)
  else
    body.each { |chunk| socket.write(chunk) } # Body could be an Enumerator instance
  end
end
```

This allows us to generate a large response by building it in many smaller chunks.
This also has the added benefit of allowing our reverse proxy to send these chunks to a client
as they are built, effectively starting the data transfer sooner.

## View template approach

One downside of the Enumerator approach is we now need to manage the logic of closing arrays and objects and adding commas in order to produce
valid JSON. Another drawback is each time we call `yielder <<` we are defining a chunk. The server then needs to write that chunk to the
client's socket which can slow down performance if we have lots of small chunks.

We would like to write our code such that we can generate chunks of the right size to balance the risk of OOMs against the
latency of many round-trips to the DB. The framework should then batch up these chunks into response chunks of the optimal
size to write to the client's socket.

### [Turbostreamer](https://github.com/malomalo/turbostreamer)

This is an awesome libary which was forked off jbuilder. With Turbostreamer we can write a view template to generate a JSON
response. Internally Turbostreamer will [buffer](https://github.com/malomalo/turbostreamer/blob/master/lib/turbostreamer/encoders/oj.rb#L14)
the chunks into the appropriate sizes for writing to the client's socket.

```ruby
# views/users/index.json.streamer

json.array! do
  User.all.find_each do |user|
    json.object! do
      json.id user.id
      json.value user.name
    end
  end
end
```

with which our controller now becomes:

```ruby
class UsersController < ApplicationController
  def index
    render layout: false, formats: [:json]
  end
end
```

Moving the response construction logic to the view template greatly reduces the size of the controllers. It also allows us
to test the view in isolation.

## Notes
 - When supporting a chunked transfer encoding make sure your reverse proxy connects to your server using HTTP 1.1 or greater.
 - RSpec controller tests behave as if the client's connection is HTTP 1.0.
 - RSpec's `response.body` accessor does not decode chunked transfer encodings by default.

## Resources
- [Chunked example](https://github.com/sdemjanenko/newrelic_rpm_sample_streaming_app)
- [Stream CSV Files In Rails Because You Can](https://link.medium.com/ZNbrTYgoM1) by Noel Rappin
- [Turbostreamer](https://github.com/malomalo/turbostreamer)
