/* =============================================================================
   TRA IL FUOCO DELL'ETNA E TAORMINA: logica del sito
   Nessuna dipendenza esterna. ~1 file, tutto commentato in italiano.
   ============================================================================= */
(function () {
'use strict';

const CFG   = window.SITE_CONFIG || {};
const IMG   = 'assets/images/optimized/';
const $     = (s, r) => (r || document).querySelector(s);
const $$    = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lang = CFG.DEFAULT_LANG || 'it';

/* ------------------------------------------------------------ traduzioni */
function t(key) {
  if (lang !== 'it' && window.I18N && window.I18N[lang] && window.I18N[lang][key] != null)
    return window.I18N[lang][key];
  if (window.I18N_IT && window.I18N_IT[key] != null) return window.I18N_IT[key];
  if (window.I18N && window.I18N.en && window.I18N.en[key] != null) return window.I18N.en[key];
  return key;
}
function tf(key, vars) {
  return String(t(key)).replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));
}

/* ------------------------------------------------------- helper immagini */
function srcset(slug, widths, ext) {
  return widths.map(w => IMG + slug + '-' + w + '.' + ext + ' ' + w + 'w').join(', ');
}
function biggest(widths) { return widths[widths.length - 1]; }

/* Costruisce un <picture> con webp + jpg di fallback. */
function picture(slug, widths, alt, sizes, opts) {
  opts = opts || {};
  const w = biggest(widths);
  return '<picture>' +
    '<source type="image/webp" srcset="' + srcset(slug, widths, 'webp') + '" sizes="' + sizes + '">' +
    '<img src="' + IMG + slug + '-' + w + '.jpg" srcset="' + srcset(slug, widths, 'jpg') + '"' +
      ' sizes="' + sizes + '" alt="' + esc(alt) + '"' +
      ' loading="' + (opts.eager ? 'eager' : 'lazy') + '" decoding="async"' +
      (opts.pos ? ' style="object-position:' + opts.pos + '"' : '') + '>' +
  '</picture>';
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

/* =========================================================================
   1. CONFIGURAZIONE → PAGINA  (CIN, CIR, contatti, anno, mappa)
   ====================================================================== */
function isTodo(v) { return !v || /^\[/.test(String(v).trim()); }

/* Stringa da passare a Google Maps: pulita, senza parentesi né abbreviazioni. */
function mapQuery() {
  const street = isTodo(CFG.ADDRESS_STREET) ? '' : CFG.ADDRESS_STREET + ', ';
  return street
    ? street + CFG.ADDRESS_POSTAL + ' ' + CFG.ADDRESS_LOCALITY + ' ' + CFG.ADDRESS_PROVINCE + ', Italia'
    : CFG.ADDRESS_LOCALITY + ', ' + CFG.ADDRESS_PROVINCE + ', Sicilia, Italia';
}

/* La nota sotto la mappa cambia a seconda di quanto è precisa la posizione. */
function mapNoteText() {
  if (CFG.EXACT_LOCATION && CFG.LATITUDE) return t('dyn.mapNoteExact');
  if (!isTodo(CFG.ADDRESS_STREET))        return t('dyn.mapNoteAddr');
  return t('dyn.mapNote');
}

function applyConfig() {
  /* anno corrente nel footer */
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();

  /* codici CIN / CIR (footer + sezione contatti) */
  [['#cinBox', CFG.CIN], ['#cinBox2', CFG.CIN], ['#cirBox', CFG.CIR], ['#cirBox2', CFG.CIR]]
    .forEach(([sel, val]) => {
      const el = $(sel); if (!el) return;
      el.textContent = val || '[DA INSERIRE]';
      el.classList.toggle('todo', isTodo(val));
    });

  /* valutazione pubblica (opzionale) */
  const rl = $('#ratingLine');
  if (rl && CFG.SHOW_RATING && CFG.RATING_VALUE) {
    rl.hidden = false;
    rl.innerHTML = '<span class="stars" aria-hidden="true">★★★★★</span> ' +
      esc(tf('dyn.rating', { v: CFG.RATING_VALUE, n: CFG.RATING_COUNT, s: CFG.RATING_SOURCE }));
  }

  /* link ai portali negli elementi generati */
  $$('.js-book').forEach(b => b.addEventListener('click', openBookModal));

  /* indirizzo + Google Maps */
  const addr = $('#addrLine');
  const street = isTodo(CFG.ADDRESS_STREET) ? '' : CFG.ADDRESS_STREET;
  const full = (street ? street + ', ' : '') +
    (CFG.ADDRESS_POSTAL ? CFG.ADDRESS_POSTAL + ' ' : '') +
    CFG.ADDRESS_LOCALITY + ' (' + CFG.ADDRESS_PROVINCE + '), ' + CFG.ADDRESS_REGION;
  if (addr) {
    addr.innerHTML = street
      ? esc(full)
      : '<span class="todo">' + esc(t('dyn.addrTodo')) + '</span><br>' + esc(full);
  }

  const ml = $('#mapsLink');
  if (ml) {
    ml.href = (CFG.EXACT_LOCATION && CFG.LATITUDE)
      ? 'https://www.google.com/maps/search/?api=1&query=' + CFG.LATITUDE + ',' + CFG.LONGITUDE
      : 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(mapQuery());
  }
  const mn = $('#mapNote');
  if (mn) mn.textContent = mapNoteText();

  /* contatti */
  buildContacts();

  /* anno di inizio attività dell'host */
  const hl = $('#hostLine');
  if (hl && CFG.HOST_SINCE_YEAR)
    hl.textContent = tf('dyn.host', { n: CFG.HOST_NAME, y: CFG.HOST_SINCE_YEAR });
}

const ICON = {
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3zM3 7l9 6 9-6"/></svg>',
  phone:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/></svg>',
  pin:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  clock:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
};

function buildContacts() {
  const ul = $('#contactList'); if (!ul) return;
  const rows = [];

  if (CFG.EMAIL)
    rows.push(ICON.mail + '<span>' + esc(t('dyn.email')) + ': <a href="mailto:' + esc(CFG.EMAIL) + '">' + esc(CFG.EMAIL) + '</a></span>');
  else
    rows.push(ICON.mail + '<span class="todo">Email: [INSERIRE EMAIL]</span>');

  if (CFG.PHONE)
    rows.push(ICON.phone + '<span>' + esc(t('dyn.phone')) + ': <a href="tel:' + CFG.PHONE.replace(/[^\d+]/g, '') + '">' + esc(CFG.PHONE) + '</a></span>');
  if (CFG.WHATSAPP)
    rows.push(ICON.chat + '<span>WhatsApp: <a href="https://wa.me/' + CFG.WHATSAPP.replace(/\D/g, '') + '" target="_blank" rel="noopener noreferrer">' + esc(CFG.PHONE || CFG.WHATSAPP) + '</a></span>');

  const via = isTodo(CFG.ADDRESS_STREET) ? '' : CFG.ADDRESS_STREET + ', ';
  rows.push(ICON.pin + '<span>' + esc(via + CFG.ADDRESS_POSTAL + ' ' + CFG.ADDRESS_LOCALITY + ' (' + CFG.ADDRESS_PROVINCE + '), ' + CFG.ADDRESS_REGION) + '</span>');
  rows.push(ICON.clock + '<span>Check-in ' + esc(CFG.CHECKIN) + ' · Check-out ' + esc(CFG.CHECKOUT) + '</span>');
  rows.push(ICON.link + '<span><a href="' + esc(CFG.AIRBNB_URL) + '" target="_blank" rel="noopener noreferrer">' + esc(t('dyn.airbnbLink')) + '</a></span>');
  rows.push(ICON.link + '<span><a href="' + esc(CFG.BOOKING_URL) + '" target="_blank" rel="noopener noreferrer">' + esc(t('dyn.bookingLink')) + '</a></span>');

  ul.innerHTML = rows.map(r => '<li>' + r + '</li>').join('');

  const fc = $('#footerContact');
  if (fc && CFG.EMAIL) fc.innerHTML = '<a href="mailto:' + esc(CFG.EMAIL) + '">' + esc(CFG.EMAIL) + '</a>';
}

/* =========================================================================
   2. HEADER, MENU MOBILE, LINK ATTIVO, CTA MOBILE
   ====================================================================== */
function initHeader() {
  const header = $('#header'), nav = $('#nav'), burger = $('#burger'), mcta = $('#mobileCta');
  const hero = $('.hero');
  let open = false;

  function setSolid() {
    const past = window.scrollY > (hero ? Math.min(hero.offsetHeight - 90, window.innerHeight * .7) : 80);
    header.classList.toggle('is-solid', past || open);
    if (mcta) { mcta.hidden = false; mcta.classList.toggle('is-on', past); }
  }
  setSolid();
  window.addEventListener('scroll', () => requestAnimationFrame(setSolid), { passive: true });

  function toggle(force) {
    open = force != null ? force : !open;
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open && window.innerWidth < 1024 ? 'hidden' : '';
    setSolid();
  }
  burger.addEventListener('click', () => toggle());
  nav.addEventListener('click', e => { if (e.target.closest('a')) toggle(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) { toggle(false); burger.focus(); } });
  window.addEventListener('resize', () => { if (window.innerWidth >= 1024 && open) toggle(false); });

  /* evidenzia la voce di menu della sezione visibile */
  const links = $$('.nav-list a', nav);
  const sections = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(a => a.removeAttribute('aria-current'));
        const active = links.find(a => a.getAttribute('href') === '#' + en.target.id);
        if (active) active.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => io.observe(s));
  }
}

