let h = document.getElementById("about").clientHeight;
let conh = document.getElementById("get-contact").clientHeight;
let mobileyt = document.getElementById("mobile-yt").clientWidth;
let pcytheight = document.getElementById("slider-wrapper").clientHeight;
let about_backgroud_width = document.getElementById("about").clientWidth;
let reach = 0;

about_backgroud_width = about_backgroud_width * 0.7;
mobileyt = (mobileyt * 9) / 16;
h = h + 160;
aboutImageHeight = h - 40;
conh = conh + 160;

var video_src = document.getElementById("video-bg");
if (screen.width > 600) {
  video_src.src = "/videos/FinalComp.mp4";
} else {
  video_src.src = "/videos/output.mp4";
}

document.getElementById("service-background-box").style.height = h + "px";
document.getElementById("service-background-box").style.width =
  about_backgroud_width + "px";

let about_images_width = document.getElementById("service-background-box")
  .clientWidth;
about_images_width = about_images_width + 804;

document
  .getElementById("get-contact-background-box")
  .setAttribute("style", "height:" + conh + "px");

document
  .getElementById("mobile-yt")
  .setAttribute("style", "height:" + mobileyt + "px");

document
  .getElementById("comments-section")
  .setAttribute("style", "height:" + pcytheight + "px");

document
  .getElementById("about-images")
  .setAttribute("style", "height:" + aboutImageHeight + "px");

document
  .getElementById("about-images-2")
  .setAttribute("style", "height:" + aboutImageHeight + "px");

document
  .getElementById("about-images-2")
  .setAttribute("style", "height:" + aboutImageHeight + "px");

document.getElementById("about-images-container").style.width =
  about_images_width + "px";

function resize() {
  h = document.getElementById("about").clientHeight;
  conh = document.getElementById("get-contact").clientHeight;
  mobileyt = document.getElementById("mobile-yt").clientWidth;
  pcytheight = document.getElementById("slider-wrapper").clientHeight;
  about_backgroud_width = document.getElementById("about").clientWidth;
  about_images_width = document.getElementById("service-background-box")
    .clientWidth;

  about_images_width = about_images_width + 804;

  about_backgroud_width = about_backgroud_width * 0.7;
  h = h + 160;
  aboutImageHeight = h - 40;
  conh = conh + 160;
  mobileyt = (mobileyt * 9) / 16;

  document.getElementById("service-background-box").style.height = h + "px";
  document.getElementById("service-background-box").style.width =
    about_backgroud_width + "px";

  document
    .getElementById("get-contact-background-box")
    .setAttribute("style", "height:" + conh + "px");
  document
    .getElementById("mobile-yt")
    .setAttribute("style", "height:" + mobileyt + "px");
  document
    .getElementById("comments-section")
    .setAttribute("style", "height:" + pcytheight + "px");
  document
    .getElementById("about-images")
    .setAttribute("style", "height:" + aboutImageHeight + "px");

  document
    .getElementById("about-images-2")
    .setAttribute("style", "height:" + aboutImageHeight + "px");

  document.getElementById("about-images-container").style.width =
    about_images_width + "px";

}

$(document).ready(function () {
  $(".dropdown").hover(
    function () {
      $("dropdown-images.dropdown-menu", this)
        .stop(true, true)
        .slideDown("fast");
      $(this).addClass("open");
    },
    function () {
      $("dropdown-images.dropdown-menu", this).stop(true, true).slideUp("fast");
      $(this).removeClass("open");
    }
  );
});

/*
function serviceClick() {
  console.log("clicked");
  window.location.href = "/services/services.html";
}*/

function home_click() {
  window.location.href = "/services/tabs/Home_theatre/home_theatre.html";
}

function automation_click() {
  window.location.href = "/services/tabs/home_automation/home_automation.html";
}

function ceo_sharath_fb() {
  window.location.href = "https://www.facebook.com/profile.php?id=100000585396364";
}

function ceo_varghese_fb() {
  window.location.href = "https://www.facebook.com/profile.php?id=100008075837759";
}

function amplifiers() {
  window.location.href = "/products/amplifiers/amplifiers.html";
}

function subwoofers() {
  window.location.href = "/products/subwoofers/subwoofers.html";
}

const element1 = document.getElementById("fade-in");
const element2 = document.getElementById("column_featured1");
const element3 = document.getElementById("column_featured2");
const element4 = document.getElementById("column_featured3");

if ($(window).width() >= 960) {
  $(window).scroll(function () {
    var hT = $("#featured_products").offset().top,
      hH = $("#featured_products").outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > hT + hH - wH) {
      element1.classList.add("fade-in");
      element2.classList.add("slide-right");
      element3.classList.add("slide-bottom");
      element4.classList.add("slide-left");
    }
  });
}

if ($(window).width() < 960) {
  $(window).scroll(function () {
    var hT = $("#fade-in").offset().top,
      hH = $("#fade-in").outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > hT + hH - wH) {
      element1.classList.add("fade-in");
    }
  });

  $(window).scroll(function () {
    var hT = $("#column_featured1").offset().top,
      hH = $("#column_featured1").outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > hT + hH - wH) {
      element2.classList.add("slide-right");
    }
  });

  $(window).scroll(function () {
    var hT = $("#column_featured2").offset().top,
      hH = $("#column_featured2").outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > hT + hH - wH) {
      element3.classList.add("slide-left");
    }
  });

  $(window).scroll(function () {
    var hT = $("#column_featured3").offset().top,
      hH = $("#column_featured3").outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > hT + hH - wH) {
      element4.classList.add("slide-right");
    }
  });
}

const element5 = document.getElementById("gotop");
let scrolltotop = 0;

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on("resize scroll", function () {
  if ($("#hero-title").isInViewport()) {
    if (scrolltotop == 1) {
      element5.classList.remove("slide-top-top");
      element5.classList.add("slide-out-bottom");
    }
  } else {
    element5.classList.remove("slide-out-bottom");
    element5.classList.add("slide-top-top");
    scrolltotop = 1;
  }
});

var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

var anim_src = document.getElementsByClassName("column-partners");
const row_part = document.querySelector(".row-partners");
let i = 0;

$(window).on("resize scroll", function () {
  if ($("#partner_row_2").isInViewport()) {
    for (i = 0; i < 4; i++) {
      anim_src[i].classList.add("slide-in-right");
    }
  }
  if ($("#partner_row_3").isInViewport()) {
    for (i = 4; i < 8; i++) {
      anim_src[i].classList.add("slide-in-left");
    }
  }
  if ($("#row3_visible").isInViewport()) {
    for (i = 8; i < 12; i++) {
      anim_src[i].classList.add("slide-in-right");
      delay(function () {
        row_part.classList.add("partner-black");
      }, 900);
    }
  }
});

$("#monitor").html($(window).width());

$(window).resize(function () {
  var viewportWidth = $(window).width();
  $("#monitor").html(viewportWidth);
});


