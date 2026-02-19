"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
} from "lucide-react";
import { regularizacao, engenharia, subServices } from "@/lib/services";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="container-custom flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="4Projetos"
            width={160}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand"
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
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Serviços
              <ChevronDown
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Mega Menu Dropdown */}
            {servicesOpen && (
              <div className="absolute -left-20 top-full pt-2">
                <div className="w-[680px] rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Regularização Column */}
                    <div>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-brand">
                        Regularização
                      </h3>
                      <div className="space-y-1">
                        {regularizacao.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/servicos/${s.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-brand-muted/30 hover:text-brand-dark"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Engenharia Column */}
                    <div>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-brand">
                        Engenharia
                      </h3>
                      <div className="space-y-1">
                        {engenharia.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/servicos/${s.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-brand-muted/30 hover:text-brand-dark"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                        {/* Sub-services with indent */}
                        {subServices.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/servicos/${s.slug}`}
                            className="block rounded-lg px-3 py-2 pl-6 text-xs text-gray-400 transition-colors hover:bg-brand-muted/30 hover:text-brand-dark"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Bar */}
                  <div className="mt-5 flex items-center justify-between rounded-xl bg-brand-dark px-5 py-3">
                    <p className="text-sm text-white/80">
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
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand"
          >
            Sobre
          </Link>
          <Link
            href="/cases"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand"
          >
            Cases
          </Link>
          <Link
            href="/blog"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand"
          >
            Blog
          </Link>
          <Link
            href="/contato"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand"
          >
            Contato
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+5548996791427"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand"
          >
            <Phone className="h-4 w-4" />
            (48) 99679-1427
          </a>
          <Link href="/contato" className="btn-primary">
            Orçamento Grátis
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="rounded-lg p-2 text-gray-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="container-custom space-y-1 px-4 py-4">
            <Link
              href="/"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Início
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Serviços
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 space-y-0.5 border-l-2 border-brand-muted pl-4">
                  <p className="pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-brand">
                    Regularização
                  </p>
                  {regularizacao.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicos/${s.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-brand"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                  <p className="pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-brand">
                    Engenharia
                  </p>
                  {[...engenharia, ...subServices].map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicos/${s.slug}`}
                      className={`block rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-brand ${s.isSubService ? "pl-6 text-xs text-gray-400" : ""}`}
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
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/cases"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Cases
            </Link>
            <Link
              href="/blog"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contato"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Contato
            </Link>

            <div className="border-t border-gray-100 pt-4">
              <Link
                href="/contato"
                className="btn-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Orçamento Grátis
              </Link>
              <a
                href="tel:+5548996791427"
                className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-gray-600"
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
