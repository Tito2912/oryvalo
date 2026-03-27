import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Oryvalo.com.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="stack">
      <h1>Privacy Policy</h1>
      <p>We value your privacy and handle data responsibly.</p>
      <p>For privacy requests: <a href="mailto:contact@oryvalo.com">contact@oryvalo.com</a></p>
    </article>
  );
}
