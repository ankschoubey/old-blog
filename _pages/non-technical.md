---
layout: page
title: 
permalink: /non-technical/
---

# These articles are of philosophical and self-help nature

{% include replace_nav_with_icons.html %}

<style>
    .custom-post-card-toc{
        display: none !important;
    }
    </style>

{% for post in site.categories['non-professional'] %}
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
<article class="archive-item">
    <p class="post-meta post-meta-title"><a class="page-meta" href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>  • {{ post.date | date: date_format }}</p>
</article>
{% endfor %}

{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
<ul class="post-list">
{% for post in site.categories['non-professional'] %}
      <li>
    {%- include custom_post_list_image_card.html -%}
    </li>
{% endfor %}
</ul>
