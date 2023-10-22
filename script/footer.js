document.addEventListener("DOMContentLoaded", function () {
  fetch("html/footer.html")
    .then((response) => response.text())
    .then((footerHTML) => {
      document.getElementById("footer-section").innerHTML = footerHTML;
    });
});
