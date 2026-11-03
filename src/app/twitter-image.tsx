import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Santoshi Metal Industries — Engineering Aluminium';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0B2744 0%, #123B68 45%, #2878C8 100%)',
          color: '#ffffff',
          padding: '64px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            opacity: 0.9,
          }}
        >
          SANTOSHI METAL INDUSTRIES
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Engineering Aluminium. Shaping the Future.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              opacity: 0.92,
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            Ingot · Profile · Scrap & Supply · Powder Coating · Anodising
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 22,
            opacity: 0.88,
          }}
        >
          <span>Kabisuryanagar, Ganjam, Odisha · India</span>
          <span>santoshimetal.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
