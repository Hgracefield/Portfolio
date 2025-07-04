const menuBtn = document.querySelector(".h-menu-btn");
const hMenu = document.querySelector(".h-menu");

menuBtn.addEventListener("click", () => {
  hMenu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

const gridItems = document.querySelectorAll(".i-grid");
const showImg = document.querySelector(".show-img img");
const imgContainer = document.querySelector(".show-img .img-container");

gridItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const img = item.querySelector("img");
    const newSrc = img.getAttribute("data-full") || img.getAttribute("src");
    const newAlt = img.getAttribute("alt") || "";

    imgContainer.classList.remove("active");
    void imgContainer.offsetWidth;

    showImg.setAttribute("src", newSrc);
    showImg.setAttribute("alt", newAlt);

    imgContainer.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-container");
  const mainLeft = document.querySelector(".main-left");

  mainLeft.addEventListener("scroll", () => {
    if (mainLeft.scrollTop > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
