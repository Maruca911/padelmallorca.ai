import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
}

const SITE_URL = 'https://padelmallorca.ai';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export default function PageMeta({
  title,
  description,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetaProps) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
