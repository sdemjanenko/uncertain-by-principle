---
layout: post
title: Postgres 10 Statistics
---

One of the cooler articles I found recently was about Postgres 10's multi-column [statistics](https://www.citusdata.com/blog/2018/03/06/postgres-planner-and-its-usage-of-statistics/).
It's powerful but gauging when its necessary to use seems like an art. The example from the article is too much of a toy. I wish the real-world section was expanded into a real use-case.

I don't see myself using this much as its only helpful for columns that I want to query on and it is most helpful when it is strongly correlated to another column. In this case, the
multi-column statistics might help since the query planner can more accurately estimate the number of rows that the query execution paths.
