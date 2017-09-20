function circleOne()  {
  $('.circle-1').delay(500).fadeIn(1000, function() {
  $('.circle-1').addClass('circle-1a')
  })
}

function circleTwo()  {
  $('.circle-2').delay(1000).fadeIn(1000, function() {
  $('.circle-2').addClass('circle-2a')
  })
}

function circleThree()  {
  $('.circle-3').delay(1500).fadeIn(1000, function() {
  $('.circle-3').addClass('circle-3a')
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
