import type { NavItem } from "./types";

export const mainNav: NavItem[] = [
  { label: "Início", path: "/" },
  { label: "Fundamentos", path: "/fundamentos" },
  { label: "Campo à Xícara", path: "/do-campo-a-xicara" },
  { label: "Profissionais", path: "/profissionais" },
  { label: "Barismo", path: "/barismo" },
  { label: "Métodos", path: "/metodos" },
  { label: "Latte Art", path: "/latte-art" },
  { label: "Origens", path: "/origens-e-mapas" },
  { label: "Biblioteca", path: "/biblioteca" },
  { label: "Glossário", path: "/glossario" },
  { label: "Quizzes", path: "/quizzes" },
  { label: "Simuladores", path: "/simuladores" }
];

export const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Universo do Café — Estude Café e Barismo de Graça",
    description:
      "Aprenda café do grão à xícara com guias gratuitos, métodos de preparo, vídeos, mapas, glossário, barismo, latte art e processos do café."
  },
  "/fundamentos": {
    title: "Fundamentos do Café — Universo do Café",
    description: "Entenda história, cultura, planta, espécies, café especial e sensorial básico."
  },
  "/do-campo-a-xicara": {
    title: "Do Campo à Xícara — Universo do Café",
    description: "Estude a jornada do café: plantio, processos, secagem, torra, moagem, preparo e serviço."
  },
  "/profissionais": {
    title: "Profissionais do Café — Universo do Café",
    description: "Conheça áreas de atuação na cadeia do café, habilidades, ferramentas e caminhos de estudo."
  },
  "/barismo": {
    title: "Barismo Prático — Universo do Café",
    description: "Aprenda dose, moagem, tempo, temperatura, água, diagnóstico de sabor e equipamentos básicos."
  },
  "/metodos": {
    title: "Métodos de Preparo — Universo do Café",
    description: "Compare V60, Melitta, Kalita, Chemex, prensa francesa, AeroPress, moka, espresso e cold brew."
  },
  "/latte-art": {
    title: "Latte Art e Bebidas com Leite — Universo do Café",
    description: "Estude vaporização, microespuma, cappuccino, latte, coração, tulipa, rosetta e treino."
  },
  "/origens-e-mapas": {
    title: "Origens e Mapas do Café — Universo do Café",
    description: "Explore países produtores, cinturão do café e regiões brasileiras importantes."
  },
  "/biblioteca": {
    title: "Biblioteca Gratuita de Café — Universo do Café",
    description: "Vídeos recomendados, guias rápidos, recursos visuais e materiais de apoio para estudar café."
  },
  "/glossario": {
    title: "Glossário do Café — Universo do Café",
    description: "Pesquise termos técnicos de café, barismo, sensorial, torra, preparo e qualidade."
  },
  "/quizzes": {
    title: "Quizzes de Café e Barismo — Universo do Café",
    description: "Teste seus conhecimentos sobre fundamentos, métodos, espresso, latte art, cadeia do café e glossário técnico."
  },
  "/simuladores": {
    title: "Simuladores de Barismo — Universo do Café",
    description: "Use calculadora de receita, diagnóstico de espresso e comparador de métodos para estudar café de forma prática."
  }
};
