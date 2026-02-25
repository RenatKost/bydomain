/* ============================================
   BuyDomain BOT — Scroll Tracker
   (scroll_50 / scroll_90 events)
   ============================================ */

(function() {
  'use strict';

  function initScrollTracker() {
    if (typeof IntersectionObserver === 'undefined') return;

    var sentinels = [
      { id: 'scroll-sentinel-50', event: 'scroll_50', percent: 50 },
      { id: 'scroll-sentinel-90', event: 'scroll_90', percent: 90 }
    ];

    sentinels.forEach(function(cfg) {
      var el = document.getElementById(cfg.id);
      if (!el) {
        // Create sentinel if not present in HTML
        el = document.createElement('div');
        el.id = cfg.id;
        el.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;';
        document.body.appendChild(el);

        // Position will be updated
        function positionSentinel() {
          var docHeight = document.documentElement.scrollHeight;
          el.style.top = Math.floor(docHeight * cfg.percent / 100) + 'px';
        }
        positionSentinel();
        window.addEventListener('resize', positionSentinel);
      }

      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            if (window.BuyDomainAnalytics && window.BuyDomainAnalytics.track) {
              window.BuyDomainAnalytics.track(cfg.event, {
                page: location.pathname
              });
            }
            observer.disconnect();
          }
        });
      }, { threshold: 0 });

      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollTracker);
  } else {
    initScrollTracker();
  }
})();
