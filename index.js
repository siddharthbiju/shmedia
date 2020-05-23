let h = document.getElementById("about").clientHeight;
let w = document.getElementById("about").clientWidth;
w = w * 0.6;
h = h + 160;
document
  .getElementById("service-background-box")
  .setAttribute("style", "height:" + h + "px");

document
  .getElementById("service-background-box")
  .setAttribute("style", "width:" + w + "px");

function resize() {
  h = document.getElementById("about").clientHeight;
  h = h + 160;
  w = document.getElementById("about").clientWidth;
  w = w * 0.6;

  document
    .getElementById("service-background-box")
    .setAttribute("style", "height:" + h + "px");
  document
    .getElementById("service-background-box")
    .setAttribute("style", "width:" + w + "px");
}
