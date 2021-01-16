---
layout: page
title: 
permalink: /personal/
---

{% for post in site.categories['personal'] %}
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
<article class="archive-item">
    <p class="post-meta post-meta-title"><span class="page-meta" href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</span> • {{ post.date | date: date_format }}</p>
</article>
{% endfor %}
