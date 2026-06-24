import type { StudyPath } from "./types";

export const homeStats = [
  { value: "12", label: "áreas gratuitas" },
  { value: "10", label: "vídeos curados" },
  { value: "29", label: "termos de glossário" }
];

export const studyPaths: StudyPath[] = [
  {
    number: "01",
    title: "Fundamentos do café",
    description: "Comece pela bebida: história, cultura, planta, espécies, café especial e sensorial.",
    path: "/fundamentos",
    level: "Iniciante",
    duration: "35 min",
    topics: ["História", "Arábica e Canephora", "Terroir", "Sensorial"]
  },
  {
    number: "02",
    title: "Do campo à xícara",
    description: "Siga a cadeia completa e veja como cada decisão altera a qualidade final.",
    path: "/do-campo-a-xicara",
    level: "Iniciante",
    duration: "45 min",
    topics: ["Colheita", "Processos", "Secagem", "Torra"]
  },
  {
    number: "03",
    title: "Métodos de preparo",
    description: "Compare receitas-base, moagem, tempo, perfil sensorial e ajustes práticos.",
    path: "/metodos",
    level: "Prático",
    duration: "60 min",
    topics: ["V60", "Prensa", "AeroPress", "Espresso"]
  },
  {
    number: "04",
    title: "Barismo essencial",
    description: "Aprenda variáveis de extração, diagnóstico de sabor e equipamentos de estudo.",
    path: "/barismo",
    level: "Prático",
    duration: "50 min",
    topics: ["Dose", "Moagem", "Água", "Diagnóstico"]
  },
  {
    number: "05",
    title: "Latte art e leite",
    description: "Entenda microespuma, vaporização, bebidas clássicas e padrões de treino.",
    path: "/latte-art",
    level: "Visual",
    duration: "40 min",
    topics: ["Microespuma", "Coração", "Tulipa", "Rosetta"]
  },
  {
    number: "06",
    title: "Origens e profissões",
    description: "Explore regiões produtoras, mapas, carreiras e funções na cadeia do café.",
    path: "/origens-e-mapas",
    level: "Panorama",
    duration: "45 min",
    topics: ["Brasil", "Mundo", "Mapas", "Cadeia"]
  }
];

export const homeHighlights = [
  {
    title: "Métodos com receita e diagnóstico",
    text: "Cada método mostra moagem, proporção, tempo, erros comuns, ajuste e vídeo recomendado.",
    path: "/metodos"
  },
  {
    title: "Mapas de origens",
    text: "Explore países produtores e regiões brasileiras com perfis sensoriais gerais.",
    path: "/origens-e-mapas"
  },
  {
    title: "Biblioteca multimídia",
    text: "Vídeos em inglês, guias rápidos e estrutura pronta para fotos reais e recursos externos.",
    path: "/biblioteca"
  },
  {
    title: "Glossário pesquisável",
    text: "Termos técnicos com explicação curta, didática e links para páginas relacionadas.",
    path: "/glossario"
  }
];
