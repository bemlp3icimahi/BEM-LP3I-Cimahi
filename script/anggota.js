// get hero
document.addEventListener("DOMContentLoaded", function () {
  fetch("html/anggota.html")
    .then((response) => response.text())
    .then((anggotaHTML) => {
      document.getElementById("anggota-section").innerHTML = anggotaHTML;
    });
});
