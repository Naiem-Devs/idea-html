(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

 // menu 
  $('.thmButton').click( function (){ 
    $(this).toggleClass('active');   
    $('body').toggleClass('dark');   
  }); 


  // owlCarousel
  $(".stories_slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true
  });


  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
