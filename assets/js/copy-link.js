/* ============================================
   BuyDomain BOT — Copy Bot Link
   ============================================ */

(function() {
  'use strict';

  var BOT_LINK = 'https://t.me/BuyDomain_BOT';
  var toast = null;
  var toastTimeout = null;

  function showToast(message) {
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('is-visible');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function() {
      toast.classList.remove('is-visible');
    }, 2000);
  }

  function initCopyLink() {
    document.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-copy-link]');
      if (!btn) return;

      var link = btn.getAttribute('data-copy-link') || BOT_LINK;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(link).then(function() {
          showToast('Ссылка скопирована!');
        }).catch(function() {
          fallbackCopy(link);
        });
      } else {
        fallbackCopy(link);
      }
    });
  }

  function fallbackCopy(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = 'position:fixed;opacity:0;left:-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast('Ссылка скопирована!');
    } catch (e) {
      showToast('Не удалось скопировать');
    }
    document.body.removeChild(textarea);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopyLink);
  } else {
    initCopyLink();
  }
})();
