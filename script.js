const toggle = document.querySelector("#toggle");
const nav = document.querySelector(".nav");
let menuOpen = false;

toggle.addEventListener("click", () => {
  if (!menuOpen) {
    toggle.classList.add("open");
    menuOpen = true;
  } else {
    toggle.classList.remove("open");
    menuOpen = false;
  }
  nav.classList.toggle("open");
});
