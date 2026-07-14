import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Oryvalo for feedback, corrections, and business inquiries.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact' },
};

export default function ContactPage() {
  return (
    <article className="stack">
      <h1>Contact</h1>
      <p>For feedback, corrections, or business inquiries, email us at:</p>
      <p><a href="mailto:contact@oryvalo.com">contact@oryvalo.com</a></p>
    </article>
  );
}
