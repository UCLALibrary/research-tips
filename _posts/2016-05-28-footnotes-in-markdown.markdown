---
layout: post
title:  "Footnotes and markdown"
date:   2016-05-28 8:12:29 -0700
tags: [tinkering, footnotes]
---

Footnotes are good<!--break-->:

## Basic footnotes

I just learned you can add a footnote in markdown with ``` [^fn-title-of-footnote] ```, e.g.,:

```
As global librarians, we can stop treating the library as a destination and start treating it as a hub.[^fn-wilkinson]
```

Then, at the bottom of the page, add the name of the footnote again, followed by ```:``` and then text that you want to appear as a footnote:

```
[^fn-wilkinson]: [Skills That Transfer: Transliteracy and the Global Librarian (ACRL/NY 2011 Symposium)](http://www.slideshare.net/lanewilkinson)
```

## Fancier Footnotes? Of course.

[Bigfoot](http://www.bigfootjs.com/) brings some fanciness to footnotes. To get it going, [download the javascript files from the bigfoot site](http://www.bigfootjs.com/).

I put the ```bigfoot-default.css``` file in jekyll's ```css``` folder. I then created a ```js``` folder and put the ```bigfoot.js``` and ```bigfoot.min.js``` files in it.

Next, I added the following to ```head.html```:

```
<!-- JS -->
<!-- bigfoot footnotes from http://www.bigfootjs.com/ -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="{{ "/js/bigfoot.js" | prepend: site.baseurl}}"></script>
<script type="text/javascript">
    $.bigfoot();
</script>
```

and

```
<link rel="stylesheet" href="{{ "/css/bigfoot-default.css" | prepend: site.baseurl}}">
```

It works!

Now, some experimentation:

### Text footnote
> As global librarians, we can stop treating the library as a destination and start treating it as a hub.[^fn-wilkinson-text]

### Text footnote w/ link

> As global librarians, we can stop treating the library as a destination and start treating it as a hub.[^fn-wilkinson-text-link]

### Image footnotes w/ links?

> As global librarians, we can stop treating the library as a destination[^fn-wilkinson-image-1] and start treating it as a hub.[^fn-wilkinson-image-2]

Apologies in advance for the many footnotes to come....


[^fn-wilkinson-text]: Skills That Transfer: Transliteracy and the Global Librarian (ACRL/NY 2011 Symposium)] - http://www.slideshare.net/lanewilkinson
[^fn-wilkinson-text-link]: [Skills That Transfer: Transliteracy and the Global Librarian (ACRL/NY 2011 Symposium)](http://www.slideshare.net/lanewilkinson)
[^fn-wilkinson-image-1]: ![Skills That Transfer: Transliteracy and the Global Librarian (ACRL/NY 2011 Symposium](https://www.evernote.com/l/AN8xIQlpDWRJ5YTdu-s4Duz2GgcluNYWM6cB/image.png) [Skills That Transfer: Transliteracy and the Global Librarian (ACRL/NY 2011 Symposium)](http://www.slideshare.net/lanewilkinson)
[^fn-wilkinson-image-2]: ![Skills That Transfer: Transliteracy and the Global Librarian - ACRL/NY 2011 Symposium](https://www.evernote.com/l/AN-C4CqLTcZPNbNptPEcwWGBMCsWDLz8f_sB/image.png) [Skills That Transfer: Transliteracy and the Global Librarian (ACRL/NY 2011 Symposium)](http://www.slideshare.net/lanewilkinson)






