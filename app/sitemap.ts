import { getAllPosts } from '@/lib/content';
import { getSiteUrl } from '@/lib/site';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const posts = await getAllPosts();
  const staticPages = [
    '/about',
    '/contact',
    '/online-business',
    '/ai-video',
    '/seo',
    '/ai-tools',
    '/editorial-policy',
    '/affiliate-disclosure',
    '/privacy-policy',
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...staticPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...posts.map((p) => ({
      url: `${baseUrl}/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.date ?? new Date().toISOString()),
    })),
  ];
}
