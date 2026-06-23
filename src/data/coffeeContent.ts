export type NavItem = {
  label: string;
  href: string;
};

export type HighlightCard = {
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
};

export type TimelineStep = {
  title: string;
  summary: string;
  impact: string;
  detail: string;
};

export type Profession = {
  title: string;
  role: string;
  skills: string[];
  place: string;
  impact: string;
};

export type BrewMethod = {
  id: string;
  name: string;
  description: string;
  sensory: string;
  grind: string;
  ratio: string;
  time: string;
  difficulty: string;
  equipment: string[];
  steps: string[];
  adjustment: string;
};

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export type EbookVolume = {
  number: string;
  title: string;
  description: string;
  learns: string;
  level: string;
  duration: string;
  status: string;
};

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "O Café", href: "#o-cafe" },
  { label: "Campo à Xícara", href: "#campo-xicara" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Barismo", href: "#barismo" },
  { label: "Métodos", href: "#metodos" },
  { label: "Latte Art", href: "#latte-art" },
  { label: "Mercado", href: "#mercado" },
  { label: "Glossário", href: "#glossario" },
  { label: "Ebooks", href: "#ebooks" }
];

export const heroStats = [
  { value: "10", label: "módulos editoriais" },
  { value: "8", label: "volumes de estudo" },
  { value: "1", label: "jornada do grão à xícara" }
];

export const learningPath = [
  {
    step: "01",
    title: "Entenda o café",
    text: "História, cultura, planta, espécies, qualidade, sensorial e terroir."
  },
  {
    step: "02",
    title: "Siga a cadeia",
    text: "Do plantio à colheita, dos processos pós-colheita à torra e ao serviço."
  },
  {
    step: "03",
    title: "Entre no barismo",
    text: "Proporção, moagem, tempo, temperatura, água, extração e diagnóstico de sabor."
  },
  {
    step: "04",
    title: "Aprofunde por volumes",
    text: "Uma trilha de ebooks para estudar progressivamente cada área do café."
  }
];

export const learningCards: HighlightCard[] = [
  {
    eyebrow: "História e cultura",
    title: "O café como rito social",
    body: "Da origem associada à Etiópia às cafeterias como espaços de conversa, leitura e ideias, o café se tornou uma linguagem cultural global."
  },
  {
    eyebrow: "Ciência do café",
    title: "O sabor começa no campo",
    body: "Espécie, variedade, solo, altitude, clima, processamento, torra e moagem definem a personalidade de cada xícara."
  },
  {
    eyebrow: "Profissões",
    title: "Uma cadeia de especialistas",
    body: "Produtores, agrônomos, provadores, Q-Graders, torrefadores e baristas constroem a qualidade em etapas conectadas."
  },
  {
    eyebrow: "Prática",
    title: "Barismo com consistência",
    body: "Preparar bem é medir, observar, ajustar e repetir. Técnica e sensibilidade trabalham juntas."
  }
];

export const coffeeConcepts: HighlightCard[] = [
  {
    eyebrow: "Definição",
    title: "O que é café?",
    body: "Café é a bebida preparada a partir das sementes torradas do fruto do cafeeiro. Cada xícara combina natureza e decisões humanas: espécie, altitude, processamento, torra, moagem e extração.",
    points: ["Bebida agrícola", "Produto sensorial", "Técnica de preparo"]
  },
  {
    eyebrow: "História",
    title: "Da planta à cultura",
    body: "O consumo se espalhou pelo mundo árabe, chegou à Europa, atravessou rotas comerciais e marcou profundamente a economia e a cultura brasileira.",
    points: ["Etiópia e mundo árabe", "Cafeterias como espaços sociais", "Brasil como protagonista"]
  },
  {
    eyebrow: "Botânica",
    title: "Cafeeiro, fruto e grão",
    body: "O cafeeiro produz cerejas. Dentro delas estão as sementes que serão processadas, secas, beneficiadas, torradas e moídas.",
    points: ["Genética", "Solo e clima", "Maturação"]
  },
  {
    eyebrow: "Espécies",
    title: "Arábica e Canephora",
    body: "Arábica costuma entregar maior complexidade e acidez elegante. Canephora, incluindo robusta e conilon, tende a trazer corpo, resistência, intensidade e crema.",
    points: ["Arábica: floral, frutado, delicado", "Canephora: corpo, potência, cafeína", "Ambos podem ter qualidade"]
  },
  {
    eyebrow: "Especialidade",
    title: "Café especial não é só preço",
    body: "Especialidade envolve rastreabilidade, poucos defeitos, bebida limpa, equilíbrio, notas perceptíveis e valorização da origem.",
    points: ["Origem identificável", "Torra adequada", "Perfil expressivo"]
  },
  {
    eyebrow: "Terroir",
    title: "A origem muda a xícara",
    body: "Solo, altitude, clima, umidade, manejo e tradição local influenciam corpo, acidez, doçura, aroma e finalização.",
    points: ["Origem única", "Microlotes", "Identidade regional"]
  }
];

