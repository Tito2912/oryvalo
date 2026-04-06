import { getAllPosts } from '@/lib/content';
import { getSiteUrl } from '@/lib/site';

export const revalidate = 3600;

function escapeXml(input: string): string {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function toRfc2822(input?: string): string {
  if (!input) return new Date().toUTCString();
  const ms = Date.parse(input);
  return Number.isFinite(ms) ? new Date(ms).toUTCString() : new Date().toUTCString();
}

export async function GET() {
  const baseUrl = getSiteUrl();
  const posts = await getAllPosts();
  const sorted = posts
    .slice()
    .sort((a, b) => Date.parse(b.updatedAt ?? b.date ?? '0') - Date.parse(a.updatedAt ?? a.date ?? '0'));

  const selfUrl = new URL('/rss.xml', baseUrl).toString();
  const channelTitle = 'Oryvalo';
  const channelDescription = 'AI tools & online business guides.';
  const channelLink = baseUrl;
  const lastBuildDate = toRfc2822(sorted[0]?.updatedAt ?? sorted[0]?.date);

  const itemsXml = sorted
    .map((p) => {
      const url = new URL(`/${p.slug}`, baseUrl).toString();
      const pubDate = toRfc2822(p.date ?? p.updatedAt);
      return [
        '<item>',
        `<title>${escapeXml(p.title)}</title>`,
        `<link>${escapeXml(url)}</link>`,
        `<guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `<pubDate>${escapeXml(pubDate)}</pubDate>`,
        `<description>${escapeXml(p.description)}</description>`,
        '</item>',
      ].join('');
    })
    .join('');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '<channel>',
    `<title>${escapeXml(channelTitle)}</title>`,
    `<link>${escapeXml(channelLink)}</link>`,
    `<description>${escapeXml(channelDescription)}</description>`,
    '<language>en</language>',
    `<lastBuildDate>${escapeXml(lastBuildDate)}</lastBuildDate>`,
    `<atom:link href="${escapeXml(selfUrl)}" rel="self" type="application/rss+xml" />`,
    itemsXml,
    '</channel>',
    '</rss>',
  ].join('');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

