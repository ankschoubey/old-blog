---
toc: false
layout: post
comments: true
description: DRAFT
categories: [information system]
title: Keeping Web Dev code proper
permalink: /web-dev-clean/
image: /images/web-dev-clean.jpg
---
![](/images/web-dev-clean.jpg)

Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/web-development?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
## Choose a framework which is stable. 

I belive Angular is more stable long term that React which requires too much learning. Less is modified therefore your code will last longer. Atleast it seems that way right now. 

## Make very small modular pieces.

In angular, create components even for small things like img or video tag. You’ll find that there are certain attributes you assign to every img tag that can be taken care of from one place

Seperate app such codes from business logic. You should be able to copy laste these modules into another code base and use it without changes

## Make layout components

These are common layouts you use throughtout the application.  Coding them in once place reduces unnecessary duplications.

## Best way to deal with CSS is to write very less of it.

CSS gets messy fast. By keeping your components small. You are half way there to a good css. 

Also make good use of `display: flex`. It gets most of the job done.

## Best way to keep HTML clutter free is to not write javascript/typecript logic in it

Angular provides a Ts use it for everything good. Even for ngStyle or ngClass. 

This will keep your html very clean.

Create a `get` method to keep things clean.

## Have very few utility classes.

It’s stupid to have too many utility classes spread throughout your codebase. Have only a few at a single place.

Only keep a utility class or method if it is used. Remove unneccesary code.