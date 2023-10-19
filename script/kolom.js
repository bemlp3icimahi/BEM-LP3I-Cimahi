document.addEventListener("DOMContentLoaded", function () {
  fetch("kolom.html")
    .then((response) => response.text())
    .then((kolomHTML) => {
      document.getElementById("kolom-section").innerHTML = kolomHTML;
    });
});
