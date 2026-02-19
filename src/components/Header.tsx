"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Sun, Moon } from "lucide-react";
import { regularizacao, engenharia, subServices } from "@/lib/services";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "h-16 border-b border-gray-200/50 bg-white/80 shadow-sm backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-900/80"
          : "h-20 bg-white/60 backdrop-blur-md dark:bg-gray-900/60"
      )}
    >
      <div className="container-custom flex h-full items-center justify-between px-4 lg:px-8">
        {/* Logo — bigger, fills available area */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="4Projetos"
            width={200}
            height={60}
            className={cn(
              "w-auto transition-all duration-300 dark:brightness-0 dark:invert",
              scrolled ? "h-10" : "h-14"
            )}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100/60 hover:text-brand dark:text-gray-300 dark:hover:bg-gray-800/60 dark:hover:text-brand-light"
          >
            Início
          </Link>

          {/* Mega Menu - Serviços */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100/60 hover:text-brand dark:text-gray-300 dark:hover:bg-gray-800/60 dark:hover:text-brand-light"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Serviços
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>

            {/* Mega Menu Dropdown */}
            {servicesOpen && (
              <div className="absolute -left-20 top-full pt-2">
                <div className="w-[680px] rounded-2xl border border-gray-100 bg-white/95 p-6 shadow-2xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/95">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Regularização Column */}
                    <div>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-brand dark:text-brand-light">
                        Regularização
                      </h3>
                      <div className="space-y-1">
                        {regularizacao.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/servicos/${s.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-brand-muted/30 hover:text-brand-dark dark:text-gray-400 dark:hover:bg-brand/10 dark:hover:text-brand-light"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Engenharia Column */}
                    <div>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-brand dark:text-brand-light">
                        Engenharia
                      </h3>
                      <div className="space-y-1">
                        {engenharia.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/servicos/${s.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-brand-muted/30 hover:text-brand-dark dark:text-gray-400 dark:hover:bg-brand/10 dark:hover:text-brand-light"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                        {subServices.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/servicos/${s.slug}`}
                            className="block rounded-lg px-3 py-2 pl-6 text-xs text-gray-400 transition-colors hover:bg-brand-muted/30 hover:text-brand-dark dark:text-gray-500 dark:hover:bg-brand/10 dark:hover:text-brand-light"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Bar */}
                  <div className="mt-5 flex items-center justify-between rounded-xl bg-brand-dark px-5 py-3 dark:bg-brand/20">
                    <p className="text-sm text-white/80 dark:text-gray-300">
                      Não sabe por onde começar?
                    </p>
                    <Link
                      href="/contato"
                      className="text-sm font-semibold text-brand-light transition-colors hover:text-white"
                      onClick={() => setServicesOpen(false)}
                    >
                      Fale conosco →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/sobre"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100/60 hover:text-brand dark:text-gray-300 dark:hover:bg-gray-800/60 dark:hover:text-brand-light"
          >
            Sobre
          </Link>
          <Link
            href="/cases"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100/60 hover:text-brand dark:text-gray-300 dark:hover:bg-gray-800/60 dark:hover:text-brand-light"
          >
            Cases
          </Link>
          <Link
            href="/blog"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100/60 hover:text-brand dark:text-gray-300 dark:hover:bg-gray-800/60 dark:hover:text-brand-light"
          >
            Blog
          </Link>
          <Link
            href="/contato"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100/60 hover:text-brand dark:text-gray-300 dark:hover:bg-gray-800/60 dark:hover:text-brand-light"
          >
            Contato
          </Link>
        </nav>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100/60 hover:text-brand dark:text-gray-400 dark:hover:bg-gray-800/60 dark:hover:text-brand-light"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <a
            href="tel:+5548996791427"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand dark:text-gray-400 dark:hover:text-brand-light"
          >
            <Phone className="h-4 w-4" />
            (48) 99679-1427
          </a>
          <Link href="/contato" className="btn-primary">
            Orçamento Grátis
          </Link>
        </div>

        {/* Mobile: Theme toggle + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-gray-500 dark:text-gray-400"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            className="rounded-lg p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white/95 backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/95 lg:hidden">
          <nav className="container-custom space-y-1 px-4 py-4">
            <Link
              href="/"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Início
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Serviços
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    mobileServicesOpen && "rotate-180"
                  )}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 space-y-0.5 border-l-2 border-brand-muted pl-4 dark:border-brand/30">
                  <p className="pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-brand dark:text-brand-light">
                    Regularização
                  </p>
                  {regularizacao.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicos/${s.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-brand dark:text-gray-400 dark:hover:text-brand-light"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                  <p className="pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-brand dark:text-brand-light">
                    Engenharia
                  </p>
                  {[...engenharia, ...subServices].map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicos/${s.slug}`}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-brand dark:text-gray-400 dark:hover:text-brand-light",
                        s.isSubService && "pl-6 text-xs text-gray-400"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/sobre"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/cases"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Cases
            </Link>
            <Link
              href="/blog"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contato"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Contato
            </Link>

            <div className="border-t border-gray-100 pt-4 dark:border-gray-700">
              <Link
                href="/contato"
                className="btn-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Orçamento Grátis
              </Link>
              <a
                href="tel:+5548996791427"
                className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                <Phone className="h-4 w-4" />
                (48) 99679-1427
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
