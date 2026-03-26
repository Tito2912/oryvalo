import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How affiliate links work on Oryvalo and our editorial transparency policy.',
  alternates: { canonical: '/affiliate-disclosure' },
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="stack">
      <h1>Affiliate Disclosure</h1>
      <p>Some pages contain affiliate links. We may earn a commission at no extra cost to you.</p>
      <p>We aim to recommend tools that are relevant and useful for beginners and creators.</p>
    </article>
  );
}
