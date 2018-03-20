---
layout: page
title: Javascript workers in Cloudflare
---

I recently stumbled upon a new Cloudflare feature: [service workers](https://blog.cloudflare.com/cloudflare-workers-unleashed/) in the cloud.
This feature seems really awesome as one can now programmatically respond with workers much closer to the user. While these workers wouldn't
be able to help in the case where I wanted to load uncached dynamic data, they can give me much more control over the caching behavior. I also
find it really awesome that I can upgrade all these workers in 30 seconds everywhere.

I haven't used this feature yet, but I look forward to playing with it.
