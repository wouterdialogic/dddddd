const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

module.exports = {
  "plugins": [
    // require('tailwindcss')('tailwind.js'),
    // require('autoprefixer')
    tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default',
    }),
    // purgecss({
    //   content: ['./src/**/*.vue'],
      //css: ['**/*.css']
      //'(:)\w+', '( \w+:\S+)'
    //   whitelistPatterns: [/sm:/, /lg:/, /xl:/, /md:/, /hover:/],
    // }),
    autoprefixer,
    // autoprefixer
  ]
}