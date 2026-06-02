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
