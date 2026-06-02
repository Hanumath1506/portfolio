import type { Metadata } from 'next';
import {
  Cormorant_Garamond,
  Inter,
  JetBrains_Mono,
} from 'next/font/google';
import StitchBackground from '@/components/StitchBackground';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hanu Mandadi | Data Science',
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
      className={`dark ${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased text-[#E8EDF2]">
        <StitchBackground />
        {children}
      </body>
    </html>
  );
}
