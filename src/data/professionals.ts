import type { Professional } from "./types";

export const stageLabels: Record<Professional["stage"], string> = {
  campo: "Campo",
  processamento: "Processamento",
  qualidade: "Qualidade",
  torra: "Torra",
  cafeteria: "Cafeteria",
  negocios: "Negócios"
};

export const professionals: Professional[] = [
  {
    title: "Produtor",
    stage: "campo",
    role: "Cuida da lavoura, colheita, processamento inicial e identidade do lote.",
    skills: ["Manejo", "Clima e solo", "Colheita", "Sustentabilidade"],
    tools: ["Talhão", "Terreiro", "Registros de lote", "Análise de solo"],
    place: "Fazendas, sítios e propriedades produtoras.",
    impact: "É a base da qualidade e da rastreabilidade.",
    start: "Estude fundamentos, visite regiões produtoras e acompanhe processos pós-colheita."
  },
  {
    title: "Agrônomo",
    stage: "campo",
    role: "Apoia saúde, produtividade e planejamento agrícola da lavoura.",
    skills: ["Nutrição", "Irrigação", "Pragas", "Planejamento"],
    tools: ["Análise de solo", "Mapas de talhão", "Calendário agrícola"],
    place: "Campo, cooperativas, consultorias e empresas agrícolas.",
    impact: "Melhora produtividade, sustentabilidade e qualidade potencial.",
    start: "Aprofunde botânica, solo, clima e manejo agrícola."
  },
  {
    title: "Processador pós-colheita",
    stage: "processamento",
    role: "Conduz natural, lavado, honey, fermentações, secagem e armazenamento.",
    skills: ["Controle", "Higiene", "Registro", "Sensorial"],
    tools: ["Terreiro", "Camas suspensas", "Tanques", "Medidor de umidade"],
    place: "Fazendas, estações de processamento e cooperativas.",
    impact: "Transforma potencial do fruto em perfil sensorial claro.",
    start: "Compare processos e prove cafés naturais, lavados e honey lado a lado."
  },
  {
    title: "Classificador",
    stage: "qualidade",
    role: "Avalia características físicas do café verde.",
    skills: ["Defeitos", "Peneira", "Umidade", "Aspecto"],
    tools: ["Peneiras", "Mesa de classificação", "Amostras", "Medidor de umidade"],
    place: "Cooperativas, armazéns, exportadoras e laboratórios.",
    impact: "Dá clareza comercial e reduz risco de defeitos.",
    start: "Aprenda defeitos físicos e padrões básicos de classificação."
  },
  {
    title: "Provador",
    stage: "qualidade",
    role: "Avalia aroma, sabor, acidez, corpo, doçura, finalização e defeitos.",
    skills: ["Memória sensorial", "Vocabulário", "Cupping", "Calibração"],
    tools: ["Colheres", "Moedor", "Xícaras de prova", "Formulários"],
    place: "Laboratórios, torrefações, cafeterias e compras.",
    impact: "Traduz qualidade em linguagem sensorial.",
    start: "Pratique cupping, anote percepções e compare amostras diferentes."
  },
  {
    title: "Q-Grader",
    stage: "qualidade",
    role: "Profissional certificado para avaliação de cafés com protocolos internacionais.",
    skills: ["Protocolo", "Pontuação", "Sensorial", "Consistência"],
    tools: ["Mesa de cupping", "Protocolos", "Kits sensoriais"],
    place: "Laboratórios, exportadoras, concursos e consultorias.",
    impact: "Comunica qualidade com padrão reconhecido.",
    start: "Construa base sensorial sólida antes de buscar certificações."
  },
  {
    title: "Comprador de café verde",
    stage: "negocios",
    role: "Seleciona lotes para torrefações, cafeterias, exportadoras ou marcas.",
    skills: ["Origem", "Preço", "Logística", "Safra", "Sensorial"],
    tools: ["Amostras", "Contratos", "Planilhas", "Cupping"],
    place: "Torrefações, importadoras, exportadoras e marcas.",
    impact: "Conecta produtor, mercado e perfil desejado.",
    start: "Estude origem, safra, sensorial e custos básicos."
  },
  {
    title: "Mestre de torra",
    stage: "torra",
    role: "Desenvolve perfis de torra para extrair o melhor de cada café.",
    skills: ["Calor", "Tempo", "Curva", "Densidade", "Sensorial"],
    tools: ["Torrador", "Software", "Agtron", "Cupping"],
    place: "Torrefações, laboratórios e marcas de café.",
    impact: "Valoriza ou destrói o potencial do lote.",
    start: "Prove torras diferentes do mesmo café e observe acidez, corpo e amargor."
  },
  {
    title: "Barista",
    stage: "cafeteria",
    role: "Prepara, ajusta e serve café com técnica e hospitalidade.",
    skills: ["Moagem", "Extração", "Espresso", "Atendimento", "Limpeza"],
    tools: ["Moedor", "Balança", "Máquina", "Drippers", "Cronômetro"],
    place: "Cafeterias, restaurantes, eventos e treinamentos.",
    impact: "É o último elo técnico antes da xícara.",
    start: "Comece com balança, moedor, um método simples e diário de anotações."
  },
  {
    title: "Latte artist",
    stage: "cafeteria",
    role: "Cria desenhos com leite vaporizado sobre o espresso.",
    skills: ["Microespuma", "Fluxo", "Altura", "Simetria"],
    tools: ["Pitcher", "Máquina de espresso", "Leite", "Xícara"],
    place: "Cafeterias, competições e treinamentos.",
    impact: "Une técnica, estética e apresentação.",
    start: "Treine vaporização e padrões simples antes de desenhos complexos."
  },
  {
    title: "Gestor de cafeteria",
    stage: "negocios",
    role: "Une café, negócio, equipe, cardápio, experiência e operação.",
    skills: ["Precificação", "Fornecedores", "Equipe", "Hospitalidade"],
    tools: ["Ficha técnica", "PDV", "Cardápio", "Treinamentos"],
    place: "Cafeterias, redes, restaurantes e operações autorais.",
    impact: "Transforma qualidade em consistência e confiança.",
    start: "Estude operação, custos, fluxo de atendimento e compra de insumos."
  },
  {
    title: "Consultor de café",
    stage: "negocios",
    role: "Ajuda negócios a melhorar processos, cardápio, equipamentos e posicionamento.",
    skills: ["Diagnóstico", "Treinamento", "Extração", "Estratégia"],
    tools: ["Checklists", "Receitas", "Treinamentos", "Relatórios"],
    place: "Cafeterias, restaurantes, torrefações e marcas.",
    impact: "Acelera evolução técnica e comercial.",
    start: "Construa repertório prático, casos reais e capacidade de explicar ajustes."
  }
];
