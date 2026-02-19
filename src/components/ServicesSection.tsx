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
      className="group relative rounded-lg border border-copper-light/20 bg-white p-6 transition-all hover:border-copper/40 hover:shadow-lg dark:border-navy-light/30 dark:bg-navy-light/20 dark:hover:border-copper/40"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-white dark:bg-copper/10 dark:text-copper-light">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-navy group-hover:text-copper dark:text-offwhite dark:group-hover:text-copper-light">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-charcoal/60 line-clamp-3 dark:text-gray-400">
        {service.description}
      </p>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-copper opacity-0 transition-opacity group-hover:opacity-100 dark:text-copper-light">
        Saiba mais <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-offwhite dark:bg-navy">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-copper">
            Nossos Serviços
          </p>
          <h2 className="mb-4 text-3xl font-heading text-navy sm:text-4xl dark:text-offwhite">
            Soluções completas para o seu imóvel
          </h2>
          <p className="mx-auto max-w-2xl text-charcoal/60 dark:text-gray-400">
            Da regularização ao projeto executivo, oferecemos todos os serviços de
            engenharia que você precisa em um só lugar.
          </p>
        </div>

        {/* Regularização */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-copper/40 to-transparent" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-copper">
              Regularização
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-copper/40 to-transparent" />
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
            <div className="h-px flex-1 bg-gradient-to-r from-copper/40 to-transparent" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-copper">
              Engenharia
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-copper/40 to-transparent" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engenharia.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contato" className="btn-primary text-base">
            Solicite um Orçamento Gratuito
          </Link>
        </div>
      </div>
    </section>
  );
}
