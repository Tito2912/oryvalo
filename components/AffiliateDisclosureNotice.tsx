import Link from 'next/link';

export function AffiliateDisclosureNotice() {
  return (
    <section className="notice" aria-label="Affiliate disclosure">
      <strong>Affiliate disclosure</strong>
      <p className="muted" style={{ margin: '6px 0 0' }}>
        This page may contain affiliate links. If you purchase through them, we may earn a commission at no extra cost to you.{' '}
        <Link href="/affiliate-disclosure">Learn more</Link>.
      </p>
    </section>
  );
}

