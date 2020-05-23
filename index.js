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

console.log("width = " + w);
console.log(
  "set width = " + document.getElementById("service-background-box").clientWidth
);

function resize() {
  h = document.getElementById("about").clientHeight;
  h = h + 160;
  w = document.getElementById("about").clientWidth;
  w = w * 0.6;
  console.log("width = " + w);
  document
    .getElementById("service-background-box")
    .setAttribute("style", "height:" + h + "px");
  document
    .getElementById("service-background-box")
    .setAttribute("style", "width:" + w + "px");
  console.log(
    "set width = " +
      document.getElementById("service-background-box").clientWidth
  );
}
