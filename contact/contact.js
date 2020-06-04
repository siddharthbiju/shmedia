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
    window.location.href = "/services/services.html";
}