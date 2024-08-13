/** @type {import('tailwindcss').Config} */
export default {
  prefix: 't-',
  content: [
    './index.html',
    './src/common/components/**/*.{ts,tsx}',
    './src/common/layouts/**/*.{ts,tsx}',
    './src/common/templates/**/*.{ts,tsx}',
    './src/common/ui/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}'
  ],
  theme: {
    screens: {
      // https://fluent2.microsoft.design/layout#responsive-design
      'sm': '480px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1366px',
      '2xl': '1920px',
    },
    extend: {}
  },
  plugins: []
}