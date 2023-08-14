/*=============== SHOW MENU ===============*/
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

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
});
