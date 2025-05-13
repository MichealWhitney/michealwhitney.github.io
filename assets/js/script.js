// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// ensures that the dark mode icon is white on page load
if (!body.classList.contains("light-mode")) {
  themeIcon.style.filter = "brightness(0) invert(1)";
}

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  
  if (body.classList.contains("light-mode")) {
    // Light mode active
    themeIcon.src = "./assets/icons/light_mode.svg";
    themeIcon.alt = "Light Mode Icon";
    themeIcon.style.filter = "none";
  } else {
    // Dark mode active
    themeIcon.src = "./assets/icons/dark_mode.svg";
    themeIcon.alt = "Dark Mode Icon";
    themeIcon.style.filter = "brightness(0) invert(1)";
  }
});
