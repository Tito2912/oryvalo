import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'AI Video',
  description: 'AI video workflows and service-business guides: packages, pricing, client outreach, and simple tools for beginners.',
  alternates: { canonical: '/ai-video' },
};

const FEATURED_SLUGS = [
  'ai-video-business',
  'ai-video-service-pricing',
  'ai-video-service-clients',
  'ai-video-portfolio',
] as const;

const WORKFLOW_SLUGS = [
  'ai-video-workflow',
  'repurpose-one-video-into-10-shorts',
] as const;

const INDUSTRY_SLUGS = [
  'ai-videos-for-real-estate-agents',
  'ai-videos-for-restaurants',
  'ai-videos-for-gyms',
] as const;

const TOOL_SLUGS = [
  'best-ai-video-tools-for-small-business',
  'invideo-vs-pictory',
] as const;

export default async function AiVideoHubPage() {
  const posts = await getAllPosts();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const featured = FEATURED_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (p): p is (typeof posts)[number] => Boolean(p),
  );
  const workflow = WORKFLOW_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (p): p is (typeof posts)[number] => Boolean(p),
  );
  const industries = INDUSTRY_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (p): p is (typeof posts)[number] => Boolean(p),
  );
  const tools = TOOL_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (p): p is (typeof posts)[number] => Boolean(p),
  );

  return (
    <article className="stack">
      <h1>AI video</h1>
      <p className="muted">
        The simplest beginner model: sell short videos to small businesses using a repeatable AI workflow.
      </p>

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

      {workflow.length ? (
        <section className="card">
          <h2>Workflows</h2>
          <ul className="list">
            {workflow.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`}>{p.title}</Link>
                <div className="muted">{p.description}</div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {industries.length ? (
        <section className="card">
          <h2>Industries</h2>
          <ul className="list">
            {industries.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`}>{p.title}</Link>
                <div className="muted">{p.description}</div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {tools.length ? (
        <section className="card">
          <h2>Tools</h2>
          <ul className="list">
            {tools.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`}>{p.title}</Link>
                <div className="muted">{p.description}</div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="card">
        <h2>Related topics</h2>
        <ul className="list">
          <li><Link href="/ai-tools">AI tools</Link></li>
          <li><Link href="/online-business">Online business</Link></li>
          <li><Link href="/seo">SEO</Link></li>
        </ul>
      </section>
    </article>
  );
}
