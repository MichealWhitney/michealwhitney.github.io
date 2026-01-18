// Rotating text animation
const rotatingText = document.getElementById("rotating-text");
const titles = [
  "Software Developer",
  "Computer Scientist",
  "AI Enthusiast",
  "Problem Solver",
  "Martial Arts Enjoyer"
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

// Preload images to prevent grey flash
profileImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

function rotateProfilePic() {
  const nextImageIndex = (currentImageIndex + 1) % profileImages.length;
  const nextImage = new Image();
  nextImage.src = profileImages[nextImageIndex];
  
  nextImage.onload = () => {
    profilePic.style.opacity = "0";
    
    setTimeout(() => {
      currentImageIndex = nextImageIndex;
      profilePic.style.backgroundImage = `url('${profileImages[currentImageIndex]}')`;
      profilePic.style.opacity = "1";
    }, 500);
  };
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
      "Dynamically Plot roster statistics against each other",
      "Quick comparison of player performance metrics",
      "Built in React + Vite"
    ],
    description: "A dashboard to view and analyze data for the Edmonton Oilers 2025-26 roster. The frontend delivers a quick way to plot a large dataset against each other, giving users the ability to choose which statistics are displayed on the X and Y axes to allow for detailedd analysis.",
    ctaText: "View Website",
    ctaLink: "https://oilers-resume-project.web.app/",
    ctaDisabled: false
  },
  {
    title: "LineupWizard.gg",
    image: "./assets/images/wizard2.png",
    tableData: {
      "Technology": "Full-Stack Web App",
      "Platform": "Web (Desktop & Mobile)",
      "Stack": "Node.js, React, MongoDB",
      "Users": "Active Community",
      "Year": "2023"
    },
    bulletPoints: [
      "Solo developed full-stack application",
      "Optimized for reduced server usage",
      "Streamlined UI/UX design",
      "Strategy learning tool for VALORANT players"
    ],
    description: "My first 'real' project. A solo developed full-stack web application using Node.js, React, and MongoDB. Optimized extensively to reduce server usage, streamlined UI. Tool for learning strategies in the popular video game VALORANT.",
    ctaText: "View Website",
    ctaLink: "https://lineupwizard.gg/valorant",
    ctaDisabled: false
  },
  {
    title: "Automated Shortform Content Editor",
    image: "./assets/images/brainrot_creator.png",
    tableData: {
      "Technology": "Automation, AI",
      "Platform": "Python Pipeline",
      "Stack": "Python, WhisperX, FFmpeg",
      "Output": "TikTok, YouTube Shorts",
      "Year": "2024"
    },
    bulletPoints: [
      "Automated video editing pipeline",
      "AI-powered transcription with WhisperX",
      "Auto-generated captions and styling",
      "Optimized for short-form platforms"
    ],
    description: "An automated video editing pipeline using Python, WhisperX, and FFmpeg. Automates captioning, styling, and formatting of short form clips for TikTok, YouTube shorts, etc.",
    ctaText: "Watch Video Demonstration",
    ctaLink: "https://www.youtube.com/watch?v=dJJpP6ZkaX4",
    ctaDisabled: false
  },
  {
    title: "AI Resume Builder",
    image: "./assets/images/ResumeBuilder.png",
    tableData: {
      "Technology": "AI Enhancement",
      "Platform": "Web Application",
      "Stack": "Python, OpenAI API",
      "Features": "PDF Parsing & Generation",
      "Year": "2024"
    },
    bulletPoints: [
      "AI-powered resume enhancement",
      "Matches industry standards",
      "OpenAI API integration",
      "Advanced PDF parsing and construction"
    ],
    description: "A web-app that uses AI to enhance an uploaded resume to match industry standards. Interacts with OpenAI's API. Uses multiple PDF libraries to parse/construct the files.",
    ctaText: "View on GitHub",
    ctaLink: "https://github.com/MichealWhitney/AI-Resume-Enhancer",
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
    
    const ctaAttributes = project.ctaDisabled 
      ? 'onclick="return false;"' 
      : 'target="_blank" rel="noopener noreferrer"';
    
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
          <a href="${project.ctaLink}" class="project-cta" ${ctaAttributes}>
            ${project.ctaText}
          </a>
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

// Optional: Auto-advance carousel
// setInterval(nextSlide, 8000);
