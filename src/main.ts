import "./styles.css";
import {
  brewMethods,
  coffeeConcepts,
  coffeeJourney,
  diagnostics,
  ebookVolumes,
  extractionPrinciples,
  glossaryTerms,
  heroStats,
  latteArtBases,
  learningCards,
  learningPath,
  marketCards,
  milkDrinks,
  navItems,
  professions,
  sensoryAttributes
} from "./data/coffeeContent";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemento #app não encontrado.");
}

const list = (items: string[], className = "check-list") =>
  `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

const sectionHeading = (kicker: string, title: string, text: string) => `
  <div class="section-heading reveal">
    <p class="kicker">${kicker}</p>
    <h2>${title}</h2>
    <p>${text}</p>
  </div>
`;

const renderHeader = () => `
  <header class="site-header" data-header>
    <div class="progress-bar" data-progress aria-hidden="true"></div>
    <div class="header-inner">
      <a class="brand" href="#inicio" aria-label="Universo do Café - início">
        <span class="brand-mark" aria-hidden="true">UC</span>
        <span>
          <strong>Universo do Café</strong>
          <small>Guia de café e barismo</small>
        </span>
      </a>
      <button class="menu-button" type="button" data-menu-button aria-expanded="false" aria-controls="site-nav">
        <span class="sr-only">Abrir menu</span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      <nav class="site-nav" id="site-nav" data-nav aria-label="Navegação principal">
        ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </nav>
    </div>
  </header>
