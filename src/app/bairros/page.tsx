import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { bairros } from "@/lib/bairros";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Bairros Atendidos em Florianópolis | 4Projetos",
  description:
    "Conheça os bairros de Florianópolis atendidos pela 4Projetos. Serviços de engenharia e regularização de imóveis com expertise local em cada região.",
  alternates: { canonical: "https://4projetos.com.br/bairros" },
};

export default function BairrosPage() {
  return (
    <div className="pt-[100px]">
      <BreadcrumbJsonLd
        items={[
          { name: "Início", href: "/" },
          { name: "Bairros", href: "/bairros" },
        ]}
      />

      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-custom px-4 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-copper-light/70">
              <li><Link href="/" className="transition-colors hover:text-copper-light">Início</Link></li>
              <li className="before:mx-1 before:content-['/'] text-copper-light">Bairros</li>
            </ol>
          </nav>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-copper-light/60">Atuação Local</p>
          <h1 className="mb-4 font-heading text-4xl text-offwhite sm:text-5xl">
            Bairros Atendidos em Florianópolis
          </h1>
          <p className="max-w-2xl text-lg text-white/50">
            Engenharia e regularização de imóveis com conhecimento das normas específicas de cada bairro.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-offwhite dark:bg-navy">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bairros.map((b) => (
              <Link
                key={b.slug}
                href={`/bairros/${b.slug}`}
                className="group rounded-card border border-copper-light/10 bg-white p-6 transition-all hover:border-copper/30 hover:shadow-lg dark:border-navy-light/20 dark:bg-navy-light/10"
              >
                <div className="mb-3 flex items-center gap-2 text-copper">
                  <MapPin className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">{b.region}</span>
                </div>
                <h2 className="mb-2 text-xl font-bold text-navy group-hover:text-copper dark:text-offwhite dark:group-hover:text-copper-light">
                  {b.name}
                </h2>
                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-charcoal/60 dark:text-offwhite/50">
                  {b.description}
                </p>
                <div className="mb-4 space-y-1 text-xs text-charcoal/40 dark:text-offwhite/30">
                  <p>Preço médio m²: <span className="font-semibold text-navy dark:text-offwhite">{b.avgPriceM2}</span></p>
                  <p>População: <span className="font-semibold text-navy dark:text-offwhite">{b.population}</span></p>
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-copper group-hover:underline">
                  Ver serviços no bairro <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
