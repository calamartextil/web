import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg-color': 'var(--primary-bg-color)',
        'secondary-bg-color': 'var(--secondary-bg-color)',
        'third-bg-color': 'var(--third-bg-color)',
        'fourth-bg-color': 'var(--fourth-bg-color)',
        'cancel-text-color': 'var(--cancel-text-color)',
      },
      fontFamily: {
        'display': ['var(--font-display)'],
        'outfit': ['var(--font-outfit)'],
      },
    },
  },
  plugins: [],
};
export default config;
