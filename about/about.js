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


let h = document.getElementById("about").clientHeight;
let about_backgroud_width = document.getElementById("about").clientWidth;

h = h + 160;
about_backgroud_width = about_backgroud_width * .7
aboutImageHeight = h - 40;

document.getElementById("service-background-box").style.height = h + "px";
document.getElementById("service-background-box").style.width = about_backgroud_width + "px";

let about_images_width = document.getElementById("service-background-box").clientWidth;
about_images_width = about_images_width + 804;

document.getElementById("about-images-container").style.width = about_images_width + "px";
document.getElementById("about-images").style.height = aboutImageHeight + "px";
document.getElementById("about-images-2").style.height = aboutImageHeight + "px";

function resize() {
    h = document.getElementById("about").clientHeight;
    about_backgroud_width = document.getElementById("about").clientWidth;

    h = h + 160;
    about_backgroud_width = about_backgroud_width * .7
    aboutImageHeight = h - 40;

    document.getElementById("service-background-box").style.height = h + "px";
    document.getElementById("service-background-box").style.width = about_backgroud_width + "px";

    about_images_width = document.getElementById("service-background-box").clientWidth;
    about_images_width = about_images_width + 804;

    document.getElementById("about-images-container").style.width = about_images_width + "px";
    document.getElementById("about-images").style.height = aboutImageHeight + "px";
    document.getElementById("about-images-2").style.height = aboutImageHeight + "px";

}

function serviceClick() {
    console.log("clicked");
    window.location.href = "/services/services.html";
}