---
layout: post
comments: true
description:
categories: [spring-boot, message-queue]
last_modified_at: 2022-04-27T20:52:08.052481
last-modified-purpose:
permalink: /what-when-to-publish/
title: What and when to publish on message queue
---

TLDR: Publish every business entities on each update/write. [^1]

This is specially true for event driven systems.

Rather than writing code to manually publish after each save, we can make use of event listeners. Event listeners would run a piece of code each time a certain event like database save occurs.

For example: Spring Data Mongo has `AbstractEventListener` and `ReactiveAfterSaveCallback`. 

```java
class SampleEntityDataPublisher implements ReactiveAfterSaveCallback<SampleEntity>{
    Mono<SampleEntity> onAfterSave(SampleEntity entity, org.bson.Document document, String collection){
        return Mono.just(entity)
            .doOnNext(entity-> Mono.just(entity)
                .flatMap(entity-> {
                    // code to publish
                })
                .publishOn(Schedular.elastic())
                .subcribe();
                );
    }
}
```

In above, Spring Webflux code, publishOn and subscribe ensure that publishing will run in a separate thread and doesn't effect execution of the main thread.

[^1]: Anadi Misra