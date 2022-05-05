---
layout: post
comments: true
description: Details about breaking user story added
categories: [business, agile]
last_modified_at: 2022-05-05T20:52:08.052481
last-modified-purpose:
permalink: /user-stories/
title: Thoughts & Notes on User Stories
---

I have had a love-hate relationship with Agile. The reason has likely been I didn't realize it's effectiveness.

These are my thoughts and notes on User Stories. I hope to improve and expand on these ideas in upcoming months.

# User Stories

The goal with user story is to deliver the best value in smallest/most efficient package.

This would void un-neccesary rework, make sure we start the story at the right time and help make estimate for how much work can be done within a fixed time.

The lessons one can gain from creating user stories, splitting, making DOD, making DOR, etc are all transferable skill to personal planning as well.

# Writing User Stories

Guiding phrases help narrow focus. 

The description can be phrased this way.

```java
    As a <user>
    I want <outcome>
    so that <business>
```

Often `<outcome>` can be used as story title.

# User Story and a Technical Task

By the symantic of it, user story is about something a end user wants. So user stories map to features that effect users.

While developing there are also other tasks such as database migration, job creation, etc that aren't user stories. These are technical tasks.

It's better to classify it separetly so that a business user doesn't get confused by it.

A user story needs to have executable spec (BDD). Technical Tasks don't.

# Breaking User Stories

There are two major story breaking ways:

- Horizontal 
- Vertical

Horizontal can be thought of as breaking a story by type of activies involved like database, user interface, middleware, etc. This isn't ideal. 

Vertical 

Breaking vertically means to break by functionality instead of by activity.

So it could be a functionality is itself a mixture of 2-3 smaller functionalities. We could break it as such.

# Definition Of Ready and Breaking Down

Definition of Ready is when it's right to start a user story. We don't want to have a lot of context switches because it reduces productivity.

U-INVEST

INVEST is a good acronymn to start with to decide how big story should be.

- Independent: Is the story dependent on any other story?
- Negotiable
- Valuable
- Estimatable
- Small : Is the story atomic or does it contains multiple sub-stories?
- Testable

The invest remains same as sizing of stories.

The U is for User Interface.

I found there are other things involved here too, like:

- API : if it's an API, you may want to do API First Development
- Learning : is there any learning involved?

# Definition of Done

Defination of done is when we can say the story ended.

The following I believe is must.

- TDD followed
- Deployed
- Product Owner Accepted Story

