import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocalBusinessJsonLd, FAQPageJsonLd } from "@/components/JsonLd";

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
  metadataBase: new URL("https://4projetos.com.br"),
  title: {
    default: "4Projetos — Engenharia e Regularização de Imóveis | Florianópolis SC",
    template: "%s | 4Projetos",
  },
  description:
    "Empresa de engenharia e regularização de imóveis em Florianópolis e região. Habite-se, REURB, averbação, projetos arquitetônicos, estruturais, elétricos e mais. Consulta gratuita.",
  keywords: [
    "regularização de imóveis florianópolis",
    "habite-se florianópolis",
    "projeto arquitetônico florianópolis",
    "engenharia florianópolis",
    "REURB florianópolis",
    "averbação de imóvel florianópolis",
    "legalização de obra florianópolis",
    "engenheiro civil florianópolis",
    "empresa de regularização de imóveis em florianópolis",
    "4projetos",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "4Projetos — Engenharia e Regularização de Imóveis",
    description:
      "Soluções completas em engenharia e regularização de imóveis em Florianópolis. Habite-se, REURB, projetos e mais.",
    url: "https://4projetos.com.br",
    siteName: "4Projetos",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://4projetos.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" type="image/png" />
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
      <body className="min-h-screen bg-offwhite transition-colors dark:bg-navy">
        <LocalBusinessJsonLd />
        <FAQPageJsonLd />
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
