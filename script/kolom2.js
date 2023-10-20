document.addEventListener("DOMContentLoaded", function () {
  // Fetch kolom2.html and set its content in the kolom2-section element
  fetch("kolom2.html")
    .then((response) => response.text())
    .then((kolom2HTML) => {
      document.getElementById("kolom2-section").innerHTML = kolom2HTML;
    });

  var itemPositions = [];
  var numberOfItems = document.querySelectorAll("#scroller .item").length;

  function assignPositions() {
    for (var i = 0; i < numberOfItems; i++) {
      switch (i) {
        case 0:
          itemPositions[i] = "left-hidden";
          break;
        case 1:
          itemPositions[i] = "left";
          break;
        case 2:
          itemPositions[i] = "middle";
          break;
        case 3:
          itemPositions[i] = "right";
          break;
        default:
          itemPositions[i] = "right-hidden";
          break;
      }
    }

    var itemElements = document.querySelectorAll("#scroller .item");
    itemElements.forEach(function (item, index) {
      item.classList.add(itemPositions[index]);
    });
  }

  function scroll(direction) {
    if (direction === "prev") {
      itemPositions.push(itemPositions.shift());
    } else if (direction === "next") {
      itemPositions.unshift(itemPositions.pop());
    }

    var itemElements = document.querySelectorAll("#scroller .item");
    itemElements.forEach(function (item, index) {
      item.className = "item " + itemPositions[index];
    });
  }

  assignPositions();

  var autoScroll = setInterval(function () {
    scroll("next");
  }, 4000);

  var scroller = document.getElementById("scroller");
  scroller.addEventListener("mouseenter", function () {
    clearInterval(autoScroll);
    var nav = document.querySelector(".nav");
    nav.style.display = "block";
  });

  scroller.addEventListener("mouseleave", function () {
    var nav = document.querySelector(".nav");
    nav.style.display = "none";
  });

  var prevButton = document.getElementById("prev");
  prevButton.addEventListener("click", function () {
    scroll("prev");
  });

  var nextButton = document.getElementById("next");
  nextButton.addEventListener("click", function () {
    scroll("next");
  });
});
