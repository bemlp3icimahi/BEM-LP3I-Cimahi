document.addEventListener("DOMContentLoaded", function () {
  fetch("html/kolom.html")
    .then((response) => response.text())
    .then((kolom1HTML) => {
      document.getElementById("kolom-section").innerHTML = kolom1HTML;
    });
});
