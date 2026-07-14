import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Oryvalo for reader feedback, content corrections, partnership questions, and business inquiries. We reply to every message.',
  alternates: { canonical: '/contact' },
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
