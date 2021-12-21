---
layout: post
comments: true
description:
categories: [web-development, draft]
last_modified_at: 2021-09-23T20:52:08.052481
last-modified-purpose:
permalink: /typescript-typed-interfaces/
title: "Typescript tip: Typed API Interfaces/classes "
hide: true
image: /images/n-plus-one.svg
---
![](/images/switch-jobs.jpg)

## Writting Steps

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

Types in typescript are optional by default. I am a advocate for allows having strict mode enabled in typescipt but even if you don't use strict mode, there is one place where having types is most useful.

When using typescript frontend with a backend, there a useful default behaviour that is very useful.

Create types entities in typescript for all APIs and connectors.

This shoud be exact replica or what the response format is.

Have it is a same folder.

The reason to this. Connectors are most important part for the application. It's better to have stricky types interfaces doing the heavy load so that no one can change it for fun.

So if you are sending a ResponseDTO from Spring Boot backend, make sure you have the same structure class/interface in typescript to catch that response in.

If you have a typescript backend with something like Next.js, this task would be easier since you can just reuse classes/interface.