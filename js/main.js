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
