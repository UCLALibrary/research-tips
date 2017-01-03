---
layout: embed
title:  "Get configured"
date:   2010-01-04
---

{% for post in site.categories.get-configured reversed %}
   <div>{{ post.content | markdownify }}</div>
{% endfor %}