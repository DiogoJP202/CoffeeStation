import { brewMethods } from "./brewingMethods";
import { glossaryTerms } from "./glossary";
import { professionals } from "./professionals";
import type { LessonContent, Quiz } from "./types";

export const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const coreLessons: LessonContent[] = [
  {
    id: "fundamentos",
    title: "Fundamentos do café",
    description: "História, planta, espécies, terroir, café especial e leitura sensorial.",
    category: "Base",
    type: "trilha",
    level: "Iniciante",
    duration: "35 min",
    path: "/fundamentos",
    order: 1,
    topics: ["História", "Espécies", "Terroir", "Sensorial"]
  },
  {
    id: "campo-xicara",
    title: "Do campo à xícara",
    description: "Plantio, colheita, processamento, secagem, torra, preparo e servico.",
    category: "Cadeia",
    type: "trilha",
    level: "Iniciante",
    duration: "45 min",
    path: "/do-campo-a-xicara",
    order: 2,
    topics: ["Colheita", "Processos", "Secagem", "Torra"]
  },
  {
    id: "profissionais",
    title: "Profissionais do café",
    description: "Funções, habilidades, ferramentas e caminhos de carreira na cadeia do café.",
    category: "Carreira",
    type: "trilha",
    level: "Panorama",
    duration: "30 min",
    path: "/profissionais",
    order: 3,
    topics: ["Campo", "Qualidade", "Torra", "Cafeteria"]
  },
  {
    id: "barismo",
    title: "Barismo essencial",
    description: "Dose, moagem, água, temperatura, tempo, limpeza e diagnóstico de sabor.",
    category: "Pratica",
    type: "trilha",
    level: "Prático",
    duration: "50 min",
    path: "/barismo",
    order: 4,
    topics: ["Extracao", "Equipamentos", "Diagnostico"]
  },
  {
    id: "metodos",
    title: "Métodos de preparo",
    description: "Receitas, comparativos, erros comuns e ajustes por método.",
    category: "Pratica",
    type: "trilha",
    level: "Prático",
    duration: "60 min",
    path: "/metodos",
    order: 5,
    topics: ["V60", "Prensa", "Espresso", "Cold brew"]
  },
  {
    id: "latte-art",
    title: "Latte art e leite",
    description: "Microespuma, bebidas com leite, vapor, padroes e treino visual.",
    category: "Pratica",
    type: "trilha",
    level: "Visual",
    duration: "40 min",
    path: "/latte-art",
    order: 6,
    topics: ["Microespuma", "Cappuccino", "Tulipa", "Rosetta"]
  },
  {
    id: "origens",
    title: "Origens e mapas",
    description: "Paises produtores, regioes brasileiras e identidade sensorial.",
    category: "Origem",
    type: "trilha",
    level: "Panorama",
    duration: "35 min",
    path: "/origens-e-mapas",
    order: 7,
    topics: ["Brasil", "Mundo", "Terroir"]
  },
  {
    id: "biblioteca",
    title: "Biblioteca multimidia",
    description: "Vídeos, guias rápidos, imagens educativas e filtros de estudo.",
    category: "Pesquisa",
    type: "trilha",
    level: "Livre",
    duration: "25 min",
    path: "/biblioteca",
    order: 8,
    topics: ["Videos", "Guias", "Imagens"]
  },
  {
    id: "glossario",
    title: "Glossário técnico",
    description: "Termos de preparo, sensorial, qualidade, torra, espresso e processos.",
    category: "Referência",
    type: "trilha",
    level: "Livre",
    duration: "20 min",
    path: "/glossario",
    order: 9,
    topics: ["Sensorial", "Barismo", "Torra"]
  },
  {
    id: "quizzes",
    title: "Quizzes de revisão",
    description: "Perguntas curtas com feedback imediato para fixar os conceitos.",
    category: "Pratica",
    type: "quiz",
    level: "Misto",
    duration: "25 min",
    path: "/quizzes",
    order: 10,
    topics: ["Fundamentos", "Métodos", "Espresso", "Latte art"]
  },
  {
    id: "simuladores",
    title: "Simuladores de barismo",
    description: "Calculadora de receita, diagnóstico de espresso e comparador de métodos.",
    category: "Ferramentas",
    type: "ferramenta",
    level: "Prático",
    duration: "30 min",
    path: "/simuladores",
    order: 11,
    topics: ["Receita", "Espresso", "Comparativo"]
  }
];

export const methodLessons: LessonContent[] = brewMethods.map((method, index) => ({
  id: `metodo:${method.id}`,
  title: method.name,
  description: method.description,
  category: "Método",
  type: "metodo",
  level: method.difficulty,
  duration: method.time,
  path: `/metodos/${method.id}`,
  order: 100 + index,
  topics: [method.grind, method.ratio, method.body, method.acidity]
}));

