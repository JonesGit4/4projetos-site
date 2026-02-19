import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Users, Target, Shield, Clock } from "lucide-react";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sobre — 4Projetos | Engenharia e Regularização em Florianópolis",
  description:
    "Conheça a 4Projetos: equipe multidisciplinar de engenheiros especializados em regularização e projetos em Florianópolis.",
};

export default function SobrePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark py-20 sm:py-28">
        <div className="container-custom px-4 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-light">
            Sobre nós
          </p>
          <h1 className="mb-4 font-heading text-4xl text-white sm:text-5xl">
            Quem é a 4Projetos
          </h1>
          <p className="max-w-2xl text-lg text-white/60">
            Somos uma empresa de engenharia e regularização de imóveis comprometida
            com excelência, transparência e resultados.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-6 font-heading text-3xl text-brand-dark">
                Engenharia com propósito
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A <strong>4Projetos</strong> nasceu da união de engenheiros
                  apaixonados por resolver os desafios mais complexos da
                  construção civil e da regularização de imóveis em Florianópolis
                  e região.
                </p>
                <p>
                  Nossa missão é tornar cada processo — seja uma regularização
                  documental ou um projeto estrutural — o mais simples,
                  transparente e eficiente possível para nossos clientes.
                </p>
                <p>
                  Com uma equipe multidisciplinar, oferecemos soluções completas
                  que vão do diagnóstico técnico à entrega final, sempre com
                  atendimento personalizado e foco na satisfação do cliente.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  title: "Equipe Especializada",
                  desc: "Engenheiros com formação em múltiplas disciplinas",
                },
                {
                  icon: Target,
                  title: "Foco em Resultados",
                  desc: "Compromisso com prazos e qualidade técnica",
                },
                {
                  icon: Shield,
                  title: "Segurança Jurídica",
                  desc: "Documentação conforme legislação vigente",
                },
                {
                  icon: Clock,
                  title: "Agilidade",
                  desc: "Processos otimizados para menor prazo possível",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-100 p-6"
                  >
                    <Icon className="mb-3 h-8 w-8 text-brand" />
                    <h3 className="mb-1 font-semibold text-brand-dark">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-custom text-center">
          <h2 className="mb-12 font-heading text-3xl text-brand-dark">
            Nossos Valores
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Transparência",
                desc: "Orçamentos claros, prazos realistas e comunicação aberta em todas as etapas do projeto.",
              },
              {
                title: "Excelência Técnica",
                desc: "Projetos conforme normas ABNT, legislação vigente e melhores práticas da engenharia.",
              },
              {
                title: "Compromisso",
                desc: "Acompanhamento dedicado do início ao fim, garantindo que cada entrega supere expectativas.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold text-brand-dark">
                  {v.title}
                </h3>
                <p className="text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
