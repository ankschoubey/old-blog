---
layout: post
comments: true
description:
categories: [testing, clean-code]
last_modified_at: 2022-05-03T20:52:08.052481
last-modified-purpose:
permalink: /fluent-assertions/
title: Writing Cleaner Tests with Fluent Assertions
---

Your tests should be very easy to read essentially english like. There are multiple techniques to achieve this.

One of the ways in having fluent assertions.


# Fluent Assertions

Fluent assertions are assertions chained together. The structure is such that it makes it more concise and easy to read.

We'll take an example comparing Junit assertions with AssertJ assertions.

In the below example, we are checking if a Map contains specific keys, and if date is correct.

**JUnit Assertion**: Not fluent


```java
Map<String, String> jsonMessage = {someServiceCallReturningAJson};

// JUnit Assertions: Not Fluent
Set<String> expectedKeys = new HashSet<>(Arrays.asList("date", "userId", "randomField"));
Assertions.assertEquals(expectedKeys, jsonMessage.keySet());
Assertions.assertEquals("2001-07-04", jsonMessage.get("date"));

// AssertJ: Fluent Assertions
assertThat(jsonMessage)
    .containsKeys("date", "userId", "randomField")
    .containsEntry("date", "2001-07-04");
```

The JUnit assertion is bulkier and will continue to get much bulkier with more assertion.

The AssertJ fluent assertion on other hand is grouped, contains helper methods that do not require specially conversion of object for common comparision.

