import Link from 'next/link';
import { getAllPosts } from '@/lib/content';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="stack">
      <section className="hero">
        <h1>Build an online business (SEO-first)</h1>
        <p>
          This starter is optimized for topic clusters, internal linking, and schema. Publish your first
          10 pages and scale.
        </p>
      </section>

      <section className="card">
        <h2>Articles</h2>
        <ul className="list">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}`}>{p.title}</Link>
              <div className="muted">{p.description}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
