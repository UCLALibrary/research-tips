---
layout: post
title:  "Coding a presentation"
date:   2016-06-02 19:12:29 -0700
tags: [tinkering, presentations, markdown, html, reveal.js]
---
I recently ran across a set of online presentation slides with a readable, responsive design. I took a look at the source, and it seemed like they were written with [R](https://support.rstudio.com/hc/en-us/articles/200486468-Authoring-R-Presentations). Presentations in HTML/Markdown? Wow. More things to turn into text!<!--break-->

I started to think about preparing presentations, and perhaps [instructional tutorials](https://www.youtube.com/playlist?list=PLV8eqWoGXke5D5bmwscUhow1RJKWZmMRZ) in text, using markdown — i.e., ```coding``` my presentations. Why? [^fn-why]

I did a little tinkering and looking around and decided to start by trying out [Reveal.js](https://github.com/hakimel/reveal.js). Here's what I did

1. Cloned [Reveal.js](https://github.com/hakimel/reveal.js) to make a local copy.
2. Created a new branch of the [repository for this site]() called ```presentations``` to experiment.
3. Created a ```presentations``` directory at the root of the site.
4. Copied ```reveal.js``` files into the new ```presentations``` directory  [^fn-wondering].
5. Navigated to the local repository in terminal and did ```jekyll serve``` to make sure I could test this out. Works!
6. Started thinking about a naming convention for presentations. Also thinking about whether or not I should try to use a jekyll naming convention for the presentation files (i.e., treat them like jekyll posts)  and then try to make an ```index.html``` page to fit in w/ the rest of the site…. would that be better? It would automatically update ```index.html``` as new presentations are created….
7. Realized I don't know enough about how to do that yet, so decided to start by just manually linking to presentations from current ```index.html``` works well enough ….

Here's an example embedded in an iframe:

<iframe width="80%" height="400" marginheight="0" marginwidth="0" src="http://dmcwo.github.io/tutorials/tutorial-a-generic-tutorial.html#/">
Visit <a href="http://dmcwo.github.io/tutorials/tutorial-a-generic-tutorial.html#/">full version</a>
</iframe>
<p><small>See <a href="http://dmcwo.github.io/tutorials/tutorial-a-generic-tutorial.html#/">full version</a></small></p>

[Here's some demos from w/in this jekyll site]({{ site.url }}/presentations/)

[Here's what it looks like so far](/presentations/)



[^fn-why]: It is similar, I think, to the [reasoning](http://jmcglone.com/notes/2014/05/03/using-github-to-create-and-host-a-personal-website) behind making a switch from WordPress to [Jekyll](http://jekyllrb.com) — it seems nice to switch to simpler tools, and keep content in simple, and hopefully more enduring formats.
[^fn-wondering]: I'm still wondering if I should use the sub-module feature for this sort of thing ….?
