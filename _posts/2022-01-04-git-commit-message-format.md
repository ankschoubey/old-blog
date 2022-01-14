---
layout: post
comments: true
description:
categories: [clean-code, draft]
last_modified_at: 2021-09-23T20:52:08.052481
last-modified-purpose:
permalink: /git-commit/
title: Having Better Git Commits
hide: true
image: /images/n-plus-one.svg
---
![](/images/switch-jobs.jpg)

## Writing Steps

If I write from POV that how I got the this idea and how I thought about it, readers will know thinking behing an idea and not just the preachiness. Plus, I'll always have the right words to write.

| Task                        | Done |
|-----------------------------|------|
| Structure Done              | N    |
| Thoughts Written            | N    |
| Thoughts Edited             | N    |
| Grammar Check Done          | N    |
| Perfect Grammarly Score:    | N    |
| Image Added  https://www.canva.com/                | N    |
| Links to Other Posts if Any | N    |
| Tags Added                  | N    |
| Released Publically         | N    |

Git is the defacto standard of version control in 2021. By having good git practices, we make it easy for:
- Understanding and sharing knowledge
- Code reviews
- Easily reverting changes




I want to make sure that commit messages are easy to read and understand.

So I want to have a structure to them. I found a gem of an article which compares initial commits in spring to latest ones. -> https://cbea.ms/git-commit/


There must be many structures which I would later update in the post. Right now I am sticking to these.


1. Prepend with story tag/identified
2. commit message format:

Limit the subject line to 50 characters. 72 chars max

Capitalize the subject line
Imperative mood just means “spoken or written as if giving a command or instruction”. A few examples:

A properly formed Git commit subject line should always be able to complete the following sentence:

If applied, this commit will your subject line here






feat: The new feature you're adding to a particular application
fix: A bug fix
style: Feature and updates related to styling
refactor: Refactoring a specific section of the codebase
test: Everything related to testing
docs: Everything related to documentation
chore: Regular code maintenance.[ You can also use emojis to represent commit types]


feat: The new feature you're adding to a particular application
fix: A bug fix
style: Feature and updates related to styling
refactor: Refactoring a specific section of the codebase
test: Everything related to testing
docs: Everything related to documentation
chore: Regular code maintenance.[ You can also use emojis to represent commit types]



https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/