export const sensoryAttributes = [
  {
    title: "Aroma",
    text: "Percepção pelo olfato: chocolate, frutas, flores, especiarias, castanhas, mel ou fermentados."
  },
  {
    title: "Acidez",
    text: "Vivacidade e brilho. Não é defeito quando aparece equilibrada, lembrando cítricos, maçã ou frutas vermelhas."
  },
  {
    title: "Doçura",
    text: "Sensação desejada que pode lembrar caramelo, mel, melaço, chocolate ou fruta madura."
  },
  {
    title: "Corpo",
    text: "Peso e textura na boca: leve, médio, encorpado, cremoso ou aveludado."
  },
  {
    title: "Amargor",
    text: "Faz parte da bebida, mas precisa estar integrado. Excesso pode indicar torra escura ou extração exagerada."
  },
  {
    title: "Finalização",
    text: "O sabor que permanece depois do gole: curto, longo, doce, seco, limpo ou complexo."
  }
];

export const coffeeJourney: TimelineStep[] = [
  {
    title: "Plantio",
    summary: "Escolha de espécie, variedade, solo, espaçamento e adaptação ao clima.",
    impact: "Define o potencial de qualidade antes de qualquer processo.",
    detail: "A base envolve genética, nutrição, irrigação, poda, sustentabilidade e planejamento de anos."
  },
  {
    title: "Cultivo",
    summary: "Manejo contínuo da lavoura, saúde do solo, pragas, chuvas e exposição solar.",
    impact: "Ajuda a construir doçura, vigor, uniformidade e equilíbrio.",
    detail: "Um cafeeiro bem cuidado atravessa ciclos de florada, frutificação e maturação com maior consistência."
  },
  {
    title: "Florada",
    summary: "As flores aparecem após chuvas e dão origem aos frutos.",
    impact: "Uma florada uniforme favorece maturação mais homogênea.",
    detail: "O ciclo da florada é um indicador importante para prever colheita e qualidade."
  },
  {
    title: "Maturação",
    summary: "Os frutos amadurecem e concentram açúcares, aromas e compostos sensoriais.",
    impact: "Frutos maduros tendem a gerar mais doçura e equilíbrio.",
    detail: "Frutos verdes podem trazer adstringência; passados podem criar fermentações indesejadas."
  },
  {
    title: "Colheita",
    summary: "Pode ser seletiva, por derriça, mecanizada ou semimecanizada.",
    impact: "A seleção do ponto de maturação muda a limpeza e a expressão da bebida.",
    detail: "A colheita seletiva é mais trabalhosa, mas costuma favorecer cafés de qualidade superior."
  },
  {
    title: "Seleção",
    summary: "Separação de frutos verdes, maduros, passados ou defeituosos.",
    impact: "Reduz defeitos e aumenta uniformidade.",
    detail: "A seleção pode acontecer no campo, por água, por equipamentos ou por triagem manual."
  },
  {
    title: "Processo natural",
    summary: "O fruto seca inteiro, com casca e polpa.",
    impact: "Pode gerar doçura alta, corpo e notas frutadas.",
    detail: "Exige controle para evitar fermentações indesejadas e secagem irregular."
  },
  {
    title: "Processo lavado",
    summary: "A polpa é removida antes da secagem, com fermentação controlada e lavagem.",
    impact: "Costuma gerar bebidas limpas, delicadas e com acidez clara.",
    detail: "É um processo útil quando o objetivo é evidenciar transparência e definição sensorial."
  },
  {
    title: "Processo honey",
    summary: "Parte da mucilagem permanece no grão durante a secagem.",
    impact: "Equilibra doçura, corpo e acidez.",
    detail: "O resultado depende da quantidade de mucilagem, tempo e controle de secagem."
  },
  {
    title: "Fermentações controladas",
    summary: "Uso intencional de tempo, ambiente e microrganismos para modular perfil.",
    impact: "Pode criar notas intensas de frutas, vinho, especiarias e doçura.",
    detail: "Quando mal controlada, a fermentação pode gerar defeitos; por isso exige registro e higiene."
  },
  {
    title: "Secagem",
    summary: "Redução da umidade em terreiro, camas suspensas, estufas ou secadores.",
    impact: "Preserva a qualidade e evita mofo, instabilidade e perda de complexidade.",
    detail: "Secagem rápida demais, lenta demais ou irregular pode comprometer o lote."
  },
  {
    title: "Beneficiamento",
    summary: "Remoção de partes externas e preparo do café verde para comercialização.",
    impact: "Deixa o grão pronto para classificação, armazenamento e venda.",
    detail: "É uma etapa decisiva para padronizar o lote e separar impurezas."
  },
  {
    title: "Classificação",
    summary: "Análise de peneira, defeitos, umidade, aspecto físico e bebida.",
    impact: "Ajuda compradores e torrefadores a entenderem o potencial do café.",
    detail: "A classificação conecta critérios físicos e sensoriais para orientar preço e uso."
  },
  {
    title: "Armazenamento",
    summary: "Proteção contra oxigênio, luz, calor e umidade.",
    impact: "Mantém aroma e estabilidade até a torra.",
    detail: "Café mal armazenado envelhece mais rápido e perde clareza sensorial."
  },
  {
    title: "Torra",
    summary: "Transforma o café verde em grão aromático e solúvel para extração.",
    impact: "Desenvolve aroma, cor, doçura, acidez, corpo e amargor.",
    detail: "Torras claras preservam origem; médias equilibram; escuras aumentam tostado e amargor."
  },
  {
    title: "Moagem",
    summary: "Define o tamanho das partículas e a velocidade de extração.",
    impact: "Moagem fina extrai mais rápido; grossa extrai mais lentamente.",
    detail: "Moagem fina demais pode gerar amargor; grossa demais pode gerar bebida fraca e ácida."
  },
  {
    title: "Preparo e serviço",
    summary: "Água, proporção, tempo, técnica e hospitalidade fecham a jornada.",
    impact: "O barista é o último elo técnico antes da xícara.",
    detail: "Um preparo ruim pode prejudicar um café excelente; um bom serviço valoriza toda a cadeia."
  }
];

