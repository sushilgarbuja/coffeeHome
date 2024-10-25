document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menus = document.querySelector(".menus");
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  hamburger.addEventListener("click", function () {
    menus.classList.toggle("active");
  });

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
