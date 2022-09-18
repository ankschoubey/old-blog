---
layout: post
comments: true
description: It's best to start with immutable objects and then modify them if needed.
categories: [concurrent-programming, reactive-programming]
last_modified_at: 2022-09-18T20:52:08.052481
last-modified-purpose:
permalink: /immutable-objects/
title: Making Object Immutable for Concurrency
toc: true
image: /images/immutable-objects.jpg
---
![](/images/immutable-objects.jpg)

<sup>Photo by <a href="https://unsplash.com/@davehoefler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dave Hoefler</a> on <a href="https://unsplash.com/s/photos/stone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></sup>

{% include note.html content="For beginners: Immutable object means objects whose value can't change. Immutability is the intent of the creator of the object/class, i.e. when coding something up, we need to decide if a particular class should be immutable. Also, immutability is as important in the front end as in the back end. While the below posts explain it in Java, other programming languages have their way of implementing immutability." %}

# **Where Immutability is needed?**

When sharing data between threads, there is a high chance that one memory gets replaced by another. This would lead to inconsistency, and often these bugs aren't discovered.

There are two ways to avoid this: thread-safe data structures or immutable objects.

This particular post will explain where immutable objects are necessary.

Suppose you have 2 Rest Endpoints. `/someEndpoint` and `/anotherEndpoint` both set a particular value to the variable `sharedMemory`.

```java
private String sharedMemory;

@PostMapping("/someEndpoint")
void postSomething(@RequestBody String value){
    sharedMemory = value;
    ....
   //some code that uses sharedMemory
}

@PostMapping("/anotherEndpoint")
void postSomethingElse(@RequestBody String value){
    sharedMemory = value;
    ....
   //some code that uses sharedMemory
}
```

It can happen that this shared memory is not inconsistent. 

Ideally, the solution would be, in this case, to declare the variable within the method it is used. 

# **Creating an immutable object**

The creation of immutable objects is relatively simple.
1. Make sure all instance variables are `private final`.
2. make sure all interactions with the method happens only via the constructor or the public method.
No method should modify the contents of the private final method.
3. Make sure all instance variables are immutable.
4. Make sure the class is `final` so that there is no inheriting and subclasses can't override something.

There are some more rules, but these are the minimum requirements. The following section will explain how you automate the checking of immutable classes would also check for more conditions.

# **Java Libraries**

Some libraries help create immutable objects, such as [Immutables for Java](https://immutables.github.io/).

[Google Guava Library](https://github.com/google/guava/wiki/ImmutableCollectionsExplained) provides many immutable data structure alternatives. The benefit of using these is that they have the same interface as regular java collections.

{% include note.html content="It's best to start with immutable objects and then modify them if needed." %}

# **Automating Verification** via Unit Tests

But when developing within a team and given the cognitive overload we developers face, we need some way to automate the creation of immutable objects. This can be done as a combo of 2 methods:

**#1 Mutability Detector**

Mutability Detector is a package that provides the following assertion that can be used within unit tests.

Mutability Detector has many more conditions to detect mutability.

```
    assertImmutable(MyClass.class); 
```

[Github Source](https://github.com/MutabilityDetector/MutabilityDetector)

**#2 Automate further with ArchUnit tests**

ArchUnit tests allow for writing architecture-level tests. We can write a test such as asserting that a class is immutable if a class is annotated with @component.

```java

```

In practice, I couldn't fully make `assertImmutable` work with abstract classes.

# **Resources**

- [Immutable Data Structures are Thread Safe](https://www.youtube.com/watch?v=VO4IGFayJWo)
- [How to Make an Object Immutable in Java](https://www.youtube.com/watch?v=uFxWg3cVMRs)
- [Immutability Library Java](https://immutables.github.io/)
- [Google Guava Immutable Data Structures](https://github.com/google/guava/wiki/ImmutableCollectionsExplained)
- [A Strategy for Defining Immutable Objects](https://docs.oracle.com/javase/tutorial/essential/concurrency/imstrat.html)
- [Mutability Detector In Action](https://www.youtube.com/watch?v=ST3wU79nwS8)

