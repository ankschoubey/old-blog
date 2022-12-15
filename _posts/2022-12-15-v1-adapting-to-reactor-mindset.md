---
layout: post
comments: true
description: 
categories: [concurrency]
last_modified_at: 2022-12-15T20:52:08.052481
last-modified-purpose:
permalink: /v1/webflux-mindset
title: Adapting to Project Reactor / Webflux Mindset
---

## Don't block. Ever

## Return the reactive chain

Make sure return time is always a Mono or flux.

Until something is part of the return chain tree, it won't be executed.

## Don't throw error in a reactive chain. Use Mono.error instead

Instead of:

```java
.flatmap(pojo-> {
    throw new RunTimeException();
})
```

use:

```java
.flatMap(pojo-> {
    return Mono.error(new RuntimeException());
}
```
