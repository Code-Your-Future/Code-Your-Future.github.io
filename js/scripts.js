jQuery(document).ready(function() {
  /*
   Scroll to top
   */
  $('.scroll-to-top a').on('click', function(e) {
    e.preventDefault();
    var scroll_to = 0;
    if($(window).scrollTop() != scroll_to) {
      $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
    }
  });

  /* Smooth Scrolling */
  $('a.scroll').on('click', function(e) {
    target = this.hash;
    e.preventDefault();
    // if current page doesn't contain element
    if ($(target).length == 0)
    {
	window.location.href = this.pathname + target;
    }
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top - 57
    }, 1000, function() {
      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = target;
    });
  });
});
