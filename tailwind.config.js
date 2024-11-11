/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#373D5D',
        secondary: '#E63946',
        accent: '#8B8FA3',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
      },
    },
  },
  plugins: [],
};