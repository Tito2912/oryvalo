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
          <Link href="/online-business-ideas">Start here</Link>
          <Link href="/how-to-start-an-online-business">Roadmap</Link>
        </nav>

      </div>
    </header>
  );
}
