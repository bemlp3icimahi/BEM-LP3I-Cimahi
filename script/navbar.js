document.addEventListener("DOMContentLoaded", function () {
  fetch("html/navbar.html")
    .then((response) => response.text())
    .then((navbarHTML) => {
      document.getElementById("navbar-section").innerHTML = navbarHTML;
    });
});
