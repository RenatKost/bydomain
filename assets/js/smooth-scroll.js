/* ============================================
   BuyDomain BOT — Smooth Scroll
   ============================================ */

(function() {
  'use strict';

  function initSmoothScroll() {
    document.addEventListener('click', function(e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;

      var hash = link.getAttribute('href');
      if (hash === '#' || hash.length < 2) return;

      var target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      var headerHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-height')
      ) || 64;

      var top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });

      // Update URL hash without scrolling
      if (history.pushState) {
        history.pushState(null, null, hash);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScroll);
  } else {
    initSmoothScroll();
  }
})();
