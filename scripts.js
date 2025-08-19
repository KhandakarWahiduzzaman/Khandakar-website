function openModal(id) {
  document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// This script toggles dark mode and saves the preference in localStorage
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark-mode");
  toggle.textContent = "☀️ Light Mode";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");
  toggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

  // Save mode preference
  localStorage.setItem("mode", isDark ? "dark" : "light");
});

console.log("Portfolio Loaded!");

AOS.init();