---
layout: post
comments: true
description:
categories: [clean-code, draft]
last_modified_at: 2021-09-23T20:52:08.052481
last-modified-purpose:
permalink: /organize-test-casest/
title: Post Format
hide: true
image: /images/n-plus-one.svg
---
![](/images/switch-jobs.jpg)

## Writting Steps

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



Organising tests

Clean tests are as important as clean code. Same kind of principles apply here.

1. Test only what is neccessary
2. Keep code clean

while TDD, is shown to keep test cases to a minimum, this post explains some other ways tests can be organize

Group tests on a method together

In JUnit 5 you can use @NestClasses
In Jest you can use describe 

This would make it easier to find your tests

Have a global stub objects

Rather than create objects in every test method,
create a dummy stub and use it in all subsiqueny tests

Example in spring boot

class RandomTest{

final static String stub = "Used throughout"

@Nested
@DisplayName("Display Name")
class IntegerRandom{

}
}

Use @BeforeEach/@Before all

Size of tests should be less than size of your display

This is a useful guideline which applies to a method too.

Have good variable names

if it is a variable which is bad, prefix it with bad

