// Navigation toggle for mobile
const navToggleButton = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggleButton && siteNav) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
    navToggleButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  });
}

// Smooth scroll for in-page anchors
document.addEventListener('click', (e) => {
  const target = e.target;
  if (target instanceof HTMLAnchorElement && target.getAttribute('href')?.startsWith('#')) {
    const id = target.getAttribute('href');
    if (!id) return;
    const section = document.querySelector(id);
    if (!section) return;
    e.preventDefault();
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', id);
    if (siteNav?.classList.contains('open')) {
      siteNav.classList.remove('open');
      navToggleButton?.setAttribute('aria-expanded', 'false');
    }
  }
});

// Dynamic copyright year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}


