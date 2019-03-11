window.addEventListener("DOMContentLoaded", function() {
  "use strict";
  let info = document.querySelector(".info");
  let tabs = info.querySelectorAll(".info-header-tab");
  let tabsContent = document.querySelectorAll(".info-tabcontent");

  hideTabContent(1);

  info.addEventListener("click", function(e) {
    let targetEl = e.target;

    if (targetEl && targetEl.classList.contains("info-header-tab")) {
      for (let i = 0; i < tabs.length; i++) {
        if (targetEl === tabs[i]) {
          hideTabContent(0);
          showTabContent(i);
        }
      }
    }
  });

  function hideTabContent(num) {
    for (let i = num; i < tabsContent.length; i++) {
      tabsContent[i].classList.remove("show");
      tabsContent[i].classList.add("hide");
    }
  }
  function showTabContent(b) {
    if (tabsContent[b].classList.contains("hide")) {
      tabsContent[b].classList.remove("hide");
      tabsContent[b].classList.add("show");
    }
  }
});

//Timer
//==========================================================

let date = "2019-08-18";

function getRtime(endDate) {
  let time = Date.parse(endDate) - Date.parse(new Date()),
    seconds = Math.floor((time / 1000) % 60),
    minutes = Math.floor((time / 1000 / 60) % 60),
    hours = Math.floor(time / 1000 / 60 / 60);

  return {
    total: time,
    seconds: seconds,
    minutes: minutes,
    hours: hours
  };
}

function renderTimer(id, deadline) {
  let timerWrapper = document.getElementById(id),
    seconds = timerWrapper.querySelector(".seconds"),
    minutes = timerWrapper.querySelector(".minutes"),
    hours = timerWrapper.querySelector(".hours"),
    clock = setInterval(updateTimer, 1000);

  function updateTimer() {
    let t = getRtime(deadline);
    hours.textContent = t.hours < 10 ? "0" + t.hours : t.hours;
    minutes.textContent = t.minutes < 10 ? "0" + t.minutes : t.minutes;
    seconds.textContent = t.seconds < 10 ? "0" + t.seconds : t.seconds;
    if (t.total <= 0) {
      clearInterval(clock);
    }
  }
}

renderTimer("timer", date);

// popup

let popBtn = document.querySelector(".more");
let popup = document.querySelector(".overlay");
let popupClose = document.querySelector(".popup-close");

popBtn.addEventListener("click", function() {
  popup.style.display = "block";
  this.classList.add("more-splash");
  document.body.style.overflow = "hidden";
});

popupClose.addEventListener("click", function() {
  popup.style.display = "none";
  popBtn.classList.remove("more-splash");
  document.body.style.overflow = "";
});

//Slider
//================================
let slideShow = 0;
let sliderContainer = document.querySelector(".slider");
let allSlides = sliderContainer.querySelectorAll(".slider-item");
let prevBtn = sliderContainer.querySelector(".prev");
let nextBtn = sliderContainer.querySelector(".next");
let sliderDots = sliderContainer.querySelector(".slider-dots");
let sliderDotsItem = sliderDots.querySelectorAll(".dot");

function showSlide() {
  if (slideShow < 0) {
    slideShow = allSlides.length - 1;
  } else if (slideShow >= allSlides.length) {
    slideShow = 0;
  }

  allSlides.forEach(function(item) {
    item.style.display = "none";
  });
  allSlides[slideShow].style.display = "block";

  sliderDotsItem.forEach(function(el) {
    el.classList.remove("dot-active");
  });
  sliderDotsItem[slideShow].classList.add("dot-active");
}

showSlide();

prevBtn.addEventListener("click", function() {
  --slideShow;
  showSlide();
});

nextBtn.addEventListener("click", function() {
  ++slideShow;
  showSlide();
});

sliderDots.addEventListener("click", function(el) {
  sliderDotsItem.forEach(function(item, i) {
    if (el.target === item) {
      slideShow = i;
      showSlide();
    }
  });
});

// Calculator
// ================================================

let peopleCalc = document.querySelectorAll(".counter-block-input")[0];
let dayCalc = document.querySelectorAll(".counter-block-input")[1];
let total = document.getElementById("total");
let selectBase = document.getElementById("select");

let personCount = 0,
  dayCount = 0;
totalCount = 0;

peopleCalc.addEventListener("change", function() {
  personCount = +this.value;

  if (personCount > 0 && dayCount > 0) {
    totalCount = personCount * 4000 * dayCount;
    total.innerHTML = totalCount;
  } else {
    total.innerHTML = 0;
  }
});

dayCalc.addEventListener("change", function() {
  dayCount = +this.value;

  if (personCount > 0 && dayCount > 0) {
    totalCount = personCount * 4000 * dayCount;
    total.innerHTML = totalCount;
  } else {
    total.innerHTML = 0;
  }
});

selectBase.addEventListener("change", function() {
  if (dayCount <= 0 || personCount <= 0) {
    total.innerHTML = 0;
  } else {
    let t = totalCount;

    total.innerHTML = t * this.options[this.selectedIndex].value;
  }
});
