import type { JourneyStep } from "./types";

export const coffeeJourney: JourneyStep[] = [
  {
    id: "plantio",
    title: "Plantio",
    summary: "Escolha de espécie, variedade, solo, espaçamento e adaptação ao clima.",
    impact: "Define o potencial de qualidade antes de qualquer processo.",
    detail: "A base envolve genética, nutrição, irrigação, poda, sustentabilidade e planejamento agrícola.",
    professional: "Produtor e agrônomo",
    relatedPath: "/profissionais",
    media: { title: "Lavoura planejada", alt: "Linhas de cafeeiros em uma lavoura", caption: "A qualidade começa anos antes da colheita.", tone: "farm" }
  },
  {
    id: "cultivo",
    title: "Cultivo",
    summary: "Manejo contínuo da lavoura, saúde do solo, pragas, chuvas e exposição solar.",
    impact: "Ajuda a construir doçura, vigor, uniformidade e equilíbrio.",
    detail: "O cultivo exige poda, nutrição, controle de pragas, irrigação quando necessária e cuidado com sustentabilidade.",
    professional: "Produtor e agrônomo",
    relatedPath: "/fundamentos#planta",
    media: { title: "Manejo do cafeeiro", alt: "Cafeeiro saudável em cultivo", caption: "Solo e manejo influenciam produtividade e sabor.", tone: "farm" }
  },
  {
    id: "florada",
    title: "Florada",
    summary: "As flores aparecem após chuvas e dão origem aos frutos.",
    impact: "Uma florada uniforme favorece maturação mais homogênea.",
    detail: "A florada indica o início de um ciclo decisivo e ajuda a prever janela de colheita.",
    professional: "Produtor",
    relatedPath: "/do-campo-a-xicara#colheita",
    media: { title: "Florada do café", alt: "Flores brancas em ramo de cafeeiro", caption: "Um dos momentos mais bonitos e importantes da lavoura.", tone: "farm" }
  },
  {
    id: "maturacao",
    title: "Maturação",
    summary: "Os frutos amadurecem e concentram açúcares, aromas e compostos sensoriais.",
    impact: "Frutos maduros tendem a gerar mais doçura e equilíbrio.",
    detail: "Frutos verdes podem trazer adstringência; frutos passados podem trazer fermentações indesejadas.",
    professional: "Produtor",
    relatedPath: "/fundamentos#planta",
    media: { title: "Cerejas maduras", alt: "Cerejas de café vermelhas e amarelas", caption: "Maturação correta é uma ponte entre campo e xícara.", tone: "farm" }
  },
  {
    id: "colheita",
    title: "Colheita",
    summary: "Pode ser seletiva, por derriça, mecanizada ou semimecanizada.",
    impact: "A seleção do ponto de maturação muda a limpeza e a expressão da bebida.",
    detail: "Colheita seletiva é mais trabalhosa, mas favorece lotes mais uniformes.",
    professional: "Produtor e equipe de colheita",
    relatedPath: "/profissionais",
    media: { title: "Colheita", alt: "Mãos colhendo cerejas de café", caption: "A seleção no campo reduz defeitos depois.", tone: "farm" }
  },
  {
    id: "selecao",
    title: "Seleção",
    summary: "Separação de frutos verdes, maduros, passados ou defeituosos.",
    impact: "Reduz defeitos e aumenta uniformidade.",
    detail: "Pode acontecer por triagem manual, água, equipamentos ou combinação de métodos.",
    professional: "Processador pós-colheita",
    relatedPath: "/profissionais",
    media: { title: "Seleção de frutos", alt: "Frutos de café separados por maturação", caption: "Uniformidade dá mais clareza ao lote.", tone: "farm" }
  },
  {
    id: "natural",
    title: "Processo natural",
    summary: "O fruto seca inteiro, com casca e polpa.",
    impact: "Pode gerar doçura alta, corpo e notas frutadas.",
    detail: "Exige controle cuidadoso para evitar fermentações indesejadas e secagem irregular.",
    professional: "Processador pós-colheita",
    relatedPath: "/glossario",
    media: { title: "Processo natural", alt: "Cafés secando com fruto inteiro", caption: "O fruto inteiro participa mais intensamente do perfil sensorial.", tone: "farm" }
  },
  {
    id: "lavado",
    title: "Processo lavado",
    summary: "A polpa é removida antes da secagem, com fermentação controlada e lavagem.",
    impact: "Costuma gerar bebidas limpas, delicadas e com acidez clara.",
    detail: "É útil quando o objetivo é evidenciar transparência e definição sensorial.",
    professional: "Processador pós-colheita",
    relatedPath: "/glossario",
    media: { title: "Processo lavado", alt: "Grãos de café sendo lavados no pós-colheita", caption: "Tende a valorizar limpeza e nitidez.", tone: "farm" }
  },
  {
    id: "honey",
    title: "Processo honey",
    summary: "Parte da mucilagem permanece no grão durante a secagem.",
    impact: "Equilibra doçura, corpo e acidez.",
    detail: "O resultado depende da quantidade de mucilagem, tempo e controle da secagem.",
    professional: "Processador pós-colheita",
    relatedPath: "/glossario",
    media: { title: "Processo honey", alt: "Café em secagem com mucilagem parcial", caption: "Um meio-termo sensorial entre natural e lavado.", tone: "farm" }
  },
  {
    id: "fermentacoes",
    title: "Fermentações controladas",
    summary: "Uso intencional de tempo, ambiente e microrganismos para modular perfil.",
    impact: "Pode criar notas intensas de frutas, vinho, especiarias e doçura.",
    detail: "Quando mal controlada, pode gerar defeitos. Requer higiene, registro e conhecimento sensorial.",
    professional: "Processador e provador",
    relatedPath: "/biblioteca",
    media: { title: "Fermentação", alt: "Tanques de fermentação de café", caption: "Controle é a diferença entre complexidade e defeito.", tone: "tools" }
  },
  {
    id: "secagem",
    title: "Secagem",
    summary: "Redução da umidade em terreiro, camas suspensas, estufas ou secadores.",
    impact: "Preserva qualidade e evita mofo, instabilidade e perda de complexidade.",
    detail: "Secagem rápida demais, lenta demais ou irregular pode comprometer o lote.",
    professional: "Processador pós-colheita",
    relatedPath: "/do-campo-a-xicara#beneficiamento",
    media: { title: "Secagem", alt: "Café secando em camas suspensas", caption: "Secagem é conservação e construção de estabilidade.", tone: "farm" }
  },
  {
    id: "beneficiamento",
    title: "Beneficiamento",
    summary: "Remoção de partes externas e preparo do café verde para comercialização.",
    impact: "Deixa o grão pronto para classificação, armazenamento e comercialização.",
    detail: "Ajuda a padronizar o lote, separar impurezas e preparar o café para compradores.",
    professional: "Beneficiador e classificador",
    relatedPath: "/profissionais",
    media: { title: "Beneficiamento", alt: "Café verde beneficiado", caption: "Do fruto seco ao grão verde comercializável.", tone: "tools" }
  },
  {
    id: "classificacao",
    title: "Classificação",
    summary: "Análise de peneira, defeitos, umidade, aspecto físico e bebida.",
    impact: "Ajuda compradores e torrefadores a entenderem o potencial do café.",
    detail: "Conecta critérios físicos e sensoriais para orientar valor comercial, uso e comunicação de qualidade.",
    professional: "Classificador e provador",
    relatedPath: "/profissionais",
    media: { title: "Classificação", alt: "Amostras de café verde em mesa de classificação", caption: "Qualidade precisa ser observada e comunicada.", tone: "tools" }
  },
  {
    id: "armazenamento",
    title: "Armazenamento",
    summary: "Proteção contra oxigênio, luz, calor e umidade.",
    impact: "Mantém aroma e estabilidade até a torra.",
    detail: "Café mal armazenado envelhece mais rápido e perde clareza sensorial.",
    professional: "Produtor, armazém e torrefação",
    relatedPath: "/fundamentos#especial",
    media: { title: "Armazenamento", alt: "Sacas de café armazenadas em ambiente seco", caption: "Preservar também é produzir qualidade.", tone: "farm" }
  },
  {
    id: "torra",
    title: "Torra",
    summary: "Transforma o café verde em grão aromático e solúvel para extração.",
    impact: "Desenvolve aroma, cor, doçura, acidez, corpo e amargor.",
    detail: "Torras claras preservam origem; médias equilibram; escuras aumentam notas tostadas e amargor.",
    professional: "Mestre de torra",
    relatedPath: "/profissionais",
    media: { title: "Torra", alt: "Grãos de café em processo de torra", caption: "A torra deve servir ao grão e ao método.", tone: "roast" }
  },
  {
    id: "moagem",
    title: "Moagem",
    summary: "Define o tamanho das partículas e a velocidade de extração.",
    impact: "Moagem fina extrai mais rápido; grossa extrai mais lentamente.",
    detail: "Fina demais pode gerar amargor; grossa demais pode gerar bebida fraca e ácida.",
    professional: "Barista",
    relatedPath: "/barismo",
    media: { title: "Moagem", alt: "Café moído em diferentes granulometrias", caption: "Moagem é uma das alavancas mais importantes do preparo.", tone: "tools" }
  },
  {
    id: "preparo",
    title: "Preparo",
    summary: "Água, proporção, tempo, técnica e método transformam o grão em bebida.",
    impact: "Um preparo ruim pode prejudicar um lote excelente.",
    detail: "Medir, observar e ajustar são hábitos centrais para consistência.",
    professional: "Barista",
    relatedPath: "/metodos",
    media: { title: "Preparo", alt: "Café sendo preparado em método manual", caption: "A técnica final traduz toda a cadeia.", tone: "brew" }
  },
  {
    id: "servico",
    title: "Serviço",
    summary: "Hospitalidade, xícara adequada, comunicação e limpeza fecham a experiência.",
    impact: "Valoriza toda a cadeia e ajuda a pessoa perceber melhor o café.",
    detail: "Serviço inclui explicar origem, orientar consumo e entregar consistência.",
    professional: "Barista e gestor de cafeteria",
    relatedPath: "/profissionais",
    media: { title: "Serviço", alt: "Barista servindo uma xícara de café", caption: "A xícara final também é uma experiência humana.", tone: "brew" }
  }
];
