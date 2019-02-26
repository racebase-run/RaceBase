const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'RaceBase - Community Sourced Running Results',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-title', content: 'RaceBase' }, 
      { property: 'og:site_name', content: 'RaceBase - Community Sourced Running Results' }, 
      { name: 'description', 
        hid: 'Default description',
        content: 'For runners, by runners. We believe that people are more important than any race, or time, or championship. Join us now!'
      },
      { property: 'og:type', content: 'website' }, 
      { name: 'google-site-verification', content: 'geBi-OI3u5aN15krO_W0_IF9zr0d-N1NNcF1PMOhafk' },
      { name: 'google-site-verification', content: 'VZJIxi0RVW3oOKK8sasKKw8R-kaIu6xUTBuQln0ExLQ' }  
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon-320.png' }, 
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/touch-icon-iphone-retina.png' },
      { rel: 'apple-touch-icon', sizes: '167x167', href: '/images/touch-icon-iphone-retina.png' }, 
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro' }
    ], 
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js', crossorigin: 'anonymous' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#468DF5',
    height: '2px', 
    throttle: 500, 
    continuous: true
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/less/basics.less'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios', 
    '~/plugins/clipboard'
  ],

  /* 
  ** Environment variables
  */
  env: {
    ROOT_URL: process.env.ROOT_URL,
    API_URL: process.env.API_URL
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt', 
    'nuxt-fontawesome', 
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    ['@nuxtjs/google-analytics', {
      id: 'UA-117937173-1'
    }]
  ],
  markdownit: {
    injected: true
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: true
  },

  /* 
  ** FontAwesome config
  */
  fontawesome: {
    component: 'fa', 
    imports: [
      {
        set: '@fortawesome/free-regular-svg-icons', 
        icons: ['far']
      }, 
      {
        set: '@fortawesome/free-solid-svg-icons', 
        icons: ['fas']
      }, 
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['@fortawesome/fontawesome-free-brands-svg-icons$'] = '@fortawesome/fontawesome-free-brands-svg-icons/shakable.es.js'
      config.resolve.alias['@fortawesome/fontawesome-free-solid-svg-icons$'] = '@fortawesome/fontawesome-free-solid-svg-icons/shakable.es.js'
      config.resolve.alias['@fortawesome/fontawesome-free-regular-svg-icons$'] = '@fortawesome/fontawesome-free-regular-svg-icons/shakable.es.js'
    }
  }
}
