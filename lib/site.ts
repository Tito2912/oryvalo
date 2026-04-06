const DEFAULT_SITE_URL = 'https://oryvalo.com';

export const GA4_ID = 'G-HEKWFEXLT8';

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (raw?.length ? raw : DEFAULT_SITE_URL).replace(/\/$/, '');
}
