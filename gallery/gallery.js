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
    window.location.href = "/services/services.html";
}


let image_height = document.getElementById("image_height").clientHeight;

image_height = (image_height * 2) - 50;
image_height = 0 - image_height;

var f_images = document.getElementsByClassName("img-1");
var i;
for (i = 0; i < 9; i++) {
    f_images[i].style.marginTop = image_height + "px";
}

function resize() {
    image_height = document.getElementById("image_height").clientHeight;

    image_height = (image_height * 2) - 50;
    image_height = 0 - image_height;
    for (i = 0; i < 9; i++) {
        f_images[i].style.marginTop = image_height + "px";
    }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image_full");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}