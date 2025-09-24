export function initTheme() {
  const themeToggle = document.getElementById('theme');
  themeToggle.checked = document.body.classList.contains('dark-mode');

  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  });
}