---
layout: post
title: "Fairness is hard"
---

There has been a lot of discussion lately concerning machine learning models
that are treating people unfairly. While this isn't just limited to ML, the
speed of development and abstractions that hide the real people impacted by
decisions are operating at a scale never experienced before.

## What is fairness?

I used to work at Cisco Meraki, a company that started out making cloud managed
networking hardware. One of the more interesting problems our firmware teams
worked on (I was not involved) was fairly dividing up WIFI capacity among many
WIFI devices in a room.

Let us consider the example of a college lecture room with 10 students. Each
student has a laptop and a phone. The room has a single WIFI access point (the
device that provides WIFI). The 20 student devices all need to share the single
access point.

How do we fairly optimize this system? There are two parts to this question:
fairness and optimization. How do we define fairness? And how do we then
optimize the system?

WIFI is complex because it involves transmitting radio signals through the air.
If we are near each other, my transmissions will interfere with your
transmissions. To avoid this we either need to be transmitting at different
times or at different frequencies.

For our example, the 20 devices are in the same physical space (the room) and are
transmitting on the same frequency (that the WIFI radio is using). In order to
achieve fairness, the access point must slice up time, giving different blocks of
time to different devices.

Each device may have different speeds with which it can transmit and receive.
Some devices may be transmitting louder than others (because of physical
proximity to the access point). Some students may be playing a video game while
others are downloading a document. The gaming students want lower latency while
the students downloading documents want better bandwidth. The optimization of
this system is complex and highly dynamic as it changes based on what each user
is doing, the capability of their devices and the physical environment.

How do we decide to hand out time slices to each device? Do we give each device
an equal amount of time? Do we give each device an equal amount of bandwidth,
giving slower devices more time? How do we handle bad devices? If the system
attempts to give all devices the same bandwidth, a device that operates at 1
KB/s would get 1024x longer than a device that operates at 1 MB/s. Is it fair if
a bad device can effectively take down the system?

## Fairness is hard

I don't mean to "solve" this problem. There are many academic papers on this
very subject, many of which are implemented in the WIFI standard. I want to
highlight that the process of making the world fair is both vague and difficult
to achieve.

I recently read "Weapons of Math Destruction" in which the author Cathy O'Neil
discusses models that grade job candidates. These models are often entirely
statistical; they attempt to judge a candidate based on how that candidate
compares to a population. While these models may be "optimized" in that the
candidates that they score highly are more likely to do well in the job, the
models often "miss" candidates that would do well because the candidate doesn't
fit the standard model. Is this fair?

We have found ourselves in this situation because, in part it is much easier to
measure the "optimization" of a model than it is to measure the fairness of a
model. "Solving" the WIFI fairness problem is much easier than fairly grading
job candidates; there are fewer variables, we can simulate the physics and we
can run real-world experiments.

We need to take George Box's maxim to heart: "All models are wrong, but some are
useful". Be vigilant for ways in which your models might be wrong *AND* unfair.
When evaluating job candidates, I look for reasons to say yes, not for reasons to
say no. It is safe to say that automatically grading a person from a score
without any human intervention is *NOT* fair.
