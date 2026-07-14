import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How affiliate links work on Oryvalo, how they fund our free guides, and how we keep every recommendation honest and transparent for readers.',
  alternates: { canonical: '/affiliate-disclosure' },
  openGraph: { url: '/affiliate-disclosure' },
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="stack">
      <h1>Affiliate Disclosure</h1>
      <p className="muted">Last updated: April 6, 2026</p>

      <h2>Summary</h2>
      <p>
        Some links on Oryvalo are affiliate links. If you click and purchase, we may earn a commission at no additional
        cost to you.
      </p>

      <h2>Why affiliate links exist</h2>
      <p>
        Affiliate commissions help fund the time required to research, write, and update free guides. They do not
        change the price you pay.
      </p>

      <h2>Our editorial approach</h2>
      <ul className="list">
        <li>
          We aim to recommend tools and services that are relevant for beginners and creators.
        </li>
        <li>
          We try to be clear about who a tool is for, who it is not for, and what the tradeoffs are.
        </li>
        <li>
          We may update pages when tools, pricing, or best practices change.
        </li>
      </ul>

      <h2>Sponsored content</h2>
      <p>
        Unless explicitly stated, we do not accept payment to publish a positive review. If we ever publish sponsored
        content, we will label it clearly.
      </p>

      <h2>Questions or corrections</h2>
      <p>
        If you have questions, or if you believe a page is outdated or inaccurate, email us at{' '}
        <a href="mailto:contact@oryvalo.com">contact@oryvalo.com</a>.
      </p>

      <h2>Learn more</h2>
      <p>
        Read our <Link href="/editorial-policy">Editorial Policy</Link> for how we write and update content.
      </p>
    </article>
  );
}
