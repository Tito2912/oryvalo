const DEFAULT_SITE_URL = 'https://oryvalo.com';

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (raw?.length ? raw : DEFAULT_SITE_URL).replace(/\/$/, '');
}

