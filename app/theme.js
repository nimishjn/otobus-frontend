/* Theme toggle code */

function toggleTheme() {
  const bodytag = document.querySelector("body");
  if (bodytag.classList.contains("light-theme")) {
    bodytag.classList.replace("light-theme", "dark-theme");
    localStorage.setItem("theme", "dark-theme");
  } else {
    bodytag.classList.replace("dark-theme", "light-theme");
    localStorage.setItem("theme", "light-theme");
  }
}
