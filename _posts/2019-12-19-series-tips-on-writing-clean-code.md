---
toc: true
layout: post
comments: true
description: 
categories: [Medium]
title: Series  Tips on writing Clean Code
---

TLDR: Clean code — **constructing the simplest possible code** that would solve your problem resulting in an increase in productivity by producing higher quality in less time.

### I’m not a great programmer; I’m just a good programmer with great habits

~Kent Beck (Creator of Extreme Programming)

---

I started writing this as a single post but the number of paragraphs much so like any good programmer I decided to release in chunks.

These come from a series of notes I took since I was in college.

The attributions are lose. I did not think about writing a post while taking notes.

I will do by best to find the authors and link to their work when I find them any time in the future. Most of these came for searching for keywords like “clean code {language}”.

Some ideas I found while experimenting on my own.

---

# Usually building a software looks like this

You start small. But by the time you reach halfway, it becomes chaotic.

![[https://bonkersworld.net/img/2011.11.15_building_software.png]({{ site.baseurl }}/images/2019-12-19-series-tips-on-writing-clean-code/1.png)

# Reading vs Writing Code

While coding we spend more time reading the existing code than writing the code. We can estimate the ratio to be something like **10:1**.

Most of the time you are more likely to modify and improve your code than to produce a new functionality.

![([https://sizovs.net/2019/05/29/quality-is-not-negotiable/]({{ site.baseurl }}/images/2019-12-19-series-tips-on-writing-clean-code/2.png)

For something we spend the most time on, it is very important that we make the process of reading and understanding our code easier for ourselves and other developers.

# Why do we write bad code?

1. Work needed to be done fast

1. Tired of project/work

1. Requirement changed

1. Managers

1. WE — Developers

### Work, for now, will clean up later

If we don’t follow good coding guidelines, we risk initial coding speed for long term code quality and productivity.

Usually, once you start on a path you are more likely to continue on the same path.

![TODO: Some YouTube attribution #FA (Also need to find a sharper image)]({{ site.baseurl }}/images/2019-12-19-series-tips-on-writing-clean-code/3.png)

# What is Clean code?

Constructing the simplest possible code that would solve your problem.

#### Benefits

- Problems become easier to solve since code is modular.

- Less time is wasted on maintenance since lines of code are less.

- Ideas are more clearly communicated.

- Unit Test cases are much smaller and easier to write.

- Making changes is much faster.

- Pleasing to your eyes 👀.

---

# The actual Guidelines aka Index

> [**Clean Code #1: Flat is better than nested && Leave when not okay**](https://medium.com/@ankushchoubey/clean-code-1-flat-is-better-than-nested-leave-when-not-okay-c09ba74090ef)
>
> <small></small>

> [**Clean Code #2: Leave Clues (Naming convention)**](https://medium.com/@ankushchoubey/clean-code-2-leave-clues-naming-convention-89932c18abac)
>
> <small></small>

> [**Clean Code 3: Avoid creating god classes and long methods**](https://medium.com/@ankushchoubey/clean-code-3-avoid-creating-god-classes-and-long-methods-f3d76b1b622a)
>
> <small></small>

> [**Clean Code 4: Make the database do the heavy lifting**](https://medium.com/@ankushchoubey/clean-code-4-make-the-database-do-the-heavy-lifting-88178a1c3a16)
>
> <small></small>

> [**Clean Code: Remove un-necessary code**](https://medium.com/@ankushchoubey/clean-code-remove-un-necessary-code-c477707e5be1)
>
> <small></small>

> [**Clean Code: Know thy complexities, data structures and avoid inventing algorithms (especially for…**](https://medium.com/@ankushchoubey/clean-code-know-thy-complexities-data-structures-and-avoid-inventing-algorithms-especially-for-43dfcff10bcd)
>
> <small></small>

> [**Clean Code: Exception handling**](https://medium.com/@ankushchoubey/clean-code-exception-handling-a7bca1e66d9e)
>
> <small></small>

> [**Clean Code: Leave it better than you found it**](https://medium.com/@ankushchoubey/clean-code-leave-it-better-than-you-found-it-604c7e06235d)
>
> <small></small>

---

# Other Relevant Links

#### Linters

SonarLint is good for most cases.

- Python: **SonarLint** or PyLink

- Java: **SonarLint** or Sonar Cube

- Typescript: TSLint

#### Domain/Language-specific tips

- For Deep Learning/Machine Learning: [fastai coding style](https://docs.fast.ai/dev/style.html)

- Java: [Google Java Style Guide](http://Google Java Style Guide)

- Python: [pep8](https://realpython.com/python-pep8/) or [Google Python Style Guide](http://google.github.io/styleguide/pyguide.html)

- [Angular official style guide](https://angular.io/guide/styleguide)

#### Natural next steps:

- Design patterns: [Design patterns for Humans](https://github.com/kamranahmedse/design-patterns-for-humans) and [Java Design Patterns in Stories](https://www.programcreek.com/java-design-patterns-in-stories/)

- [Anti-Patterns](https://sourcemaking.com/antipatterns)

- [Falsehoods](http://Awesome Falsehood)

- The Clean Code Book

- Cleaner REST APIs: [RESTful API Designing guidelines — The best practices](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9)

- [Microservices](https://microservices.io/articles/applying.html) and Micro frontend.