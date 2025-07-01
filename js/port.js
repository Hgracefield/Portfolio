const menuBtn = document.querySelector(".h-menu-btn");
const hMenu = document.querySelector(".h-menu");

menuBtn.addEventListener("click", () => {
  hMenu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

const gridItems = document.querySelectorAll(".i-grid");
const showImg = document.querySelector(".show-img img");

gridItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const img = item.querySelector("img");
    const newSrc = img.getAttribute("src");
    const newAlt = img.getAttribute("alt") || "";

    showImg.setAttribute("src", newSrc);
    showImg.setAttribute("alt", newAlt);
  });
});
