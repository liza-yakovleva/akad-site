let tabs = document.querySelectorAll(".name-switch");
let tabContent = document.querySelectorAll(".aside-block-wrap");
let tabsWrap = document.querySelector(".name-switch-wrap");


function hideTabContent() {
  tabContent.forEach(tab => {
    tab.classList.add("hide");
    tab.classList.remove("show");
  })

  tabs.forEach(item => {
    item.classList.remove("tab-active-element")
  })
}

function showTabContent(item = 0) {
  tabContent[item].classList.add("show");
  tabContent[item].classList.remove("hide");
  tabs[item].classList.add("tab-active-element");
}

hideTabContent();
showTabContent();

tabsWrap.addEventListener("click", function (e) {
  let target = e.target

  if (target && target.classList.contains("name-switch")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        hideTabContent();
        showTabContent(i);
      }
    })
  }
})