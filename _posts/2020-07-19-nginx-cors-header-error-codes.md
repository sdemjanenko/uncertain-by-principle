---
layout: post
title: "Configuring NGINX to set CORS on 40x and 50x responses"
---

While working on an application that uses NGINX to set CORS headers, I noticed that my
browser would warn about CORS whenever my backend app returned a 40x or 50x status
code. After looking at the NGINX docs for
[add_header](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header),
I noticed:

>Adds the specified field to a response header provided that the response code equals 200, 201 (1.3.10), 204, 206, 301, 302, 303, 304, 307 (1.1.16, 1.0.13), or 308 (1.13.0).

This explained why responses with a status code in the 40x or 50x range were
running into CORS errors. The fix is to set the `always` flag:

```
add_header 'Access-Control-Allow-Origin' $allowed_origin always;
```

Doing this for all the CORS headers fixed the problem. My web code now receives
error responses. This allows me to show actionable error messages to users.

