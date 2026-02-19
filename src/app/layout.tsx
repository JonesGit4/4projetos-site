import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "4Projetos — Engenharia e Regularização | Florianópolis",
  description:
    "Engenharia, projetos e regularização de imóveis em Florianópolis e região. Habite-se, REURB, projetos arquitetônicos, estruturais, elétricos e mais. Consulta gratuita.",
  keywords: [
    "regularização de imóveis florianópolis",
    "habite-se florianópolis",
    "projeto arquitetônico florianópolis",
    "engenharia florianópolis",
    "REURB florianópolis",
    "4projetos",
  ],
  openGraph: {
    title: "4Projetos — Engenharia e Regularização",
    description:
      "Soluções completas em engenharia e regularização de imóveis em Florianópolis.",
    url: "https://4projetos.com.br",
    siteName: "4Projetos",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSerif.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      {/* Inline script to prevent flash of wrong theme */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white transition-colors dark:bg-gray-950">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
