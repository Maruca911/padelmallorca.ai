interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Padel Mallorca',
  url: 'https://padelmallorca.ai',
  logo: 'https://padelmallorca.ai/favicon.svg',
  description: 'Free padel matching service in Mallorca. Courts, lessons, camps, and tournaments.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@padelmallorca.ai',
    contactType: 'customer service',
    availableLanguage: ['English', 'German', 'Spanish'],
  },
  areaServed: {
    '@type': 'Place',
    name: 'Mallorca, Spain',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Padel Mallorca',
  url: 'https://padelmallorca.ai',
  description: 'Find the best padel courts, lessons, camps, and tournaments in Mallorca with our free matching service.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://padelmallorca.ai/faq?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const localBusinessSchema = (business: {
  name: string;
  address: string;
  description: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: business.name,
  description: business.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: business.address,
    addressRegion: 'Mallorca',
    addressCountry: 'ES',
  },
  sport: 'Padel',
});

export const articleSchema = (article: {
  title: string;
  description: string;
  date: string;
  url: string;
  imageUrl: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  datePublished: article.date,
  image: article.imageUrl,
  url: article.url,
  author: {
    '@type': 'Organization',
    name: 'Padel Mallorca',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Padel Mallorca',
    logo: {
      '@type': 'ImageObject',
      url: 'https://padelmallorca.ai/favicon.svg',
    },
  },
});
