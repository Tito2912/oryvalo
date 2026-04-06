import Link from 'next/link';
import { AffiliateDisclosureNotice } from '@/components/AffiliateDisclosureNotice';
import { TableOfContents } from '@/components/TableOfContents';
import { FAQ } from '@/components/FAQ';
import { CTABox } from '@/components/CTABox';
import type { Post } from '@/lib/types';

function formatDate(input?: string): string | null {
  if (!input) return null;
  const ms = Date.parse(input);
  if (!Number.isFinite(ms)) return null;
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(ms);
}

export function ArticleLayout({ post }: { post: Post }) {
  const published = formatDate(post.date);
  const updated = formatDate(post.updatedAt);
  const showPublished = published && (!updated || post.date !== post.updatedAt);

  return (
    <article className="article stack">
      <header>
        <div className="badges">
          <span className="badge">{post.type.toUpperCase()}</span>
          <span className="badge">By <Link href="/about">Oryvalo</Link></span>
          {post.primaryKeyword ? <span className="badge">KW: {post.primaryKeyword}</span> : null}
          {showPublished ? <span className="badge">Published: {published}</span> : null}
          {updated ? <span className="badge">Updated: {updated}</span> : null}
        </div>
        <h1>{post.title}</h1>
        <p className="lede">{post.description}</p>

        {post.hasExternalLinks ? <AffiliateDisclosureNotice /> : null}

        {post.jumpLinks?.length ? (
          <div className="card">
            <strong>Jump to</strong>
            <ul className="list">
              {post.jumpLinks.map((j) => (
                <li key={j.href}>
                  <a href={j.href}>{j.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>

      <div className="grid">
        <div className="stack">
          {/* Quick answer block: visible fast */}
          {post.quickAnswer?.length ? (
            <section className="card" aria-label="Quick answer">
              <strong>Quick answer</strong>
              <ul className="list">
                {post.quickAnswer.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* MDX content */}
          <div className="stack">{post.content}</div>

          {/* CTA */}
          {post.cta ? (
            <CTABox title={post.cta.title} body={post.cta.body} buttonLabel={post.cta.buttonLabel} buttonHref={post.cta.buttonHref} />
          ) : null}

          <hr className="hr" />

          {/* FAQ */}
          {post.faq?.length ? <FAQ items={post.faq} /> : null}

          {/* Next steps */}
          {post.internalLinks?.length ? (
            <section className="card">
              <h2 id="next-steps">Next steps</h2>
              <ul className="list">
                {post.internalLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.anchor}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="toc" aria-label="Table of contents">
          <div className="card">
            <strong>On this page</strong>
            <TableOfContents headings={post.headings} />
          </div>
        </aside>
      </div>
    </article>
  );
}
