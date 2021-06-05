---
layout: page
title: 
permalink: /underground/
---

{% include replace_nav_with_icons.html %}

{% for post in site.categories['personal'] %}
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
<article class="archive-item">
    <p class="post-meta post-meta-title"><a class="page-meta" href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>  • {{ post.date | date: date_format }}</p>

</article>
{% endfor %}
