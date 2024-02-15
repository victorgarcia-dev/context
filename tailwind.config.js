/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors:{
      'yellow-900':'#713f12',
      'yellow-600':'#d8aa23',
      'yellow-500':'#eab308',
      'yellow-950':'#422006',
      'neutral-500':'#737373',
      'neutral-700':'#404040',
      'neutral-900':'#171717',
      'black':'#000000',
      'white':'#ffffff',
      'gray-800':'#1f2937'
    },
    extend: {
      backgroundImage: {
        'gnc': "url('./assets/img/gnc.jpeg')",
        'ph': "url('./assets/img/ph.jpeg')",
        'oblea': "url('./assets/img/oblea1.jpeg')",
      }
    },
  },
  plugins: [],
}


