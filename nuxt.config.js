module.exports = {
  // Header of the page
  head: {
    title: 'myproject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }
    ]
  },

  //Customize the progress bar color
  loading: { color: '#f45042' },

  // Modules Nuxt
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/workbox'
  ],

  axios: {
    // proxyHeaders: false
  },

  plugins: [
    '@/plugins/vuetify',
  ],

  // Service worker settings
  workbox: {
    
  },

  // App icon settings
  icon: {
    iconSrc: '@/static/icon.png',
    sizes: [16, 120, 144, 152, 192, 384, 512],
  },

  // Manifest JSON settings
  manifest: {
    name: 'Secret Project',
    lang: 'fr',
    display: 'standalone'
  },

  // Build configuration
  build: {

    // Run ESLint on save
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
