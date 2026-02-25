/* ============================================
   BuyDomain BOT — Navigation
   ============================================ */

(function() {
  'use strict';

  function initNav() {
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (!header) return;

    // Scroll shadow
    let lastScroll = 0;
    let ticking = false;

    function onScroll() {
      lastScroll = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(function() {
          header.classList.toggle('is-scrolled', lastScroll > 10);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', function() {
        const isOpen = mobileNav.classList.contains('is-open');
        mobileNav.classList.toggle('is-open');
        menuToggle.classList.toggle('is-active');
        document.body.classList.toggle('nav-open');
        menuToggle.setAttribute('aria-expanded', !isOpen);
      });

      // Close on link click
      mobileNav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          mobileNav.classList.remove('is-open');
          menuToggle.classList.remove('is-active');
          document.body.classList.remove('nav-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });

      // Close on click outside
      document.addEventListener('click', function(e) {
        if (mobileNav.classList.contains('is-open') &&
            !mobileNav.contains(e.target) &&
            !menuToggle.contains(e.target)) {
          mobileNav.classList.remove('is-open');
          menuToggle.classList.remove('is-active');
          document.body.classList.remove('nav-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });

      // Close on Escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
          mobileNav.classList.remove('is-open');
          menuToggle.classList.remove('is-active');
          document.body.classList.remove('nav-open');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.focus();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
