import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'SEO',
  description: 'Beginner-friendly SEO guides: keyword research, internal linking, and a traffic system that compounds.',
  alternates: { canonical: '/seo' },
};

const FEATURED_SLUGS = [
  'keyword-research-tutorial',
  'how-to-get-traffic-to-a-website',
  'how-to-start-a-blog',
  'semrush-review',
] as const;

export default async function SeoHubPage() {
  const posts = await getAllPosts();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const featured = FEATURED_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (p): p is (typeof posts)[number] => Boolean(p),
  );

  return (
    <article className="stack">
      <h1>SEO</h1>
      <p className="muted">Start with keywords, publish by cluster, and iterate from Search Console data.</p>

      <section className="card">
        <h2>Core guides</h2>
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
          <li><Link href="/online-business">Online business</Link></li>
          <li><Link href="/ai-tools">AI tools</Link></li>
        </ul>
      </section>
    </article>
  );
}
