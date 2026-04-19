import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'AI Tools',
  description: 'Practical AI tools and workflows for beginners: content, video, automation, and monetization.',
  alternates: { canonical: '/ai-tools' },
};

const FEATURED_SLUGS = [
  'best-ai-tools-for-beginners',
  'make-money-with-ai',
  'ai-video-business',
] as const;

export default async function AiToolsHubPage() {
  const posts = await getAllPosts();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const featured = FEATURED_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (p): p is (typeof posts)[number] => Boolean(p),
  );

  return (
    <article className="stack">
      <h1>AI tools</h1>
      <p className="muted">A small stack you can actually use: writing → voice → video → publishing.</p>

      <section className="card">
        <h2>Start with these</h2>
        <ul className="list">
          {featured.map((p) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}`}>{p.title}</Link>
              <div className="muted">{p.description}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Related topics</h2>
        <ul className="list">
          <li><Link href="/ai-video">AI video</Link></li>
          <li><Link href="/online-business">Online business</Link></li>
          <li><Link href="/seo">SEO</Link></li>
        </ul>
      </section>
    </article>
  );
}
