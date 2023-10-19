document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((navbarHTML) => {
      document.getElementById("navbar-container").innerHTML = navbarHTML;

      // Setelah elemen navbar dimuat, Anda bisa menambahkan event listener di sini.
      document
        .getElementById("search-icon")
        .addEventListener("click", function () {
          var nav = document.querySelector(".nav");
          var searchInput = document.querySelector(".search-input");

          nav.classList.toggle("search");
          nav.classList.toggle("no-search");
          searchInput.classList.toggle("search-active");
        });

      document
        .querySelector(".menu-toggle")
        .addEventListener("click", function () {
          var nav = document.querySelector(".nav");
          var menuToggle = this;

          nav.classList.toggle("mobile-nav");
          menuToggle.classList.toggle("is-active");
        });
    });
});
