/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        carta: '#f8c313',
      },
    
      fontFamily: {
        'protest': ['"Protest Strike"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


