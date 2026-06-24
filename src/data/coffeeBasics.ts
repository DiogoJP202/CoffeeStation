import type { ConceptBlock } from "./types";

export const coffeeBasics: ConceptBlock[] = [
  {
    id: "o-que-e-cafe",
    eyebrow: "Base",
    title: "O que é café",
    body: "Café é a bebida preparada a partir das sementes torradas do fruto do cafeeiro. A xícara carrega espécie, variedade, altitude, solo, clima, colheita, processamento, torra, moagem e preparo.",
    bullets: ["Bebida agrícola", "Produto cultural", "Experiência sensorial"],
    media: {
      title: "Sementes torradas",
      alt: "Grãos de café torrados vistos de perto",
      caption: "O grão que chega ao moedor começou como semente dentro de um fruto.",
      tone: "beans"
    }
  },
  {
    id: "historia",
    eyebrow: "História",
    title: "Da Etiópia às cafeterias",
    body: "A história do café costuma ser associada à Etiópia. O consumo se espalhou pelo mundo árabe, chegou à Europa, atravessou rotas comerciais e se tornou uma bebida social, econômica e cultural.",
    bullets: ["Origem associada à Etiópia", "Cafeterias como espaços de conversa", "Brasil como protagonista mundial"],
    media: {
      title: "Cafeteria como espaço social",
      alt: "Ambiente de cafeteria usado para estudo e conversa",
      caption: "Cafeterias ajudaram a transformar o café em rito de encontro, leitura e trabalho.",
      tone: "brew"
    }
  },
  {
    id: "cultura",
    eyebrow: "Cultura",
    title: "O café como hábito e linguagem",
    body: "O café aparece em casas, escritórios, estudos, encontros e rituais sociais. Ele pode ser simples no hábito, mas complexo quando olhamos origem, técnica e sensorial.",
    bullets: ["Ritual cotidiano", "Hospitalidade", "Identidade regional"],
    media: {
      title: "Mesa de estudo",
      alt: "Xícara de café ao lado de caderno de estudo",
      caption: "A nova plataforma trata café como estudo aberto, não como produto fechado.",
      src: "/images/coffee-hero.webp",
      tone: "brew"
    }
  },
  {
    id: "planta",
    eyebrow: "Botânica",
    title: "A planta do cafeeiro",
    body: "O cafeeiro é uma planta tropical que produz frutos conhecidos como cerejas. A qualidade começa antes da torra, com genética, solo, altitude, clima, manejo, maturação e colheita.",
    bullets: ["Cereja de café", "Semente", "Manejo agrícola"],
    media: {
      title: "Cerejas de café",
      alt: "Cerejas de café maduras em uma planta",
      caption: "O ponto de maturação influencia doçura, adstringência e equilíbrio.",
      tone: "farm"
    }
  },
  {
    id: "arabica-canephora",
    eyebrow: "Espécies",
    title: "Arábica, Canephora, Robusta e Conilon",
    body: "Arábica costuma ser associado a complexidade, acidez elegante e aromas delicados. Canephora, que inclui robusta e conilon, tende a entregar resistência, corpo, intensidade e crema.",
    bullets: ["Arábica: floral, frutado, delicado", "Canephora: corpo, potência, cafeína", "Qualidade depende de cuidado, não só da espécie"],
    media: {
      title: "Espécies e variedades",
      alt: "Comparativo visual entre grãos de diferentes cafés",
      caption: "Espécie, variedade e terroir ajudam a formar a identidade da bebida.",
      tone: "beans"
    }
  },
  {
    id: "terroir",
    eyebrow: "Origem",
    title: "Terroir e variedades",
    body: "Terroir reúne solo, altitude, clima, umidade, sombra, variedade, manejo e tradição local. Dois cafés da mesma espécie podem ter sabores muito diferentes se vierem de regiões distintas.",
    bullets: ["Solo e altitude", "Clima e chuva", "Tradição local"],
    media: {
      title: "Mapa sensorial de origem",
      alt: "Mapa estilizado de regiões produtoras de café",
      caption: "Origens únicas permitem estudar a identidade de uma região, fazenda ou microlote.",
      tone: "map"
    }
  },
  {
    id: "especial",
    eyebrow: "Qualidade",
    title: "Café especial",
    body: "Café especial envolve qualidade, rastreabilidade, cuidado, poucos defeitos, torra adequada e bebida limpa, equilibrada e expressiva. Não é apenas café caro ou gourmet.",
    bullets: ["Origem identificável", "Bebida limpa", "Valorização da cadeia"],
    media: {
      title: "Controle de qualidade",
      alt: "Amostras de café organizadas para avaliação sensorial",
      caption: "Rastreabilidade ajuda a conectar xícara, lote, produtor e processo.",
      tone: "tools"
    }
  },
  {
    id: "sensorial",
    eyebrow: "Sensorial",
    title: "Sabor e leitura de xícara",
    body: "O sabor do café é formado por aroma, acidez, doçura, corpo, amargor e finalização. A boa leitura ajuda a ajustar preparo e entender origem.",
    bullets: ["Aroma", "Acidez", "Doçura", "Corpo", "Finalização"],
    media: {
      title: "Cupping sensorial",
      alt: "Xícaras de prova para avaliação de café",
      caption: "Provar com atenção transforma 'forte ou fraco' em uma leitura mais precisa.",
      tone: "tools"
    }
  }
];

export const sensoryCards = [
  { title: "Aroma", text: "Percepção pelo olfato: chocolate, frutas, flores, especiarias, castanhas, mel ou fermentados." },
  { title: "Acidez", text: "Vivacidade e brilho. Uma boa acidez pode lembrar cítricos, maçã, frutas vermelhas ou vinho." },
  { title: "Doçura", text: "Sensação desejada que pode lembrar caramelo, mel, melaço, chocolate ou fruta madura." },
  { title: "Corpo", text: "Peso e textura na boca: leve, médio, encorpado, cremoso ou aveludado." },
  { title: "Amargor", text: "Faz parte do café, mas em excesso pode indicar torra escura ou extração exagerada." },
  { title: "Finalização", text: "Sabor que permanece depois do gole: curto, longo, doce, seco, limpo ou complexo." }
];

export const marketTypes = [
  { title: "Tradicional", text: "Prioriza custo, intensidade e padronização; pode ter torra mais escura e amargor mais evidente." },
  { title: "Superior ou premium", text: "Costuma ter seleção melhor de grãos e bebida mais equilibrada que cafés tradicionais." },
  { title: "Gourmet", text: "Associado a grãos e torra mais cuidadosos, embora o termo varie bastante entre marcas." },
  { title: "Especial", text: "Foco em qualidade, rastreabilidade, avaliação sensorial, origem e bebida limpa." }
];
