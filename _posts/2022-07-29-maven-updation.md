---
layout: post
comments: true
description: 
categories: [maven, build-tool, automation]
last_modified_at: 2022-07-24T20:52:08.052481
last-modified-purpose:
permalink: /maven-dependency-upgrade/
title: Tips on fixing and upgrading Maven Dependencies
image: /images/maven-dependency-upgrade/header.svg
---
![Maven Logo From Wikipedia](/images/maven-dependency-upgrade/header.svg)


Updating dependencies is important. Reasons could be:
- your SAST scan found a list of vulnerable dependancies
- you want to keep up with the latest.

Here are few things that could make the process easier.

# Update dependencies in parent

If dependencies in the parent can’t be updated exclude and update the child.

If you are excluding do write a comment mentioning why you are excluding and if/when to remove the exlusion.

If dependency cannot be upgraded, find a different package specially if it's a security problem.

# Find child dependies easier with Maven Helper plugin for IntelliJ

It can be hard to know the subdependiencies of a dependency. [Maven Helper](https://plugins.jetbrains.com/plugin/7179-maven-helper) plugin creates a tree that can help.

It has options to exclude dependies too.

![Maven Helper IntelliJ Plugin](/images/maven-dependency-upgrade/maven_helper.png)

# Run automated tests after updation

Having a good automated test suit helps elevate the risks involves with updation of any kind. 

Run all your automated tests to verify if change to dependies is making the code break.



# Automate updation

This can be automated by using a maven plugin like [Versions Maven Plugin](https://www.baeldung.com/maven-dependency-latest-version)

A pipeline job can be run where version is auto-updated and merged to `dev` branch if tests are passed. :)