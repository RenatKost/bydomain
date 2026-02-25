/* ============================================
   BuyDomain BOT — Language Toggle (RU/EN)
   ============================================ */

(function() {
  'use strict';

  var translations = {
    /* ---- Navigation ---- */
    'nav.home': { ru: 'Главная', en: 'Home' },
    'nav.features': { ru: 'Возможности', en: 'Features' },
    'nav.pricing': { ru: 'Цены', en: 'Pricing' },
    'nav.api': { ru: 'API', en: 'API' },
    'nav.faq': { ru: 'FAQ', en: 'FAQ' },
    'nav.support': { ru: 'Поддержка', en: 'Support' },

    /* ---- Hero ---- */
    'hero.title': {
      ru: 'Покупка и управление доменами прямо в Telegram',
      en: 'Buy and Manage Domains Right in Telegram'
    },
    'hero.subtitle': {
      ru: 'Проверка домена, регистрация, DNS/NS, Cloudflare, SSL и редиректы — в одном боте. Оплата криптовалютой.',
      en: 'Domain check, registration, DNS/NS, Cloudflare, SSL and redirects — in one bot. Pay with crypto.'
    },
    'hero.cta': { ru: 'Запустить бота', en: 'Launch Bot' },
    'hero.cta2': { ru: 'Посмотреть возможности', en: 'See Features' },
    'hero.badge': { ru: 'Telegram Бот', en: 'Telegram Bot' },

    /* ---- Features Section ---- */
    'features.title': { ru: 'Что умеет бот', en: 'What the Bot Can Do' },
    'features.subtitle': { ru: 'Все инструменты для работы с доменами в одном месте', en: 'All domain tools in one place' },

    'feature.buy.title': { ru: 'Покупка доменов', en: 'Buy Domains' },
    'feature.buy.text': { ru: 'Регистрация домена в 1–2 клика. Поддержка сотен доменных зон.', en: 'Register a domain in 1-2 clicks. Support for hundreds of domain zones.' },
    'feature.dns.title': { ru: 'DNS записи', en: 'DNS Records' },
    'feature.dns.text': { ru: 'Управление A, AAAA, CNAME, MX, TXT и другими записями.', en: 'Manage A, AAAA, CNAME, MX, TXT and other records.' },
    'feature.ns.title': { ru: 'Nameserver', en: 'Nameserver' },
    'feature.ns.text': { ru: 'Смена NS серверов для любого домена.', en: 'Change NS servers for any domain.' },
    'feature.cf.title': { ru: 'Cloudflare', en: 'Cloudflare' },
    'feature.cf.text': { ru: 'Подключение зоны, управление proxy и защитой.', en: 'Zone connection, proxy management and protection.' },
    'feature.ssl.title': { ru: 'SSL сертификаты', en: 'SSL Certificates' },
    'feature.ssl.text': { ru: 'Бесплатный SSL и управление сертификатами.', en: 'Free SSL and certificate management.' },
    'feature.redirect.title': { ru: 'Редиректы', en: 'Redirects' },
    'feature.redirect.text': { ru: '301/302, www/non-www, URL forwarding.', en: '301/302, www/non-www, URL forwarding.' },
    'feature.bulk.title': { ru: 'Массовые операции', en: 'Bulk Operations' },
    'feature.bulk.text': { ru: 'Управление несколькими доменами одновременно.', en: 'Manage multiple domains at once.' },
    'feature.api.title': { ru: 'API доступ', en: 'API Access' },
    'feature.api.text': { ru: 'RESTful API для автоматизации и интеграций.', en: 'RESTful API for automation and integrations.' },
    'feature.crypto.title': { ru: 'Оплата криптой', en: 'Crypto Payments' },
    'feature.crypto.text': { ru: 'Быстрая оплата через CryptoBot и другие методы.', en: 'Fast payment via CryptoBot and other methods.' },

    /* ---- How It Works ---- */
    'how.title': { ru: 'Как это работает', en: 'How It Works' },
    'how.subtitle': { ru: 'От проверки до управления — за 5 простых шагов', en: 'From check to management — in 5 simple steps' },
    'how.step1.title': { ru: 'Проверка домена', en: 'Check Domain' },
    'how.step1.text': { ru: 'Отправьте название домена боту', en: 'Send a domain name to the bot' },
    'how.step2.title': { ru: 'Выбор зоны', en: 'Choose Zone' },
    'how.step2.text': { ru: 'Выберите доменную зону из доступных', en: 'Select a domain zone from available options' },
    'how.step3.title': { ru: 'Оплата', en: 'Payment' },
    'how.step3.text': { ru: 'Оплатите криптовалютой через CryptoBot', en: 'Pay with cryptocurrency via CryptoBot' },
    'how.step4.title': { ru: 'Домен готов', en: 'Domain Ready' },
    'how.step4.text': { ru: 'Домен зарегистрирован и привязан к аккаунту', en: 'Domain registered and linked to your account' },
    'how.step5.title': { ru: 'Управление', en: 'Management' },
    'how.step5.text': { ru: 'DNS, SSL, Cloudflare, редиректы — всё в боте', en: 'DNS, SSL, Cloudflare, redirects — all in the bot' },

    /* ---- Trust ---- */
    'trust.title': { ru: 'Почему это безопасно', en: 'Why It\'s Safe' },
    'trust.registrar.title': { ru: 'Аккредитованные регистраторы', en: 'Accredited Registrars' },
    'trust.registrar.text': { ru: 'Регистрация через ICANN-аккредитованных партнёров', en: 'Registration through ICANN-accredited partners' },
    'trust.lock.title': { ru: 'Защита трансфера', en: 'Transfer Protection' },
    'trust.lock.text': { ru: 'Автоматическая блокировка трансфера домена', en: 'Automatic domain transfer lock' },
    'trust.payment.title': { ru: 'Прозрачная оплата', en: 'Transparent Payment' },
    'trust.payment.text': { ru: 'Чёткие цены без скрытых платежей', en: 'Clear pricing with no hidden fees' },
    'trust.support.title': { ru: 'Поддержка 24/7', en: '24/7 Support' },
    'trust.support.text': { ru: 'Помощь в любое время через Telegram', en: 'Help anytime via Telegram' },

    /* ---- Pricing Preview ---- */
    'pricing.title': { ru: 'Популярные зоны', en: 'Popular Zones' },
    'pricing.subtitle': { ru: 'Примерные цены на регистрацию доменов', en: 'Approximate domain registration prices' },
    'pricing.all': { ru: 'Все цены и зоны', en: 'All Prices & Zones' },
    'pricing.from': { ru: 'от', en: 'from' },
    'pricing.year': { ru: '/год', en: '/year' },
    'pricing.note': { ru: 'Точные цены отображаются в боте при проверке домена', en: 'Exact prices are shown in the bot when checking a domain' },

    /* ---- API Preview ---- */
    'api.title': { ru: 'API для разработчиков', en: 'API for Developers' },
    'api.text': { ru: 'Интегрируйте управление доменами в свои проекты с помощью нашего RESTful API.', en: 'Integrate domain management into your projects with our RESTful API.' },
    'api.feature1': { ru: 'RESTful JSON API', en: 'RESTful JSON API' },
    'api.feature2': { ru: 'Полное управление доменами', en: 'Full domain management' },
    'api.feature3': { ru: 'Подробная документация', en: 'Detailed documentation' },
    'api.more': { ru: 'Подробнее об API', en: 'Learn More About API' },

    /* ---- FAQ ---- */
    'faq.title': { ru: 'Частые вопросы', en: 'FAQ' },
    'faq.all': { ru: 'Все вопросы', en: 'All Questions' },

    'faq.q1': { ru: 'Как начать работу с ботом?', en: 'How to start using the bot?' },
    'faq.a1': { ru: 'Откройте @BuyDomain_BOT в Telegram и нажмите /start. Отправьте доменное имя для проверки — бот покажет доступность и цену.', en: 'Open @BuyDomain_BOT in Telegram and press /start. Send a domain name to check — the bot will show availability and price.' },
    'faq.q2': { ru: 'Какие способы оплаты поддерживаются?', en: 'What payment methods are supported?' },
    'faq.a2': { ru: 'Оплата производится криптовалютой через CryptoBot. Поддерживаются Bitcoin, Ethereum, USDT, TON и другие криптовалюты.', en: 'Payment is made with cryptocurrency via CryptoBot. Bitcoin, Ethereum, USDT, TON and other cryptocurrencies are supported.' },
    'faq.q3': { ru: 'Какие доменные зоны доступны?', en: 'What domain zones are available?' },
    'faq.a3': { ru: 'Доступны сотни доменных зон: .com, .net, .org, .dev, .io, .app и многие другие. Полный список можно посмотреть в боте.', en: 'Hundreds of domain zones are available: .com, .net, .org, .dev, .io, .app and many more. Full list is available in the bot.' },
    'faq.q4': { ru: 'Нужна ли верификация (KYC)?', en: 'Is verification (KYC) required?' },
    'faq.a4': { ru: 'Для регистрации большинства доменов требуется минимум данных. Мы не запрашиваем документы или паспортные данные.', en: 'Most domain registrations require minimal data. We don\'t request documents or passport data.' },
    'faq.q5': { ru: 'Можно ли перенести домен?', en: 'Can I transfer a domain?' },
    'faq.a5': { ru: 'Да, вы можете перенести существующий домен к нам или от нас. Трансфер выполняется через бота.', en: 'Yes, you can transfer an existing domain to us or from us. Transfer is done through the bot.' },

    /* ---- CTA ---- */
    'cta.title': { ru: 'Готовы попробовать?', en: 'Ready to Try?' },
    'cta.text': { ru: 'Запустите бота и купите свой первый домен за минуту', en: 'Launch the bot and buy your first domain in a minute' },
    'cta.btn': { ru: 'Запустить бота в Telegram', en: 'Launch Bot in Telegram' },

    /* ---- Footer ---- */
    'footer.desc': {
      ru: 'Покупка и управление доменами через Telegram бота. Быстро, безопасно, с оплатой криптовалютой.',
      en: 'Buy and manage domains via Telegram bot. Fast, secure, with crypto payments.'
    },
    'footer.nav': { ru: 'Навигация', en: 'Navigation' },
    'footer.services': { ru: 'Возможности', en: 'Features' },
    'footer.legal': { ru: 'Юридическое', en: 'Legal' },
    'footer.terms': { ru: 'Условия использования', en: 'Terms of Service' },
    'footer.privacy': { ru: 'Политика конфиденциальности', en: 'Privacy Policy' },
    'footer.copy': { ru: '© 2026 BuyDomain BOT. Все права защищены.', en: '© 2026 BuyDomain BOT. All rights reserved.' },

    /* ---- Misc ---- */
    'copy.link': { ru: 'Скопировать ссылку', en: 'Copy Link' },
    'chat.replay': { ru: 'Повторить демо', en: 'Replay Demo' },
    'chat.title': { ru: 'Попробуйте в действии', en: 'Try It in Action' },
    'chat.subtitle': { ru: 'Посмотрите, как работает бот', en: 'See how the bot works' },
    'theme.toggle': { ru: 'Сменить тему', en: 'Toggle Theme' }
  };

  function applyTranslations(lang) {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang]) {
        // Check if it's an input placeholder
        if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
          el.setAttribute('placeholder', translations[key][lang]);
        } else {
          el.textContent = translations[key][lang];
        }
      }
    });

    // Update aria-labels
    var ariaElements = document.querySelectorAll('[data-i18n-aria]');
    ariaElements.forEach(function(el) {
      var key = el.getAttribute('data-i18n-aria');
      if (translations[key] && translations[key][lang]) {
        el.setAttribute('aria-label', translations[key][lang]);
      }
    });
  }

  function initLangToggle() {
    var toggle = document.querySelector('.lang-toggle');
    if (!toggle) return;

    var currentLang = localStorage.getItem('lang') || 'ru';
    document.documentElement.setAttribute('lang', currentLang);
    toggle.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    applyTranslations(currentLang);

    toggle.addEventListener('click', function() {
      var current = document.documentElement.getAttribute('lang') || 'ru';
      var next = current === 'ru' ? 'en' : 'ru';

      document.documentElement.setAttribute('lang', next);
      localStorage.setItem('lang', next);
      toggle.textContent = next === 'ru' ? 'EN' : 'RU';
      applyTranslations(next);
    });
  }

  // Expose for external use
  window.BuyDomainI18n = {
    translations: translations,
    apply: applyTranslations
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangToggle);
  } else {
    initLangToggle();
  }
})();
