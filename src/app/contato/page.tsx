"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContatoPage() {
  const [formState, setFormState] = useState({ nome: "", email: "", telefone: "", servico: "", mensagem: "" });

  return (
    <div className="pt-[100px]">
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-custom px-4 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-copper-light">Contato</p>
          <h1 className="mb-4 font-heading text-4xl text-offwhite sm:text-5xl">Fale Conosco</h1>
          <p className="max-w-2xl text-lg text-white/50">Solicite um orçamento gratuito ou tire suas dúvidas.</p>
        </div>
      </section>

      <section className="section-padding bg-offwhite dark:bg-navy">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="mb-6 font-heading text-2xl text-navy dark:text-offwhite">Solicite um orçamento</h2>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const msg = `Olá! Meu nome é ${formState.nome}. ${formState.servico ? `Interesse em: ${formState.servico}. ` : ""}${formState.mensagem}`;
                  window.open(`https://wa.me/5548996791427?text=${encodeURIComponent(msg)}`, "_blank");
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy dark:text-offwhite">Nome completo *</label>
                    <input type="text" required value={formState.nome} onChange={(e) => setFormState({ ...formState, nome: e.target.value })} className="w-full rounded-btn border border-copper-light/30 bg-white px-4 py-3 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 dark:border-navy-light/50 dark:bg-navy-light/30 dark:text-offwhite" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy dark:text-offwhite">Telefone *</label>
                    <input type="tel" required value={formState.telefone} onChange={(e) => setFormState({ ...formState, telefone: e.target.value })} className="w-full rounded-btn border border-copper-light/30 bg-white px-4 py-3 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 dark:border-navy-light/50 dark:bg-navy-light/30 dark:text-offwhite" placeholder="(48) 99999-9999" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy dark:text-offwhite">E-mail</label>
                  <input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full rounded-btn border border-copper-light/30 bg-white px-4 py-3 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 dark:border-navy-light/50 dark:bg-navy-light/30 dark:text-offwhite" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy dark:text-offwhite">Serviço de interesse</label>
                  <select value={formState.servico} onChange={(e) => setFormState({ ...formState, servico: e.target.value })} className="w-full rounded-btn border border-copper-light/30 bg-white px-4 py-3 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 dark:border-navy-light/50 dark:bg-navy-light/30 dark:text-offwhite">
                    <option value="">Selecione um serviço</option>
                    <optgroup label="Regularização">
                      <option>Habite-se</option><option>REURB</option><option>Estremação</option><option>INSS Obra</option><option>Averbação</option><option>Incorporação Imobiliária</option><option>Instituição de Condomínio</option><option>Retificação de Área</option>
                    </optgroup>
                    <optgroup label="Engenharia">
                      <option>Projeto Arquitetônico</option><option>Projeto Hidrossanitário</option><option>Projeto Estrutural</option><option>Projeto Elétrico</option><option>PPCI</option><option>Projeto Luminotécnico</option><option>Projeto Acústico</option><option>Projeto Térmico</option><option>Topografia</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy dark:text-offwhite">Mensagem</label>
                  <textarea rows={4} value={formState.mensagem} onChange={(e) => setFormState({ ...formState, mensagem: e.target.value })} className="w-full rounded-btn border border-copper-light/30 bg-white px-4 py-3 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 dark:border-navy-light/50 dark:bg-navy-light/30 dark:text-offwhite" placeholder="Descreva brevemente o que precisa..." />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="h-4 w-4" /> Enviar pelo WhatsApp
                </button>
              </form>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="rounded-lg bg-navy p-6">
                  <h3 className="mb-6 text-lg font-semibold text-offwhite">Informações de contato</h3>
                  <div className="space-y-5">
                    <a href="tel:+5548996791427" className="flex items-start gap-3 text-white/60 transition-colors hover:text-copper-light">
                      <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-copper-light" />
                      <div><p className="text-sm font-medium text-offwhite">Telefone / WhatsApp</p><p className="text-sm">(48) 99679-1427</p></div>
                    </a>
                    <a href="mailto:contato@4projetos.com.br" className="flex items-start gap-3 text-white/60 transition-colors hover:text-copper-light">
                      <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-copper-light" />
                      <div><p className="text-sm font-medium text-offwhite">E-mail</p><p className="text-sm">contato@4projetos.com.br</p></div>
                    </a>
                    <div className="flex items-start gap-3 text-white/60">
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-copper-light" />
                      <div><p className="text-sm font-medium text-offwhite">Localização</p><p className="text-sm">Florianópolis — SC</p></div>
                    </div>
                    <div className="flex items-start gap-3 text-white/60">
                      <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-copper-light" />
                      <div><p className="text-sm font-medium text-offwhite">Atendimento</p><p className="text-sm">Seg — Sex: 9h às 18h</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
