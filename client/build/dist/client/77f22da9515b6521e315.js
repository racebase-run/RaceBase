(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{508:function(t,e,n){var content=n(704);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("0c64f7a6",content,!0,{sourceMap:!1})},703:function(t,e,n){"use strict";var r=n(508);n.n(r).a},704:function(t,e,n){(e=n(11)(!1)).push([t.i,"body[data-v-88a55678]{font-family:Avenir Next!important}a[data-v-88a55678]{color:#3976d0}b[data-v-88a55678]{font-weight:500}p[data-v-88a55678]{font-size:14px;line-height:24px}.more[data-v-88a55678]{font-style:italic}.more[data-v-88a55678],.nav[data-v-88a55678]{text-align:center}.nav[data-v-88a55678]{margin:0 auto}.nav .link[data-v-88a55678]{color:#468df5;font-size:19px;text-align:center;padding:0 13px;display:inline-block}.graphic[data-v-88a55678]{display:block;width:85%;max-width:350px}.profile-pic[data-v-88a55678]{display:block;border-radius:10px;width:45px;height:45px;margin:0 auto;border:1px solid #dadada}.intro[data-v-88a55678]{width:60%;margin:0 auto}.intro h2[data-v-88a55678]{font-size:22px;text-align:center;width:100%;margin-bottom:15px}.intro p[data-v-88a55678]{font-size:15px}.header[data-v-88a55678],.intro p[data-v-88a55678]{text-align:center}.header[data-v-88a55678]{margin:30px auto 0}.header h1[data-v-88a55678],.header h2[data-v-88a55678]{font-weight:400}.header h1[data-v-88a55678]{height:100px;line-height:100px;margin-bottom:-5px;font-size:45px}.header h1[data-v-88a55678],.header h2[data-v-88a55678]{text-align:center;width:100%}.header h2[data-v-88a55678]{font-size:17px;margin-bottom:20px}.header .buttons[data-v-88a55678]{display:block;margin:0 auto}.header .buttons .btn[data-v-88a55678]{margin:5px}h3[data-v-88a55678]{font-size:19px;text-align:left}h3[data-v-88a55678],h4[data-v-88a55678]{text-transform:uppercase}h4[data-v-88a55678]{font-size:16px;margin-bottom:15px;text-align:center}.logo[data-v-88a55678]{margin-top:-15px;margin-right:5px;height:40px}.search-container[data-v-88a55678]{width:100%}.search-container .search-form[data-v-88a55678]{margin:0 auto;width:auto;display:table}.search-container .search-form .input-group[data-v-88a55678]{margin:0 auto;width:450px}.search-container .search-form .input-group input[data-v-88a55678]{font-size:20px;height:auto}.user .welcome[data-v-88a55678]{font-size:20px;font-weight:500}.about p[data-v-88a55678]{font-size:14px}@media (min-width:992px){.about p[data-v-88a55678]{font-size:16px}}.support .insta[data-v-88a55678]{font-size:17px}.race .col-2[data-v-88a55678]{text-align:center;font-size:15px}.race h5[data-v-88a55678]{font-size:18px;font-weight:400}.race h5 a[data-v-88a55678]{color:#468df5}.race .metadata[data-v-88a55678]{text-transform:uppercase;font-size:14px}@media (min-width:768px){.user[data-v-88a55678]{position:absolute;top:0;right:0}}",""]),t.exports=e},822:function(t,e,n){"use strict";n.r(e);n(24);var r=n(3),o=(n(90),{layout:"home",components:{UserWidget:function(){return n.e(19).then(n.bind(null,849))}},head:function(){return{meta:[{hid:"OpenGraph Title",property:"og:title",content:"RaceBase - Community Sourced Running Results"},{hid:"OpenGraph Description",property:"og:description",content:""},{hid:"OpenGraph URL",property:"og:url",content:"https://racebase.run"},{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.run/images/opengraph/home.png"}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$axios,e.abrupt("return",{searchInput:""});case 2:case"end":return e.stop()}}),e)})))()},methods:{search:function(t){this.$router.push({path:"/search/"+encodeURI(this.searchInput)})},logOut:function(){this.$store.dispatch("auth/logout")}},computed:{user:function(){return this.$store.state.auth.user},isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}}}),c=(n(703),n(16)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"header row"},[t._m(0),t._v(" "),n("div",{staticClass:"nav mb-3"},[n("nuxt-link",{staticClass:"link",attrs:{to:"/about"}},[t._v(" About ")]),t._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:"/resources"}},[t._v(" Resources ")]),t._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:"/api"}},[t._v(" API ")])],1),t._v(" "),n("div",{staticClass:"search-container"},[n("form",{staticClass:"search-form mb-3",on:{submit:function(e){return e.preventDefault(),t.search()}}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("span",{staticClass:"input-group-text",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.search()}}},[n("fa",{attrs:{icon:"search"}})],1)])])])]),t._v(" "),t.isLoggedIn?t._e():n("div",{staticClass:"buttons"},[n("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"signup"}},[t._v(" Sign Up ")]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-default",attrs:{to:"login"}},[t._v(" Log In ")])],1),t._v(" "),t.isLoggedIn?n("div",{staticClass:"user mt-3 mr-md-3 mx-auto"},[n("UserWidget",{attrs:{user:t.user},on:{logOut:t.logOut}})],1):t._e()]),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("img",{staticClass:"logo",attrs:{src:"/images/textlogo.svg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-5 mb-4 mx-auto intro"},[e("h2",[this._v(" Community Sourced Results ")]),this._v(" "),e("p",[this._v(" \n      RaceBase was founded upon the idea that the records of our hard earned PR's should not be owned by a company that doesn't know or care who you are. All RaceBase results are maintained by the community, and anyone can add or edit results. Even small meets and time trials can be showcased on your profile. \n    ")])])}],!1,null,"88a55678",null);e.default=component.exports}}]);