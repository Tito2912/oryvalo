import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
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
        <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: -1 }}>Oryvalo</div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
            AI tools & online business guides
          </div>
          <div style={{ marginTop: 18, fontSize: 28, opacity: 0.9 }}>
            Beginner-friendly tutorials, reviews, and step-by-step roadmaps.
          </div>
        </div>

        <div style={{ fontSize: 22, opacity: 0.9 }}>oryvalo.com</div>
      </div>
    ),
    { ...size },
  );
}
