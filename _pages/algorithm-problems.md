---
layout: page
title: 
permalink: /algorithm-problem/
---

# Algorithm Problems

{% include replace_nav_with_icons.html %}

{% for post in site.categories['algorithm-problems'] %}
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
<article class="archive-item">
    <p class="post-meta post-meta-title"><a class="page-meta" href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a> {{ post.description }} • {{ post.date | date: date_format }}</p>
</article>
{% endfor %}

