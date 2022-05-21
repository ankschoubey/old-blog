---
layout: post
comments: true
description:
categories: [distributed-systems, draft]
last_modified_at: 2050-09-23T20:52:08.052481
last-modified-purpose:
permalink: /no-of-pieces/
title: Reduce the number of moving peaces in a distributed system
---


<sub>Why we tend to over-engineer?</sub>

Any kind of over-engineering, distributed systems or not, happen because we try to solve scenarios without facing it. 

It is a premature optimization.


<sub>What happens when we over engineer?</sub>

We drastically increase development and maintenance cost.

If X works well enough with good enough performance, it isn’t worth dividing it up into Y and Z until it’s needed.

You should think in terms of keeping code together.


<sub>Why we should aim to keep code together?</sub>

A kind of anti-micro service step. Aim to keep code together until you find a good enough reason to break. 

This is why I advocated previously that I prefer database without stored procedures, functions, etc. CRUD should ideally be enough. If crud isn’t enough maybe database design should be improved.

When it’s worth splitting?
