import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _604d387a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _76ed870a = () => interopDefault(import('../pages/api/index.vue' /* webpackChunkName: "pages/api/index" */))
const _7532f881 = () => interopDefault(import('../pages/changelog.vue' /* webpackChunkName: "pages/changelog" */))
const _74a1b04a = () => interopDefault(import('../pages/coach/index.vue' /* webpackChunkName: "pages/coach/index" */))
const _9fe92260 = () => interopDefault(import('../pages/contribute.vue' /* webpackChunkName: "pages/contribute" */))
const _6dcab9c1 = () => interopDefault(import('../pages/feed.vue' /* webpackChunkName: "pages/feed" */))
const _49acb656 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _174d9279 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _79ec6e30 = () => interopDefault(import('../pages/press.vue' /* webpackChunkName: "pages/press" */))
const _48ec3c96 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _0722a595 = () => interopDefault(import('../pages/resources/index.vue' /* webpackChunkName: "pages/resources/index" */))
const _a13ed32e = () => interopDefault(import('../pages/roadmap.vue' /* webpackChunkName: "pages/roadmap" */))
const _59ea3fbe = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _2a02d174 = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _fc9646e2 = () => interopDefault(import('../pages/welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _fff218c6 = () => interopDefault(import('../pages/api/blog/index.vue' /* webpackChunkName: "pages/api/blog/index" */))
const _43129145 = () => interopDefault(import('../pages/api/routes/index.vue' /* webpackChunkName: "pages/api/routes/index" */))
const _7f437062 = () => interopDefault(import('../pages/coach/schedule.vue' /* webpackChunkName: "pages/coach/schedule" */))
const _e582c8fa = () => interopDefault(import('../pages/new/race.vue' /* webpackChunkName: "pages/new/race" */))
const _5d01079f = () => interopDefault(import('../pages/races/notfound.vue' /* webpackChunkName: "pages/races/notfound" */))
const _7812fa28 = () => interopDefault(import('../pages/signup/claim.vue' /* webpackChunkName: "pages/signup/claim" */))
const _20d80169 = () => interopDefault(import('../pages/team/edit.vue' /* webpackChunkName: "pages/team/edit" */))
const _369045ee = () => interopDefault(import('../pages/team/notfound.vue' /* webpackChunkName: "pages/team/notfound" */))
const _40ad52b9 = () => interopDefault(import('../pages/team/rosters.vue' /* webpackChunkName: "pages/team/rosters" */))
const _05689057 = () => interopDefault(import('../pages/user/settings/index.vue' /* webpackChunkName: "pages/user/settings/index" */))
const _2694df7a = () => interopDefault(import('../pages/new/result/success.vue' /* webpackChunkName: "pages/new/result/success" */))
const _cc34ee3a = () => interopDefault(import('../pages/resources/tools/pacezones.vue' /* webpackChunkName: "pages/resources/tools/pacezones" */))
const _23f8e44c = () => interopDefault(import('../pages/resources/tools/splits.vue' /* webpackChunkName: "pages/resources/tools/splits" */))
const _7d55fbf3 = () => interopDefault(import('../pages/signup/coach/claim.vue' /* webpackChunkName: "pages/signup/coach/claim" */))
const _0324be6e = () => interopDefault(import('../pages/team/home/athlete.vue' /* webpackChunkName: "pages/team/home/athlete" */))
const _61318d89 = () => interopDefault(import('../pages/team/home/coach.vue' /* webpackChunkName: "pages/team/home/coach" */))
const _69043293 = () => interopDefault(import('../pages/user/settings/coaching.vue' /* webpackChunkName: "pages/user/settings/coaching" */))
const _46fde66e = () => interopDefault(import('../pages/user/settings/profile.vue' /* webpackChunkName: "pages/user/settings/profile" */))
const _00e13b4e = () => interopDefault(import('../pages/user/log/week/_date.vue' /* webpackChunkName: "pages/user/log/week/_date" */))
const _7c50e896 = () => interopDefault(import('../pages/api/blog/_url.vue' /* webpackChunkName: "pages/api/blog/_url" */))
const _758d990d = () => interopDefault(import('../pages/api/routes/_url.vue' /* webpackChunkName: "pages/api/routes/_url" */))
const _ae39ed0c = () => interopDefault(import('../pages/new/post/_resultId.vue' /* webpackChunkName: "pages/new/post/_resultId" */))
const _061905aa = () => interopDefault(import('../pages/new/result/_raceId.vue' /* webpackChunkName: "pages/new/result/_raceId" */))
const _15a977a4 = () => interopDefault(import('../pages/news/post/_name.vue' /* webpackChunkName: "pages/news/post/_name" */))
const _0dc459c0 = () => interopDefault(import('../pages/races/all/_page.vue' /* webpackChunkName: "pages/races/all/_page" */))
const _3818b8d8 = () => interopDefault(import('../pages/result/edit/_id.vue' /* webpackChunkName: "pages/result/edit/_id" */))
const _0a6bba9a = () => interopDefault(import('../pages/result/history/_id/index.vue' /* webpackChunkName: "pages/result/history/_id/index" */))
const _9fdd307a = () => interopDefault(import('../pages/team/roster/_rosterId/index.vue' /* webpackChunkName: "pages/team/roster/_rosterId/index" */))
const _d5143e12 = () => interopDefault(import('../pages/user/content/_page.vue' /* webpackChunkName: "pages/user/content/_page" */))
const _1e872bc2 = () => interopDefault(import('../pages/user/join/_joincode.vue' /* webpackChunkName: "pages/user/join/_joincode" */))
const _6cc28f21 = () => interopDefault(import('../pages/user/log/_date.vue' /* webpackChunkName: "pages/user/log/_date" */))
const _310f22d0 = () => interopDefault(import('../pages/user/resetPassword/_token.vue' /* webpackChunkName: "pages/user/resetPassword/_token" */))
const _345a39ef = () => interopDefault(import('../pages/user/verify/_token.vue' /* webpackChunkName: "pages/user/verify/_token" */))
const _7024a83f = () => interopDefault(import('../pages/team/group/_groupId/edit.vue' /* webpackChunkName: "pages/team/group/_groupId/edit" */))
const _096591ae = () => interopDefault(import('../pages/team/roster/_rosterId/edit.vue' /* webpackChunkName: "pages/team/roster/_rosterId/edit" */))
const _3bb70552 = () => interopDefault(import('../pages/result/history/_id/version/_number.vue' /* webpackChunkName: "pages/result/history/_id/version/_number" */))
const _8d6b52b0 = () => interopDefault(import('../pages/api/_url.vue' /* webpackChunkName: "pages/api/_url" */))
const _0662a55a = () => interopDefault(import('../pages/athlete/_id/index.vue' /* webpackChunkName: "pages/athlete/_id/index" */))
const _0350cfee = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _4f697f06 = () => interopDefault(import('../pages/search/_query.vue' /* webpackChunkName: "pages/search/_query" */))
const _493767d7 = () => interopDefault(import('../pages/athlete/_id/logs.vue' /* webpackChunkName: "pages/athlete/_id/logs" */))
const _804382aa = () => interopDefault(import('../pages/team/_id/schedule.vue' /* webpackChunkName: "pages/team/_id/schedule" */))
const _4036fa8a = () => interopDefault(import('../pages/athlete/_id/log/_date.vue' /* webpackChunkName: "pages/athlete/_id/log/_date" */))
const _4d6976a3 = () => interopDefault(import('../pages/races/_id/_event/index.vue' /* webpackChunkName: "pages/races/_id/_event/index" */))
const _a0b5328a = () => interopDefault(import('../pages/team/_id/_year/index.vue' /* webpackChunkName: "pages/team/_id/_year/index" */))
const _386c758a = () => interopDefault(import('../pages/team/_id/_year/athletes.vue' /* webpackChunkName: "pages/team/_id/_year/athletes" */))
const _3ac55b2e = () => interopDefault(import('../pages/races/_id/_event/team/all.vue' /* webpackChunkName: "pages/races/_id/_event/team/all" */))
const _4a826984 = () => interopDefault(import('../pages/races/_id/_event/team/_teamId.vue' /* webpackChunkName: "pages/races/_id/_event/team/_teamId" */))
const _fff5d982 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0d35e268 = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _604d387a,
    name: "about"
  }, {
    path: "/api",
    component: _76ed870a,
    name: "api"
  }, {
    path: "/changelog",
    component: _7532f881,
    name: "changelog"
  }, {
    path: "/coach",
    component: _74a1b04a,
    name: "coach"
  }, {
    path: "/contribute",
    component: _9fe92260,
    name: "contribute"
  }, {
    path: "/feed",
    component: _6dcab9c1,
    name: "feed"
  }, {
    path: "/login",
    component: _49acb656,
    name: "login"
  }, {
    path: "/news",
    component: _174d9279,
    name: "news"
  }, {
    path: "/press",
    component: _79ec6e30,
    name: "press"
  }, {
    path: "/privacy",
    component: _48ec3c96,
    name: "privacy"
  }, {
    path: "/resources",
    component: _0722a595,
    name: "resources"
  }, {
    path: "/roadmap",
    component: _a13ed32e,
    name: "roadmap"
  }, {
    path: "/signup",
    component: _59ea3fbe,
    name: "signup"
  }, {
    path: "/terms",
    component: _2a02d174,
    name: "terms"
  }, {
    path: "/welcome",
    component: _fc9646e2,
    name: "welcome"
  }, {
    path: "/api/blog",
    component: _fff218c6,
    name: "api-blog"
  }, {
    path: "/api/routes",
    component: _43129145,
    name: "api-routes"
  }, {
    path: "/coach/schedule",
    component: _7f437062,
    name: "coach-schedule"
  }, {
    path: "/new/race",
    component: _e582c8fa,
    name: "new-race"
  }, {
    path: "/races/notfound",
    component: _5d01079f,
    name: "races-notfound"
  }, {
    path: "/signup/claim",
    component: _7812fa28,
    name: "signup-claim"
  }, {
    path: "/team/edit",
    component: _20d80169,
    name: "team-edit"
  }, {
    path: "/team/notfound",
    component: _369045ee,
    name: "team-notfound"
  }, {
    path: "/team/rosters",
    component: _40ad52b9,
    name: "team-rosters"
  }, {
    path: "/user/settings",
    component: _05689057,
    name: "user-settings"
  }, {
    path: "/new/result/success",
    component: _2694df7a,
    name: "new-result-success"
  }, {
    path: "/resources/tools/pacezones",
    component: _cc34ee3a,
    name: "resources-tools-pacezones"
  }, {
    path: "/resources/tools/splits",
    component: _23f8e44c,
    name: "resources-tools-splits"
  }, {
    path: "/signup/coach/claim",
    component: _7d55fbf3,
    name: "signup-coach-claim"
  }, {
    path: "/team/home/athlete",
    component: _0324be6e,
    name: "team-home-athlete"
  }, {
    path: "/team/home/coach",
    component: _61318d89,
    name: "team-home-coach"
  }, {
    path: "/user/settings/coaching",
    component: _69043293,
    name: "user-settings-coaching"
  }, {
    path: "/user/settings/profile",
    component: _46fde66e,
    name: "user-settings-profile"
  }, {
    path: "/user/log/week/:date?",
    component: _00e13b4e,
    name: "user-log-week-date"
  }, {
    path: "/api/blog/:url",
    component: _7c50e896,
    name: "api-blog-url"
  }, {
    path: "/api/routes/:url",
    component: _758d990d,
    name: "api-routes-url"
  }, {
    path: "/new/post/:resultId?",
    component: _ae39ed0c,
    name: "new-post-resultId"
  }, {
    path: "/new/result/:raceId?",
    component: _061905aa,
    name: "new-result-raceId"
  }, {
    path: "/news/post/:name?",
    component: _15a977a4,
    name: "news-post-name"
  }, {
    path: "/races/all/:page?",
    component: _0dc459c0,
    name: "races-all-page"
  }, {
    path: "/result/edit/:id?",
    component: _3818b8d8,
    name: "result-edit-id"
  }, {
    path: "/result/history/:id?",
    component: _0a6bba9a,
    name: "result-history-id"
  }, {
    path: "/team/roster/:rosterId?",
    component: _9fdd307a,
    name: "team-roster-rosterId"
  }, {
    path: "/user/content/:page?",
    component: _d5143e12,
    name: "user-content-page"
  }, {
    path: "/user/join/:joincode?",
    component: _1e872bc2,
    name: "user-join-joincode"
  }, {
    path: "/user/log/:date?",
    component: _6cc28f21,
    name: "user-log-date"
  }, {
    path: "/user/resetPassword/:token?",
    component: _310f22d0,
    name: "user-resetPassword-token"
  }, {
    path: "/user/verify/:token?",
    component: _345a39ef,
    name: "user-verify-token"
  }, {
    path: "/team/group/:groupId?/edit",
    component: _7024a83f,
    name: "team-group-groupId-edit"
  }, {
    path: "/team/roster/:rosterId?/edit",
    component: _096591ae,
    name: "team-roster-rosterId-edit"
  }, {
    path: "/result/history/:id?/version/:number?",
    component: _3bb70552,
    name: "result-history-id-version-number"
  }, {
    path: "/api/:url",
    component: _8d6b52b0,
    name: "api-url"
  }, {
    path: "/athlete/:id?",
    component: _0662a55a,
    name: "athlete-id"
  }, {
    path: "/post/:id?",
    component: _0350cfee,
    name: "post-id"
  }, {
    path: "/search/:query?",
    component: _4f697f06,
    name: "search-query"
  }, {
    path: "/athlete/:id?/logs",
    component: _493767d7,
    name: "athlete-id-logs"
  }, {
    path: "/team/:id?/schedule",
    component: _804382aa,
    name: "team-id-schedule"
  }, {
    path: "/athlete/:id?/log/:date?",
    component: _4036fa8a,
    name: "athlete-id-log-date"
  }, {
    path: "/races/:id?/:event?",
    component: _4d6976a3,
    name: "races-id-event"
  }, {
    path: "/team/:id?/:year?",
    component: _a0b5328a,
    name: "team-id-year"
  }, {
    path: "/team/:id?/:year?/athletes",
    component: _386c758a,
    name: "team-id-year-athletes"
  }, {
    path: "/races/:id?/:event?/team/all",
    component: _3ac55b2e,
    name: "races-id-event-team-all"
  }, {
    path: "/races/:id?/:event?/team/:teamId?",
    component: _4a826984,
    name: "races-id-event-team-teamId"
  }, {
    path: "/",
    component: _fff5d982,
    name: "index"
  }, {
    path: "/*",
    component: _0d35e268,
    name: "all"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
