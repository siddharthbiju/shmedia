let h = document.getElementById("about").clientHeight;
let w = document.getElementById("about").clientWidth;
w = w * 0.6;
h = h + 160;
document
  .getElementById("service-background-box")
  .setAttribute("style", "height:" + h + "px");

function resize() {
  h = document.getElementById("about").clientHeight;
  h = h + 160;
  console.log("height = " + h);

  document
    .getElementById("service-background-box")
    .setAttribute("style", "height:" + h + "px");

  console.log(
    "set height = " +
      document.getElementById("service-background-box").clientHeight
  );
}
