document.addEventListener("DOMContentLoaded", function () {
  fetch("html/footer2.html")
    .then((response) => response.text())
    .then((footer2HTML) => {
      document.getElementById("footer2-section").innerHTML = footer2HTML;
    });
});
