---
layout: post
title:  "Creating a Drupal-like content type in Jekyll for Presentations"
date:   2016-06-25 19:12:29 -0700
excerpt: 
tags: [tinkering, presentations, jekyll, Drupal]
---
I'll probably always be a big fan of [Drupal](http://drupal.org). I absolutely loved working with Drupal to create platforms for communities to build and share knowledge together. But for a small, personal site like this one, it feels like a bit much. As [others have said](https://www.sitepoint.com/wordpress-vs-jekyll-might-want-make-switch/), running a server and a database, and keeping up with all the associated updates and patches, begins to feel like overhead, and for me, ultimately ends up becoming an excuse to not actually write anything! That said, running something in a hosted WordPress environment doesn't give adequate opportunities to tinker with things under the hood. So lately, I've felt like [Jekyll](jekyllrb.com) comes to the rescue by providing just the right balance of tinkering-time and a focus on content. As if I had any lingering doubts, I recently learned that [Jekyll's collections](http://jekyllrb.com/docs/collections/) function quite a bit like Drupal's content types + views framework. In other words, *you can make Drupal-like content types in Jekyll*. Brilliant.

To get started learning how this works, I read through [Ben Balter's splendid tutorial](http://ben.balter.com/2015/02/20/jekyll-collections/) -  essential reading to get your footing with jekyll collections.

Next up, I decided to try to build a *presentations* collection to store and display information about professional conference presentations.

Here's a basic outline of how I approached this:

### Initial content and metadata

First I created a ```_presentations``` directory.  This directory will function just like Jekyll's standard ```_posts``` directory, in that it will hold markdown files describing each presentation. 

Then, I took a look at how [Zotero](http://zotero.org) handles presentations to come up with an initial set of metadata for each presentation. This metadata gets stored in the [front matter](https://jekyllrb.com/docs/frontmatter/) in each presentation's markdown file. Each of the lines in the front matter functions a bit like a simple *field* in a Drupal content type. Here's [an example](http://github.com/dmcwo/Notebook-Moon/_presentations/2000-09-22-presentation-example.md):

```
---
layout: presentation
title: ""
date: 1990-01-01
copresenters: 
meetingname: 
meetingurl: 
place: 
abstract: ""
slideurl: 
handouturl: 
feature: 
permalink: presentations/short-title/
---
```

Next, I created [a few markdown files](https://github.com/dmcwo/Notebook-Moon/tree/gh-pages/_presentations) in the ```_presentations``` folder following this format. 

### Set up a list/overview page

The next step was to create a ```presentations``` directory and an ```index.html``` file. There's not much to this file. It is pretty much just going to refer to a new Jekyll ```layout``` called ```presentation-list``` that we will define in a bit.

```
---
layout: presentation-list
title: All Presentations
excerpt: "A List of Presentations"
---
```

Then, I copied ```layouts/post-list.html``` to ```layouts/presentation-list.html```and then adapted for the ```presentations``` collection. It is a rather long file, so [take a look to get the full story](https://github.com/dmcwo/Notebook-Moon/blob/gh-pages/_layouts/presentation-list.html).

The basic idea here is to look through each ```.md``` file in the ```_presentations``` folder, and then display the metadata defined in the front matter, formatting w/ html/css however you like. It was helpful for me to add the ```hidedayindate``` variable to the front matter, because for some of my presentations I only had the day and month recorded. 

There's a series of ```if``` statements that display things like links to handouts and conference venues, but only if these "fields" are defined in the ```.md``` files.

### Telling Jekyll about the collection

Next up, I added the following to ```config.yml```

```
# Collections
collections:
    presentations:
        output: true
        permalink: /presentations/:path/
```

That's it! Now we've got [a list of presentations](http://dmcwo.com/presentations/), and [an individual page for each presentation](http://dmcwo.com//presentations/liw-digital-research-notebook/). Pretty cool!

#### Other useful things I ran into as I worked on this:
* Ben Balter's [great tutorial](http://ben.balter.com/2015/02/20/jekyll-collections/) was *really, really* helpful. 
* Jekyll has some [documentation on collections](http://jekyllrb.com/docs/collections/)
* This is another [walk-through on Jekyll collections](https://mademistakes.com/articles/jekyll-style-guide/), covering what seems to me to be a pretty fancy use case: using a jekyll collection to build a site style guide.
* Some [much needed help figuring out the different options for formatting dates](http://alanwsmith.com/jekyll-liquid-date-formatting-examples)
* Something I need to return to so I can figure out how to [make jekyll display upcoming presentations](http://www.fizerkhan.com/blog/posts/Working-with-upcoming-posts-in-Jekyll.html)
* Goes over some [front matter sorting options](https://github.com/jekyll/jekyll/issues/2515) 




