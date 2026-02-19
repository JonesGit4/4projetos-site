import type { Metadata } from "next";
import { Users, Target, Shield, Clock } from "lucide-react";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sobre — 4Projetos | Engenharia e Regularização em Florianópolis",
  description: "Conheça a 4Projetos: equipe multidisciplinar de engenheiros especializados em regularização e projetos em Florianópolis.",
};

export default function SobrePage() {
  return (
    <div className="pt-[100px]">
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-custom px-4 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-copper-light">Sobre nós</p>
          <h1 className="mb-4 font-heading text-4xl text-offwhite sm:text-5xl">Quem é a 4Projetos</h1>
          <p className="max-w-2xl text-lg text-white/50">Somos uma empresa de engenharia e regularização comprometida com excelência, transparência e resultados.</p>
        </div>
      </section>

      <section className="section-padding bg-offwhite dark:bg-navy">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-6 font-heading text-3xl text-navy dark:text-offwhite">Engenharia com propósito</h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed dark:text-gray-400">
                <p>A <strong className="text-navy dark:text-offwhite">4Projetos</strong> nasceu da união de engenheiros apaixonados por resolver os desafios da construção civil e regularização de imóveis em Florianópolis.</p>
                <p>Nossa missão é tornar cada processo — seja uma regularização documental ou um projeto estrutural — o mais simples, transparente e eficiente possível.</p>
                <p>Com equipe multidisciplinar, oferecemos soluções completas do diagnóstico técnico à entrega final.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, title: "Equipe Especializada", desc: "Engenheiros com formação em múltiplas disciplinas" },
                { icon: Target, title: "Foco em Resultados", desc: "Compromisso com prazos e qualidade técnica" },
                { icon: Shield, title: "Segurança Jurídica", desc: "Documentação conforme legislação vigente" },
                { icon: Clock, title: "Agilidade", desc: "Processos otimizados para menor prazo possível" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-lg border border-copper-light/20 p-6 dark:border-navy-light/30">
                    <Icon className="mb-3 h-8 w-8 text-copper" />
                    <h3 className="mb-1 font-semibold text-navy dark:text-offwhite">{item.title}</h3>
                    <p className="text-sm text-charcoal/60 dark:text-gray-400">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-navy-light/20">
        <div className="container-custom text-center">
          <h2 className="mb-12 font-heading text-3xl text-navy dark:text-offwhite">Nossos Valores</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { title: "Transparência", desc: "Orçamentos claros, prazos realistas e comunicação aberta em todas as etapas." },
              { title: "Excelência Técnica", desc: "Projetos conforme normas ABNT, legislação vigente e melhores práticas." },
              { title: "Compromisso", desc: "Acompanhamento dedicado do início ao fim, superando expectativas." },
            ].map((v) => (
              <div key={v.title} className="rounded-lg bg-offwhite p-8 dark:bg-navy">
                <h3 className="mb-3 text-xl font-semibold text-navy dark:text-offwhite">{v.title}</h3>
                <p className="text-charcoal/60 dark:text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
