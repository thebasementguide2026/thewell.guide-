/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D3D30',
          light: '#1A5C48',
          dark: '#071F18',
        },
        accent: {
          DEFAULT: '#1D9E75',
          hover: '#178A64',
          light: '#5DCAA5',
          pale: '#E8F7F2',
        },
        surface: '#EDF4F1',
        bg: '#F4FAF7',
        border: {
          DEFAULT: '#C8DDD7',
          light: '#DFF0EB',
        },
        text: {
          DEFAULT: '#0D1F1A',
          secondary: '#3D5A52',
          muted: '#7A9E96',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(13,61,48,0.08)',
        md: '0 4px 12px rgba(13,61,48,0.1)',
        lg: '0 8px 24px rgba(13,61,48,0.12)',
      },
      maxWidth: {
        article: '720px',
      },
    },
  },
  plugins: [],
}
