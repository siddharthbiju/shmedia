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
let conh = document.getElementById("get-contact").clientHeight;

conh = conh + 160;


document
  .getElementById("get-contact-background-box")
  .setAttribute("style", "height:" + conh + "px");

mobileyt = (mobileyt * 9) / 16;
document
  .getElementById("mobile-yt")
  .setAttribute("style", "height:" + mobileyt + "px");

function resize() {
  let mobileyt = document.getElementById("mobile-yt").clientWidth;
  mobileyt = (mobileyt * 9) / 16;
  conh = document.getElementById("get-contact").clientHeight;
  conh = conh + 160;

  document
    .getElementById("mobile-yt")
    .setAttribute("style", "height:" + mobileyt + "px");

  document
    .getElementById("get-contact-background-box")
    .setAttribute("style", "height:" + conh + "px");
}

function serviceClick() {
  console.log("clicked");
  //  window.location.href = "/services/services.html";
}

function amplifiers() {
  window.location.href = "/products/amplifiers/amplifiers.html";
}

function subwoofers() {
  window.location.href = "/products/subwoofers/subwoofers.html";
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

var x = document.getElementById("frm1");
var invalidemail = document.getElementById("invalidemail");
var invalidphone = document.getElementById("invalidphone");
var invalidname = document.getElementById("invalidname");

let emailtests = 0;
let nametests = 0;
let phonetests = 0;

function submit_form() {
  name = x[0].value;
  email = x[1].value;
  phone = x[2].value;
  validatename(name);
  validateEmail(email);
  validatePhone(x[2]);
  blankit();
}

function validateEmail(sEmail) {
  var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

  if (!sEmail.match(reEmail)) {
    invalidemail.style.visibility = "visible";
    emailtests = 0;
  }
  else {
    invalidemail.style.visibility = "hidden";
    emailtests = 1;
  }

}

function validatePhone(phoneField) {
  var num = phoneField.value.replace(/[^\d]/g, '');
  if (num.length != 10) {
    //Alert the user that the phone number entered was invalid.
    invalidphone.style.visibility = "visible";
    phonetests = 0;
  } else {
    //Email was valid.  If format type is set, format the Phone to the desired style.
    invalidphone.style.visibility = "hidden";
    phonetests = 1;
  }
}

function validatename(test) {
  var str = test;
  if (!str.replace(/\s/g, '').length) {
    invalidname.style.visibility = "visible";
    nametests = 0;
    //alert('string only contains whitespace (ie. spaces, tabs or line breaks)');
  }
  else {
    invalidname.style.visibility = "hidden";
    nametests = 1;
  }
}

function blankit() {
  if (nametests == 1 && phonetests == 1 && emailtests == 1) {
    // x[0].value = "";
    // x[1].value = "";
    // x[2].value = "";
    x.submit();
    document.getElementById("success_message").style.visibility = "visible";
    x.reset();
  }
  else {
    //return false;
  }
}
