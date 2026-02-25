import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: {
    default: "Oryvalo — AI Tools & Online Business Guides",
    template: "%s | Oryvalo",
  },
  description:
    "Learn how to make money online using AI tools. Step-by-step guides, tutorials, and software recommendations for beginners and creators.",
  metadataBase: new URL("https://oryvalo.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Oryvalo — AI Tools & Online Business Guides",
    description:
      "Beginner-friendly tutorials on AI tools, faceless YouTube, automation, and online business ideas.",
    url: "https://oryvalo.com",
    siteName: "Oryvalo",
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
