---
layout: page
title: Migrations without downtime
---

I've been reflecting this past week on an excellent blog [article](https://samsaffron.com/archive/2018/03/22/managing-db-schema-changes-without-downtime) from Discourse.

A couple of the points that I have been digesting from this article are:
- It would be helpful if Rail's `schema_migrations` table stored a lot more information.
- Dropping columns is hard to do. At Meraki we use a solution similar to Discourse.
  We have a `hide_columns` class method which handles this for us. It is neat how
  Discourse does an auto-drop of the column 30 minutes after the migration. I wonder
  what edge cases this could still run into.
- There are lots of edge cases in migrations that can we caught at migration-time. Whats
  the best approach and is it something that we can get a community consensus on?

If you have time, check out the Strong migrations [gem](https://github.com/ankane/strong_migrations).

