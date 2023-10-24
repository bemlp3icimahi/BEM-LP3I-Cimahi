document.addEventListener("DOMContentLoaded", function () {
  fetch("html/hero-section.html")
    .then((response) => response.text())
    .then((heroHTML) => {
      document.getElementById("hero-section").innerHTML = heroHTML;
    });
});
