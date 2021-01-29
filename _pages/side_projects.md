---
layout: page
title: 
permalink: /side_projects/
---
<script>
  for (const iterator of document.getElementsByClassName('page-link')) {
      if (iterator.innerHTML === 'Search'){ iterator.classList.add('search-button'); iterator.title = 'Search';}
      if (iterator.innerHTML === 'Tags'){ iterator.classList.add('tags-button'); iterator.title = 'Tags';}
      if (iterator.innerHTML === 'Side Projects'){ iterator.classList.add('side-project-button'); iterator.title = 'Side Projects';}
  }
</script>

I am going to build a lot of weekend sized iterable side projects which I will deploy. 

Some are definetely useless.

{% for post in site.categories['Side Project'] %}
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
<article class="archive-item">
    <p class="post-meta post-meta-title"><a class="page-meta" href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>  • {{ post.date | date: date_format }}</p>
</article>
{% endfor %}

Here are few that I am planning to build:
1. A downloadable PDF calender for any month (using jsPDF)
2. A webapp that showns intersection between people's following on twitter. Useful when seeing who to follow next.
3. An app to detect math symbols
4. An app to detect type on Mango


Side Projects by Category

DL
- ONNX

Data Science: Visualization

React

App with Payment

A simple useful open source app

UX specific app with Tailwind

An App with No Code Tools

An App Designed for Social Media People

An App For Fitness

An App for Money

An App/Service for Music

An app/service for learning