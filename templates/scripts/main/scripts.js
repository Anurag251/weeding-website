const templateView = document.querySelector(".template-view");

if (templateView) {
  const sideNavBtn = document.querySelector(".side-nav-btn");
  const sideNav = document.querySelector(".side-nav");
  const sideNavClose = document.querySelector(".side-nav-close");

  sideNavBtn.addEventListener("click", () => {
    sideNav.classList.toggle("active");
  });

  sideNavClose.addEventListener("click", function () {
    sideNav.classList.remove("active");
  });

  const categoriesBtn = document.querySelector(
    ".categories-block .categories-dropdown-btn"
  );
  const categoriesNav = document.querySelector(".categories-dropdown-nav");

  categoriesBtn.addEventListener("click", () => {
    categoriesNav.classList.toggle("active");
  });
}
