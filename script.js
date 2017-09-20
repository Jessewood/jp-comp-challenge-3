function circleOne()  {
  $('.circ-1').delay(500).fadeIn(1000, function() {
  $('.circ-1').addClass('circ-1a')
  })
}

function circleTwo()  {
  $('.circ-2').delay(1000).fadeIn(1000, function() {
  $('.circ-2').addClass('circ-2a')
  })
}

function circleThree()  {
  $('.circ-3').delay(1500).fadeIn(1000, function() {
  $('.circ-3').addClass('circ-3a')
  })
}

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
  NavOpenClose();
});
