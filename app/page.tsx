import Link from 'next/link';
import { getAllPosts } from '@/lib/content';

function toTimestamp(input: unknown): number {
  if (input instanceof Date) return input.getTime();
  if (typeof input !== 'string') return 0;
  const ms = Date.parse(input);
  return Number.isFinite(ms) ? ms : 0;
}

function formatDate(input?: unknown): string | null {
  if (!input) return null;
  const ms = toTimestamp(input);
  if (!ms) return null;
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(ms);
}

export default async function HomePage() {
  const posts = await getAllPosts();
  const latest = posts
    .slice()
    .sort((a, b) => toTimestamp(b.updatedAt ?? b.date) - toTimestamp(a.updatedAt ?? a.date));

  return (
    <div className="stack">
      <section className="hero">
        <h1>AI tools & online business guides</h1>
        <p>
          Beginner-friendly tutorials, honest reviews, and step-by-step roadmaps to build an online business.
        </p>
        <div className="actions" aria-label="Primary actions">
          <Link className="button primary" href="/online-business" data-analytics-event="cta_click" data-analytics-label="Home: Start here">
            Start here
          </Link>
          <Link className="button" href="/how-to-start-an-online-business" data-analytics-event="cta_click" data-analytics-label="Home: Roadmap">
            Roadmap
          </Link>
          <Link className="button" href="/keyword-research-tutorial" data-analytics-event="cta_click" data-analytics-label="Home: Keyword research">
            Keyword research
          </Link>
          <Link className="button" href="/best-ai-tools-for-beginners" data-analytics-event="cta_click" data-analytics-label="Home: Best AI tools">
            Best AI tools
          </Link>
        </div>
      </section>

      <section className="card">
        <h2>Start here</h2>
        <p className="muted">
          If you’re new, follow this order: ideas → roadmap → keywords → tools.
        </p>
        <ul className="list">
          <li><Link href="/online-business-ideas" data-analytics-event="cta_click" data-analytics-label="Home: Ideas">Online business ideas (pick a model)</Link></li>
          <li><Link href="/how-to-start-an-online-business" data-analytics-event="cta_click" data-analytics-label="Home: Roadmap (list)">How to start an online business (roadmap)</Link></li>
          <li><Link href="/keyword-research-tutorial" data-analytics-event="cta_click" data-analytics-label="Home: Keyword research (list)">Keyword research tutorial (rankable topics)</Link></li>
          <li><Link href="/best-ai-tools-for-beginners" data-analytics-event="cta_click" data-analytics-label="Home: Best AI tools (list)">Best AI tools for beginners (practical stack)</Link></li>
        </ul>
      </section>

      <section className="card">
        <h2>Best of</h2>
        <ul className="list">
          <li><Link href="/make-money-with-ai" data-analytics-event="cta_click" data-analytics-label="Home: Best of (make money)">How to make money with AI</Link></li>
          <li><Link href="/how-to-get-traffic-to-a-website" data-analytics-event="cta_click" data-analytics-label="Home: Best of (traffic)">How to get traffic (SEO system)</Link></li>
          <li><Link href="/keyword-research-tutorial" data-analytics-event="cta_click" data-analytics-label="Home: Best of (keywords)">Keyword research tutorial</Link></li>
          <li><Link href="/semrush-review" data-analytics-event="cta_click" data-analytics-label="Home: Best of (semrush)">Semrush review</Link></li>
        </ul>
      </section>

      <section className="card">
        <h2>Latest articles</h2>
        <ul className="list">
          {latest.map((p) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}`}>{p.title}</Link>
              {formatDate(p.updatedAt ?? p.date) ? (
                <div className="muted">{formatDate(p.updatedAt ?? p.date)}</div>
              ) : null}
              <div className="muted">{p.description}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
