let h = document.getElementById("about").clientHeight;
let conh = document.getElementById("get-contact").clientHeight;
let mobileyt = document.getElementById("mobile-yt").clientWidth;
let pcytheight = document.getElementById("slider-wrapper").clientHeight;
let about_backgroud_width = document.getElementById("about").clientWidth;
let reach = 0;


about_backgroud_width = about_backgroud_width * .7
mobileyt = (mobileyt * 9) / 16;
h = h + 160;
aboutImageHeight = h - 40;
conh = conh + 160;



const element = document.querySelector(".row-partners");
element.classList.add("animate__animated", "animate__bounceOutLeft");



document.getElementById("service-background-box").style.height = h + "px";
document.getElementById("service-background-box").style.width = about_backgroud_width + "px";

let about_images_width = document.getElementById("service-background-box").clientWidth;
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

document.getElementById("about-images-container").style.width = about_images_width + "px";





function resize() {
  h = document.getElementById("about").clientHeight;
  conh = document.getElementById("get-contact").clientHeight;
  mobileyt = document.getElementById("mobile-yt").clientWidth;
  pcytheight = document.getElementById("slider-wrapper").clientHeight;
  about_backgroud_width = document.getElementById("about").clientWidth;
  about_images_width = document.getElementById("service-background-box").clientWidth;


  about_images_width = about_images_width + 804;

  about_backgroud_width = about_backgroud_width * .7
  h = h + 160;
  aboutImageHeight = h - 40;
  conh = conh + 160;
  mobileyt = (mobileyt * 9) / 16;



  document.getElementById("service-background-box").style.height = h + "px";
  document.getElementById("service-background-box").style.width = about_backgroud_width + "px";

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

  document.getElementById("about-images-container").style.width = about_images_width + "px";

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

function serviceClick() {
  console.log("clicked");
  window.location.href = "/services/services.html";
}
