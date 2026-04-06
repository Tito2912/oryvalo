'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnalyticsEvents } from '@/components/AnalyticsEvents';
import { getAnalyticsConfig } from '@/lib/analytics';

type Consent = 'accepted' | 'refused';
const COOKIE_KEY = 'oryvalo_cookies_v1';
const COOKIE_MAX_AGE_DAYS = 180;

function getCookie(name: string): string | null {
  try {
    const cookies = document.cookie ? document.cookie.split(';') : [];
    for (const c of cookies) {
      const [k, ...rest] = c.trim().split('=');
      if (k === name) return decodeURIComponent(rest.join('='));
    }
  } catch {
    // ignore
  }
  return null;
}

function setCookie(name: string, value: string) {
  const maxAge = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
  const secure = typeof window !== 'undefined' && window.location?.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
}

function ensureGa4Loaded(measurementId: string) {
  const w = window as any;
  if (w.__oryvalo_ga4_loaded) return;
  w.__oryvalo_ga4_loaded = true;

  const ext = document.createElement('script');
  ext.async = true;
  ext.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(ext);

  const inline = document.createElement('script');
  inline.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', { anonymize_ip: true });
  `;
  document.head.appendChild(inline);
}

function ensurePlausibleLoaded(domain: string, src: string) {
  const w = window as any;
  if (w.__oryvalo_plausible_loaded) return;
  w.__oryvalo_plausible_loaded = true;

  w.plausible =
    w.plausible ||
    function plausible() {
      (w.plausible.q = w.plausible.q || []).push(arguments);
    };

  const script = document.createElement('script');
  script.defer = true;
  script.src = src;
  script.setAttribute('data-domain', domain);
  document.head.appendChild(script);
}

function ensureUmamiLoaded(websiteId: string, src: string, domains?: string) {
  const w = window as any;
  if (w.__oryvalo_umami_loaded) return;
  w.__oryvalo_umami_loaded = true;

  w.umami =
    w.umami ||
    ({
      track: function track() {
        (w.umami.q = w.umami.q || []).push(arguments);
      },
    } as any);

  const script = document.createElement('script');
  script.defer = true;
  script.src = src;
  script.setAttribute('data-website-id', websiteId);
  if (domains) script.setAttribute('data-domains', domains);
  document.head.appendChild(script);
}

export function CookieBanner() {
  const [hidden, setHidden] = useState(true);
  const privacyHref = '/privacy-policy';
  const analytics = getAnalyticsConfig();

  if (!analytics.enabled) return null;

  useEffect(() => {
    try {
      const cookieConsent = getCookie(COOKIE_KEY) as Consent | null;
      if (cookieConsent === 'accepted') {
        if (analytics.provider === 'ga4') ensureGa4Loaded(analytics.measurementId);
        if (analytics.provider === 'plausible') ensurePlausibleLoaded(analytics.domain, analytics.src);
        if (analytics.provider === 'umami') ensureUmamiLoaded(analytics.websiteId, analytics.src, analytics.domains);
      }
      if (cookieConsent === 'accepted' || cookieConsent === 'refused') {
        setHidden(true);
        return;
      }

      const storageConsent = localStorage.getItem(COOKIE_KEY) as Consent | null;
      if (storageConsent === 'accepted') {
        if (analytics.provider === 'ga4') ensureGa4Loaded(analytics.measurementId);
        if (analytics.provider === 'plausible') ensurePlausibleLoaded(analytics.domain, analytics.src);
        if (analytics.provider === 'umami') ensureUmamiLoaded(analytics.websiteId, analytics.src, analytics.domains);
      }
      if (storageConsent === 'accepted' || storageConsent === 'refused') {
        setHidden(true);
        return;
      }

      setHidden(false);
    } catch {
      setHidden(false);
    }
  }, []);

  function set(consent: Consent) {
    try {
      setCookie(COOKIE_KEY, consent);
      localStorage.setItem(COOKIE_KEY, consent);
    } catch {
      // ignore
    }
    if (consent === 'accepted') {
      if (analytics.provider === 'ga4') ensureGa4Loaded(analytics.measurementId);
      if (analytics.provider === 'plausible') ensurePlausibleLoaded(analytics.domain, analytics.src);
      if (analytics.provider === 'umami') ensureUmamiLoaded(analytics.websiteId, analytics.src, analytics.domains);
    }
    setHidden(true);
  }

  return (
    <>
      <AnalyticsEvents provider={analytics.provider} />
      <div aria-label="Cookie banner" aria-live="polite" className={`cookie-banner ${hidden ? 'hidden' : ''}`} role="dialog">
        <p>
          We use analytics to improve the site. <Link href={privacyHref}>Privacy policy</Link>
        </p>
        <div className="cookie-actions">
          <button className="button primary" onClick={() => set('accepted')} type="button">
            Accept
          </button>
          <button className="button" onClick={() => set('refused')} type="button">
            Reject
          </button>
        </div>
      </div>
    </>
  );
}
