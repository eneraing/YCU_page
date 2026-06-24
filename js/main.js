/* ============================================
   白羽大学 Shiroha University - Core
   SPA Router + BGM
   ============================================ */
(function() {
  'use strict';

  var currentSeason = (function() {
    var m = new Date().getMonth() + 1;
    if (m >= 3 && m <= 5) return 'spring';
    if (m >= 6 && m <= 8) return 'summer';
    if (m >= 9 && m <= 11) return 'autumn';
    return 'winter';
  })();

  // ============ Loading Screen ============
  function initLoading() {
    var ls = document.getElementById('loading-screen');
    if (!ls) { document.body.style.overflow = ''; initAll(); return; }
    setTimeout(function() {
      ls.classList.add('hidden');
      document.body.style.overflow = '';
      setTimeout(initAll, 300);
    }, 3500);
  }

  // ============ BGM ============
  var bgmAudio = null;
  var bgmBuilt = false;

  function bgmBuild() {
    if (bgmBuilt) return;
    bgmBuilt = true;

    bgmAudio = new Audio('audio/brand-new-sky.wav');
    bgmAudio.loop = true;
    bgmAudio.volume = 0.3;
    bgmAudio.preload = 'auto';

    var player = document.createElement('div');
    player.id = 'bgm-player';
    player.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);z-index:1500;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.92);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);padding:8px 18px;border-radius:50px;box-shadow:0 4px 20px rgba(0,0,0,0.12)';

    var btn = document.createElement('button');
    btn.id = 'bgm-btn';
    btn.style.cssText = 'width:36px;height:36px;border-radius:50%;border:none;background:#1C3B5E;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;flex-shrink:0';
    btn.title = 'Brand New Sky';

    function makeSVG(pathData, hidden) {
      var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.setAttribute('width','17');svg.setAttribute('height','17');
      svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');
      svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','2');
      if (hidden) svg.style.display = 'none';
      var p = document.createElementNS('http://www.w3.org/2000/svg','path');
      p.setAttribute('d', pathData);
      svg.appendChild(p);
      return svg;
    }

    var svgPlay = makeSVG('M8 5v14l11-7z', false);
    var svgPause = makeSVG('M6 4h4v16H6zM14 4h4v16h-4z', true);
    btn.appendChild(svgPlay);
    btn.appendChild(svgPause);

    var label = document.createElement('span');
    label.textContent = 'Brand New Sky';
    label.style.cssText = 'font-size:0.78rem;color:#555;letter-spacing:0.04em;white-space:nowrap';
    player.appendChild(btn);
    player.appendChild(label);
    document.body.appendChild(player);

    function updateUI() {
      if (bgmAudio.paused) {
        svgPlay.style.display = ''; svgPause.style.display = 'none'; btn.style.background = '#1C3B5E';
      } else {
        svgPlay.style.display = 'none'; svgPause.style.display = ''; btn.style.background = '#D32F2F';
      }
    }

    btn.addEventListener('click', function() {
      if (bgmAudio.paused) {
        bgmAudio.play().then(updateUI).catch(function(){});
      } else {
        bgmAudio.pause();
        updateUI();
      }
    });

    function tryAutoPlay() {
      updateUI();
      bgmAudio.play().catch(function() {
        var events = ['click','scroll','keydown','touchstart'];
        function resume() {
          if (bgmAudio.paused) { bgmAudio.play().then(updateUI).catch(function(){}); }
          events.forEach(function(e) { document.removeEventListener(e, resume); });
        }
        events.forEach(function(e) { document.addEventListener(e, resume, {once:true,passive:true}); });
      });
    }

    bgmAudio.addEventListener('canplaythrough', function() {
      bgmAudio.removeEventListener('canplaythrough', arguments.callee);
      tryAutoPlay();
    });
  }

  // ============ SPA Router ============
  var homeContent = null;
  var currentRoute = 'home';

  var routes = {
    'home':       { file: null,                     title: '白羽大学 | Shiroha University' },
    'about-page': { file: 'pages/about.html',       title: '关于白大 | 白羽大学' },
    'campuses':   { file: 'pages/campuses.html',    title: '三大校区 | 白羽大学' },
    'academic':   { file: 'pages/academic.html',    title: '学术体系 | 白羽大学' },
    'admissions': { file: 'pages/admissions.html',  title: '招生 | 白羽大学' },
    'life':       { file: 'pages/campus-life.html', title: '校园生活 | 白羽大学' },
    'shiroha-os': { file: 'pages/shiroha-os.html',  title: 'Shiroha OS | 白羽大学' },
    'alumni':     { file: 'pages/alumni.html',      title: '校友网络 | 白羽大学' }
  };

  var fileToRoute = {
    'index.html': 'home',
    'pages/about.html': 'about-page',
    'pages/campuses.html': 'campuses',
    'pages/academic.html': 'academic',
    'pages/admissions.html': 'admissions',
    'pages/campus-life.html': 'life',
    'pages/shiroha-os.html': 'shiroha-os',
    'pages/alumni.html': 'alumni'
  };

  function loadPageContent(url, callback) {
    var done = false;
    var timer = setTimeout(function() {
      if (!done) { done = true; callback(null); }
    }, 15000);

    function extractHTML(html) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      var styles = '';
      doc.head.querySelectorAll('style').forEach(function(s) { styles += s.outerHTML; });
      var body = doc.body;
      var nav = body.querySelector('nav#main-nav'); if (nav) nav.remove();
      var mo = body.querySelector('.mobile-nav-overlay'); if (mo) mo.remove();
      var ft = body.querySelector('footer.site-footer') || body.querySelector('footer'); if (ft) ft.remove();
      body.querySelectorAll('script').forEach(function(s) { s.remove(); });
      return { styles: styles, bodyHTML: body.innerHTML };
    }

    // Try fetch first (HTTP)
    fetch(url)
      .then(function(r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function(html) {
        if (done) return;
        clearTimeout(timer);
        done = true;
        callback(extractHTML(html));
      })
      .catch(function() {
        // Fetch failed, try iframe (file:// fallback)
        if (done) return;
        var iframe = document.createElement('iframe');
        iframe.style.cssText = 'position:absolute;width:0;height:0;border:0;visibility:hidden;top:-9999px';
        iframe.onload = function() {
          if (done) return;
          clearTimeout(timer);
          done = true;
          try {
            var d = iframe.contentDocument || iframe.contentWindow.document;
            var html = '<!DOCTYPE html><html><head>' + d.head.innerHTML + '</head><body>' + d.body.innerHTML + '</body></html>';
            document.body.removeChild(iframe);
            callback(extractHTML(html));
          } catch(e) {
            document.body.removeChild(iframe);
            callback(null);
          }
        };
        iframe.src = url;
        document.body.appendChild(iframe);
      });
  }

  function navigateTo(routeName, addHistory, scrollAnchor) {
    var route = routes[routeName];
    if (!route) return;

    if (routeName === 'shiroha-os') {
      document.body.classList.add('os-mode');
    } else {
      document.body.classList.remove('os-mode');
    }

    var app = document.getElementById('app-content');
    if (!app) return;

    if (routeName === 'home') {
      app.innerHTML = homeContent;
      document.title = route.title;
      currentRoute = 'home';
      reinitPage();
      window.scrollTo(0, 0);
      if (scrollAnchor) {
        setTimeout(function() {
          var el = document.getElementById(scrollAnchor);
          if (el) el.scrollIntoView({behavior:'smooth'});
        }, 200);
      }
      return;
    }

    loadPageContent(route.file, function(result) {
      if (!result) return;
      app.innerHTML = result.styles + result.bodyHTML;
      document.title = route.title;
      if (addHistory !== false) {
        history.pushState({route:routeName}, '', '#' + routeName);
      }
      currentRoute = routeName;
      reinitPage();
      window.scrollTo(0, 0);
      if (scrollAnchor) {
        setTimeout(function() {
          var el = document.getElementById(scrollAnchor);
          if (el) el.scrollIntoView({behavior:'smooth'});
        }, 200);
      }
    });
  }

  function reinitPage() {
    clearOSEffects();
    if (currentRoute === 'shiroha-os') setTimeout(initOSEffects, 100);
    initHero();
    initAnims();
    initCounters();
    initSeason();
    initBTT();
    initShiroha();
    updateNavActive();
    if (typeof applyTranslations === 'function') applyTranslations();
  }

  function updateNavActive() {
    var map = {
      'home': '#about', 'about-page': 'pages/about.html',
      'campuses': 'pages/campuses.html', 'academic': 'pages/academic.html',
      'admissions': 'pages/admissions.html', 'life': 'pages/campus-life.html',
      'shiroha-os': 'pages/shiroha-os.html', 'alumni': 'pages/alumni.html'
    };
    document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.remove('active'); });
    var target = map[currentRoute];
    if (target) {
      document.querySelectorAll('.nav-link').forEach(function(l) {
        if (l.getAttribute('href') === target || l.getAttribute('data-orig-href') === target) l.classList.add('active');
      });
    }
  }

  function initRouter() {
    var app = document.getElementById('app-content');
    if (app) homeContent = app.innerHTML;

    // Rewrite file-based links to hash-based
    function rewriteLinks(root) {
      if (!root.querySelectorAll) return;
      root.querySelectorAll('a').forEach(function(a) {
        var href = a.getAttribute('href');
        if (!href) return;
        if (href.startsWith('http') || href.startsWith('//') || href.startsWith('#')) return;
        var clean = href.replace(/^\.\//, '').split('#')[0];
        var route = fileToRoute[clean];
        if (!route) {
          for (var k in fileToRoute) {
            if (clean === k || clean.endsWith('/' + k)) { route = fileToRoute[k]; break; }
          }
        }
        if (route) {
          a.setAttribute('data-orig-href', href);
          var anchorPart = href.indexOf('#') > 0 ? href.split('#').slice(1).join('#') : '';
          a.setAttribute('href', '#' + route + (anchorPart ? '#' + anchorPart : ''));
        }
      });
    }
    rewriteLinks(document.body);

    var obs = new MutationObserver(function(muts) {
      muts.forEach(function(m) {
        m.addedNodes.forEach(function(n) {
          if (n.nodeType === 1) rewriteLinks(n);
        });
      });
    });
    obs.observe(app, { childList: true, subtree: true });

    function handleHash() {
      var hash = window.location.hash.replace(/^#/, '');
      if (!hash) hash = 'home';
      var parts = hash.split('#');
      var routeName = parts[0];
      var scrollAnchor = parts.length > 1 ? parts.slice(1).join('#') : '';
      if (!routes[routeName]) {
        if (currentRoute !== 'home') navigateTo('home', false, routeName);
        return;
      }
      if (routeName === currentRoute) {
        if (scrollAnchor) {
          var el = document.getElementById(scrollAnchor);
          if (el) el.scrollIntoView({behavior:'smooth'});
        }
        return;
      }
      navigateTo(routeName, false, scrollAnchor || undefined);
    }

    window.addEventListener('hashchange', handleHash);

    var initHash = window.location.hash.replace(/^#/, '');
    if (initHash && routes[initHash]) {
      history.replaceState({route:initHash}, '', '#' + initHash);
      handleHash();
    } else {
      history.replaceState({route:'home'}, '', window.location.pathname);
    }

    window.addEventListener('popstate', function(e) {
      var route = (e.state && e.state.route) || 'home';
      if (route !== currentRoute) navigateTo(route, false);
    });
  }

  // ============ Shiroha OS Effects ============
  var osClockInterval = null;

  function initOSEffects() {
    var stars = document.getElementById('os-stars');
    if (stars && !stars.hasChildNodes()) {
      for (var i = 0; i < 80; i++) {
        var s = document.createElement('div');
        s.className = 'os-star';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.width = s.style.height = (1 + Math.random() * 2) + 'px';
        s.style.setProperty('--dur', (2 + Math.random() * 4) + 's');
        s.style.setProperty('--delay', Math.random() * 4 + 's');
        stars.appendChild(s);
      }
    }
    var rain = document.getElementById('os-datarain');
    if (rain && !rain.textContent) {
      var chars = '01abcdef';
      var lines = [];
      for (var j = 0; j < 40; j++) {
        var line = '';
        for (var k = 0; k < 25; k++) {
          line += chars[Math.floor(Math.random() * chars.length)];
          if (k > 0 && k % 6 === 0) line += ' ';
        }
        lines.push(line);
      }
      rain.textContent = lines.join('\n');
    }
    if (osClockInterval) clearInterval(osClockInterval);
    function tick() {
      var el = document.getElementById('os-clock');
      var se = document.getElementById('os-sessions');
      if (!el && !se) { clearInterval(osClockInterval); osClockInterval = null; return; }
      if (el) {
        var d = new Date();
        el.textContent = d.getUTCHours().toString().padStart(2,'0') + ':' +
          d.getUTCMinutes().toString().padStart(2,'0') + ':' +
          d.getUTCSeconds().toString().padStart(2,'0') + ' UTC';
      }
      if (se) se.textContent = Math.floor(Math.random() * 300 + 800);
    }
    tick();
    osClockInterval = setInterval(tick, 1000);
  }

  function clearOSEffects() {
    if (osClockInterval) { clearInterval(osClockInterval); osClockInterval = null; }
  }

  // ============ Hero Slides ============
  function initHero() {
    var slides = document.querySelectorAll('.hero-slide');
    var dots = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;
    var cur = 0;
    function show(i) {
      slides.forEach(function(s) { s.classList.remove('active'); });
      dots.forEach(function(d) { d.classList.remove('active'); });
      if (slides[i]) slides[i].classList.add('active');
      if (dots[i]) dots[i].classList.add('active');
    }
    dots.forEach(function(d, i) { d.addEventListener('click', function() { cur = i; show(cur); }); });
    setInterval(function() { cur = (cur + 1) % slides.length; show(cur); }, 6000);
    show(0);
  }

  // ============ Navigation ============
  function initNav() {
    var nav = document.getElementById('main-nav'); if (!nav) return;
    window.addEventListener('scroll', function() { nav.classList.toggle('scrolled', window.scrollY > 80); }, { passive: true });
    var mb = document.querySelector('.mobile-menu-btn');
    var mo = document.querySelector('.mobile-nav-overlay');
    var mc = document.querySelector('.mobile-nav-close');
    if (mb && mo) mb.addEventListener('click', function() { mo.classList.add('show'); });
    if (mc && mo) mc.addEventListener('click', function() { mo.classList.remove('show'); });
    if (mo) mo.querySelectorAll('a').forEach(function(a) { a.addEventListener('click', function() { mo.classList.remove('show'); }); });
  }

  // ============ Scroll Animations ============
  function initAnims() {
    var obs = new IntersectionObserver(function(es) {
      es.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.fade-in').forEach(function(el) { obs.observe(el); });
  }

  // ============ Back to Top ============
  function initBTT() {
    var b = document.querySelector('.back-to-top'); if (!b) return;
    window.addEventListener('scroll', function() { b.classList.toggle('visible', window.scrollY > 500); }, { passive: true });
    b.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  // ============ Shiroha Guide ============
  function initShiroha() {
    var g = document.getElementById('shiroha-guide');
    var bub = g ? g.querySelector('.shiroha-bubble') : null;
    var av = g ? g.querySelector('.shiroha-avatar') : null;
    if (!g) return;
    var msgs = {
      winter: ['\u201C\u5916\u9762\u5F88\u51B7\uFF0C\u4E0D\u8FC7\u8FD9\u91CC\u4E00\u76F4\u6709\u706F\u3002\u201D','\u201C\u4ECA\u5929\u4E5F\u662F\u5B89\u9759\u7684\u4E00\u5929\u5462\u3002\u201D'],
      summer: ['\u201C\u4ECA\u5929\u4E5F\u4E0D\u8981\u5FD8\u8BB0\u89C2\u5BDF\u5929\u7A7A\u3002\u201D','\u201C\u5FAE\u98CE\u5F88\u8212\u670D\u5427\uFF1F\u201D'],
      autumn: ['\u201C\u6709\u4E9B\u4E1C\u897F\u4F1A\u51CB\u96F6\u3002\u201D','\u201C\u4F46\u88AB\u8BB0\u4F4F\u7684\u4E1C\u897F\uFF0C\u4E0D\u4F1A\u771F\u6B63\u6D88\u5931\u3002\u201D'],
      spring: ['\u201C\u4EE5\u524D\u7684\u4EBA\u7C7B\u5BB3\u6015\u5929\u7A7A\u3002\u201D','\u201C\u540E\u6765\uFF0C\u4ED6\u4EEC\u53D1\u73B0\u5929\u7A7A\u4E5F\u5728\u7B49\u5F85\u4ED6\u4EEC\u3002\u201D']
    };
    var idx = 0, vis = false, lastS = 0;
    function show() {
      if (!bub) return;
      var m = msgs[currentSeason] || msgs.summer;
      bub.textContent = m[idx % m.length];
      g.classList.add('visible');
      vis = true;
      idx++;
    }
    function hide() { g.classList.remove('visible'); vis = false; }
    if (av) av.addEventListener('click', function(e) { e.stopPropagation(); vis ? hide() : show(); });
    window.addEventListener('scroll', function() {
      var pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      var n = Date.now();
      if ((pct > 0.3 && pct < 0.35) || (pct > 0.7 && pct < 0.75)) {
        if (!vis && n - lastS > 30000) { show(); lastS = n; }
      }
      if (vis && n - lastS > 8000) hide();
    }, { passive: true });
    setTimeout(function() { if (!vis) show(); }, 6000);
  }

  // ============ Seasonal ============
  function initSeason() {
    document.body.setAttribute('data-season', currentSeason);
    var qs = document.querySelectorAll('.hero-quote');
    var sq = {
      spring: '\u201C\u6211\u8981\u53BB\u54EA\u91CC\uFF1F\u201D \u2014\u2014 \u6625\u00B7\u9AD8\u98DE\u7EAA\u5FF5\u65E5',
      summer: '\u201C\u6211\u6B63\u5728\u7ECF\u5386\u4EC0\u4E48\uFF1F\u201D \u2014\u2014 \u590F\u00B7\u590F\u672B\u796D',
      autumn: '\u201C\u6211\u7559\u4E0B\u4E86\u4EC0\u4E48\uFF1F\u201D \u2014\u2014 \u79CB\u00B7\u4E07\u53F6\u8282',
      winter: '\u201C\u6211\u5982\u4F55\u575A\u6301\uFF1F\u201D \u2014\u2014 \u51AC\u00B7\u6781\u591C\u8282'
    };
    qs.forEach(function(q) { q.textContent = sq[currentSeason] || sq.summer; });
  }

  // ============ Counters ============
  function initCounters() {
    var cs = document.querySelectorAll('.stat-number');
    var obs = new IntersectionObserver(function(es) {
      es.forEach(function(e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var tgt = parseInt(el.getAttribute('data-target') || el.textContent);
        var dur = 2000;
        var st = performance.now();
        function up(now) {
          var p = Math.min((now - st) / dur, 1);
          var ev = 1 - Math.pow(1 - p, 3);
          var cv = Math.round(tgt * ev);
          el.textContent = tgt > 1000 ? cv.toLocaleString() + '+' : cv;
          if (p < 1) requestAnimationFrame(up);
        }
        requestAnimationFrame(up);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    cs.forEach(function(c) { obs.observe(c); });
  }

  // ============ Init All ============
  function initAll() {
    bgmBuild();
    initRouter();
    initHero();
    initNav();
    initAnims();
    initBTT();
    initShiroha();
    initCounters();
    initSeason();
  }

  document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('loading-screen')) document.body.style.overflow = 'hidden';
    initLoading();
  });
})();
