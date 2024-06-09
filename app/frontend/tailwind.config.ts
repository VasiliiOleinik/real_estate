import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      boxShadow: {
        dark: '0 4px 6px 0 #a855f7, 0 1px 3px 0 #6366f1'
      },
      colors: {
        purple: '#a855f7'
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    }
  },
  plugins: []
}
export default config
