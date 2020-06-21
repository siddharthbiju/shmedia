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

const element5 = document.getElementById("gotop");
let scrolltotop = 0;

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function () {
    if ($('.hero-title').isInViewport()) {
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

function home_click() {
    window.location.href = "/services/tabs/Home_theatre/home_theatre.html";
}
function automation_click() {
    window.location.href = "/services/tabs/home_automation/home_automation.html";
}

function amplifiers() {
    window.location.href = "/products/amplifiers/amplifiers.html";
}