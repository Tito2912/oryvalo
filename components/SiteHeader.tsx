import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link className="brand" href="/">Oryvalo</Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/online-business-ideas">Start here</Link>
          <Link href="/how-to-start-an-online-business">Roadmap</Link>
        </nav>
      </div>
    </header>
  );
}
