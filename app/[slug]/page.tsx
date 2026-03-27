import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleLayout } from '@/components/ArticleLayout';
import { getAllSlugs, getPostBySlug } from '@/lib/content';
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from '@/lib/schema';
import { getSiteUrl } from '@/lib/site';

function toJsonLd(data: unknown): string {
  // Prevent `<script>` breaking / injection via `</script>` in JSON-LD strings.
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const canonical = post.canonical ?? `/${post.slug}`;
  const canonicalUrl = new URL(canonical, getSiteUrl()).toString();
  const shareImage = `/${post.slug}/opengraph-image`;
  const twitterImage = `/${post.slug}/twitter-image`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      siteName: 'Oryvalo',
      images: [{ url: shareImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [twitterImage],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const articleJsonLd = buildArticleJsonLd(post);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(post);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbJsonLd) }} />
      {post.faq?.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.faq.map((x) => ({
              '@type': 'Question',
              name: x.q,
              acceptedAnswer: { '@type': 'Answer', text: x.a },
            })),
          }) }}
        />
      ) : null}

      <ArticleLayout post={post} />
    </>
  );
}
