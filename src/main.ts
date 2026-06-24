import "./styles.css";
import { brewMethods } from "./data/brewingMethods";
import { coffeeBasics, marketTypes, sensoryCards } from "./data/coffeeBasics";
import { coreLessons, espressoDiagnostics, lessonContents, quizzes, slugify } from "./data/courseContent";
import { coffeeJourney } from "./data/coffeeJourney";
import { glossaryTerms } from "./data/glossary";
import { homeHighlights, homeStats, studyPaths } from "./data/learningPaths";
import { mainNav, pageMeta } from "./data/navigation";
import { brazilRegions, originPoints } from "./data/origins";
import { professionals, stageLabels } from "./data/professionals";
import { lattePatterns, milkDrinks, steamingErrors, steamingTips } from "./data/latteArt";
import { photoTopics, quickGuides } from "./data/media";
import { videoFilters, videos } from "./data/videos";
import type { BrewMethod, GlossaryTerm, MediaVisual, OriginPoint, Professional, Quiz, VideoResource } from "./data/types";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemento #app não encontrado.");
}

const normalizePath = (path: string) => {
  const cleanPath = path.replace(/\/+$/, "");
  return cleanPath === "" ? "/" : cleanPath;
};

const getCurrentPath = () => normalizePath(window.location.pathname);

const progressStorageKey = "universo-cafe-progress-v1";
const quizStorageKey = "universo-cafe-quiz-v1";

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const readProgress = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(progressStorageKey) ?? "[]") as string[]);
  } catch {
    return new Set<string>();
  }
};

const writeProgress = (items: Set<string>) => {
  localStorage.setItem(progressStorageKey, JSON.stringify(Array.from(items)));
};

const isLessonComplete = (id: string) => readProgress().has(id);

const getLessonByPath = (path: string) => lessonContents.find((lesson) => lesson.path === path);

const getProgressStats = () => {
  const completed = readProgress();
  const done = coreLessons.filter((lesson) => completed.has(lesson.id)).length;
  return {
    done,
    total: coreLessons.length,
    percent: Math.round((done / coreLessons.length) * 100)
  };
};

const renderProgressToggle = (lessonId: string, label = "Marcar como concluído") => {
  const completed = isLessonComplete(lessonId);
  return `
    <button
      class="progress-toggle ${completed ? "is-complete" : ""}"
      type="button"
      data-progress-toggle="${lessonId}"
      aria-pressed="${completed}"
    >
      <span aria-hidden="true">${completed ? "✓" : "+"}</span>
      ${completed ? "Concluído" : label}
    </button>
  `;
};

const renderPageProgress = (path: string) => {
  const lesson = getLessonByPath(path);
  if (!lesson) return "";

  return `
    <section class="section micro-section">
      <div class="container">
        <div class="lesson-progress-card reveal">
          <div>
            <p class="kicker">Progresso de estudo</p>
            <h2>${lesson.title}</h2>
            <p>${lesson.description}</p>
          </div>
          ${renderProgressToggle(lesson.id)}
        </div>
      </div>
    </section>
  `;
};

const list = (items: string[], className = "check-list") =>
  `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

const sectionHeading = (eyebrow: string, title: string, text: string) => `
  <div class="section-heading reveal">
    <p class="kicker">${eyebrow}</p>
    <h2>${title}</h2>
    <p>${text}</p>
  </div>
`;

const renderMedia = (media: MediaVisual, className = "") => {
  const credit = media.credit ? `<small>${media.credit}</small>` : "";
  const visual = media.src
    ? `<img src="${media.src}" alt="${media.alt}" loading="lazy" decoding="async" />`
    : `<div class="media-placeholder" data-tone="${media.tone}" role="img" aria-label="${media.alt}">
        <span>${media.title}</span>
      </div>`;

  return `
    <figure class="media-card ${className}">
      <div class="media-frame">${visual}</div>
      <figcaption>
        <strong>${media.caption}</strong>
        ${credit}
      </figcaption>
    </figure>
  `;
};

const renderHeader = (path: string) => `
  <header class="site-header" data-header>
    <div class="progress-bar" data-progress aria-hidden="true"></div>
    <div class="header-inner">
      <a class="brand" href="/" aria-label="Universo do Café - início">
        <span class="brand-mark" aria-hidden="true">UC</span>
        <span>
          <strong>Universo do Café</strong>
          <small>Academia aberta de café</small>
        </span>
      </a>
      <button class="menu-button" type="button" data-menu-button aria-expanded="false" aria-controls="site-nav">
        <span class="sr-only">Abrir menu</span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      <nav class="site-nav" id="site-nav" data-nav aria-label="Navegação principal">
        ${mainNav
          .map((item) => {
            const isActive = path === item.path || (item.path !== "/" && path.startsWith(`${item.path}/`));
            return `
              <a href="${item.path}" ${isActive ? 'aria-current="page" class="is-active"' : ""}>
                ${item.label}
              </a>
            `;
          })
          .join("")}
      </nav>
      <a class="header-cta" href="/fundamentos">Começar estudo</a>
    </div>
  </header>
`;

const renderFooter = () => `
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <strong>Universo do Café</strong>
        <p>Uma academia aberta e gratuita para estudar café, barismo, métodos e origens.</p>
      </div>
      <nav aria-label="Links do rodapé">
        <a href="/biblioteca">Biblioteca</a>
        <a href="/glossario">Glossário</a>
        <a href="/metodos">Métodos</a>
      </nav>
    </div>
  </footer>
`;

const renderPageHero = (
  eyebrow: string,
  title: string,
  text: string,
  actions: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" }[] = []
) => `
  <section class="page-hero">
    <div class="page-hero-bg" aria-hidden="true"></div>
    <div class="container page-hero-inner reveal">
      <p class="kicker">${eyebrow}</p>
      <h1>${title}</h1>
      <p>${text}</p>
      ${
        actions.length
          ? `<div class="hero-actions">${actions
              .map((action) => `<a class="button ${action.variant ?? "primary"}" href="${action.href}">${action.label}</a>`)
              .join("")}</div>`
          : ""
      }
    </div>
  </section>
