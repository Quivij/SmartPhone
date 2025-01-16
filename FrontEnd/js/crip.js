//----------------------------Menu-item----------------------------
const top = document.querySelector(".top");
window.addEventListener("scroll", function () {
  const X = this.pageYOffset;
  if (X > 1) {
    top.classList.add("active");
  } else {
    top.classList.remove("active");
  }
});

//--------------------Menu-SLIDEBAR-CARTEGORY--------------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li");
itemsliderbar.forEach(function (menu, index) {
  menu.addEventListener;
});
