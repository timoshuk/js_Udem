let item = document.querySelector(".inner");
let t = Date.now();

let time = setInterval(function() {
  let r = Date.now() - t;

  if (r > 3000) {
    clearInterval(time);
    return;
  }

  animateEl(item, r);
}, 20);

function animateEl(el, timeData) {
  el.style.left = timeData / 5 + "px";
  el.style.top = timeData / 5 + "px";
}