export const professions: Profession[] = [
  {
    title: "Produtor",
    role: "Cuida da lavoura, da colheita, do processamento e da qualidade inicial.",
    skills: ["Manejo", "Clima e solo", "Qualidade", "Sustentabilidade"],
    place: "Fazendas, sítios e propriedades produtoras.",
    impact: "É a base da identidade sensorial do lote."
  },
  {
    title: "Agrônomo",
    role: "Apoia saúde, produtividade e planejamento agrícola da lavoura.",
    skills: ["Análise de solo", "Nutrição", "Pragas", "Irrigação"],
    place: "Campo, cooperativas, consultorias e empresas agrícolas.",
    impact: "Melhora produtividade, sustentabilidade e qualidade."
  },
  {
    title: "Processador pós-colheita",
    role: "Conduz natural, lavado, honey, fermentações, secagem e armazenamento.",
    skills: ["Controle", "Higiene", "Registro", "Sensorial"],
    place: "Terreiros, estações de processamento e fazendas.",
    impact: "Pequenas decisões transformam o perfil final."
  },
  {
    title: "Classificador",
    role: "Avalia características físicas do café verde.",
    skills: ["Defeitos", "Peneira", "Umidade", "Aspecto"],
    place: "Cooperativas, armazéns, exportadoras e laboratórios.",
    impact: "Dá clareza comercial e controle de qualidade."
  },
  {
    title: "Provador",
    role: "Avalia aroma, sabor, acidez, corpo, doçura, finalização e defeitos.",
    skills: ["Memória sensorial", "Vocabulário", "Consistência", "Cupping"],
    place: "Laboratórios, torrefações, cafeterias e compras.",
    impact: "Traduz qualidade em linguagem sensorial."
  },
  {
    title: "Q-Grader",
    role: "Profissional certificado para avaliação de cafés com protocolos internacionais.",
    skills: ["Análise sensorial", "Protocolos", "Pontuação", "Calibração"],
    place: "Laboratórios, exportadoras, concursos e consultorias.",
    impact: "Comunica qualidade com padrão reconhecido."
  },
  {
    title: "Comprador de café verde",
    role: "Seleciona lotes para torrefações, cafeterias, exportadoras ou marcas.",
    skills: ["Origem", "Preço", "Logística", "Perfil sensorial"],
    place: "Torrefações, importadoras, exportadoras e marcas.",
    impact: "Faz a ponte entre produtor e mercado."
  },
  {
    title: "Mestre de torra",
    role: "Desenvolve perfis de torra para extrair o melhor de cada café.",
    skills: ["Curva de torra", "Calor", "Densidade", "Sensorial"],
    place: "Torrefações, laboratórios e marcas de café.",
    impact: "Valoriza ou compromete o potencial do lote."
  },
  {
    title: "Barista",
    role: "Prepara, ajusta e serve café com técnica e hospitalidade.",
    skills: ["Moagem", "Extração", "Espresso", "Atendimento"],
    place: "Cafeterias, restaurantes, eventos e treinamentos.",
    impact: "Representa todo o trabalho feito antes da xícara."
  },
  {
    title: "Latte artist",
    role: "Cria desenhos com leite vaporizado sobre o espresso.",
    skills: ["Microespuma", "Pitcher", "Fluxo", "Simetria"],
    place: "Cafeterias, competições e treinamentos.",
    impact: "Une técnica, estética e apresentação."
  },
  {
    title: "Gestor de cafeteria",
    role: "Une café, negócio, equipe, cardápio, experiência e operação.",
    skills: ["Precificação", "Fornecedores", "Equipe", "Hospitalidade"],
    place: "Cafeterias, redes, restaurantes e operações autorais.",
    impact: "Transforma qualidade em consistência e confiança."
  },
  {
    title: "Consultor de café",
    role: "Ajuda marcas e negócios a melhorar processos, cardápio e posicionamento.",
    skills: ["Treinamento", "Extração", "Equipamentos", "Estratégia"],
    place: "Cafeterias, restaurantes, torrefações e marcas.",
    impact: "Acelera evolução técnica e comercial."
  }
];

