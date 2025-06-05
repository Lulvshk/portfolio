// Toggle dark/light mode
const theme = document.getElementById('theme');
const buttonsLanguage = {es: {projects: "Proyectos", contact: "Contacto"}, en: {projects: "Projects", contact: "Contact"}};

theme.addEventListener("click", () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    document.getElementById("back-button").classList.toggle('light-mode');
});



const languageSelect = document.getElementById('language-select');
let currentLanguage = 'en';
languageSelect.addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    updateLanguage();
});

function updateLanguage() {
    document.querySelector("a[href='#projects']").textContent = buttonsLanguage[currentLanguage].projects;
    document.querySelector("a[href='#contact']").textContent = buttonsLanguage[currentLanguage].contact;
}

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
