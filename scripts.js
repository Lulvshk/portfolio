const theme = document.getElementById('theme');
const buttonsLanguage = {es: {projects: "Proyectos", contact: "Contacto"}, en: {projects: "Projects", contact: "Contact"}};
const homeBtn = document.getElementById("home-btn");
const languageSelect = document.getElementById('language-select');
let currentLanguage = 'en';
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");
const title = "Lucas José Agüero Portfolio";
const projectDisplay = document.querySelector(".project-display");
const prevBtn = document.getElementById("prev-project-btn");
const nextBtn = document.getElementById("next-project-btn");
let charIndex = 0;

theme.addEventListener("click", () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    document.getElementById("back-button").classList.toggle('light-mode');
});

languageSelect.addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    updateLanguage();
    loadProjects(currentLanguage);
});
function updateLanguage() {
    document.querySelector("a[href='#projects']").textContent = buttonsLanguage[currentLanguage].projects;
    document.querySelector("a[href='#contact']").textContent = buttonsLanguage[currentLanguage].contact;
}

function typeTitle() {
    if (charIndex < title.length) {
        typedText.textContent += title.charAt(charIndex);
        charIndex++;
        setTimeout(typeTitle, 150);
    } else {
        cursor.style.animation = "blink-caret 0.75s step-end infinite";
    }
}

function updateControlsVisibility() {
  const section = location.hash;
  if (section === "#projects" || section === "#contact") {
    homeBtn.classList.remove("hidden");
  } else {
    homeBtn.classList.add("hidden");
  }
}

window.addEventListener("hashchange", updateControlsVisibility);
document.addEventListener("DOMContentLoaded", updateControlsVisibility);

function loadProjects(lang) {
  fetch("projects.json")
    .then(res => res.json())
    .then(data => {
      projects = data[lang] || [];
      currentIndex = 0;
      showProject(currentIndex, true);
    })
    .catch(err => console.error("Error cargando proyectos:", err));
}

function showProject(index, instant=false) {
  const p = projects[index];
  projectDisplay.innerHTML = "";

  const card = document.createElement("div");
  card.className = "project-card";
  card.style.opacity = 0;
  card.style.transform = instant ? "translateX(0)" : "translateX(100%)";

  if (!p.finished) {
    const status = document.createElement("span");
    status.textContent = "🚧 En desarrollo";
    status.className = "project-status";
    card.appendChild(status);
  }
  const pTitle = document.createElement("h3");
  pTitle.textContent = p.title;
  const desc = document.createElement("p");
  desc.textContent = p.description;

  const link = document.createElement("a");
  link.href = p.link;
  link.target = "_blank";
  link.className = "project-github-btn";
  link.innerHTML = `
    <svg class="cf-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19">
    <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
    </svg>`;
  
  const langs = document.createElement("div");
  langs.className = "project-langs";
  p.languages.forEach(lang => {
    const img = document.createElement("img");
    img.src = `https://img.shields.io/badge/${encodeURIComponent(lang)}-informational?style=for-the-badge&logo=${encodeURIComponent(lang)}&logoColor=white`;
    img.alt = lang;
    langs.appendChild(img);
  });

  card.appendChild(pTitle);
  card.appendChild(desc);
  const actions = document.createElement("div");
  actions.className = "project-actions";
  actions.appendChild(link);
  actions.appendChild(langs);
  card.appendChild(actions);

  projectDisplay.appendChild(card);
  

  requestAnimationFrame(() => {
    card.style.transform = "translateX(0)";
    card.style.opacity = 1;
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  showProject(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  showProject(currentIndex);
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeTitle, 500);
    loadProjects(currentLanguage);
});
