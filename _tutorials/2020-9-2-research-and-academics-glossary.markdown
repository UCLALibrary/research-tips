---
title:  "Research and Academics Glossary"
description: "Find definitions and examples for commonly used words in research and academics!"
category: Getting Started with Research
search-tables: yes
thumbnail: /assets/tutorials/thumbnails/ResearchAndAcademicsGlossaryThumbnail.png
sort-weight: 4
authors:
    - UCLA Undergraduate Research Center&#58; Arts, Humanities, and Social Sciences
    - kian-ravaei
    - doug-worsham
---
<span><i>Note: This page is being continually updated with new content! If you would like to request a definition, use the form at the bottom of the page!</i></span>
<!-- search input form -->
<div class="row">
                    <div class="col-lg-12 col-md-12 mx-auto mb-5">
                        <div class="input-group md-form form-sm form-1 pl-0 mb-0">
                          <div class="input-group-prepend">
                            <span class="input-group-text" style="background-color: #005587;" id="basic-text1"><i class="fas fa-search text-white" aria-hidden="true"></i></span>
                            <label for="myInput" class="sr-only">Search</label>
                          </div>
                          <input class="form-control form-control-lg input-lg" id="myInput" type="text" aria-label="Search for a term or definition" placeholder="Search for a term or definition...">
                        </div>
                    </div>
</div>

<table class="table table-sm table-responsive-sm">
  <tbody id="myTable">
      {% for entry in site.data.glossary %}
      {% capture hrefname %}{{ entry.term | remove: " " | remove: "(" | remove: ")" | remove: "+" }}{% endcapture %}
      <tr>
        <td>
          <h2 class="card-title mt-3">{{ entry.term }}</h2>
          <p class="card-text">{{ entry.definition }}</p>
          <div class="containter" id="{{ hrefname }}">
          <div class="btn-group btn-group-sm mb-3 float-right" role="group" aria-label="Actions">
            <a class="btn btn-primary" data-toggle="collapse" href="#{{ hrefname }}Example" role="button" aria-expanded="false" aria-controls="{{ hrefname }}Example">Example</a>
            <a class="btn btn-primary" data-toggle="collapse" href="#{{ hrefname }}Resources" role="button" aria-expanded="false" aria-controls="{{ hrefname }}Resources">Related Resources</a>
            <a class="btn btn-primary" data-toggle="collapse" href="#{{ hrefname }}Reference" role="button" aria-expanded="false" aria-controls="{{ hrefname }}Reference">Reference</a>
          </div>
          <div class="collapse float-right" id="{{ hrefname }}Example" data-parent="#{{ hrefname }}" style="width: 100%;">
            <div class="card card-header mb-3">
              <i>Coming soon!</i>
            </div>
          </div>
          <div class="collapse float-right" id="{{ hrefname }}Resources" data-parent="#{{ hrefname }}" style="width: 100%;">
            <div class="card card-header mb-3" style="width: 100%;">
<!--              Resources-->
              {% assign sorted_documents = site.documents | sort: "title" %}
<div class="relatedPosts">
{% assign maxRelated = 6 %}
{% assign minCommonTags =  1 %}
{% assign maxRelatedCounter = 0 %}
<ul>
{% for item in sorted_documents %}

    {% assign sameTagCount = 0 %}
    {% assign commonTags = '' %}

    {% for tag in item.tags %}
      {% if item.url != page.url %}
        {% capture termdowncase %}{{ entry.term | downcase }}{% endcapture %}
        {% if tag contains entry.term or tag contains termdowncase %}
          {% assign sameTagCount = sameTagCount | plus: 1 %}
          {% capture tagmarkup %} <span class="badge badge-primary">{{ tag }}</span> {% endcapture %}
          {% assign commonTags = commonTags | append: tagmarkup %}
        {% endif %}
      {% endif %}
    {% endfor %}

    {% if sameTagCount >= minCommonTags %}
      <li><strong><a href="{{ item.url | relative_url }}">{{ item.title }}</a> {% if item.awards %}{% for award in item.awards %}{% include award-namify.html %} <i aria-hidden="true" class="fas fa-award" data-toggle="tooltip" data-placement="right" title="{{ awardName }}"></i><span class="sr-only">{{ awardName }}</span>{% endfor %}{% endif %}<small><em> ({{ item.layout | capitalize }})</em></small></strong></li>
      {% assign maxRelatedCounter = maxRelatedCounter | plus: 1 %}
      {% if maxRelatedCounter >= maxRelated %}
        {% break %}
      {% endif %}
    {% endif %}
  {% endfor %}
  
</ul>
  {% if maxRelatedCounter == 0 %}
    <i>Coming soon!</i>
  {% endif %}
    </div>
            </div>
          </div>
          <div class="collapse float-right" id="{{ hrefname }}Reference" data-parent="#{{ hrefname }}" style="width: 100%;">
            <div class="card card-header mb-3">
                  <cite><a href="{{ entry.reference }}" target="_blank">{{ entry.reference | remove: "http://" | remove: "https://" | remove: "www."}}</a></cite>
            </div>
          </div>
          </div>
        </td>
      </tr>
    {% endfor %}
</tbody>
</table>


<!--Old Version-->
<!--
<dl class="row">
  {% for entry in site.data.glossary %}
  <dt class="col-sm-3">{{ entry.term }}</dt>
  <dd class="col-sm-9">{{ entry.definition }} <cite>(<a href="{{ entry.reference }}" target="_blank">{{ entry.reference | remove: "http://" | remove: "https://" | remove: "www."}}</a>)</cite></dd>
  {% endfor %}
</dl>
-->





<center>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdSe4ujpnDT3wpw4P1U5kk_iUukXdPgkRARR0n22BOxPI9cXg/viewform?embedded=true" width="640" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</center>