import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { BlogPostJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Artigo não encontrado" };
  return {
    title: `${post.title} — 4Projetos Blog`,
    description: post.description,
    keywords: [post.keyword, "Florianópolis", "engenharia", "regularização"],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://4projetos.com.br/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      locale: "pt_BR",
      siteName: "4Projetos",
    },
    alternates: { canonical: `https://4projetos.com.br/blog/${post.slug}` },
  };
}

/* Simple markdown-like renderer for blog content */
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let tableRows: string[][] = [];
  let inTable = false;

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-4 list-disc space-y-2 pl-6 text-charcoal/70 dark:text-offwhite/60">
          {listItems.map((li, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(li) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
  }

  function flushTable() {
    if (tableRows.length > 0) {
      const header = tableRows[0];
      const body = tableRows.slice(1);
      elements.push(
        <div key={`tbl-${elements.length}`} className="my-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-copper/20">
                {header.map((cell, i) => (
                  <th key={i} className="px-3 py-2 text-left font-semibold text-navy dark:text-offwhite">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} className="border-b border-copper-light/10 dark:border-navy-light/20">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-charcoal/70 dark:text-offwhite/60" dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  }

  function formatInline(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-navy dark:text-offwhite">$1</strong>')
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      flushList();
      flushTable();
      elements.push(
        <h3 key={`h3-${i}`} className="mb-3 mt-8 text-xl font-semibold text-navy dark:text-offwhite">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      flushTable();
      elements.push(
        <h2 key={`h2-${i}`} className="mb-4 mt-10 font-heading text-2xl text-navy dark:text-offwhite">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      flushTable();
      listItems.push(line.slice(2));
    } else if (line.startsWith("| ")) {
      flushList();
      const cells = line
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());
      if (cells.every((c) => /^[-:]+$/.test(c))) {
        continue; // separator row
      }
      tableRows.push(cells);
      inTable = true;
    } else if (line.trim() === "") {
      flushList();
      if (inTable) flushTable();
    } else {
      flushList();
      flushTable();
      elements.push(
        <p
          key={`p-${i}`}
          className="my-3 leading-relaxed text-charcoal/70 dark:text-offwhite/60"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      );
    }
  }
  flushList();
  flushTable();

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-[100px]">
      <BlogPostJsonLd
        title={post.title}
        description={post.description}
        slug={post.slug}
        date={post.date}
        readTime={post.readTime}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Início", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-navy py-16 sm:py-24">
        <div className="container-custom px-4 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-copper-light/70">
              <li><Link href="/" className="transition-colors hover:text-copper-light">Início</Link></li>
              <li className="before:mx-1 before:content-['/']"><Link href="/blog" className="transition-colors hover:text-copper-light">Blog</Link></li>
              <li className="before:mx-1 before:content-['/'] text-copper-light line-clamp-1">{post.title}</li>
            </ol>
          </nav>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-copper-light/60">
            {post.category === "regularizacao" ? "Regularização" : "Engenharia"}
          </p>
          <h1 className="mb-6 max-w-3xl font-heading text-3xl text-offwhite sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {post.readTime} de leitura
            </span>
            <span className="flex items-center gap-1">
              <Tag className="h-4 w-4" /> {post.keyword}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-offwhite dark:bg-navy">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <div className="prose-custom max-w-none">
                {renderContent(post.content)}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-lg bg-navy p-6">
                  <h3 className="mb-2 text-lg font-semibold text-offwhite">
                    Precisa de ajuda?
                  </h3>
                  <p className="mb-5 text-sm text-white/50">
                    Consultoria gratuita para o seu imóvel.
                  </p>
                  <Link href="/contato" className="btn-primary w-full">
                    Orçamento Gratuito
                  </Link>
                  <a
                    href="https://wa.me/5548996791427"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-btn bg-green-500/10 py-3 text-sm font-medium text-green-400 transition-colors hover:bg-green-500/20"
                  >
                    WhatsApp
                  </a>
                </div>

                {related.length > 0 && (
                  <div className="rounded-lg border border-copper-light/20 p-6 dark:border-navy-light/30">
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-copper">
                      Artigos relacionados
                    </h3>
                    <nav className="space-y-3">
                      {related.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/blog/${r.slug}`}
                          className="block text-sm text-charcoal/60 transition-colors hover:text-navy dark:text-offwhite/60 dark:hover:text-copper-light"
                        >
                          {r.title}
                        </Link>
                      ))}
                    </nav>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
