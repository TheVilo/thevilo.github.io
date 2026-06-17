/* ============ HEADER SCROLL STATE ============ */
const header = document.getElementById('header');
if (header && !header.classList.contains('solid')) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ============ MOBILE MENU ============ */
const burger = document.getElementById('burger');
const mm = document.getElementById('mobileMenu');
const mmClose = document.getElementById('mmClose');
if (burger && mm) {
  const openMenu = () => { mm.classList.add('open'); burger.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; };
  const closeMenu = () => { mm.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; };
  burger.addEventListener('click', openMenu);
  if (mmClose) mmClose.addEventListener('click', closeMenu);
  mm.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

/* ============ TEAM FILTERS ============ */
const tabs = document.querySelectorAll('.tab');
const teamCards = document.querySelectorAll('#teamsGrid .team-card');
if (tabs.length && teamCards.length) {
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const f = tab.dataset.filter;
    teamCards.forEach(c => c.classList.toggle('hidden', !(f === 'all' || c.dataset.group === f)));
  }));
}

/* ============ PRESIDENT LETTER TOGGLE ============ */
const lt = document.getElementById('letterToggle');
const lm = document.getElementById('letterMore');
if (lt && lm) {
  lt.addEventListener('click', () => {
    const open = lm.classList.toggle('open');
    lt.setAttribute('aria-expanded', open);
    lt.querySelector('svg').style.transform = open ? 'rotate(180deg)' : '';
    lt.childNodes[0].textContent = open ? 'Skryť ' : 'Čítať celé ';
  });
}

/* ============ FAQ ACCORDION ============ */
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  if (!q || !a) return;
  q.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    q.setAttribute('aria-expanded', isOpen);
    a.style.maxHeight = isOpen ? a.scrollHeight + 'px' : '0';
  });
});

/* ============ CONTACT FORM (demo) ============ */
const cf = document.getElementById('contactForm');
if (cf) {
  cf.addEventListener('submit', e => {
    e.preventDefault();
    const btn = cf.querySelector('button[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = 'Ďakujeme! Ozveme sa ✓';
    btn.disabled = true; btn.style.opacity = '.85';
    setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; btn.style.opacity = ''; cf.reset(); }, 2600);
  });
}

/* ============ SCROLL REVEAL ============ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4 * 60) + 'ms'; io.observe(el); });
