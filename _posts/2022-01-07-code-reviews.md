---
layout: post
comments: true
description:
categories: [software-engineering, clean-code]
last_modified_at: 2021-09-23T20:52:08.052481
last-modified-purpose:
permalink: /code-reviews/
title: Code Reviews and Pair Programming
---
Code reviews allow having a much high quality of code. And pair programming is the best way to do code reviews.

Typically, if less code is being reviewed then more bugs are found. If more code is reviewed, reviewer gets lazy.

10 lines of code: 10 isues
500 lines of code: no issues "looks fine"

So one should air for small and early code review -> continuos code reviews- is this pair programming?

I would say yes.

Nowadays there are also Pair Programming AI like Kite.ai and GitHub Copilot that may be interesting to use.

Some other benigits of pair programming are,

- You get to learn about new techniques like how someone uses their IDE
- You get to learn about the person/team too.
- You get to learn about the code base faster if you are pairing up with someone who has experience with it.

While pair programming is most effective in person, the best way I could find in an online setting is by using remote-destop software that code reviews can interact directly with the code. Screenshare's aren't as effective.

partner will show you more efficient ways of doing things including how to use ide.

It may happen that pairing up isn't ideal and one has to review code later, in that case github/gitlab do provide option to comment on a piece of code. The programmer may submit the code to reviewer for review.

Sources:

- [Pair Programming at Atlassian with Lucy Bain](https://www.youtube.com/watch?v=fQ-x-T34z9w&ab_channel=AtlassianTechTV)