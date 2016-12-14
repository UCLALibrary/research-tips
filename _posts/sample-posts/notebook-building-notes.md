# notebook building notes

### Restructuring

Can prev/next navigation be selective based on post type in current framework (i.e., posts and projects are both "posts")?

Home
* Notes (using ```_posts```)
* Presentations (using new content type? or also as ```_posts```? …?)
* Projects

Currently "projects" are also posts with:
```
project: true
```

Maybe start by building a new content type ```_presentations``` - would help learn how …?

##### Jekyll posts in chronological order
You can order posts chronologically too (not just reverse chronologically):
```
{% for post in site.posts reversed %}
    <!-- whatever -->
{% endfor %}
```

#### Look at the numbers in this guide. A section on guides?
http://jmcglone.com/guides/github-pages/

#### Stats
a google analytics include: https://github.com/jmcglone/jmcglone.github.io/blob/master/_includes/analytics.html

### CV

#### turn cv into sub-directory with its own images

#### figure out if I want to hide cv from navigation

#### an entirely image-based cv?

#### organize branches - dev branch, master branch, gh-pages branch, submodules, 
....
##### think about integrating things as submodules
https://github.com/blog/2104-working-with-submodules

#### host font awesome locally?

#### text program

#### improve social icons

#### turn off loquella?

#### style footnotes somewhat differently

they are a bit too predominant. just one dot? a ^ or similar?

#### google analytics?

create an ```_include	``` file to insert analytics -- like this: https://github.com/jmcglone/jmcglone.github.io/blob/master/_includes/analytics.html

#### categories? tags?
https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/
http://jekyllthemes.org/

#### zotero exporting / markdown bibliography formats

#### Do i need a sitemap? https://help.github.com/articles/sitemaps-for-github-pages/

#### new theme / better setup?
https://github.com/TaylanTatli/Moon/


# Done

#### added a ```gitignore``` file as learned : http://jmcglone.com/guides/github-pages/

#### reduce file size of bg img
cropped and compressed to 164KB (from 2MB)

#### pagination and next/prev post

in ```_config.yml```

```
# gems
gems: [jekyll-paginate]
```

in ```index.html``` the following does a few things:

* write out links to posts, the date, and the content up to the first ```<!--break-->``` (found this here: https://gist.github.com/mikeygee/2626538)
* then it will make a paginator.

```
<!-- This loops through the paginated posts -->
{% for post in paginator.posts %}
  <h1><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h1>
  <p class="author">
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
  </p>
  <!--<div class="content">-->
    {{ post.content | split:'<!--break-->' | first }} <!-- ty: https://gist.github.com/mikeygee/2626538 -->
   	{% if post.content contains '<!--break-->' %}
      <a href="{{ post.url | prepend: site.baseurl }}">read more</a>
   	{% endif %}
  <!--</div>-->
{% endfor %}

<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl}}" class="previous">Previous</a>
  {% else %}
    <span class="previous">Previous</span>
  {% endif %}
  <span class="page_number ">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl}}" class="next">Next</a>
  {% else %}
    <span class="next ">Next</span>
  {% endif %}
</div>
```

[x] next/prev post
in ```_layouts/post.html```

```
<!-- ty: http://david.elbe.me/jekyll/2015/06/20/how-to-link-to-next-and-previous-post-with-jekyll.html -->

<div class="PageNavigation">
  {% if page.previous.url %}
    <a class="prev" href="{{page.previous.url | prepend: site.baseurl}}">&laquo; {{page.previous.title}}</a>
  {% endif %}
  {% if page.next.url %}
    <a class="next" href="{{page.next.url | prepend: site.baseurl}}">{{page.next.title}} &raquo;</a>
  {% endif %}
</div>

```

[x] fix about page
done! it needed ```prepend site.baseurl``` in the links

[x]  css: code as block
Just added the following to custom-css.css
```
pre {	
      white-space: pre-wrap;
      }
```
6173b8fe81171a8cf161c86c2b3d094be674c58a

[x] figure out if custom css is working or not. It works.

[x] Footnotes integration