export const professionalLessons: LessonContent[] = professionals.map((professional, index) => ({
  id: `profissional:${slugify(professional.title)}`,
  title: professional.title,
  description: professional.role,
  category: "Profissão",
  type: "profissao",
  level: professional.stage,
  duration: "12 min",
  path: `/profissionais/${slugify(professional.title)}`,
  order: 200 + index,
  topics: professional.skills.slice(0, 4)
}));

export const glossaryLessons: LessonContent[] = glossaryTerms.map((term, index) => ({
  id: `glossario:${slugify(term.term)}`,
  title: term.term,
  description: term.short,
  category: term.category,
  type: "glossario",
  level: "Referência",
  duration: "3 min",
  path: `/glossario/${slugify(term.term)}`,
  order: 300 + index,
  topics: [term.category]
}));

export const lessonContents: LessonContent[] = [
  ...coreLessons,
  ...methodLessons,
  ...professionalLessons,
  ...glossaryLessons
];

export const quizzes: Quiz[] = [
  {
    id: "fundamentos",
    title: "Fundamentos do café",
    description: "Revisao rapida sobre planta, especies, terroir e sensorial.",
    level: "Iniciante",
    category: "Fundamentos",
    relatedPath: "/fundamentos",
    questions: [
      {
        prompt: "O que melhor descreve terroir no café?",
        options: ["Apenas a altitude da fazenda", "Fatores naturais e humanos que influenciam o lote", "O tipo de xícara usada no serviço"],
        answer: 1,
        feedback: "Terroir combina solo, clima, altitude, variedade, manejo, processo e contexto humano."
      },
      {
        prompt: "Acidez boa em café especial costuma indicar:",
        options: ["Vivacidade e brilho sensorial", "Café necessariamente azedo", "Café queimado na torra"],
        answer: 0,
        feedback: "Acidez positiva lembra frutas, brilho e frescor; nao e o mesmo que defeito azedo."
      },
      {
        prompt: "Arabica e Canephora sao:",
        options: ["Espécies de café", "Tipos de filtro", "Graus de moagem"],
        answer: 0,
        feedback: "Sao especies com caracteristicas agronomicas e sensoriais diferentes."
      }
    ]
  },
  {
    id: "metodos",
    title: "Métodos de preparo",
    description: "Moagem, tempo, proporção e escolha do método pela xícara.",
    level: "Prático",
    category: "Métodos",
    relatedPath: "/metodos",
    questions: [
      {
        prompt: "Se um V60 ficou fraco e subextraido, um ajuste provavel e:",
        options: ["Afinar a moagem", "Engrossar a moagem", "Diminuir muito a temperatura"],
        answer: 0,
        feedback: "Afinar aumenta resistência e tende a elevar a extração."
      },
      {
        prompt: "A prensa francesa costuma gerar:",
        options: ["Bebida mais encorpada", "Bebida sem óleos", "Bebida sob alta pressão"],
        answer: 0,
        feedback: "A malha metálica preserva mais óleos e sólidos, aumentando textura."
      },
      {
        prompt: "Uma proporção 1:16 significa:",
        options: ["16 g de café para 1 g de água", "1 parte de café para 16 partes de água", "16 minutos de extração"],
        answer: 1,
        feedback: "Exemplo: 15 g de café para 240 g de água."
      }
    ]
  },
  {
    id: "espresso",
    title: "Espresso e diagnóstico",
    description: "Dose, rendimento, tempo, canalização e leitura da extração.",
    level: "Intermediario",
    category: "Espresso",
    relatedPath: "/metodos/espresso",
    questions: [
      {
        prompt: "Um espresso que sai rápido, fino e ácido pode pedir:",
        options: ["Moagem mais fina", "Moagem mais grossa", "Menos distribuicao"],
        answer: 0,
        feedback: "Saida rapida geralmente indica pouca resistencia; afinar pode ajudar."
      },
      {
        prompt: "Canalizacao acontece quando:",
        options: ["A água passa por caminhos preferenciais no bolo de café", "O leite incorpora ar demais", "O filtro de papel absorve óleos"],
        answer: 0,
        feedback: "Distribuicao irregular, compactacao ruim e grumos favorecem canais."
      },
      {
        prompt: "Rendimento no espresso e:",
        options: ["Quantidade de bebida extraida", "Quantidade de crema apenas", "Peso do porta-filtro"],
        answer: 0,
        feedback: "Dose e rendimento ajudam a controlar concentracao e equilibrio."
      }
    ]
  },
  {
    id: "latte-art",
    title: "Latte art",
    description: "Microespuma, vaporizacao, contraste e padroes de desenho.",
    level: "Visual",
    category: "Latte Art",
    relatedPath: "/latte-art",
    questions: [
      {
        prompt: "Microespuma ideal para latte art deve ser:",
        options: ["Lisa, brilhante e cremosa", "Cheia de bolhas grandes", "Fria e separada"],
        answer: 0,
        feedback: "Textura fina e integrada permite fluxo, contraste e desenho."
      },
      {
        prompt: "Para desenhar, o leite deve entrar mais perto da superficie quando:",
        options: ["Voce quer depositar branco e formar padrao", "Voce quer misturar sem marca", "Voce quer resfriar o espresso"],
        answer: 0,
        feedback: "Altura baixa deposita a espuma; altura alta mistura."
      },
      {
        prompt: "Bolhas grandes no leite indicam geralmente:",
        options: ["Ar incorporado sem boa texturização", "Moagem grossa", "Café lavado"],
        answer: 0,
        feedback: "Depois de incorporar ar, e preciso texturizar para integrar a espuma."
      }
    ]
  },
  {
    id: "cadeia",
    title: "Do campo à xícara",
    description: "Processos, secagem, torra, qualidade e impacto de cada etapa.",
    level: "Panorama",
    category: "Cadeia",
    relatedPath: "/do-campo-a-xicara",
    questions: [
      {
        prompt: "Processo natural significa:",
        options: ["Fruto seco inteiro", "Café extraído sem filtro", "Torra sem calor"],
        answer: 0,
        feedback: "No natural, o fruto seca com casca e polpa, exigindo controle cuidadoso."
      },
      {
        prompt: "Torra escura em excesso pode:",
        options: ["Mascarar caracteristicas de origem", "Aumentar sempre a acidez delicada", "Eliminar qualquer amargor"],
        answer: 0,
        feedback: "Torra muito escura tende a destacar tostado e amargor."
      },
      {
        prompt: "Rastreabilidade ajuda a conectar:",
        options: ["Origem, lote, processo e qualidade", "Apenas a marca da xícara", "Somente a pressão da máquina"],
        answer: 0,
        feedback: "Ela dá contexto para entender quem produziu, onde e como o café foi feito."
      }
    ]
  },
  {
    id: "glossario",
    title: "Glossário técnico",
    description: "Termos essenciais para ler receitas, provas e conteúdos de café.",
    level: "Livre",
    category: "Referência",
    relatedPath: "/glossario",
    questions: [
      {
        prompt: "Bloom em filtrados e:",
        options: ["Pre-infusao para hidratar o po e liberar gases", "Tipo de torra", "Filtro metalico"],
        answer: 0,
        feedback: "Bloom prepara o leito para uma extração mais uniforme."
      },
      {
        prompt: "Cupping e usado principalmente para:",
        options: ["Comparar e avaliar cafés de forma padronizada", "Vaporizar leite", "Moer café automaticamente"],
        answer: 0,
        feedback: "Cupping ajuda a calibrar percepcao e comparar amostras."
      },
      {
        prompt: "Corpo na bebida se refere a:",
        options: ["Peso e textura na boca", "Tamanho do grao verde", "Altura do filtro"],
        answer: 0,
        feedback: "Corpo pode ser leve, medio, denso, cremoso ou aveludado."
      }
    ]
  }
];

