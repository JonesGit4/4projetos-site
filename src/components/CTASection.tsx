import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 sm:py-28">
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full border border-brand-light/5" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full border border-brand-light/5" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-light/5" />

      <div className="container-custom relative z-10 text-center">
        <h2 className="mb-4 font-heading text-3xl text-white sm:text-4xl md:text-5xl">
          Precisa regularizar ou projetar?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60">
          Entre em contato e receba um orçamento personalizado sem compromisso.
          Nossa equipe está pronta para ajudar.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contato"
            className="btn-primary !bg-brand-light !text-brand-dark hover:!bg-white"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar Orçamento
          </Link>
          <a
            href="https://wa.me/5548996791427?text=Olá! Gostaria de saber mais sobre os serviços da 4Projetos."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <Phone className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
