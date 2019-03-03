//Timer

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
    minutes = timerWrapper.querySelector(".minute"),
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

////////Test

class myObj {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    console.log(this.name + " " + this.age);
  }
}

let iAm = new myObj("Sasha", 32);

iAm.info();
