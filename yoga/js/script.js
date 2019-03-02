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
