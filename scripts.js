// Toggle dark/light mode
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
});

// Language select functionality
const languageSelect = document.getElementById('language-select');
const projectDescriptions = {
    es: ["Omnilu - Bot mutltifuncional de Discord.js", "Portfolio - "],
    en: ["Omnilu - Multifunctional Discord.js Bot", "Portfolio - "]
};
const buttonsText = {
    es: { projects: "Proyectos", contact: "Contacto" },
    en: { projects: "Projects", contact: "Contact" }
};

let currentLanguage = 'en';
languageSelect.addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    updateProjectDescription();
    updateButtonText();
});

// Update buttons text based on selected language
function updateButtonText() {
    document.getElementById("projects-button").textContent = buttonsText[currentLanguage].projects;
    document.getElementById("contact-button").textContent = buttonsText[currentLanguage].contact;
}

// Typing animation for portfolio title
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");
const title = "Lucas José Agüero Portfolio";
let charIndex = 0;

function typeTitle() {
    if (charIndex < title.length) {
        typedText.textContent += title.charAt(charIndex);
        charIndex++;
        setTimeout(typeTitle, 150);
    } else {
        cursor.style.animation = "blink-caret 0.75s step-end infinite";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeTitle, 500);
});

// Project slider functionality
let currentProjectIndex = 0;
const projectDescription = document.getElementById('project-description');

function updateProjectDescription() {
    projectDescription.textContent = projectDescriptions[currentLanguage][currentProjectIndex];
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projectDescriptions[currentLanguage].length;
    updateProjectDescription();
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projectDescriptions[currentLanguage].length) % projectDescriptions[currentLanguage].length;
    updateProjectDescription();
}

// Show/hide projects and contact sections with transition
const mainContent = document.getElementById('main-content');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');
const backButton = document.getElementById('back-button');

function showProjects() {
    mainContent.classList.add('hidden');
    contactSection.classList.add('hidden');
    projectsSection.classList.remove('hidden');
    backButton.classList.remove('hidden');
    projectsSection.classList.add('fadeIn');
    updateProjectDescription();
}

function showContact() {
    mainContent.classList.add('hidden');
    projectsSection.classList.add('hidden');
    contactSection.classList.remove('hidden');
    backButton.classList.remove('hidden');
    contactSection.classList.add('fadeIn');
}

function showMain() {
    projectsSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    backButton.classList.add('hidden');
    mainContent.classList.remove('hidden');
}
