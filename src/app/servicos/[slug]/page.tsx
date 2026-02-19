import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FileCheck, Scale, Landmark, Receipt, BookOpen, Building2, Building, Ruler,
  PenTool, Droplets, Blocks, Zap, ShieldCheck, Lightbulb, Volume2, Thermometer,
  Map, Box, Sofa, Grid3x3, ScanLine, ArrowLeft, ArrowRight, Phone,
} from "lucide-react";
import { services, subServices } from "@/lib/services";

const iconMap: Record<string, React.ElementType> = {
  FileCheck, Scale, Landmark, Receipt, BookOpen, Building2, Building, Ruler,
  PenTool, Droplets, Blocks, Zap, ShieldCheck, Lightbulb, Volume2, Thermometer,
  Map, Box, Sofa, Grid3x3, ScanLine,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Serviço não encontrado" };

  return {
    title: `${service.title} — 4Projetos | Florianópolis`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || FileCheck;
  const relatedSubs = subServices.filter((s) => s.parentSlug === slug);
  const categoryServices = services.filter(
    (s) => s.category === service.category && s.slug !== slug && !s.isSubService
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark py-16 sm:py-24">
        <div className="container-custom px-4 lg:px-8">
          <div className="mb-6">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-1 text-sm text-brand-light/70 transition-colors hover:text-brand-light"
            >
              <ArrowLeft className="h-4 w-4" />
              Todos os serviços
            </Link>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light/10">
              <Icon className="h-8 w-8 text-brand-light" />
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-light/60">
                {service.category === "regularizacao"
                  ? "Regularização"
                  : "Engenharia"}
              </p>
              <h1 className="font-heading text-3xl text-white sm:text-4xl md:text-5xl">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-600">
                  {service.description}
                </p>

                <h2 className="mt-10 font-heading text-2xl text-brand-dark">
                  Como funciona
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      step: "01",
                      title: "Consulta Inicial",
                      desc: "Analisamos sua documentação e entendemos suas necessidades específicas.",
                    },
                    {
                      step: "02",
                      title: "Proposta Técnica",
                      desc: "Elaboramos orçamento detalhado com prazos, escopo e valores transparentes.",
                    },
                    {
                      step: "03",
                      title: "Execução",
                      desc: "Nossa equipe técnica desenvolve o trabalho com acompanhamento contínuo.",
                    },
                    {
                      step: "04",
                      title: "Entrega",
                      desc: "Entregamos toda a documentação e acompanhamos até a aprovação final.",
                    },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="rounded-xl border border-gray-100 p-5"
                    >
                      <span className="text-3xl font-bold text-brand-muted">
                        {s.step}
                      </span>
                      <h3 className="mt-2 font-semibold text-brand-dark">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Sub-services banner */}
                {relatedSubs.length > 0 && (
                  <div className="mt-10">
                    <h2 className="font-heading text-2xl text-brand-dark">
                      Serviços Complementares
                    </h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {relatedSubs.map((sub) => {
                        const SubIcon = iconMap[sub.icon] || FileCheck;
                        return (
                          <Link
                            key={sub.slug}
                            href={`/servicos/${sub.slug}`}
                            className="group flex gap-4 rounded-xl border border-brand-muted/30 bg-brand-muted/10 p-5 transition-all hover:border-brand hover:shadow-md"
                          >
                            <SubIcon className="h-6 w-6 flex-shrink-0 text-brand" />
                            <div>
                              <h3 className="font-semibold text-brand-dark group-hover:text-brand">
                                {sub.title}
                              </h3>
                              <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                {sub.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl bg-brand-dark p-6">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Solicite um orçamento
                  </h3>
                  <p className="mb-5 text-sm text-white/60">
                    Receba uma proposta personalizada para {service.title.toLowerCase()}.
                  </p>
                  <Link
                    href="/contato"
                    className="btn-primary w-full !bg-brand-light !text-brand-dark hover:!bg-white"
                  >
                    Orçamento Gratuito
                  </Link>
                  <a
                    href="https://wa.me/5548996791427"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-green-500/10 py-3 text-sm font-medium text-green-400 transition-colors hover:bg-green-500/20"
                  >
                    <Phone className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>

                {/* Related Services */}
                {categoryServices.length > 0 && (
                  <div className="rounded-2xl border border-gray-100 p-6">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand">
                      Outros serviços de{" "}
                      {service.category === "regularizacao"
                        ? "regularização"
                        : "engenharia"}
                    </h3>
                    <nav className="space-y-2">
                      {categoryServices.slice(0, 6).map((s) => (
                        <Link
                          key={s.slug}
                          href={`/servicos/${s.slug}`}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-brand"
                        >
                          <ArrowRight className="h-3 w-3" />
                          {s.title}
                        </Link>
                      ))}
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
