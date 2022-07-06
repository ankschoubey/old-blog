---
layout: page
title: 
permalink: /non-professional/
---

{% include replace_nav_with_icons.html %}

{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
<ul class="post-list">
{% for post in site.categories['non-professional'] %}
      <li>
    {%- include custom_post_list_image_card.html -%}
    </li>
{% endfor %}
</ul>
