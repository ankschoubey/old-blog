---
layout: post
comments: true
description: 
categories: [tdd-example]
last_modified_at: 2022-09-08T20:52:08.052481
last-modified-purpose:
permalink: /tdd-over-json/
title: TDD Example - TDD over JSON
toc: true
image: /images/tdd-over-json.jpg
---
![](/images/tdd-over-json.jpg)
Photo by RealToughCandy.com: https://www.pexels.com/photo/man-love-people-woman-11035481/

Somethings TDD isn't straightforward. Here is such a case I faced.

I was developing an app for a third-party service which required data in a particular JSON format.

The particular JSON would render as UI in the third-party app's view.

Here is how I approached it with TDD.

# Step 1: Creating the ideal JSON.

Lucky for me, the third part app had a UI builder to see what the end UI would look. I created the UI and copied JSON into my code.

The UI builder also gave a link which became part of my BDD specs.

# Step 2: Created a Test with JSON Asserts


I followed the method/when/then format to create a test and added the following assertion:

`JSONAssert.assertEquals(expectedJson, actualJson, JSONCompareMode.LENIENT);`

Source: [StackOverflow: The best way to compare two JSON files in Java](https://stackoverflow.com/a/33481923)

Now I know what the final state of my POJO should be. 

I went and updated the POJO to reflect the expected JSON.

Another point of luck for me was that the third-party app had an SDK, so I didn't have to build a custom POJO from scratch. I just had to customize it.