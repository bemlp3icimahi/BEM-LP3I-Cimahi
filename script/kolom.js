document.addEventListener("DOMContentLoaded", function () {
  fetch("kolom1.html")
    .then((response) => response.text())
    .then((kolomHTML) => {
      document.getElementById("kolom-section").innerHTML = kolomHTML;
    });
});
