/* ============================================
   BuyDomain BOT — Theme Toggle
   Inline version goes in <head> to prevent FOUC
   This file is for the toggle button logic
   ============================================ */

(function() {
  'use strict';

  function initTheme() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function() {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      toggle.setAttribute('aria-label',
        next === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'
      );
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
