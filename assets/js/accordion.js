/* ============================================
   BuyDomain BOT — Accordion
   ============================================ */

(function() {
  'use strict';

  function initAccordion() {
    var containers = document.querySelectorAll('[data-accordion]');

    containers.forEach(function(container) {
      var items = container.querySelectorAll('.accordion__item');
      var triggers = container.querySelectorAll('.accordion__trigger');

      triggers.forEach(function(trigger, index) {
        trigger.addEventListener('click', function() {
          var item = trigger.closest('.accordion__item');
          var content = item.querySelector('.accordion__content');
          var body = item.querySelector('.accordion__body');
          var isOpen = item.classList.contains('is-open');

          // Close all other items (single-open mode)
          items.forEach(function(otherItem) {
            if (otherItem !== item && otherItem.classList.contains('is-open')) {
              otherItem.classList.remove('is-open');
              var otherContent = otherItem.querySelector('.accordion__content');
              var otherTrigger = otherItem.querySelector('.accordion__trigger');
              otherContent.style.maxHeight = '0';
              otherTrigger.setAttribute('aria-expanded', 'false');
            }
          });

          // Toggle current
          if (isOpen) {
            item.classList.remove('is-open');
            content.style.maxHeight = '0';
            trigger.setAttribute('aria-expanded', 'false');
          } else {
            item.classList.add('is-open');
            content.style.maxHeight = body.scrollHeight + 'px';
            trigger.setAttribute('aria-expanded', 'true');
          }
        });

        // Keyboard navigation
        trigger.addEventListener('keydown', function(e) {
          var idx = Array.from(triggers).indexOf(trigger);

          if (e.key === 'ArrowDown') {
            e.preventDefault();
            var next = triggers[idx + 1] || triggers[0];
            next.focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            var prev = triggers[idx - 1] || triggers[triggers.length - 1];
            prev.focus();
          } else if (e.key === 'Home') {
            e.preventDefault();
            triggers[0].focus();
          } else if (e.key === 'End') {
            e.preventDefault();
            triggers[triggers.length - 1].focus();
          }
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordion);
  } else {
    initAccordion();
  }
})();
