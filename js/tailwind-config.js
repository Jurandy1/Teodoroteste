// Tema e tokens de marca Teodora (Tailwind CDN)
tailwind.config = {
  theme: {
    extend: {
      colors: {
        teodora: {
          white: '#FFFFFF',
          bgLight: '#FCFAF9',       /* Seda suave off-white */
          cream: '#F8F4F1',
          roseSoft: '#E8D4D0',      /* Rosé suave da marca */
          roseMedium: '#D5B7B2',    /* Rosé mais encorpado e sofisticado */
          roseLight: '#F7EFEB',     /* Fundo blush sutil */
          gold: '#C5A059',          /* Dourado champanhe discreto */
          goldLight: '#F6EEDB',
          goldDark: '#A6823F',
          text: '#1E1A1A',          /* Preto carvão quente e nobre */
          textMuted: '#6E6565',     /* Texto secundário límpido */
          border: '#EDE4E0',        /* Divisórias ultrafinas e delicadas */
          borderSubtle: '#F0E8E5'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '-apple-system', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive']
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(45, 38, 38, 0.04)',
        'card-clean': '0 10px 25px -4px rgba(45, 38, 38, 0.06)',
        'card-hover': '0 20px 35px -8px rgba(197, 160, 89, 0.16)',
        'drawer': '-15px 0 45px rgba(30, 26, 26, 0.12)'
      }
    }
  }
}
