import type { BrewMethod } from "./types";

export const brewMethods: BrewMethod[] = [
  {
    id: "coado",
    name: "Coado tradicional",
    description: "Método cotidiano no Brasil, simples e excelente quando medido com cuidado.",
    equipment: ["Porta-filtro", "Filtro", "Chaleira", "Balança"],
    grind: "Média",
    ratio: "1:15 a 1:17",
    time: "2 a 4 minutos",
    temperature: "90 °C a 96 °C",
    difficulty: "Iniciante",
    sensory: "Limpo, familiar, equilibrado",
    body: "Médio",
    acidity: "Média",
    bestFor: "Rotina, estudo de proporção e cafés equilibrados.",
    vessel: "Caneca ou xícara média aquecida.",
    steps: ["Escalde o filtro", "Adicione café moído", "Faça pré-infusão curta", "Despeje em etapas", "Sirva em seguida"],
    commonErrors: ["Filtro sem escaldar", "Moagem muito fina", "Despejo agressivo"],
    adjustments: ["Afine se ficar fraco", "Engrosse se ficar seco", "Aumente água para suavizar intensidade"],
    recipe: {
      dose: "15 g",
      water: "240 g",
      ratio: "1:16",
      time: "3:00 a 3:30",
      grind: "Média",
      temperature: "92 °C a 94 °C"
    },
    tastingGuide: [
      "Se a xícara ficar aguada, reduza a proporção para 1:15 ou afine levemente a moagem.",
      "Se aparecer amargor seco no final, engrosse a moagem e despeje com menos turbulência.",
      "Procure doçura simples, corpo médio e final limpo; é um método excelente para calibrar rotina."
    ],
    variations: [
      "Receita rápida: despejo único após a pré-infusão para uma xícara direta de manhã.",
      "Receita mais doce: três despejos menores, mantendo o leito sempre nivelado.",
      "Receita suave: 1:17 com moagem um pouco mais grossa para reduzir intensidade."
    ],
    practicePlan: [
      "Repita a mesma receita por três preparos e anote tempo final, sabor e moagem.",
      "Troque apenas a moagem no quarto preparo para perceber impacto na extração.",
      "Compare filtro escaldado e não escaldado para reconhecer gosto de papel."
    ],
    media: {
      title: "Coado tradicional",
      alt: "Café sendo preparado em filtro tradicional",
      caption: "Um método simples que ensina quase tudo sobre proporção e moagem.",
      tone: "brew"
    }
  },
  {
    id: "v60",
    name: "V60",
    description: "Coador cônico que dá grande controle sobre fluxo, turbulência e clareza.",
    equipment: ["V60", "Filtro cônico", "Chaleira bico fino", "Balança"],
    grind: "Média-fina",
    ratio: "1:15 a 1:17",
    time: "2:30 a 3:30",
    temperature: "92 °C a 96 °C",
    difficulty: "Intermediário",
    sensory: "Limpo, aromático, acidez clara",
    body: "Leve a médio",
    acidity: "Alta",
    bestFor: "Cafés florais, frutados e de acidez evidente.",
    vessel: "Servidor de vidro ou xícara clara para observar cor.",
    steps: ["Escalde o filtro", "Pré-infunda por 30 a 45 s", "Despeje em círculos", "Controle fluxo", "Finalize dentro do tempo"],
    commonErrors: ["Canalização", "Moagem grossa demais", "Despejo irregular"],
    adjustments: ["Afine para mais extração", "Reduza agitação se ficar áspero", "Divida despejos para mais controle"],
    recipe: {
      dose: "15 g",
      water: "250 g",
      ratio: "1:16,6",
      time: "2:45 a 3:15",
      grind: "Média-fina",
      temperature: "93 °C a 96 °C"
    },
    tastingGuide: [
      "Acidez viva com doçura indica boa extração; acidez pontuda e corpo vazio costuma pedir moagem mais fina.",
      "Amargor áspero no fundo da língua sugere excesso de extração ou muita agitação no despejo.",
      "Cafés florais e frutados devem aparecer com aroma nítido e final limpo."
    ],
    variations: [
      "Receita de clareza: pré-infusão de 45 s e dois despejos lentos até 250 g.",
      "Receita de corpo: três despejos com leve agitação no primeiro pulso.",
      "Receita para café muito fresco: aumente a pré-infusão e use água no limite alto da faixa."
    ],
    practicePlan: [
      "Treine despejos circulares mantendo a altura da chaleira constante.",
      "Faça duas xícaras com a mesma receita mudando apenas a agitação.",
      "Registre tempo de drawdown e compare com doçura, acidez e adstringência."
    ],
    videoId: "AI4ynXzkSQo",
    media: {
      title: "V60",
      alt: "Preparo de café em V60 com chaleira de bico fino",
      caption: "Controle fino de despejo e moagem para uma xícara limpa.",
      src: "/images/method-v60.webp",
      tone: "brew"
    }
  },
  {
    id: "melitta",
    name: "Melitta",
    description: "Filtro prático e acessível, ótimo para aprender consistência em casa.",
    equipment: ["Porta-filtro Melitta", "Filtro", "Chaleira", "Balança"],
    grind: "Média",
    ratio: "1:15 a 1:17",
    time: "2:30 a 4:00",
    temperature: "90 °C a 96 °C",
    difficulty: "Iniciante",
    sensory: "Equilibrado, cotidiano, confortável",
    body: "Médio",
    acidity: "Média",
    bestFor: "Rotina, cafés doces e perfis achocolatados.",
    vessel: "Caneca ou jarra pequena.",
    steps: ["Escalde o filtro", "Distribua o pó", "Pré-infunda", "Complete o despejo", "Sirva fresco"],
    commonErrors: ["Pó desnivelado", "Receita sem medida", "Filtro frio"],
    adjustments: ["Use balança", "Despeje com calma", "Teste 1:16 como ponto de partida"],
    recipe: {
      dose: "15 g",
      water: "240 g",
      ratio: "1:16",
      time: "2:45 a 3:45",
      grind: "Média",
      temperature: "91 °C a 94 °C"
    },
    tastingGuide: [
      "Busque equilíbrio entre doçura, corpo e final confortável, sem secura persistente.",
      "Se o café parecer pesado e opaco, engrosse a moagem ou reduza o tempo de contato.",
      "Se ficar fino e sem aroma, afine a moagem e mantenha o leito mais uniforme."
    ],
    variations: [
      "Receita de rotina: pré-infusão curta e despejo contínuo até o peso final.",
      "Receita mais controlada: divida a água em três pulsos iguais.",
      "Receita para torra média-escura: use água um pouco menos quente para reduzir amargor."
    ],
    practicePlan: [
      "Use a mesma colher apenas como referência visual e confira tudo na balança.",
      "Teste leito nivelado contra leito irregular para sentir diferença de canalização.",
      "Anote a receita que agradou e repita em outro dia para validar consistência."
    ],
    media: {
      title: "Melitta",
      alt: "Café coado em porta-filtro Melitta",
      caption: "Acessível, direto e ótimo para criar hábitos de medição.",
      tone: "brew"
    }
  },
  {
    id: "kalita",
    name: "Kalita",
    description: "Coador de fundo plano que favorece extrações estáveis e repetíveis.",
    equipment: ["Kalita", "Filtro ondulado", "Chaleira", "Balança"],
    grind: "Média",
    ratio: "1:15 a 1:16",
    time: "2:30 a 3:30",
    temperature: "91 °C a 95 °C",
    difficulty: "Iniciante/intermediário",
    sensory: "Doce, estável, equilibrado",
    body: "Médio",
    acidity: "Média",
    bestFor: "Quem quer estabilidade sem perder clareza.",
    vessel: "Servidor baixo ou xícara larga.",
    steps: ["Escalde o filtro", "Pré-infunda", "Despeje em pulsos", "Mantenha leito nivelado", "Evite excesso de agitação"],
    commonErrors: ["Filtro mal assentado", "Moagem fina demais", "Leito desnivelado"],
    adjustments: ["Engrosse se travar", "Reduza agitação se pesar", "Use pulsos menores"],
    recipe: {
      dose: "16 g",
      water: "250 g",
      ratio: "1:15,6",
      time: "2:45 a 3:30",
      grind: "Média",
      temperature: "92 °C a 95 °C"
    },
    tastingGuide: [
      "O fundo plano tende a entregar doçura estável; amargor rápido geralmente aponta moagem fina demais.",
      "Se a acidez sumir, reduza agitação e observe se o tempo final encurta.",
      "Boa xícara de Kalita deve parecer redonda, com corpo médio e final limpo."
    ],
    variations: [
      "Receita de estabilidade: quatro pulsos pequenos mantendo o nível de água baixo.",
      "Receita mais intensa: moagem ligeiramente mais fina e despejos centrais curtos.",
      "Receita mais leve: 1:16,5 com menor agitação."
    ],
    practicePlan: [
      "Assente bem o filtro ondulado e compare com um preparo sem escaldar corretamente.",
      "Treine despejos baixos para não desmanchar o leito.",
      "Repita a receita com dois cafés diferentes e observe como a Kalita suaviza extremos."
    ],
    media: {
      title: "Kalita",
      alt: "Preparo de café em Kalita com filtro ondulado",
      caption: "Fundo plano ajuda a estabilizar a extração.",
      tone: "brew"
    }
  },
  {
    id: "chemex",
    name: "Chemex",
    description: "Método elegante com filtro espesso e perfil muito limpo.",
    equipment: ["Chemex", "Filtro Chemex", "Chaleira", "Balança"],
    grind: "Média-grossa",
    ratio: "1:15 a 1:17",
    time: "3:30 a 5:00",
    temperature: "92 °C a 96 °C",
    difficulty: "Intermediário",
    sensory: "Muito limpo, delicado, elegante",
    body: "Leve",
    acidity: "Média a alta",
    bestFor: "Cafés delicados, florais e para servir mais de uma pessoa.",
    vessel: "A própria Chemex como jarra de serviço.",
    steps: ["Abra e encaixe o filtro", "Escalde generosamente", "Pré-infunda", "Despeje em etapas", "Evite compactar o leito"],
    commonErrors: ["Fluxo muito lento", "Filtro mal posicionado", "Moagem fina demais"],
    adjustments: ["Engrosse moagem", "Reduza dose", "Aumente despejos suaves"],
    recipe: {
      dose: "30 g",
      water: "500 g",
      ratio: "1:16,6",
      time: "4:00 a 5:00",
      grind: "Média-grossa",
      temperature: "93 °C a 96 °C"
    },
    tastingGuide: [
      "A Chemex deve destacar limpeza; se tudo parecer apagado, a moagem pode estar grossa demais.",
      "Secura e tempo muito longo apontam filtro saturado, moagem fina ou despejo lento demais.",
      "Cafés delicados ficam melhores quando aroma e acidez aparecem sem peso excessivo."
    ],
    variations: [
      "Receita para servir duas pessoas: 36 g de café para 600 g de água, mantendo moagem grossa.",
      "Receita de alta clareza: despejos suaves nas bordas internas, sem mexer o leito.",
      "Receita mais doce: use pulsos maiores no centro e mantenha o drawdown abaixo de 5 min."
    ],
    practicePlan: [
      "Aprenda a posicionar a dobra tripla do filtro no bico da Chemex.",
      "Compare 30 g e 36 g mantendo proporção para entender impacto do volume.",
      "Anote quando o fluxo começa a travar; isso mostra o limite da moagem."
    ],
    media: {
      title: "Chemex",
      alt: "Café sendo preparado em Chemex",
      caption: "Filtro espesso entrega clareza e leveza.",
      tone: "brew"
    }
  },
  {
    id: "prensa",
    name: "Prensa Francesa",
    description: "Método de infusão com textura densa e óleos naturais.",
    equipment: ["Prensa francesa", "Balança", "Cronômetro", "Colher"],
    grind: "Grossa",
    ratio: "1:14 a 1:16",
    time: "4 a 8 minutos",
    temperature: "90 °C a 96 °C",
    difficulty: "Iniciante",
    sensory: "Encorpado, denso, oleoso",
    body: "Alto",
    acidity: "Baixa a média",
    bestFor: "Quem gosta de textura, corpo e preparo simples.",
    vessel: "Xícara maior ou caneca aquecida.",
    steps: ["Adicione café", "Coloque água", "Aguarde infusão", "Mexa se necessário", "Pressione devagar", "Sirva imediatamente"],
    commonErrors: ["Moagem fina", "Servir tarde demais", "Pressionar com força"],
    adjustments: ["Use moagem grossa", "Decante após preparo", "Teste tempos mais longos com menos agitação"],
    recipe: {
      dose: "20 g",
      water: "300 g",
      ratio: "1:15",
      time: "4:00 a 6:00",
      grind: "Grossa",
      temperature: "92 °C a 96 °C"
    },
    tastingGuide: [
      "Corpo alto é esperado; lama fina e amargor áspero indicam moagem fina ou pressão excessiva.",
      "Se a xícara ficar doce, densa e sem secura, a decantação foi feita no tempo certo.",
      "Acidez aparece menos; avalie mais textura, doçura e final."
    ],
    variations: [
      "Receita clássica: 4 min de infusão, mexida leve e prensagem lenta.",
      "Receita limpa: quebre a crosta, retire espuma, espere mais 4 min e sirva sem pressionar até o fundo.",
      "Receita intensa: 1:14 com moagem grossa e decantação imediata."
    ],
    practicePlan: [
      "Compare servir direto da prensa contra decantar tudo para outra jarra.",
      "Teste 4 min e 8 min com a mesma moagem para entender corpo e amargor.",
      "Observe a quantidade de sedimento no fundo como leitura de moagem."
    ],
    videoId: "st571DYYTR8",
    media: {
      title: "Prensa Francesa",
      alt: "Café em prensa francesa",
      caption: "Infusão simples, corpo alto e textura presente.",
      src: "/images/method-prensa.webp",
      tone: "brew"
    }
  },
  {
    id: "aeropress",
    name: "AeroPress",
    description: "Método versátil, portátil e ótimo para testar variações.",
    equipment: ["AeroPress", "Filtro", "Balança", "Cronômetro"],
    grind: "Média a média-fina",
    ratio: "Variável",
    time: "1:30 a 3:00",
    temperature: "82 °C a 96 °C",
    difficulty: "Iniciante/intermediário",
    sensory: "Versátil, limpo, doce",
    body: "Médio",
    acidity: "Média",
    bestFor: "Viagem, experimentação e cafés doces.",
    vessel: "Caneca resistente ou servidor pequeno.",
    steps: ["Prepare o filtro", "Adicione café e água", "Agite suavemente", "Aguarde", "Pressione com constância"],
    commonErrors: ["Pressionar rápido demais", "Receita sem controle", "Moagem incompatível"],
    adjustments: ["Afine para mais intensidade", "Dilua para suavizar", "Ajuste temperatura para reduzir amargor"],
    recipe: {
      dose: "15 g",
      water: "220 g",
      ratio: "1:14,6",
      time: "1:45 a 2:30",
      grind: "Média-fina",
      temperature: "85 °C a 92 °C"
    },
    tastingGuide: [
      "Pressão constante deve gerar doçura e corpo médio, sem aspereza na garganta.",
      "Se ficar concentrado demais, dilua depois da extração antes de alterar a moagem.",
      "Temperaturas menores ajudam em torras escuras; temperaturas maiores abrem cafés claros."
    ],
    variations: [
      "Receita invertida: infusão completa antes de virar e pressionar, com mais controle de tempo.",
      "Receita bypass: extraia curto e complete com água quente para textura mais limpa.",
      "Receita intensa: 18 g, moagem fina e rendimento menor para bebida concentrada."
    ],
    practicePlan: [
      "Treine pressão lenta por 25 a 35 segundos, sem forçar no final.",
      "Compare filtro de papel simples e duplo para perceber corpo e limpeza.",
      "Mude apenas temperatura em três preparos para mapear doçura e amargor."
    ],
    videoId: "j6VlT_jUVPc",
    media: {
      title: "AeroPress",
      alt: "AeroPress preparada sobre uma caneca",
      caption: "Pequenas mudanças geram resultados perceptíveis.",
      tone: "brew"
    }
  },
  {
    id: "moka",
    name: "Moka Italiana",
    description: "Prepara uma bebida intensa usando pressão do vapor.",
    equipment: ["Moka", "Fogão", "Café moído", "Água"],
    grind: "Média-fina",
    ratio: "Conforme o equipamento",
    time: "Variável",
    temperature: "Fogo baixo ou médio",
    difficulty: "Iniciante/intermediário",
    sensory: "Intenso, encorpado, marcante",
    body: "Alto",
    acidity: "Baixa a média",
    bestFor: "Bebidas intensas e preparo sem máquina de espresso.",
    vessel: "Xícara pequena ou copo curto.",
    steps: ["Coloque água abaixo da válvula", "Preencha o funil sem compactar", "Aqueça em fogo baixo", "Retire quando o fluxo clarear"],
    commonErrors: ["Compactar o pó", "Fogo alto", "Deixar borbulhar demais"],
    adjustments: ["Use água já quente", "Reduza fogo", "Retire antes de queimar"],
    recipe: {
      dose: "Cesto cheio nivelado",
      water: "Até abaixo da válvula",
      ratio: "Definida pela moka",
      time: "2:00 a 4:00 no fogo",
      grind: "Média-fina",
      temperature: "Água quente e fogo baixo"
    },
    tastingGuide: [
      "A bebida deve ser intensa, mas não queimada; gosto metálico ou cinza aponta calor excessivo.",
      "Se espirrar e borbulhar cedo, reduza o fogo e retire a moka antes do fluxo clarear demais.",
      "Diluir com água quente pode revelar doçura sem perder o caráter marcante."
    ],
    variations: [
      "Receita suave: dilua a bebida pronta com água quente em proporção 1:1.",
      "Receita para leite: use torra média e interrompa o fluxo cedo para preservar corpo.",
      "Receita mais limpa: resfrie a base da moka em água fria assim que o fluxo perder força."
    ],
    practicePlan: [
      "Compare começar com água fria e água quente para sentir diferença de amargor.",
      "Cronometre o tempo até o primeiro fluxo e ajuste a chama no próximo preparo.",
      "Nunca compacte o pó; observe como o fluxo muda quando o cesto fica apenas nivelado."
    ],
    media: {
      title: "Moka Italiana",
      alt: "Cafeteira moka italiana no fogão",
      caption: "Intensidade com controle de calor.",
      tone: "espresso"
    }
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "Bebida concentrada sob pressão, moagem fina e curto tempo.",
    equipment: ["Máquina de espresso", "Moedor", "Tamper", "Balança", "Pitcher"],
    grind: "Fina",
    ratio: "1:2 como ponto de partida",
    time: "25 a 35 segundos",
    temperature: "90 °C a 96 °C",
    difficulty: "Avançado",
    sensory: "Intenso, concentrado, doce, complexo",
    body: "Alto",
    acidity: "Variável",
    bestFor: "Bebidas concentradas, cappuccino, latte e ajustes precisos.",
    vessel: "Xícara pequena pré-aquecida.",
    steps: ["Moa e pese a dose", "Distribua", "Compacte", "Extraia medindo rendimento", "Ajuste pela xícara"],
    commonErrors: ["Canalização", "Distribuição ruim", "Moagem fora do ponto", "Máquina suja"],
    adjustments: ["Afine se sair rápido e ácido", "Engrosse se sair lento e amargo", "Revise dose e distribuição"],
    recipe: {
      dose: "18 g",
      water: "36 g de bebida",
      ratio: "1:2",
      time: "25 a 30 s",
      grind: "Fina",
      temperature: "92 °C a 94 °C"
    },
    tastingGuide: [
      "Espresso ácido, fino e rápido costuma pedir moagem mais fina ou maior rendimento controlado.",
      "Espresso amargo, seco e lento costuma pedir moagem mais grossa ou menor rendimento.",
      "Uma extração equilibrada combina doçura, corpo, acidez integrada e final sem aspereza."
    ],
    variations: [
      "Ristretto: rendimento menor para mais corpo e intensidade, quando o café suporta concentração.",
      "Normale: 1:2 como ponto de partida para calibrar a maioria dos cafés.",
      "Lungo curto: 1:2,5 para abrir cafés claros, cuidando para não secar o final."
    ],
    practicePlan: [
      "Pese dose e rendimento em todas as extrações; sem isso o ajuste vira chute.",
      "Mude apenas a moagem até atingir a janela de tempo e depois ajuste pelo sabor.",
      "Faça flush, limpe o porta-filtro e seque o cesto antes de cada tentativa."
    ],
    videoId: "I6ti6NMCqsc",
    media: {
      title: "Espresso",
      alt: "Extração de espresso com crema",
      caption: "O método mais exigente em consistência e equipamento.",
      src: "/images/method-espresso.webp",
      tone: "espresso"
    }
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description: "Extração a frio, lenta e suave, ideal para bebidas geladas.",
    equipment: ["Recipiente", "Filtro", "Balança", "Geladeira ou bancada fresca"],
    grind: "Grossa",
    ratio: "1:8 a 1:12",
    time: "12 a 18 horas",
    temperature: "Fria ou ambiente",
    difficulty: "Iniciante",
    sensory: "Doce, suave, refrescante, baixa acidez percebida",
    body: "Médio",
    acidity: "Baixa",
    bestFor: "Bebidas geladas, leite, tônica e drinks sem álcool.",
    vessel: "Copo alto com gelo.",
    steps: ["Misture café e água", "Aguarde a infusão", "Filtre com cuidado", "Sirva puro ou diluído"],
    commonErrors: ["Moagem fina", "Filtragem apressada", "Receita concentrada sem diluir"],
    adjustments: ["Aumente tempo para intensidade", "Dilua para leveza", "Use moagem grossa para filtrar melhor"],
    recipe: {
      dose: "100 g",
      water: "1.000 g",
      ratio: "1:10",
      time: "14 a 16 h",
      grind: "Grossa",
      temperature: "Ambiente fresco ou geladeira"
    },
    tastingGuide: [
      "Cold brew deve ser doce e macio; amargor pesado indica tempo longo demais ou moagem fina.",
      "Se parecer sem graça, aumente concentração ou sirva com menos gelo/diluição.",
      "Baixa acidez percebida não significa falta de sabor; procure doçura, textura e final limpo."
    ],
    variations: [
      "Concentrado para leite: 1:8 e diluição na hora de servir.",
      "Pronto para beber: 1:12, filtrado com cuidado e servido com gelo.",
      "Com tônica: concentrado 1:8, gelo, tônica e uma casca cítrica."
    ],
    practicePlan: [
      "Faça dois lotes pequenos, um em temperatura ambiente e outro na geladeira.",
      "Filtre primeiro em peneira e depois em papel para comparar textura.",
      "Anote diluição final no copo, porque o gelo muda a receita real."
    ],
    media: {
      title: "Cold Brew",
      alt: "Cold brew servido com gelo em copo transparente",
      caption: "Doçura, suavidade e refrescância.",
      src: "/images/method-cold-brew.webp",
      tone: "brew"
    }
  }
];
