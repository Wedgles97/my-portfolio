/*=========== SHOW MENU ===========*/
const toggleMenu = () => {
  const btn = document.getElementById("nav-toggle");
  const navToggle = document.querySelectorAll("nav .nav__toggle");
  const links = document.querySelectorAll("nav ul li a");
  const navMenu = document.querySelector(".nav__menu");

  btn.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.replace("active", "not-active");
    } else if (this.classList.contains("not-active")) {
      this.classList.replace("not-active", "active");
    } else {
      this.classList.add("active");
    }
  });

  navToggle.forEach((element) => {
    element.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
    });
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.forEach((element) => {
        element.classList.add("not-active");
        element.classList.remove("active");
      });

      navMenu.classList.remove("show-menu");
    });
  });
};

toggleMenu();

/*=========== ADD BLUR TO HEADER ===========*/
const blurHeader = () => {
  const header = document.getElementById("header");
  const scrollThreshold = 50;
  header.classList.toggle("blur-header", window.scrollY >= scrollThreshold);
};
window.addEventListener("scroll", blurHeader);

/*=========== SHOW SCROLL UP ===========*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  const scrollUpThreshold = 350;
  scrollUp.classList.toggle("show-scroll", window.scrollY >= scrollUpThreshold);
};
window.addEventListener("scroll", scrollUp);

/*=========== DARK LIGHT THEME ===========*/
const themeButton = document.querySelector("#theme-button");
themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
});

const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const updateTheme = () => {
  document.documentElement.classList.toggle(
    "dark-mode",
    darkMediaQuery.matches
  );
};
updateTheme();
darkMediaQuery.addEventListener("change", updateTheme);

/* When clicking on any of the buttons in the navigation menu, the title of the button is visible */
function smoothScrollToTarget(target) {
  const targetElement = document.querySelector(target);
  const navHeight = document.querySelector("nav").offsetHeight;
  const offset = 20;
  const targetPosition =
    targetElement.getBoundingClientRect().top +
    window.scrollY -
    navHeight -
    offset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

document.addEventListener("click", (e) => {
  const link = e.target.closest(".nav__link, .home__scroll");
  if (link) {
    e.preventDefault();
    smoothScrollToTarget(link.getAttribute("href"));
  }
});
