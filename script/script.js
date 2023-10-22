$(document).ready(function () {
  $(".owl-carousel.center").owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 2, // Ketika lebar layar kurang dari 768px, tampilkan 2 item
      },
      600: {
        items: 2.5, // Ketika lebar layar lebih besar atau sama dengan 768px, tampilkan 3 item
      },
      768: {
        items: 3, // Ketika lebar layar lebih besar atau sama dengan 768px, tampilkan 3 item
      },
    },
  });
});