/* =========================================================================
   3. MODALE DI PRENOTAZIONE
   ====================================================================== */
let lastFocus = null;
function openBookModal() {
  const m = $('#bookModal'); if (!m) return;
  lastFocus = document.activeElement;
  m.hidden = false;
  document.body.style.overflow = 'hidden';
  const first = $('.modal-actions a', m); if (first) first.focus();
}
function closeBookModal() {
  const m = $('#bookModal'); if (!m || m.hidden) return;
  m.hidden = true;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
function initModal() {
  const m = $('#bookModal'); if (!m) return;
  m.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeBookModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBookModal(); });
  /* trappola del focus */
  m.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const f = $$('a[href], button', m).filter(el => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

/* =========================================================================
   4. CAROSELLO
   ====================================================================== */
const PHOTOS = window.PHOTOS || [];
let carIndex = 0;

function buildCarousel() {
  const track = $('#carTrack'), vp = $('#carViewport');
  if (!track || !PHOTOS.length) return;

  track.innerHTML = PHOTOS.map((p, i) =>
    '<li class="car-slide' + (i === 0 ? ' is-current' : '') + '" data-i="' + i + '">' +
      '<button type="button" data-lb="' + i + '" aria-label="' + esc(p.it) + ' (ingrandisci)">' +
        picture(p.s, p.w, p.it, '(min-width:1400px) 56vw, (min-width:760px) 64vw, 92vw', { eager: i < 2 }) +
      '</button>' +
    '</li>').join('');

  /* pallini */
  const dots = $('#carDots');
  dots.innerHTML = PHOTOS.map((p, i) =>
    '<button type="button" role="tab" data-go="' + i + '" aria-selected="' + (i === 0) + '"' +
    ' aria-label="' + esc(tf('dyn.slide', { i: i + 1, n: PHOTOS.length })) + '"></button>').join('');
  dots.addEventListener('click', e => {
    const b = e.target.closest('[data-go]'); if (b) goTo(+b.dataset.go);
  });

  $('#carPrev').addEventListener('click', () => goTo(carIndex - 1));
  $('#carNext').addEventListener('click', () => goTo(carIndex + 1));

  /* tastiera sul viewport */
  vp.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(carIndex + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(carIndex - 1); }
    if (e.key === 'Home')       { e.preventDefault(); goTo(0); }
    if (e.key === 'End')        { e.preventDefault(); goTo(PHOTOS.length - 1); }
    if (e.key === 'Enter' || e.key === ' ') {
      const cur = track.querySelector('.car-slide.is-current button');
      if (cur) { e.preventDefault(); cur.click(); }
    }
  });

  /* lo swipe è gestito nativamente dallo scroll-snap: qui leggiamo il risultato */
  let raf;
  vp.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => syncIndex(false));
  }, { passive: true });

  /* apertura lightbox */
  track.addEventListener('click', e => {
    const b = e.target.closest('[data-lb]');
    if (b) openLightbox(PHOTOS, +b.dataset.lb);
  });

  const gc = $('#galCount');
  if (gc) gc.textContent = tf('dyn.galCount', { n: PHOTOS.length });

  syncIndex(true);
}

