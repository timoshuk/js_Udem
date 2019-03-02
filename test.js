let wrap = document.querySelector(".wrapper");

wrap.addEventListener("click", function(e) {
  let el = e.target;
  if (el.classList.contains("hide")) {
    el.parentElement.classList.add("hiden");
    return;
  }
});
