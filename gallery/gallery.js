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
  //  window.location.href = "/services/services.html";
}

function amplifiers() {
  window.location.href = "/products/amplifiers/amplifiers.html";
}

function subwoofers() {
  window.location.href = "/products/subwoofers/subwoofers.html";
}

let image_height = document.getElementById("image_height").clientWidth;

image_height = image_height / 2;
image_height = image_height - 75;

var f_images = document.getElementsByClassName("full_screen");
var i;
for (i = 0; i < 10; i++) {
  f_images[i].style.marginLeft = image_height + "px";
}

function resize() {
  image_height = document.getElementById("image_height").clientWidth;
  image_height = image_height / 2;
  image_height = image_height - 75;
  for (i = 0; i < 9; i++) {
    f_images[i].style.marginLeft = image_height + "px";
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

i = 0;
var f_src = document.getElementsByClassName("img-2");

f_images[0].onclick = function () {
  modal.style.display = "block";
  modalImg.src = f_src[0].src;
};

f_images[1].onclick = function () {
  modal.style.display = "block";
  modalImg.src = f_src[1].src;
};

f_images[2].onclick = function () {
  modal.style.display = "block";
  modalImg.src = f_src[2].src;
};

f_images[3].onclick = function () {
  modal.style.display = "block";
  modalImg.src = f_src[3].src;
};

f_images[4].onclick = function () {
  modal.style.display = "block";
  modalImg.src = f_src[4].src;
};

f_images[5].onclick = function () {
  modal.style.display = "block";
  modalImg.src = f_src[5].src;
};

f_images[6].onclick = function () {
  modal.style.display = "block";
  modalImg.src = f_src[6].src;
};

f_images[7].onclick = function () {
  modal.style.display = "block";
  modalImg.src = f_src[7].src;
};

f_images[8].onclick = function () {
  modal.style.display = "block";
  modalImg.src = f_src[8].src;
};

f_images[9].onclick = function () {
  modal.style.display = "block";
  modalImg.src = f_src[9].src;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

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
  if ($(".hero-title").isInViewport()) {
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
