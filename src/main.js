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

// Contact Form submission
(function contactForm() {
  const form = document.querySelector('form[action="./form-handler.php"]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });
})();

// Sliders
(function sliders() {
  new Swiper('#team-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '#team-slider .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });

  new Swiper('#services-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '#services-slider .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });

  new Swiper('#blog-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '#blog-slider .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });
})();
