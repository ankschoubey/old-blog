---
layout: post
comments: true
description:
categories: [testing, clean-code]
last_modified_at: 2022-06-25T20:52:08.052481
last-modified-purpose:
permalink: /creative-variable-names/
title: Write cleaner tests with creative variable names
---

Variable and method names provide a context that makes it easy to understand a piece of code. 

Typically in code it's enough to have the same variable name as the class name.

So for example, if you have a `User` class, the object name could be `user`.

```java
User user = new User(request.getFirstName(), request.getLastName());
```

This looks good for in code but gets messy in tests. Specially when there are multiple instances of the same object.


```java
User user1 = new User("user 1 first name", "user 1 last name", ...10 other fields...);
.
.
.
User user2 = new User("user 2 first name", "user 1 last name", ...10 other fields...);
.
.
.
// someAssertionThatUses user1 And user2
```

A better approach is to use a TestData class which I have described in a separate blogpost

```java
User user1 = UserTestData.Given.aUser("user 1 first name", "user 1 last name");
.
.
.
User user2 = UserTestData.Given.aUser("user 2 first name", "user 1 last name");
.
.
.
// someAssertionThatUses user1 And user2
```

In the above statement, having the factory `UserTestData.Given.aUser` encapsulates creation making test a bit cleaner.

But still at the end of the test in the assertions section the coder will have to remember what the data in `user1` and `user2`

A better way is to have creative variable names here.

```java
User tonyStark = UserTestData.Given.aUser("Tony", "Stark");
.
.
.
User steveRoggers = UserTestData.Given.aUser("Steve", "Roggers");
.
.
.
// someAssertionThatUses tonyStark And steveRogers
```

Now within assertion the developer will know exact data in both the `User` objects. 

This not only makes tests more cleaner, but makes them funny and interesting to read.
