import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#0f1418',
        background: '#0f1418',
        'on-surface': '#e8edf2',
        'primary-container': '#7eb8d4',
        'stitch-border': '#1e2429',
        'stitch-muted': '#4a5568',
        'stitch-body': '#a0aab2',
        terminal: '#4a9b7f',
      },
      spacing: {
        'section-gap': '320px',
      },
      maxWidth: {
        'container-max': '1100px',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
