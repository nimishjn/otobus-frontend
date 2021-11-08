const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav_links")[0];

toggleButton.addEventListener("click", () => {
  toggleNavbar();
});

const navbarClose = document.getElementById("close-navbar");

navbarClose.addEventListener("click", () => {
  toggleNavbar();
});

function toggleNavbar() {
  navbarLinks.classList.toggle("nav_active");
}
