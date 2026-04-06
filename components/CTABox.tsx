import Link from 'next/link';

export function CTABox({
  title,
  body,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="cta" aria-label="Call to action">
      <strong>{title}</strong>
      <p className="muted" style={{ margin: '6px 0 12px' }}>{body}</p>
      <Link
        className="kbd"
        href={buttonHref}
        data-analytics-event="cta_click"
        data-analytics-label={`Article CTA: ${buttonLabel}`}
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
