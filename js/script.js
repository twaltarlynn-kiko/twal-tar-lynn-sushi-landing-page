// Using direct asset paths for GitHub Pages compatibility

// AOS will be loaded via CDN in HTML
// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

// Mobile Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileNavLinks = document.querySelectorAll(".header__mobile-nav a");

  // Open mobile menu
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenuOverlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    });
  }

  // Close mobile menu
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", function () {
      mobileMenuOverlay.classList.remove("active");
      document.body.style.overflow = "auto"; // Restore scrolling
    });
  }

  // Close menu when clicking on overlay background
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", function (e) {
      if (e.target === mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  }

  // Close menu when clicking on navigation links
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenuOverlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

  // Close menu on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenuOverlay.classList.contains("active")) {
      mobileMenuOverlay.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});

const trendingSushis = [
  "Make Sushi",
  "Nigiri Sushi",
  "Oshizushi",
  "Temaki Sushi",
  "Uramaki Sushi",
  "Inari Sushi",
];

const trendingDrinks = [
  "Oruncha",
  "Ofukucha",
  "Sakura Tea",
  "Kombu-cha",
  "Aojiru",
  "Mugicha",
];

const cards = [
  {
    imgSrc: "assets/sushi-12.png",
    alt: "sushi-12",
    title: "Chezu Sushi",
    rating: "4.8",
    price: "$21.00",
  },
  {
    imgSrc: "assets/sushi-11.png",
    alt: "sushi-11",
    title: "Originale Sushi",
    rating: "4.8",
    price: "$21.00",
    active: true,
  },
  {
    imgSrc: "assets/sushi-10.png",
    alt: "sushi-10",
    title: "Ramen Legendo",
    rating: "4.8",
    price: "$21.00",
  },
];
