const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
// const purgecss = require('@fullhuman/postcss-purgecss');
// const cssnano = require('cssnano');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    // process.env.NODE_ENV === 'production' ? autoprefixer : null,
    // process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null,
    // purgecss({
    //   content: ['./src/**/*.{vue,ts}'],
    //   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    // }),
  ],
};
