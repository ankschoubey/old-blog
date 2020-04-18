---
toc: true
layout: post
comments: true
description: 
categories: [Medium]
title: Simple Hacks for increasing website load time
---

#### For those who don’t require Google level optimization

# Reduce bundle size

#### Always use compression: at least gzip

gzip is good enough in most cases in terms of both performance and speed.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Always compress. The configuration is set in the webserver.<br><br>gzip has a perfect balance of performance and compression.<br><br>My application went from 4 MB to 800 kb. Fewer data faster speed.<br><br>Enabling gzip: <a href="https://t.co/kBGeXU41Ji">https://t.co/kBGeXU41Ji</a> <br><br>Verify gzip on Chrome: <a href="https://t.co/TqAkHtoaOX">https://t.co/TqAkHtoaOX</a></p>— Ankush (@ankschoubey) <a href="https://twitter.com/ankschoubey/status/1229795313994461187?ref_src=twsrc%5Etfw">February 18, 2020</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

# Make less number of requests

#### Always cache static content: JS, CSS and static images.

This can be configured in your web server or your application. Just google “ “how to cache in <your framework or web server>“.

Of course: **_be sure to not cache dynamic content._**

**For JS and CSS files, make sure it has a name that is unique if the file is modified.**

Example: in angular after creating a --prod build, the filename is in following format “<filename>.<md5 checksum>.js”.

This ensures that if the content of the file changes, the md5 checksum will change and a new request will be sent but if the file does not change then it will have the same checksum so it can be pulled from the cache.

#### Always load images lazily

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><img loading=‘lazy’ ... /> is so so easy. Images are only fetched when user scrolls near it. <a href="https://twitter.com/hashtag/freeSpeedUp?src=hash&ref_src=twsrc%5Etfw">#freeSpeedUp</a> <a href="https://t.co/nduXUy5GLm">https://t.co/nduXUy5GLm</a><br><br>Are there any more such tweaks that exist?</p>— Ankush (@ankschoubey) <a href="https://twitter.com/ankschoubey/status/1219613362239049728?ref_src=twsrc%5Etfw">January 21, 2020</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Advanced tips: [Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video)

# Do it fast

#### Fetch JS and CSS asynchronously

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">When fetching js add &#39;async defer&#39; to script tag. This will fetch multiple js files in parallel. Keep script tag in the header for this.<a href="https://t.co/o0LmIGmnWc">https://t.co/o0LmIGmnWc</a><a href="https://t.co/3Hx2ao1aQC">https://t.co/3Hx2ao1aQC</a></p>— Ankush (@ankschoubey) <a href="https://twitter.com/ankschoubey/status/1229793732418920449?ref_src=twsrc%5Etfw">February 18, 2020</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

#### Are there more such easy tips?

Please mention them in the comments and I will add the tip to the list and mention your name.

---

_Originally published at [https://ankushchoubey.com](https://www.ankushchoubey.com/web%20development/2020/02/22/simple-hacks-for-increasing-website-load-time.html) on December 11, 2012._