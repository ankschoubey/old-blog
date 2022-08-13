---
layout: post
comments: true
description: From card picking to release
categories: [dev]
last_modified_at: 2022-08-12T20:52:08.052481
last-modified-purpose:
permalink: /dev-workflow/
title: Ideal Development Workflow
toc: true
---

This is a value-stream mapping exercise in an effort to reduce cognitive overload and enable continous improvement.

Ideally, all these steps can be columns on a Kanban Board.

```mermaid!
graph TD
    subgraph BDD
    A[1. Read BDD specifications related to the card] --> B
    B[2. Update specifications]
    end

    subgraph Planning
    B --> planCommits
    planCommits[3. Plan with atomics commits] --> estimateCommits
    estimateCommits[4. Estimate each commit time with POMODOROs] --> estimatePlannedFinishDate
    estimatePlannedFinishDate[5. Add planned finished date the card] 
    end

    estimatePlannedFinishDate --> |move card| pomodoro

    subgraph code[TDD with Pomodoro]
    pomodoro[6. Remove all distractions and start pomodoro session] --> tdd
    tdd[7. start incrementally with TDD and commit/push each atomic commit]--> pomodoro
    end
    
    tdd --> |development done| deploy
    deploy[8. Deploy feature on environment and move card] --> pullRight
    pullRight[9. Pull right the card till Accepted]
```

1. BDD
    1. Read BDD specifications related to the card
    2. Update specifications
2. Planning
    1. Break down card into atomic commits
    2. Estimate each commit with pomodoros
    3. Add planned finish date to the card
3. Coding
    1. Remove all distractions
    2. Move card to In-progress lane
    3. Start the [pomodoro timer](https://lazy-guy.github.io/tomodoro/index.html)
    4. Start working incrementally with TDD. Commit and push non-stop.
4. Release
    1. Manually deploy if there is no CD pipeline 
    2. Pull card towards right until accepted
    3. At end of each day, fill in card timesheet activity.