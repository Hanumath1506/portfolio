import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0A0C10',
        depth: '#111418',
        surface: '#1A2030',
        slate: '#2C3540',
        highlight: '#3D4B5C',
        light: '#E8EDF2',
        muted: '#4A5568',
        moon: '#C8A96E',
        terminal: '#4A9B7F',
        line: '#1E2D3D',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)'],
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains)'],
      },
      transitionDuration: {
        slow: '600ms',
      },
    },
  },
  plugins: [],
};

export default config;
