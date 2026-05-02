export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "4Projetos — Engenharia e Regularização",
    description:
      "Empresa de engenharia e regularização de imóveis em Florianópolis. Habite-se, REURB, projetos arquitetônicos, estruturais, elétricos e mais.",
    url: "https://4projetos.com.br",
    telephone: "+55-48-99679-1427",
    email: "contato@4projetos.com.br",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Florianópolis",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.5954,
      longitude: -48.548,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: -27.5954, longitude: -48.548 },
      geoRadius: "40000",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    image: "https://4projetos.com.br/logo.png",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQPageJsonLd() {
  const faqs = [
    {
      q: "Quanto tempo leva para conseguir o Habite-se?",
      a: "O prazo varia conforme a complexidade do imóvel e a prefeitura, mas normalmente entre 60 a 120 dias. Cuidamos de toda a documentação e acompanhamos o processo junto ao órgão.",
    },
    {
      q: "O que é REURB e como funciona?",
      a: "A Regularização Fundiária Urbana (REURB) é o processo previsto na Lei 13.465/2017 que permite regularizar imóveis em áreas urbanas. Analisamos sua situação, elaboramos o projeto e conduzimos todo o processo administrativo.",
    },
    {
      q: "Vocês atendem apenas em Florianópolis?",
      a: "Nosso escritório está em Florianópolis, mas atendemos toda a região da Grande Florianópolis e demais cidades de Santa Catarina.",
    },
    {
      q: "Preciso de todos os projetos de engenharia de uma vez?",
      a: "Não necessariamente. Você pode contratar projetos individuais. Porém, oferecemos condições especiais para pacotes completos, garantindo compatibilização entre as disciplinas.",
    },
    {
      q: "Como é feito o orçamento?",
      a: "O orçamento é personalizado e gratuito. Analisamos a documentação do seu imóvel, entendemos suas necessidades e apresentamos uma proposta detalhada com valores, prazos e escopo.",
    },
    {
      q: "Qual a diferença entre Averbação e Habite-se?",
      a: "O Habite-se é emitido pela prefeitura, atestando que a construção atende à legislação. A Averbação é o registro na matrícula do imóvel junto ao Cartório. Normalmente, primeiro se obtém o Habite-se, depois a Averbação.",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://4projetos.com.br${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BlogPostJsonLd({
  title,
  description,
  slug,
  date,
  readTime,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  readTime: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://4projetos.com.br/blog/${slug}`,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      name: "4Projetos",
      url: "https://4projetos.com.br",
    },
    publisher: {
      "@type": "Organization",
      name: "4Projetos",
      logo: { "@type": "ImageObject", url: "https://4projetos.com.br/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://4projetos.com.br/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
