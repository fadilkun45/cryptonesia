// craco.config.js
module.exports = {
  eslint: {
    enable: false
  },
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }