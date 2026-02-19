import type { Metadata } from "next";
import { Construction } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cases — 4Projetos | Projetos Realizados",
  description: "Conheça os projetos de engenharia e regularização realizados pela 4Projetos.",
};

export default function CasesPage() {
  return (
    <div className="pt-[100px]">
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-custom px-4 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-copper-light">Cases</p>
          <h1 className="mb-4 font-heading text-4xl text-offwhite sm:text-5xl">Projetos Realizados</h1>
          <p className="max-w-2xl text-lg text-white/50">Conheça alguns dos projetos que realizamos.</p>
        </div>
      </section>
      <section className="section-padding bg-offwhite dark:bg-navy">
        <div className="container-custom text-center">
          <Construction className="mx-auto mb-4 h-16 w-16 text-copper/40" />
          <h2 className="mb-3 font-heading text-2xl text-navy dark:text-offwhite">Em breve</h2>
          <p className="mx-auto mb-8 max-w-md text-charcoal/60 dark:text-gray-400">Estamos preparando nossos cases. Entre em contato para saber mais.</p>
          <Link href="/contato" className="btn-primary">Fale Conosco</Link>
        </div>
      </section>
    </div>
  );
}
