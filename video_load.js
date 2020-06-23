var video_src = document.getElementById("video-bg");
if (screen.width > 600) {
    video_src.src = "/videos/FinalComp.mp4";
} else {
    video_src.src = "/videos/output.mp4";
}