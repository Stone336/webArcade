const container = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    container.classList.add("bg-scroll");
  } else {
    container.classList.remove("bg-scroll");
  }
});