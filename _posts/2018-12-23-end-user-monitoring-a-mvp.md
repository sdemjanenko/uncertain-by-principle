---
layout: page
title: "End-user monitoring: a MVP"
---
Over the past few months at Meraki I have built an end-user monitoring tool. Our goal is to
track when a webpage is "usable" by the user. We have defined "usable" to mean that the DOM
is rendered and the data is loaded for the primary view. For complex apps with multiple frameworks
in use (such as the Meraki Dashboard) it can be difficult to get a perfect measurement on this
metric. Moreover, this metric is certain to be impacted by what a user is trying to accomplish
on the pageload.

#### The MVP

At the start we didn't have much data (other than Google Analytics) to give us an estimate of what
the end-user experience was. We decided to build an MVP tool and iterate. The current tool consists
of a collector which multiple trackers log to. Each tracker has a single responsibility which makes it
easy to add new trackers. Presently we have trackers for the [Navigation Timing API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API),
initial XHRs (we instrument jQuery AJAX using a prefilter as well as the Fetch API) to capture
all XHRs started prior to the LoadEventEnd timer (and when those XHRs complete) and a tracker
which counts DOM nodes every 100ms and looks for periods of stability in the count. We log
this data back to ElasticSearch using the [SendBeacon API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon).

This MVP has helped convince us that it is possible to build a state of the user's experience on
the client-side and that collecting this state information is much easier to achieve in the browser as
one doesn't need to coordinate logs across multiple services. This approach also allows us to run logic
if we detect that the user is having a poor experience (such as popping up an apology message).

#### Future work

We would like to add trackers that will help us diagnose slow pages:
- long-running functions
- too many XHRs; resulting in blocked requests because of browser-limits
- JS parse timing
- Slow frames
- user interaction timing: how long does it take for the UI to update to a new state?

#### Open-source

Presently our tool is custom but a good open-source library to start with is [uxm](https://github.com/treosh/uxm).
I have not personally tried out this library but intend to early in 2019 when I get back
from vacation. Many of the next steps that I want to take with the MVP I described are
handled by uxm.

#### Insightful articles:
- [Linked-in Measuring and Optimizing Performance of Single-Page Applications (SPA) Using RUM](https://engineering.linkedin.com/blog/2017/02/measuring-and-optimizing-performance-of-single-page-applications)
- [Logs and metrics](https://medium.com/@copyconstruct/logs-and-metrics-6d34d3026e38)



