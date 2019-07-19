---
title:  "The redesigned WI+RE website!"
date:   2019-01-12
authors: doug-worsham
contributors:
    - Marisa Méndez-Brady
    - renee-romero
    - kian-ravaei
    
description: >-
    We're thrilled to launch a major upgrade to our website!
category: Updates
background: /assets/images/backgrounds/blur-close-up-design-196645.jpg
---

## Redesigning the WI+RE website

For the past few months now, the WI+RE Creative team has been working away on some major updates to our website. The site now features sections for workshops and handouts, portfolio pages for our creative team, improved accessibility, and a more visual approach to site navigation!

<figure class="figure border border-primary shadow">
  <img src="{{ '/assets/images/wire-site-content-types.jpg' | relative_url }}" class="figure-img img-fluid rounded" alt="WI+RE website content types: Workshops, Tutorials, and Handouts.">
  <figcaption class="figure-caption text-right">New sections of the website feature workshops and handouts.</figcaption>
</figure>

<h3 class="mt-3">Celebrating Creativity and Community</h3>

As we got started prototyping the website redesign, the WI+RE team was also working on a book chapter exploring the relationship between WI+RE employment and AAC&U's <a href="https://www.aacu.org/resources/high-impact-practices" target="_blank">High Impact Practices (HIPs)</a> in higher education. Looking through the HIPs, we noticed a discussion of e-Portlios as a High Impact Practice that made us wonder - could the new WI+RE site have e-Portfolios?

<blockquote class="blockquote border border-primary shadow">
  <p class="mb-0 px-5">ePortfolios enable students to electronically collect their work over time, reflect upon their personal and academic growth, and then share selected items with others, such as professors, advisors, and potential employers. Because collection over time is a key element of the ePortfolio process, employing ePortfolios in collaboration with other high-impact practices provides opportunities for students to make connections between various educational experiences.</p>
  <footer class="blockquote-footer mt-0 text-right px-5"><cite title="Source Title">High-Impact Educational Practices: What They Are, Who Has Access to Them, and Why They Matter, by George D. Kuh (AAC&U, 2008). <a href="https://www.aacu.org/sites/default/files/files/LEAP/hip_tables.pdf" target="_blank">Excerpt from AAC&amp;U</a></cite></footer>
</blockquote>

So, we started tinkering with the idea of portfolio-like profile pages for the Creative Team. This tied in nicely with the idea of intergrating our experimental sandbox directly into the site redesign - allowing WI+RE to share both published work and the behind-the-scenes prototyping and design that guides our process. This dual focus on showcasing finished work and relfecting on the process was the spark for building out our <a href="{{ '/about/creative-team' | relative_url }}" target="_blank">new portfolio pages </a> and WI+RE's <a href="{{ '/sandbox' | relative_url }}" target="_blank">Sandbox</a>.

At the same time, we were inspired by discussions with academic librarian and WI+RE contributor Marisa Méndez-Brady and WI+RE co-founder Renee Romero to think about how the new site could celebrate the many contributions of our community members to each project. 

<div class="col-12 col-sm-12 col-md-6 col-xl-4 float-right">
<figure class="figure border border-primary shadow">
  <img src="{{ '/assets/images/wire-site-about-tutorial.jpg' | relative_url }}" class="figure-img img-fluid rounded" alt="The new WI+RE site improves attribution for creators and community members.">
  <figcaption class="figure-caption text-right"><small>WI+RE is working on ways to celebrate the contributions of our amazing community members!</small></figcaption>
</figure>
</div>

All of our projects involve extensive collaboration across the campus, and we wanted to make sure the new website clearly shared and celebrated these essential contributions. The result is a new "About" box that appears on each tutorial, workshop, and handout page. The about box lists the leads for projects, celebrates community contributors, and showcases awards and special recognition.

<h3 class="mt-3">Behind the scenes updates</h3>

On the technical side of things, we moved from the mix of Materialize and Bootstrap that made up our previous site, to Bootstrap-only for CSS. While we miss quite a few of Materialize's fancier features, we're also excited about the simplicity of working with one CSS framework at a time! For this site, we're using a modified version of the <a href="https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll" target="_blank">Start Bootstrap</a> theme.

Big thanks to Tinuola Awopetu from UCLA Library's DIIT for help customizing and improving the CSS! Tinuola made several key contributions to the look and feel of the site!

As always, our code is open source and publicly available on [github](https://github.com/uclalibrary/research-tips).

<h3 class="mt-3">What's next?</h3>
More making! We're currently working on workshops about literature reviews and avoiding plagiarism, and continuing a big project on reading scientific literature. Also be on the lookout for a video or tutorial on eScholarship, and write-ups on our recent and upcoming conference presentations!

<h3 class="mt-3">Thank you's!</h3>

There are so many people to thank! First up, a big shout-out to the WI+RE team for their work on this site redesign! This update has been months in the making and has involved both  fun design work and some serious coding as well! Just about all current and former members of WI+RE were involved in some way and our current team members (Kian, Taylor, Juan, and April) did extensive reworking of our html, markdown, and media files to get the site up and running. Thank you!

As mentioned, Marisa Méndez-Brady and Renee Romero gave us some very important feedback on community engagement that helped shape multiple areas of the site which led to significant improvements in how we provide attribution and celebrate community engagement. And Tinuola Awopetu's CSS magic saved the day on multiple occasions. Thank you!

<!-- collect authors -->
{% assign tutorial-auth = site.tutorials | map: 'authors' | uniq %}
{% assign workshop-auth = site.workshops | map: 'authors' | uniq  %}
{% assign handout-auth = site.handouts | map: 'authors' | uniq %}
{% assign post-auth = site.posts | map: 'authors' | uniq %}
{% assign all-auth = tutorial-auth | concat: workshop-auth | concat: handout-auth | concat: post-auth | uniq | compact %}
{%  assign all-auth-sort = all-auth | sort %}
<!-- collect contributors -->
{% assign tutorial-contrib = site.tutorials | map: 'contributors' | uniq %}
{% assign workshop-contrib = site.workshops | map: 'contributors' | uniq  %}
{% assign handout-contrib = site.handouts | map: 'contributors' | uniq %}
{% assign post-contrib = site.posts | map: 'contributors' | uniq %}
{% assign all-contrib = tutorial-contrib | concat: workshop-contrib | concat: handout-contrib | uniq | compact %}
{%  assign all-contrib-sort = all-contrib | sort %}
<!-- concat and uniq auth and contrib -->
{% assign all-authcontrib = all-auth-sort | concat: all-contrib-sort | uniq | compact %}
{% assign all-authcontrib-sort = all-authcontrib | sort_natural %}
<!-- auth and contrib with profile links -->
<!-- this captures the list of team member names from site.team-members -->
{% capture member-name-list %}{{ site.team-members | map: 'username' | split: ',' }}{% endcapture %}

And, as always, we are ever grateful for the many, many people and campus groups who have contributed to the content on the WI+RE website, including: {% for name in all-authcontrib-sort %}{% if member-name-list contains name %}{% for team-member in site.team-members %}{% if name == team-member.username %}<a href="{{ team-member.title | slugify | prepend: '/about/creative-team/' | absolute_url }}">{{ team-member.displayname }}</a>{% endif %}{% endfor %}{% if forloop.last == false %}, {% endif %}{% else %}{{ name }}{% if forloop.last == false %}, {% endif %}{% endif %}{% endfor %}.

Thank you!


