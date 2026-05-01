import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato — Orçamento Gratuito | 4Projetos Florianópolis",
  description:
    "Solicite um orçamento gratuito para regularização de imóveis ou projetos de engenharia em Florianópolis. Atendimento por WhatsApp, telefone e e-mail.",
  keywords: [
    "contato 4projetos",
    "orçamento engenharia florianópolis",
    "regularização de imóveis orçamento",
  ],
  alternates: { canonical: "https://4projetos.com.br/contato" },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
