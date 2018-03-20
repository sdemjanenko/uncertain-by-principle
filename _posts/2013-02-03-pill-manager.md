---
layout: page
title: Pill Manager
---

I have begun work on a input selector modification library. It will be very much like Chosen/Select2.
Chosen is a great library and was ahead of its time and is a beautiful solution for multiselects as well as
large single selects.

My two biggest complaint with Chosen are:
- size, ~23kb minified
- DOM removal on click events make it hard to capture click events by selector in parent nodes

Instead of making a monolithic widget, I am creating a few small UI pieces and then delegate out to them in the final chosen replacement.
Pill Manager is the first piece that is close to completetion.

I really love the Chosen multi-select solution where there is an input box and as you select elements, pills are formed and the input box expands.
I wanted to be able to use these pills elsewhere.

For example, imagine clicking in the input box that drops down a form with a few inputs.  I would then like to serialize the form into the pills
such that the rest of the page just needs to work with the pills and does not need to know how the complex form works.

Pill Manager is my solution to this problem. Check it out on [Github](http://sdemjanenko.github.com/PillManager "PillManager on Github")

I welcome comments and pull requests. Thanks!
