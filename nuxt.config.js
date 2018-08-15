module.exports = {
  mode: 'spa',
  //Headers of the page
  head: {
    title: 'nuxt-projext-sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Gloabal Style
  css: [
    {
      src: '@assets/style/index.less',
      lang: 'less',
    },
  ],

  //Plugins
  plugins: [{ src: '@plugins/iview.js' }, { src: '@plugins/markdown.js' }],

  //Nuxt Modules
  modules: ['@nuxtjs/axios'],

  //Customize the progress bar color
  loading: { color: '#3B8070' },

  //Build configuration
  build: {
    //Run ESLint on save
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },

    postcss: [require('autoprefixer')()],
  },
};
