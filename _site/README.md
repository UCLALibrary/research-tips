# Hello!

Welcome to the code repository for the WI+RE (Writing Instruction + Research Education) website!

The code here creates this public webpage: https://uclalibrary.github.io/research-tips/

# Want to suggest a change? Have feedback for WI+RE? Let us know!

To suggest a change or an update for our website, you can:

1. email us (from https://uclalibrary.github.io/research-tips/contact/ ) 
2. submit an issue: https://github.com/UCLALibrary/research-tips/issues
3. Make the change yourself and submit a pull request! If you would like to do this, but are not already familiar with github pages, please review https://guides.github.com/features/pages/ and then read the following info about how this site is structured.

# WI+RE site structure

## Key folders:

Folders with an underscore in front of the name (e.g., `_data`) are special in github pages. Here's an overview of what some of these folders do on the WI+RE site:

### `_tutorials` 

This folder contains the files for each of the tutorials that appear at https://uclalibrary.github.io/research-tips/tutorials/ 

Editing a file in this folder may update several things on the site at the same time, including:

* the tutorial itself
* any other pages - e.g., the "Tutorials and Videos" page) that lists tutorials

Creating a new file in this folder (using the proper file naming convention and metadata info) will create a new tutorial.


### `_handouts` and `_workshops` and `_team-members`

These folders work the same way as `_tutorials` - editing a file in one of these folders will update the associated page and may also update any lists where that item is mentioned.


### Super important: All about `_site`:

Whenever you make a change to one of the files in our repository, github regenerates our entire website. It puts all of the files it creates in a special folder called _site.

Key thing: Do NOT make edits or create files in this folder!

Why not? Because they will just get over-written the next time someone makes a change to the site. Instead of editing the file in `_site`, find the file that generates it, and edit that!

For example, let's say you found a typo on this page: https://uclalibrary.github.io/research-tips/workshops/avoiding-plagiarism/  --- which of the following files would you edit to fix it and why?

* `/_site/workshops/avoiding-plagiarism/`
* `_workshops/2019-01-06-avoiding-plagiarism.markdown`

Why?

Other `_`underscore folders

* `_data`: this folder contains data that we leverage in other areas of the site, e.g., our statistics data is in the stats.yml file and we keep info about our publications in publications.yml
* `_embeds` - we haven't been using this as much since H5P came around - but this was a place that allowed us to create "embed-able" versions of our tutorials. Some of these embeds are still in use by people at other institutions so we keep them around.
* `_sass` - a special folder for files related to the design of the site - we don't edit it much unless we are working on the look and feel of the site.


### What about folders without an underscore?

These are for the structural pages of our site - e.g., the homepage, the about page, the wire way, etc. You can edit them just like the files in _tutorials and _workshops -- editing these pages will cause the _site folder to regenerate with your changes.

## Creating a new workshop or tutorial

See https://github.com/UCLALibrary/research-tips/blob/gh-pages/tutorial-workshop-metadata-template.md for a template to follow when creating a new workshop or tutorial.

# FYI

the theme for this site was adapted from: https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll
