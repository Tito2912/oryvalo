import type { Post } from '@/lib/types';
import { getSiteUrl } from '@/lib/site';

const BASE_URL = getSiteUrl();
const BRAND_NAME = 'Oryvalo';

const ORG_ID = `${BASE_URL}#organization`;
const WEBSITE_ID = `${BASE_URL}#website`;

export function buildOrganizationJsonLd() {
  const sameAs = (process.env.NEXT_PUBLIC_ORG_SAME_AS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: BRAND_NAME,
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: new URL('/oryvalo-logo.png', BASE_URL).toString(),
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function buildWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: BRAND_NAME,
    url: BASE_URL,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

export function buildArticleJsonLd(post: Post) {
  const url = new URL(post.canonical ?? `/${post.slug}`, BASE_URL).toString();
  const published = post.date ?? post.updatedAt ?? new Date().toISOString();
  const modified = post.updatedAt ?? published;
  const imageUrl = new URL(`/${post.slug}/opengraph-image`, BASE_URL).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    isPartOf: { '@id': WEBSITE_ID },
    headline: post.title,
    description: post.description,
    image: [imageUrl],
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: published,
    dateModified: modified,
    author: [{ '@id': ORG_ID }],
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

export function buildBreadcrumbJsonLd(post: Post) {
  const url = new URL(post.canonical ?? `/${post.slug}`, BASE_URL).toString();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: post.title,
        item: url,
      },
    ],
  };
}
