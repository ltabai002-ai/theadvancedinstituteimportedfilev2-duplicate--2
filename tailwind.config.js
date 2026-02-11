/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3FA9E3',
          dark: '#1A5087',
          light: '#5CB8E8',
        },
        secondary: {
          DEFAULT: '#1A5087',
          dark: '#0F3558',
          light: '#2E6BA3',
        },
        accent: {
          DEFAULT: '#3FA9E3',
          dark: '#2E88C5',
          light: '#5CB8E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
