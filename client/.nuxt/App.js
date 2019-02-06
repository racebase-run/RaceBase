import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import '../assets/less/basics.less'

import _6f6c098b from '../layouts/default.vue'
import _2d2495d5 from '../layouts/home.vue'

const layouts = { "_default": _6f6c098b,"_home": _2d2495d5 }

export default {
  head: {"title":"RaceBase - Community Sourced Running Results","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"apple-mobile-web-app-title","content":"RaceBase"},{"property":"og:site_name","content":"RaceBase - Community Sourced Running Results"},{"name":"description","content":"For runners, by runners. We believe that people are more important than any race, or time, or championship. Join us now!"},{"property":"og:type","content":"website"},{"name":"google-site-verification","content":"geBi-OI3u5aN15krO_W0_IF9zr0d-N1NNcF1PMOhafk"}],"link":[{"rel":"icon","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon-320.png"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Fimages\u002Ftouch-icon-iphone-retina.png"},{"rel":"apple-touch-icon","sizes":"167x167","href":"\u002Fimages\u002Ftouch-icon-iphone-retina.png"}],"script":[{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fjquery@3.2.1\u002Fdist\u002Fjquery.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpopper.js\u002F1.14.6\u002Fumd\u002Fpopper.min.js","crossorigin":"anonymous"},{"src":"https:\u002F\u002Fstackpath.bootstrapcdn.com\u002Fbootstrap\u002F4.2.1\u002Fjs\u002Fbootstrap.min.js"}],"style":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
