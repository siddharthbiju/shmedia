let h = document.getElementById("about").clientHeight;
let conh = document.getElementById("get-contact").clientHeight;
let mobileyt = document.getElementById("mobile-yt").clientWidth;
let pcytheight = document.getElementById("slider-wrapper").clientHeight;
mobileyt = (mobileyt * 9) / 16;
h = h + 160;
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

function resize() {
    h = document.getElementById("about").clientHeight;
    conh = document.getElementById("get-contact").clientHeight;
    mobileyt = document.getElementById("mobile-yt").clientWidth;
    pcytheight = document.getElementById("slider-wrapper").clientHeight;
    h = h + 160;
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
}
if ($(window).width() > 1024) {
    $(".navbar .dropdown").hover(
        function() {
            $(this).find(".dropdown-menu").first().stop(true, true).slideDown(300);
        },
        function() {
            $(this).find(".dropdown-menu").first().stop(true, true).slideUp(300);
        }
    );
}