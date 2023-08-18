/*=========== SHOW MENU ===========*/
const toggleMenu = function () {
  const btn = document.getElementById("nav-toggle"),
    navMenu = document.getElementById("nav-menu"),
    navToggle = document.querySelectorAll("nav .nav__toggle");

  btn.addEventListener("click", function () {
    const isActive = this.classList.contains("active");
    const isNotActive = this.classList.contains("not-active");

    if (isActive) {
      this.classList.replace("active", "not-active");
    } else if (isNotActive) {
      this.classList.replace("not-active", "active");
    } else {
      this.classList.add("active");
    }
  });

  for (const element of navToggle) {
    element.addEventListener("click", function () {
      navMenu.classList.toggle("show-menu");
    });
  }
};

toggleMenu();

/* When clicking on a menu item, hide the menu. */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/*=========== ADD BLUR TO HEADER ===========*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the blur-header class to the a tag with the blur-header class
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=========== SHOW SCROLL UP ===========*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=========== DARK LIGHT THEME ===========*/
const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
});
