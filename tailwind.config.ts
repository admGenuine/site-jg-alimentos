import type { Config } from 'tailwindcss'

// Tokens visuais inspirados na identidade da Machi:
// base quase preta, texto creme, azul profundo para seções de marca e cards em tons pastel.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // base clara (pedido do cliente) com a tipografia e os pastéis da Machi
        paper: '#FFFFFF',
        shell: '#F3F5F7',
        tint: '#EAF1F8',
        ink: '#0C0E0F',
        mute: '#5D636A',
        line: '#E3E6EA',
        brand: '#2F62A8',
        cream: '#F6F1EA',
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
    },
  },
  plugins: [],
} satisfies Config
