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
    default: "Oryvalo — AI Tools & Online Business Guides",
    template: "%s | Oryvalo",
  },
  description:
    "Learn how to make money online using AI tools. Step-by-step guides, tutorials, and software recommendations for beginners and creators.",
  alternates: { canonical: "/" },
  other: {
    'impact-site-verification': 'e17f13f7-aee6-40cc-a055-7faff03e24b1',
  },
  openGraph: {
    type: "website",
    title: "Oryvalo — AI Tools & Online Business Guides",
    description:
      "Beginner-friendly tutorials on AI tools, faceless YouTube, automation, and online business ideas.",
    url: getSiteUrl(),
    siteName: "Oryvalo",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Oryvalo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oryvalo — AI Tools & Online Business Guides",
    description:
      "Beginner-friendly tutorials on AI tools, faceless YouTube, automation, and online business ideas.",
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