function goTo(i) {
  const vp = $('#carViewport'), slides = $$('.car-slide');
  if (!slides.length) return;
  i = (i + slides.length) % slides.length;
  const s = slides[i];
  vp.scrollTo({
    left: s.offsetLeft - (vp.clientWidth - s.offsetWidth) / 2,
    behavior: REDUCED ? 'auto' : 'smooth'
  });
  carIndex = i;
  paint();
}

function syncIndex(force) {
  const vp = $('#carViewport'), slides = $$('.car-slide');
  if (!slides.length) return;
  const center = vp.scrollLeft + vp.clientWidth / 2;
  let best = 0, bestD = Infinity;
  slides.forEach((s, i) => {
    const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - center);
    if (d < bestD) { bestD = d; best = i; }
  });
  if (best !== carIndex || force) { carIndex = best; paint(); }
}

function paint() {
  $$('.car-slide').forEach((s, i) => s.classList.toggle('is-current', i === carIndex));
  $$('#carDots button').forEach((b, i) => b.setAttribute('aria-selected', String(i === carIndex)));
  const cap = $('#carCaption'), p = PHOTOS[carIndex];
  if (cap && p) cap.textContent = (carIndex + 1) + ' / ' + PHOTOS.length + ' · ' + (lang === 'en' ? p.en : p.it);
}

