---
layout: post
comments: true
description: My experience implementing Kanban Principles.
categories: [lean, agile, systems]
last_modified_at: 2022-08-20T20:52:08.052481
last-modified-purpose:
permalink: /implementing-kanban/
title: Developing Healthy Habits Around Kanban Board
toc: true
image: /images/implementing-kanban.svg
---

# What is Agility?

Agility means working in small and delivering in small increments frequently. Following a set of values and principles that allow this and make it easier.

# Why be a bit more Agile?

After rejecting TDD-BDD for years, I switched camps too it. Now is the same moment with Agile.

I'm very passionate about Continous Deployment. To work towards continuous deployment requires improving engineering quality and processes surrounding SDLC. Therefore, Agile.

By being more agile, we can increase our delivery speed and ensure people are in sync and have a certain disciplined way of working.

While Agile is a set of values and principles, there are frameworks to implement it, most popularly, scrum. There is a similar set of values principles, called lean, whose most popular implementation is Kanban. [^2]

# What is Kanban?

Kanban is multiple things [^1]:
1. Tool
2. Principles
3. Framework

This post is going to focus on Tools and principles.

# What are some Kanban principles? How do they look in practice?

## Board is the single source of truth.

Everything is visible on the board. And everyone works off from the board.

The board should keep track of each and everything you do.

Each activity, however small, should be captured.

Each workflow step should be present. Therefore board structure needs to be updated regularly too.

Kanban is visual. And the way it is helps everyone in a team be in sync. And reduces handover.

In practice,
- You’ll likely see and use and update the Kanban board multiple times a day.
- And the start and end of your day will be on the board.

Here are few more tips I came up with to help in this.
- I prefer keeping the board open in a tab at all times. And working off the board.
- I transfer all items in personal todo’s to the board.
- In every commit: I capture card details and how much time I spent on that card. And after each commit, I update the card with time.

For teams,
- Teams can play a game: it's called "Moment of Glory" [^1]

Moment of Glory is a game where anyone in the team can ask someone about the board. If that card isn't updated or in the right column, it's a moment of glory, and the facilitator or the person updates the card.

## Pull System

Think of every work item as a release.

Your goal is to work on a work time and make sure that cumulative turnaround time is the least.

Once you start working on a work time, pull it until it is released.

You always work on the rightmost card assigned to you and push it towards completion.

The card/task which gets completed and on production is of must higher value than the 50% done card.

In practice,
- Look at the board, look at the right most items and start working on them first.
- If you have a new task, add a card to the start of the board (the backlog) but don't start working on it just yet. Come back to your current card and finish it.

[^1]: [Development That Pays](https://www.youtube.com/c/Developmentthatpays)
[^2]: [Vibhor Chandel](https://www.youtube.com/c/VibhorChandel)