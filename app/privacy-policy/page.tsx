import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Oryvalo.com (data we collect, cookies, and your rights).',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="stack">
      <h1>Privacy Policy</h1>
      <p className="muted">Last updated: April 6, 2026</p>

      <h2>Who we are</h2>
      <p>
        Oryvalo (“we”, “us”) operates the website <strong>oryvalo.com</strong>.
      </p>

      <h2>What data we collect</h2>
      <ul className="list">
        <li>
          <strong>Emails you send us</strong>: if you contact us at{' '}
          <a href="mailto:contact@oryvalo.com">contact@oryvalo.com</a>, we receive your email address and the information
          you choose to include.
        </li>
        <li>
          <strong>Basic technical data</strong>: like most websites, our hosting provider may process standard server
          logs (for example IP address, user agent, timestamps, and requested pages) for security and reliability.
        </li>
      </ul>

      <h2>Cookies and similar technologies</h2>
      <p>
        We do not knowingly set advertising cookies. The website and infrastructure may use strictly necessary
        technologies required to deliver pages securely and reliably. If you choose to enable analytics, our analytics
        provider may also use cookies or similar technologies.
      </p>

      <h2>Analytics</h2>
      <p>
        We may use analytics to understand which pages are helpful and to improve the site. Analytics is optional and
        is enabled only if you accept it in the consent banner. If you reject, analytics will not load.
      </p>

      <h2>Third-party links (including affiliate links)</h2>
      <p>
        Our pages may link to third-party websites. If you click a third-party link, their privacy practices apply. Some
        links may be affiliate links, which means we may earn a commission if you purchase through them (at no extra
        cost to you).
      </p>

      <h2>Data retention</h2>
      <p>
        We keep personal data only as long as needed for the purposes described above (for example, to respond to your
        message), unless a longer retention period is required by law.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        Depending on where you live, you may have rights such as access, correction, deletion, or objection to certain
        processing. To request this, contact us at{' '}
        <a href="mailto:contact@oryvalo.com">contact@oryvalo.com</a>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will update the “Last updated” date at the top of
        this page.
      </p>
    </article>
  );
}