/* =========================================================================
   5. GALLERY COMPLETA (griglia + filtri)
   ====================================================================== */
const CAT_LABEL = {
  esterni:  { it: 'Esterni',  en: 'Exteriors' },
  interni:  { it: 'Interni',  en: 'Interiors' },
  camere:   { it: 'Camere',   en: 'Bedrooms'  },
  cucina:   { it: 'Cucina',   en: 'Kitchen'   },
  bagni:    { it: 'Bagni',    en: 'Bathrooms' },
  panorama: { it: 'Panorama', en: 'Views'     }
};
let galFilter = 'tutte';

function buildGallery() {
  const grid = $('#galGrid'), btn = $('#openAll'), filters = $('#galFilters');
  if (!grid || !PHOTOS.length) return;

  /* solo le categorie effettivamente presenti nelle foto */
  const cats = [];
  PHOTOS.forEach(p => { if (cats.indexOf(p.cat) < 0) cats.push(p.cat); });

  function renderFilters() {
    filters.innerHTML =
      '<button type="button" class="chip" role="tab" data-f="tutte" aria-selected="' + (galFilter === 'tutte') + '">' + esc(t('poi.tutte')) + '</button>' +
      cats.map(c => '<button type="button" class="chip" role="tab" data-f="' + c + '" aria-selected="' + (galFilter === c) + '">' +
        esc(CAT_LABEL[c] ? CAT_LABEL[c][lang] || CAT_LABEL[c].it : c) + '</button>').join('');
  }

  function renderGrid() {
    const list = PHOTOS.filter(p => galFilter === 'tutte' || p.cat === galFilter);
    $('#masonry').innerHTML = list.map(p => {
      const i = PHOTOS.indexOf(p);
      return '<figure><button type="button" data-lb="' + i + '" aria-label="' + esc(lang === 'en' ? p.en : p.it) + ' (ingrandisci)">' +
        picture(p.s, p.w, lang === 'en' ? p.en : p.it, '(min-width:980px) 30vw, (min-width:600px) 46vw, 92vw') +
        '</button></figure>';
    }).join('');
  }

  renderFilters(); renderGrid();

  filters.addEventListener('click', e => {
    const b = e.target.closest('[data-f]'); if (!b) return;
    galFilter = b.dataset.f; renderFilters(); renderGrid();
  });

  $('#masonry').addEventListener('click', e => {
    const b = e.target.closest('[data-lb]');
    if (b) openLightbox(PHOTOS, +b.dataset.lb);
  });

  btn.addEventListener('click', () => {
    const opening = grid.hidden;
    grid.hidden = !opening;
    btn.setAttribute('aria-expanded', String(opening));
    btn.textContent = opening ? t('gal.close') : t('gal.all');
    if (opening) grid.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
  });

  window.__renderGallery = function () { renderFilters(); renderGrid(); };
}

