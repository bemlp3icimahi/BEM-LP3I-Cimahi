//progress bar
$(document).ready(function () {
  const body = $("body");
  const progressBar = $(".progress__bar");

  const updateProgress = () => {
    let scrollPos =
      ($(window).scrollTop() / (body.height() - $(window).height())) * 100;

    progressBar.css("width", `${scrollPos}%`);
    requestAnimationFrame(updateProgress);
  };

  updateProgress();
});

//carousel hero
$(document).ready(function () {
  var int;

  function setInt() {
    clearInterval(int);
    int = setInterval(function () {
      var btns = $("[name='carousel']");
      btns.each(function (index) {
        if ($(this).prop("checked")) {
          $(this).prop("checked", false);
          if (index === btns.length - 1) {
            btns.eq(0).prop("checked", true);
          } else {
            btns.eq(index + 1).prop("checked", true);
          }
          return false;
        }
      });
    }, 2500);
  }

  setInt();
});

//owl carousel
$(document).ready(function () {
  $(".owl-carousel.center").owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2.5,
      },
      768: {
        items: 3,
      },
    },
  });
});

// contact
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwubgskjFfBebxvcuERk9E7xTuE_QjbrlBzP7Z48WAkn_18180NJILDb2bpXki2EKiF/exec";
const form = document.forms["bem-contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (response.status === 200) {
        // Pesan berhasil dikirim
        form.reset();
        showAlert("Pesan berhasil dikirim!", "#1b2430", "#d7a449");
      } else {
        // Pesan gagal dikirim
        showAlert("Pesan gagal dikirim.", "#1b2430", "#d7a449");
      }
    })
    .catch((error) => {
      console.error("Error!", error.message);
      // Pesan gagal dikirim
      showAlert("Pesan gagal dikirim.", "#1b2430", "#d7a449");
    });
});

function showAlert(message, backgroundColor, fontColor) {
  const alertDiv = document.createElement("div");
  alertDiv.textContent = message;
  alertDiv.style.backgroundColor = backgroundColor;
  alertDiv.style.color = fontColor;
  alertDiv.style.border = "1px solid #d7a449";
  alertDiv.style.fontWeight = "bold";
  alertDiv.style.padding = "10px";
  alertDiv.style.textAlign = "center";
  alertDiv.style.position = "fixed";
  alertDiv.style.top = "100px";
  alertDiv.style.left = "50%";
  alertDiv.style.transform = "translateX(-50%)";
  alertDiv.style.borderRadius = "5px";
  alertDiv.style.zIndex = "9999";
  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}
