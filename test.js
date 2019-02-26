const btn = document.getElementById("btn");
const txt = document.getElementById("text");

console.log(txt);

btn.addEventListener("click", function() {
  this.style.display = "none";
});
