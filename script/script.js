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

//
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
  }, 2500);
}
setInt();

//
const body = document.body;
const progressBar = document.querySelector(".progress__bar");

const updateProgress = () => {
  let scrollPos =
    (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;

  progressBar.style.width = `${scrollPos}%`;
  requestAnimationFrame(updateProgress);
};

updateProgress();
