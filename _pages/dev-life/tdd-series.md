---
layout: page
title: Test First Test Everything
permalink: /tdd/
---

## Approaching TDD To Become a 5x Developer

### Note: **The series is presently being developed, and you can follow along with the planned chapters as they become available.**

![TDD Flow](/images/tdd.png)

<!-- 

```mermaid!
flowchart LR
    Think[fa:fa-brain Think] --> Test[fa:fa-vial-circle-check Test] --> Code[fa:fa-code Code] --> Refactor[fa:fa-clone Refactor] --> Think
    style Test fill:#EE4B2B,color:white;
    style Code fill:green,color:white;
    style Refactor fill:#007FFF,color:white;
    style Think fill:purple,color:white;
```

 -->

Hi. Welcome to **Testing First Test Everything** series. In this series of articles, you'll learn how you can increase your development skill by 5 times by learning something that ensures:

1. You always produce logical bug-free code.
2. You produce extremely maintainable code.
3. You will code at a fast speed.
4. You produce automatic documentation for anyone else to read.

I was a pretty good developer when I learned TDD, but after I spend around 2-3 months learning TDD, I saw that my coding skills became way too sharp. This series covers the philosophy of TDD along with practical examples.

Try to practice the exercises in the language of your choice and upload them to GitHub 🙂. And if you want just share the link of your repo. I'd love to see it.

The series of posts below is completely free. So, I'd really appreciate it if you share this with your friends via LinkedIn or Twitter, if you find value! This would help get more eyes on the series.

If you have any questions reach out to me either by email or on LinkedIn. And I'll respond. Your questions and feedback would make things better for everyone.

Here's the index

## Prerequisites, Background and Motivation of Testing And TDD

#1 - How to best study the **Test First Test Everything** Series.

#2 - A background of software testing: From manual testing to TDD.

#3 - TDD as a path to becoming a 5x better developer. Everything under control: My tests work!

#4 - TDD: The AHA Movement with TDD

#5 - **[Philosophy Testing in Other Areas Beyond Software](https://www.ankushchoubey.com/testing/)**: Testing serves as essential insurance, safeguarding accuracy and progress by identifying issues efficiently through frequent, automated processes, much like double-entry bookkeeping.
- **[Question Driven Writing](https://www.ankushchoubey.com/question-driven-writing/)**: Improving quality and speed of writing by transferring a well-known software development practice.

#6 - This post will be re-written: **[Human Intuition while working in Technology](https://www.ankushchoubey.com/human-intuition/)**

#6 - Developing a Testing Mindset

## TDD Level 1: Beginner

#1 - This article will be refactored! **[Understanding the three laws of TDD in Depth](https://www.ankushchoubey.com/making-tdd-easy/)**

#2 - Role of Language and Clear Thinking in Software Development and Tests

#3 - **[Thinking and writing cleaner tests with method/when/should blocks](https://www.ankushchoubey.com/method-when-should/)**: A template for thinking and creating understandable uniform tests

#4 - **[Backend Hands-on: Case of Upsert](/tdd-backend-example)**: Learn the foundation of TDD with a simple example explained in depth.

#5 - How to make TDD natural?

#5 - Should you care about test coverage when doing TDD?

#6 - What to test exactly?

#7 - Switching between test and code rapidly.

## TDD Level 2: Intermediate

#1 - Prefering guard Clause when doing TDD, focus on unhealthy paths first.

#2 - How is TDD related to BDD?

#3 - Special Focus on designing with TDD

#4 - **[Pre-save Data Validation](https://www.ankushchoubey.com/pre-save-data-validation/)**: Data validation at various stages minimizes bugs and unnecessary overhead, ensuring consistent and accurate information flow.

#5 - **[Avoid Mocks and understand the blurry lines between Unit and Integration Tests](https://www.ankushchoubey.com/bluring-line-between-unit-integration-test/)**: The distinction between unit and integration tests blurs with embedded implementations, combining accuracy from both while overcoming limitations of traditional mocks and infra-heavy integration tests.

#6 - **[Writing cleaner tests with Test Data Factories](https://www.ankushchoubey.com/test-data-factories/)**: Consolidating object creation, mock of methods and more.

#7 - **[Writing cleaner tests with creative variable names](https://www.ankushchoubey.com/creative-variable-names/)**: Creative variable names in tests can make them fun and interesting to read.

#8 - **[Writing Cleaner tests with Fluent Assertions](https://www.ankushchoubey.com/fluent-assertions/)**: Fluent Assertions make tests highly readable and English-like, presenting a concise structure that simplifies comprehension

#10 - **[TDD over JSON](https://www.ankushchoubey.com/tdd-over-json/)**: TDD Example that saved around 2 hours

#11 - **[JUnit Template For Tracking Bugs in Unit Tests](https://www.ankushchoubey.com/v1/junit-bug-tracking)**

## TDD Level 3: TDD With time

#1 - **[Whenever you encounter a bug](https://www.ankushchoubey.com/encounter-a-bug/)**

#2 - **[My current approach to TDD](https://www.ankushchoubey.com/current-tdd-approach/)**

## TDD Level 3: Red Flags and Tools 🚩

#1 - TDD Red Flag: Why you shouldn't even start your application during development?

#2 - TDD Red Flag: I'll write the TDD later

#3 - TDD Tools: Jest

#4 - TDD Tools: React

#5 - TDD Tools: Spring Boot

#6 - **[Speeding Up Spring Boot/JUnit tests](https://www.ankushchoubey.com/spring-boot-junit-faster/)**: From 8 minutes to less than 3 minutes.

## TDD Level 4: Testing Everything++

#1 - **[How to test interfaces, abstract classes and design patterns?](https://www.ankushchoubey.com/testing-design-patterns/)**: Testing interfaces, abstract classes, and design patterns efficiently can be tricky since parents and children depend on each other. We can write tests to eliminate these dependencies during the test time, making our tests very short and decoupled.

#2 - **[Automate Validation of Your Configurations](https://www.ankushchoubey.com/v1/validate-configuration)**: With TDD, you don't find any logical bugs. The remaining types of bugs are data bugs and configuration bugs. This article discusses configuration validations to find and fix config bugs.

#3 - **[Increasing Maintainability within a team by enforcing Architecture with Architecture Testing](https://www.ankushchoubey.com/architecture-testing/)**: Architecture is a crucial pillar of accelerating product delivery. It's hard to keep a team in sync with architecture over time. Architectural testing can enforce architectural decisions as simple tests, dramatically reducing code review effort and extending code maintainability.

## TDD Level 5: BDD

#1 - **[The Gist of Behavior Driven Development - BDD](https://www.ankushchoubey.com/bdd/)**: The process that keeps everyone in sync

#2 - **[The need for executable specifications](https://www.ankushchoubey.com/need-for-executable-specification/)**: Ideas shape development; specs sync teams; Gherkin tests ensure precision.

#3 - **[Writing better BDD specifications](https://www.ankushchoubey.com/writing-better-specs/)**

#4 - **[You are really doing BDD when](https://www.ankushchoubey.com/v1/you-are-following-good-bdd-when)**

#4 - [**BDD vs UI/UX/TDD** - Understanding the Key Differences for Customer-Centric Problem Solving](https://www.ankushchoubey.com/v1/bdd-vs-tdd)

## Beyond TDD

#1 - My journey before and after

#2 - [**Promoting TDD within a Team**](/promote-tdd-in-a-team): Promoting TDD within a team requires patience, consistent effort, and a focus on creating a positive and supportive environment for learning and improvement.

#3 - To be refactored: **[Going forward; Testing Everything](/after-tdd)**

#4 - **[Ideal Development Workflow](https://www.ankushchoubey.com/dev-workflow/)**: From card picking to release

#5 - **[Mutation Testing](https://www.ankushchoubey.com/mutation-testing/)**

#6 - **[Chaos Engineering](https://www.ankushchoubey.com/chaos-engineering/)**: A powerful way to increase resilence of a system

