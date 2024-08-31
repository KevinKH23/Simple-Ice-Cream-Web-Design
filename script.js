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

// Header ke atas atau bawah ketika layar di scroll
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

// Image flavors bergeser ketika arrow diklik
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    { src: "img/flavor1.png", name: "Vanilla" },
    { src: "img/flavor2.png", name: "Chocolate" },
    { src: "img/flavor3.png", name: "Strawberry" },
    { src: "img/flavor4.png", name: "Chocolate Caramel" },
    { src: "img/flavor5.png", name: "Tiramisu" },
    { src: "img/flavor6.png", name: "Chocolate Chip" },
    { src: "img/flavor7.png", name: "Pistacchio" },
  ];

  let currentIndex = 0;

  const imgElement = document.getElementById("flavors-img");
  const imgNameElement = document.getElementById("flavors-img-name");
  const prevArrow = document.getElementById("prev-arrow");
  const nextArrow = document.getElementById("next-arrow");

  function updateImage() {
    imgElement.src = images[currentIndex].src;
    imgNameElement.textContent = images[currentIndex].name;
  }

  prevArrow.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextArrow.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  // Initial load
  updateImage();
});

// Footer Current Year
document.getElementById("current-year").textContent = new Date().getFullYear();
