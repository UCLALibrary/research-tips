---
layout: page
title: Testing things
specialjsfeatures: true
---
#### Testing carousels

<div class="carousel carousel-slider left" data-indicators="true">
    <div class="carousel-fixed-item center">
      <a class="btn waves-effect white grey-text darken-text-2 prevButton"><i class="material-icons">navigate_before</i></a>
      <a class="btn waves-effect white grey-text darken-text-2 nextButton"><i class="material-icons">navigate_next</i></a>
    </div>
    <div class="carousel-item blue lighten-1 white-text" href="#one!">
      <h3>Start with Questions</h3>
    <p class="intro"><span class="dropcap">Q</span>uestions drive research. The most rewarding research projects start with questions you care about and want to explore.</p> <img class="responsive-img materialboxed" src="https://dmcwo.github.io/research-tips/assets/img/content/question-map-examples.jpg" alt="Example question maps" data-caption="Example question maps">
      <p class="white-text">This is your first panel</p>
    </div>
    <div class="carousel-item amber white-text" href="#two!">
      <h2>Second Panel</h2>
      <p class="white-text">This is your second panel</p>
    </div>
    <div class="carousel-item green white-text" href="#three!">
      <h2>Third Panel</h2>
      <p class="white-text">This is your third panel</p>
    </div>
    <div class="carousel-item blue white-text" href="#four!">
      <h2>Fourth Panel</h2>
      <p class="white-text">This is your fourth panel</p>
    </div>
</div>


### Testing a slider

  <div class="slider">
    <ul class="slides">
      <li>
        <img src="http://lorempixel.com/580/250/nature/1"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="http://lorempixel.com/580/250/nature/2"> <!-- random image -->
        <div class="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="http://lorempixel.com/580/250/nature/3"> <!-- random image -->
        <div class="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="http://lorempixel.com/580/250/nature/4"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div>

#### Some variables

page.layout: {{ page.layout }}

page.title: {{ page.title }}

page.specialjsfeatures {{ page.specialjsfeatures }}

#### some script

<script type="text/javascript">
// Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
$('.carousel').carousel('set', 4);
</script>

