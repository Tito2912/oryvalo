import { ImageResponse } from 'next/og';
import { getAllSlugs, getPostMetaBySlug } from '@/lib/content';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function TwitterImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostMetaBySlug(slug);
  const title = post?.title ?? 'Oryvalo';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(135deg, #0a58ca 0%, #111827 70%)',
          color: '#ffffff',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>Oryvalo</div>
          <div style={{ fontSize: 22, opacity: 0.9 }}>Article</div>
        </div>

        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.08 }}>{title}</div>

        <div style={{ fontSize: 22, opacity: 0.9 }}>oryvalo.com</div>
      </div>
    ),
    { ...size },
  );
}

