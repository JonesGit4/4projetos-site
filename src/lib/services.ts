export interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  title: string;
  category: "regularizacao" | "engenharia";
  description: string;
  icon: string;
  isSubService?: boolean;
  parentSlug?: string;
  steps?: ServiceStep[];
  complementary?: string[]; // slugs of complementary services
  obs?: string;
}

const defaultSteps: ServiceStep[] = [
  { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
  { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com prazos, escopo e valores transparentes." },
  { step: "03", title: "Execução", desc: "Equipe técnica desenvolve o trabalho com acompanhamento contínuo." },
  { step: "04", title: "Entrega", desc: "Documentação completa e acompanhamento até aprovação final." },
];

export const services: Service[] = [
  // ═══════════════════════════════════════════
  // REGULARIZAÇÃO
  // ═══════════════════════════════════════════
  {
    slug: "habite-se",
    title: "Legalização de Construção / Habite-se",
    category: "regularizacao",
    description:
      "Legalização de construções já executadas perante a prefeitura municipal, com a finalidade de obtenção do Habite-se. Cuidamos de toda a documentação, elaboramos os projetos necessários e acompanhamos o processo junto a prefeitura.",
    icon: "FileCheck",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve realiza o levantamento da edificação e elabora os projetos técnicos para protocolo nos órgãos correspondentes, realiza o acompanhamento contínuo até a emissão do Habite-se." },
      { step: "04", title: "Entrega", desc: "Após a aprovação do município, entrega da documentação completa (projetos aprovados, alvarás, certidões, Habite-se) possibilitando posterior averbação da edificação na matrícula correspondente junto ao Registro de Imóveis." },
    ],
    complementary: ["averbacao", "inss-obra", "projeto-arquitetonico", "projeto-hidrossanitario", "ppci", "condominio"],
  },
  {
    slug: "reurb",
    title: "REURB",
    category: "regularizacao",
    description:
      "Regularização fundiária urbana através do programa Meu Bairro Regular da Prefeitura Municipal de Florianópolis, com objetivo da obtenção da CRF (Certidão de Regularização Fundiária) e abertura de matrícula no cartório de registro de imóveis. Elaboramos plantas, levantamentos, documentações e acompanhamento completo.",
    icon: "Scale",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve os levantamentos e elabora as plantas, solicita os documentos necessários, e realiza o protocolo, acompanhando continuamente, solicitando por fim a abertura da matrícula junto ao Registro de Imóveis." },
      { step: "04", title: "Entrega", desc: "Documentação completa e acompanhamento até abertura da matrícula." },
    ],
    complementary: ["topografia", "habite-se", "condominio"],
  },
  {
    slug: "estremacao",
    title: "Estremação",
    category: "regularizacao",
    description:
      "Processo para geração de matrícula individualizada de fração ideal registrada em uma matrícula de gleba maior. Ideal para quem adquiriu uma fração ideal dentro de uma matrícula e quer individualizá-la sem precisar realizar o desmembramento.",
    icon: "Landmark",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica realiza os levantamentos, elabora as plantas necessárias e solicita a anuência da prefeitura à estremação. Após isso, junto ao Tabelionato de Notas, realiza a Escritura Pública de Estremação com o posterior registro junto ao Registro de Imóveis e abertura da matrícula da fração ideal estremada. Acompanhamento técnico contínuo." },
      { step: "04", title: "Entrega", desc: "Matrícula individualizada da fração ideal." },
    ],
    complementary: ["topografia", "retificacao-matricula", "habite-se", "condominio"],
  },
  {
    slug: "inss-obra",
    title: "INSS de Obra",
    category: "regularizacao",
    description:
      "Regularização do INSS da obra junto à Receita Federal. Calculamos e gerenciamos o recolhimento, evitando multas e pendências fiscais.",
    icon: "Receipt",
    obs: "Obras concluídas a mais de 5 anos o imposto é decadente.",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica realiza o cadastro da obra junto ao CNO (Cadastro Nacional de Obras) com a posterior aferição e emissão da guia de pagamento." },
      { step: "04", title: "Entrega", desc: "Após a quitação do INSS (ou se for decadente, após a aferição) a Certidão Negativa de Débitos da Receita Federal, sendo um dos documentos necessários para a averbação da edificação." },
    ],
    complementary: ["averbacao", "danc"],
  },
  {
    slug: "averbacao",
    title: "Averbação de Construção",
    category: "regularizacao",
    description:
      "Averbação de construção na matrícula do terreno junto ao Cartório de Registro de Imóveis. Atualizamos a documentação para refletir a realidade construída.",
    icon: "BookOpen",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve a juntada da documentação, protocola e realiza o acompanhamento junto ao Registro de Imóveis." },
      { step: "04", title: "Entrega", desc: "Matrícula do Imóvel constando a averbação da área construída da edificação." },
    ],
    complementary: ["habite-se", "inss-obra", "condominio", "retificacao-matricula"],
  },
  {
    slug: "incorporacao",
    title: "Incorporação Imobiliária",
    category: "regularizacao",
    description:
      "Incorporação de edificação a ser construída, possibilitando alienação de frações ideais (venda de unidades a serem construídas). Processo completo para viabilizar a venda de imóveis na planta.",
    icon: "Building2",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve os memoriais, tabelas e demais documentos necessários com base no projeto arquitetônico aprovado e realiza o protocolo com acompanhamento contínuo junto ao Cartório de Registro de Imóveis." },
      { step: "04", title: "Entrega", desc: "Registro da Incorporação na Matrícula do Imóvel, possibilitando a venda das unidades em planta." },
    ],
    complementary: ["condominio", "aprovacao-projetos", "retificacao", "retificacao-matricula"],
  },
  {
    slug: "condominio",
    title: "Instituição de Condomínio",
    category: "regularizacao",
    description:
      "Instituição de condomínio junto ao registro de imóveis, possibilitando abertura de matrícula para cada unidade imobiliária. Também realizamos retificações de condomínios já instituídos.",
    icon: "Building",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve os memoriais, tabelas, convenção de condomínio e demais documentos necessários com base no projeto arquitetônico aprovado (e no memorial de incorporação, caso a obra tenha sido incorporada) e realiza o protocolo com acompanhamento contínuo junto ao Cartório de Registro de Imóveis." },
      { step: "04", title: "Entrega", desc: "Registro da Instituição de Condomínio na Matrícula do Imóvel, registro da Convenção de Condomínio e matrículas individualizadas das unidades imobiliárias." },
    ],
    complementary: ["habite-se", "estremacao", "reurb", "atribuicao-propriedade"],
  },
  {
    slug: "retificacao",
    title: "Retificação de Área",
    category: "regularizacao",
    description:
      "Retificação das dimensões constantes na matrícula do imóvel, corrigindo as informações conforme a configuração real do terreno, atingimento viário e confrontantes.",
    icon: "Ruler",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica realiza o levantamento e elabora as plantas necessárias com protocolo e acompanhamento contínuo junto ao Registro de Imóveis." },
      { step: "04", title: "Entrega", desc: "Matrícula atualizada conforme a configuração real do terreno." },
    ],
    complementary: ["topografia", "retificacao-matricula", "habite-se", "condominio"],
  },

  // ═══════════════════════════════════════════
  // ENGENHARIA
  // ═══════════════════════════════════════════
  {
    slug: "aprovacao-projetos",
    title: "Aprovação de Projetos",
    category: "engenharia",
    description:
      "Aprovação de projetos de construção perante a prefeitura municipal para obtenção do alvará de construção. Elaboramos os projetos e fazemos todo o acompanhamento e aprovação.",
    icon: "ClipboardCheck",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve os projetos necessários conforme a legislação municipal e realiza o protocolo para aprovação junto ao município." },
      { step: "04", title: "Entrega", desc: "Alvará de construção, possibilitando o início da obra." },
    ],
    complementary: ["topografia", "projeto-arquitetonico", "projeto-hidrossanitario", "ppci", "projeto-eletrico", "projeto-estrutural", "habite-se"],
  },
  {
    slug: "projeto-arquitetonico",
    title: "Projeto Arquitetônico",
    category: "engenharia",
    description:
      "Projetos arquitetônicos completos — executivo e legal — para construção, reforma e ampliação. Do estudo preliminar ao executivo, com soluções funcionais e estéticas.",
    icon: "PenTool",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve projetos de acordo com as necessidades do cliente (estilo, orçamento, materiais, etc) com posterior aprovação nos órgãos competentes, caso necessário." },
      { step: "04", title: "Entrega", desc: "Projeto arquitetônico executivo e/ou legal." },
    ],
    complementary: ["aprovacao-projetos", "topografia", "habite-se", "projeto-hidrossanitario", "projeto-eletrico", "ppci"],
  },
  {
    slug: "projeto-hidrossanitario",
    title: "Projeto Hidrossanitário",
    category: "engenharia",
    description:
      "Projeto das instalações hidráulicas e sanitárias para edificações — executivo e legal. Dimensionamento de sistemas de água fria, quente, esgoto e águas pluviais.",
    icon: "Droplets",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve os projetos conforme as normas técnicas com base no projeto arquitetônico e necessidades do cliente." },
      { step: "04", title: "Entrega", desc: "Projeto Hidrossanitário executivo e/ou legal (modelo padrão simplificado exigido pela prefeitura para aprovação)." },
    ],
    complementary: ["habite-se", "projeto-arquitetonico", "ppci", "aprovacao-projetos"],
  },
  {
    slug: "projeto-estrutural",
    title: "Projeto Estrutural",
    category: "engenharia",
    description:
      "Dimensionamento das estruturas de edificações projetadas em concreto armado, aço ou madeira. Segurança e economia com dimensionamento otimizado.",
    icon: "Blocks",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve o projeto conforme as normas técnicas com base no projeto arquitetônico, buscando a compatibilidade com os demais projetos executivos." },
      { step: "04", title: "Entrega", desc: "Projeto Estrutural da edificação." },
    ],
    complementary: ["projeto-arquitetonico", "projeto-hidrossanitario", "projeto-eletrico", "ppci"],
  },
  {
    slug: "projeto-eletrico",
    title: "Projeto Elétrico / Redes",
    category: "engenharia",
    description:
      "Projeto das instalações elétricas e de redes da edificação. Dimensionamento de circuitos, quadros e proteções conforme normas ABNT e concessionária.",
    icon: "Zap",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve o projeto elétrico conforme normas técnicas com base no projeto arquitetônico e necessidades do cliente. Caso necessário realiza a aprovação junto a concessionária (CELESC)." },
      { step: "04", title: "Entrega", desc: "Projeto Elétrico completo e, caso necessário, aprovação junto a concessionária." },
    ],
    complementary: ["projeto-arquitetonico", "projeto-hidrossanitario", "habite-se", "ppci"],
  },
  {
    slug: "ppci",
    title: "PPCI — Prevenção Contra Incêndio",
    category: "engenharia",
    description:
      "Projeto com sistemas preventivos contra incêndio e pânico: rotas de fuga, reserva técnica, hidrantes, extintores, sinalização e mais. Conforme exigências do Corpo de Bombeiros.",
    icon: "ShieldCheck",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve o projeto conforme as normas do CBMSC, realizando o protocolo e acompanhamento para aprovação." },
      { step: "04", title: "Entrega", desc: "Aprovação do PPCI junto ao CBMSC." },
    ],
    complementary: ["aprovacao-projetos", "habite-se", "projeto-arquitetonico", "projeto-hidrossanitario", "projeto-eletrico"],
  },
  {
    slug: "projeto-luminotecnico",
    title: "Projeto Luminotécnico",
    category: "engenharia",
    description:
      "Projeto das instalações luminotécnicas considerando iluminação natural e artificial, automação, eficiência estética, energética e conforto visual.",
    icon: "Lightbulb",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve os projetos conforme as normas técnicas da ABNT e com base no projeto arquitetônico e necessidades do cliente." },
      { step: "04", title: "Entrega", desc: "Projeto Luminotécnico completo." },
    ],
    complementary: ["projeto-arquitetonico", "projeto-hidrossanitario", "projeto-eletrico", "projeto-acustico", "projeto-termico"],
  },
  {
    slug: "projeto-acustico",
    title: "Projeto Acústico",
    category: "engenharia",
    description:
      "Planejamento técnico para controlar o comportamento do som em edificações, visando conforto auditivo, privacidade e desempenho sonoro específico.",
    icon: "Volume2",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve os projetos conforme as normas técnicas da ABNT e com base no projeto arquitetônico e necessidades do cliente." },
      { step: "04", title: "Entrega", desc: "Projeto Acústico Completo." },
    ],
    complementary: ["projeto-arquitetonico", "projeto-hidrossanitario", "projeto-eletrico", "projeto-luminotecnico", "projeto-termico"],
  },
  {
    slug: "projeto-termico",
    title: "Projeto Térmico",
    category: "engenharia",
    description:
      "Planejamento técnico para garantir temperaturas internas agradáveis, minimizando a necessidade de ar-condicionado ou aquecedores. Conforme NBR 15575.",
    icon: "Thermometer",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve os projetos conforme as normas técnicas da ABNT e com base no projeto arquitetônico e necessidades do cliente." },
      { step: "04", title: "Entrega", desc: "Projeto Térmico completo." },
    ],
    complementary: ["projeto-arquitetonico", "projeto-hidrossanitario", "projeto-eletrico", "projeto-acustico", "projeto-luminotecnico"],
  },
  {
    slug: "projeto-interiores",
    title: "Projeto de Interiores",
    category: "engenharia",
    description:
      "Planejamento técnico e estético dos espaços internos. Mudanças arquitetônicas, iluminação, pontos hidráulicos e ergonomia para ambientes funcionais e agradáveis.",
    icon: "Sofa",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve os projetos com base no projeto arquitetônico e necessidades do cliente." },
      { step: "04", title: "Entrega", desc: "Projeto de Interiores completo." },
    ],
    complementary: ["projeto-arquitetonico", "projeto-luminotecnico", "projeto-acustico", "projeto-termico"],
  },
  {
    slug: "topografia",
    title: "Levantamento Topográfico",
    category: "engenharia",
    description:
      "Levantamento planimétrico ou planialtimétrico georreferenciado de terrenos, lotes e glebas com equipamentos de precisão.",
    icon: "Map",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica realiza o levantamento in loco e elabora as plantas e memoriais necessários." },
      { step: "04", title: "Entrega", desc: "Levantamento Topográfico, Memorial Descritivo, ART." },
    ],
    complementary: ["parcelamento-solo", "retificacao", "estremacao", "reurb"],
  },
  {
    slug: "estudo-viabilidade",
    title: "Estudo de Viabilidade",
    category: "engenharia",
    description:
      "Estudos técnicos para a construção civil conforme demanda. Análise de viabilidade construtiva e legal para seu empreendimento.",
    icon: "Search",
    steps: [
      { step: "01", title: "Consulta Inicial", desc: "Analisamos sua documentação e entendemos suas necessidades." },
      { step: "02", title: "Proposta Técnica", desc: "Orçamento detalhado com estimativa de custas, escopo e valores transparentes." },
      { step: "03", title: "Execução", desc: "Equipe técnica desenvolve o estudo de viabilidade conforme a legislação municipal considerando o zoneamento, incentivos urbanísticos, tamanho do lote, atingimento viário, etc." },
      { step: "04", title: "Entrega", desc: "Estudo de viabilidade completo demonstrando o potencial construtivo com sugestões para o melhor aproveitamento no empreendimento." },
    ],
    complementary: ["incorporacao", "condominio", "topografia", "retificacao", "estremacao"],
  },

  // ═══════════════════════════════════════════
  // SERVIÇOS SEM DETALHE COMPLETO NO DOCUMENTO
  // (mencionados como complementares)
  // ═══════════════════════════════════════════
  {
    slug: "danc",
    title: "DANC",
    category: "regularizacao",
    description:
      "Declaração e Acompanhamento Nacional de Obra junto aos órgãos competentes. Apoio técnico completo para regularização e acompanhamento documental da sua obra.",
    icon: "FileText",
    complementary: ["inss-obra", "averbacao", "habite-se"],
  },
  {
    slug: "atribuicao-propriedade",
    title: "Atribuição de Propriedade",
    category: "regularizacao",
    description:
      "Processo de atribuição de propriedade para regularização de imóveis. Acompanhamento técnico e documental para formalização junto ao registro de imóveis.",
    icon: "UserCheck",
    complementary: ["condominio", "reurb", "habite-se"],
  },
  {
    slug: "retificacao-matricula",
    title: "Retificação de Matrícula",
    category: "regularizacao",
    description:
      "Correção de dados e informações constantes na matrícula do imóvel junto ao Cartório de Registro de Imóveis. Adequação do registro para refletir a situação real do imóvel.",
    icon: "FileEdit",
    complementary: ["retificacao", "averbacao", "habite-se", "condominio"],
  },

  // ═══════════════════════════════════════════
  // SUB-SERVIÇOS (mantidos)
  // ═══════════════════════════════════════════
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

export function getServiceSteps(service: Service): ServiceStep[] {
  return service.steps || defaultSteps;
}

export function getComplementaryServices(service: Service): Service[] {
  if (!service.complementary || service.complementary.length === 0) return [];
  return service.complementary
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => s !== undefined);
}

export const regularizacao = services.filter(
  (s) => s.category === "regularizacao" && !s.isSubService
);
export const engenharia = services.filter(
  (s) => s.category === "engenharia" && !s.isSubService
);
export const subServices = services.filter((s) => s.isSubService);
export const allMainServices = services.filter((s) => !s.isSubService);
