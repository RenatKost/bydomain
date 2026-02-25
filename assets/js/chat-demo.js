/* ============================================
   BuyDomain BOT — Chat Demo Simulation
   ============================================ */

(function() {
  'use strict';

  var MESSAGES_RU = [
    { from: 'user', text: '/start' },
    { from: 'bot', text: 'Привет! 👋 Я BuyDomain BOT — помогу найти и купить домен прямо в Telegram.', delay: 800 },
    { from: 'bot', text: 'Отправьте мне доменное имя для проверки, например: example.com', delay: 1000 },
    { from: 'user', text: 'myproject.dev', delay: 1500 },
    { from: 'bot', text: '🔍 Проверяю домен myproject.dev...', delay: 800 },
    { from: 'bot', text: '✅ Домен myproject.dev свободен!\n\n💰 Стоимость: от $12.99/год\n\nГотовы к покупке?', delay: 1500 },
    { from: 'user', text: 'Да, покупаю!', delay: 1200 },
    { from: 'bot', text: '🎉 Отлично! Создаю инвойс на оплату...\n\n💳 Оплата криптовалютой через CryptoBot.\nПосле оплаты домен будет готов к управлению!', delay: 1200 },
    { from: 'bot', text: '✅ Домен myproject.dev зарегистрирован!\n\n🔧 Теперь вы можете:\n• Управлять DNS записями\n• Настроить Cloudflare\n• Получить SSL сертификат\n• Настроить редиректы', delay: 1500 }
  ];

  var MESSAGES_EN = [
    { from: 'user', text: '/start' },
    { from: 'bot', text: 'Hello! 👋 I\'m BuyDomain BOT — I\'ll help you find and buy a domain right in Telegram.', delay: 800 },
    { from: 'bot', text: 'Send me a domain name to check, for example: example.com', delay: 1000 },
    { from: 'user', text: 'myproject.dev', delay: 1500 },
    { from: 'bot', text: '🔍 Checking domain myproject.dev...', delay: 800 },
    { from: 'bot', text: '✅ Domain myproject.dev is available!\n\n💰 Price: from $12.99/year\n\nReady to buy?', delay: 1500 },
    { from: 'user', text: 'Yes, buy it!', delay: 1200 },
    { from: 'bot', text: '🎉 Great! Creating payment invoice...\n\n💳 Crypto payment via CryptoBot.\nAfter payment, the domain will be ready to manage!', delay: 1200 },
    { from: 'bot', text: '✅ Domain myproject.dev registered!\n\n🔧 Now you can:\n• Manage DNS records\n• Set up Cloudflare\n• Get SSL certificate\n• Configure redirects', delay: 1500 }
  ];

  function getMessages() {
    var lang = document.documentElement.getAttribute('lang') || 'ru';
    return lang === 'en' ? MESSAGES_EN : MESSAGES_RU;
  }

  function initChatDemo() {
    var container = document.querySelector('.chat-demo__messages');
    var replayBtn = document.querySelector('.chat-demo__replay');
    if (!container) return;

    var isPlaying = false;
    var abortController = null;

    function clearMessages() {
      container.innerHTML = '';
    }

    function addMessage(msg) {
      var el = document.createElement('div');
      el.className = 'chat-msg chat-msg--' + msg.from;
      el.textContent = msg.text;
      container.appendChild(el);
      container.scrollTop = container.scrollHeight;
    }

    function addTyping() {
      var el = document.createElement('div');
      el.className = 'chat-msg--typing';
      el.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
      el.id = 'typing-indicator';
      container.appendChild(el);
      container.scrollTop = container.scrollHeight;
    }

    function removeTyping() {
      var typing = document.getElementById('typing-indicator');
      if (typing) typing.remove();
    }

    function sleep(ms, signal) {
      return new Promise(function(resolve, reject) {
        var timer = setTimeout(resolve, ms);
        if (signal) {
          signal.addEventListener('abort', function() {
            clearTimeout(timer);
            reject(new DOMException('Aborted', 'AbortError'));
          });
        }
      });
    }

    async function playDemo() {
      if (isPlaying) return;
      isPlaying = true;
      abortController = new AbortController();
      var signal = abortController.signal;

      clearMessages();

      var messages = getMessages();

      try {
        for (var i = 0; i < messages.length; i++) {
          var msg = messages[i];
          var delay = msg.delay || 600;

          if (msg.from === 'bot') {
            addTyping();
            await sleep(delay, signal);
            removeTyping();
          } else {
            await sleep(delay, signal);
          }

          addMessage(msg);
        }
      } catch(e) {
        if (e.name !== 'AbortError') throw e;
      }

      isPlaying = false;
    }

    function stopDemo() {
      if (abortController) {
        abortController.abort();
      }
      isPlaying = false;
    }

    if (replayBtn) {
      replayBtn.addEventListener('click', function() {
        stopDemo();
        setTimeout(playDemo, 50);
      });
    }

    // Auto-play when visible
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !isPlaying && container.children.length === 0) {
          playDemo();
        }
      });
    }, { threshold: 0.3 });

    var demoEl = document.querySelector('.chat-demo');
    if (demoEl) {
      observer.observe(demoEl);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatDemo);
  } else {
    initChatDemo();
  }
})();
