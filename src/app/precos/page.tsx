import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Preços de Projetos e Regularização | 4Projetos Florianópolis",
  description:
    "Confira valores de referência para projetos arquitetônicos, estruturais, Habite-se, REURB e mais em Florianópolis. Orçamento personalizado gratuito.",
  keywords: [
    "preço projeto arquitetônico Florianópolis",
    "quanto custa regularizar imóvel",
    "preço habite-se",
    "preço reurb",
    "preço engenheiro florianópolis",
  ],
  alternates: { canonical: "https://4projetos.com.br/precos" },
};

const pricingRegularizacao = [
  {
    service: "Habite-se",
    slug: "habite-se",
    range: "R$ 3.000 – R$ 15.000",
    detail: "Varia conforme m² e complexidade",
    includes: ["Levantamento cadastral", "Projetos técnicos", "Protocolo na prefeitura", "Acompanhamento até emissão"],
  },
  {
    service: "REURB",
    slug: "reurb",
    range: "R$ 2.500 – R$ 8.000",
    detail: "Depende da modalidade (REURB-S ou REURB-E)",
    includes: ["Levantamento topográfico", "Plantas e memoriais", "Protocolo e acompanhamento", "Abertura de matrícula"],
  },
  {
    service: "Averbação de Construção",
    slug: "averbacao",
    range: "R$ 1.500 – R$ 5.000",
    detail: "Depende da documentação já existente",
    includes: ["Juntada documental", "Protocolo no RI", "Acompanhamento até averbação"],
  },
  {
    service: "INSS de Obra",
    slug: "inss-obra",
    range: "R$ 1.000 – R$ 4.000",
    detail: "Conforme área e tipo de construção",
    includes: ["Cadastro CNO", "Aferição de obra", "Emissão CND"],
  },
  {
    service: "Estremação",
    slug: "estremacao",
    range: "R$ 3.000 – R$ 10.000",
    detail: "Varia conforme complexidade fundiária",
    includes: ["Levantamento", "Escritura pública", "Registro e abertura de matrícula"],
  },
  {
    service: "Retificação de Área",
    slug: "retificacao",
    range: "R$ 2.000 – R$ 6.000",
    detail: "Depende da divergência de área",
    includes: ["Memorial descritivo", "Planta georreferenciada", "Protocolo no RI"],
  },
];

const pricingEngenharia = [
  {
    service: "Projeto Arquitetônico",
    slug: "projeto-arquitetonico",
    range: "R$ 15 – R$ 40/m²",
    detail: "Varia conforme padrão e complexidade",
    includes: ["Estudo preliminar", "Anteprojeto", "Projeto executivo", "Detalhamentos"],
  },
  {
    service: "Projeto Estrutural",
    slug: "projeto-estrutural",
    range: "R$ 8 – R$ 20/m²",
    detail: "Concreto armado, metálica ou madeira",
    includes: ["Dimensionamento", "Formas e armaduras", "Memória de cálculo", "ART"],
  },
  {
    service: "Projeto Elétrico",
    slug: "projeto-eletrico",
    range: "R$ 5 – R$ 15/m²",
    detail: "Residencial ou comercial",
    includes: ["Diagrama unifilar", "Quadro de cargas", "Plantas e detalhes", "ART"],
  },
  {
    service: "Projeto Hidrossanitário",
    slug: "projeto-hidrossanitario",
    range: "R$ 5 – R$ 12/m²",
    detail: "Água fria, esgoto e pluvial",
    includes: ["Dimensionamento", "Isométricos", "Plantas e detalhes", "ART"],
  },
  {
    service: "PPCI",
    slug: "ppci",
    range: "R$ 2.000 – R$ 8.000",
    detail: "Conforme risco e área do imóvel",
    includes: ["Projeto de prevenção", "Protocolo no CBMSC", "Acompanhamento até aprovação"],
  },
  {
    service: "Levantamento Topográfico",
    slug: "topografia",
    range: "R$ 1.500 – R$ 5.000",
    detail: "Conforme área do terreno",
    includes: ["Medição in loco", "Planta planialtimétrica", "Memorial descritivo", "ART"],
  },
];

