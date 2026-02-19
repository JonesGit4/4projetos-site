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
    // Slide 1: Logo grande + Ponte Hercílio Luz
    type: "brand" as const,
    headline: "Engenharia e Regularização",
    subline: "Soluções completas para o seu imóvel em Florianópolis e região",
    cta: { text: "Conheça nossos serviços", href: "/servicos" },
    ctaSecondary: { text: "Fale conosco", href: "/contato" },
    bgImage:
      "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=1920&q=80",
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

  const scrollPrev = useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative mt-20">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide relative">
              <div className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-dark sm:min-h-[90vh]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.bgImage}
                    alt=""
                    fill
                    className="object-cover opacity-20"
                    priority={slide.id === 1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/70" />
                </div>

                {/* Content */}
                <div className="container-custom relative z-10 px-4 lg:px-8">
                  <div className="max-w-3xl">
                    {slide.type === "brand" && (
                      <div className="mb-8">
                        <Image
                          src="/logo-white.svg"
                          alt="4Projetos"
                          width={320}
                          height={96}
                          className="h-20 w-auto sm:h-28 md:h-32"
                          onError={(e) => {
                            // Fallback if white logo doesn't exist
                            (e.target as HTMLImageElement).src = "/logo.svg";
                          }}
                        />
                      </div>
                    )}

                    <h1 className="mb-4 font-heading text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.headline}
                    </h1>

                    <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
                      {slide.subline}
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Link
                        href={slide.cta.href}
                        className="btn-primary !bg-brand-light !text-brand-dark hover:!bg-white"
                      >
                        {slide.cta.text}
                      </Link>
                      {slide.ctaSecondary && (
                        <Link
                          href={slide.ctaSecondary.href}
                          className="btn-secondary !border-white/30 !text-white hover:!bg-white/10"
                        >
                          {slide.ctaSecondary.text}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -right-20 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-brand-light/10 lg:block" />
                <div className="absolute -right-10 top-1/2 hidden h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-brand-light/5 lg:block" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === selectedIndex
                ? "w-8 bg-brand-light"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
