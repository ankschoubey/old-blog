---
layout: post
comments: true
description:
categories: []
last_modified_at: 2022-04-13T20:52:08.052481
last-modified-purpose:
permalink: /better-log-messages/
title: Better Log Messages
---

Logs are every important when trying to debug an application. With proper logs, not only will it take less time to debug, it will make your code more understandable.

This post covers server side logs.

***

# When to log

There aren't any good guidelines for when to log.

Logging too much can make your code ugly and slow. Logging to little makes it hard to debug.

These are some places where you may consider logging. 4th is non-compromisable.

There are 4 main places to log:
1. Conditionals -> Log level DEBUG
2. Loops -> Log level DEBUG
3. Major Processes -> Log level INFO
4. Exceptions -> Log level ERROR

***

# Writing better logs messages

Log messages should include the details of variables involved.

For example:

**Bad**: Does not mention variable details

```java

String id = "1";//{some_random_user_input};
String name= "Elon Musk";//{some_random_user_input};
if (repository.existsByIdAndName(id, name)){
    throw new UserDoesNotExistException("User does not exists")
    // Log message: User does not exists
}
```

**Good**: Includes variable details

```java

String id = {some_random_user_input};
String name= {some_random_user_input};
if (repository.existsByIdAndName(id, name)){
    throw new UserDoesNotExistException("User does not exists with id="+id + " name= "+ name);
    // Log message: User does not exists with id=1 name= Elon Musk
}


**Even Better**: Includes variable details as map leading to cleaner log

I find it's even cleaner to print a map with key as variable name and value as actual value;

The result is a output in this format: `{varName1: value1, varName2: value2}`

```java

String id = {some_random_user_input};
String name= {some_random_user_input};
if (repository.existsByIdAndName(id, name)){
    throw new UserDoesNotExistException("User does not exists: " + Map.of("id", id, "name", name));
    // Log message: User does not exists: {id: 1, name: Elon Musk}
}