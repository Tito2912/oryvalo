import Link from 'next/link';
import Image from 'next/image';

export function SiteHeader() {
  return (
    <header className="header">
      <div className="header-inner">
        
        <Link className="brand" href="/">
          <Image
            src="/oryvalo-logo.png"
            alt="Oryvalo"
            width={160}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="nav" aria-label="Primary">
          <Link href="/online-business" data-analytics-event="cta_click" data-analytics-label="Header: Start here">Start here</Link>
          <Link href="/how-to-start-an-online-business" data-analytics-event="cta_click" data-analytics-label="Header: Roadmap">Roadmap</Link>
          <Link href="/ai-video" data-analytics-event="cta_click" data-analytics-label="Header: AI video">AI video</Link>
          <Link href="/seo" data-analytics-event="cta_click" data-analytics-label="Header: SEO">SEO</Link>
          <Link href="/ai-tools" data-analytics-event="cta_click" data-analytics-label="Header: AI tools">AI tools</Link>
        </nav>

      </div>
    </header>
  );
}
