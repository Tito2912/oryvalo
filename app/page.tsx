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
        <h1>AI video services, tools & online business guides</h1>
        <p>
          Build an AI video service: get clients, price packages, and deliver consistently. Beginner-friendly guides and
          tools included.
        </p>
        <div className="actions" aria-label="Primary actions">
          <Link className="button primary" href="/ai-video" data-analytics-event="cta_click" data-analytics-label="Home: AI video hub">
            AI video hub
          </Link>
          <Link className="button" href="/ai-video-service-clients" data-analytics-event="cta_click" data-analytics-label="Home: AI video clients">
            Get clients
          </Link>
          <Link className="button" href="/ai-video-service-pricing" data-analytics-event="cta_click" data-analytics-label="Home: AI video pricing">
            Pricing
          </Link>
          <Link className="button" href="/ai-video-workflow" data-analytics-event="cta_click" data-analytics-label="Home: AI video workflow">
            Workflow
          </Link>
        </div>
      </section>

      <section className="card">
        <h2>AI video service (start here)</h2>
        <p className="muted">
          A simple path: model → pricing → clients → delivery → scale.
        </p>
        <ul className="list">
          <li><Link href="/ai-video-business" data-analytics-event="cta_click" data-analytics-label="Home: AI video business">AI video creation business (overview)</Link></li>
          <li><Link href="/ai-video-service-pricing" data-analytics-event="cta_click" data-analytics-label="Home: AI video pricing (list)">AI video service pricing (packages)</Link></li>
          <li><Link href="/ai-video-service-clients" data-analytics-event="cta_click" data-analytics-label="Home: AI video clients (list)">How to get clients (outreach plan)</Link></li>
          <li><Link href="/ai-video-portfolio" data-analytics-event="cta_click" data-analytics-label="Home: AI video portfolio">Build a portfolio (3 samples)</Link></li>
          <li><Link href="/ai-video-workflow" data-analytics-event="cta_click" data-analytics-label="Home: AI video workflow (list)">AI video workflow (weekly SOP)</Link></li>
          <li><Link href="/repurpose-one-video-into-10-shorts" data-analytics-event="cta_click" data-analytics-label="Home: Repurpose (list)">Turn 1 video into 10 shorts</Link></li>
        </ul>
      </section>

      <section className="card">
        <h2>Online business basics</h2>
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
          <li><Link href="/ai-video" data-analytics-event="cta_click" data-analytics-label="Home: Best of (ai video)">AI video hub</Link></li>
          <li><Link href="/make-money-with-ai" data-analytics-event="cta_click" data-analytics-label="Home: Best of (make money)">How to make money with AI</Link></li>
          <li><Link href="/best-ai-tools-for-beginners" data-analytics-event="cta_click" data-analytics-label="Home: Best of (tools)">Best AI tools for beginners</Link></li>
          <li><Link href="/keyword-research-tutorial" data-analytics-event="cta_click" data-analytics-label="Home: Best of (keywords)">Keyword research tutorial</Link></li>
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
