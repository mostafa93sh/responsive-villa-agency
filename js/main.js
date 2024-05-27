const menuButton = document.getElementById("togglerButton");
let menuStatu = false;

menuButton.addEventListener("click", () => {
  menuStatu = !menuStatu;
  if (menuStatu) {
    menuButton.classList.add("open");
  } else {
    menuButton.classList.remove("open");
  }
});

const navBarElem = document.querySelector("main .container-fluid.sticky-top");
const navBarBrand = document.querySelector("nav .navbar-brand");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navBarElem.classList.add("navbar-scrolled");
    navBarBrand.style.color = "#777!important";
  } else {
    navBarElem.classList.remove("navbar-scrolled");
    navBarBrand.style.color = "balck";
  }
});
