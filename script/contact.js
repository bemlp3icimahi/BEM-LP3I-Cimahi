document.addEventListener("DOMContentLoaded", function () {
  fetch("html/contact.html")
    .then((response) => response.text())
    .then((contactHTML) => {
      document.getElementById("contact-section").innerHTML = contactHTML;
    });
});
