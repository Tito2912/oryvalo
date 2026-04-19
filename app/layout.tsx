import type { Metadata } from 'next';
import './globals.css';
import { CookieBanner } from '@/components/CookieBanner';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from '@/lib/schema';
import { getSiteUrl } from '@/lib/site';

function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Oryvalo — AI Video Service & AI Tools Guides",
    template: "%s | Oryvalo",
  },
  description:
    "Learn how to start an AI video service and build online income using AI tools. Step-by-step workflows, pricing, outreach, and beginner guides.",
  alternates: { canonical: "/" },
  other: {
    'impact-site-verification': 'e17f13f7-aee6-40cc-a055-7faff03e24b1',
  },
  openGraph: {
    type: "website",
    title: "Oryvalo — AI Video Service & AI Tools Guides",
    description:
      "Beginner-friendly tutorials on starting an AI video service, choosing tools, pricing packages, and getting clients.",
    url: getSiteUrl(),
    siteName: "Oryvalo",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Oryvalo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oryvalo — AI Video Service & AI Tools Guides",
    description:
      "Beginner-friendly tutorials on starting an AI video service, choosing tools, pricing packages, and getting clients.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" title="Oryvalo RSS" href="/rss.xml" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(buildOrganizationJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(buildWebsiteJsonLd()) }} />
        <SiteHeader />
        <main className="container">{children}</main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
