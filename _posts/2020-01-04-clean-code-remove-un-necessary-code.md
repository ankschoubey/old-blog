---
toc: true
layout: post
description: 
categories: [Medium]
title: Clean Code  Remove un-necessary code
---

#### Clean Code #5: You ain’t gonna need it

# Declare the local variable as close to where it is used and remove un-necessary once

Local variables declared at some different place makes it harder to read the code.

#### Example:

Below are the variations of aRandomFunction which does a bunch of operations (skipped by dots) and on completion returns “Hello” along with the date.

![Bad](https://cdn-images-1.medium.com/max/2460/1*yBofrSKN3WXW_Oq6QRl75A.png)

The local variables **names** and **date** are declared on top of the functions.

The first usage of the functions are somewhere between the function and the last usage is in the return statement.

![Better. 2 lines saved.](https://cdn-images-1.medium.com/max/2464/1*YbM60pelUstwFe8ZCL5H0Q.png)

Here **name** and **date** variables are moved to where they are first used.

Let’s say after moving we realize that we do not use the variables between the code, we just use it during return.

So we should move it near the return statement:

![Even Better](https://cdn-images-1.medium.com/max/2492/1*_g_xXB8xxDdRzR0gD9V5Ng.png)

---

# Just return it. Don’t store

Continuing from the previous example:

Storing in a variable is un-necessary is it is never used.

Rather than storing “hello” in name and a new date in date, we should just return it.

![](https://cdn-images-1.medium.com/max/2360/1*wqoNb-hREM8MBHGWegcrCg.png)

---

# Remove commented code

In case you do need to refer to the exact code you can always check it in your version control.

---

# Remove functions and variables which you do not use.

---

# Variable argument lengths

#### Python: \*args, \*\*kwargs (more than just variable-length argument)

Java also has an implementation for [variable length arguments](https://www.youtube.com/watch?v=BFL1oWnEO2k) but they are not as elegant as Python implementation. Therefore, a list as an argument might be better suited.

<iframe
                width="854"
                height="480"
                src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FWcTXxX3vYgY%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWcTXxX3vYgY&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FWcTXxX3vYgY%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

---

# Default Arguments

Python and Typescript both support default function arguments.

While not officially supported in Java, one can work around the builder pattern to get similar functionality.

![Source: [Managing Constructor with many parameters](https://stackoverflow.com/questions/222214/managing-constructors-with-many-parameters-in-java/222295#222295).](https://cdn-images-1.medium.com/max/1976/1*65elTS-r8MhBnBzn50i8bQ.png)

---

# Use annotations/decorators

Annotations extend the functionality of your function dynamically and reduce the size of the code dramatically.

#### Python: Decorators

In python, these are called decorators.

Python 3.7+ also has **@ dataclass **annotation which auto-generates constructor, **str** and **repr**.

**_Relevant Links:_**

- [_Primer on Python Decorator_](https://realpython.com/primer-on-python-decorators/)

- _Source: `[functools](https://docs.python.org/2/library/functools.html#module-functools)` — Higher-order functions and operations on a callable object_

- [_The Ultimate Guide to Data Classes in Python 3.7_](https://realpython.com/python-data-classes/)

- [_Method Types in Python OOP: @classmethod, @staticmethod, and Instance Methods_](https://www.youtube.com/watch?v=PNpt7cFjGsM)

#### Spring Boot (Java)

![Source: [Spring Annotations Cheat Sheet](https://www.jrebel.com/blog/spring-annotations-cheat-sheet)](https://cdn-images-1.medium.com/max/7016/1*UZgaWM6WjlE6j0tzCm7Ivg.png)

#### Java: For JPA

No need to write @Column over your entity’s variables. By default, camelCase is substituted with snake_case.

_lookupId => lookup_id_

You can change these using [naming strategies](https://www.baeldung.com/hibernate-naming-strategy).

---

#### Java: Map using Mapper. Don’t create your own logic.

There are many [mapping frameworks in Java](https://www.baeldung.com/java-performance-mapping-frameworks) that can make the task of converting one object to another much much easier. This can be especially helpful when you want to convert your @Entity to a DTO object.

---

#### Java: Project Lombok to avoid boilerplate

> Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java.

> Never write another getter or equals method again, with one annotation your class has a fully featured builder, Automate your logging variables, and much more.

- @Getter and @Setter

- @NonNull

- @ToString

- @EqualsAndHashCode

- @Data

- @Cleanup

- @Synchronized

- @SneakyThrows

The good thing is that it is present is [SpringInitializer](https://start.spring.io/). Just click the Project Lombok option.

With this, the size of your java code will reduce dramatically.

---

# Remove duplicates

Linters will provide you a list of duplicate codes. Shove it into a function/method.

#### Use existing/inbuilt methods rather than new once

This goes back to not inventing new algorithms. If something is already made, don’t make it again. Reuse it. _(Link — Clean Code: [Know thy complexities](https://medium.com/@ankushchoubey/clean-code-know-thy-complexities-data-structures-and-avoid-inventing-algorithms-especially-for-43dfcff10bcd))_

**Probably a bad example #1 of reuse:**

Below is a very complex function. One of them works with List and other with an array but that is the only difference in implementation.

The bad approach is creating the same logic to work with different data structures.

![](https://cdn-images-1.medium.com/max/2848/1*RwNJk3iwPScWSw0KuWPVUg.png)

A better approach is to have one main logic function and convert one data structure to another and then call the main one.

![](https://cdn-images-1.medium.com/max/2612/1*L0wdkUD47mykqLn_0wbBcw.png)

We can also take advantage of having the same name for both the functions which means less to remember.

![](https://cdn-images-1.medium.com/max/2400/1*wC5NtBC4Io4DHBGRkF_QkA.png)

**Probably a bad example #2 of reuse:**

This is similar to the above.

Here suppose you already have a complex function that works on a list of integers, and now you have to make a similar one to work on a single int.

![](https://cdn-images-1.medium.com/max/2408/1*qHyXmv_8rI0cFrVB3O6PGw.png)

---

# Single line boolean evaluation

![](https://cdn-images-1.medium.com/max/3008/1*xTyrFXVpPHzjkOv4yMhTIQ.png)

---

# Think in terms of Streams

Streams make your code really really tiny and give much better performance. Streams do have a learning curve but are worth it.

_(swap in a stream() for parallelStream() and you just went Super Saiyan 3)_

<iframe
                width="854"
                height="480"
                src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Ft1-YZ6bF-g0%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dt1-YZ6bF-g0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Ft1-YZ6bF-g0%2Fhqdefault.jpg&key=d04bfffea46d4aeda930ec88cc64b87c&type=text%2Fhtml&schema=youtube"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

Though the implementation of Java streams and having a single line list comprehension in Python are very different, they are similar in terms of style of code.

<iframe
                width="854"
                height="480"
                src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FAhSvKGTh28Q%3Ffeature%3Doembed&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAhSvKGTh28Q&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FAhSvKGTh28Q%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

---

# Create and use base classes

Base classes are an excellent way to avoid duplications. Make them as generic as possible.

---

**Previous**: [Make database do the heavy lifting](https://medium.com/@ankushchoubey/clean-code-4-make-the-database-do-the-heavy-lifting-88178a1c3a16)

**Next**: [Avoid inventing algorithms and data structures](https://medium.com/p/43dfcff10bcd)

**Index**: [Tips on writing Clean Code](https://medium.com/p/30d717f32ae4)