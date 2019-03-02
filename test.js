let wrap = document.querySelector(".tree");

wrap.addEventListener("click", function(e) {
  let el = e.target;
  console.log(el);
  if (el.classList.contains("head")) {
    let nd = el.nextElementSibling;

    if (nd && nd.tagName === "UL") {
      nd.classList.toggle("dnone");
    }
    return;
  }
});
