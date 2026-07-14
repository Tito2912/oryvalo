import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Oryvalo, our editorial approach, and how we keep recommendations transparent.',
  alternates: { canonical: '/about' },
  openGraph: { url: '/about' },
};

export default function AboutPage() {
  return (
    <article className="stack">
      <h1>About Oryvalo</h1>
      <p className="muted">Last updated: April 6, 2026</p>

      <p>
        Oryvalo publishes practical, beginner-friendly guides about building online businesses with AI tools.
      </p>

      <h2>What we publish</h2>
      <ul className="list">
        <li>Step-by-step tutorials and roadmaps</li>
        <li>Tool roundups for beginners</li>
        <li>Honest reviews and comparisons (when relevant)</li>
      </ul>

      <h2>How we make money</h2>
      <p>
        Some pages may contain affiliate links. If you purchase through them, we may earn a commission at no extra cost
        to you. Read our <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>.
      </p>

      <h2>How we write and update content</h2>
      <p>
        See our <Link href="/editorial-policy">Editorial Policy</Link> for how we structure articles, recommend tools,
        and handle updates and corrections.
      </p>

      <h2>Contact</h2>
      <p>
        For feedback, corrections, or business inquiries, email{' '}
        <a href="mailto:contact@oryvalo.com">contact@oryvalo.com</a>.
      </p>
    </article>
  );
}
