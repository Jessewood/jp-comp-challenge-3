
/* adds color to circle graph 3 */
function circleThree()  {
  $('.circ-3').delay(1500).fadeIn(1000, function() {
  $('.circ-3').addClass('circ-3a')
  })
}

/* adds color to circle graph 2 */
function circleTwo()  {
  $('.circ-2').delay(1000).fadeIn(1000, function() {
  $('.circ-2').addClass('circ-2a')
  })
}

/* adds color to circle graph 1 */
function circleOne()  {
  $('.circ-1').delay(500).fadeIn(1000, function() {
  $('.circ-1').addClass('circ-1a')
  })
}

/* Opens/close slide navigation */
function NavOpenClose() {
  $('.nav').toggleClass('side-nav-open');
  $('.main-site').toggleClass('slide');
}


$(document).ready(function()  {
  circleThree();
  circleTwo();
  circleOne();
})

$('main').on('click', '.menu-slider-button', function() {
  NavOpenClose();`
});
