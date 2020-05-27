let h = document.getElementById("about").clientHeight;
let conh = document.getElementById("get-contact").clientHeight;
let mobileyt = document.getElementById("mobile-yt").clientWidth;
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

function resize() {
    h = document.getElementById("about").clientHeight;
    conh = document.getElementById("get-contact").clientHeight;
    mobileyt = document.getElementById("mobile-yt").clientWidth;
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
}

$(".main-body").on("click", function() {
    $(".dropdown").children(".dropdown-menu").slideUp(300);

    if ($(this).parent().hasClass("open")) {
        $(this).next(".dropdown-menu").slideUp(300);
    }
});

$(".navbar-nav a").on("click", function() {
    $(".dropdown").children(".dropdown-menu").slideUp(300);

    if ($(this).parent().hasClass("open")) {
        $(this).next(".dropdown-menu").slideUp(300);
    } else {
        $(this).next(".dropdown-menu").slideDown(300);
    }
});