document.addEventListener("DOMContentLoaded", function () {
  fetch("html/navbar2.html")
    .then((response) => response.text())
    .then((navbar2HTML) => {
      document.getElementById("navbar2-section").innerHTML = navbar2HTML;
    });
});
