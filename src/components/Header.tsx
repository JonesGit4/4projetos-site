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
          ? "h-16 shadow-md backdrop-blur-xl bg-offwhite/80 dark:bg-navy/80 border-b border-copper-light/20 dark:border-navy-light/30"
          : "h-20 backdrop-blur-md bg-offwhite/50 dark:bg-navy/50"
      )}
    >
      <div className="container-custom flex h-full items-center justify-between px-4 lg:px-8">
        {/* Logo — BIGGER, fills area */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="4Projetos"
            width={240}
            height={72}
            className={cn(
              "w-auto transition-all duration-300",
              scrolled ? "h-11 sm:h-12" : "h-14 sm:h-16",
              "dark:brightness-110 dark:contrast-110"
            )}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-btn px-4 py-2 text-sm font-medium text-navy transition-colors hover:text-copper dark:text-copper-light dark:hover:text-white"
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
              className="flex items-center gap-1 rounded-btn px-4 py-2 text-sm font-medium text-navy transition-colors hover:text-copper dark:text-copper-light dark:hover:text-white"
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

            {servicesOpen && (
              <div className="absolute -left-20 top-full pt-2">
                <div className="w-[680px] rounded-lg border border-copper-light/20 bg-offwhite/95 p-6 shadow-2xl backdrop-blur-xl dark:border-navy-light/30 dark:bg-navy/95">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-copper dark:text-copper-light">
                        Regularização
                      </h3>
                      <div className="space-y-1">
                        {regularizacao.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/servicos/${s.slug}`}
                            className="block rounded-btn px-3 py-2 text-sm text-charcoal/70 transition-colors hover:bg-copper/10 hover:text-navy dark:text-gray-400 dark:hover:bg-copper/10 dark:hover:text-copper-light"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-copper dark:text-copper-light">
                        Engenharia
                      </h3>
                      <div className="space-y-1">
                        {engenharia.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/servicos/${s.slug}`}
                            className="block rounded-btn px-3 py-2 text-sm text-charcoal/70 transition-colors hover:bg-copper/10 hover:text-navy dark:text-gray-400 dark:hover:bg-copper/10 dark:hover:text-copper-light"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                        {subServices.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/servicos/${s.slug}`}
                            className="block rounded-btn px-3 py-2 pl-6 text-xs text-charcoal/50 transition-colors hover:bg-copper/10 hover:text-navy dark:text-gray-500 dark:hover:bg-copper/10 dark:hover:text-copper-light"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between rounded-btn bg-navy px-5 py-3 dark:bg-navy-light">
                    <p className="text-sm text-white/70">
                      Não sabe por onde começar?
                    </p>
                    <Link
                      href="/contato"
                      className="text-sm font-semibold text-copper-light transition-colors hover:text-white"
                      onClick={() => setServicesOpen(false)}
                    >
                      Fale conosco →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {["Sobre", "Cases", "Blog", "Contato"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="rounded-btn px-4 py-2 text-sm font-medium text-navy transition-colors hover:text-copper dark:text-copper-light dark:hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-navy/60 transition-colors hover:text-copper dark:text-copper-light/60 dark:hover:text-copper-light"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href="tel:+5548996791427"
            className="flex items-center gap-2 text-sm font-medium text-navy/70 hover:text-copper dark:text-gray-400 dark:hover:text-copper-light"
          >
            <Phone className="h-4 w-4" />
            (48) 99679-1427
          </a>
          <Link href="/contato" className="btn-primary">
            Orçamento Grátis
          </Link>
        </div>

        {/* Mobile: Theme + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-navy/60 dark:text-copper-light/60"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            className="rounded-btn p-2 text-navy dark:text-copper-light"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-copper-light/20 bg-offwhite/95 backdrop-blur-xl dark:border-navy-light/30 dark:bg-navy/95 lg:hidden">
          <nav className="container-custom space-y-1 px-4 py-4">
            <Link
              href="/"
              className="block rounded-btn px-4 py-3 text-sm font-medium text-navy hover:bg-copper/10 dark:text-copper-light dark:hover:bg-copper/10"
              onClick={() => setMobileOpen(false)}
            >
              Início
            </Link>

            <div>
              <button
                className="flex w-full items-center justify-between rounded-btn px-4 py-3 text-sm font-medium text-navy hover:bg-copper/10 dark:text-copper-light dark:hover:bg-copper/10"
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
                <div className="ml-4 space-y-0.5 border-l-2 border-copper/30 pl-4">
                  <p className="pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-copper">
                    Regularização
                  </p>
                  {regularizacao.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicos/${s.slug}`}
                      className="block rounded-btn px-3 py-2 text-sm text-charcoal/70 hover:text-copper dark:text-gray-400 dark:hover:text-copper-light"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                  <p className="pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-copper">
                    Engenharia
                  </p>
                  {[...engenharia, ...subServices].map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicos/${s.slug}`}
                      className={cn(
                        "block rounded-btn px-3 py-2 text-sm text-charcoal/70 hover:text-copper dark:text-gray-400 dark:hover:text-copper-light",
                        s.isSubService && "pl-6 text-xs opacity-70"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {["Sobre", "Cases", "Blog", "Contato"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block rounded-btn px-4 py-3 text-sm font-medium text-navy hover:bg-copper/10 dark:text-copper-light dark:hover:bg-copper/10"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}

            <div className="border-t border-copper-light/20 pt-4 dark:border-navy-light/30">
              <Link
                href="/contato"
                className="btn-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Orçamento Grátis
              </Link>
              <a
                href="tel:+5548996791427"
                className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-navy/70 dark:text-gray-400"
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
