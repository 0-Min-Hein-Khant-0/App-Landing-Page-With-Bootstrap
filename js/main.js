$(document).ready(function () {


  $(window).on("scroll",function () {
    if($(this).scrollTop()>90)
    {
      $("nav.navbar").addClass("navbar-shrink");
    }
    else
    {
      $("nav.navbar").removeClass("navbar-shrink");
    }
  });
  $("section.home .home-left .home-btn .video-play-btn").click(function () {
    $("div.video-popup").addClass("active");
  });
  $("div.video-popup .video-popup-close,div.video-popup").click(function () {
    $("div.video-popup").removeClass("active");
  });

  // navbar collapse
  $(".nav-link").on('click',function () {
    $(".navbar-collapse").collapse("hide");
  });
})


// Features carousel
$('.features-carousel').owlCarousel({
  loop:true,
  margin:0,
  autoplay:true,
  smartSpeed:700,
  autoplayTimeout:6000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});


// Screenshots carousel
$('.screenshots-carousel').owlCarousel({
  loop:true,
  margin:0,
  autoplay:true,
  smartSpeed:700,
  autoplayTimeout:6000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:4,
      }
  }
});




// testimonials carousel
$('.testimonials-carousel').owlCarousel({
  loop:true,
  margin:0,
  autoplay:true,
  smartSpeed:700,
  autoplayTimeout:6000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});


// Screenshots carousel
$('.team-carousel').owlCarousel({
  loop:true,
  margin:0,
  autoplay:true,
  smartSpeed:700,
  autoplayTimeout:6000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// Page Scrolling
$(function(){
  $.scrollIt({
  topOffset: -50,
  scrollTime: 10,
});
});
//Toggle dark and light mode
$(document).ready(function () {
  $("div.toggle-theme").click(function () {
    $("body").toggleClass("dark");
    $("div.toggle-theme i").toggleClass("fa-sun");
  });

// Top Btn

// Scroll Top
$(document).ready(function () {
$(window).scroll(function () {
  if($(this).scrollTop()>300){
    $(".topBtn").fadeIn();
  }else {
    $(".topBtn").fadeOut();
  }
})

//scroll
$(".topBtn").click(function () {
$("html,body").animate({

  scrollTop:0},100);


})
})
// scrollReval

const sr = ScrollReveal
({
  origin:'top',
  distance:'80px',
  duration:2000,
  reset: true
});
sr.reveal
(`.home-right`,{
  origin:'right',
  interval:200,
  distance: '500px',
  delay:300,
});
sr.reveal
(`.home-left`,{
  origin:'left',
  interval:200,
  delay:300,
  distance: '500px',
});
})










// // Menu icon
// $(document).ready(function () {
//   const menu = $("div.meun-icon"),
//           lineOne =$("div.meun-icon .menu-line:nth-child(1)"),
//           lineTwo=$("div.meun-icon .menu-line:nth-child(2)"),
//           lineThree=$("div.meun-icon .menu-line:nth-child(3)");
//
//           menu.click(function () {
//                     lineOne.toggleClass("active");
//                     lineTwo.toggleClass("active");
//                     lineThree.toggleClass("active");
//                   });
// })
