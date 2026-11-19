// Atualiza o ano automaticamente no rodapé.
const yearElement = document.querySelector('#year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Menu compacto para telas menores.
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

// Destaca no menu lateral a seção que está sendo visualizada.
const sections = document.querySelectorAll('.section-anchor');
const sideLinks = document.querySelectorAll('.side-nav .nav-link');

if ('IntersectionObserver' in window && sections.length && sideLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sideLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
      });
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach((section) => observer.observe(section));
}
