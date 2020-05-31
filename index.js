let h = document.getElementById("about").clientHeight;
let conh = document.getElementById("get-contact").clientHeight;
let mobileyt = document.getElementById("mobile-yt").clientWidth;
let pcytheight = document.getElementById("slider-wrapper").clientHeight;
let aboutWidth = document.getElementById("about").clientHeight;
aboutWidth = aboutWidth * 2.3;
console.log(aboutWidth);
let reach = 0;

const element = document.querySelector(".row-partners");
element.classList.add("animate__animated", "animate__bounceOutLeft");

mobileyt = (mobileyt * 9) / 16;
h = h + 160;
aboutImageHeight = h - 40;
conh = conh + 160;
document
  .getElementById("service-background-box")
  .setAttribute("style", "height:" + h + "px");
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
  .getElementById("about-images-container")
  .setAttribute("style", "width:" + aboutWidth + "px");

function resize() {
  h = document.getElementById("about").clientHeight;
  conh = document.getElementById("get-contact").clientHeight;
  mobileyt = document.getElementById("mobile-yt").clientWidth;
  pcytheight = document.getElementById("slider-wrapper").clientHeight;
  aboutWidth = document.getElementById("about").clientHeight;
  aboutWidth = aboutWidth * 2.3;
  h = h + 160;
  aboutImageHeight = h - 40;
  conh = conh + 160;
  mobileyt = (mobileyt * 9) / 16;
  document
    .getElementById("service-background-box")
    .setAttribute("style", "height:" + h + "px");
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
    .getElementById("about-images-container")
    .setAttribute("style", "width:" + aboutWidth + "px");
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

$(document).on("scroll", function () {
  if (reach == 0) {
    if ($(this).scrollTop() >= $("#reached").position().top) {
      reach = 1;
      element.classList.add("animate__animated", "animate__slideInRight");
    }
  }
});

$(document).on("scroll", function () {
  if (reach == 0) {
    if ($(this).scrollTop() >= $("#row-partners").position().top) {
      reach = 1;
      element.classList.add("animate__animated", "animate__slideInRight");
    }
  }
});
