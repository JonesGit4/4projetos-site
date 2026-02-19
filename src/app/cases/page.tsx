import type { Metadata } from "next";
import { Construction } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cases — 4Projetos | Projetos Realizados",
  description:
    "Conheça os projetos de engenharia e regularização realizados pela 4Projetos em Florianópolis.",
};

export default function CasesPage() {
  return (
    <div className="pt-20">
      <section className="bg-brand-dark py-20 sm:py-28">
        <div className="container-custom px-4 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-light">
            Cases
          </p>
          <h1 className="mb-4 font-heading text-4xl text-white sm:text-5xl">
            Projetos Realizados
          </h1>
          <p className="max-w-2xl text-lg text-white/60">
            Conheça alguns dos projetos que realizamos para nossos clientes.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom text-center">
          <Construction className="mx-auto mb-4 h-16 w-16 text-brand-muted" />
          <h2 className="mb-3 font-heading text-2xl text-brand-dark">
            Em breve
          </h2>
          <p className="mx-auto mb-8 max-w-md text-gray-500">
            Estamos preparando nossos cases para compartilhar com você. Enquanto
            isso, entre em contato para saber mais sobre nossos projetos.
          </p>
          <Link href="/contato" className="btn-primary">
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}
