import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — 4Projetos | Dicas de Engenharia e Regularização em Florianópolis",
  description:
    "Artigos e guias completos sobre regularização de imóveis, habite-se, averbação, REURB e projetos de engenharia em Florianópolis.",
  keywords: [
    "blog regularização de imóveis",
    "dicas engenharia Florianópolis",
    "habite-se",
    "averbação",
    "REURB",
  ],
  alternates: { canonical: "https://4projetos.com.br/blog" },
};

export default function BlogPage() {
  return (
    <div className="pt-[100px]">
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-custom px-4 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-copper-light">
            Blog
          </p>
          <h1 className="mb-4 font-heading text-4xl text-offwhite sm:text-5xl">
            Conteúdo sobre Engenharia e Regularização
          </h1>
          <p className="max-w-2xl text-lg text-white/50">
            Artigos, guias e informações para ajudar você a regularizar seu imóvel e entender os processos de engenharia.
          </p>
        </div>
      </section>

      <section className="section-padding bg-offwhite dark:bg-navy">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-lg border border-navy/80 bg-navy p-6 transition-all hover:border-copper-light/20 hover:bg-white hover:shadow-lg dark:border-brand/80 dark:bg-brand dark:hover:border-brand-light/30 dark:hover:bg-white"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-copper-light transition-colors group-hover:text-copper dark:text-white/70 dark:group-hover:text-brand">
                  {post.category === "regularizacao"
                    ? "Regularização"
                    : "Engenharia"}
                </p>
                <h2 className="mb-3 font-heading text-xl text-white transition-colors group-hover:text-navy dark:text-white dark:group-hover:text-navy">
                  {post.title}
                </h2>
                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-white/70 transition-colors group-hover:text-charcoal/60 dark:text-white/70 dark:group-hover:text-charcoal/60">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs text-white/50 transition-colors group-hover:text-charcoal/40 dark:text-white/50 dark:group-hover:text-charcoal/40">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/80 transition-all group-hover:translate-x-1 group-hover:text-copper dark:text-white/80 dark:group-hover:text-brand" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
