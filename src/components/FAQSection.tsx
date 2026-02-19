"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Quanto tempo leva para conseguir o Habite-se?",
    a: "O prazo varia conforme a complexidade do imóvel e a prefeitura, mas normalmente entre 60 a 120 dias. Cuidamos de toda a documentação e acompanhamos o processo junto ao órgão.",
  },
  {
    q: "O que é REURB e como funciona?",
    a: "A Regularização Fundiária Urbana (REURB) é o processo previsto na Lei 13.465/2017 que permite regularizar imóveis em áreas urbanas. Analisamos sua situação, elaboramos o projeto e conduzimos todo o processo administrativo.",
  },
  {
    q: "Vocês atendem apenas em Florianópolis?",
    a: "Nosso escritório está em Florianópolis, mas atendemos toda a região da Grande Florianópolis e demais cidades de Santa Catarina.",
  },
  {
    q: "Preciso de todos os projetos de engenharia de uma vez?",
    a: "Não necessariamente. Você pode contratar projetos individuais. Porém, oferecemos condições especiais para pacotes completos, garantindo compatibilização entre as disciplinas.",
  },
  {
    q: "Como é feito o orçamento?",
    a: "O orçamento é personalizado e gratuito. Analisamos a documentação do seu imóvel, entendemos suas necessidades e apresentamos uma proposta detalhada com valores, prazos e escopo.",
  },
  {
    q: "Qual a diferença entre Averbação e Habite-se?",
    a: "O Habite-se é emitido pela prefeitura, atestando que a construção atende à legislação. A Averbação é o registro na matrícula do imóvel junto ao Cartório. Normalmente, primeiro se obtém o Habite-se, depois a Averbação.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-copper-light/20 dark:border-navy-light/30">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="pr-4 font-semibold text-navy dark:text-offwhite">{q}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-copper transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="leading-relaxed text-charcoal/60 dark:text-gray-400">{a}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="section-padding bg-offwhite dark:bg-navy">
      <div className="container-custom max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-copper">
            Perguntas Frequentes
          </p>
          <h2 className="font-heading text-3xl text-navy sm:text-4xl dark:text-offwhite">
            Dúvidas comuns sobre nossos serviços
          </h2>
        </div>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
