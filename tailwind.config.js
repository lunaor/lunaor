/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coastal: {
          sand: '#FAF8F5',
          sandDark: '#F2EFE9',
          dark: '#182430',
          darkNavy: '#0F1A24',
          muted: '#627D98',
        },
        pastel: {
          sky: {
            light: '#E0F2FE',
            DEFAULT: '#7DD3FC',
            vibrant: '#38BDF8',
          },
          coral: {
            light: '#FFE4E6',
            DEFAULT: '#FDA4AF',
            vibrant: '#FB7185',
          },
          peach: {
            light: '#FFEDD5',
            DEFAULT: '#FDBA74',
            vibrant: '#FB923C',
          },
          sage: {
            light: '#DCFCE7',
            DEFAULT: '#86EFAC',
            vibrant: '#4ADE80',
          },
          mint: {
            light: '#CCFBF1',
            DEFAULT: '#5EEAD4',
            vibrant: '#2DD4BF',
          },
          sun: {
            light: '#FEF9C3',
            DEFAULT: '#FDE047',
            vibrant: '#FACC15',
          },
          lavender: {
            light: '#F3E8FF',
            DEFAULT: '#D8B4FE',
            vibrant: '#C084FC',
          },
          aqua: {
            light: '#E0F7FA',
            DEFAULT: '#80DEEA',
            vibrant: '#26C6DA',
          }
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        luxury: ['"Tenor Sans"', '"Urbanist"', '"Jost"', 'sans-serif'],
        beauty: ['"Tenor Sans"', 'sans-serif'],
        urbanist: ['"Urbanist"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'drift': 'drift 15s ease-in-out infinite alternate',
        'drift-reverse': 'driftReverse 18s ease-in-out infinite alternate',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.06)' },
        },
        drift: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -25px) scale(1.08)' },
          '100%': { transform: 'translate(-25px, 20px) scale(0.96)' },
        },
        driftReverse: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-35px, 30px) scale(1.05)' },
          '100%': { transform: 'translate(20px, -20px) scale(0.95)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%, 60%': { transform: 'rotate(14deg)' },
          '40%, 80%': { transform: 'rotate(-10deg)' },
        },
      },
      boxShadow: {
        'pastel-sm': '0 2px 10px -2px rgba(253, 164, 175, 0.2), 0 4px 16px -2px rgba(125, 211, 252, 0.2)',
        'pastel-md': '0 10px 30px -5px rgba(253, 186, 116, 0.25), 0 8px 20px -4px rgba(125, 211, 252, 0.25)',
        'pastel-lg': '0 20px 45px -10px rgba(216, 180, 254, 0.3), 0 12px 30px -8px rgba(134, 239, 172, 0.25)',
        'pastel-glow': '0 0 50px -10px rgba(253, 164, 175, 0.4), 0 0 80px -15px rgba(125, 211, 252, 0.4)',
      },
    },
  },
  plugins: [],
};
