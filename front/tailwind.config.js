// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './public/index.html'
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      cursor: {
        custom: 'url(/images/custom-cursor.png), auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('./src/libs/tailwind-plugin.js'),
  ],
}