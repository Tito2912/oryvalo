import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Oryvalo</div>
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
