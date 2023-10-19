// JavaScript murni untuk menangani klik ikon pencarian
document.getElementById("search-icon").addEventListener("click", function () {
  var nav = document.querySelector(".nav");
  var searchInput = document.querySelector(".search-input");

  nav.classList.toggle("search");
  nav.classList.toggle("no-search");
  searchInput.classList.toggle("search-active");
});

// JavaScript murni untuk menangani klik toggle menu
document.querySelector(".menu-toggle").addEventListener("click", function () {
  var nav = document.querySelector(".nav");
  var menuToggle = this;

  nav.classList.toggle("mobile-nav");
  menuToggle.classList.toggle("is-active");
});
