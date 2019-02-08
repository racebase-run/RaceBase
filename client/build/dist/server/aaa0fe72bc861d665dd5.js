exports.ids=[32],exports.modules={110:function(t,e,r){"use strict";r.r(e);var o=r(70),l=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,function(){return o[t]})}(n);e.default=l.a},111:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"h4[data-v-74ac7f84]{font-size:19px;border-radius:3px;padding:3px 5px;width:auto;background:#f3f3f3}ul[data-v-74ac7f84]{list-style:square}",""])},163:function(t,e,r){"use strict";r.r(e);var o={data:()=>({user:{}}),middleware:"auth",async created(){await this.$store.dispatch("auth/fetchUser"),this.user={...this.$store.state.auth.user}}},l=r(1);var component=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-90 mx-auto mt-4 mb-5"},[t._ssrNode("<h2 data-v-74ac7f84> Welcome to RaceBase! </h2> "+(t.user.athlete_id?"<p data-v-74ac7f84> \n    Congratulations on your new Athlete ID:\n  </p>":"\x3c!----\x3e")+" "),t.user.athlete_id?t._ssrNode('<h4 class="d-table" data-v-74ac7f84>',"</h4>",[r("nuxt-link",{attrs:{to:"/athlete/"+t.user.athlete_id}},[r("fa",{attrs:{icon:"user"}}),t._v("\n      "+t._s(t.user.athlete_id)+" \n    ")],1)],1):t._e(),t._ssrNode(' <p class="mt-4 mb-2" data-v-74ac7f84> Now that you\'re all set up, \n  here are some things you can do to get started: </p> '),t._ssrNode("<h5 data-v-74ac7f84>","</h5>",[t._ssrNode(" Change your "),r("nuxt-link",{attrs:{to:"/user/settings"}},[t._v("Settings")]),t._ssrNode(": ")],2),t._ssrNode(" "+(t.user.athlete_id?"<ul data-v-74ac7f84><li data-v-74ac7f84> Set a profile picture </li> <li data-v-74ac7f84> Share your current training and racing shoes </li> <li data-v-74ac7f84> Add an alias to another Athlete ID that your results are under </li> <li data-v-74ac7f84> Add your location and Strava profile </li> <li data-v-74ac7f84> Share how many miles you run in a week </li></ul>":"<ul data-v-74ac7f84><li data-v-74ac7f84> Claim an Athlete ID for more features </li></ul>")+" "),t._ssrNode("<h5 data-v-74ac7f84>","</h5>",[t._ssrNode(" Check out your "),r("nuxt-link",{attrs:{to:"/user/log/week"}},[t._v("Running Log")]),t._ssrNode(": ")],2),t._ssrNode(" <ul data-v-74ac7f84><li data-v-74ac7f84> Log your weight routines </li> <li data-v-74ac7f84> Enter multiple runs for a day </li> <li data-v-74ac7f84> See your total mileage for the week </li> <li data-v-74ac7f84> Plan out your mileage for the week </li> <li data-v-74ac7f84> Add custom Daily Checkboxes to keep track of anything you want</li> <li data-v-74ac7f84> Log your sleep and resting heart rate </li> <li data-v-74ac7f84> See insights about your data </li></ul> <h5 data-v-74ac7f84> Browse Results: </h5> "),t._ssrNode("<ul data-v-74ac7f84>","</ul>",[t._ssrNode("<li data-v-74ac7f84>","</li>",[r("nuxt-link",{attrs:{to:"/races/all"}},[t._v("Search for a "),r("strong",[t._v("race")])])],1),t._ssrNode(" "),t._ssrNode("<li data-v-74ac7f84>","</li>",[r("nuxt-link",{attrs:{to:"/search/"}},[t._v("Search for a "),r("strong",[t._v("result")])])],1)],2)],2)},[],!1,function(t){var e=r(110);e.__inject__&&e.__inject__(t)},"74ac7f84","161a1bb4");e.default=component.exports},70:function(t,e,r){var content=r(111);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(3).default;t.exports.__inject__=function(t){o("41299ebc",content,!0,t)}}};
//# sourceMappingURL=aaa0fe72bc861d665dd5.js.map