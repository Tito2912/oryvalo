import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Oryvalo and our mission to help beginners build online income with AI tools.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <article className="stack">
      <h1>About Oryvalo</h1>
      <p>Oryvalo publishes practical, beginner-friendly guides about building online businesses with AI tools.</p>
      <p>Our goal is simple: provide clear tutorials, realistic workflows, and transparent tool recommendations.</p>
    </article>
  );
}
