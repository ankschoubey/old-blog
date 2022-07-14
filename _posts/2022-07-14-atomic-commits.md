---
layout: post
comments: true
description:
categories: [clean-code, continuous-integration, commits, code-review]
last_modified_at: 2022-07-14T20:52:08.052481
last-modified-purpose:
permalink: /atomic-commits/
title: Writing better commits with atomic commits
---

# What is the problem with larger commits.

Many developers complete all their feature before commiting and merging. When they commit and merge, 
- their commit is often bulky i.e it is too big
- since it is too big, it often causes merge conflicts
- since it is too big, commit message is often not the best indicator of what the code does.
- since it is too big, there were too many changes, the confidence to merge and expect everything to work fine reduces.
- since it took so long to merge, other developers might have built the same features again.

Often the reason is, that we are afraid to merge and we want to get everything perfect the first time. But this is counter intuitive.

# Why we should do atomic commits?

Atomic commits are frequent commits. 

1. Allows for easily reversing changes
2. Leads to more accurate commit history that can be easily understood by developers.
    - and therefore is easier to review.
3. Small changes are easier to revert than bulky changes.
4. Developers are much more in sync when small commits are merges non-stop.
5. Small commits lead to better sense of progress.

# How to implement atomic commits in practice?

1. Commit and push to `dev` after every completing method/feature.
2. This push should involve both test and code.
3. The commit message should be accurate.
- Each commit should only include small number of changes.
- Use a commit format like conventional commits that seperate different types of commits: 
    - feat: feature
    - refactor: refactoring
    - fix: bug fix
    - doc: documentation
    - ci: continous integration changes
    - build: related to build

In practice, you can assume commiting `feat` atleast once per hour. Other commits types especially `refactor`, `fix` and `doc` might be even more frequent.
