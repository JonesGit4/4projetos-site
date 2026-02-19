import Link from "next/link";
import {
  FileCheck, Scale, Landmark, Receipt, BookOpen, Building2, Building, Ruler,
  PenTool, Droplets, Blocks, Zap, ShieldCheck, Lightbulb, Volume2, Thermometer, Map,
  ArrowRight,
} from "lucide-react";
import { regularizacao, engenharia, type Service } from "@/lib/services";

const iconMap: Record<string, React.ElementType> = {
  FileCheck, Scale, Landmark, Receipt, BookOpen, Building2, Building, Ruler,
  PenTool, Droplets, Blocks, Zap, ShieldCheck, Lightbulb, Volume2, Thermometer, Map,
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || FileCheck;

  return (
    <Link
      href={`/servicos/${service.slug}`}
      className="group relative rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-brand-muted hover:shadow-lg"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-muted/30 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-brand-dark group-hover:text-brand">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-500 line-clamp-3">
        {service.description}
      </p>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
        Saiba mais <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-gray-50/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
            Nossos Serviços
          </p>
          <h2 className="mb-4 text-3xl font-heading text-brand-dark sm:text-4xl">
            Soluções completas para o seu imóvel
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Da regularização ao projeto executivo, oferecemos todos os serviços de
            engenharia que você precisa em um só lugar.
          </p>
        </div>

        {/* Regularização */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-brand-light/50 to-transparent" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
              Regularização
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-brand-light/50 to-transparent" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {regularizacao.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>

        {/* Engenharia */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-brand-light/50 to-transparent" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
              Engenharia
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-brand-light/50 to-transparent" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engenharia.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/contato" className="btn-primary text-base">
            Solicite um Orçamento Gratuito
          </Link>
        </div>
      </div>
    </section>
  );
}