export const extractionPrinciples = [
  {
    title: "Proporção",
    text: "Relação entre café e água. Uma base comum em filtrados é algo próximo de 1:16, mas cada café pode pedir ajustes."
  },
  {
    title: "Moagem",
    text: "Quanto mais fina, maior a área de contato e mais rápida tende a extração. Quanto mais grossa, mais lenta e leve."
  },
  {
    title: "Tempo",
    text: "Tempo curto pode deixar a bebida fraca e agressiva; tempo longo pode intensificar amargor e secura."
  },
  {
    title: "Temperatura",
    text: "Água fria extrai pouco. Em filtrados, temperaturas próximas de 90 °C a 96 °C costumam funcionar bem."
  },
  {
    title: "Água",
    text: "A água representa grande parte da bebida. Uma água ruim pode deixar o café pesado, sem brilho ou desagradável."
  },
  {
    title: "Agitação",
    text: "Despejo, turbulência e mexidas alteram a extração. Mais agitação tende a extrair mais compostos."
  }
];

export const diagnostics = [
  {
    title: "Ficou azedo, fraco ou sem doçura?",
    cause: "Possível subextração: moagem grossa demais, pouco tempo, água fria, dose baixa ou pouca agitação.",
    actions: ["Afinar a moagem", "Aumentar o tempo", "Usar água mais quente", "Revisar proporção", "Aumentar leve agitação"]
  },
  {
    title: "Ficou amargo, seco ou pesado?",
    cause: "Possível superextração: moagem fina demais, tempo longo, água muito quente, muita agitação ou torra escura.",
    actions: ["Engrossar a moagem", "Reduzir tempo", "Diminuir temperatura", "Diminuir agitação", "Testar outra receita"]
  }
];

