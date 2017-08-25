// Make it rain!
$(window).on('scroll', function () {
  var distanceScrolled = $(document).scrollTop();
  console.log(distanceScrolled);

  if (distanceScrolled > 450) {
    $('.blurb-1').addClass('float-up');
  } else {
    $(".blurb-1").removeClass('float-up');
  }
  if (distanceScrolled > 1525) {
    $('.blurb-2').addClass('float-up');
  } else {
    $(".blurb-2").removeClass('float-up');
  }
});

$('aside a').on('click', function(e) {
  e.preventDefault();
  var pageArea = $(this).attr('href');
  var towardArea = $(pageArea).offset().top;
  $('body').animate({
    scrollTop: towardArea
  }, 600);
});
//stays fixed, hits a bit low on page//




$('.hamburger').on('click', function(e){
    e.preventDefault();
  $('nav').addClass('overlay');
});

// $('.close').on('click', function(e){
//       e.preventDefault();
//       $('nav').removeClass('overlay');
//     });
