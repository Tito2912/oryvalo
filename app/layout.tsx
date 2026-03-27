import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Oryvalo — AI Tools & Online Business Guides",
    template: "%s | Oryvalo",
  },
  description:
    "Learn how to make money online using AI tools. Step-by-step guides, tutorials, and software recommendations for beginners and creators.",
  alternates: { canonical: "/" },
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
      <body>
        <SiteHeader />
        <main className="container">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