`;

const renderInternalNav = (items: { label: string; href: string }[]) => `
  <nav class="page-index" aria-label="Índice desta página">
    ${items.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
  </nav>
`;

const renderNextCta = (label: string, title: string, text: string, href: string) => `
  <section class="next-lesson">
    <div>
      <p class="kicker">${label}</p>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
    <a class="button primary" href="${href}">Continuar estudo</a>
  </section>
`;

const renderProgressOverview = () => {
  const stats = getProgressStats();
  const nextLesson = coreLessons.find((lesson) => !isLessonComplete(lesson.id)) ?? coreLessons[0];

  return `
    <section class="section section-cream progress-section">
      <div class="container">
        <div class="progress-dashboard reveal">
          <div class="progress-summary">
            <p class="kicker">Seu ritmo</p>
            <h2>${stats.percent}% da trilha principal concluída</h2>
            <p>${stats.done} de ${stats.total} áreas marcadas. O progresso fica salvo neste navegador.</p>
            <div class="progress-meter" aria-label="Progresso geral" role="meter" aria-valuenow="${stats.percent}" aria-valuemin="0" aria-valuemax="100">
              <span style="width:${stats.percent}%"></span>
            </div>
            <a class="button primary" href="${nextLesson.path}">Continuar em ${nextLesson.title}</a>
          </div>
          <div class="progress-list">
            ${coreLessons
              .map(
                (lesson) => `
                  <article class="progress-item ${isLessonComplete(lesson.id) ? "is-complete" : ""}">
                    <div>
                      <span>${String(lesson.order).padStart(2, "0")}</span>
                      <h3><a href="${lesson.path}">${lesson.title}</a></h3>
                      <p>${lesson.duration} · ${lesson.level}</p>
                    </div>
                    ${renderProgressToggle(lesson.id, "Concluir")}
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
};

const renderVideoCard = (video: VideoResource, featured = false) => `
  <article
    class="video-card ${featured ? "featured" : ""}"
    data-video-card
    data-library-card
    data-type="video"
    data-category="${video.category}"
    data-level="${video.level}"
    data-search="${escapeAttr(`${video.title} ${video.channel} ${video.category} ${video.level} ${video.related} ${video.description}`)}"
  >
    <div class="video-shell" data-video-shell>
      <button class="video-load" type="button" data-video-id="${video.id}" aria-label="Carregar vídeo: ${video.title}">
        <span class="play-mark" aria-hidden="true"></span>
        <strong>Carregar aula</strong>
      </button>
    </div>
    <div class="video-copy">
      <p class="kicker">${video.category}</p>
      <h3>${video.title}</h3>
      <p>${video.description}</p>
      <dl class="inline-facts">
        <div><dt>Canal</dt><dd>${video.channel}</dd></div>
        <div><dt>Nível</dt><dd>${video.level}</dd></div>
        <div><dt>Idioma</dt><dd>${video.language}</dd></div>
      </dl>
      <a class="text-link" href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noreferrer">Abrir no YouTube</a>
    </div>
  </article>
`;

const renderHome = () => `
  <section class="hero-section" aria-labelledby="home-title">
    <div class="hero-media" aria-hidden="true">
      <img src="/images/coffee-hero.png" alt="" />
    </div>
    <div class="hero-surface"></div>
    <div class="hero-content reveal">
      <p class="kicker">Academia aberta e gratuita</p>
      <h1 id="home-title">Estude café além da xícara.</h1>
      <p class="hero-subtitle">
        Uma plataforma gratuita para aprender café do grão ao barismo: história, origens,
        processos, métodos, vídeos, mapas e prática.
      </p>
      <p class="hero-copy">
        Comece pelos fundamentos, siga a cadeia do café, pratique métodos, explore mapas e use
        a biblioteca multimídia para estudar no seu ritmo.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="/fundamentos">Começar pelos fundamentos</a>
        <a class="button secondary" href="/metodos">Ver métodos de preparo</a>
      </div>
      <div class="hero-stats">
        ${homeStats.map((stat) => `<div><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join("")}
      </div>
    </div>
  </section>

  ${renderProgressOverview()}

  <section class="section section-cream">
    <div class="container">
      ${sectionHeading(
        "Jornada gratuita",
        "Estude em uma ordem que faz sentido",
        "A Home apresenta o mapa geral. Cada página aprofunda uma etapa sem transformar o site em uma landing page comercial."
      )}
      <div class="study-grid">
        ${studyPaths
          .map(
            (item) => `
              <article class="study-card reveal">
                <span>${item.number}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${list(item.topics, "chip-list")}
                <dl class="inline-facts">
                  <div><dt>Nível</dt><dd>${item.level}</dd></div>
                  <div><dt>Leitura</dt><dd>${item.duration}</dd></div>
                </dl>
                <a class="text-link dark" href="${item.path}">Começar módulo</a>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container">
      ${sectionHeading(
        "Destaques",
        "Mais visual, mais navegável, mais útil para estudar",
        "A plataforma agora separa guias, vídeos, mapas, glossário e páginas práticas."
      )}
      <div class="bento-grid">
        ${homeHighlights
          .map(
            (item, index) => `
              <article class="bento-card dark-card reveal ${index === 0 ? "wide" : ""}">
                <p class="kicker">Aberto</p>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
                <a class="text-link" href="${item.path}">Explorar</a>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section section-copper">
    <div class="container">
      ${sectionHeading(
        "Comece agora",
        "Três caminhos rápidos",
        "Escolha um ponto de entrada e siga a trilha recomendada no final de cada página."
      )}
      <div class="feature-strip">
        <a href="/fundamentos">Entender o café</a>
        <a href="/metodos">Preparar melhor</a>
        <a href="/biblioteca">Assistir aulas</a>
      </div>
    </div>
  </section>
`;

const renderFundamentos = () => `
  ${renderPageHero(
    "Fundamentos",
    "Antes do método, entenda a bebida.",
    "Café é planta, cultura, processo, técnica e experiência sensorial. Esta página organiza a base para você estudar com clareza.",
    [
      { label: "Ver sensorial", href: "#sensorial", variant: "primary" },
      { label: "Seguir para campo", href: "/do-campo-a-xicara", variant: "secondary" }
    ]
  )}
  ${renderPageProgress("/fundamentos")}
  <section class="section section-cream">
    <div class="container">
      ${renderInternalNav(coffeeBasics.map((item) => ({ label: item.title, href: `#${item.id}` })))}
      <div class="editorial-list">
        ${coffeeBasics
          .map(
            (item) => `
              <article class="editorial-block reveal" id="${item.id}">
                <div>
                  <p class="kicker">${item.eyebrow}</p>
                  <h2>${item.title}</h2>
                  <p>${item.body}</p>
                  ${list(item.bullets, "chip-list")}
                </div>
                ${renderMedia(item.media)}
              </article>
            `
          )
          .join("")}
      </div>
      <div class="sensory-panel light-panel reveal" id="sensorial">
        <div>
          <p class="kicker">Conceitos-chave</p>
          <h2>Como ler uma xícara</h2>
          <p>Um café deixa de ser apenas forte ou fraco quando você observa os elementos sensoriais em conjunto.</p>
        </div>
        <div class="mini-grid">
          ${sensoryCards.map((item) => `<article><h3>${item.title}</h3><p>${item.text}</p></article>`).join("")}
        </div>
      </div>
      <div class="comparison-grid reveal">
        ${marketTypes.map((item) => `<article><h3>${item.title}</h3><p>${item.text}</p></article>`).join("")}
      </div>
      ${renderNextCta("Próximo conteúdo", "Siga o café do campo à xícara", "Veja como plantio, colheita, processos, torra, moagem e serviço mudam o sabor.", "/do-campo-a-xicara")}
    </div>
  </section>
`;

const renderJourneyPage = () => `
  ${renderPageHero(
    "Do campo à xícara",
    "A qualidade é construída em etapas.",
    "Cada decisão pode preservar, ampliar ou comprometer o potencial do café. A timeline mostra impacto no sabor, detalhe técnico e profissional envolvido."
  )}
  ${renderPageProgress("/do-campo-a-xicara")}
  <section class="section section-olive">
    <div class="container">
      ${renderInternalNav(coffeeJourney.map((step) => ({ label: step.title, href: `#${step.id}` })))}
      <div class="rich-timeline">
        ${coffeeJourney
          .map(
            (step, index) => `
              <article class="rich-step reveal" id="${step.id}">
                <div class="timeline-index">${String(index + 1).padStart(2, "0")}</div>
                ${renderMedia(step.media)}
                <div class="rich-step-copy">
                  <h2>${step.title}</h2>
                  <p>${step.summary}</p>
                  <p><strong>Impacto no sabor:</strong> ${step.impact}</p>
                  <details>
                    <summary>Detalhe técnico</summary>
                    <p>${step.detail}</p>
                  </details>
                  <dl class="inline-facts">
                    <div><dt>Profissional</dt><dd>${step.professional}</dd></div>
                    <div><dt>Aprofundar</dt><dd><a href="${step.relatedPath}">Ver conteúdo</a></dd></div>
                  </dl>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      ${renderNextCta("Próximo conteúdo", "Conheça quem trabalha em cada etapa", "A cadeia do café é feita por pessoas com habilidades, ferramentas e responsabilidades diferentes.", "/profissionais")}
    </div>
  </section>
`;

const renderProfessionCard = (professional: Professional) => `
  <article class="profession-card reveal" data-professional-card data-stage="${professional.stage}">
    <p class="kicker">${stageLabels[professional.stage]}</p>
    <h3>${professional.title}</h3>
    <p>${professional.role}</p>
    <dl class="card-dl">
      <div><dt>Onde atua</dt><dd>${professional.place}</dd></div>
      <div><dt>Impacto na xícara</dt><dd>${professional.impact}</dd></div>
      <div><dt>Como começar</dt><dd>${professional.start}</dd></div>
    </dl>
    <div class="split-lists">
      <div><strong>Habilidades</strong>${list(professional.skills, "chip-list")}</div>
      <div><strong>Ferramentas</strong>${list(professional.tools, "chip-list")}</div>
    </div>
    <a class="text-link" href="/profissionais/${slugify(professional.title)}">Ver página da carreira</a>
  </article>
`;

const renderProfessionalsPage = () => `
  ${renderPageHero(
    "Profissionais",
    "A xícara é uma cadeia de trabalho.",
    "Do campo à cafeteria, cada área contribui para qualidade, rastreabilidade, consistência e experiência."
  )}
  ${renderPageProgress("/profissionais")}
  <section class="section section-dark">
    <div class="container">
      <div class="filter-bar" aria-label="Filtros de profissionais">
        <button type="button" class="is-active" data-prof-filter="todos">Todos</button>
        ${Object.entries(stageLabels).map(([key, label]) => `<button type="button" data-prof-filter="${key}">${label}</button>`).join("")}
      </div>
      <div class="profession-grid expanded">
        ${professionals.map(renderProfessionCard).join("")}
      </div>
      <section class="career-panel reveal">
        <p class="kicker">Carreira</p>
        <h2>Como seguir carreira no café</h2>
        <p>Comece provando cafés diferentes, aprenda fundamentos de extração, pratique comunicação sensorial e acompanhe profissionais reais. Depois escolha uma área: campo, qualidade, torra, cafeteria ou negócios.</p>
        <div class="feature-strip">
          <a href="/fundamentos">Base sensorial</a>
          <a href="/barismo">Prática de extração</a>
          <a href="/biblioteca">Aulas recomendadas</a>
        </div>
      </section>
      ${renderNextCta("Próximo conteúdo", "Entre na prática do barismo", "Aprenda as variáveis que o barista usa para ajustar sabor e consistência.", "/barismo")}
    </div>
  </section>
`;

const barismoPrinciples = [
  ["Dose", "Quantidade de café usada na receita."],
  ["Rendimento", "Quantidade de bebida extraída, especialmente no espresso."],
  ["Proporção", "Relação entre café e água, como 1:16 em filtrados."],
  ["Tempo", "Janela de contato entre água e café."],
  ["Moagem", "Tamanho das partículas e velocidade de extração."],
  ["Temperatura", "Energia da água para dissolver compostos."],
  ["Água", "Grande parte da bebida; precisa ser adequada e limpa."],
  ["Agitação", "Turbulência que aumenta ou muda a extração."],
  ["Distribuição", "Espalhar o pó para evitar caminhos preferenciais."],
  ["Compactação", "No espresso, cria resistência uniforme à água."],
  ["Limpeza", "Equipamento sujo altera sabor e consistência."]
];

const equipmentCards = [
  ["Balança", "Mede dose e água.", "Essencial", "Use uma balança simples de cozinha no começo."],
  ["Moedor", "Controla granulometria.", "Essencial", "Moer em cafeteria é uma alternativa inicial."],
  ["Chaleira", "Controla despejo.", "Útil", "Uma chaleira comum funciona com cuidado."],
  ["Filtro", "Separa sólidos.", "Essencial", "Escalde sempre que usar papel."],
  ["Dripper", "Suporte do coado.", "Essencial", "Melitta é uma entrada acessível."],
  ["Prensa", "Infusão com corpo.", "Opcional", "Boa para estudar corpo e textura."],
  ["AeroPress", "Método versátil.", "Opcional", "Ótima para viagem e testes."],
  ["Moka", "Bebida intensa.", "Opcional", "Use fogo baixo e não compacte."],
  ["Máquina de espresso", "Extração sob pressão.", "Avançado", "Comece estudando dose e rendimento."],
  ["Tamper", "Compactação do espresso.", "Avançado", "Distribuição importa tanto quanto força."],
  ["Pitcher", "Vaporização de leite.", "Opcional", "Necessária para latte art."],
  ["Termômetro", "Controle de temperatura.", "Opcional", "Ajuda no treino de leite e água."]
];

const renderBarismoPage = () => `
  ${renderPageHero(
    "Barismo",
    "Preparar bem é observar, medir e ajustar.",
    "O barista entende o que está acontecendo na extração. Esta página organiza fundamentos, diagnóstico e equipamentos para prática."
  )}
  ${renderPageProgress("/barismo")}
  <section class="section section-copper">
    <div class="container">
      ${renderInternalNav([
        { label: "Fundamentos", href: "#fundamentos" },
        { label: "Diagnóstico", href: "#diagnostico" },
        { label: "Equipamentos", href: "#equipamentos" }
      ])}
      ${sectionHeading("Painel", "Fundamentos da extração", "Use estes cartões como painel rápido para revisar uma receita.")}
      <div class="principles-grid" id="fundamentos">
        ${barismoPrinciples.map(([title, text]) => `<article class="principle-card reveal"><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
      <section class="diagnostic-panel reveal" id="diagnostico">
        <div>
          <p class="kicker">Diagnóstico de sabor</p>
          <h2>O que a xícara está dizendo?</h2>
          <p>Ajustar café é criar hipótese, mudar uma variável por vez e provar de novo.</p>
        </div>
        <div class="diagnostic-grid">
          <article class="diagnostic-card">
            <h3>Azedo, fino, fraco ou agressivo</h3>
            <p>Possível subextração: moagem grossa, água fria, pouco tempo, pouca agitação ou proporção inadequada.</p>
            ${list(["Afinar moagem", "Aumentar tempo", "Aumentar temperatura", "Agitar com cuidado", "Revisar proporção"])}
          </article>
          <article class="diagnostic-card">
            <h3>Amargo, seco, pesado ou áspero</h3>
            <p>Possível superextração: moagem fina, tempo alto, água quente demais, muita agitação ou torra escura.</p>
            ${list(["Engrossar moagem", "Reduzir tempo", "Reduzir temperatura", "Diminuir agitação", "Revisar o café usado"])}
          </article>
        </div>
      </section>
      ${sectionHeading("Ferramentas", "Equipamentos básicos", "Cada ferramenta resolve um problema de controle. Nem tudo é essencial no começo.")}
      <div class="equipment-grid" id="equipamentos">
        ${equipmentCards
          .map(
            ([title, purpose, status, alternative]) => `
              <article class="equipment-card reveal">
                <div class="equipment-icon" aria-hidden="true">${title.slice(0, 2).toUpperCase()}</div>
                <h3>${title}</h3>
                <p>${purpose}</p>
                <dl class="inline-facts">
                  <div><dt>Status</dt><dd>${status}</dd></div>
                  <div><dt>Alternativa</dt><dd>${alternative}</dd></div>
                </dl>
              </article>
            `
          )
          .join("")}
      </div>
      ${renderNextCta("Próximo conteúdo", "Aplique isso nos métodos", "Compare moagem, tempo, proporção, erros comuns e ajustes por método.", "/metodos")}
    </div>
  </section>
`;

const renderMethodSection = (method: BrewMethod) => `
  <article class="method-detail reveal" id="${method.id}">
    ${renderMedia(method.media)}
    <div class="method-copy">
      <p class="kicker">${method.difficulty}</p>
      <h2>${method.name}</h2>
      <p>${method.description}</p>
      <div class="recipe-grid">
        <div><span>Moagem</span><strong>${method.grind}</strong></div>
        <div><span>Proporção</span><strong>${method.ratio}</strong></div>
        <div><span>Tempo</span><strong>${method.time}</strong></div>
        <div><span>Temperatura</span><strong>${method.temperature}</strong></div>
      </div>
      <div class="method-columns">
        <section><h3>Equipamento</h3>${list(method.equipment, "chip-list")}</section>
        <section><h3>Passo a passo</h3>${list(method.steps, "number-list")}</section>
        <section><h3>Erros comuns</h3>${list(method.commonErrors)}</section>
        <section><h3>Como ajustar</h3>${list(method.adjustments)}</section>
      </div>
      <dl class="inline-facts method-facts">
        <div><dt>Perfil</dt><dd>${method.sensory}</dd></div>
        <div><dt>Corpo</dt><dd>${method.body}</dd></div>
        <div><dt>Acidez</dt><dd>${method.acidity}</dd></div>
        <div><dt>Melhor para</dt><dd>${method.bestFor}</dd></div>
        <div><dt>Copo sugerido</dt><dd>${method.vessel}</dd></div>
      </dl>
      <a class="text-link dark" href="/metodos/${method.id}">Abrir página completa</a>
      ${method.videoId ? renderVideoCard(videos.find((video) => video.id === method.videoId) ?? videos[0]) : ""}
    </div>
  </article>
`;

const renderMethodsPage = () => `
  ${renderPageHero(
    "Métodos de preparo",
    "Escolha o método pelo efeito na xícara.",
    "Cada método mostra receita-base, moagem, tempo, temperatura, erros comuns, ajustes, perfil sensorial e vídeo recomendado."
  )}
  ${renderPageProgress("/metodos")}
  <section class="section section-cream">
    <div class="container">
      ${renderInternalNav([
        { label: "Visão geral", href: "#comparativo" },
        ...brewMethods.map((method) => ({ label: method.name, href: `#${method.id}` }))
      ])}
      <div class="comparison-table reveal" id="comparativo" role="region" aria-label="Comparativo de métodos" tabindex="0">
        <table>
          <thead>
            <tr><th>Método</th><th>Moagem</th><th>Tempo</th><th>Corpo</th><th>Acidez</th><th>Dificuldade</th><th>Melhor para</th></tr>
          </thead>
          <tbody>
            ${brewMethods
              .map(
                (method) => `
                  <tr>
                    <th><a href="/metodos/${method.id}">${method.name}</a></th>
                    <td>${method.grind}</td>
                    <td>${method.time}</td>
                    <td>${method.body}</td>
                    <td>${method.acidity}</td>
                    <td>${method.difficulty}</td>
                    <td>${method.bestFor}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="method-list">
        ${brewMethods.map(renderMethodSection).join("")}
      </div>
      ${renderNextCta("Próximo conteúdo", "Estude leite e latte art", "Depois dos métodos, explore espresso, microespuma, bebidas com leite e padrões de desenho.", "/latte-art")}
    </div>
  </section>
`;

const renderLattePage = () => `
  ${renderPageHero(
    "Latte art",
    "Desenho bonito começa antes do leite tocar o espresso.",
    "Aprenda bebidas com leite, microespuma, vaporização, erros comuns, coração, tulipa, rosetta, treino e competições."
  )}
  ${renderPageProgress("/latte-art")}
  <section class="section section-milk">
    <div class="container">
      ${renderInternalNav([
        { label: "Bebidas", href: "#bebidas" },
        { label: "Microespuma", href: "#microespuma" },
        { label: "Padrões", href: "#padroes" },
        { label: "Vídeos", href: "#videos" }
      ])}
      <div class="milk-grid" id="bebidas">
        ${milkDrinks.map((drink) => `<article class="milk-card reveal"><h2>${drink.title}</h2><p>${drink.text}</p></article>`).join("")}
      </div>
      <section class="latte-panel reveal" id="microespuma">
        <div>
          <p class="kicker">Microespuma</p>
          <h2>Como vaporizar leite</h2>
          <p>Vaporizar é aquecer e incorporar ar. A textura ideal fica lisa, brilhante e cremosa.</p>
          ${list(steamingTips)}
        </div>
        ${renderMedia({ title: "Latte art", alt: "Xícara com desenho de latte art", caption: "Contraste, crema e microespuma trabalham juntos.", tone: "latte" })}
      </section>
      <div class="comparison-grid">
        ${steamingErrors.map((error) => `<article class="reveal"><h3>${error.title}</h3><p>${error.fix}</p></article>`).join("")}
      </div>
      <div class="pattern-grid" id="padroes">
        ${lattePatterns
          .map(
            (pattern) => `
              <article class="pattern-card reveal">
                <p class="kicker">${pattern.level}</p>
                <h2>${pattern.title}</h2>
                ${list(pattern.steps, "number-list")}
                <p>${pattern.tip}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <section id="videos">
        ${sectionHeading("Aulas", "Vídeos recomendados", "Embeds carregam apenas quando você clica.")}
        <div class="video-grid">
          ${videos.filter((video) => video.category === "Latte Art").map((video) => renderVideoCard(video)).join("")}
        </div>
      </section>
      ${renderNextCta("Próximo conteúdo", "Explore origens e mapas", "Veja como países, regiões e terroir ajudam a explicar diferenças sensoriais.", "/origens-e-mapas")}
    </div>
  </section>
`;

const renderOriginDetail = (origin: OriginPoint) => `
  <article class="origin-detail" data-origin-detail>
    <p class="kicker">${origin.type}</p>
    <h2>${origin.name}</h2>
    <p>${origin.notes}</p>
    <dl class="card-dl">
      <div><dt>Notas comuns</dt><dd>${origin.sensory}</dd></div>
      <div><dt>Curiosidade</dt><dd>${origin.curiosity}</dd></div>
    </dl>
    <a class="text-link" href="${origin.relatedPath}">Ver conteúdo relacionado</a>
  </article>
`;

const renderOriginsPage = () => `
  ${renderPageHero(
    "Origens e mapas",
    "O sabor também tem endereço.",
    "Explore países produtores e regiões brasileiras sem inventar números: o foco aqui é identidade, espécie, perfil geral e relação com a xícara."
  )}
  ${renderPageProgress("/origens-e-mapas")}
  <section class="section section-dark">
    <div class="container">
      ${renderInternalNav([
        { label: "Mapa mundial", href: "#mapa-mundial" },
        { label: "Brasil", href: "#brasil" }
      ])}
      <div class="map-layout reveal" id="mapa-mundial">
        <div class="coffee-map" aria-label="Mapa estilizado de origens produtoras">
          <svg viewBox="0 0 100 70" role="img" aria-label="Cinturão do café com pontos de países produtores">
            <rect x="3" y="8" width="94" height="50" rx="8"></rect>
            <path d="M10 34 C24 18, 38 21, 49 34 S76 50, 91 32"></path>
            <path d="M9 44 C25 53, 41 47, 55 39 S79 27, 92 42"></path>
          </svg>
          ${originPoints
            .map(
              (origin, index) => `
                <button class="map-point ${index === 0 ? "is-active" : ""}" data-origin="${origin.id}" style="--x:${origin.x};--y:${origin.y}" type="button">
                  <span class="sr-only">${origin.name}</span>
                </button>
              `
            )
            .join("")}
        </div>
        <div data-origin-panel>${renderOriginDetail(originPoints[0])}</div>
      </div>
      ${sectionHeading("Mapa do Brasil", "Regiões brasileiras para estudar", "Perfis gerais variam por fazenda, variedade, processo e torra; use os cards como orientação inicial.")}
      <div class="region-grid" id="brasil">
        ${brazilRegions
          .map(
            (region) => `
              <article class="region-card reveal">
                ${renderMedia(region.media)}
                <p class="kicker">${region.state}</p>
                <h3>${region.name}</h3>
                <dl class="card-dl">
                  <div><dt>Tipo</dt><dd>${region.type}</dd></div>
                  <div><dt>Espécie</dt><dd>${region.species}</dd></div>
                  <div><dt>Perfil geral</dt><dd>${region.sensory}</dd></div>
                  <div><dt>Importância</dt><dd>${region.importance}</dd></div>
                </dl>
              </article>
            `
          )
          .join("")}
      </div>
      ${renderNextCta("Próximo conteúdo", "Abra a biblioteca gratuita", "Veja vídeos recomendados, guias rápidos e temas para continuar estudando.", "/biblioteca")}
    </div>
  </section>
`;

const renderBiblioteca = () => `
  ${renderPageHero(
    "Biblioteca",
    "Vídeos, guias rápidos e recursos visuais para estudar no seu ritmo.",
    "Os vídeos não carregam automaticamente. Clique apenas nas aulas que quiser assistir."
  )}
  ${renderPageProgress("/biblioteca")}
  <section class="section section-cream">
    <div class="container">
      <div class="library-controls reveal">
        <label class="search-label" for="library-search">Buscar na biblioteca</label>
        <input id="library-search" type="search" placeholder="Busque por V60, espresso, latte art, torra..." autocomplete="off" data-library-search />
        <div class="filter-bar light-filter" aria-label="Filtros por tema">
          ${videoFilters.map((filter, index) => `<button type="button" class="${index === 0 ? "is-active" : ""}" data-library-filter="${filter}">${filter}</button>`).join("")}
        </div>
        <div class="select-filters">
          <label>Tipo
            <select data-library-type>
              <option value="Todos">Todos</option>
              <option value="video">Vídeos</option>
              <option value="guia">Guias</option>
              <option value="imagem">Imagens</option>
            </select>
          </label>
          <label>Nível
            <select data-library-level>
              <option value="Todos">Todos</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermedi">Intermediário</option>
              <option value="Avan">Avançado</option>
              <option value="Pratico">Prático</option>
            </select>
          </label>
        </div>
      </div>
      <div class="video-grid library-grid">
        ${videos.map((video, index) => renderVideoCard(video, index === 0)).join("")}
        ${photoTopics
          .map(
            (topic) => `
              <article
                class="photo-topic library-resource-card reveal"
                data-library-card
                data-type="imagem"
                data-category="${topic.title}"
                data-level="Pratico"
                data-search="${escapeAttr(`${topic.title} ${topic.text}`)}"
              >
                ${renderMedia({ title: topic.title, alt: `Imagem educativa sobre ${topic.title}`, caption: topic.text, tone: topic.tone as MediaVisual["tone"] })}
              </article>
            `
          )
          .join("")}
        ${quickGuides
          .map(
            (guide) => `
              <article
                class="quick-card library-resource-card reveal"
                data-library-card
                data-type="guia"
                data-category="${guide.category}"
                data-level="Pratico"
                data-search="${escapeAttr(`${guide.title} ${guide.category} ${guide.text}`)}"
              >
                <p class="kicker">${guide.category}</p>
                <h3>${guide.title}</h3>
                <p>${guide.text}</p>
                <a class="text-link dark" href="${guide.path}">Abrir guia</a>
              </article>
            `
          )
          .join("")}
      </div>
      <p class="empty-state library-empty" data-library-empty hidden>Nenhum recurso encontrado para esses filtros.</p>
      ${renderNextCta("Próximo conteúdo", "Consulte o glossário", "Pesquise termos técnicos e siga para páginas relacionadas.", "/glossario")}
    </div>
  </section>
`;

const renderGlossary = () => `
  ${renderPageHero(
    "Glossário",
    "Um vocabulário para estudar com precisão.",
    "Pesquise termos de sensorial, preparo, processo, torra, espresso, qualidade e profissões."
  )}
  ${renderPageProgress("/glossario")}
  <section class="section section-cream">
    <div class="container">
      <div class="glossary-shell reveal">
        <label class="search-label" for="glossary-search">Buscar termo</label>
        <input id="glossary-search" type="search" placeholder="Digite acidez, V60, moagem, Q-Grader..." autocomplete="off" data-glossary-search />
        <div class="glossary-grid" data-glossary-list>
          ${glossaryTerms
            .map(
              (item) => `
                <article class="glossary-card" data-glossary-card data-term="${item.term} ${item.short} ${item.detail} ${item.category}">
                  <p class="kicker">${item.category}</p>
                  <h2>${item.term}</h2>
                  <p><strong>${item.short}</strong></p>
                  <p>${item.detail}</p>
                  <a class="text-link dark" href="/glossario/${slugify(item.term)}">Abrir termo</a>
                  <a class="text-link dark subtle-link" href="${item.relatedPath}">Página relacionada</a>
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

const renderDetailProgressPanel = (lessonId: string, title: string, text: string, backHref: string, backLabel: string) => `
  <section class="section micro-section">
    <div class="container">
      <div class="lesson-progress-card detail-progress-card reveal">
        <div>
          <p class="kicker">Página individual</p>
          <h2>${title}</h2>
          <p>${text}</p>
          <a class="text-link dark" href="${backHref}">${backLabel}</a>
        </div>
        ${renderProgressToggle(lessonId)}
      </div>
    </div>
  </section>
`;

const renderMethodDetailPage = (method: BrewMethod) => `
  ${renderPageHero(
    method.name,
    `Método ${method.name}: receita, leitura e ajustes.`,
    method.description,
    [
      { label: "Comparar métodos", href: "/simuladores#comparador", variant: "primary" },
      { label: "Voltar aos métodos", href: "/metodos", variant: "secondary" }
    ]
  )}
  ${renderDetailProgressPanel(
    `metodo:${method.id}`,
    `Estudo individual: ${method.name}`,
    "Marque quando concluir leitura, receita-base, erros comuns e ajustes.",
    "/metodos",
    "Voltar para todos os métodos"
  )}
  <section class="section section-cream">
    <div class="container">
      ${renderMethodSection(method)}
      <section class="study-next-grid reveal">
        <article>
          <p class="kicker">Pratica guiada</p>
          <h2>Teste a receita no simulador</h2>
          <p>Use dose e proporção para calcular água, comparar métodos e registrar hipóteses antes de preparar.</p>
          <a class="button primary" href="/simuladores">Abrir simuladores</a>
        </article>
        <article>
          <p class="kicker">Revisao</p>
          <h2>Fixe com quiz</h2>
          <p>Depois de estudar, responda perguntas curtas e veja feedback imediato.</p>
          <a class="button secondary dark-button" href="/quizzes">Abrir quizzes</a>
        </article>
      </section>
    </div>
  </section>
`;

const renderProfessionalDetailPage = (professional: Professional) => `
  ${renderPageHero(
    professional.title,
    `${professional.title}: papel, ferramentas e caminho de estudo.`,
    professional.role,
    [
      { label: "Ver todos os profissionais", href: "/profissionais", variant: "primary" },
      { label: "Estudar cadeia do café", href: "/do-campo-a-xicara", variant: "secondary" }
    ]
  )}
  ${renderDetailProgressPanel(
    `profissional:${slugify(professional.title)}`,
    `Carreira: ${professional.title}`,
    "Marque esta carreira como estudada depois de revisar habilidades, ferramentas e impacto na xícara.",
    "/profissionais",
    "Voltar para profissionais"
  )}
  <section class="section section-dark">
    <div class="container">
      <div class="profession-detail-grid reveal">
        ${renderProfessionCard(professional)}
        <article class="career-panel">
          <p class="kicker">${stageLabels[professional.stage]}</p>
          <h2>Como essa função muda o café</h2>
          <dl class="card-dl">
            <div><dt>Onde atua</dt><dd>${professional.place}</dd></div>
            <div><dt>Impacto</dt><dd>${professional.impact}</dd></div>
            <div><dt>Primeiro passo</dt><dd>${professional.start}</dd></div>
          </dl>
          <div class="feature-strip">
            <a href="/fundamentos">Base sensorial</a>
            <a href="/biblioteca">Aulas e guias</a>
            <a href="/glossario">Termos técnicos</a>
          </div>
        </article>
      </div>
    </div>
  </section>
`;

const renderGlossaryDetailPage = (term: GlossaryTerm) => `
  ${renderPageHero(
    term.term,
    `${term.term}: significado no café.`,
    term.short,
    [
      { label: "Voltar ao glossario", href: "/glossario", variant: "primary" },
      { label: "Pagina relacionada", href: term.relatedPath, variant: "secondary" }
    ]
  )}
  ${renderDetailProgressPanel(
    `glossario:${slugify(term.term)}`,
    `Termo técnico: ${term.term}`,
    "Marque como revisado quando o termo fizer sentido dentro de uma receita, prova ou conversa técnica.",
    "/glossario",
    "Voltar ao glossario"
  )}
  <section class="section section-cream">
    <div class="container">
      <article class="glossary-detail reveal">
        <p class="kicker">${term.category}</p>
        <h2>${term.term}</h2>
        <p><strong>${term.short}</strong></p>
        <p>${term.detail}</p>
        <dl class="inline-facts">
          <div><dt>Categoria</dt><dd>${term.category}</dd></div>
          <div><dt>Onde aplicar</dt><dd><a href="${term.relatedPath}">Abrir página relacionada</a></dd></div>
        </dl>
      </article>
    </div>
  </section>
`;

const renderQuizPanel = (quiz: Quiz, index: number) => `
  <section class="quiz-panel ${index === 0 ? "is-active" : ""}" data-quiz-panel="${quiz.id}" ${index === 0 ? "" : "hidden"}>
    <div class="quiz-panel-head">
      <div>
        <p class="kicker">${quiz.category}</p>
        <h2>${quiz.title}</h2>
        <p>${quiz.description}</p>
      </div>
        <a class="text-link dark" href="${quiz.relatedPath}">Revisar conteúdo</a>
    </div>
    <form class="quiz-form" data-quiz-form="${quiz.id}">
      ${quiz.questions
        .map(
          (question, questionIndex) => `
            <fieldset class="quiz-question" data-question data-answer="${question.answer}">
              <legend>${questionIndex + 1}. ${question.prompt}</legend>
              ${question.options
                .map(
                  (option, optionIndex) => `
                    <label>
                      <input type="radio" name="${quiz.id}-${questionIndex}" value="${optionIndex}" />
                      <span>${option}</span>
                    </label>
                  `
                )
                .join("")}
              <p class="quiz-feedback" data-question-feedback hidden>${question.feedback}</p>
            </fieldset>
          `
        )
        .join("")}
      <div class="quiz-actions">
        <button class="button primary" type="submit">Corrigir quiz</button>
        <p class="quiz-result" data-quiz-result aria-live="polite"></p>
      </div>
    </form>
  </section>
`;

const renderQuizzesPage = () => `
  ${renderPageHero(
    "Quizzes",
    "Aprenda melhor quando precisa responder.",
    "Cada quiz tem poucas perguntas, feedback imediato e revisão indicada. Use como fechamento das trilhas.",
    [
      { label: "Comecar pelo primeiro", href: "#quiz-fundamentos", variant: "primary" },
      { label: "Ver simuladores", href: "/simuladores", variant: "secondary" }
    ]
  )}
  ${renderPageProgress("/quizzes")}
  <section class="section section-cream">
    <div class="container">
      <div class="quiz-shell reveal" id="quiz-fundamentos">
        <div class="filter-bar light-filter quiz-tabs" aria-label="Escolha de quiz">
          ${quizzes
            .map(
              (quiz, index) => `
                <button type="button" class="${index === 0 ? "is-active" : ""}" data-quiz-tab="${quiz.id}">
                  ${quiz.title}
                </button>
              `
            )
            .join("")}
        </div>
        ${quizzes.map(renderQuizPanel).join("")}
      </div>
    </div>
  </section>
`;

const getMethodRatioValue = (method: BrewMethod) => {
  if (method.id === "espresso") return 2;
  if (method.id === "cold-brew") return 10;
  if (method.id === "moka") return 7;

  const match = method.ratio.match(/1:(\d+)/);
  return match ? Number(match[1]) : 16;
};

const renderSimulatorsPage = () => `
  ${renderPageHero(
    "Simuladores",
    "Ferramentas simples para pensar como barista.",
    "Calcule receitas, diagnostique espresso e compare métodos antes de mexer em moagem, dose e tempo.",
    [
      { label: "Calcular receita", href: "#receita", variant: "primary" },
      { label: "Fazer quizzes", href: "/quizzes", variant: "secondary" }
    ]
  )}
  ${renderPageProgress("/simuladores")}
  <section class="section section-copper">
    <div class="container">
      <div class="tool-grid">
        <article class="tool-panel reveal" id="receita">
          <p class="kicker">Receita</p>
          <h2>Calculadora de proporção</h2>
          <div class="form-grid">
            <label>Dose de café (g)<input type="number" min="5" max="80" step="1" value="15" data-recipe-dose /></label>
            <label>Proporcao<input type="number" min="2" max="20" step="0.5" value="16" data-recipe-ratio /></label>
            <label>Método
              <select data-recipe-method>
                ${brewMethods.map((method) => `<option value="${method.id}" data-ratio="${getMethodRatioValue(method)}">${method.name}</option>`).join("")}
              </select>
            </label>
          </div>
          <div class="tool-result" data-recipe-output aria-live="polite"></div>
        </article>

        <article class="tool-panel reveal" id="espresso-diagnostico">
          <p class="kicker">Espresso</p>
          <h2>Diagnóstico rápido</h2>
          <label class="full-label">Sintoma
            <select data-espresso-diagnostic>
              ${espressoDiagnostics.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
            </select>
          </label>
          <div class="tool-result" data-espresso-output aria-live="polite"></div>
        </article>

        <article class="tool-panel wide reveal" id="comparador">
          <p class="kicker">Comparador</p>
          <h2>Método contra método</h2>
          <div class="form-grid two">
            <label>Método A
              <select data-compare-a>
                ${brewMethods.map((method) => `<option value="${method.id}">${method.name}</option>`).join("")}
              </select>
            </label>
            <label>Método B
              <select data-compare-b>
                ${brewMethods.map((method, index) => `<option value="${method.id}" ${index === 5 ? "selected" : ""}>${method.name}</option>`).join("")}
              </select>
            </label>
          </div>
          <div class="compare-output" data-compare-output aria-live="polite"></div>
        </article>
      </div>
    </div>
  </section>
`;

const routes: Record<string, () => string> = {
  "/": renderHome,
  "/fundamentos": renderFundamentos,
  "/do-campo-a-xicara": renderJourneyPage,
  "/profissionais": renderProfessionalsPage,
  "/barismo": renderBarismoPage,
  "/metodos": renderMethodsPage,
  "/latte-art": renderLattePage,
  "/origens-e-mapas": renderOriginsPage,
  "/biblioteca": renderBiblioteca,
  "/glossario": renderGlossary,
  "/quizzes": renderQuizzesPage,
  "/simuladores": renderSimulatorsPage
};

const resolveRoute = (path: string): { path: string; render: () => string } => {
  if (routes[path]) {
    return { path, render: routes[path] };
  }

  if (path.startsWith("/metodos/")) {
    const id = path.split("/").filter(Boolean).at(-1);
    const method = brewMethods.find((item) => item.id === id);
    if (method) return { path, render: () => renderMethodDetailPage(method) };
  }

  if (path.startsWith("/profissionais/")) {
    const slug = path.split("/").filter(Boolean).at(-1);
    const professional = professionals.find((item) => slugify(item.title) === slug);
    if (professional) return { path, render: () => renderProfessionalDetailPage(professional) };
  }

  if (path.startsWith("/glossario/")) {
    const slug = path.split("/").filter(Boolean).at(-1);
    const term = glossaryTerms.find((item) => slugify(item.term) === slug);
    if (term) return { path, render: () => renderGlossaryDetailPage(term) };
  }

  return { path: "/", render: renderHome };
};

const getMetaForPath = (path: string) => {
  if (pageMeta[path]) return pageMeta[path];

  if (path.startsWith("/metodos/")) {
    const method = brewMethods.find((item) => `/metodos/${item.id}` === path);
    if (method) {
      return {
        title: `${method.name} — Método de Preparo | Universo do Café`,
        description: `${method.description} Receita, moagem, proporção, tempo, erros comuns e ajustes.`
      };
    }
  }

  if (path.startsWith("/profissionais/")) {
    const professional = professionals.find((item) => `/profissionais/${slugify(item.title)}` === path);
    if (professional) {
      return {
        title: `${professional.title} no Café — Universo do Café`,
        description: professional.role
      };
    }
  }

  if (path.startsWith("/glossario/")) {
    const term = glossaryTerms.find((item) => `/glossario/${slugify(item.term)}` === path);
    if (term) {
      return {
        title: `${term.term} no Café — Glossário | Universo do Café`,
        description: `${term.short} ${term.detail}`
      };
    }
  }

  return pageMeta["/"];
};

const updateMeta = (path: string) => {
  const meta = getMetaForPath(path);
  const canonicalUrl = `${window.location.origin}${path}`;
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.append(canonical);
  }
  canonical.href = canonicalUrl;

  let structuredData = document.querySelector<HTMLScriptElement>("#structured-data");
  if (!structuredData) {
    structuredData = document.createElement("script");
    structuredData.id = "structured-data";
    structuredData.type = "application/ld+json";
    document.head.append(structuredData);
  }
  structuredData.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: meta.title,
    description: meta.description,
    url: canonicalUrl,
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    provider: {
      "@type": "Organization",
      name: "Universo do Café"
    }
  });
};

const setupMenu = () => {
  const button = document.querySelector<HTMLButtonElement>("[data-menu-button]");
  const nav = document.querySelector<HTMLElement>("[data-nav]");

  if (!button || !nav) return;

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

  nav.addEventListener("click", close);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
};

const setupProgress = () => {
  const progress = document.querySelector<HTMLElement>("[data-progress]");
  if (!progress) return;

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
  };

  update();
  window.onscroll = update;
  window.onresize = update;
};

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

const setupGlossary = () => {
  const input = document.querySelector<HTMLInputElement>("[data-glossary-search]");
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-glossary-card]"));
  const empty = document.querySelector<HTMLElement>("[data-glossary-empty]");

  if (!input || !empty) return;

  input.addEventListener("input", () => {
    const query = normalizeText(input.value.trim());
    let visibleCount = 0;

    cards.forEach((card) => {
      const source = normalizeText(card.dataset.term ?? card.textContent ?? "");
      const isVisible = source.includes(query);
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    empty.hidden = visibleCount > 0;
  });
};

const setupVideoEmbeds = () => {
  document.querySelectorAll<HTMLButtonElement>("[data-video-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const videoId = button.dataset.videoId;
      const shell = button.closest<HTMLElement>("[data-video-shell]");
      if (!videoId || !shell) return;

      shell.innerHTML = `
        <iframe
          src="https://www.youtube-nocookie.com/embed/${videoId}"
          title="${button.getAttribute("aria-label") ?? "Vídeo educativo de café"}"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      `;
    });
  });
};

const setupLibraryFilters = () => {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-library-filter]"));
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-library-card]"));
  const search = document.querySelector<HTMLInputElement>("[data-library-search]");
  const typeSelect = document.querySelector<HTMLSelectElement>("[data-library-type]");
  const levelSelect = document.querySelector<HTMLSelectElement>("[data-library-level]");
  const empty = document.querySelector<HTMLElement>("[data-library-empty]");

  if (!cards.length) return;

  const applyFilters = () => {
    const activeCategory = buttons.find((button) => button.classList.contains("is-active"))?.dataset.libraryFilter ?? "Todos";
    const query = normalizeText(search?.value.trim() ?? "");
    const type = typeSelect?.value ?? "Todos";
    const level = levelSelect?.value ?? "Todos";
    let visibleCount = 0;

    cards.forEach((card) => {
      const matchesCategory = activeCategory === "Todos" || card.dataset.category === activeCategory;
      const matchesType = type === "Todos" || card.dataset.type === type;
      const matchesLevel = level === "Todos" || normalizeText(card.dataset.level ?? "").includes(normalizeText(level));
      const matchesQuery = !query || normalizeText(card.dataset.search ?? card.textContent ?? "").includes(query);
      const isVisible = matchesCategory && matchesType && matchesLevel && matchesQuery;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (empty) empty.hidden = visibleCount > 0;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      applyFilters();
    });
  });

  search?.addEventListener("input", applyFilters);
  typeSelect?.addEventListener("change", applyFilters);
  levelSelect?.addEventListener("change", applyFilters);
  applyFilters();
};

const setupProfessionalFilters = () => {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-prof-filter]"));
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-professional-card]"));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.profFilter ?? "todos";
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      cards.forEach((card) => {
        card.hidden = filter !== "todos" && card.dataset.stage !== filter;
      });
    });
  });
};

const setupOrigins = () => {
  const panel = document.querySelector<HTMLElement>("[data-origin-panel]");
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-origin]"));

  if (!panel) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const origin = originPoints.find((item) => item.id === button.dataset.origin);
      if (!origin) return;
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      panel.innerHTML = renderOriginDetail(origin);
    });
  });
};

const setupProgressToggles = () => {
  document.querySelectorAll<HTMLButtonElement>("[data-progress-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const lessonId = button.dataset.progressToggle;
      if (!lessonId) return;

      const completed = readProgress();
      if (completed.has(lessonId)) {
        completed.delete(lessonId);
      } else {
        completed.add(lessonId);
      }
      writeProgress(completed);

      if (getCurrentPath() === "/") {
        renderApp();
        return;
      }

      document.querySelectorAll<HTMLButtonElement>(`[data-progress-toggle="${lessonId}"]`).forEach((item) => {
        const isComplete = completed.has(lessonId);
        item.classList.toggle("is-complete", isComplete);
        item.setAttribute("aria-pressed", String(isComplete));
        item.innerHTML = `<span aria-hidden="true">${isComplete ? "✓" : "+"}</span>${isComplete ? "Concluído" : "Marcar como concluído"}`;
      });
    });
  });
};

const setupQuizzes = () => {
  const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-quiz-tab]"));
  const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-quiz-panel]"));

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const quizId = tab.dataset.quizTab;
      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      panels.forEach((panel) => {
        const isActive = panel.dataset.quizPanel === quizId;
        panel.hidden = !isActive;
        panel.classList.toggle("is-active", isActive);
      });
    });
  });

  document.querySelectorAll<HTMLFormElement>("[data-quiz-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const questions = Array.from(form.querySelectorAll<HTMLElement>("[data-question]"));
      const result = form.querySelector<HTMLElement>("[data-quiz-result]");
      let score = 0;

      questions.forEach((question) => {
        const answer = Number(question.dataset.answer);
        const selected = question.querySelector<HTMLInputElement>("input:checked");
        const feedback = question.querySelector<HTMLElement>("[data-question-feedback]");
        const isCorrect = selected ? Number(selected.value) === answer : false;
        question.classList.toggle("is-correct", isCorrect);
        question.classList.toggle("is-wrong", !isCorrect);
        if (isCorrect) score += 1;
        if (feedback) feedback.hidden = false;
      });

      if (result) {
        result.textContent = `Resultado: ${score}/${questions.length}. ${score === questions.length ? "Dominou este tema." : "Revise os pontos com feedback e tente de novo."}`;
      }

      const quizId = form.dataset.quizForm;
      if (!quizId) return;

      const scores = JSON.parse(localStorage.getItem(quizStorageKey) ?? "{}") as Record<string, { score: number; total: number; date: string }>;
      scores[quizId] = { score, total: questions.length, date: new Date().toISOString() };
      localStorage.setItem(quizStorageKey, JSON.stringify(scores));

      if (score / questions.length >= 0.67) {
        const completed = readProgress();
        completed.add("quizzes");
        completed.add(`quiz:${quizId}`);
        writeProgress(completed);
      }
    });
  });
};

const setupSimulators = () => {
  const doseInput = document.querySelector<HTMLInputElement>("[data-recipe-dose]");
  const ratioInput = document.querySelector<HTMLInputElement>("[data-recipe-ratio]");
  const methodSelect = document.querySelector<HTMLSelectElement>("[data-recipe-method]");
  const recipeOutput = document.querySelector<HTMLElement>("[data-recipe-output]");

  const updateRecipe = () => {
    if (!doseInput || !ratioInput || !methodSelect || !recipeOutput) return;
    const dose = Number(doseInput.value) || 0;
    const ratio = Number(ratioInput.value) || 0;
    const method = brewMethods.find((item) => item.id === methodSelect.value) ?? brewMethods[0];
    const water = Math.round(dose * ratio);
    recipeOutput.innerHTML = `
      <strong>${dose} g de café + ${water} g de água</strong>
      <span>${method.name}: ${method.grind}, ${method.time}, ${method.temperature}. Comece provando e ajuste uma variável por vez.</span>
    `;
  };

  methodSelect?.addEventListener("change", () => {
    const selected = methodSelect.selectedOptions[0];
    if (ratioInput && selected?.dataset.ratio) ratioInput.value = selected.dataset.ratio;
    updateRecipe();
  });
  doseInput?.addEventListener("input", updateRecipe);
  ratioInput?.addEventListener("input", updateRecipe);
  updateRecipe();

  const diagnosticSelect = document.querySelector<HTMLSelectElement>("[data-espresso-diagnostic]");
  const diagnosticOutput = document.querySelector<HTMLElement>("[data-espresso-output]");

  const updateDiagnostic = () => {
    if (!diagnosticSelect || !diagnosticOutput) return;
    const diagnostic = espressoDiagnostics.find((item) => item.id === diagnosticSelect.value) ?? espressoDiagnostics[0];
    diagnosticOutput.innerHTML = `
      <strong>${diagnostic.cause}</strong>
      ${list(diagnostic.actions)}
    `;
  };

  diagnosticSelect?.addEventListener("change", updateDiagnostic);
  updateDiagnostic();

  const compareA = document.querySelector<HTMLSelectElement>("[data-compare-a]");
  const compareB = document.querySelector<HTMLSelectElement>("[data-compare-b]");
  const compareOutput = document.querySelector<HTMLElement>("[data-compare-output]");

  const methodCompareCard = (method: BrewMethod) => `
    <article>
      <h3>${method.name}</h3>
      <dl class="card-dl">
        <div><dt>Moagem</dt><dd>${method.grind}</dd></div>
        <div><dt>Tempo</dt><dd>${method.time}</dd></div>
        <div><dt>Corpo</dt><dd>${method.body}</dd></div>
        <div><dt>Acidez</dt><dd>${method.acidity}</dd></div>
        <div><dt>Dificuldade</dt><dd>${method.difficulty}</dd></div>
      </dl>
      <a class="text-link dark" href="/metodos/${method.id}">Abrir página</a>
    </article>
  `;

  const updateCompare = () => {
    if (!compareA || !compareB || !compareOutput) return;
    const methodA = brewMethods.find((item) => item.id === compareA.value) ?? brewMethods[0];
    const methodB = brewMethods.find((item) => item.id === compareB.value) ?? brewMethods[1];
    compareOutput.innerHTML = `
      <div class="compare-cards">
        ${methodCompareCard(methodA)}
        ${methodCompareCard(methodB)}
      </div>
    `;
  };

  compareA?.addEventListener("change", updateCompare);
  compareB?.addEventListener("change", updateCompare);
  updateCompare();
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
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  items.forEach((item) => observer.observe(item));
};

const setupLinks = () => {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/"], a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || link.target === "_blank") return;

      if (href.startsWith("#")) {
        return;
      }

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      history.pushState({}, "", `${url.pathname}${url.hash}`);
      renderApp();
    });
  });
};

const scrollAfterRender = () => {
  const hash = window.location.hash;
  if (!hash) {
    window.scrollTo({ top: 0, behavior: "instant" });
    return;
  }

  window.setTimeout(() => {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 40);
};

const renderApp = () => {
  const route = resolveRoute(getCurrentPath());
  updateMeta(route.path);

  app.innerHTML = `
    ${renderHeader(route.path)}
    <main id="conteudo">
      ${route.render()}
    </main>
    ${renderFooter()}
  `;

  setupMenu();
  setupProgress();
  setupGlossary();
  setupVideoEmbeds();
  setupLibraryFilters();
  setupProfessionalFilters();
  setupOrigins();
  setupProgressToggles();
  setupQuizzes();
  setupSimulators();
  setupReveal();
  setupLinks();
  scrollAfterRender();
};

window.addEventListener("popstate", renderApp);
renderApp();