/* =========================================================================
   6. LIGHTBOX
   ====================================================================== */
let lbList = [], lbI = 0, lbOpener = null;

function openLightbox(list, i) {
  lbList = list; lbI = i; lbOpener = document.activeElement;
  const lb = $('#lightbox');
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  showLb();
  $('#lbClose').focus();
}
function showLb() {
  const p = lbList[lbI]; if (!p) return;
  const img = $('#lbImg');
  const alt = lang === 'en' ? p.en : p.it;
  img.src = IMG + p.s + '-' + biggest(p.w) + '.jpg';
  img.srcset = srcset(p.s, p.w, 'jpg');
  img.sizes = '96vw';
  img.alt = alt;
  $('#lbCap').textContent = alt;
  $('#lbCounter').textContent = (lbI + 1) + ' / ' + lbList.length;
}
function closeLb() {
  const lb = $('#lightbox'); if (lb.hidden) return;
  lb.hidden = true;
  document.body.style.overflow = '';
  if (lbOpener) lbOpener.focus();
}
function lbGo(d) { lbI = (lbI + d + lbList.length) % lbList.length; showLb(); }

function initLightbox() {
  const lb = $('#lightbox');
  $('#lbClose').addEventListener('click', closeLb);
  $('#lbPrev').addEventListener('click', () => lbGo(-1));
  $('#lbNext').addEventListener('click', () => lbGo(1));
  lb.addEventListener('click', e => {
    if (e.target === lb || e.target.classList.contains('lb-figure')) closeLb();
  });
  document.addEventListener('keydown', e => {
    if ($('#lightbox').hidden) return;
    if (e.key === 'Escape')      { e.preventDefault(); closeLb(); }
    if (e.key === 'ArrowRight')  { e.preventDefault(); lbGo(1); }
    if (e.key === 'ArrowLeft')   { e.preventDefault(); lbGo(-1); }
    if (e.key === 'Tab') {
      const f = $$('button', lb);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  /* swipe */
  let x0 = null, y0 = null;
  lb.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) lbGo(dx < 0 ? 1 : -1);
    x0 = y0 = null;
  }, { passive: true });
}

/* =========================================================================
   7. PUNTI DI INTERESSE
   ====================================================================== */
const POI = window.POI || [];
const TERR  = window.PHOTOS_TERRITORIO || {};
const VISIT = window.PHOTOS_VISIT || {};
let poiFilter = 'tutte';

/* Immagine di un luogo, presa da Visit/ (Unsplash) o dalle foto di casa. */
function terrPic(slug, alt, sizes) {
  const v = VISIT[slug];
  /* v.p è il punto di messa a fuoco: dice al browser quale parte tenere quando
     ritaglia la fotografia per riempire la scheda. Senza, il ritaglio parte dal
     centro e su molte verticali taglia via proprio il soggetto. */
  if (v) return picture(slug, v.w, lang === 'en' ? v.en : v.it, sizes, { pos: v.p });
  const meta = TERR[slug];
  if (meta) return picture(slug, meta.w, lang === 'en' ? meta.en : meta.it, sizes);
  const p = PHOTOS.find(x => x.s === slug);
  if (p) return picture(p.s, p.w, lang === 'en' ? p.en : p.it, sizes);
  return '';
}

