---
layout: post
comments: true
description: For Chaos Engineering and Continuous Delivery
categories: [chaos-engineering]
last_modified_at: 2022-09-08T20:52:08.052481
last-modified-purpose:
permalink: /response-type-field/
title: Practical Chaos Engineering Part 1 - A responseType field to all response classes
toc: true
---

The inspiration for this blogpost is [API response in a video by Chaos Monkey for Spring Boot](https://youtu.be/7sQiIR9qCdA?t=690)

A common pattern for handling network assaults is Circuit Breaker.

Circuit breaker would replace a network delay or failure code with a fallback code, making the code resilent. 

When using fallback code, often it's important to show the end user that fallback data is being presented.

This can as simple as adding a responseMetadata field within Response of all HTTP status.

```json
{
    content: {
        actualData
    },
    responseMetadata: {
        type: "STALE", // STALE, CURRENT, FALLBACK
        updatedDate: "{dateObject}"
    } 
    ...
}
```

`type` could be 
- `STALE` for old data
- `CURRENT` to indicate the data is current
- `FALLBACK` to indicate that neither CURRENT and STATE both type could not be loaded 

an `updatedDate` field 
- date of when something is updated

The frontend or client could read the `responseMetadata` and show a message to user indicating that old data is being used.

The client could also take further action on `responseMetadata` like polling after a little while until response is `CURRENT`

For most code bases this could be as simple as adding a parent class for all response classes. An ArchUnit test could be written to enforce this behavior.