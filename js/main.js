/* GRUPO CWM — Landing page estática (JS puro, sem dependências) */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Navbar: sombra ao rolar ---------- */
  const navbar = document.getElementById('navbar');
  const onScrollNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScrollNavbar, { passive: true });
  onScrollNavbar();

  /* ---------- Menu mobile ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  const closeMenu = () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav-menu a').forEach((link) =>
    link.addEventListener('click', closeMenu)
  );

  /* ---------- Scroll spy: destaca link da seção visível ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          )
        );
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach((section) => spy.observe(section));

  /* ---------- Reveal ao rolar ---------- */
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  /* ---------- Carrossel de fotos (Serviços) ---------- */
  const fotoTrack = document.getElementById('fotoCarrosselTrack');
  const fotoPrev = document.getElementById('fotoPrev');
  const fotoNext = document.getElementById('fotoNext');

  if (fotoTrack) {
    const fotos = fotoTrack.children;
    let idx = 0;

    const go = (i) => {
      idx = (i + fotos.length) % fotos.length;
      fotoTrack.style.transform = `translateX(-${idx * 100}%)`;
    };

    fotoNext.addEventListener('click', () => go(idx + 1));
    fotoPrev.addEventListener('click', () => go(idx - 1));

    let fotoTimer = null;
    if (!prefersReducedMotion) {
      fotoTimer = setInterval(() => go(idx + 1), 5000);
    }
    fotoTrack.addEventListener('mouseenter', () => clearInterval(fotoTimer));
    fotoTrack.addEventListener('mouseleave', () => {
      if (!prefersReducedMotion) fotoTimer = setInterval(() => go(idx + 1), 5000);
    });
  }

  /* ---------- Slider de depoimentos ---------- */
  const track = document.getElementById('sliderTrack');
  const dotsWrap = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (track) {
    const slides = track.children;
    let current = 0;
    let timer = null;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'dot';
      dot.setAttribute('aria-label', `Ver depoimento ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    const dots = dotsWrap.children;

    const render = () => {
      track.style.transform = `translateX(-${current * 100}%)`;
      Array.from(dots).forEach((dot, i) => dot.classList.toggle('active', i === current));
    };

    function goTo(i) {
      current = (i + slides.length) % slides.length;
      render();
      restart();
    }

    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    function restart() {
      if (timer) clearInterval(timer);
      if (slides.length > 1 && !prefersReducedMotion) timer = setInterval(next, 6000);
    }

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    /* Pausa com toque/hover */
    track.addEventListener('mouseenter', () => clearInterval(timer));
    track.addEventListener('mouseleave', restart);
    track.addEventListener('touchstart', () => clearInterval(timer), { passive: true });
    track.addEventListener('touchend', restart, { passive: true });

    render();
    restart();
  }

  /* ---------- Formulário → WhatsApp ---------- */
  const form = document.getElementById('contactForm');

  if (form) {
    const maskTel = (value) =>
      value
        .replace(/\D/g, '')
        .slice(0, 11)
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d{1,4})/, '$1-$2');

    const telInput = document.getElementById('telefone');
    telInput.addEventListener('input', (e) => {
      e.target.value = maskTel(e.target.value);
    });

    const validate = () => {
      let valid = true;
      form.querySelectorAll('[required]').forEach((field) => {
        field.style.borderColor = '';
        field.setAttribute('aria-invalid', 'false');
        const bad = !field.value.trim();
        if (bad || !field.validity.valid) {
          field.style.borderColor = '#e5484d';
          field.setAttribute('aria-invalid', 'true');
          valid = false;
        }
      });
      return valid;
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate()) return;

      const nome = document.getElementById('nome').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const servico = document.getElementById('servico').value;
      const mensagem = document.getElementById('mensagem').value.trim();

      const linhas = [
        `Olá, sou ${nome} e vim pelo site do Grupo CWM.`,
        telefone ? `Meu contato: ${telefone}` : null,
        servico ? `Serviço desejado: ${servico}` : null,
        mensagem ? `Mensagem: ${mensagem}` : null,
      ].filter(Boolean);

      const url = `https://wa.me/5512982570000?text=${encodeURIComponent(linhas.join('\n'))}`;
      window.open(url, '_blank', 'noopener');
    });
  }

  /* ---------- Ano no rodapé ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
