import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: {
    default: 'SaaS Affiliate SEO Site',
    template: '%s | SaaS Affiliate SEO Site',
  },
  description: 'SEO-first content site for SaaS affiliate marketing.',
  metadataBase: new URL('https://example.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'SaaS Affiliate SEO Site',
    description: 'SEO-first content site for SaaS affiliate marketing.',
    url: 'https://example.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="container">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
