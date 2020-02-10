---
layout: post
title: "Simpson's paradox"
---

A few months ago while reading Weapons of Math Destruction by Cathy O'Neil I
came across [Simpson's
Paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox). This paradox
highlights how one can innocently arrive at the wrong conclusions when analyzing
a dataset.

Simpson's paradox occurs when a trend in a value for a sample population
disappears or reverses when that value is observed groups within that sample
population.

In 1983, the Reagan administration published a report titled ["A Nation at
Risk"](https://en.wikipedia.org/wiki/A_Nation_at_Risk) that raised a warning
about the declining quality of American schools. This report analyzed of SAT
scores found that the average score in the US had declined.

Seven year later the data was re-analyzed by researchers at Sandia National
Laboratories who found that the initial analysis suffered from Simpson's
paradox."A Nation at Risk" reported that average SAT score had declined. In the
re-analysis, it was observed that when the sample population was broken apart
into groups by socio-economic status there was an increase in scores for each
group. The groups with lower socio-economic status had grown in proportion to
the total sample population (the growth in poor students taking the SAT exceeded
the growth of rich students taking the test). This group had a lower average
score than the wealthier groups. Since their proportion of the sample population
had grown, their lower scores pulled down the overall average.

On the 35th anniversary of the report, NPR's Anya Kamenetz
[reflected](https://www.npr.org/sections/ed/2018/04/29/604986823/what-a-nation-at-risk-got-wrong-and-right-about-u-s-schools)
on its impact. I was surprised that Kamenetz found that the report's authors:
"started out already alarmed by what they believed was a decline in education,
and looked for facts to fit that narrative". The report's authors chose to
emphasis a few statistics and de-emphasis others.

This example highlights the importance of considering the composition of the
sample population when determining the validity of a statistical claim. We need
to guard ourselves against our biases when analyzing statistics.