export const espressoDiagnostics = [
  {
    id: "rapido-acido",
    label: "Saiu rápido, ácido ou fino",
    cause: "Baixa resistência, pouca extração ou canalização.",
    actions: ["Afinar a moagem", "Revisar distribuicao", "Aumentar rendimento com cuidado", "Checar dose e compactacao"]
  },
  {
    id: "lento-amargo",
    label: "Saiu lento, amargo ou seco",
    cause: "Resistência alta, extração excessiva ou fluxo travado.",
    actions: ["Engrossar a moagem", "Reduzir rendimento", "Diminuir dose se o cesto estiver cheio", "Limpar chuveiro e porta-filtro"]
  },
  {
    id: "sem-crema",
    label: "Pouca crema ou corpo fraco",
    cause: "Café velho, moagem inadequada, torra muito clara para espresso ou baixa pressão percebida.",
    actions: ["Usar café mais fresco", "Ajustar moagem", "Conferir receita 1:2", "Aquecer xícara e equipamento"]
  },
  {
    id: "canalizado",
    label: "Jatos irregulares ou canalizacao",
    cause: "Distribuicao desigual, grumos, compactacao torta ou bolo rachado.",
    actions: ["Distribuir melhor", "Usar WDT se tiver", "Compactar nivelado", "Evitar bater o porta-filtro depois de compactar"]
  }
];
