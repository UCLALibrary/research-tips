---
layout: embed
title:  "Search Experimentally"
date:   2010-01-05
---
{% for post in site.categories.search-experimentally reversed %}
   <div>{{ post.content | markdownify }}</div>
{% endfor %}
