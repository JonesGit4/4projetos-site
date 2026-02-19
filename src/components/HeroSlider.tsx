"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    type: "brand" as const,
    headline: "Engenharia e Regularização",
    subline: "Soluções completas para o seu imóvel em Florianópolis e região",
    cta: { text: "Conheça nossos serviços", href: "/servicos" },
    ctaSecondary: { text: "Fale conosco", href: "/contato" },
  },
  {
    id: 2,
    type: "service" as const,
    headline: "Regularização de Imóveis",
    subline:
      "Habite-se, REURB, Averbação e muito mais. Transformamos pendências em segurança jurídica para seu patrimônio.",
    cta: { text: "Saiba mais", href: "/servicos/habite-se" },
    bgImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
  },
  {
    id: 3,
    type: "service" as const,
    headline: "Projetos de Engenharia",
    subline:
      "Arquitetônico, Estrutural, Elétrico, Hidrossanitário e mais. Projetos técnicos com excelência.",
    cta: { text: "Ver projetos", href: "/servicos/projeto-arquitetonico" },
    bgImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  },
];

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative mt-[100px]">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide relative">
              {slide.type === "brand" ? (
                /* ══════ SLIDE 1 — Logo Full Size ══════ */
                <div className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-offwhite transition-colors dark:bg-navy sm:min-h-[90vh]">
                  {/* Subtle decorations */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-copper/10 dark:border-copper/5" />
                    <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full border border-copper/8 dark:border-copper/3" />
                    <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-copper-light/10 dark:border-copper/5" />
                  </div>

                  <div className="container-custom relative z-10 flex flex-col items-center px-4 text-center lg:px-8">
                    {/* Logo FULL SIZE — transparent bg */}
                    {/* Light mode: SVG (white bg blends into offwhite) */}
                    <Image
                      src="/logo.svg"
                      alt="4Projetos"
                      width={600}
                      height={600}
                      className="mb-8 h-64 w-auto dark:hidden sm:h-80 md:h-[400px] lg:h-[480px]"
                      priority
                    />
                    {/* Dark mode: transparent PNG */}
                    <Image
                      src="/logo-light.png"
                      alt="4Projetos"
                      width={600}
                      height={600}
                      className="mb-8 hidden h-64 w-auto dark:block sm:h-80 md:h-[400px] lg:h-[480px]"
                      priority
                    />

                    <h1 className="mb-4 font-heading text-3xl leading-tight text-navy dark:text-offwhite sm:text-4xl md:text-5xl">
                      {slide.headline}
                    </h1>

                    <p className="mb-8 max-w-xl text-lg leading-relaxed text-charcoal/60 dark:text-gray-400 sm:text-xl">
                      {slide.subline}
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Link href={slide.cta.href} className="btn-primary">
                        {slide.cta.text}
                      </Link>
                      {slide.ctaSecondary && (
                        <Link href={slide.ctaSecondary.href} className="btn-secondary">
                          {slide.ctaSecondary.text}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* ══════ OTHER SLIDES — Dark navy bg + image ══════ */
                <div className="relative flex min-h-[85vh] items-center overflow-hidden bg-navy sm:min-h-[90vh]">
                  {slide.bgImage && (
                    <div className="absolute inset-0">
                      <Image
                        src={slide.bgImage}
                        alt=""
                        fill
                        className="object-cover opacity-15"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
                    </div>
                  )}

                  <div className="container-custom relative z-10 px-4 lg:px-8">
                    <div className="max-w-3xl">
                      <h1 className="mb-4 font-heading text-4xl leading-tight text-offwhite sm:text-5xl md:text-6xl lg:text-7xl">
                        {slide.headline}
                      </h1>
                      <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
                        {slide.subline}
                      </p>
                      <Link
                        href={slide.cta.href}
                        className="btn-primary"
                      >
                        {slide.cta.text}
                      </Link>
                    </div>
                  </div>

                  <div className="absolute -right-20 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-copper/10 lg:block" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-copper/40 bg-offwhite/90 p-3 text-navy shadow-md backdrop-blur-sm transition-all hover:bg-copper hover:text-white dark:border-copper/50 dark:bg-navy/80 dark:text-copper-light dark:hover:bg-copper dark:hover:text-white"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-copper/40 bg-offwhite/90 p-3 text-navy shadow-md backdrop-blur-sm transition-all hover:bg-copper hover:text-white dark:border-copper/50 dark:bg-navy/80 dark:text-copper-light dark:hover:bg-copper dark:hover:text-white"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === selectedIndex
                ? "w-8 bg-copper"
                : "w-2 bg-navy/30 hover:bg-navy/50 dark:bg-white/30 dark:hover:bg-white/50"
            }`}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
