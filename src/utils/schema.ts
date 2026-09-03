import { site, type Service } from "@data/site";

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: site.url },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: new URL(item.href, site.url).toString()
      }))
    ]
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil"
    },
    audience: {
      "@type": "Audience",
      audienceType: "E-commerces"
    },
    url: `${site.url}/servicos/${service.slug}/`
  };
}

export function faqSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function personSchema(person: { name: string; role: string; bio: string; photo: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    description: person.bio,
    image: new URL(person.photo, site.url).toString(),
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    }
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${site.url}/blog/${post.slug}/`,
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/assets/brand/etraction-logo.svg`
      }
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt
  };
}
