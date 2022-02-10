/*
=====================
JS Table of Conttent 
=====================
01. Preloader
02. Sticky Header 
03. Mobile Menu 
04. AOS Animation
05. Cursor JS
06. Current Date
07. Gallery Popup
08. Live-auction Slider
09. Related Products Slider
10. Card Collection Slider
 11. Counterup
 12. Toggle Search
 13. Load More
 14. Creator Load More
 15. NFT Load More
 16. Explore-v2 Load More
 17. Collection Load More
 18. Categories Load More
 19. Collection Load More
 19. Wallet Load More
 20. Published Load More
 21. Clipboard
 23. Scroll to Top
 24. Modal-popup
 25. Tabs nav
 26. accordion tab
 27. Table 
*/
(function ($) {
  "use strict";
  /*
------------------------  
01. Preloader
--------------------------
*/
  $(window).on('load', function () {
    var preLoder = $(".preloader");
    preLoder.fadeOut(10);
  });
  /*
  ------------------------  
  02. Sticky Header
  --------------------------
  */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $(".header-bottombar").addClass("header-sticky");
    } else {
      $(".header-bottombar").removeClass("header-sticky");
    }
  });
  /*
  ------------------------  
  03. Mobile Menu 
  --------------------------
  */
  $(".mobile-toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".toggle-menu-class").slideToggle();
  });
  $(".toggle").on("click", function () {
    if ($(this).text().includes("-")) {
      $(this).text("+")
    } else {
      $(this).text("-")
    }
    $(this).parent().siblings(".submenu").slideToggle();
  });
   /*
  ------------------------  
  04. AOS Animation
  --------------------------
  */
  AOS.init({
    offset: 50,
    delay: 0,
    duration: 400,
    easing: 'ease-in-out',
    debounceDelay: 20,
    throttleDelay: 50,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
  /*
  ------------------------  
  05. Cursor JS
  --------------------------
  */
  var cursor = $(".cursor-direction");
  $(document).mousemove(function (e) {
    cursor.css({
      top: e.clientY - cursor.height() / 2,
      left: e.clientX - cursor.width() / 2
    });
  });
  $(document).mouseleave(function () {
    cursor.css({
      opacity: "0"
    });
  }).mouseenter(function () {
    cursor.css({
      opacity: "1"
    });
  });
  $(document).mousedown(function () {
    cursor.css({
      transform: "scale(.2)"
    });
  }).mouseup(function () {
    cursor.css({
      transform: "scale(1)"
    });
  });
  $("a,button,input,select,.multiple-select").mouseenter(function () {
    cursor.css({
      transform: "scale(3.2)"
    });
  }).mouseleave(function () {
    cursor.css({
      transform: "scale(1)"
    });
  });
  /*
  ------------------------  
  06. Current Date
  --------------------------
  */
  $('#spanYear').html(new Date().getFullYear());
  /*
  ------------------------  
  07. Gallery Popup
  --------------------------
  */
  $('.gallery-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });
  /*
  ------------------------  
  08. Live-auction Slider
  --------------------------
  */
  $('.live-auction-slider').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    arrows: true,
    dots: false,
    prevArrow: $('.slider-prev'),
    nextArrow: $('.slider-next'),
    responsive: [{
        breakpoint: 1020,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 734,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  /*
  ------------------------  
  09. Related Products Slider
  --------------------------
  */
  $('.related-products-slider').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    arrows: true,
    dots: false,
    prevArrow: $('.slider-prev'),
    nextArrow: $('.slider-next'),
    responsive: [{
        breakpoint: 1020,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 734,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  /*
  ------------------------  
 10. Card Collection Slider
  --------------------------
  */
  $('.card-collection-slider').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    arrows: true,
    dots: false,
    prevArrow: $('.collection-prev'),
    nextArrow: $('.collection-next'),
    responsive: [{
        breakpoint: 1020,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 734,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  /*
  ------------------------  
 11. Counterup
  --------------------------
  */
  $('.counter-numbers').counterUp({
    delay: 10,
    time: 1000
  });
  /*
  ------------------------  
    12. Toggle Search
  --------------------------
  */
  $(".icon-set").each(function () {
    $("a.search", this).on("click", function (e) {
      e.preventDefault();
      $(".top-search").slideToggle();
    });
  });
  $(".input-group-addon.close-search").on("click", function () {
    $(".top-search").slideUp();
  });
  /*
  ------------------------  
   13. Load More
  --------------------------
  */
  $('.explore-container').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `explore/explore-${nextIndex}.html`;
      }
    },
    append: '.explore-box',
    button: '.load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: false,
  });
  /*
  ------------------------  
   14. Creator Load More
  --------------------------
  */
  $('.creator-container').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `creator/creator-${nextIndex}.html`;
      }
    },
    append: '.card-follower',
    button: '.load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: false,
  });
  /*
  ------------------------  
   15. NFT Load More
  --------------------------
  */
  $('.nft-categories').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `nft/nft-${nextIndex}.html`;
      }
    },
    append: '.category-box ',
    button: '.categories-load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: false,
  });
  /*
  ------------------------  
   16. Explore-v2 Load More
  --------------------------
  */
  $('.explore-v2').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `nft/nft-${nextIndex}.html`;
      }
    },
    append: '.explore-v2',
    button: '.explore-load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: true,
  });
    /*
  ------------------------  
   17. Collection Load More
  --------------------------
  */
  $('.collection-container').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `collection/collection-${nextIndex}.html`;
      }
    },
    append: '.collection-box',
    button: '.collection-load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: true,
  });
    /*
  ------------------------  
   18. Categories Load More
  --------------------------
  */
  $('.categories-container').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `categories/categories-${nextIndex}.html`;
      }
    },
    append: '.category-box',
    button: '.categories-load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: true,
  });
    /*
  ------------------------  
   19. Collection Load More
  --------------------------
  */
  $('.seller-container').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `categories/categories-${nextIndex}.html`;
      }
    },
    append: '.seller-box',
    button: '.seller-load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: true,
  });
      /*
  ------------------------  
    19. Wallet Load More
  --------------------------
  */
  $('.wallet-container').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `wallet/wallet-${nextIndex}.html`;
      }
    },
    append: '.wallet-box',
    button: '.wallet-load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: true,
  });
        /*
  ------------------------  
   20. Published Load More
  --------------------------
  */
  $('.published-container').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `published/published-${nextIndex}.html`;
      }
    },
    append: '.published-card',
    button: '.published-load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: true,
  });
  /*
  ------------------------  
    21. Clipboard
  --------------------------
  */
  var clipboard = new ClipboardJS('.clipboard');
  /*
  ------------------------  
   23. Scroll to Top
  --------------------------
  */
  function scrolltop() {
    var wind = $(window);
    wind.on("scroll", function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= 500) {
        $(".scroll-top").fadeIn("slow");
      } else {
        $(".scroll-top").fadeOut("slow");
      }
    });
    $(".scroll-top").on("click", function () {
      var bodyTop = $("html, body");
      bodyTop.animate({
        scrollTop: 0
      }, 800, "easeOutCubic");
    });
  }
  scrolltop();
  // Timer Plugin Start  http://hilios.github.io/jQuery.countdown/
  $('#clock').countdown('2050/10/10', function (event) {
    $('#days').html(event.strftime('%D'));
    $('#hours').html(event.strftime('%H'));
    $('#minutes').html(event.strftime('%M'));
    $('#seconds').html(event.strftime('%S'));
  });
  $('[data-countdown]').each(function () {
    var $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      $this.html(event.strftime('%H : %M : %S'));
    });
  }); // Timer Plugin End  http://hilios.github.io/jQuery.countdown/
  $(".nft__item_click").on("click", function () {
    var iteration = $(this).data('iteration') || 1;
    switch (iteration) {
      case 1:
        var cover = jQuery(this).parent().parent().find('.nft__item_extra');
        cover.css("visibility", "visible");
        cover.css("opacity", "1");
        break;
      case 2:
        var cover = jQuery(this).parent().parent().find('.nft__item_extra');
        cover.css("visibility", "hidden");
        cover.css("opacity", "0");
        break;
    }
    iteration++;
    if (iteration > 2) iteration = 1;
    $(this).data('iteration', iteration);
  });
    /*
  ------------------------  
   24. Modal-popup
  --------------------------
  */
  $('.popup-modal').magnificPopup({
    type: 'inline',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    callbacks: {
      open: function () {
        $(".blur-area").addClass('mfp-zoom-blur');
      },
      close: function () {
        $(".blur-area").removeClass('mfp-zoom-blur');
      },
    }
  });
  if ($('.countdown-day').length > 0) {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 365;
      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "1/01/",
        birthday = dayMonth + yyyy;
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
  }
  
  /*
------------------------  
 25. Tabs nav
--------------------------
*/
  $('.tabs-nav a').click(function () {
    $('.tabs-nav li').removeClass('active');
    $(this).parent().addClass('active');
    let currentTab = $(this).attr('href');
    $('.tabs-content > .tabs-item').hide();
    $(currentTab).show();
    return false;
  });
  /*
------------------------  
 26. accordion tab
--------------------------
*/
  $(document).ready(function () {
    var counter = 1;
    $('.expanel h5 ').each(function () {
      var expanel_id = 'expanel-' + counter;
      $(this).nextUntil('h5').wrapAll('<div id="' + expanel_id + '" class="hidden">');
      var expanel_content = $(this).next('div');
      $(this).wrapInner('<button aria-expanded="false" aria-controls="' + expanel_id + '">');
      var button = $(this).children('button');
      button.after('<span aria-hidden="true">&#43;</span>');
      counter++;
      // Toggle the state properties
      button.on("click", function () {
        var state = $(this).attr("aria-expanded");
        if (state === "false") {
          expanel_content.removeClass("hidden");
          $(this).siblings('span').html("&#8722;");
          $(this).attr("aria-expanded", "true");
        } else {
          expanel_content.addClass("hidden");
          $(this).siblings('span').html("&#43;");
          $(this).parent().removeClass("panelExpanded").addClass("panelCollapsed");
          $(this).attr("aria-expanded", "false");
        }
      });
    });
  });
  /*
  ------------------------  
    27. Table 
  --------------------------
  */
  $('#table_id').DataTable({
    "bInfo": false,
    oLanguage: {
        sLengthMenu: "Show _MENU_",
    }
});
}(jQuery));
