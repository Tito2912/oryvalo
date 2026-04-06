import { GA4_ID, getSiteUrl } from '@/lib/site';

export type AnalyticsConfig =
  | { enabled: false }
  | { enabled: true; provider: 'ga4'; measurementId: string }
  | { enabled: true; provider: 'plausible'; domain: string; src: string }
  | { enabled: true; provider: 'umami'; src: string; websiteId: string; domains?: string };

export function getAnalyticsConfig(): AnalyticsConfig {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER?.trim().toLowerCase();
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID?.trim() || GA4_ID;
  if (!provider) return ga4Id ? { enabled: true, provider: 'ga4', measurementId: ga4Id } : { enabled: false };

  if (provider === 'none' || provider === 'off' || provider === 'disabled') {
    return { enabled: false };
  }

  if (provider === 'ga4') {
    return ga4Id ? { enabled: true, provider: 'ga4', measurementId: ga4Id } : { enabled: false };
  }

  if (provider === 'plausible') {
    const baseUrl = getSiteUrl();
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim() || new URL(baseUrl).hostname;
    const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC?.trim() || 'https://plausible.io/js/script.js';
    return { enabled: true, provider: 'plausible', domain, src };
  }

  if (provider === 'umami') {
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim();
    if (!websiteId) return { enabled: false };
    const src = process.env.NEXT_PUBLIC_UMAMI_SRC?.trim() || 'https://analytics.umami.is/script.js';
    const domains = process.env.NEXT_PUBLIC_UMAMI_DOMAINS?.trim();
    return { enabled: true, provider: 'umami', src, websiteId, domains: domains?.length ? domains : undefined };
  }

  return { enabled: false };
}
