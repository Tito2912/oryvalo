import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Online Business',
  description: 'Beginner roadmaps and checklists to start an online business: ideas, setup, traffic, and monetization.',
  alternates: { canonical: '/online-business' },
  openGraph: { url: '/online-business' },
};

const FEATURED_SLUGS = [
  'online-business-ideas',
  'how-to-start-an-online-business',
  'how-to-start-an-online-business-no-money',
  'how-to-create-an-online-store',
  'create-a-logo',
] as const;

export default async function OnlineBusinessHubPage() {
  const posts = await getAllPosts();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const featured = FEATURED_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (p): p is (typeof posts)[number] => Boolean(p),
  );

  return (
    <article className="stack">
      <h1>Online business</h1>
      <p className="muted">Pick a model, publish useful pages, build traffic, then monetize honestly.</p>

      <section className="card">
        <h2>Roadmaps and checklists</h2>
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
          <li><Link href="/seo">SEO</Link></li>
          <li><Link href="/ai-tools">AI tools</Link></li>
        </ul>
      </section>
    </article>
  );
}
