import { SITE_CONFIG } from './constants';

export function createMetadata({
  title,
  description,
  path = '',
  keywords = [],
  type = 'website',
  image = '/images/brand/og-image.svg',
}) {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle = title.includes('HanuCode') ? title : `${title} | HanuCode`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      type,
      locale: 'en_US',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
