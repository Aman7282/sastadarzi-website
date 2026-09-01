/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBEE',
          100: '#FAF4D2',
          200: '#F5E6A3',
          300: '#EFD46F',
          400: '#E5C158',
          500: '#D4AF37', /* Primary Gold */
          600: '#B8860B', /* Metallic Dark Gold */
          700: '#916606',
          800: '#754F0B',
          900: '#62410F',
        },
        obsidian: {
          950: '#080808',
          900: '#0F0F0F',
          850: '#141414',
          800: '#1A1A1A',
          700: '#262626',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'gold-radial': 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(8,8,8,0) 70%)',
        'dark-gradient': 'linear-gradient(180deg, #080808 0%, #141414 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-sm': '0 4px 14px rgba(212, 175, 55, 0.15)',
      }
    },
  },
  plugins: [],
}
