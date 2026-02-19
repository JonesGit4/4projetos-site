import type { Metadata } from "next";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Serviços — 4Projetos | Engenharia e Regularização",
  description:
    "Conheça todos os serviços de engenharia e regularização de imóveis oferecidos pela 4Projetos em Florianópolis.",
};

export default function ServicosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark py-20 sm:py-28">
        <div className="container-custom px-4 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-light">
            Nossos Serviços
          </p>
          <h1 className="mb-4 font-heading text-4xl text-white sm:text-5xl">
            Engenharia e Regularização
          </h1>
          <p className="max-w-2xl text-lg text-white/60">
            Soluções completas para o seu imóvel — da regularização documental ao
            projeto executivo, com atendimento personalizado.
          </p>
        </div>
      </section>

      <ServicesSection />
      <CTASection />
    </div>
  );
}
