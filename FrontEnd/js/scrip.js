//----------------------------Menu-item----------------------------
const top = document.querySelector(".top");
window.addEventListener("scroll", function () {
  const X = this.pageXOffset;
  if (X > 1) {
    top.classList.add("active");
  } else {
    top.classList.remove("active");
  }
});

//--------------------Menu-SLIDEBAR-CARTEGORY--------------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li");
itemsliderbar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block");
  });
});
// ----------------PRODUCT------------
const bigImg = document.querySelector(".product-content-left-big-img img");
const smallImg = document.querySelectorAll(
  ".product-content-left-small-img img"
);
smallImg.forEach(function (imgItem, x) {
  imgItem.addEventListener("click", function () {
    bigImg.src = imgItem.src;
  });
});
const baohanh = document.querySelector(".baohanh");
const chitiet = document.querySelector(".chitiet");
if (baohanh) {
  baohanh.addEventListener("click", function () {
    document.querySelector(".content").style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-baohanh"
    ).style.display = "block";
  });
}
if (chitiet) {
  chitiet.addEventListener("click", function () {
    document.querySelector(".content").style.display = "block";
    document.querySelector(
      ".product-content-right-bottom-content-baohanh"
    ).style.display = "none";
  });
}
const butTon = document.querySelector(".product-content-right-bottom-top");
if (butTon) {
  butTon.addEventListener("click", function () {
    document
      .querySelector(".product-content-right-bottom-content-big")
      .classList.toggle("activeB");
  });
}
