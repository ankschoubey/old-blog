---
toc: true
layout: post
description: For those who don’t require Google level optimization
categories: [Web Development]
title: Simple Hacks for increasing website load time
comments: true
---
## Reduce bundle size
### Always use compression: at least gzip

gzip is good enough in most cases in terms of both performance and speed.

{% twitter https://twitter.com/ankschoubey/status/1229795313994461187?s=20 %}

## Make less number of requests
### Always cache static content: JS, CSS and static images.

This can be configured in your web server or your application. Just google " "how to cache in <your framework or web server>".

{% include alert.html text="Of course: be sure to not cache dynamic content." %}

**For JS and CSS files, make sure it has a name that is unique if the file is modified.**

Example: in angular after creating a --prod build, the filename is in following format "<filename>.<md5 checksum>.js".

This ensures that if the content of the file changes, the md5 checksum will change and a new request will be sent but if the file does not change then it will have the same checksum so it can be pulled from the cache.

### Always load images lazily


{% twitter https://twitter.com/ankschoubey/status/1219613362239049728?s=20 %}


Advanced tips: [Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video)

## Do it fast

### Fetch JS and CSS asynchronously

{% twitter https://twitter.com/ankschoubey/status/1229793732418920449?s=20 %}

* * * * *

Are there more such easy tips?
------------------------------

Please mention them in the comments and I will add the tip to the list and mention your name.