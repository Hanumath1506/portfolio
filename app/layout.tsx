import type { Metadata } from 'next';
import {
  Cormorant_Garamond,
  Inter,
  JetBrains_Mono,
} from 'next/font/google';
import ForestBackground from '@/components/ForestBackground';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hanu Mandadi',
  description:
    'Data science · full-stack · ML · NLP — portfolio of Hanu Mandadi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <style>{`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { 
    background-color: #0D1018; 
    color: #E8EDF2; 
    font-family: var(--font-inter), sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .font-serif { font-family: var(--font-cormorant), Georgia, serif; }
  .font-mono { font-family: var(--font-jetbrains), monospace; }
  nav a, .text-muted { color: #4A5568; }
  h1, h2, h3 { color: #E8EDF2; }
  p { color: #E8EDF2; }
  a { color: inherit; text-decoration: none; }
  section { padding: 7rem 6rem; }
  header { 
    position: fixed; top: 0; left: 0; right: 0;
    display: flex; justify-content: space-between;
    align-items: center; padding: 2rem 6rem;
    z-index: 10; background: transparent;
  }
  nav { display: flex; gap: 2rem; }
  .hero { 
    min-height: 100vh; display: flex; 
    flex-direction: column; align-items: center; 
    justify-content: center; text-align: center;
  }
  h1 { font-size: clamp(3rem, 12vw, 9rem); font-weight: 300; line-height: 0.88; }
  h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 300; margin-bottom: 4rem; }
  h3 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 300; }
`}</style>
      </head>
      <body>
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
              pointerEvents: 'none',
            }}
          >
            <ForestBackground />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