const faqItems = [
  {
    q: "Os valores incluem taxas da prefeitura e cartório?",
    a: "Não. Os valores apresentados são referência para honorários de engenharia. Taxas municipais (análise de projeto, alvará, Habite-se) e custos de cartório (registro, averbação) são cobrados à parte. Incluímos uma estimativa de custas completa na proposta técnica.",
  },
  {
    q: "Quanto tempo leva para regularizar um imóvel?",
    a: "O prazo varia conforme o tipo de serviço e a complexidade do caso. Um Habite-se simples pode levar de 3 a 6 meses. REURB pode levar de 6 a 12 meses. Na consulta inicial, informamos a estimativa de prazo para o seu caso específico.",
  },
  {
    q: "Como funciona o orçamento personalizado?",
    a: "Você entra em contato via WhatsApp ou formulário. Analisamos sua documentação e realizamos uma consulta inicial gratuita. Em até 48h, enviamos uma proposta técnica detalhada com escopo, prazo e valores transparentes.",
  },
  {
    q: "Posso parcelar o pagamento?",
    a: "Sim. Trabalhamos com condições flexíveis de pagamento, geralmente divididas por etapa do serviço. As condições são definidas na proposta técnica.",
  },
  {
    q: "E se meu imóvel tiver pendências ou multas?",
    a: "Isso é comum e não impede a regularização. Na consulta inicial, levantamos todas as pendências e incluímos a estratégia para resolvê-las no escopo do serviço. Multas podem ser negociadas junto à prefeitura.",
  },
  {
    q: "Vocês atendem fora de Florianópolis?",
    a: "Sim. Atendemos toda a região metropolitana de Florianópolis, incluindo São José, Palhoça, Biguaçu e demais cidades da Grande Florianópolis.",
  },
];

