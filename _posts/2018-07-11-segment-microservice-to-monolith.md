---
layout: post
title: Segment's Microservices to monolith
---

Segment had a great blog [article](https://segment.com/blog/goodbye-microservices/) yesterday.
It got me thinking about the decisions we have made a Meraki. We never went the route of
microservices because coordinating the shared libraries between them is challenging.

One of the biggest challenges we identified was handling database migrations which affect
shared libraries. A single DB change could force every microservice to upgrade. The effect
of this could be worse if a microservice hadn't upgraded the shared library to a version that
had a breaking change. This could result in microservices slowing down our ability to iterate.

We have been pretty successful with our monolith releasing ~10-50 code changes a day and running
~2-5 migrations a week.

