// Toggle class active
const navbar = document.querySelector(".navbar");

// Ketika hamburger menu di klik
document.querySelector("#burger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#burger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

let lastScrollPosition = 0;

document.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Scroll ke bawah
    header.classList.add("hidden");
  } else {
    // Scroll ke atas
    header.classList.remove("hidden");
  }

  lastScrollPosition = currentScrollPosition;
});
