---
layout: post
comments: true
description: A template that would unify
categories: [testing, clean-code]
last_modified_at: 2022-03-19T20:52:08.052481
last-modified-purpose:
permalink: /method-when-should/
title: Writing cleaner tests with method/when/should blocks
---

# Problem Description

Often tests code style is ignored. Having different coding styles makes it harder to write quality tests. Tests quality is as important as code. This post explores a effective template I developed to help write cleaner tests and keep them uniform.

method/when/should block is perfect companion for TDD, is language agnostic and can be easily used with templating features like IntelliJ's live template.

# method/when/should blocks

there are 3 main blocks. each block in nested within parent block.

**method** block

- **WHEN** block
  - **SHOULD** block
    - given/when/then mini-blocks

# Description of each block

**method block**: is name of method. all tests related to a particular method will be within this block.abstract

**WHEN block**: describes the condition over a method.

**SHOULD block**: describes the assertion.

**given/when/then mini-blocks**: helps keep tests clean

# Examples

1 - **We are creating a method which inserts new value if id does not exists in database else updates existing value.class**

**upsert* method

- WHEN value exists
  - should update value
- WHEN does not exists
  - should insert new value

2 - **We have a UI components which should message "No Content" if data items is not present. Else it shows a list of item names**

**displayItems** method

- **WHEN** data is not present
  - **SHOULD** display "No Content"
- **WHEN** data exists
  - **SHOULD** display list of item names

# Template for JUnit

<script src="https://gist.github.com/ankschoubey/ea3cb41308c19f56c69eb40d7e05cec1.js"></script>