const ENV_SETTING = require('./env_setting.js');
console.log('env_setting', ENV_SETTING[process.env.NODE_ENV].NUXT_HOST);
module.exports = {
  mode: 'spa',
  //Headers of the page
  head: {
    title: 'Starlux Console',
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

  env: {
    PROTOCAL: ENV_SETTING[process.env.NODE_ENV].PROTOCAL,
    NUXT_HOST: ENV_SETTING[process.env.NODE_ENV].NUXT_HOST,
    NUXT_PORT: ENV_SETTING[process.env.NODE_ENV].NUXT_PORT,
    API_HOST: ENV_SETTING[process.env.NODE_ENV].API_HOST,
    API_PORT: ENV_SETTING[process.env.NODE_ENV].API_PORT,
  },
};
