//progress bar
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const progressBar = document.querySelector(".progress__bar");

  const updateProgress = () => {
    let scrollPos =
      (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;

    progressBar.style.width = `${scrollPos}%`;
    requestAnimationFrame(updateProgress);
  };

  updateProgress();
});

//carousel hero
document.addEventListener("DOMContentLoaded", function () {
  var int;
  function setInt() {
    clearInterval(int);
    int = setInterval(function () {
      var btns = document.getElementsByName("carousel");
      for (var i = 0; i < btns.length; i++) {
        if (btns[i].checked) {
          btns[i].checked = false;
          if (i + 1 == btns.length) {
            btns[0].checked = true;
          } else {
            btns[i + 1].checked = true;
          }
          return;
        }
      }
    }, 5000);
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
    autoplayTimeout: 1500,
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
const load = document.querySelector(".spinner-border");
const sendText = document.querySelector(".send-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  load.classList.toggle("d-none");
  sendText.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (response.status === 200) {
        // Pesan berhasil dikirim
        load.classList.toggle("d-none");
        sendText.classList.toggle("d-none");
        form.reset();
        showAlert("Pesan berhasil dikirim!", "success");
      } else {
        // Pesan gagal dikirim
        showAlert("Pesan gagal dikirim. Silahkan coba lain waktu!", "error");
      }
    })
    .catch((error) => {
      console.error("Error!", error.message);
      // Pesan gagal dikirim
      showAlert("Pesan gagal dikirim. Silahkan coba lain waktu!", "error");
    });
});

function showAlert(message, icon) {
  Swal.fire({
    text: message,
    icon: icon,
    position: "top-end",
    showConfirmButton: false,
    background: "#1b2430",
    color: "#d7a449",
    fontWeight: "900",
    timer: 3000,
    timerProgressBar: true,
    allowOutsideClick: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const modalPopup = document.querySelector(".swal2-popup");
  if (modalPopup) {
    modalPopup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    modalPopup.style.border = "2px solid #d7a449";
  }
  const progressBar = document.querySelector(".swal2-timer-progress-bar");
  if (progressBar) {
    progressBar.style.backgroundColor = "#d6d5a8"; // Ganti warna sesuai keinginan
  }
}

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbwubgskjFfBebxvcuERk9E7xTuE_QjbrlBzP7Z48WAkn_18180NJILDb2bpXki2EKiF/exec";
// const form = document.forms["bem-contact-form"];
// const load = document.querySelector(".spinner-border");
// const sendText = document.querySelector(".send-text");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   load.classList.toggle("d-none");
//   sendText.classList.toggle("d-none");

//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       if (response.status === 200) {
//         // Pesan berhasil dikirim
//         load.classList.toggle("d-none");
//         sendText.classList.toggle("d-none");
//         form.reset();
//         showAlert("Pesan berhasil dikirim!", "#1b2430", "#d7a449");
//       } else {
//         // Pesan gagal dikirim
//         showAlert(
//           "Pesan gagal dikirim. Silahkan coba lain waktu!",
//           "#1b2430",
//           "#d7a449"
//         );
//       }
//     })
//     .catch((error) => {
//       console.error("Error!", error.message);
//       // Pesan gagal dikirim
//       showAlert(
//         "Pesan gagal dikirim. Silahkan coba lain waktu!",
//         "#1b2430",
//         "#d7a449"
//       );
//     });
// });

// function showAlert(message, backgroundColor, fontColor) {
//   const alertDiv = document.createElement("div");
//   alertDiv.textContent = message;
//   alertDiv.style.backgroundColor = backgroundColor;
//   alertDiv.style.color = fontColor;
//   alertDiv.style.border = "1px solid #d7a449";
//   alertDiv.style.fontWeight = "bold";
//   alertDiv.style.padding = "10px";
//   alertDiv.style.textAlign = "center";
//   alertDiv.style.position = "fixed";
//   alertDiv.style.top = "100px";
//   alertDiv.style.left = "50%";
//   alertDiv.style.transform = "translateX(-50%)";
//   alertDiv.style.borderRadius = "5px";
//   alertDiv.style.zIndex = "9999";
//   document.body.appendChild(alertDiv);

//   setTimeout(() => {
//     alertDiv.remove();
//   }, 5000);
// }
