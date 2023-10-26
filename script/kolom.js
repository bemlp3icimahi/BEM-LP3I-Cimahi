document.addEventListener("DOMContentLoaded", function () {
  fetch("html/kolom.html")
    .then((response) => response.text())
    .then((kolomHTML) => {
      document.getElementById("kolom-section").innerHTML = kolomHTML;
    });
});
