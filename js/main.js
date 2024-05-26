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