/* Credito del fotografo. L'attribuzione non è obbligatoria con la licenza
   Unsplash, ma la mostriamo comunque: è giusto verso chi ha scattato. */
function terrCredit(slug) {
  const v = VISIT[slug];
  if (!v) return '';
  return '<a class="ph-credit" href="https://unsplash.com/photos/' + esc(v.u) + '"' +
    ' target="_blank" rel="noopener noreferrer nofollow"' +
    ' title="' + esc(tf('dyn.credit', { a: v.a })) + '">' + esc(v.a) + '</a>';
}

function buildPOI() {
  const grid = $('#poiGrid'), filters = $('#poiFilters');
  if (!grid || !POI.length) return;

  /* Una meta può avere più categorie: cat è un elenco. Accettiamo anche la
     forma vecchia con una stringa sola, così i dati restano compatibili. */
  const catsOf = p => (Array.isArray(p.cat) ? p.cat : [p.cat]);
  const cats = [];
  POI.forEach(p => catsOf(p).forEach(c => { if (cats.indexOf(c) < 0) cats.push(c); }));

  function render() {
    filters.innerHTML =
      '<button type="button" class="chip" role="tab" data-f="tutte" aria-selected="' + (poiFilter === 'tutte') + '">' + esc(t('poi.tutte')) + '</button>' +
      cats.map(c => '<button type="button" class="chip" role="tab" data-f="' + c + '" aria-selected="' + (poiFilter === c) + '">' + esc(t('cat.' + c)) + '</button>').join('');

    grid.innerHTML = POI.filter(p => poiFilter === 'tutte' || catsOf(p).indexOf(poiFilter) >= 0).map(p => {
      const d = lang === 'en' ? p.en : p.it;
      const meta = [];
      if (d.km) meta.push('<span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>' + esc(d.km) + '</span>');
      if (d.t)  meta.push('<span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>' + esc(d.t) + '</span>');
      return '<article class="poi reveal">' +
        '<div class="poi-img">' + terrPic(p.img, d.n, '(min-width:1100px) 28vw, (min-width:640px) 44vw, 92vw') +
          '<span class="poi-cats">' +
            catsOf(p).map(c => '<span class="poi-cat">' + esc(t('cat.s.' + c)) + '</span>').join('') +
          '</span>' + terrCredit(p.img) + '</div>' +
        '<div class="poi-body"><h3>' + esc(d.n) + '</h3><p>' + esc(d.d) + '</p>' +
          (meta.length ? '<div class="poi-meta">' + meta.join('') + '</div>' : '') +
        '</div></article>';
    }).join('');
    observeReveal();
  }

  render();
  filters.addEventListener('click', e => {
    const b = e.target.closest('[data-f]'); if (!b) return;
    poiFilter = b.dataset.f; render();
  });
  window.__renderPOI = render;
}

/* =========================================================================
   8. ITINERARI
   ====================================================================== */
function buildItinerari() {
  const grid = $('#itiGrid'), list = window.ITINERARI || [];
  if (!grid || !list.length) return;
  function render() {
    grid.innerHTML = list.map(it => {
      const d = lang === 'en' ? it.en : it.it;
      return '<article class="iti reveal">' +
        '<div class="iti-media">' + terrPic(it.img, d.t, '(min-width:1100px) 30vw, (min-width:640px) 46vw, 92vw') + '</div>' +
        terrCredit(it.img) +
        '<div class="iti-body">' +
          '<span class="iti-badge">' + esc(lang === 'en' ? it.badgeEn : it.badge) + '</span>' +
          '<h3>' + esc(d.t) + '</h3>' +
          '<ol>' + d.s.map(s => '<li>' + esc(s) + '</li>').join('') + '</ol>' +
        '</div></article>';
    }).join('');
    observeReveal();
  }
  render();
  window.__renderIti = render;
}

