module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },

  plugins: [
    // https://daisyui.com/docs/install/
    require('daisyui'),
  ],

  // daisyUI config: https://daisyui.com/docs/config
  daisyui: {
    themes: ['cupcake'],
  },
}