export const brewMethods: BrewMethod[] = [
  {
    id: "coado",
    name: "Coado tradicional",
    description: "Presente no cotidiano brasileiro, pode ser simples, barato e excelente quando bem executado.",
    sensory: "Limpo, equilibrado, aromático e fácil de beber.",
    grind: "Média",
    ratio: "10 g para 150 a 170 ml",
    time: "2 a 4 minutos",
    difficulty: "Inicial",
    equipment: ["Porta-filtro", "Filtro", "Chaleira", "Balança"],
    steps: ["Escalde o filtro", "Adicione o café", "Despeje água em etapas", "Sirva em seguida"],
    adjustment: "Escalde o filtro para reduzir gosto de papel e aquecer o porta-filtro."
  },
  {
    id: "v60",
    name: "V60",
    description: "Método cônico que permite grande controle sobre fluxo, despejo e extração.",
    sensory: "Limpo, aromático, com acidez clara e boa definição de notas.",
    grind: "Média-fina",
    ratio: "15 g para 240 g",
    time: "2:30 a 3:30",
    difficulty: "Intermediária",
    equipment: ["V60", "Filtro cônico", "Chaleira bico fino", "Balança"],
    steps: ["Escalde o filtro", "Faça pré-infusão", "Despeje em círculos", "Controle o fluxo até finalizar"],
    adjustment: "Se escoar rápido demais, afine a moagem; se travar, engrosse levemente."
  },
  {
    id: "melitta",
    name: "Melitta",
    description: "Método prático de filtro, ótimo para rotina e para aprender controle de moagem e proporção.",
    sensory: "Doce, limpo e confortável, com corpo médio.",
    grind: "Média",
    ratio: "1:15 a 1:16",
    time: "2:30 a 4:00",
    difficulty: "Inicial",
    equipment: ["Porta-filtro Melitta", "Filtro", "Chaleira", "Balança"],
    steps: ["Escalde o filtro", "Distribua o pó", "Faça pré-infusão curta", "Complete o despejo com calma"],
    adjustment: "Use despejos mais suaves para evitar canalização e amargor."
  },
  {
    id: "kalita",
    name: "Kalita",
    description: "Coador de fundo plano que favorece extrações estáveis e repetíveis.",
    sensory: "Equilibrado, doce, com corpo médio e acidez moderada.",
    grind: "Média",
    ratio: "1:15 a 1:16",
    time: "2:45 a 3:45",
    difficulty: "Intermediária",
    equipment: ["Kalita", "Filtro ondulado", "Chaleira", "Balança"],
    steps: ["Escalde bem o filtro", "Pré-infunda", "Despeje em pulsos", "Mantenha o leito nivelado"],
    adjustment: "Se ficar pesado, reduza agitação e engrosse um ponto."
  },
  {
    id: "chemex",
    name: "Chemex",
    description: "Método elegante com filtro espesso, ótimo para cafés claros e limpos.",
    sensory: "Muito limpo, delicado, aromático e com textura leve.",
    grind: "Média-grossa",
    ratio: "1:15 a 1:17",
    time: "3:30 a 5:00",
    difficulty: "Intermediária",
    equipment: ["Chemex", "Filtro Chemex", "Chaleira", "Balança"],
    steps: ["Escalde o filtro", "Pré-infunda", "Despeje em etapas", "Evite compactar o leito"],
    adjustment: "Se o fluxo ficar lento, engrosse a moagem ou reduza a dose."
  },
  {
    id: "prensa",
    name: "Prensa Francesa",
    description: "Método de infusão em que o café fica em contato com a água por mais tempo.",
    sensory: "Encorpado, denso e com presença de óleos naturais.",
    grind: "Grossa",
    ratio: "20 g para 300 g",
    time: "4 minutos",
    difficulty: "Inicial",
    equipment: ["Prensa francesa", "Balança", "Cronômetro", "Colher"],
    steps: ["Adicione café", "Coloque água", "Aguarde a infusão", "Pressione devagar e sirva"],
    adjustment: "Sirva imediatamente para evitar extração contínua e amargor."
  },
  {
    id: "aeropress",
    name: "AeroPress",
    description: "Versátil, portátil e excelente para testar receitas intensas ou leves.",
    sensory: "Limpo, doce, versátil e com corpo médio.",
    grind: "Média",
    ratio: "15 g para 200 g",
    time: "1:30 a 2:30",
    difficulty: "Inicial a intermediária",
    equipment: ["AeroPress", "Filtro", "Balança", "Cronômetro"],
    steps: ["Prepare o filtro", "Adicione café e água", "Agite suavemente", "Pressione com constância"],
    adjustment: "Pequenas mudanças de moagem e tempo aparecem rápido na xícara."
  },
  {
    id: "moka",
    name: "Moka Italiana",
    description: "Prepara café intenso usando pressão do vapor. Não é espresso, mas entrega bebida concentrada.",
    sensory: "Intenso, encorpado e marcante.",
    grind: "Médio-fina",
    ratio: "Funil cheio, sem compactar",
    time: "Até o fluxo clarear",
    difficulty: "Intermediária",
    equipment: ["Moka", "Fogão", "Café moído", "Água"],
    steps: ["Coloque água abaixo da válvula", "Preencha sem compactar", "Aqueça em fogo baixo", "Retire ao borbulhar"],
    adjustment: "Fogo alto tende a queimar e amargar. Use calor controlado."
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "Bebida concentrada sob pressão, com moagem fina e curto tempo de extração.",
    sensory: "Intenso, doce, equilibrado, com corpo e crema.",
    grind: "Fina",
    ratio: "18 g para 36 g",
    time: "25 a 35 segundos",
    difficulty: "Avançada",
    equipment: ["Máquina de espresso", "Moedor", "Tamper", "Balança", "Pitcher"],
    steps: ["Moa e dose", "Distribua e compacte", "Extraia medindo tempo e rendimento", "Ajuste pela xícara"],
    adjustment: "Rápido e ácido pede moagem mais fina; lento e amargo pede moagem mais grossa."
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description: "Extração a frio, lenta e suave, ótima para bebidas geladas.",
    sensory: "Doce, suave, menos ácido e refrescante.",
    grind: "Grossa",
    ratio: "100 g para 1 litro",
    time: "12 a 18 horas",
    difficulty: "Inicial",
    equipment: ["Recipiente", "Filtro", "Geladeira ou bancada fresca", "Balança"],
    steps: ["Misture café e água", "Aguarde a infusão", "Filtre com cuidado", "Sirva com gelo ou leite"],
    adjustment: "Para mais intensidade, aumente tempo ou dose; para leveza, dilua ao servir."
  }
];

