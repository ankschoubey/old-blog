---
layout: post
comments: true
description: Notes from Avoiding Reactor Meltdown
categories: [dev]
last_modified_at: 2022-08-14T20:52:08.052481
last-modified-purpose:
permalink: /encapsulate-blocking-reactive-way/
title: Encapsulate Blocking Call the Reactor Way
toc: true
---

The one rule you aren't allowed to break with project reactor is this: Don't Block over Event Loop!

Event loops are main threads that shouldn’t be blocked. 

If there is a blocking code, they should be run on a separate thread.

Here are some ways to fix these issues that I have noted down while watching Avoiding Reactor Meldown video. I have added an additional tip at the end.

## Use BlockHound to find blocking calls during testing

BlockHound is a plugin provided by Project Reactor that helps find blocking calls.

If you are doing TDD, use junit version. 

If you are aren't doing TDD, use normal version but remove it in prod.

https://github.com/reactor/BlockHound

Remember that blockhound will only detect blocks on main thread. This means that if you are writing junit tests, if blocking call is not made on event loop, then it won’t be detected.

# Avoid Significant Work Before Subscribe

# Always look for async implementations

Completable futures can be converted to mono. Many java libraries have completable future implementations.

## Encapsulate blocking calls

![Screenshot_2022-07-17_at_12.23.22_PM.png](https://trello.com/1/cards/62d3b3432dae600b8db5d7f4/attachments/62d585b52e381a43331ded5a/download/Screenshot_2022-07-17_at_12.23.22_PM.png) 

![Screenshot_2022-07-17_at_12.22.57_PM.png](https://trello.com/1/cards/62d3b3432dae600b8db5d7f4/attachments/62d585b266fbbc5ae9751808/download/Screenshot_2022-07-17_at_12.22.57_PM.png) 

## Find if a method is reactive

![Screenshot_2022-07-17_at_12.24.19_PM.png](https://trello.com/1/cards/62d3b3432dae600b8db5d7f4/attachments/62d5826d1010e7165d435b8c/download/Screenshot_2022-07-17_at_12.24.19_PM.png) 