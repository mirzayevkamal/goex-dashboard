$(".hamburger-menu").on("click", function () {
  $(" .header-main nav").slideToggle();
});

var headerMain = document.querySelector(".header-main-wrapper");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 20) {
    if (window.innerWidth < 950) {
      headerMain.style.transform = "translate(0px,-43px)";
    } else {
      headerMain.style.transform = "translate(0px,-45px)";
    }
  } else {
    headerMain.style.transform = "translate(0px,0px)";
  }
});

$(document).ready(function () {
  $(".main-carousel .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 9000,
    animateOut: "fadeOut",
    margin: 10,
    responsiveClass: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      600: {
        items: 1,
        nav: false,
        loop: true,
      },
      1000: {
        items: 1,
        nav: false,
        loop: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".shops-carousel .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 8000,
    animateOut: "fadeOut",
    margin: 10,
    responsiveClass: true,
    loop: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        loop: true,
      },
      600: {
        items: 4,
        nav: false,
        loop: true,
      },
      1000: {
        items: 6,
        nav: false,
        loop: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".partners-carousel .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 8000,
    animateOut: "fadeOut",
    margin: 10,
    responsiveClass: true,
    loop: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        loop: true,
      },
      600: {
        items: 4,
        nav: false,
        loop: true,
      },
      1000: {
        items: 6,
        nav: false,
        loop: true,
      },
    },
  });
});
