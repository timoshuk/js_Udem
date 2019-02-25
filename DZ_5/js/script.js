let menu = document.querySelector(".menu");
let menuItem = document.querySelectorAll(".menu  .menu-item");

menu.insertBefore(menuItem[2], menuItem[1]);
document.body.style.background = "url('../img/apple_true.jpg')";

let title = document.getElementById("title");
let str = "";

title.innerText.split(" ").forEach(function(el, i) {
  if (i === 2) {
    str += el + " подлинную ";
  } else {
    str += el + " ";
  }
});

title.textContent = str;

// Dell element

let rec = document.querySelector(".adv");

rec.remove();

let prom = prompt("Як ви відноситесь до техніки apple");

document.getElementById("prompt").textContent = prom;