`;

const renderHero = () => `
  <section class="hero-section" id="inicio" aria-labelledby="hero-title">
    <div class="hero-media" aria-hidden="true">
      <img src="/images/coffee-hero.png" alt="" />
    </div>
    <div class="hero-surface"></div>
    <div class="hero-content reveal">
      <p class="kicker">Coffee Tech Editorial</p>
      <h1 id="hero-title">Estude o café além da xícara.</h1>
      <p class="hero-subtitle">
        Uma jornada visual e completa pelo universo do café: história, grãos, processos,
        profissionais, métodos de preparo e barismo.
      </p>
      <p class="hero-copy">
        O café não começa na cafeteria. Ele começa no campo, atravessa mãos, técnicas,
        decisões e culturas até chegar à sua xícara como bebida, ciência, arte e profissão.
      </p>
      <div class="hero-actions" aria-label="Chamadas principais">
        <a class="button primary" href="#o-cafe">Começar a jornada</a>
        <a class="button secondary" href="#barismo">Ver trilha de barismo</a>
      </div>
      <div class="hero-stats" aria-label="Resumo da plataforma">
        ${heroStats
          .map(
            (stat) => `
              <div>
                <strong>${stat.value}</strong>
                <span>${stat.label}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderLearningOverview = () => `
  <section class="section section-cream" aria-labelledby="aprendizado-title">
    <div class="container">
      ${sectionHeading(
        "Jornada de estudo",
        "Uma plataforma para aprender em camadas",
        "A experiência organiza o café como curso: primeiro a bebida e sua origem, depois a cadeia, a técnica, o mercado e os volumes de aprofundamento."
      )}
      <div class="learning-path">
        ${learningPath
          .map(
            (item) => `
              <article class="path-card reveal">
                <span>${item.step}</span>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="bento-grid">
        ${learningCards
          .map(
            (card) => `
              <article class="bento-card reveal">
                <p class="kicker">${card.eyebrow}</p>
                <h3>${card.title}</h3>
                <p>${card.body}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderCoffeeSection = () => `
  <section class="section section-dark" id="o-cafe" aria-labelledby="o-cafe-title">
    <div class="container">
      ${sectionHeading(
        "Módulo 1",
        "O café em si",
        "Antes de falar de receitas, a jornada começa pela planta, pela cultura, pela espécie, pela origem e pela linguagem sensorial da xícara."
      )}
      <div class="concept-grid">
        ${coffeeConcepts
          .map(
            (card) => `
              <article class="concept-card reveal">
                <p class="kicker">${card.eyebrow}</p>
                <h3>${card.title}</h3>
                <p>${card.body}</p>
                ${card.points ? list(card.points, "pill-list") : ""}
              </article>
            `
          )
          .join("")}
      </div>
      <div class="sensory-panel reveal">
        <div>
          <p class="kicker">Mapa sensorial</p>
          <h3>Como ler uma xícara</h3>
          <p>
            Um café deixa de ser apenas forte ou fraco quando você observa aroma, acidez,
            doçura, corpo, amargor e finalização como partes de um mesmo equilíbrio.
          </p>
        </div>
        <div class="sensory-grid">
          ${sensoryAttributes
            .map(
              (item) => `
                <article>
                  <h4>${item.title}</h4>
                  <p>${item.text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>
`;

const renderJourneySection = () => `
  <section class="section section-olive" id="campo-xicara" aria-labelledby="campo-xicara-title">
    <div class="container">
      ${sectionHeading(
        "Módulo 2",
        "Do campo à xícara",
        "A qualidade é construída em sequência. Cada etapa pode preservar, ampliar ou comprometer o potencial criado no campo."
      )}
      <div class="timeline">
        ${coffeeJourney
          .map(
            (step, index) => `
              <article class="timeline-step reveal">
                <div class="timeline-index">${String(index + 1).padStart(2, "0")}</div>
                <div class="timeline-content">
                  <h3>${step.title}</h3>
                  <p>${step.summary}</p>
                  <p class="impact"><strong>Impacto no sabor:</strong> ${step.impact}</p>
                  <details>
                    <summary>Ver detalhe técnico</summary>
                    <p>${step.detail}</p>
                  </details>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderProfessionSection = () => `
  <section class="section section-dark" id="profissionais" aria-labelledby="profissionais-title">
    <div class="container">
      ${sectionHeading(
        "Módulo 3",
        "Processos e profissionais do café",
        "O café é uma cadeia de pessoas. Conhecer as áreas mostra por que qualidade é resultado coletivo e também abre caminhos de carreira."
      )}
      <div class="profession-grid">
        ${professions
          .map(
            (profession) => `
              <article class="profession-card reveal">
                <h3>${profession.title}</h3>
                <p>${profession.role}</p>
                <div class="card-meta">
                  <span>Onde atua</span>
                  <strong>${profession.place}</strong>
                </div>
                ${list(profession.skills, "chip-list")}
                <p class="impact">${profession.impact}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderBarismoSection = () => `
  <section class="section section-copper" id="barismo" aria-labelledby="barismo-title">
    <div class="container">
      ${sectionHeading(
        "Módulo 4",
        "Barismo: fundamentos práticos",
        "Barismo é técnica, sensibilidade e consistência. O barista precisa entender o que está acontecendo na extração para ajustar a bebida."
      )}
      <div class="barismo-layout">
        <div class="principles-grid">
          ${extractionPrinciples
            .map(
              (principle) => `
                <article class="principle-card reveal">
                  <h3>${principle.title}</h3>
                  <p>${principle.text}</p>
                </article>
              `
            )
            .join("")}
        </div>
        <aside class="equipment-panel reveal" aria-labelledby="equipamentos-title">
          <p class="kicker">Kit inicial</p>
          <h3 id="equipamentos-title">Equipamentos que mudam o jogo</h3>
          ${list(["Balança digital", "Moedor", "Chaleira", "Filtros", "Cronômetro", "Café em grãos", "Água de boa qualidade", "Xícara de prova"], "check-list")}
          <p>A balança e o moedor são dois dos maiores saltos de qualidade porque criam consistência.</p>
        </aside>
      </div>
      <div class="diagnostic-panel reveal">
        <div>
          <p class="kicker">Painel de diagnóstico</p>
          <h3>Como ajustar o café pela xícara</h3>
          <p>O sabor informa o próximo passo. A meta não é decorar uma regra, mas entender a direção do ajuste.</p>
        </div>
        <div class="diagnostic-grid">
          ${diagnostics
            .map(
              (diagnostic) => `
                <article class="diagnostic-card">
                  <h4>${diagnostic.title}</h4>
                  <p>${diagnostic.cause}</p>
                  ${list(diagnostic.actions, "check-list")}
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>
`;

const renderMethodsSection = () => `
  <section class="section section-cream" id="metodos" aria-labelledby="metodos-title">
    <div class="container">
      ${sectionHeading(
        "Módulo 5",
        "Métodos de preparo",
        "Cada método revela uma faceta diferente do café. O melhor método é o que combina grão, gosto, contexto e controle."
      )}
      <div class="method-workbench reveal">
        <div class="method-tabs" role="tablist" aria-label="Métodos de preparo">
          ${brewMethods
            .map(
              (method, index) => `
                <button
                  class="method-tab"
                  type="button"
                  role="tab"
                  id="tab-${method.id}"
                  aria-selected="${index === 0 ? "true" : "false"}"
                  aria-controls="panel-${method.id}"
                  data-method="${method.id}"
                >
                  ${method.name}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="method-panels">
          ${brewMethods
            .map(
              (method, index) => `
                <article
                  class="method-panel${index === 0 ? " is-active" : ""}"
                  role="tabpanel"
                  id="panel-${method.id}"
                  aria-labelledby="tab-${method.id}"
                  ${index === 0 ? "" : "hidden"}
                >
                  <div class="method-header">
                    <p class="kicker">Método</p>
                    <h3>${method.name}</h3>
                    <p>${method.description}</p>
                  </div>
                  <div class="recipe-grid">
                    <div><span>Moagem</span><strong>${method.grind}</strong></div>
                    <div><span>Proporção</span><strong>${method.ratio}</strong></div>
                    <div><span>Tempo</span><strong>${method.time}</strong></div>
                    <div><span>Dificuldade</span><strong>${method.difficulty}</strong></div>
                  </div>
                  <div class="method-detail-grid">
                    <div>
                      <h4>Perfil sensorial</h4>
                      <p>${method.sensory}</p>
                    </div>
                    <div>
                      <h4>Equipamentos</h4>
                      ${list(method.equipment, "chip-list")}
                    </div>
                    <div>
                      <h4>Passo a passo</h4>
                      ${list(method.steps, "number-list")}
                    </div>
                    <div>
                      <h4>Dica de ajuste</h4>
                      <p>${method.adjustment}</p>
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>
`;

const renderLatteSection = () => `
  <section class="section section-milk" id="latte-art" aria-labelledby="latte-art-title">
    <div class="container">
      ${sectionHeading(
        "Módulos 6 e 7",
        "Bebidas com leite e latte art",
        "O leite não deve esconder o café. A boa bebida nasce do equilíbrio entre espresso, textura, proporção e apresentação."
      )}
      <div class="milk-layout">
        <div class="milk-grid">
          ${milkDrinks
            .map(
              (drink) => `
                <article class="milk-card reveal">
                  <h3>${drink.title}</h3>
                  <p>${drink.text}</p>
                </article>
              `
            )
            .join("")}
        </div>
        <aside class="latte-panel reveal">
          <p class="kicker">Latte art</p>
          <h3>Coração, tulipa e rosetta começam antes do desenho</h3>
          <p>
            A arte depende de espresso bem extraído, leite brilhante, microespuma fina e
            controle de fluxo, altura e centralização.
          </p>
          ${list(latteArtBases, "check-list")}
        </aside>
      </div>
    </div>
  </section>
`;

const renderMarketSection = () => `
  <section class="section section-dark" id="mercado" aria-labelledby="mercado-title">
    <div class="container">
      ${sectionHeading(
        "Módulo 8",
        "Café no Brasil e no mundo",
        "O café conecta regiões produtoras, mercados consumidores, tradição agrícola, tecnologia, sustentabilidade e novas formas de beber."
      )}
      <div class="market-grid">
        ${marketCards
          .map(
            (card) => `
              <article class="market-card reveal">
                <p class="kicker">${card.eyebrow}</p>
                <h3>${card.title}</h3>
                <p>${card.body}</p>
                ${card.points ? list(card.points, "chip-list") : ""}
              </article>
            `
          )
          .join("")}
      </div>
      <p class="source-note reveal">
        Dados de safra, consumo e exportação podem ser atualizados periodicamente com fontes como Conab, ABIC e ICO.
      </p>
    </div>
  </section>
`;

const renderGlossarySection = () => `
  <section class="section section-cream" id="glossario" aria-labelledby="glossario-title">
    <div class="container">
      ${sectionHeading(
        "Módulo 10",
        "Glossário do café",
        "Um vocabulário essencial para estudar, provar, preparar e conversar sobre café com mais precisão."
      )}
      <div class="glossary-shell reveal">
        <label class="search-label" for="glossary-search">Buscar termo</label>
        <input id="glossary-search" type="search" placeholder="Digite acidez, torra, crema..." autocomplete="off" data-glossary-search />
        <div class="glossary-grid" data-glossary-list>
          ${glossaryTerms
            .map(
              (item) => `
                <article class="glossary-card" data-glossary-card data-term="${item.term} ${item.definition}">
                  <h3>${item.term}</h3>
                  <p>${item.definition}</p>
                </article>
              `
            )
            .join("")}
        </div>
        <p class="empty-state" data-glossary-empty hidden>Nenhum termo encontrado.</p>
      </div>
    </div>
  </section>
`;

const renderEbooksSection = () => `
  <section class="section section-copper" id="ebooks" aria-labelledby="ebooks-title">
    <div class="container">
      ${sectionHeading(
        "Trilha premium",
        "Coleção de ebooks por volume",
        "Os volumes organizam o aprendizado como uma formação progressiva: fundamentos, cadeia, métodos, barismo, sensorial, mercado e panorama global."
      )}
      <div class="ebook-grid">
        ${ebookVolumes
          .map(
            (volume) => `
              <article class="ebook-card reveal">
                <div class="ebook-topline">
                  <span>${volume.number}</span>
                  <strong>${volume.status}</strong>
                </div>
                <h3>${volume.title}</h3>
                <p>${volume.description}</p>
                <div class="ebook-info">
                  <div><span>Nível</span><strong>${volume.level}</strong></div>
                  <div><span>Duração</span><strong>${volume.duration}</strong></div>
                </div>
                <p class="learns">${volume.learns}</p>
                <a class="text-link" href="#glossario">Ver conteúdo</a>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderFinalCta = () => `
  <section class="final-cta" aria-labelledby="final-cta-title">
    <div class="container final-cta-inner reveal">
      <p class="kicker">Fechamento</p>
      <h2 id="final-cta-title">Cada xícara fica mais profunda quando você entende o caminho do grão.</h2>
      <p>
        O café é mais do que uma bebida. É uma cadeia de pessoas, lugares, técnicas e histórias.
        Quanto mais você entende esse caminho, mais rica se torna a experiência de beber.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="#inicio">Começar a jornada</a>
        <a class="button secondary" href="#metodos">Explorar métodos</a>
        <a class="button ghost" href="#ebooks">Ver volumes</a>
      </div>
    </div>
  </section>
`;

const renderFooter = () => `
  <footer class="site-footer">
    <div class="container footer-inner">
      <p><strong>Universo do Café</strong> - guia editorial de café e barismo.</p>
      <a href="#inicio">Voltar ao início</a>
    </div>
  </footer>
`;

app.innerHTML = `
  ${renderHeader()}
  <main id="conteudo">
    ${renderHero()}
    ${renderLearningOverview()}
    ${renderCoffeeSection()}
    ${renderJourneySection()}
    ${renderProfessionSection()}
    ${renderBarismoSection()}
    ${renderMethodsSection()}
    ${renderLatteSection()}
    ${renderMarketSection()}
    ${renderGlossarySection()}
    ${renderEbooksSection()}
    ${renderFinalCta()}
  </main>
  ${renderFooter()}
`;

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

const setupMenu = () => {
  const button = document.querySelector<HTMLButtonElement>("[data-menu-button]");
  const nav = document.querySelector<HTMLElement>("[data-nav]");

  if (!button || !nav) {
    return;
  }

  const close = () => {
    button.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement) {
      close();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      close();
    }
  });
};

const setupProgress = () => {
  const progress = document.querySelector<HTMLElement>("[data-progress]");

  if (!progress) {
    return;
  }

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
};

const setupMethods = () => {
  const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>(".method-tab"));
  const panels = Array.from(document.querySelectorAll<HTMLElement>(".method-panel"));

  const activate = (methodId: string) => {
    tabs.forEach((tab) => {
      const isSelected = tab.dataset.method === methodId;
      tab.setAttribute("aria-selected", String(isSelected));
    });

    panels.forEach((panel) => {
      const isSelected = panel.id === `panel-${methodId}`;
      panel.hidden = !isSelected;
      panel.classList.toggle("is-active", isSelected);
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.dataset.method) {
        activate(tab.dataset.method);
      }
    });
  });
};

const setupGlossary = () => {
  const input = document.querySelector<HTMLInputElement>("[data-glossary-search]");
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-glossary-card]"));
  const empty = document.querySelector<HTMLElement>("[data-glossary-empty]");

  if (!input || !empty) {
    return;
  }

  input.addEventListener("input", () => {
    const query = normalizeText(input.value.trim());
    let visibleCount = 0;

    cards.forEach((card) => {
      const source = normalizeText(card.dataset.term ?? card.textContent ?? "");
      const isVisible = source.includes(query);
      card.hidden = !isVisible;
      if (isVisible) {
        visibleCount += 1;
      }
    });

    empty.hidden = visibleCount > 0;
  });
};

const setupActiveNavigation = () => {
  const header = document.querySelector<HTMLElement>("[data-header]");
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".site-nav a"));
  const sections = navItems
    .map((item) => document.querySelector<HTMLElement>(item.href))
    .filter((section): section is HTMLElement => section !== null);

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const observer = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries.find((entry) => entry.isIntersecting);
      if (!activeEntry) {
        return;
      }

      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${activeEntry.target.id}`);
      });
    },
    { rootMargin: "-32% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
};

const setupReveal = () => {
  const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
};

setupMenu();
setupProgress();
setupMethods();
setupGlossary();
setupActiveNavigation();
setupReveal();
