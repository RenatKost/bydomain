/* ============================================
   BuyDomain BOT — Analytics (gtag.js wrapper)
   ============================================ */

(function() {
  'use strict';

  // Replace with your actual GA4 Measurement ID
  var GA_ID = 'G-XXXXXXXXXX';

  function loadGtag() {
    // Respect Do Not Track
    if (navigator.doNotTrack === '1') return;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID, {
      send_page_view: true
    });
  }

  function trackEvent(eventName, params) {
    if (typeof window.gtag === 'function') {
      gtag('event', eventName, params || {});
    }
  }

  function initAnalytics() {
    loadGtag();

    // Track CTA clicks
    document.addEventListener('click', function(e) {
      var el = e.target.closest('[data-track]');
      if (!el) return;

      var event = el.getAttribute('data-track');
      var location = el.getAttribute('data-track-location') || '';
      var source = el.getAttribute('data-track-source') || '';

      var params = {};
      if (location) params.location = location;
      if (source) params.source = source;

      trackEvent(event, params);
    });
  }

  // Expose globally
  window.BuyDomainAnalytics = {
    track: trackEvent
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnalytics);
  } else {
    initAnalytics();
  }
})();
