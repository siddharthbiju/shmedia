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