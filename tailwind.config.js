/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olibano': {
          // Paleta principal Olíbano
          'forest': '#2D4A3E',      // Verde floresta profundo - cor principal
          'sage': '#8B9A7D',        // Verde sálvia suave
          'gold': '#C9A962',        // Dourado elegante
          'terracotta': '#B87E5F',  // Terracota quente
          'cream': '#FAF7F2',       // Creme suave para fundos
          'sand': '#E8E0D5',        // Areia para elementos secundários
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Lato', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        'olibano': 'var(--olibano-radius-xl)',
        'olibano-xl': 'var(--olibano-radius-xxl)',
      },
      boxShadow: {
        'olibano-soft': '0 25px 70px rgba(45, 74, 62, 0.08)',
        'olibano-inner': 'inset 0 1px 0 rgba(255, 255, 255, 0.4)',
      },
      backgroundImage: {
        'olibano-pattern': "url('/images/pattern.png')",
      },
    },
  },
  plugins: [],
}