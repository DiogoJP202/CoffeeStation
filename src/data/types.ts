export type NavItem = {
  label: string;
  path: string;
};

export type StudyPath = {
  number: string;
  title: string;
  description: string;
  path: string;
  level: string;
  duration: string;
  topics: string[];
};

export type MediaVisual = {
  title: string;
  alt: string;
  caption: string;
  credit?: string;
  src?: string;
  tone: "beans" | "brew" | "farm" | "latte" | "map" | "tools" | "roast" | "espresso";
};

export type ConceptBlock = {
  id: string;
  title: string;
  eyebrow: string;
  body: string;
  bullets: string[];
  media: MediaVisual;
};

export type JourneyStep = {
  id: string;
  title: string;
  summary: string;
  impact: string;
  detail: string;
  professional: string;
  relatedPath: string;
  media: MediaVisual;
};

export type Professional = {
  title: string;
  stage: "campo" | "processamento" | "qualidade" | "torra" | "cafeteria" | "negocios";
  role: string;
  skills: string[];
  tools: string[];
  place: string;
  impact: string;
  start: string;
};

export type BrewMethod = {
  id: string;
  name: string;
  description: string;
  equipment: string[];
  grind: string;
  ratio: string;
  time: string;
  temperature: string;
  difficulty: string;
  sensory: string;
  body: string;
  acidity: string;
  bestFor: string;
  vessel: string;
  steps: string[];
  commonErrors: string[];
  adjustments: string[];
  videoId?: string;
  media: MediaVisual;
};

export type VideoResource = {
  id: string;
  title: string;
  channel: string;
  category: string;
  level: string;
  related: string;
  description: string;
  duration?: string;
  language: string;
};

export type OriginPoint = {
  id: string;
  name: string;
  x: number;
  y: number;
  type: string;
  notes: string;
  sensory: string;
  curiosity: string;
  relatedPath: string;
};

export type BrazilRegion = {
  name: string;
  state: string;
  type: string;
  species: string;
  sensory: string;
  importance: string;
  media: MediaVisual;
};

export type GlossaryTerm = {
  term: string;
  short: string;
  detail: string;
  category: string;
  relatedPath: string;
};
