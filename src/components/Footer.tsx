import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { regularizacao, engenharia } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-brand-dark dark:bg-gray-950">
      <div className="container-custom px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.svg"
              alt="4Projetos"
              width={140}
              height={42}
              className="mb-4 h-10 w-auto brightness-0 invert"
            />
            <p className="mb-6 text-sm leading-relaxed text-white/50">
              Soluções completas em engenharia e regularização de imóveis em
              Florianópolis e região.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+5548996791427"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-brand-light"
              >
                <Phone className="h-4 w-4" />
                (48) 99679-1427
              </a>
              <a
                href="mailto:contato@4projetos.com.br"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-brand-light"
              >
                <Mail className="h-4 w-4" />
                contato@4projetos.com.br
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                Florianópolis — SC
              </div>
            </div>
          </div>

          {/* Regularização */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-brand-light">
              Regularização
            </h4>
            <nav className="space-y-2">
              {regularizacao.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicos/${s.slug}`}
                  className="block text-sm text-white/50 transition-colors hover:text-brand-light"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Engenharia */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-brand-light">
              Engenharia
            </h4>
            <nav className="space-y-2">
              {engenharia.slice(0, 8).map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicos/${s.slug}`}
                  className="block text-sm text-white/50 transition-colors hover:text-brand-light"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-brand-light">
              Navegação
            </h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm text-white/50 transition-colors hover:text-brand-light">Início</Link>
              <Link href="/sobre" className="block text-sm text-white/50 transition-colors hover:text-brand-light">Sobre</Link>
              <Link href="/cases" className="block text-sm text-white/50 transition-colors hover:text-brand-light">Cases</Link>
              <Link href="/blog" className="block text-sm text-white/50 transition-colors hover:text-brand-light">Blog</Link>
              <Link href="/contato" className="block text-sm text-white/50 transition-colors hover:text-brand-light">Contato</Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} 4Projetos — Engenharia e Regularização.
              Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/30">
              Florianópolis — Santa Catarina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