export default function PrecosPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="pt-[100px]">
      <BreadcrumbJsonLd
        items={[
          { name: "Início", href: "/" },
          { name: "Preços", href: "/precos" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-custom px-4 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-copper-light/70">
              <li><Link href="/" className="transition-colors hover:text-copper-light">Início</Link></li>
              <li className="before:mx-1 before:content-['/'] text-copper-light">Preços</li>
            </ol>
          </nav>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-copper-light">
            Valores de Referência
          </p>
          <h1 className="mb-4 font-heading text-4xl text-offwhite sm:text-5xl">
            Preços de Projetos e Regularização
          </h1>
          <p className="max-w-2xl text-lg text-white/50">
            Valores médios praticados em Florianópolis e região. Cada projeto é único — solicite um orçamento personalizado gratuito.
          </p>
        </div>
      </section>

      {/* Fatores que influenciam */}
      <section className="section-padding bg-offwhite dark:bg-navy">
        <div className="container-custom">
          <h2 className="mb-8 font-heading text-2xl text-navy dark:text-offwhite sm:text-3xl">
            O que influencia o valor?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Área (m²)", desc: "Quanto maior o imóvel, maior a complexidade dos projetos e levantamentos." },
              { title: "Complexidade", desc: "Imóveis com irregularidades múltiplas ou restrições ambientais demandam mais trabalho." },
              { title: "Localização", desc: "Bairros com restrições de zoneamento ou áreas de preservação podem exigir análises extras." },
              { title: "Documentação", desc: "Imóveis com documentação incompleta ou divergente precisam de etapas adicionais." },
            ].map((item) => (
              <div key={item.title} className="rounded-card border border-copper-light/10 bg-white p-6 dark:border-navy-light/20 dark:bg-navy-light/10">
                <h3 className="mb-2 font-semibold text-navy dark:text-offwhite">{item.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/60 dark:text-offwhite/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regularização */}
      <section className="section-padding bg-white dark:bg-navy-light/5">
        <div className="container-custom">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-copper">Regularização</p>
          <h2 className="mb-8 font-heading text-2xl text-navy dark:text-offwhite sm:text-3xl">
            Serviços de Regularização de Imóveis
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingRegularizacao.map((item) => (
              <div
                key={item.slug}
                className="group flex flex-col rounded-card border border-copper-light/10 bg-offwhite p-6 transition-all hover:border-copper/30 hover:shadow-lg dark:border-navy-light/20 dark:bg-navy-light/10"
              >
                <h3 className="mb-1 font-heading text-lg text-navy dark:text-offwhite">{item.service}</h3>
                <p className="mb-3 text-2xl font-bold text-copper">{item.range}</p>
                <p className="mb-4 text-sm text-charcoal/50 dark:text-offwhite/40">{item.detail}</p>
                <div className="mb-4 flex-1">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy/50 dark:text-offwhite/40">Inclui:</p>
                  <ul className="space-y-1.5">
                    {item.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-sm text-charcoal/70 dark:text-offwhite/60">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-copper" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/servicos/${item.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-copper transition-colors hover:text-copper-light"
                >
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engenharia */}
      <section className="section-padding bg-offwhite dark:bg-navy">
        <div className="container-custom">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-copper">Engenharia</p>
          <h2 className="mb-8 font-heading text-2xl text-navy dark:text-offwhite sm:text-3xl">
            Projetos de Engenharia
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingEngenharia.map((item) => (
              <div
                key={item.slug}
                className="group flex flex-col rounded-card border border-copper-light/10 bg-white p-6 transition-all hover:border-copper/30 hover:shadow-lg dark:border-navy-light/20 dark:bg-navy-light/10"
              >
                <h3 className="mb-1 font-heading text-lg text-navy dark:text-offwhite">{item.service}</h3>
                <p className="mb-3 text-2xl font-bold text-copper">{item.range}</p>
                <p className="mb-4 text-sm text-charcoal/50 dark:text-offwhite/40">{item.detail}</p>
                <div className="mb-4 flex-1">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy/50 dark:text-offwhite/40">Inclui:</p>
                  <ul className="space-y-1.5">
                    {item.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-sm text-charcoal/70 dark:text-offwhite/60">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-copper" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/servicos/${item.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-copper transition-colors hover:text-copper-light"
                >
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-navy-light/5">
        <div className="container-custom max-w-3xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-copper">Dúvidas Frequentes</p>
            <h2 className="font-heading text-2xl text-navy dark:text-offwhite sm:text-3xl">
              Perguntas sobre Preços
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-card border border-copper-light/10 bg-offwhite transition-all open:border-copper/20 open:shadow-md dark:border-navy-light/20 dark:bg-navy-light/10"
              >
                <summary className="flex cursor-pointer items-center gap-3 p-5 font-medium text-navy dark:text-offwhite [&::-webkit-details-marker]:hidden">
                  <HelpCircle className="h-5 w-5 flex-shrink-0 text-copper" />
                  <span className="flex-1">{item.q}</span>
                  <span className="text-copper transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-copper-light/10 px-5 pb-5 pt-4 dark:border-navy-light/20">
                  <p className="leading-relaxed text-charcoal/70 dark:text-offwhite/60">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full border border-copper/5" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full border border-copper/5" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="mb-4 font-heading text-3xl text-offwhite sm:text-4xl md:text-5xl">
            Solicite um Orçamento Personalizado
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/50">
            Cada projeto é único. Envie os dados do seu imóvel e receba uma proposta técnica detalhada — sem compromisso.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contato" className="btn-primary">
              <MessageCircle className="h-5 w-5" />
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/5548996791427?text=Olá! Gostaria de saber os valores para o meu projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <Phone className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
