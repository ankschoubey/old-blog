---
layout: post
comments: true
description:
categories: [personal, draft]
last_modified_at: 2021-09-23T20:52:08.052481
last-modified-purpose:
permalink: /sqll-injections/
title: Security and SQL Injections
hide: true
image: /images/n-plus-one.svg
---
![](/images/switch-jobs.jpg)

## Writing Steps

If I write from POV that how I got the this idea and how I thought about it, readers will know thinking behing an idea and not just the preachiness. Plus, I'll always have the right words to write.

| Task                        | Done |
|-----------------------------|------|
| Structure Done              | N    |
| Thoughts Written            | N    |
| Thoughts Edited             | N    |
| Grammar Check Done          | N    |
| Perfect Grammarly Score:    | N    |
| Image Added  https://www.canva.com/                | N    |
| Links to Other Posts if Any | N    |
| Tags Added                  | N    |
| Released Publically         | N    |

o summarize the MongoDB documentation

BSON

As a client program assembles a query in MongoDB, it builds a BSON object, not a string. Thus traditional SQL injection attacks are not a problem.

However, MongoDB is not immune from injection attacks. As noted in the same documentation, injection attacks are still possible as MongoDB operations allow arbitrary JavaScript expressions to be executed directly on the server. The documentation goes into this in detail:

http://docs.mongodb.org/manual/faq/developers/#javascript

https://stackoverflow.com/a/5021531