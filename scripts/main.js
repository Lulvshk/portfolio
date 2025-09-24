import { initNavigation } from './navigation.js';
import { initTheme } from './theme.js';
import { initLanguage } from './language.js';
import { initProjects } from './projects.js';

/* ------------------------- Typing Effect ------------------------- */
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

/* ------------------------- Init ------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeTitle, 500);
  initNavigation();
  initTheme();
  initLanguage();
  initProjects();
});