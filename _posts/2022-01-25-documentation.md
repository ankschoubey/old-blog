---
layout: post
comments: true
description:
categories: [clean-code]
last_modified_at: 2021-09-23T20:52:08.052481
last-modified-purpose:
permalink: /documentation/
title: Documenting Code
image: https://docs.google.com/drawings/d/e/2PACX-1vS1EYND3yzq_zmJEZ1rEJogTD9tbXucE2k33rcUYIVTcA2ZQZlYfPf_MSVk8kvHZhjcKo7fByRiXFpy/pub?w=453&amp;h=723
---

We ideally want to write code so good that someone reading the code can understand it in one go.

But ideal isn't always practical in real world because people come from different background and have different levels of experience.

So, you want to make sure your documentation is as perfect as possible given to scope of the project.

![](images/2022-01-25-documentation/shared-between-single-team-multiple.png)

<img src="https://docs.google.com/drawings/d/e/2PACX-1vS1EYND3yzq_zmJEZ1rEJogTD9tbXucE2k33rcUYIVTcA2ZQZlYfPf_MSVk8kvHZhjcKo7fByRiXFpy/pub?w=453&amp;h=723">

These are a few things I have learned recently:

1. Best way to document is automate

Tools like Swagger for APIs and storybook from UI components make it very easy to auto-document code in most cases.

2. Encourage use of your own documentation

Using your own documentation would help you find and fix bugs in it. 

For example: You could encourage your team to use Swagger UI instead of Post Man for testing APIs.

3. For within the team: Have a shared wiki

This helps keep everyone in sync and line previous point encourages updationw wherever neccessary.

4. Tests written is also a documentation of sort but for internal team only.

Tests capture what the code would do. So for a new dev on a team, going and reading through tests can give him an idea of what all can be done.