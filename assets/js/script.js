// Rotating text animation
const rotatingText = document.getElementById("rotating-text");
const titles = [
  "Software Developer",
  "Computer Scientist",
  "AI Enthusiast",
  "Problem Solver",
  "Dota 2 Enjoyer"
];
let currentIndex = 0;

function rotateText() {
  rotatingText.classList.add("fade-out");
  
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % titles.length;
    rotatingText.textContent = titles[currentIndex];
    rotatingText.classList.remove("fade-out");
    rotatingText.classList.add("fade-in");
    
    setTimeout(() => {
      rotatingText.classList.remove("fade-in");
    }, 500);
  }, 500);
}

// Start rotation after initial delay
setInterval(rotateText, 5000);

// Rotating profile picture animation
const profilePic = document.querySelector(".profile-pic");
const profileImages = [
  "./assets/images/img1.jpg",
  "./assets/images/img2.jpg",
  "./assets/images/img3.jpg"
];
let currentImageIndex = 0;

// Preload images to prevent grey flash, and track which ones actually loaded
const loadedImages = new Set();
profileImages.forEach((src, index) => {
  const img = new Image();
  img.onload = () => loadedImages.add(index);
  img.src = src;
});

function rotateProfilePic() {
  // Only rotate to an image that has loaded, so a missing or slow image never leaves the circle empty
  let nextImageIndex = currentImageIndex;
  for (let step = 1; step < profileImages.length; step++) {
    const candidate = (currentImageIndex + step) % profileImages.length;
    if (loadedImages.has(candidate)) {
      nextImageIndex = candidate;
      break;
    }
  }
  if (nextImageIndex === currentImageIndex) return;

  profilePic.style.opacity = "0";
  
  setTimeout(() => {
    currentImageIndex = nextImageIndex;
    profilePic.style.backgroundImage = `url('${profileImages[currentImageIndex]}')`;
    profilePic.style.opacity = "1";
  }, 500);
}

// Start profile picture rotation
setInterval(rotateProfilePic, 10000);

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

// Projects Carousel
const projectsData = [
  {
    title: "Property Analyzer",
    image: "./assets/images/property-explorer.gif",
    tableData: {
      "Technology": "AI, Web Scraping",
      "Platform": "Web Application",
      "Stack": "Python, OpenAI API",
      "Status": "In Development",
      "Year": "2024"
    },
    bulletPoints: [
      "AI-powered real estate analysis tool",
      "Gathers publicly available property information",
      "Consolidated dashboard UI for data visualization",
      "Provides in-depth investment insights"
    ],
    description: "This project uses AI assistance to gather as much publicly available information about a real estate property, which is neatly consolidated within a clean dashboard UI. The goal is to provide users with in-depth analysis about Real Estate properties to help inform investment decisions.",
    ctaText: "Video Demo Coming Soon",
    ctaLink: "#",
    ctaDisabled: true
  },
  {
    title: "Libertalia",
    image: "./assets/images/libertalia.gif",
    tableData: {
      "Technology": "Full-Stack Web App, AI",
      "Platform": "Self-Hosted Web App",
      "Stack": "GoLang, Gin, HTML, CSS",
      "Year": "2026"
    },
    bulletPoints: [
      "AI estimates meal macros from food photos",
      "AI screens CARFAX reports against custom rules",
      "AI scores job postings against my resume",
      "Built with GoLang, Gin, HTML & CSS"
    ],
    description: "A personal Swiss Army knife that I architected and self-host. It's a modular full-stack web app that combines a variety of tools (nutrition, finance, job-search, and a used-car finder) behind one authenticated dashboard, with AI integrated into several of them.",
    ctaText: "Watch Video Walkthrough",
    ctaLink: "https://www.youtube.com/watch?v=hsfHFD_OMFo",
    ctaDisabled: false
  },
  {
    title: "LineupWizard.gg",
    image: "./assets/images/wizard2.png",
    tableData: {
      "Technology": "Full-Stack Web App",
      "Platform": "Web (Desktop & Mobile)",
      "Stack": "Node.js, React, MongoDB",
      "Status": "Offline",
      "Year": "2023"
    },
    bulletPoints: [
      "Solo developed full-stack application",
      "Optimized for reduced server usage",
      "Streamlined UI/UX design",
      "Strategy learning tool for VALORANT players"
    ],
    description: "My first 'real' project, built in 2023. A solo developed full-stack web application using Node.js, React, and MongoDB. Optimized extensively to reduce server usage, streamlined UI. Tool for learning strategies in the popular video game VALORANT.",
    ctaText: "Website Offline",
    ctaLink: "#",
    ctaDisabled: true
  },
  {
    title: "EDM Oilers Stat Dashboard (Demo)",
    image: "./assets/images/oilers.png",
    tableData: {
      "Technology": "Data Visualization",
      "Platform": "Web Application",
      "Stack": "React, Chart.js",
      "Dataset": "2025-26 Roster",
      "Year": "2025"
    },
    bulletPoints: [
      "Interactive data visualization dashboard",
      "Dynamically plot roster statistics against each other",
      "Quick comparison of player performance metrics",
      "Built in React + Vite"
    ],
    description: "A dashboard to view and analyze data for the Edmonton Oilers 2025-26 roster. The frontend delivers a quick way to plot a large dataset against each other, giving users the ability to choose which statistics are displayed on the X and Y axes to allow for detailed analysis.",
    ctaText: "View Website",
    ctaLink: "https://oilers-resume-project.web.app/",
    ctaDisabled: false
  }
];

let currentSlide = 0;

function renderProjects() {
  const slidesContainer = document.getElementById("projectSlides");
  const dotsContainer = document.getElementById("carouselDots");
  
  // Clear existing content
  slidesContainer.innerHTML = "";
  dotsContainer.innerHTML = "";
  
  // Create slides
  projectsData.forEach((project, index) => {
    const slide = document.createElement("div");
    slide.className = "project-slide";
    
    const bulletPoints = project.bulletPoints
      .map(point => `<li>${point}</li>`)
      .join("");
    
    // Disabled CTAs render as a greyed-out label instead of a link
    const cta = project.ctaDisabled
      ? `<span class="project-cta disabled" aria-disabled="true">${project.ctaText}</span>`
      : `<a href="${project.ctaLink}" class="project-cta" target="_blank" rel="noopener noreferrer">${project.ctaText}</a>`;

    slide.innerHTML = `
      <div class="project-content">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-details">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <ul>
            ${bulletPoints}
          </ul>
          ${cta}
        </div>
      </div>
    `;
    
    slidesContainer.appendChild(slide);
    
    // Create dot
    const dot = document.createElement("div");
    dot.className = `dot ${index === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

function updateCarousel() {
  const slidesContainer = document.getElementById("projectSlides");
  const dots = document.querySelectorAll(".dot");
  
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % projectsData.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + projectsData.length) % projectsData.length;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Initialize carousel
renderProjects();

// Event listeners for navigation
document.querySelector(".carousel-next").addEventListener("click", nextSlide);
document.querySelector(".carousel-prev").addEventListener("click", prevSlide);

// Swipe navigation for touch screens (mostly-vertical swipes are ignored so page scrolling still works)
const carouselContainer = document.querySelector(".carousel-container");
let touchStartX = 0;
let touchStartY = 0;

carouselContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

carouselContainer.addEventListener("touchend", (e) => {
  const deltaX = e.changedTouches[0].clientX - touchStartX;
  const deltaY = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
});

// Optional: Auto-advance carousel
// setInterval(nextSlide, 8000);
