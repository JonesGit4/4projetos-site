import { CheckCircle2, Users, MapPin, Award } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Users, label: "Sócios Engenheiros", value: "4" },
  { icon: MapPin, label: "Florianópolis e Região", value: "SC" },
  { icon: Award, label: "Áreas de Atuação", value: "20+" },
];

const differentials = [
  "Equipe multidisciplinar de engenheiros especializados",
  "Atendimento personalizado do início ao fim",
  "Regularização e projetos em um só lugar",
  "Acompanhamento junto a órgãos públicos",
  "Projetos conforme normas ABNT e legislação vigente",
  "Orçamento transparente e sem surpresas",
];

export function AboutSection() {
  return (
    <section className="section-padding bg-white dark:bg-navy-light/20">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-copper">
              Sobre a 4Projetos
            </p>
            <h2 className="mb-6 font-heading text-3xl text-navy sm:text-4xl dark:text-offwhite">
              Engenharia de excelência em Florianópolis
            </h2>
            <p className="mb-4 leading-relaxed text-charcoal/70 dark:text-gray-400">
              A <strong className="text-navy dark:text-offwhite">4Projetos</strong> é uma empresa de engenharia e
              regularização de imóveis com sede em Florianópolis, Santa Catarina.
              Nossa equipe de engenheiros especializados oferece soluções
              completas — da regularização documental ao projeto executivo.
            </p>
            <p className="mb-8 leading-relaxed text-charcoal/70 dark:text-gray-400">
              Com atendimento personalizado e foco em resultados, transformamos
              pendências em segurança jurídica e ideias em projetos técnicos de
              qualidade.
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {differentials.map((d) => (
                <div key={d} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-copper" />
                  <span className="text-sm text-charcoal/70 dark:text-gray-400">{d}</span>
                </div>
              ))}
            </div>

            <Link href="/sobre" className="btn-secondary">
              Conheça nossa história
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-lg bg-navy p-8 sm:p-12">
              <div className="mb-8 space-y-6">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-copper/15">
                        <Icon className="h-7 w-7 text-copper-light" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-offwhite">{s.value}</p>
                        <p className="text-sm text-white/50">{s.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <blockquote className="border-l-2 border-copper/40 pl-4">
                <p className="text-sm italic leading-relaxed text-white/60">
                  &quot;Nosso objetivo é tornar cada processo de engenharia e
                  regularização o mais simples e transparente possível.&quot;
                </p>
                <cite className="mt-2 block text-xs text-copper-light">
                  — Equipe 4Projetos
                </cite>
              </blockquote>
            </div>
            <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-lg border-2 border-copper/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
