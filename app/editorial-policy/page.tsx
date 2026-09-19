import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: 'How Oryvalo writes, reviews, and updates its content, recommends tools for beginners, and handles affiliate links transparently.',
  alternates: { canonical: '/editorial-policy' },
  openGraph: { url: '/editorial-policy' },
};

export default function EditorialPolicyPage() {
  return (
    <article className="stack">
      <h1>Editorial Policy</h1>
      <p className="muted">Last updated: April 6, 2026</p>

      <h2>Our goal</h2>
      <p>
        Oryvalo publishes beginner-friendly guides and tool recommendations to help you build an online business.
      </p>

      <h2>How we create content</h2>
      <ul className="list">
        <li>
          We focus on clear, intent-matched content (what the reader is trying to achieve).
        </li>
        <li>
          We aim to structure pages so you can skim, act, and get results quickly (steps, examples, FAQs).
        </li>
        <li>
          When possible, we update content as tools and best practices change.
        </li>
      </ul>

      <h2>How we recommend tools</h2>
      <p>
        We try to recommend tools that are practical for beginners. Recommendations are based on a mix of factors such
        as usability, feature set, pricing clarity, and real-world fit for the workflow described in the article.
      </p>

      <h2>Affiliate links and monetization</h2>
      <p>
        Some links are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you.
        See our <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for details.
      </p>

      <h2>Corrections and updates</h2>
      <p>
        If you believe a page is inaccurate or outdated, please email{' '}
        <a href="mailto:contact@oryvalo.com">contact@oryvalo.com</a>. We review feedback and update pages when needed.
      </p>

      <h2>About Oryvalo</h2>
      <p>
        Learn more on the <Link href="/about">About</Link> page.
      </p>
    </article>
  );
}

