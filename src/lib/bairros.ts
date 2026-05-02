export interface Bairro {
  slug: string;
  name: string;
  region: string;
  description: string;
  zoning: string;
  highlights: string[];
  avgPriceM2: string;
  population: string;
  commonServices: string[];
  faqs: { q: string; a: string }[];
}

export const bairros: Bairro[] = [
  {
    slug: "centro",
    name: "Centro",
    region: "Ilha — Região Central",
    description:
      "O Centro de Florianópolis concentra grande parte dos imóveis comerciais e residenciais antigos da cidade. Muitas edificações históricas e prédios construídos antes do Plano Diretor vigente possuem pendências de regularização. A região é marcada por restrições de gabarito e normas específicas de preservação do patrimônio.",
    zoning: "Zona Mista Central (ZMC) com gabarito limitado a 12 pavimentos na maior parte. Áreas de Preservação Cultural (APC) exigem análise especial do SEPHAN para intervenções em imóveis tombados ou de entorno.",
    highlights: [
      "Alta concentração de imóveis comerciais e mistos",
      "Muitas edificações anteriores ao Plano Diretor de 2014",
      "Restrições de patrimônio histórico em áreas específicas",
      "Demanda frequente por mudança de uso (residencial → comercial)",
    ],
    avgPriceM2: "R$ 8.000 – R$ 14.000/m²",
    population: "~50.000 habitantes",
    commonServices: ["habite-se", "averbacao", "aprovacao-projetos", "retificacao", "incorporacao"],
    faqs: [
      {
        q: "Quanto custa regularizar um imóvel no Centro de Florianópolis?",
        a: "Os custos variam de R$ 7.000 a R$ 30.000, dependendo da complexidade. Imóveis comerciais e edificações em áreas de preservação podem exigir laudos adicionais, aumentando o valor.",
      },
      {
        q: "Imóveis tombados no Centro podem ser regularizados?",
        a: "Sim, mas exigem aprovação prévia do SEPHAN (Serviço do Patrimônio Histórico, Artístico e Natural). O projeto deve respeitar as características originais da edificação.",
      },
      {
        q: "Posso converter um imóvel residencial para comercial no Centro?",
        a: "Depende do zoneamento específico do lote. Na Zona Mista Central, a maioria dos imóveis permite uso misto. É necessário aprovação de projeto de mudança de uso na prefeitura.",
      },
    ],
  },
  {
    slug: "jurere",
    name: "Jurerê",
    region: "Ilha — Norte",
    description:
      "Jurerê, incluindo Jurerê Internacional, é uma das regiões mais valorizadas de Florianópolis. Com alto padrão construtivo, a demanda é por projetos arquitetônicos sofisticados e regularização de ampliações em casas de alto padrão. O bairro possui regras rígidas de urbanismo, especialmente em Jurerê Internacional, onde a associação de moradores impõe normas adicionais.",
    zoning: "Área de Urbanização Especial (AUE) com gabarito de 2 pavimentos na maior parte. Jurerê Internacional tem normas do LOTEAMENTO que se somam às municipais — afastamentos maiores, padrão arquitetônico controlado e aprovação pela associação de moradores.",
    highlights: [
      "Alto padrão construtivo — projetos arquitetônicos complexos",
      "Normas do loteamento Jurerê Internacional além das municipais",
      "Restrição de gabarito (2 pavimentos)",
      "Demanda por maquetes 3D e projetos de interiores de alto padrão",
    ],
    avgPriceM2: "R$ 15.000 – R$ 35.000/m²",
    population: "~12.000 habitantes",
    commonServices: ["projeto-arquitetonico", "aprovacao-projetos", "habite-se", "projeto-interiores", "maquete-3d"],
    faqs: [
      {
        q: "Quanto custa um projeto arquitetônico em Jurerê?",
        a: "Projetos em Jurerê variam de R$ 25 a R$ 50/m², considerando o padrão alto e as exigências adicionais do loteamento. Uma casa de 300m² pode custar de R$ 7.500 a R$ 15.000 apenas o projeto arquitetônico.",
      },
      {
        q: "Preciso de aprovação da associação de moradores em Jurerê Internacional?",
        a: "Sim. Além da aprovação da prefeitura, projetos em Jurerê Internacional precisam de aprovação da associação, que verifica afastamentos, gabarito, estilo arquitetônico e padrão construtivo.",
      },
      {
        q: "Posso construir mais de 2 andares em Jurerê?",
        a: "Na maior parte do bairro, o gabarito é de 2 pavimentos. Em áreas específicas do Plano Diretor pode haver exceções, mas a regra geral é restritiva para manter o padrão residencial horizontal.",
      },
    ],
  },
  {
    slug: "lagoa-da-conceicao",
    name: "Lagoa da Conceição",
    region: "Ilha — Leste",
    description:
      "A Lagoa da Conceição é um dos bairros mais procurados de Florianópolis, combinando natureza, comércio e vida noturna. A região possui muitos imóveis irregulares devido ao crescimento acelerado nas últimas décadas. Áreas de preservação permanente (APP) próximas à lagoa e dunas tornam a regularização mais complexa em alguns setores.",
    zoning: "Misto: Área Residencial Predominante (ARP), Área Mista de Serviços (AMS) e Área de Preservação Permanente (APP). Construções próximas à lagoa e dunas da Joaquina exigem licenciamento ambiental do IMA/SC.",
    highlights: [
      "Crescimento acelerado com muitas construções irregulares",
      "Presença de APP (lagoa, dunas, morros) — licenciamento ambiental",
      "Mix de uso: residencial, comercial e turístico",
      "Demanda forte por REURB em ocupações consolidadas",
    ],
    avgPriceM2: "R$ 9.000 – R$ 18.000/m²",
    population: "~30.000 habitantes",
    commonServices: ["habite-se", "reurb", "averbacao", "projeto-arquitetonico", "topografia"],
    faqs: [
      {
        q: "Posso regularizar um imóvel próximo à Lagoa da Conceição?",
        a: "Depende da localização exata. Imóveis em APP (Área de Preservação Permanente) têm restrições adicionais. Construções consolidadas antes de 2008 podem ser elegíveis à REURB. É essencial um diagnóstico técnico para avaliar cada caso.",
      },
      {
        q: "Construções na Lagoa precisam de licença ambiental?",
        a: "Em muitos casos, sim. Imóveis próximos à lagoa, dunas ou em encostas podem exigir licenciamento ambiental junto ao IMA/SC (Instituto do Meio Ambiente de SC) ou à FLORAM (órgão ambiental municipal).",
      },
      {
        q: "Quanto tempo leva a regularização na Lagoa da Conceição?",
        a: "O prazo varia de 4 a 12 meses. Casos que envolvem licenciamento ambiental podem levar mais tempo. REURB em áreas consolidadas tem prazo de 6 a 12 meses.",
      },
    ],
  },
  {
    slug: "campeche",
    name: "Campeche",
    region: "Ilha — Sul",
    description:
      "O Campeche é uma das regiões de maior crescimento de Florianópolis nas últimas duas décadas. O bairro passou por urbanização acelerada, com muitas construções erguidas sem alvará ou Habite-se. A proximidade com áreas de preservação (dunas e restinga) e a infraestrutura viária em desenvolvimento tornam a regularização um tema recorrente na região.",
    zoning: "Predominantemente Área Residencial Predominante (ARP-3 e ARP-5), com Áreas de Preservação de Uso Limitado (APL) nas encostas e Área de Preservação Permanente (APP) nas dunas. Gabarito predominante de 2 pavimentos.",
    highlights: [
      "Região de maior crescimento urbano nas últimas 2 décadas",
      "Alta incidência de construções sem Habite-se",
      "Proximidade com APP de dunas e restinga",
      "Forte demanda por Habite-se e averbação",
    ],
    avgPriceM2: "R$ 7.000 – R$ 13.000/m²",
    population: "~35.000 habitantes",
    commonServices: ["habite-se", "averbacao", "inss-obra", "projeto-arquitetonico", "reurb"],
    faqs: [
      {
        q: "Por que tantos imóveis no Campeche são irregulares?",
        a: "O Campeche cresceu muito rápido nas últimas décadas, antes que a infraestrutura e a fiscalização acompanhassem. Muitas casas foram construídas sem alvará, especialmente em loteamentos informais. Programas como o Floripa Regular facilitam a regularização.",
      },
      {
        q: "Posso construir no Campeche próximo às dunas?",
        a: "Não nas áreas de APP (dunas e restinga). Imóveis já construídos nessas áreas dependem de análise caso a caso, podendo ser elegíveis à REURB se a ocupação for anterior a 2008.",
      },
      {
        q: "Quanto custa regularizar uma casa no Campeche?",
        a: "Para uma casa padrão de 100-200m², o custo total (engenharia + taxas + INSS + cartório) varia de R$ 8.000 a R$ 25.000. O INSS de obra costuma ser o maior componente.",
      },
    ],
  },
  {
    slug: "trindade",
    name: "Trindade",
    region: "Ilha — Região Central",
    description:
      "A Trindade é um bairro predominantemente residencial, fortemente influenciado pela proximidade com a UFSC (Universidade Federal de Santa Catarina). A região tem muitos imóveis antigos que precisam de regularização, além de demanda crescente por projetos de edificações multifamiliares para locação estudantil.",
    zoning: "Área Residencial Predominante (ARP) com trechos de Área Mista de Serviços (AMS) nas vias principais. Gabarito varia de 4 a 8 pavimentos conforme o zoneamento do lote.",
    highlights: [
      "Proximidade com a UFSC — forte mercado de locação",
      "Demanda por incorporações e edifícios multifamiliares",
      "Imóveis antigos com necessidade de regularização",
      "Ruas com zoneamento misto permitem uso comercial",
    ],
    avgPriceM2: "R$ 7.000 – R$ 12.000/m²",
    population: "~25.000 habitantes",
    commonServices: ["habite-se", "incorporacao", "aprovacao-projetos", "projeto-estrutural", "projeto-arquitetonico"],
    faqs: [
      {
        q: "Vale a pena incorporar um edifício na Trindade?",
        a: "Sim. A demanda por locação é alta devido à UFSC. O zoneamento permite edifícios de 4 a 8 pavimentos em muitos lotes, tornando viável a incorporação de prédios residenciais multifamiliares. Um estudo de viabilidade é o primeiro passo.",
      },
      {
        q: "Posso abrir um comércio em imóvel residencial na Trindade?",
        a: "Depende do zoneamento do lote. Nas vias principais (como a Rua Lauro Linhares), o zoneamento AMS permite uso misto. Em ruas internas com zoneamento ARP, é necessário verificar a possibilidade de mudança de uso.",
      },
      {
        q: "Quanto custa um projeto de incorporação na Trindade?",
        a: "O custo depende do porte do empreendimento. Para um prédio de 8 a 20 unidades, o investimento em projetos (arquitetônico, estrutural, complementares) varia de R$ 50.000 a R$ 150.000, mais custos de registro de incorporação.",
      },
    ],
  },
  {
    slug: "coqueiros",
    name: "Coqueiros",
    region: "Continente",
    description:
      "Coqueiros é um dos bairros mais tradicionais do continente de Florianópolis, com vista privilegiada para a Baía Sul e a Ponte Hercílio Luz. A região vem se valorizando rapidamente, com novos empreendimentos e muitos imóveis antigos sendo regularizados para venda ou renovação.",
    zoning: "Área Residencial Predominante (ARP) e Área Mista de Serviços (AMS) nas vias principais. Gabarito de até 12 pavimentos em alguns setores. Área de Preservação de Uso Limitado (APL) nos morros.",
    highlights: [
      "Valorização acelerada — vista para Baía Sul e Ponte Hercílio Luz",
      "Novos empreendimentos de médio e alto padrão",
      "Imóveis antigos com grande potencial de regularização e valorização",
      "Boa infraestrutura e acessibilidade ao centro",
    ],
    avgPriceM2: "R$ 8.000 – R$ 15.000/m²",
    population: "~20.000 habitantes",
    commonServices: ["habite-se", "averbacao", "projeto-arquitetonico", "estudo-viabilidade", "incorporacao"],
    faqs: [
      {
        q: "Quanto um imóvel em Coqueiros valoriza após a regularização?",
        a: "Considerando a valorização do bairro, imóveis regularizados em Coqueiros podem valer 30-40% mais que irregulares. Com o m² entre R$ 8.000 e R$ 15.000, a regularização de um apartamento de 80m² pode representar ganho de R$ 200.000 ou mais.",
      },
      {
        q: "É possível construir prédios altos em Coqueiros?",
        a: "Em alguns setores, sim. O zoneamento permite até 12 pavimentos nas vias principais. Nas áreas residenciais internas, o gabarito é menor (4-6 pavimentos). Um estudo de viabilidade é essencial para avaliar o potencial construtivo do terreno.",
      },
      {
        q: "Imóveis nos morros de Coqueiros podem ser regularizados?",
        a: "Depende da situação. Imóveis em APL (Área de Preservação de Uso Limitado) têm restrições, mas construções consolidadas podem ser regularizadas com licenciamento ambiental. Cada caso precisa de análise individual.",
      },
    ],
  },
];
