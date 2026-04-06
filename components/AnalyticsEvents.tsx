'use client';

import { useEffect } from 'react';

type Provider = 'ga4' | 'plausible' | 'umami';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
    umami?: { track?: (eventName: string, props?: Record<string, string>) => void };
  }
}

function toProps(anchor: HTMLAnchorElement): Record<string, string> {
  const href = anchor.getAttribute('href') ?? '';
  const label = anchor.dataset.analyticsLabel?.trim() || anchor.textContent?.trim() || href;
  return {
    label,
    href,
    path: window.location.pathname,
  };
}

function track(provider: Provider, eventName: string, props: Record<string, string>) {
  if (provider === 'ga4') {
    window.gtag?.('event', eventName, props);
    return;
  }
  if (provider === 'plausible') {
    window.plausible?.(eventName, { props });
    return;
  }
  window.umami?.track?.(eventName, props);
}

export function AnalyticsEvents({ provider }: { provider: Provider }) {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.('a') as HTMLAnchorElement | null;
      if (!anchor) return;

      const eventName = anchor.dataset.analyticsEvent?.trim();
      if (!eventName) return;

      track(provider, eventName, toProps(anchor));
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [provider]);

  return null;
}
