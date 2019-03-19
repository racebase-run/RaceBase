import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _14020fcc = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0ae2655c = () => interopDefault(import('../pages/api/index.vue' /* webpackChunkName: "pages/api/index" */))
const _0927d6d3 = () => interopDefault(import('../pages/changelog.vue' /* webpackChunkName: "pages/changelog" */))
const _424f7bc8 = () => interopDefault(import('../pages/coach/index.vue' /* webpackChunkName: "pages/coach/index" */))
const _ca9b4a84 = () => interopDefault(import('../pages/contribute.vue' /* webpackChunkName: "pages/contribute" */))
const _667a3f8c = () => interopDefault(import('../pages/developers.vue' /* webpackChunkName: "pages/developers" */))
const _6b54b02f = () => interopDefault(import('../pages/feed.vue' /* webpackChunkName: "pages/feed" */))
const _053ce4b0 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _01f47e67 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _2da14582 = () => interopDefault(import('../pages/press.vue' /* webpackChunkName: "pages/press" */))
const _75662c87 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _493ce13b = () => interopDefault(import('../pages/roadmap.vue' /* webpackChunkName: "pages/roadmap" */))
const _3685e82c = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _4490ae74 = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _1b912761 = () => interopDefault(import('../pages/welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _b74b8eea = () => interopDefault(import('../pages/api/blog/index.vue' /* webpackChunkName: "pages/api/blog/index" */))
const _c0af5a9a = () => interopDefault(import('../pages/api/routes/index.vue' /* webpackChunkName: "pages/api/routes/index" */))
const _369ce686 = () => interopDefault(import('../pages/coach/schedule.vue' /* webpackChunkName: "pages/coach/schedule" */))
const _fd5766e6 = () => interopDefault(import('../pages/races/notfound.vue' /* webpackChunkName: "pages/races/notfound" */))
const _54aea296 = () => interopDefault(import('../pages/signup/claim.vue' /* webpackChunkName: "pages/signup/claim" */))
const _252ca980 = () => interopDefault(import('../pages/team/notfound.vue' /* webpackChunkName: "pages/team/notfound" */))
const _f3507a42 = () => interopDefault(import('../pages/tools/pacezones.vue' /* webpackChunkName: "pages/tools/pacezones" */))
const _69c01544 = () => interopDefault(import('../pages/tools/splits.vue' /* webpackChunkName: "pages/tools/splits" */))
const _3ca13029 = () => interopDefault(import('../pages/user/settings/index.vue' /* webpackChunkName: "pages/user/settings/index" */))
const _7ae0ae31 = () => interopDefault(import('../pages/new/result/success.vue' /* webpackChunkName: "pages/new/result/success" */))
const _0b8119e1 = () => interopDefault(import('../pages/signup/coach/claim.vue' /* webpackChunkName: "pages/signup/coach/claim" */))
const _88d20f78 = () => interopDefault(import('../pages/user/settings/account.vue' /* webpackChunkName: "pages/user/settings/account" */))
const _e11aacfe = () => interopDefault(import('../pages/user/settings/coaching.vue' /* webpackChunkName: "pages/user/settings/coaching" */))
const _dae44c80 = () => interopDefault(import('../pages/user/settings/profile.vue' /* webpackChunkName: "pages/user/settings/profile" */))
const _3819db20 = () => interopDefault(import('../pages/user/log/week/_date.vue' /* webpackChunkName: "pages/user/log/week/_date" */))
const _78b0f107 = () => interopDefault(import('../pages/api/blog/_url.vue' /* webpackChunkName: "pages/api/blog/_url" */))
const _48ba1c42 = () => interopDefault(import('../pages/api/routes/_url.vue' /* webpackChunkName: "pages/api/routes/_url" */))
const _370e2768 = () => interopDefault(import('../pages/new/post/_resultId.vue' /* webpackChunkName: "pages/new/post/_resultId" */))
const _e9c2c9ce = () => interopDefault(import('../pages/new/result/_raceId.vue' /* webpackChunkName: "pages/new/result/_raceId" */))
const _7bbed076 = () => interopDefault(import('../pages/news/post/_name.vue' /* webpackChunkName: "pages/news/post/_name" */))
const _5f332bf2 = () => interopDefault(import('../pages/races/all/_page.vue' /* webpackChunkName: "pages/races/all/_page" */))
const _23a0fee5 = () => interopDefault(import('../pages/user/content/_page.vue' /* webpackChunkName: "pages/user/content/_page" */))
const _55bfcb94 = () => interopDefault(import('../pages/user/join/_joincode.vue' /* webpackChunkName: "pages/user/join/_joincode" */))
const _ddd457e2 = () => interopDefault(import('../pages/user/log/_date.vue' /* webpackChunkName: "pages/user/log/_date" */))
const _fc1dc5bc = () => interopDefault(import('../pages/user/resetPassword/_token.vue' /* webpackChunkName: "pages/user/resetPassword/_token" */))
const _7af55046 = () => interopDefault(import('../pages/user/verify/_token.vue' /* webpackChunkName: "pages/user/verify/_token" */))
const _5af76616 = () => interopDefault(import('../pages/api/_url.vue' /* webpackChunkName: "pages/api/_url" */))
const _3c8511ac = () => interopDefault(import('../pages/athlete/_id/index.vue' /* webpackChunkName: "pages/athlete/_id/index" */))
const _b6044148 = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _e1b6b462 = () => interopDefault(import('../pages/search/_query.vue' /* webpackChunkName: "pages/search/_query" */))
const _b465ad76 = () => interopDefault(import('../pages/athlete/_id/logs.vue' /* webpackChunkName: "pages/athlete/_id/logs" */))
const _13feaa06 = () => interopDefault(import('../pages/team/_id/schedule.vue' /* webpackChunkName: "pages/team/_id/schedule" */))
const _e8722448 = () => interopDefault(import('../pages/athlete/_id/log/_date.vue' /* webpackChunkName: "pages/athlete/_id/log/_date" */))
const _5bdb17c6 = () => interopDefault(import('../pages/races/_id/_gender/_event.vue' /* webpackChunkName: "pages/races/_id/_gender/_event" */))
const _727679b7 = () => interopDefault(import('../pages/team/_id/_gender/_year.vue' /* webpackChunkName: "pages/team/_id/_gender/_year" */))
const _33b9ea91 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _15be5f1e = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _14020fcc,
      name: "about"
    }, {
      path: "/api",
      component: _0ae2655c,
      name: "api"
    }, {
      path: "/changelog",
      component: _0927d6d3,
      name: "changelog"
    }, {
      path: "/coach",
      component: _424f7bc8,
      name: "coach"
    }, {
      path: "/contribute",
      component: _ca9b4a84,
      name: "contribute"
    }, {
      path: "/developers",
      component: _667a3f8c,
      name: "developers"
    }, {
      path: "/feed",
      component: _6b54b02f,
      name: "feed"
    }, {
      path: "/login",
      component: _053ce4b0,
      name: "login"
    }, {
      path: "/news",
      component: _01f47e67,
      name: "news"
    }, {
      path: "/press",
      component: _2da14582,
      name: "press"
    }, {
      path: "/privacy",
      component: _75662c87,
      name: "privacy"
    }, {
      path: "/roadmap",
      component: _493ce13b,
      name: "roadmap"
    }, {
      path: "/signup",
      component: _3685e82c,
      name: "signup"
    }, {
      path: "/terms",
      component: _4490ae74,
      name: "terms"
    }, {
      path: "/welcome",
      component: _1b912761,
      name: "welcome"
    }, {
      path: "/api/blog",
      component: _b74b8eea,
      name: "api-blog"
    }, {
      path: "/api/routes",
      component: _c0af5a9a,
      name: "api-routes"
    }, {
      path: "/coach/schedule",
      component: _369ce686,
      name: "coach-schedule"
    }, {
      path: "/races/notfound",
      component: _fd5766e6,
      name: "races-notfound"
    }, {
      path: "/signup/claim",
      component: _54aea296,
      name: "signup-claim"
    }, {
      path: "/team/notfound",
      component: _252ca980,
      name: "team-notfound"
    }, {
      path: "/tools/pacezones",
      component: _f3507a42,
      name: "tools-pacezones"
    }, {
      path: "/tools/splits",
      component: _69c01544,
      name: "tools-splits"
    }, {
      path: "/user/settings",
      component: _3ca13029,
      name: "user-settings"
    }, {
      path: "/new/result/success",
      component: _7ae0ae31,
      name: "new-result-success"
    }, {
      path: "/signup/coach/claim",
      component: _0b8119e1,
      name: "signup-coach-claim"
    }, {
      path: "/user/settings/account",
      component: _88d20f78,
      name: "user-settings-account"
    }, {
      path: "/user/settings/coaching",
      component: _e11aacfe,
      name: "user-settings-coaching"
    }, {
      path: "/user/settings/profile",
      component: _dae44c80,
      name: "user-settings-profile"
    }, {
      path: "/user/log/week/:date?",
      component: _3819db20,
      name: "user-log-week-date"
    }, {
      path: "/api/blog/:url",
      component: _78b0f107,
      name: "api-blog-url"
    }, {
      path: "/api/routes/:url",
      component: _48ba1c42,
      name: "api-routes-url"
    }, {
      path: "/new/post/:resultId?",
      component: _370e2768,
      name: "new-post-resultId"
    }, {
      path: "/new/result/:raceId?",
      component: _e9c2c9ce,
      name: "new-result-raceId"
    }, {
      path: "/news/post/:name?",
      component: _7bbed076,
      name: "news-post-name"
    }, {
      path: "/races/all/:page?",
      component: _5f332bf2,
      name: "races-all-page"
    }, {
      path: "/user/content/:page?",
      component: _23a0fee5,
      name: "user-content-page"
    }, {
      path: "/user/join/:joincode?",
      component: _55bfcb94,
      name: "user-join-joincode"
    }, {
      path: "/user/log/:date?",
      component: _ddd457e2,
      name: "user-log-date"
    }, {
      path: "/user/resetPassword/:token?",
      component: _fc1dc5bc,
      name: "user-resetPassword-token"
    }, {
      path: "/user/verify/:token?",
      component: _7af55046,
      name: "user-verify-token"
    }, {
      path: "/api/:url",
      component: _5af76616,
      name: "api-url"
    }, {
      path: "/athlete/:id?",
      component: _3c8511ac,
      name: "athlete-id"
    }, {
      path: "/post/:id?",
      component: _b6044148,
      name: "post-id"
    }, {
      path: "/search/:query?",
      component: _e1b6b462,
      name: "search-query"
    }, {
      path: "/athlete/:id?/logs",
      component: _b465ad76,
      name: "athlete-id-logs"
    }, {
      path: "/team/:id?/schedule",
      component: _13feaa06,
      name: "team-id-schedule"
    }, {
      path: "/athlete/:id?/log/:date?",
      component: _e8722448,
      name: "athlete-id-log-date"
    }, {
      path: "/races/:id?/:gender?/:event?",
      component: _5bdb17c6,
      name: "races-id-gender-event"
    }, {
      path: "/team/:id?/:gender?/:year?",
      component: _727679b7,
      name: "team-id-gender-year"
    }, {
      path: "/",
      component: _33b9ea91,
      name: "index"
    }, {
      path: "/*",
      component: _15be5f1e,
      name: "all"
    }],

    fallback: false
  })
}
