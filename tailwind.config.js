/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
          colors: {
              'light1' : '#ffffff',
              'light2' : '#fafbfb',
              'light3' : '#f2f4f6',
              'light4' : '#848b88',
  
              'accent1' : '#ebfcf6',
              'accent2' : '#2b9e76',
  
              'dark1' : '#2c2c2c',
              'dark2' : '#272727',
              'dark3' : '#202020',
              'dark4' : '#101010',
          },
      },
    },
    plugins: [],
    darkMode: 'class',
};