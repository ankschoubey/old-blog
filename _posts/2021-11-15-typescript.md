---
layout: post
comments: true
description: A much better alternative to Javascript
categories: [web-development]
last_modified_at: 2021-12-01T20:52:08.052481
permalink: /typescript
title: Typescript
image: /images/typescript.svg
last-modified-purpose: More details added
---
![](/images/typescript.svg)

Typescript is probably my favorite programming language. Switching from typescript to javascript should save around 60% of a developers time.

There are many reasons for it which I'll try to present in this post.

## Typescript

Typescript is a super set of Javascript which means everything which is available in Javascript is automatically available in Typescript.

Typescript only adds a few extra features which are convenient for developers.

## Typechecks

Probably the main reason to use typescript is this.

Having typechecks remove unneccesary errors. Types makes code more predictable. 

Dynamically typed programming language have bad IDE support.

VS Code has fantastic support for Typescript with typeaheads which are and will probably always be missing with Javascript.

## Everything is configurable.

Every typescript project has a "tsconfig.json" file which can be used to control everything typescript can do.

These include but are not limited to:
- Where to put the final output
- Ability to choose how strict the language is aka enable/disable following
    - null checks
    - any assignments
    - etc
- Shortcut paths

## Typescript compiles to JS

You don't miss anything with typescript because in the end it compiles down to javascript. 

You can choose which version of javascript to compile into from `tsconfig.json` file.

## Typescript works fantastically with many libraries are framework.

Both major web libraries (React and Angular) support typescript.

## How to transition from js to ts.


[^1]: Fireship.io
[^2]: Typescript.com
[^3]: Guide of transitioning