/* =========================================================================
   9. MAPPA GOOGLE (caricata solo dopo consenso esplicito)
   ====================================================================== */
function initMap() {
  const frame = $('#mapFrame');
  if (!frame) return;
  const hasStreet = !isTodo(CFG.ADDRESS_STREET);
  const q = (CFG.EXACT_LOCATION && CFG.LATITUDE)
    ? CFG.LATITUDE + ',' + CFG.LONGITUDE
    : mapQuery();
  const zoom = (CFG.EXACT_LOCATION || hasStreet) ? 16 : 14;
  const ifr = document.createElement('iframe');
  ifr.src = 'https://www.google.com/maps?q=' + encodeURIComponent(q) + '&z=' + zoom + '&hl=' + lang + '&output=embed';
  ifr.title = lang === 'en' ? 'Map of the area around the house' : 'Mappa della zona in cui si trova la casa';
  /* loading="lazy": la mappa parte da sola, ma il browser scarica i dati di
     Google solo quando la sezione sta per entrare nello schermo. */
  ifr.setAttribute('loading', 'lazy');
  ifr.referrerPolicy = 'no-referrer-when-downgrade';
  ifr.allowFullscreen = true;
  frame.innerHTML = '';
  frame.appendChild(ifr);
}

/* =========================================================================
   10. RECENSIONI
   Nessun testo inventato: i punteggi vengono da config.js (dati pubblici
   dell'annuncio), le citazioni da window.RECENSIONI, che è vuoto finché non
   ci si incollano le recensioni vere.
   ====================================================================== */
function buildReviews() {
  const sec = $('#recensioni');
  if (!sec || !CFG.SHOW_RATING || !CFG.RATING_VALUE) return;
  sec.hidden = false;
  renderReviews();
}

function renderReviews() {
  const sec = $('#recensioni'); if (!sec || sec.hidden) return;

  $('#revLead').textContent = tf('dyn.revLead', { s: CFG.RATING_SOURCE, d: (lang === 'en' && CFG.RATING_DATE_EN) ? CFG.RATING_DATE_EN : CFG.RATING_DATE });
  $('#revBig').textContent  = CFG.RATING_VALUE;
  $('#revStars').textContent = '★★★★★';
  $('#revCount').textContent = tf('dyn.revCount', { n: CFG.RATING_COUNT, s: CFG.RATING_SOURCE });

  /* citazioni, se ne sono state inserite */
  const list = window.RECENSIONI || [];
  $('#revQuotes').innerHTML = list.map(r => {
    const txt = (lang === 'en' && r.en) ? r.en : r.it;
    const meta = [r.autore, r.paese, r.data].filter(Boolean);
    return '<figure class="quote"><blockquote>' + esc(txt) + '</blockquote>' +
      '<figcaption><b>' + esc(meta[0] || '') + '</b>' +
      (meta.length > 1 ? ' · ' + esc(meta.slice(1).join(' · ')) : '') +
      '</figcaption></figure>';
  }).join('');

  /* distribuzione delle stelle */
  $('#revDist').innerHTML = (CFG.RATING_STARS || []).map(r =>
    '<li><span>' + r.s + '★</span>' +
    '<span class="track"><span class="fill" style="width:' + r.p + '%"></span></span>' +
    '<span class="pct">' + r.p + '%</span></li>').join('');

  /* punteggi per categoria */
  $('#revCats').innerHTML = (CFG.RATING_CATEGORIES || []).map(c =>
    '<li><span class="n">' + esc(lang === 'en' ? c.en : c.it) + '</span>' +
    '<span class="v">' + esc(c.v) + '</span>' +
    '<span class="track"><span class="fill" style="width:' + (c.n / 5 * 100).toFixed(1) + '%"></span></span></li>').join('');

  /* termini ricorrenti */
  $('#revThemes').innerHTML = (CFG.RATING_THEMES || []).map(th =>
    '<li>' + esc(lang === 'en' ? th.en : th.it) + ' <b>' + th.n + '</b></li>').join('');

  $('#revAll').href = CFG.AIRBNB_URL.replace(/\/?$/, '') + '/reviews';
}