export const milkDrinks = [
  {
    title: "Espresso",
    text: "Base concentrada de café que sustenta bebidas com leite e precisa de extração equilibrada."
  },
  {
    title: "Macchiato",
    text: "Espresso marcado por pequena quantidade de leite vaporizado ou espuma."
  },
  {
    title: "Cappuccino",
    text: "Equilíbrio entre espresso, leite vaporizado e espuma, com textura cremosa."
  },
  {
    title: "Latte",
    text: "Mais leite, textura sedosa e grande área para desenhos de latte art."
  },
  {
    title: "Flat white",
    text: "Bebida menor, cremosa, com espresso presente e microespuma fina."
  },
  {
    title: "Mocha",
    text: "Combina espresso, leite e chocolate, criando doçura e corpo."
  }
];

export const latteArtBases = [
  "Crema bem formada para receber o leite.",
  "Microespuma lisa, brilhante e sem bolhas grandes.",
  "Contraste entre o branco do leite e o marrom do espresso.",
  "Controle de altura, fluxo, velocidade e centralização.",
  "Treino repetido de coração, tulipa e rosetta."
];

export const marketCards: HighlightCard[] = [
  {
    eyebrow: "Brasil",
    title: "Um protagonista mundial",
    body: "O país tem tradição agrícola, diversidade climática, forte mercado interno e presença importante na exportação.",
    points: ["Minas Gerais", "Espírito Santo", "São Paulo", "Bahia", "Rondônia"]
  },
  {
    eyebrow: "Mundo",
    title: "Origens com identidades próprias",
    body: "Etiópia, Colômbia, Vietnã, Quênia, Panamá, Costa Rica, Honduras e Guatemala carregam perfis de clima, altitude, variedade e cultura.",
    points: ["Produtores", "Consumidores", "Rotas internacionais"]
  },
  {
    eyebrow: "Tendências",
    title: "Rastreabilidade e profissionalização",
    body: "Cafés especiais, sustentabilidade, novas fermentações, cafeterias autorais, educação sensorial e tecnologia na torra puxam o mercado.",
    points: ["Valorização do produtor", "Métodos manuais", "Bebidas geladas"]
  },
  {
    eyebrow: "Sustentabilidade",
    title: "Café melhor também é responsável",
    body: "Uso consciente da água, manejo do solo, remuneração justa, redução de desperdício e embalagens melhores fazem parte da conversa.",
    points: ["Solo", "Água", "Pessoas", "Resíduos"]
  }
];

