exports.ids=[34],exports.modules={113:function(t,e,o){var content=o(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(3).default;t.exports.__inject__=function(t){r("0c64f7a6",content,!0,t)}},227:function(t,e,o){"use strict";o.r(e);var r=o(113),n=o.n(r);for(var d in r)"default"!==d&&function(t){o.d(e,t,(function(){return r[t]}))}(d);e.default=n.a},228:function(t,e,o){(e=o(2)(!1)).push([t.i,"body[data-v-88a55678]{font-family:Avenir Next!important}a[data-v-88a55678]{color:#3976d0}b[data-v-88a55678]{font-weight:500}p[data-v-88a55678]{font-size:14px;line-height:24px}.more[data-v-88a55678]{font-style:italic}.more[data-v-88a55678],.nav[data-v-88a55678]{text-align:center}.nav[data-v-88a55678]{margin:0 auto}.nav .link[data-v-88a55678]{color:#468df5;font-size:19px;text-align:center;padding:0 13px;display:inline-block}.graphic[data-v-88a55678]{display:block;width:85%;max-width:350px}.profile-pic[data-v-88a55678]{display:block;border-radius:10px;width:45px;height:45px;margin:0 auto;border:1px solid #dadada}.intro[data-v-88a55678]{width:60%;margin:0 auto}.intro h2[data-v-88a55678]{font-size:22px;text-align:center;width:100%;margin-bottom:15px}.intro p[data-v-88a55678]{font-size:15px}.header[data-v-88a55678],.intro p[data-v-88a55678]{text-align:center}.header[data-v-88a55678]{margin:30px auto 0}.header h1[data-v-88a55678],.header h2[data-v-88a55678]{font-weight:400}.header h1[data-v-88a55678]{height:100px;line-height:100px;margin-bottom:-5px;font-size:45px}.header h1[data-v-88a55678],.header h2[data-v-88a55678]{text-align:center;width:100%}.header h2[data-v-88a55678]{font-size:17px;margin-bottom:20px}.header .buttons[data-v-88a55678]{display:block;margin:0 auto}.header .buttons .btn[data-v-88a55678]{margin:5px}h3[data-v-88a55678]{font-size:19px;text-align:left}h3[data-v-88a55678],h4[data-v-88a55678]{text-transform:uppercase}h4[data-v-88a55678]{font-size:16px;margin-bottom:15px;text-align:center}.logo[data-v-88a55678]{margin-top:-15px;margin-right:5px;height:40px}.search-container[data-v-88a55678]{width:100%}.search-container .search-form[data-v-88a55678]{margin:0 auto;width:auto;display:table}.search-container .search-form .input-group[data-v-88a55678]{margin:0 auto;width:450px}.search-container .search-form .input-group input[data-v-88a55678]{font-size:20px;height:auto}.user .welcome[data-v-88a55678]{font-size:20px;font-weight:500}.about p[data-v-88a55678]{font-size:14px}@media (min-width:992px){.about p[data-v-88a55678]{font-size:16px}}.support .insta[data-v-88a55678]{font-size:17px}.race .col-2[data-v-88a55678]{text-align:center;font-size:15px}.race h5[data-v-88a55678]{font-size:18px;font-weight:400}.race h5 a[data-v-88a55678]{color:#468df5}.race .metadata[data-v-88a55678]{text-transform:uppercase;font-size:14px}@media (min-width:768px){.user[data-v-88a55678]{position:absolute;top:0;right:0}}",""]),t.exports=e},343:function(t,e,o){"use strict";o.r(e);o(13);var r={layout:"home",components:{UserWidget:()=>o.e(15).then(o.bind(null,372))},head:()=>({meta:[{hid:"OpenGraph Title",property:"og:title",content:"RaceBase - Community Sourced Running Results"},{hid:"OpenGraph Description",property:"og:description",content:""},{hid:"OpenGraph URL",property:"og:url",content:"https://racebase.run"},{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.run/images/opengraph/home.png"}]}),asyncData:async({$axios:t})=>({searchInput:""}),methods:{search:function(t){this.$router.push({path:"/search/"+encodeURI(this.searchInput)})},logOut:function(){this.$store.dispatch("auth/logout")}},computed:{user(){return this.$store.state.auth.user},isLoggedIn(){return this.$store.getters["auth/isLoggedIn"]}}},n=o(1);var component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._ssrNode('<div class="header row" data-v-88a55678>',"</div>",[t._ssrNode('<h1 data-v-88a55678><img src="/images/textlogo.svg" class="logo" data-v-88a55678></h1> '),t._ssrNode('<div class="nav mb-3" data-v-88a55678>',"</div>",[o("nuxt-link",{staticClass:"link",attrs:{to:"/about"}},[t._v(" About ")]),t._ssrNode(" "),o("nuxt-link",{staticClass:"link",attrs:{to:"/resources"}},[t._v(" Resources ")]),t._ssrNode(" "),o("nuxt-link",{staticClass:"link",attrs:{to:"/api"}},[t._v(" API ")])],2),t._ssrNode(" "),t._ssrNode('<div class="search-container" data-v-88a55678>',"</div>",[t._ssrNode('<form class="search-form mb-3" data-v-88a55678>',"</form>",[t._ssrNode('<div class="input-group" data-v-88a55678>',"</div>",[t._ssrNode('<input type="text" placeholder="Search..."'+t._ssrAttr("value",t.searchInput)+' class="form-control" data-v-88a55678> '),t._ssrNode('<div class="input-group-append" data-v-88a55678>',"</div>",[t._ssrNode('<span class="input-group-text" style="cursor: pointer" data-v-88a55678>',"</span>",[o("fa",{attrs:{icon:"search"}})],1)])],2)])]),t._ssrNode(" "),t.isLoggedIn?t._e():t._ssrNode('<div class="buttons" data-v-88a55678>',"</div>",[o("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"signup"}},[t._v(" Sign Up ")]),t._ssrNode(" "),o("nuxt-link",{staticClass:"btn btn-default",attrs:{to:"login"}},[t._v(" Log In ")])],2),t._ssrNode(" "),t.isLoggedIn?t._ssrNode('<div class="user mt-3 mr-md-3 mx-auto" data-v-88a55678>',"</div>",[o("UserWidget",{attrs:{user:t.user},on:{logOut:t.logOut}})],1):t._e()],2),t._ssrNode(" <div class=\"row mt-5 mb-4 mx-auto intro\" data-v-88a55678><h2 data-v-88a55678> Community Sourced Results </h2> <p data-v-88a55678> \n      RaceBase was founded upon the idea that the records of our hard earned PR's should not be owned by a company that doesn't know or care who you are. All RaceBase results are maintained by the community, and anyone can add or edit results. Even small meets and time trials can be showcased on your profile. \n    </p></div>")],2)}),[],!1,(function(t){var e=o(227);e.__inject__&&e.__inject__(t)}),"88a55678","2ed28140");e.default=component.exports}};