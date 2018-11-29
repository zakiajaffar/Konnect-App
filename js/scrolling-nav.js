(function($) {
  "use strict"; // Start of use strict

  $(window).on('scroll',function(){
    var scrolled = $(window).scrollTop();
    if(scrolled >= 100){
      $('.navbar').addClass('shrink');
    }else{
      $('.navbar').removeClass('shrink');
    }
  });


})(jQuery); // End of use strict