export const glossaryTerms: GlossaryTerm[] = [
  { term: "Acidez", definition: "Sensação de brilho e vivacidade no café, lembrando frutas cítricas ou maduras." },
  { term: "Aftertaste", definition: "Sabor que permanece depois do gole." },
  { term: "Aroma", definition: "Conjunto de percepções olfativas do café." },
  { term: "Blend", definition: "Mistura de cafés diferentes para criar um perfil específico." },
  { term: "Corpo", definition: "Sensação de peso e textura na boca." },
  { term: "Crema", definition: "Camada superficial do espresso, formada durante a extração sob pressão." },
  { term: "Cupping", definition: "Método padronizado de avaliação sensorial de cafés." },
  { term: "Extração", definition: "Processo em que a água dissolve compostos do café." },
  { term: "Fermentação", definition: "Transformação química e microbiológica que pode ocorrer no pós-colheita." },
  { term: "Finalização", definition: "Persistência e qualidade do sabor depois de beber." },
  { term: "Moagem", definition: "Tamanho das partículas do café moído." },
  { term: "Perfil de torra", definition: "Estratégia de tempo, calor e desenvolvimento usada para torrar determinado café." },
  { term: "Q-Grader", definition: "Profissional certificado para avaliação de cafés com protocolos internacionais." },
  { term: "Rastreabilidade", definition: "Capacidade de identificar origem, produtor, fazenda, lote e processo do café." },
  { term: "Terroir", definition: "Conjunto de fatores naturais e humanos que influenciam o café." },
  { term: "Torra clara", definition: "Torra que preserva mais acidez, aromas delicados e características da origem." },
  { term: "Torra média", definition: "Torra versátil que equilibra doçura, acidez, corpo e aroma." },
  { term: "Torra escura", definition: "Torra com notas tostadas, maior amargor e menor percepção de acidez." },
  { term: "Microespuma", definition: "Leite vaporizado com textura lisa, brilhante e cremosa, ideal para latte art." }
];

export const ebookVolumes: EbookVolume[] = [
  {
    number: "01",
    title: "Fundamentos do Café",
    description: "História, planta, espécies, qualidade, café especial e sensorial.",
    learns: "Você aprende a enxergar café como bebida agrícola, cultural e sensorial.",
    level: "Inicial",
    duration: "2h de leitura",
    status: "Começar por aqui"
  },
  {
    number: "02",
    title: "Do Campo à Xícara",
    description: "Produção, colheita, processos, secagem, classificação, torra e moagem.",
    learns: "Você entende como cada etapa constrói ou perde qualidade.",
    level: "Inicial a intermediário",
    duration: "2h30 de leitura",
    status: "Trilha essencial"
  },
  {
    number: "03",
    title: "Métodos de Preparo",
    description: "Coado, V60, prensa francesa, AeroPress, moka, cold brew e receitas.",
    learns: "Você compara métodos e aprende receitas-base para ajustar em casa.",
    level: "Prático",
    duration: "3h de leitura",
    status: "Mão na massa"
  },
  {
    number: "04",
    title: "Barismo Profissional",
    description: "Espresso, regulagem, vaporização, bebidas clássicas e operação.",
    learns: "Você domina variáveis de extração e rotina de cafeteria.",
    level: "Intermediário",
    duration: "3h30 de leitura",
    status: "Aprofundamento"
  },
  {
    number: "05",
    title: "Latte Art",
    description: "Textura do leite, desenhos básicos, técnicas, treino e competições.",
    learns: "Você constrói consistência visual com coração, tulipa e rosetta.",
    level: "Prático",
    duration: "2h de leitura",
    status: "Treino visual"
  },
  {
    number: "06",
    title: "Sensorial e Café Especial",
    description: "Cupping, roda de sabores, defeitos, notas sensoriais e avaliação.",
    learns: "Você desenvolve vocabulário, percepção e leitura de qualidade.",
    level: "Intermediário",
    duration: "3h de leitura",
    status: "Laboratório"
  },
  {
    number: "07",
    title: "Mercado e Profissões",
    description: "Áreas de atuação, carreira, cafeterias, torrefações, concursos e tendências.",
    learns: "Você mapeia caminhos profissionais e entende o ecossistema do café.",
    level: "Estratégico",
    duration: "2h30 de leitura",
    status: "Carreira"
  },
  {
    number: "08",
    title: "Café no Brasil e no Mundo",
    description: "Regiões produtoras, fazendas, exportação, cultura internacional e cenário atual.",
    learns: "Você conecta origem, cultura, mercado e sustentabilidade.",
    level: "Panorama",
    duration: "2h de leitura",
    status: "Visão global"
  }
];
