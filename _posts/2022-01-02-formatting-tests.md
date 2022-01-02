---
layout: post
comments: true
description:
categories: [clean-code]
last_modified_at: 2021-09-23T20:52:08.052481
last-modified-purpose:
permalink: /formattig-test-cases/
title: Formatting Test Cases
---

# Group Tests Together

You should group your tests together. Junit and Jest both allow for grouping of tests.

Example:

JUnit:

```java
class MainTestClass

    @Nested
    @DisplayName("Group of tests")
    class MethodNameTests(){

        @Test
        @DisplayName("Test Name")
        class tests{
            ...
        }
    }
```

Jest:

```js

describe("Group of tests", ()=>{

    it("test name", ()=>{


    })
})

```

# Create mock objects globally

Your tests should be as small as possible. So create mock objects which are used in every tests globably.

In Junit you can have @BeforeEach and @BeforeAll annotations to have methods run before each test case or test class.

# Mock object names

In case I am testing a positive response, I usually name variable as such.

example:
- idealHttpHeader
- goodFuture

If it's a bad response,

Example:
- badHttpHeader
- badHttpHeaderWithoutContentType
- badFuture

# Display Names: Start with "should"

This makes you focus on exactly what you are testing

Example: 
- GroupName: Add function
- TestName: Should work with negative values
- TestName: Should work with positive values
- TestName: Should work with floating point values
- TestName: Should raise exception if input null

# Given When Then

Given When then is how most tests are written.

Start the tests which fixing the input values and mocking -> Given
Call the function in test -> when
Assert Responses -> then

# Time complexity of tests shoud be O(1) [^1]

Cyclomatic time complexity of your tests should be O(1).
- No loops
- No if statements

[^1]: [The 3 Types of Unit Test in TDD](https://www.youtube.com/watch?v=W40mpZP9xQQ)