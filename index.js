let h = document.getElementById("about").clientHeight;
h = h + 160;
document
  .getElementById("service-background-box")
  .setAttribute("style", "height:" + h + "px");
function resize() {
  h = document.getElementById("about").clientHeight;
  h = h + 160;
  document
    .getElementById("service-background-box")
    .setAttribute("style", "height:" + h + "px");
}
