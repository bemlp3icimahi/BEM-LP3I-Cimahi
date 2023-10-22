// get hero
document.addEventListener("DOMContentLoaded", function () {
  fetch("html/about.html")
    .then((response) => response.text())
    .then((aboutHTML) => {
      document.getElementById("about-section").innerHTML = aboutHTML;
    });
});
