document.addEventListener('DOMContentLoaded', () => {
  const config = window.PORTFOLIO_CONFIG || {};
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const EXTS = ['png', 'jpg', 'jpeg', 'PNG', 'JPG', 'JPEG'];
  const tryLoad = (base, onOk, onFail, i = 0) => {
    if (!base) return onFail && onFail();
    if (/\.(png|jpe?g)$/i.test(base)) { const t = new Image(); t.onload = () => onOk(base); t.onerror = () => onFail && onFail(); t.src = (base.startsWith('assets/') ? '../' : '') + base; return; }
    if (i >= EXTS.length) return onFail && onFail();
    const url = (base.startsWith('assets/') ? '../' : '') + base + '.' + EXTS[i];
    const t = new Image(); t.onload = () => onOk(url); t.onerror = () => tryLoad(base, onOk, onFail, i + 1); t.src = url;
  };
  document.querySelectorAll('[data-profile]').forEach(el => tryLoad(config.profileImage, u => el.src = u));
  document.querySelectorAll('[data-project-image]').forEach((el, i) => tryLoad(config.projectImages?.[i], u => el.src = u));
  document.querySelectorAll('[data-cover]').forEach(el => tryLoad(config.coverImage, u => { el.style.setProperty('--cover', `url("${u}")`); el.classList.add('has-cover'); }));
  const bgBox = document.createElement('div');
  bgBox.className = 'bg-fixed';
  bgBox.innerHTML = '<div class="bg-img"></div><i class="blob b1"></i><i class="blob b2"></i><i class="blob b3"></i><div class="bg-grid"></div><div class="bg-spot"></div>';
  document.body.prepend(bgBox);
  tryLoad(config.backgroundImage, u => { bgBox.querySelector('.bg-img').style.backgroundImage = `url("${u}")`; bgBox.classList.add('has-img'); });
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let raf = 0;
    window.addEventListener('pointermove', e => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const x = e.clientX / innerWidth, y = e.clientY / innerHeight;
        bgBox.style.setProperty('--mx', (x * 100) + '%'); bgBox.style.setProperty('--my', (y * 100) + '%');
        bgBox.style.setProperty('--px', ((x - .5) * 40) + 'px'); bgBox.style.setProperty('--py', ((y - .5) * 40) + 'px');
      });
    });
  }
  document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
  // any <img data-img="assets/name"> loads name.png / .jpg / .jpeg; hidden if no file (unless data-keep)
  document.querySelectorAll('[data-img]').forEach(el => tryLoad(el.dataset.img, u => el.src = u, () => { if (!el.hasAttribute('data-keep')) el.remove(); }));
  document.querySelectorAll('[data-project-link]').forEach((el, i) => { if (config.projectLinks?.[i] && /^https?:\/\//.test(config.projectLinks[i])) el.href = config.projectLinks[i]; });
  document.querySelectorAll('[data-social]').forEach(el => { const href = config.socials?.[el.dataset.social]; if (href) el.href = href; });
  const menu = document.querySelector('[data-menu]');
  const nav = document.querySelector('[data-nav]');
  menu?.addEventListener('click', () => { nav?.classList.toggle('is-open'); menu.setAttribute('aria-expanded', nav?.classList.contains('is-open') ? 'true' : 'false'); });
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }), {threshold: .12}) : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('is-visible'));
});
