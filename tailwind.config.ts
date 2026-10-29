import type { Config } from 'tailwindcss'

// Tokens visuais inspirados na identidade da Machi:
// base quase preta, texto creme, azul profundo para seções de marca e cards em tons pastel.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C0E0F',
        graphite: '#17191B',
        line: '#2A2D30',
        cream: '#F6F1EA',
        fog: '#A6ABB2',
        tide: '#0E2A3A',
        'tide-line': '#1F4157',
        sky: '#7FD0FB',
        almond: '#F6E1D0',
        rose: '#F6DCDD',
        butter: '#FBEDCB',
        sage: '#E3EAD2',
        haze: '#DCE8F1',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
        inner: '20px',
      },
      letterSpacing: {
        display: '-0.04em',
        heading: '-0.025em',
      },
      maxWidth: {
        site: '1360px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' },
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
