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

let mobileyt = document.getElementById("mobile-yt").clientWidth;
mobileyt = (mobileyt * 9) / 16;
document
  .getElementById("mobile-yt")
  .setAttribute("style", "height:" + mobileyt + "px");

function resize() {
  let mobileyt = document.getElementById("mobile-yt").clientWidth;
  mobileyt = (mobileyt * 9) / 16;
  document
    .getElementById("mobile-yt")
    .setAttribute("style", "height:" + mobileyt + "px");
}


function serviceClick() {
  console.log("clicked");
  // window.location.href = "/services/services.html";
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
  if ($(".view").isInViewport()) {
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