/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       boxShadow: {
        'custom-dark':  '0 -3px 15px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transform: {
        'rotate-y-20': 'rotateY(20deg)',
        'rotate-y-0': 'rotateY(0deg)',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [
     function ({ addUtilities }) {
      addUtilities(
        {
          '.perspective': {
            perspective: '1000px',
          },
          '.rotate-y-20': {
            transform: 'rotateY(20deg)',
          },
          '.rotate-y-0': {
            transform: 'rotateY(0deg)',
          },
        },
        ['responsive', 'hover']
      )
    }
  ],
};
