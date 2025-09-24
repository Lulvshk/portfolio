export let currentSection = 0;
let isScrolling = false;
const sections = document.querySelectorAll('.section');
const homeBtn = document.getElementById('home-btn');

export function goToSection(index) {
  if (index < 0 || index >= sections.length) return;
  currentSection = index;
  document.querySelector('.sections').style.transform = `translateY(-${100 * currentSection}vh)`;
  homeBtn.classList.toggle('hidden', currentSection === 0);
}

export function initNavigation() {
  const buttons = document.querySelectorAll('.button[data-section]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sectionId = btn.dataset.section;
      const index = Array.from(sections).findIndex(s => s.id === sectionId);
      goToSection(index);
    });
  });

  homeBtn.addEventListener('click', () => goToSection(0));

  window.addEventListener('wheel', e => {
    if (isScrolling) return;
    isScrolling = true;
    if (e.deltaY > 0) goToSection(currentSection + 1);
    else if (e.deltaY < 0) goToSection(currentSection - 1);
    setTimeout(() => isScrolling = false, 250);
  });
}