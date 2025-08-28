import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef4f2',
          100: '#fee2dc',
          200: '#ffc5b9',
          300: '#ff9d85',
          400: '#ff6b47',
          500: '#ff5722',
          600: '#ed4014',
          700: '#c53030',
          800: '#a12828',
          900: '#842121',
        },
        secondary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9ddff',
          300: '#7cc0ff',
          400: '#369eff',
          500: '#0080ff',
          600: '#0066e6',
          700: '#0052cc',
          800: '#0042a3',
          900: '#003380',
        },
        kakao: '#FEE500',
        naver: '#03C75A'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'noto-sans-kr': ['var(--font-noto-sans-kr)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config