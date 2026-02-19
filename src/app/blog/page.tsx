import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — 4Projetos | Dicas de Engenharia e Regularização",
  description:
    "Artigos e dicas sobre regularização de imóveis, engenharia e construção civil em Florianópolis.",
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="bg-brand-dark py-20 sm:py-28">
        <div className="container-custom px-4 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-light">
            Blog
          </p>
          <h1 className="mb-4 font-heading text-4xl text-white sm:text-5xl">
            Conteúdo sobre Engenharia
          </h1>
          <p className="max-w-2xl text-lg text-white/60">
            Artigos, dicas e informações sobre regularização, projetos e
            construção civil.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom text-center">
          <BookOpen className="mx-auto mb-4 h-16 w-16 text-brand-muted" />
          <h2 className="mb-3 font-heading text-2xl text-brand-dark">
            Em breve
          </h2>
          <p className="mx-auto mb-8 max-w-md text-gray-500">
            Estamos preparando conteúdos relevantes sobre engenharia e
            regularização. Fique atento!
          </p>
          <Link href="/" className="btn-secondary">
            Voltar ao início
          </Link>
        </div>
      </section>
    </div>
  );
}
