import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight, HelpCircle, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { bairros } from "@/lib/bairros";
import { services } from "@/lib/services";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export async function generateStaticParams() {
  return bairros.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bairro = bairros.find((b) => b.slug === slug);
  if (!bairro) return { title: "Bairro não encontrado" };
  return {
    title: `Engenharia e Regularização em ${bairro.name}, Florianópolis | 4Projetos`,
    description: `Serviços de engenharia e regularização de imóveis em ${bairro.name}, Florianópolis. Habite-se, REURB, projetos arquitetônicos e mais. Orçamento gratuito.`,
    keywords: [
      `regularização imóvel ${bairro.name}`,
      `projeto arquitetônico ${bairro.name} Florianópolis`,
      `habite-se ${bairro.name}`,
      `engenheiro ${bairro.name} Florianópolis`,
    ],
    alternates: { canonical: `https://4projetos.com.br/bairros/${bairro.slug}` },
  };
}

export default async function BairroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bairro = bairros.find((b) => b.slug === slug);
  if (!bairro) notFound();

  const linkedServices = services.filter((s) =>
    bairro.commonServices.includes(s.slug)
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bairro.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "4Projetos",
    description: `Engenharia e regularização de imóveis em ${bairro.name}, Florianópolis`,
    url: `https://4projetos.com.br/bairros/${bairro.slug}`,
    telephone: "+5548996791427",
    areaServed: {
      "@type": "Place",
      name: `${bairro.name}, Florianópolis, SC`,
    },
    serviceType: ["Regularização de Imóveis", "Projetos de Engenharia", "Habite-se", "REURB"],
  };

  const otherBairros = bairros.filter((b) => b.slug !== slug);

  return (
    <div className="pt-[100px]">
      <BreadcrumbJsonLd
        items={[
          { name: "Início", href: "/" },
          { name: "Bairros", href: "/bairros" },
          { name: bairro.name, href: `/bairros/${bairro.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-custom px-4 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-copper-light/70">
              <li><Link href="/" className="transition-colors hover:text-copper-light">Início</Link></li>
              <li className="before:mx-1 before:content-['/']"><Link href="/bairros" className="transition-colors hover:text-copper-light">Bairros</Link></li>
              <li className="before:mx-1 before:content-['/'] text-copper-light">{bairro.name}</li>
            </ol>
          </nav>
          <div className="flex items-center gap-2 text-copper-light/60 mb-3">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">{bairro.region}</span>
          </div>
          <h1 className="mb-4 font-heading text-4xl text-offwhite sm:text-5xl">
            Engenharia e Regularização em {bairro.name}
          </h1>
          <p className="max-w-2xl text-lg text-white/50">
            Serviços completos de engenharia e regularização de imóveis em {bairro.name}, Florianópolis.
          </p>
        </div>
      </section>

      {/* About the neighborhood */}
      <section className="section-padding bg-offwhite dark:bg-navy">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-4 font-heading text-2xl text-navy dark:text-offwhite sm:text-3xl">
                Sobre {bairro.name}
              </h2>
              <p className="mb-6 leading-relaxed text-charcoal/70 dark:text-offwhite/60">
                {bairro.description}
              </p>

              <h3 className="mb-3 text-lg font-semibold text-navy dark:text-offwhite">Zoneamento e regras</h3>
              <p className="mb-6 leading-relaxed text-charcoal/70 dark:text-offwhite/60">
                {bairro.zoning}
              </p>

              <h3 className="mb-3 text-lg font-semibold text-navy dark:text-offwhite">Características do bairro</h3>
              <ul className="space-y-2">
                {bairro.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-charcoal/70 dark:text-offwhite/60">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-copper" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar - quick stats */}
            <div>
              <div className="rounded-card border border-copper-light/10 bg-white p-6 dark:border-navy-light/20 dark:bg-navy-light/10">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-copper">Dados do bairro</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs text-charcoal/40 dark:text-offwhite/30">Preço médio m²</dt>
                    <dd className="text-lg font-bold text-navy dark:text-offwhite">{bairro.avgPriceM2}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-charcoal/40 dark:text-offwhite/30">População estimada</dt>
                    <dd className="text-lg font-bold text-navy dark:text-offwhite">{bairro.population}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-charcoal/40 dark:text-offwhite/30">Região</dt>
                    <dd className="text-lg font-bold text-navy dark:text-offwhite">{bairro.region}</dd>
                  </div>
                </dl>
                <div className="mt-6 border-t border-copper-light/10 pt-6 dark:border-navy-light/20">
                  <Link href="/contato" className="btn-primary w-full">
                    <MessageCircle className="h-5 w-5" />
                    Orçamento Gratuito
                  </Link>
                  <a
                    href={`https://wa.me/5548996791427?text=Olá! Tenho um imóvel em ${bairro.name} e gostaria de um orçamento.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-btn bg-green-500/10 py-3 text-sm font-medium text-green-500 transition-colors hover:bg-green-500/20 dark:text-green-400"
                  >
                    <Phone className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for this neighborhood */}
      <section className="section-padding bg-white dark:bg-navy-light/5">
        <div className="container-custom">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-copper">Serviços em {bairro.name}</p>
          <h2 className="mb-8 font-heading text-2xl text-navy dark:text-offwhite sm:text-3xl">
            Serviços mais procurados no bairro
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {linkedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="group flex items-center gap-3 rounded-card border border-copper-light/10 bg-offwhite p-5 transition-all hover:border-copper/30 hover:shadow-lg dark:border-navy-light/20 dark:bg-navy-light/10"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-navy group-hover:text-copper dark:text-offwhite dark:group-hover:text-copper-light">
                    {service.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-charcoal/50 dark:text-offwhite/40">
                    {service.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-copper opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-offwhite dark:bg-navy">
        <div className="container-custom max-w-3xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-copper">Dúvidas Frequentes</p>
            <h2 className="font-heading text-2xl text-navy dark:text-offwhite sm:text-3xl">
              Perguntas sobre {bairro.name}
            </h2>
          </div>
          <div className="space-y-4">
            {bairro.faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-card border border-copper-light/10 bg-white transition-all open:border-copper/20 open:shadow-md dark:border-navy-light/20 dark:bg-navy-light/10"
              >
                <summary className="flex cursor-pointer items-center gap-3 p-5 font-medium text-navy dark:text-offwhite [&::-webkit-details-marker]:hidden">
                  <HelpCircle className="h-5 w-5 flex-shrink-0 text-copper" />
                  <span className="flex-1">{faq.q}</span>
                  <span className="text-copper transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-copper-light/10 px-5 pb-5 pt-4 dark:border-navy-light/20">
                  <p className="leading-relaxed text-charcoal/70 dark:text-offwhite/60">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other neighborhoods */}
      <section className="section-padding bg-white dark:bg-navy-light/5">
        <div className="container-custom">
          <h2 className="mb-6 font-heading text-2xl text-navy dark:text-offwhite">
            Outros bairros atendidos
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherBairros.map((b) => (
              <Link
                key={b.slug}
                href={`/bairros/${b.slug}`}
                className="flex items-center gap-3 rounded-card border border-copper-light/10 bg-offwhite px-5 py-4 transition-all hover:border-copper/30 hover:shadow-md dark:border-navy-light/20 dark:bg-navy-light/10"
              >
                <MapPin className="h-4 w-4 text-copper" />
                <div>
                  <span className="font-semibold text-navy dark:text-offwhite">{b.name}</span>
                  <span className="ml-2 text-sm text-charcoal/40 dark:text-offwhite/30">{b.region}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full border border-copper/5" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full border border-copper/5" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="mb-4 font-heading text-3xl text-offwhite sm:text-4xl">
            Tem um imóvel em {bairro.name}?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/50">
            Solicite um orçamento personalizado para regularização ou projetos de engenharia no seu bairro.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contato" className="btn-primary">
              <MessageCircle className="h-5 w-5" />
              Solicitar Orçamento
            </Link>
            <a
              href={`https://wa.me/5548996791427?text=Olá! Tenho um imóvel em ${bairro.name} e gostaria de um orçamento.`}
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
