let h = document.getElementById("about").clientHeight;
let conh = document.getElementById("get-contact").clientHeight;
h = h + 160;
conh = conh + 160;

document
  .getElementById("service-background-box")
  .setAttribute("style", "height:" + h + "px");
document
  .getElementById("get-contact-background-box")
  .setAttribute("style", "height:" + conh + "px");
function resize() {
  h = document.getElementById("about").clientHeight;
  conh = document.getElementById("get-contact").clientHeight;
  h = h + 160;
  conh = conh + 160;
  document
    .getElementById("service-background-box")
    .setAttribute("style", "height:" + h + "px");
  console.log(conh);
  document
    .getElementById("get-contact-background-box")
    .setAttribute("style", "height:" + conh + "px");
}
