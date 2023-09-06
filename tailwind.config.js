/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // Add your xs breakpoint here
        'sm': '500px', // Add your xs breakpoint here
      },
    },
  },
  plugins: [],
}

