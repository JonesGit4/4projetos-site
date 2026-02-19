import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { regularizacao, engenharia } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-navy dark:bg-gray-950">
      <div className="container-custom px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/logo-light.png"
              alt="4Projetos"
              width={160}
              height={48}
              className="mb-4 h-12 w-auto"
            />
            <p className="mb-6 text-sm leading-relaxed text-white/40">
              Soluções completas em engenharia e regularização de imóveis em
              Florianópolis e região.
            </p>
            <div className="space-y-3">
              <a href="tel:+5548996791427" className="flex items-center gap-2 text-sm text-white/50 hover:text-copper-light">
                <Phone className="h-4 w-4" /> (48) 99679-1427
              </a>
              <a href="mailto:contato@4projetos.com.br" className="flex items-center gap-2 text-sm text-white/50 hover:text-copper-light">
                <Mail className="h-4 w-4" /> contato@4projetos.com.br
              </a>
              <div className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" /> Florianópolis — SC
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-copper-light">Regularização</h4>
            <nav className="space-y-2">
              {regularizacao.map((s) => (
                <Link key={s.slug} href={`/servicos/${s.slug}`} className="block text-sm text-white/40 transition-colors hover:text-copper-light">{s.title}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-copper-light">Engenharia</h4>
            <nav className="space-y-2">
              {engenharia.slice(0, 8).map((s) => (
                <Link key={s.slug} href={`/servicos/${s.slug}`} className="block text-sm text-white/40 transition-colors hover:text-copper-light">{s.title}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-copper-light">Navegação</h4>
            <nav className="space-y-2">
              {["Início|/", "Sobre|/sobre", "Cases|/cases", "Blog|/blog", "Contato|/contato"].map((item) => {
                const [label, href] = item.split("|");
                return (
                  <Link key={href} href={href} className="block text-sm text-white/40 transition-colors hover:text-copper-light">{label}</Link>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} 4Projetos — Engenharia e Regularização. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/25">Florianópolis — Santa Catarina</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
