// Mobile menu
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));
mobileMenu?.addEventListener('click', (e) => {
  const a = e.target.closest?.('a');
  if (a) mobileMenu.classList.add('hidden');
});

// Smooth scroll
document.addEventListener('click', (e) => {
  const a = e.target.closest && e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (id && id.length > 1) {
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
});

// Cookies popup
(function cookiesPopup() {
  const popup = document.getElementById('cookie-popup');
  if (!popup) return;
  const accepted = localStorage.getItem('cookiesAccepted') === 'true';
  const declined = localStorage.getItem('cookiesDeclined') === 'true';
  if (!accepted && !declined) popup.classList.remove('hidden');
  document.getElementById('accept-cookies')?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    popup.classList.add('hidden');
  });
  document.getElementById('decline-cookies')?.addEventListener('click', () => {
    localStorage.setItem('cookiesDeclined', 'true');
    popup.classList.add('hidden');
  });
})();

// Form tiny status
const form = document.querySelector('form[action="./form-handler.php"]');
const statusEl = document.getElementById('form-status');
form?.addEventListener('submit', () => { if (statusEl) statusEl.textContent = 'Wysyłanie…'; });
