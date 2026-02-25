/* ============================================
   BuyDomain BOT — Main Entry Point
   ============================================ */

(function() {
  'use strict';

  function initScrollAnimations() {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: show all elements
      document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
      observer.observe(el);
    });
  }

  function initStickyCTA() {
    var stickyCta = document.querySelector('.sticky-cta');
    var footer = document.querySelector('.footer');
    if (!stickyCta || !footer) return;

    if (typeof IntersectionObserver === 'undefined') return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        stickyCta.classList.toggle('is-hidden', entry.isIntersecting);
      });
    }, { threshold: 0 });

    observer.observe(footer);
  }

  function init() {
    initScrollAnimations();
    initStickyCTA();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
