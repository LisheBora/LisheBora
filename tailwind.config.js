module.exports = {
  content: [
      './templates/**/*.html',
      './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'green': 'rgb(20 83 45);',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}