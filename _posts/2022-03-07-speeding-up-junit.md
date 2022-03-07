---
layout: post
comments: true
description:
categories: [spring-boot]
last_modified_at: 2022-03-07T20:52:08.052481
last-modified-purpose:
permalink: /spring-boot-junit-faster/
title: Speeding Up Existing Spring Boot/JUnit tests
---

There are several ways I recently discovered that increase speed on Spring Boot + JUnit tests substantially. From 8 minutes to 3 minutes.

Some of these are

1. Use Right Runner (Saved 25% running time)
2. Run tests in parallel (Saved 37% running time)

***

# Use Right Runner

There are several runners that come with Spring boot. 

`@SpringBootTest` being the most general of them. Mostly this is used in combination with `@DirtiesContent` which will restart spring boot after every test class by default. This isn't ideal.

Using `@SpringBootTest` is Integration Tests. We don't want every test to use this.

We want to load the minimum spring-boot infrastructure as possible and still ensure accurate tests.

There are a few that can be used.

1. If tests are related to a DB. Use `@DataMongoTest` or equivalent JPA runner with `@Import` annotation.
2. If tests are related to Web/Controller. Use `@WebFluxTest` or equivalent Spring MVC runner.
3. **Important**: If tests require initializing a single bean. Use `@ExtendWith(SpringRunner.class)` with `@Import` to specify bean to initialize.
4. If `@SpringBootTest` is required, try to use it in combination with `@Import` or `@ContextConfiguration` to limit beans creation.
5. The best case: Aim for Tests which are purely java based and do not involve spring boot. This ofcourse isn't possible for every scenario.

***

## Run Tests in Parallel

Create a `junit-platform.properties` file in `test/resource/junit-platform.properties` and add following minimum. [^1]

`junit.jupiter.execution.parallel.enabled = true`

Now you can either use one of these,

1. add following to every class you want to run parallel. `@Execution(CONCURRENT)`
2. add more to `junit-platform.properties`

```
junit.jupiter.execution.parallel.mode.default = same_thread|concurrent
junit.jupiter.execution.parallel.mode.classes.default =  same_thread|concurrent
```

![](/images/junit-execution-mode.svg)
[^1]

I prefer first method of using `@Execution(CONCURRENT)` because some of my tests weren't designed to run in parallel.

I found data tests with `@DataMongoTest` by asserting over different data.

Another positive sideeffect of having `@Execution(CONCURRENT)` is that these tests run first. And since these tests are faster, they lead to faster feedback.

[^1]: [Parallel Execution - JUnit Documentation](https://junit.org/junit5/docs/current/user-guide/#writing-tests-parallel-execution)