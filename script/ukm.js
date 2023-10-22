document.addEventListener("DOMContentLoaded", function () {
  fetch("html/ukm.html")
    .then((response) => response.text())
    .then((ukmHTML) => {
      document.getElementById("ukm-section").innerHTML = ukmHTML;
    });
});
