/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#8B5CF6',
          blue: '#06B6D4',
          pink: '#EC4899',
          cyan: '#00FFFF',
          green: '#10B981',
          yellow: '#F59E0B',
        },
        dark: {
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2A2A2A',
          600: '#3A3A3A',
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'press-start': ['Press Start 2P', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 2s linear infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6',
            textShadow: '0 0 5px #8B5CF6, 0 0 10px #8B5CF6'
          },
          '100%': { 
            boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 30px #8B5CF6',
            textShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6'
          }
        },
        scanline: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'pulse-neon': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor'
          },
          '50%': { 
            opacity: '0.8',
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#8B5CF6' }
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
        'scanline-pattern': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.03) 2px, rgba(139, 92, 246, 0.03) 4px)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