/* =========================================================================
   11. LINGUA
   ====================================================================== */
function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;

  /* testi statici marcati con data-i18n */
  $$('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (lang === 'it') {
      if (el.dataset.it != null) el.textContent = el.dataset.it;
    } else {
      if (el.dataset.it == null) el.dataset.it = el.textContent;
      const v = window.I18N[lang] && window.I18N[lang][k];
      if (v) el.textContent = v;
    }
  });

  /* anche il titolo della scheda del browser cambia lingua */
  if (t('dyn.title') !== 'dyn.title') document.title = t('dyn.title');

  $$('.lang-btn').forEach(b => {
    const on = b.dataset.lang === lang;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-pressed', String(on));
  });

  /* blocchi generati da JS */
  paint();
  if (window.__renderGallery) window.__renderGallery();
  if (window.__renderPOI) window.__renderPOI();
  if (window.__renderIti) window.__renderIti();
  buildContacts();
  renderReviews();
  const hl = $('#hostLine');
  if (hl && CFG.HOST_SINCE_YEAR) hl.textContent = tf('dyn.host', { n: CFG.HOST_NAME, y: CFG.HOST_SINCE_YEAR });
  const gc = $('#galCount'); if (gc) gc.textContent = tf('dyn.galCount', { n: PHOTOS.length });
  const btn = $('#openAll'); if (btn) btn.textContent = $('#galGrid').hidden ? t('gal.all') : t('gal.close');
  const rl = $('#ratingLine');
  if (rl && !rl.hidden) rl.innerHTML = '<span class="stars" aria-hidden="true">★★★★★</span> ' +
    esc(tf('dyn.rating', { v: CFG.RATING_VALUE, n: CFG.RATING_COUNT, s: CFG.RATING_SOURCE }));
  const mn = $('#mapNote'); if (mn) mn.textContent = mapNoteText();
  const addr = $('#addrLine');
  if (addr && isTodo(CFG.ADDRESS_STREET)) {
    addr.innerHTML = '<span class="todo">' + esc(t('dyn.addrTodo')) + '</span><br>' +
      esc(CFG.ADDRESS_POSTAL + ' ' + CFG.ADDRESS_LOCALITY + ' (' + CFG.ADDRESS_PROVINCE + '), ' + CFG.ADDRESS_REGION);
  }
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

function initLang() {
  $$('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  /* L'italiano è la lingua principale del sito: si passa all'inglese solo se
     il visitatore lo ha scelto esplicitamente in una visita precedente. */
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved && saved !== 'it' && window.I18N[saved]) applyLang(saved);
}

/* =========================================================================
   12. COMPARSA GRADUALE DEGLI ELEMENTI
   ====================================================================== */
let revealIO = null;
function observeReveal() {
  if (REDUCED || !('IntersectionObserver' in window)) {
    $$('.reveal').forEach(el => el.classList.add('is-in'));
    return;
  }
  if (!revealIO) {
    revealIO = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); revealIO.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .05 });
  }
  $$('.reveal:not(.is-in)').forEach(el => revealIO.observe(el));
}

/* =========================================================================
   AVVIO
   ====================================================================== */
function boot() {
  applyConfig();
  initHeader();
  initModal();
  buildCarousel();
  buildGallery();
  initLightbox();
  buildPOI();
  buildItinerari();
  initMap();
  buildReviews();
  initLang();
  $$('.section-head, .intro-text, .intro-figure, .feature, .room').forEach(el => el.classList.add('reveal'));
  observeReveal();
  window.addEventListener('resize', () => syncIndex(true), { passive: true });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();

})();
