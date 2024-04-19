import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ["var(--font-custom-inter)"],
        sans: ["var(--font-custom-dmsans)"]
      },
      colors: {
        gray: {
          900: '#121823',
          800: '#192130'
        },
        slate: {
          950: '#01012E',
          800: '#1B2A44',
          700: '#293A5E',
          600: '#525D7E',
          500: '#4C679B',
          400: '#838CA5',
          200: '#E6E9F2'
        },
        indigo: {
          300: '#A7BAEE',
          200: '#C6D2F3'
        },
        blue: {
          800: '#004CB3',
          700: '#003FE4'
        },
        neutral: {
          900: '#0F131B'
        },
        red: {
          400: '#D5596C'
        }
      }
    },
  },
  plugins: [],
}
export default config
