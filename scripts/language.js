export let currentLanguage = 'en';
import { loadProjects } from './projects.js';

const buttonsLanguage = {
  es: { projects: "Proyectos", contact: "Contacto" },
  en: { projects: "Projects", contact: "Contact" }
};

export function initLanguage() {
  const languageSelect = document.getElementById('language-select');
  languageSelect.addEventListener('change', e => {
    currentLanguage = e.target.value;
    updateLanguage();
  });
}

export function updateLanguage() {
  document.querySelector("a[data-section='projects']").textContent = buttonsLanguage[currentLanguage].projects;
  document.querySelector("a[data-section='contact']").textContent = buttonsLanguage[currentLanguage].contact;
  loadProjects(currentLanguage);
}