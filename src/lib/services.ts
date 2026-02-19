export interface Service {
  slug: string;
  title: string;
  category: "regularizacao" | "engenharia";
  description: string;
  icon: string;
  isSubService?: boolean;
  parentSlug?: string;
}

export const services: Service[] = [
  // REGULARIZAÇÃO
  {
    slug: "habite-se",
    title: "Habite-se",
    category: "regularizacao",
    description:
      "Obtenha o Habite-se da sua edificação junto à prefeitura. Garantimos que toda a documentação e os requisitos técnicos sejam atendidos para a emissão do alvará de ocupação.",
    icon: "FileCheck",
  },
  {
    slug: "reurb",
    title: "REURB",
    category: "regularizacao",
    description:
      "Regularização Fundiária Urbana conforme a Lei 13.465/2017. Transformamos posse em propriedade legal, resolvendo pendências documentais e registrais do seu imóvel.",
    icon: "Scale",
  },
  {
    slug: "estremacao",
    title: "Estremação",
    category: "regularizacao",
    description:
      "Processo de individualização de lote em condomínio irregular. Realizamos todo o procedimento administrativo para registrar seu terreno de forma independente.",
    icon: "Landmark",
  },
  {
    slug: "inss-obra",
    title: "INSS Obra",
    category: "regularizacao",
    description:
      "Regularização da matrícula CEI/CNO junto à Receita Federal. Calculamos e gerenciamos o recolhimento do INSS sobre a obra, evitando multas e pendências fiscais.",
    icon: "Receipt",
  },
  {
    slug: "averbacao",
    title: "Averbação",
    category: "regularizacao",
    description:
      "Averbação de construção na matrícula do imóvel junto ao Cartório de Registro. Atualizamos a documentação para refletir a realidade construída.",
    icon: "BookOpen",
  },
  {
    slug: "incorporacao",
    title: "Incorporação Imobiliária",
    category: "regularizacao",
    description:
      "Memorial de incorporação para empreendimentos imobiliários. Elaboramos toda a documentação técnica e jurídica para viabilizar a venda de unidades autônomas na planta.",
    icon: "Building2",
  },
  {
    slug: "condominio",
    title: "Instituição de Condomínio",
    category: "regularizacao",
    description:
      "Instituição e especificação de condomínio edilício. Criamos as frações ideais, convenção e memorial descritivo para registro de cada unidade autônoma.",
    icon: "Building",
  },
  {
    slug: "retificacao",
    title: "Retificação de Área",
    category: "regularizacao",
    description:
      "Correção de área e medidas na matrícula do imóvel. Realizamos o levantamento técnico e o processo administrativo ou judicial para adequar o registro à realidade.",
    icon: "Ruler",
  },

  // ENGENHARIA
  {
    slug: "projeto-arquitetonico",
    title: "Projeto Arquitetônico",
    category: "engenharia",
    description:
      "Projetos arquitetônicos completos para construção, reforma e ampliação. Do estudo preliminar ao executivo, com soluções funcionais e estéticas para cada necessidade.",
    icon: "PenTool",
  },
  {
    slug: "projeto-hidrossanitario",
    title: "Projeto Hidrossanitário",
    category: "engenharia",
    description:
      "Dimensionamento de sistemas de água fria, quente, esgoto e águas pluviais. Garantimos eficiência hidráulica e conformidade com as normas técnicas.",
    icon: "Droplets",
  },
  {
    slug: "projeto-estrutural",
    title: "Projeto Estrutural",
    category: "engenharia",
    description:
      "Cálculo e detalhamento estrutural em concreto armado, aço ou madeira. Segurança e economia com dimensionamento otimizado para sua edificação.",
    icon: "Blocks",
  },
  {
    slug: "projeto-eletrico",
    title: "Projeto Elétrico",
    category: "engenharia",
    description:
      "Projeto de instalações elétricas residenciais, comerciais e industriais. Dimensionamento de circuitos, quadros e proteções conforme normas da ABNT e concessionária.",
    icon: "Zap",
  },
  {
    slug: "ppci",
    title: "PPCI — Prevenção Contra Incêndio",
    category: "engenharia",
    description:
      "Projeto de Prevenção Contra Incêndio e Pânico conforme exigências do Corpo de Bombeiros. Extintores, hidrantes, saídas de emergência e sinalização.",
    icon: "ShieldCheck",
  },
  {
    slug: "projeto-luminotecnico",
    title: "Projeto Luminotécnico",
    category: "engenharia",
    description:
      "Projeto de iluminação para ambientes internos e externos. Conforto visual, eficiência energética e valorização dos espaços com cálculos fotométricos precisos.",
    icon: "Lightbulb",
  },
  {
    slug: "projeto-acustico",
    title: "Projeto Acústico",
    category: "engenharia",
    description:
      "Tratamento e isolamento acústico para edificações. Análise de ruídos, especificação de materiais e soluções construtivas para conforto sonoro.",
    icon: "Volume2",
  },
  {
    slug: "projeto-termico",
    title: "Projeto Térmico",
    category: "engenharia",
    description:
      "Desempenho térmico de edificações conforme NBR 15575. Simulações de conforto, especificação de isolantes e soluções para eficiência energética.",
    icon: "Thermometer",
  },
  {
    slug: "topografia",
    title: "Topografia",
    category: "engenharia",
    description:
      "Levantamentos topográficos e planialtimétricos com equipamentos de precisão. Georreferenciamento, demarcação de terrenos e apoio a projetos de engenharia.",
    icon: "Map",
  },
  // Sub-services (appear as content within parent pages + in menu)
  {
    slug: "maquete-3d",
    title: "Maquete Eletrônica 3D",
    category: "engenharia",
    description:
      "Visualização tridimensional realista do seu projeto. Maquetes eletrônicas que permitem explorar cada detalhe antes da construção iniciar.",
    icon: "Box",
    isSubService: true,
    parentSlug: "projeto-arquitetonico",
  },
  {
    slug: "design-interiores",
    title: "Design de Interiores",
    category: "engenharia",
    description:
      "Projetos de interiores que aliam funcionalidade e estética. Especificação de materiais, layout de mobiliário e acabamentos personalizados.",
    icon: "Sofa",
    isSubService: true,
    parentSlug: "projeto-arquitetonico",
  },
  {
    slug: "parcelamento-solo",
    title: "Parcelamento de Solo",
    category: "engenharia",
    description:
      "Projetos de loteamento e desmembramento de glebas. Atendemos todas as exigências urbanísticas e ambientais para aprovação junto aos órgãos competentes.",
    icon: "Grid3x3",
    isSubService: true,
    parentSlug: "topografia",
  },
  {
    slug: "levantamento-cadastral",
    title: "Levantamento Cadastral",
    category: "engenharia",
    description:
      "Levantamento detalhado de edificações existentes com medições in loco. Plantas as-built para regularização, reforma ou ampliação.",
    icon: "ScanLine",
    isSubService: true,
    parentSlug: "topografia",
  },
];

export const regularizacao = services.filter(
  (s) => s.category === "regularizacao"
);
export const engenharia = services.filter(
  (s) => s.category === "engenharia" && !s.isSubService
);
export const subServices = services.filter((s) => s.isSubService);
export const allMainServices = services.filter((s) => !s.isSubService);
