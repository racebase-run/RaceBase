exports.ids=[29],exports.modules={101:function(t,e,d){var content=d(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=d(3).default;t.exports.__inject__=function(t){o("13b110fc",content,!0,t)}},186:function(t,e,d){"use strict";d.r(e);var o=d(101),r=d.n(o);for(var n in o)"default"!==n&&function(t){d.d(e,t,function(){return o[t]})}(n);e.default=r.a},187:function(t,e,d){(t.exports=d(2)(!1)).push([t.i,"body[data-v-2705d96a]{font-family:Avenir Next!important}a[data-v-2705d96a]{color:#3976d0}b[data-v-2705d96a]{font-weight:500}p[data-v-2705d96a]{font-size:14px;line-height:24px}.more[data-v-2705d96a]{font-style:italic}h2[data-v-2705d96a]{text-transform:uppercase}.nav[data-v-2705d96a]{margin:0 auto}.nav[data-v-2705d96a],.nav .link[data-v-2705d96a]{text-align:center}.nav .link[data-v-2705d96a]{color:#468df5;font-size:19px;padding:0 13px;display:inline-block}.graphic[data-v-2705d96a]{display:block;width:85%}.profile-pic[data-v-2705d96a]{display:block;border-radius:10px;width:45px;height:45px;margin:0 auto;border:1px solid #dadada}.header[data-v-2705d96a]{margin:30px auto 0;text-align:center}.header h1[data-v-2705d96a],.header h2[data-v-2705d96a]{font-weight:400}.header h1[data-v-2705d96a]{height:100px;line-height:100px;margin-bottom:-5px;font-size:45px}.header h1[data-v-2705d96a],.header h2[data-v-2705d96a]{text-align:center;width:100%}.header h2[data-v-2705d96a]{font-size:17px;margin-bottom:20px}.header .buttons[data-v-2705d96a]{display:block;margin:0 auto}.header .buttons .btn[data-v-2705d96a]{margin:5px}h3[data-v-2705d96a]{font-size:19px;text-align:left}h3[data-v-2705d96a],h4[data-v-2705d96a]{text-transform:uppercase}h4[data-v-2705d96a]{font-size:14px;margin-bottom:12px}.logo[data-v-2705d96a]{margin-top:-15px;margin-right:5px;height:50px}.search-container[data-v-2705d96a]{width:100%}.search-container .search-form[data-v-2705d96a]{margin:0 auto;width:auto;display:table}.search-container .search-form .input-group[data-v-2705d96a]{margin:0 auto;width:320px}.user .welcome[data-v-2705d96a]{font-size:20px;font-weight:500}.about p[data-v-2705d96a]{font-size:14px}@media (min-width:992px){.about p[data-v-2705d96a]{font-size:16px}}.support .insta[data-v-2705d96a]{font-size:17px}.race .col-2[data-v-2705d96a]{text-align:center;font-size:15px}.race h5[data-v-2705d96a]{font-size:16px;font-weight:400}@media (min-width:992px){.race h5[data-v-2705d96a]{font-size:18px}}.race .metadata[data-v-2705d96a]{text-transform:uppercase;font-size:13px}@media (min-width:768px){.user[data-v-2705d96a]{position:absolute;top:0;right:0}}",""])},268:function(t,e,d){"use strict";d.r(e);d(11);var o={layout:"home",components:{NewsItem:()=>d.e(8).then(d.bind(null,276)),UserWidget:()=>d.e(11).then(d.bind(null,292))},head:()=>({meta:[{hid:"OpenGraph Title",property:"og:title",content:"RaceBase - Community Sourced Running Results"},{hid:"OpenGraph Description",property:"og:description",content:""},{hid:"OpenGraph URL",property:"og:url",content:"https://racebase.io"},{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.io/images/opengraph/home.png"}]}),asyncData:async({$axios:t})=>({races:(await t.$get("race/list/1/3")).docs,searchInput:""}),methods:{search:function(t){this.$router.push({path:"/search/"+encodeURI(this.searchInput)})},logOut:function(){this.$store.dispatch("auth/logout")}},computed:{posts(){return this.$store.state.posts.posts.slice(0,3)},user(){return this.$store.state.auth.user},isLoggedIn(){return this.$store.getters["auth/isLoggedIn"]}}},r=d(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"container"},[t._ssrNode('<div class="header row" data-v-2705d96a>',"</div>",[t._ssrNode('<h1 data-v-2705d96a><img src="/images/logo.svg" class="logo" data-v-2705d96a> RaceBase </h1> '),t._ssrNode('<div class="nav mb-3" data-v-2705d96a>',"</div>",[d("nuxt-link",{staticClass:"link",attrs:{to:"/about"}},[t._v(" About ")]),t._ssrNode(" "),d("nuxt-link",{staticClass:"link",attrs:{to:"/roadmap"}},[t._v(" Roadmap ")]),t._ssrNode(" "),d("nuxt-link",{staticClass:"link",attrs:{to:"/blog"}},[t._v(" Blog ")])],2),t._ssrNode(" "),t._ssrNode('<div class="search-container" data-v-2705d96a>',"</div>",[t._ssrNode('<form class="search-form mb-3" data-v-2705d96a>',"</form>",[t._ssrNode('<div class="input-group" data-v-2705d96a>',"</div>",[t._ssrNode('<input type="text" placeholder="Search..."'+t._ssrAttr("value",t.searchInput)+' class="form-control" data-v-2705d96a> '),t._ssrNode('<div class="input-group-append" data-v-2705d96a>',"</div>",[t._ssrNode('<span class="input-group-text" style="cursor: pointer" data-v-2705d96a>',"</span>",[d("fa",{attrs:{icon:"search"}})],1)])],2)])]),t._ssrNode(" "),t.isLoggedIn?t._e():t._ssrNode('<div class="buttons" data-v-2705d96a>',"</div>",[d("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"signup"}},[t._v(" Sign Up ")]),t._ssrNode(" "),d("nuxt-link",{staticClass:"btn btn-default",attrs:{to:"login"}},[t._v(" Log In ")])],2),t._ssrNode(" "),t.isLoggedIn?t._ssrNode('<div class="user mt-3 mr-3" data-v-2705d96a>',"</div>",[d("UserWidget",{attrs:{user:t.user},on:{logOut:t.logOut}})],1):t._e()],2),t._ssrNode(" "),t._ssrNode('<div class="row mt-5 mb-4 mx-auto" data-v-2705d96a>',"</div>",[t._ssrNode("<div class=\"col-md-7 col-12\" data-v-2705d96a><h3 data-v-2705d96a> Community Sourced </h3> <h2 data-v-2705d96a> Results </h2> <p data-v-2705d96a> \n        RaceBase was founded upon the idea that the records of our hard earned PR's should not be owned and put under lock and key by a company that doesn't know or care who you are. All RaceBase results are maintained by the community, and anyone can add or edit results… even small meets and time trials can be showcased on your profile. \n      </p></div> "),t._ssrNode('<div class="col-md-5 col-12" data-v-2705d96a>',"</div>",[t._ssrNode('<div class="races mb-4" data-v-2705d96a>',"</div>",[t._ssrNode("<h4 data-v-2705d96a>Recent Races</h4> "),t._l(t.races,function(e){return t._ssrNode('<div class="race row mb-2" data-v-2705d96a>',"</div>",[t._ssrNode('<div class="col-2 pr-0" data-v-2705d96a>',"</div>",[t._ssrNode('<div class="mb-1" data-v-2705d96a>'+t._ssrEscape(" "+t._s(e.upvotes)+" ")+"</div> "),t._ssrNode("<div data-v-2705d96a>","</div>",[d("fa",{attrs:{icon:["far","thumbs-up"]}})],1)],2),t._ssrNode(" "),t._ssrNode('<div class="col-10 pr-0" data-v-2705d96a>',"</div>",[t._ssrNode('<h5 class="mb-1" data-v-2705d96a>',"</h5>",[d("nuxt-link",{attrs:{to:"/races/"+e._id}},[t._v(" \n                "+t._s(e.name)+" \n              ")])],1),t._ssrNode(" "),t._ssrNode('<div class="metadata" data-v-2705d96a>',"</div>",[t._ssrNode('<span class="date mr-2" data-v-2705d96a>'+t._ssrEscape(" "+t._s(e.date)+" ")+"</span> "),t._ssrNode("<span data-v-2705d96a>","</span>",[d("fa",{attrs:{icon:"user-circle"}}),t._ssrNode(t._ssrEscape(" "+t._s(e.user)+" "))],2)],2)],2)],2)}),t._ssrNode(" "),d("nuxt-link",{staticClass:"more ml-2",attrs:{to:"/races/all"}},[t._v("More Races")])],2)])],2),t._ssrNode(' <div class="row mb-5 mx-auto" data-v-2705d96a><div class="col-md-5 col-12 align-items-center d-flex" data-v-2705d96a><img src="/images/logs.png" class="graphic" data-v-2705d96a></div> <div class="col-md-7 col-12" data-v-2705d96a><h3 data-v-2705d96a> Comprehensive </h3> <h2 data-v-2705d96a> Training Logs </h2> <p data-v-2705d96a> \n        There’s a lot that goes into running behind the scenes, that someone looking at your records and results alone might not fully understand. From core to weights, sleep to workouts, running is a lifestyle more than just a sport. We’ve tried to embody this principle in our training logs by offering logs that help you keep track of everything that’s important to you - and share those logs with everyone if you so choose. \n      </p></div></div> <div class="row mb-5 mx-auto" data-v-2705d96a><div class="col-md-7 col-12" data-v-2705d96a><h2 data-v-2705d96a> Coaching Tools </h2> <p data-v-2705d96a> \n        Coaches should have an easy way to see their athletes logs, assign workouts, manage team meet schedules and rosters, and analyze trends in their athletes’ data to make better decisions. So we’ve created some tools that help them do just that. Integrated with our training logs, our tools for coaches allow you to easily manage a team of athletes. \n      </p></div> <div class="col-md-5 col-12 align-items-center d-flex" data-v-2705d96a><img src="/images/coaching.png" class="graphic ml-auto" data-v-2705d96a></div></div>')],2)},[],!1,function(t){var e=d(186);e.__inject__&&e.__inject__(t)},"2705d96a","baec50b8");e.default=component.exports}};
//# sourceMappingURL=75a9085cad9a623796e8.js.map