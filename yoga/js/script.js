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
