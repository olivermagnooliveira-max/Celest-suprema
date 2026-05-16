import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        celest: {
          void: '#0a0a1a',
          graphite: '#12121f',
          electric: '#00f0ff',
          deepPurple: '#6d28d9',
          magenta: '#ff00ff',
          cyan: '#00ffff',
          plasma: '#bf00ff',
        },
      },
    },
  },
  plugins: [],
};
export default config;
