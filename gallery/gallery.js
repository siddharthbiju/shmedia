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
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

i = 0;
var f_src = document.getElementsByClassName("img-2");


f_images[0].onclick = function () {
    modal.style.display = "block";
    modalImg.src = f_src[0].src;
}

f_images[1].onclick = function () {
    modal.style.display = "block";
    modalImg.src = f_src[1].src;
}

f_images[2].onclick = function () {
    modal.style.display = "block";
    modalImg.src = f_src[2].src;
}

f_images[3].onclick = function () {
    modal.style.display = "block";
    modalImg.src = f_src[3].src;
}

f_images[4].onclick = function () {
    modal.style.display = "block";
    modalImg.src = f_src[4].src;
}

f_images[5].onclick = function () {
    modal.style.display = "block";
    modalImg.src = f_src[5].src;
}

f_images[6].onclick = function () {
    modal.style.display = "block";
    modalImg.src = f_src[6].src;
}

f_images[7].onclick = function () {
    modal.style.display = "block";
    modalImg.src = f_src[7].src;
}

f_images[8].onclick = function () {
    modal.style.display = "block";
    modalImg.src = f_src[8].src;
}









// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}