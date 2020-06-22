---
title:  "Site Updates: Making our accessibility efforts more transparent"
date:   2020-05-22
authors:
    - doug-worsham
contributors:
    - kian-ravaei
    - chris-lopez
description: >-
    How do we make it easier for all to find out what we've done already, what we aspire to do, and what we need to learn and improve next?
category: Updates
background: /assets/images/backgrounds/blur-close-up-design-196645.jpg
---
I've been fortunate in the past few weeks to play a small part in a couple of web accessibility review projects for UCLA Library. I've been reflecting on how important the work is on the one hand, and on how invisible this labor can sometimes be on the other. I have also been reminded of how there is always so much more to learn!

These experiences, alongside our ongoing efforts to continually improve the accessibility of WI+RE's resources, have made me think about how the work WI+RE does on accessibility often stays behind the scenes. We may run WAVE checks on our pages, do projects to improve the accessibility of our PDFs, conduct keyboard navigation testing, and more .... but looking at our website doesn't necessarily communicate the role that accessibility and universal design play in how we approach our work.

In other words, while we discuss in [our manifesto](https://uclalibrary.github.io/research-tips/wire-way/) how we strive to

<blockquote>
    Pursue universal design at every stage of the process - Accessibility and usability are not checkboxes at the end of a project, but areas of continual importance that can always be improved.
</blockquote>

it isn't always clear, when looking at a particular resource, what this means. Ideally, every project would make transparent:

* what we have done already,
* what we aspire to do,
* and what we need to learn to continue improving!

So, to that end, we're adding an *Accessibility Information* metadata structure to the WI+RE site this week, and launching a project to document where we are now and where we hope to be with accessibility for each resource on the site.

It will be a work in progress, but it is exciting to get started!

Here's an early draft of what we think this might look like in the metadata:

<div class="row">
<div class="col-md-10 col-sm-12 mx-auto">
    <script src="https://gist.github.com/dmcwo/fbcd739f39d78a98b2774bb9ad9e2492.js"></script>
</div>
</div>

And when displayed on an educational resource page, the resulting code might look something like this:

<div class="row">
<div class="col-md-10 col-sm-12 mx-auto">
<div class="card">
  <div class="card-header">
    About this Resource - Example
  </div>
    <div class="card-body">
        <h5 class="card-title">Accessibility Information</h5>
            <ul>
                <li>WAVE - 0 errors May, 22, 2020 (<a href="https://wave.webaim.org/" style="text-decoration: underline;" target="_blank" >About WAVE - Web Accessibility Evaluation Tool</a>)</li>
                <li>Closed Captioning Available</li>
                <li>Descriptive Transcript - In development.</li>
            </ul>
    </div>
</div>
</div>
</div>

This is a very rough first draft, and it will be exciting to see how this develops. If you have ideas, suggestions, or questions, [please let us know](https://uclalibrary.github.io/research-tips/contact/)!

