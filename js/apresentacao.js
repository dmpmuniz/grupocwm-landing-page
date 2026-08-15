document.addEventListener("DOMContentLoaded", function () {
  console.log("%cGrupo CWM | Soluções em Empreendimentos", "font-size:1.5rem;color:#3FD08F;font-weight:bold");
  console.log("%cPrévia do site — produto não final, sujeito a aprovação do cliente.", "font-size:0.8rem;color:#888");

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    console.log("%c[⚠] Conteúdo protegido — site do Grupo CWM | Soluções em Empreendimentos.", "color:#3FD08F");
  });

  var SITE_URL = "https://grupocwm.com.br/";
  var INSTAGRAM_URL = "https://www.instagram.com/grupocwm/";
  var WHATSAPP_URL = "https://wa.me/5512982570000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.";
  var DEV_EMAIL = "dmp.muniz@gmail.com";
  var DEV_URL = "https://dmpmuniz.github.io/dmpmuniz/";

  var VENDER_ATIVO = true;

  if (VENDER_ATIVO) {
    var slides = [
      {
        cover: true,
        num: "01 / 05",
        title: "O novo site do Grupo CWM",
        subtitle: "Rápido, moderno e feito para atrair clientes.",
        body:
          '<div class="pres-cover">' +
          '<img src="img/logo.png" alt="Grupo CWM" class="pres-cover-logo">' +
          '<div class="pres-cover-points">' +
          '<span class="pres-chip">Topografia</span>' +
          '<span class="pres-chip">Marinha</span>' +
          '<span class="pres-chip">SPU</span>' +
          '<span class="pres-chip">GRAPROHAB</span>' +
          "</div>" +
          '<p class="pres-cover-lead">Esta é a prévia do novo site: <strong>leve, rápido e pensado para vender</strong> os serviços da CWM.</p>' +
          "</div>"
      },
      {
        num: "02 / 05",
        title: "O site atual: WordPress",
        subtitle: "Pesado, lento e dependente de servidor.",
        body:
          '<div class="pres-stats">' +
          '<div class="pres-stat bad"><span class="pres-stat-value">18MB</span><span class="pres-stat-label">de peso por página</span></div>' +
          '<div class="pres-stat bad"><span class="pres-stat-value">61+</span><span class="pres-stat-label">arquivos CSS e 10+ plugins</span></div>' +
          '<div class="pres-stat bad"><span class="pres-stat-value">Servidor</span><span class="pres-stat-label">PHP, banco de dados e manutenção constante</span></div>' +
          "</div>" +
          '<p class="pres-note">Resultado: site lento, difícil de atualizar e com risco de <strong>quebrar a cada plugin desatualizado</strong>.</p>'
      },
      {
        num: "03 / 05",
        title: "O novo site: tecnologia leve",
        subtitle: "Mesmo conteúdo, peso mínimo.",
        body:
          '<div class="pres-stats">' +
          '<div class="pres-stat good"><span class="pres-stat-value">~1MB</span><span class="pres-stat-label">18x menos peso — abre em milissegundos</span></div>' +
          '<div class="pres-stat good"><span class="pres-stat-value">Zero</span><span class="pres-stat-label">custo de servidor e hospedagem com SSL</span></div>' +
          '<div class="pres-stat good"><span class="pres-stat-value">1 página</span><span class="pres-stat-label">código limpo, atualização em minutos</span></div>' +
          "</div>" +
          '<div class="pres-vs">' +
          '<div class="pres-vs-col"><span class="pres-vs-label">Antes</span><span class="pres-vs-num">18MB</span><span class="pres-vs-txt">WordPress</span></div>' +
          '<span class="pres-vs-arrow" aria-hidden="true">→</span>' +
          '<div class="pres-vs-col"><span class="pres-vs-label">Depois</span><span class="pres-vs-num">~1MB</span><span class="pres-vs-txt">HTML puro</span></div>' +
          "</div>"
      },
      {
        num: "04 / 05",
        title: "Um tour pelo novo site",
        subtitle: "Tudo o que o cliente vê em um clique.",
        body:
          '<div class="pres-photos">' +
          '<figure class="pres-photo"><img src="img/tecnica1.webp" alt="Equipe em campo" loading="lazy"><figcaption><strong>Hero + carrossel</strong><span>5 fotos reais da equipe</span></figcaption></figure>' +
          '<figure class="pres-photo"><img src="img/regiao-ilhabela.webp" alt="Ilhabela" loading="lazy"><figcaption><strong>3 regiões</strong><span>Ilhabela, Campinas e SP</span></figcaption></figure>' +
          '<figure class="pres-photo"><img src="img/equipe.webp" alt="Equipe CWM" loading="lazy"><figcaption><strong>10 serviços</strong><span>topografia, CDL, GRAPROHAB…</span></figcaption></figure>' +
          "</div>" +
          '<div class="pres-proof">' +
          '<div class="pres-proof-item"><span class="pres-proof-num">5.0</span><span class="pres-proof-txt">avaliação Google<br>15 avaliações reais</span></div>' +
          '<div class="pres-proof-item"><span class="pres-proof-num">WhatsApp</span><span class="pres-proof-txt">formulário envia<br>mensagem direta</span></div>' +
          '<div class="pres-proof-item"><span class="pres-proof-num">SEO</span><span class="pres-proof-txt">páginas rápidas<br>ranqueiam melhor</span></div>' +
          "</div>"
      },
      {
        num: "05 / 05",
        title: "Quer um site assim no seu negócio?",
        subtitle: "Investimento sob consulta.",
        body:
          '<div class="pricing-box">' +
          '<div class="price-label">Investimento</div>' +
          '<div class="price-value">Sob Consulta</div>' +
          '<div class="price-hint">Incluso: site completo + suporte 30 dias</div>' +
          "</div>" +
          '<div class="pres-dev">' +
          '<div class="pres-dev-head">' +
          '<span class="pres-dev-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></span>' +
          '<div><strong>Daniel Muniz</strong><span>Desenvolvedor — sites institucionais sob medida</span></div>' +
          "</div>" +
          '<div class="pres-dev-actions">' +
          '<a href="mailto:' + DEV_EMAIL + '" class="pres-dev-btn primary"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg> ' + DEV_EMAIL + "</a>" +
          '<a href="' + DEV_URL + '" target="_blank" class="pres-dev-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Portfólio: dmpmuniz</a>' +
          "</div>" +
          "</div>" +
          '<div class="slide-disclaimer" style="margin-top:14px;">' +
          '<span class="pres-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg></span>' +
          '<span><strong>Disclaimer:</strong> prévia do site, sujeita a validação e aprovação comercial.</span>' +
          "</div>"
      }
    ];

    var overlay = document.createElement("div");
    overlay.className = "presentation-overlay";
    overlay.innerHTML =
      '<div class="presentation-slide" id="presentation-slide">' +
      '<button class="presentation-close" id="presentation-close">&times;</button>' +
      '<div class="pres-progress" id="pres-progress"><div class="pres-progress-bar" id="pres-progress-bar"></div></div>' +
      '<div id="presentation-content"></div>' +
      '<div class="presentation-nav">' +
      '<button class="presentation-nav-btn prev" id="pres-prev">← Voltar</button>' +
      '<div class="presentation-dots" id="pres-dots"></div>' +
      '<button class="presentation-nav-btn next" id="pres-next">Avançar →</button>' +
      "</div>" +
      "</div>" +
      '<div class="scroll-arrow" id="scroll-arrow">' +
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3FD08F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>' +
      "</div>";
    document.body.appendChild(overlay);

    var currentSlide = 0;

    function renderSlide(index) {
      var s = slides[index];
      var content = document.getElementById("presentation-content");
      content.innerHTML =
        '<div class="slide-number">' +
        s.num +
        "</div>" +
        "<h2>" +
        s.title +
        "</h2>" +
        (s.subtitle ? '<p class="slide-sub">' + s.subtitle + "</p>" : "") +
        '<div class="slide-body' +
        (s.cover ? " slide-cover" : "") +
        '">' +
        s.body +
        "</div>";

      var progressBar = document.getElementById("pres-progress-bar");
      progressBar.style.width = ((index + 1) / slides.length) * 100 + "%";

      var prevBtn = document.getElementById("pres-prev");
      var nextBtn = document.getElementById("pres-next");
      prevBtn.style.visibility = index === 0 ? "hidden" : "visible";

      if (index === slides.length - 1) {
        nextBtn.textContent = "Fechar";
      } else {
        nextBtn.textContent = "Avançar →";
      }

      var dots = document.getElementById("pres-dots");
      dots.innerHTML = "";
      for (var i = 0; i < slides.length; i++) {
        var dot = document.createElement("button");
        dot.className = "presentation-dot" + (i === index ? " active" : "");
        dot.setAttribute("data-index", i);
        dot.addEventListener("click", function () {
          goTo(parseInt(this.getAttribute("data-index")));
        });
        dots.appendChild(dot);
      }

      var slideEl = overlay.querySelector(".presentation-slide");
      slideEl.scrollTop = 0;

      var arrow = document.getElementById("scroll-arrow");
      setTimeout(function () {
        if (slideEl.scrollHeight > slideEl.clientHeight) {
          arrow.classList.add("visible");
        } else {
          arrow.classList.remove("visible");
        }
      }, 50);

      slideEl.onscroll = function () {
        if (slideEl.scrollHeight - slideEl.scrollTop - slideEl.clientHeight < 20) {
          arrow.classList.remove("visible");
        } else {
          arrow.classList.add("visible");
        }
      };
    }

    function goTo(index) {
      if (index < 0 || index >= slides.length) return;
      currentSlide = index;
      renderSlide(index);
    }

    function next() {
      if (currentSlide === slides.length - 1) {
        fecharApresentacao();
        return;
      }
      goTo(currentSlide + 1);
    }

    function prev() {
      goTo(currentSlide - 1);
    }

    function abrirApresentacao() {
      currentSlide = 0;
      overlay.classList.add("open");
      renderSlide(0);
      document.body.style.overflow = "hidden";
    }

    function fecharApresentacao() {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    document.getElementById("presentation-close").addEventListener("click", fecharApresentacao);
    document.getElementById("pres-next").addEventListener("click", next);
    document.getElementById("pres-prev").addEventListener("click", prev);

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) fecharApresentacao();
    });

    document.addEventListener("keydown", function (e) {
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") fecharApresentacao();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });

    var floatBtn = document.createElement("div");
    floatBtn.id = "float-apresentacao";
    floatBtn.innerHTML =
      '<button class="float-close" id="float-close" aria-label="Fechar">&times;</button>' +
      '<button class="float-body" id="float-body">' +
      '<span class="pres-icon"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span>' +
      '<span class="float-text">Apresentação</span>' +
      "</button>";
    document.body.appendChild(floatBtn);

    document.getElementById("float-body").addEventListener("click", abrirApresentacao);
    document.getElementById("float-close").addEventListener("click", function (e) {
      e.stopPropagation();
      floatBtn.style.display = "none";
    });

    abrirApresentacao();
  }
});