(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{529:function(t,e,n){var content=n(651);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("dc4311c8",content,!0,{sourceMap:!1})},650:function(t,e,n){"use strict";var r=n(529);n.n(r).a},651:function(t,e,n){(t.exports=n(10)(!1)).push([t.i,".sidebar[data-v-da7e226c]{border-right:1px solid #dadada;height:auto;overflow:auto;border-bottom:1px solid #dadada}.header[data-v-da7e226c]{width:100%;padding-top:30px}.header a[data-v-da7e226c]{color:#000;text-decoration:none}.header h1[data-v-da7e226c],.header h2[data-v-da7e226c]{font-weight:400;text-align:center;width:100%}.header h1[data-v-da7e226c]{font-size:35px}.header h1 .logo[data-v-da7e226c]{width:39px}.header h2[data-v-da7e226c]{font-size:14px}.header form[data-v-da7e226c]{margin:0 auto;width:75%}.header form input[data-v-da7e226c]{font-size:14px}.nav[data-v-da7e226c]{margin:0 auto}.nav[data-v-da7e226c],.nav .link[data-v-da7e226c]{text-align:center}.nav .link[data-v-da7e226c]{color:#468df5;font-size:17px;padding:0 18px;display:inline-block}.races[data-v-da7e226c]{width:80%;margin:20px auto 0}.races .votes[data-v-da7e226c]{text-align:center}.races h3[data-v-da7e226c]{font-size:12px;font-weight:500;text-transform:uppercase;text-align:left}.races h4[data-v-da7e226c]{font-size:17px;font-weight:400;line-height:25px}.races h4 a[data-v-da7e226c]{color:#468df5}.races .metadata[data-v-da7e226c]{font-size:13px;text-transform:uppercase}.races .subtitle[data-v-da7e226c]{font-size:13px}.races .more[data-v-da7e226c]{font-size:12px;text-transform:uppercase;text-decoration:underline;color:#468df5;text-align:right}.profile[data-v-da7e226c]{max-width:100%}.user h3[data-v-da7e226c]{font-size:18px;font-weight:400;text-align:left}.user h4[data-v-da7e226c]{font-size:14px}.user .profile-pic[data-v-da7e226c]{width:45px;height:45px;margin:0 auto}.links[data-v-da7e226c]{text-align:center}@media (min-width:768px){.links[data-v-da7e226c]{text-align:left}}.links a[data-v-da7e226c]{margin:5px;font-size:14px;color:#3976d0;cursor:pointer!important;text-transform:uppercase}.links .btn-default[data-v-da7e226c]{color:#000}.links .logout[data-v-da7e226c]{font-weight:600}.site-links[data-v-da7e226c]{text-align:center;width:100%}.site-links a[data-v-da7e226c]{font-size:11px;color:grey;text-transform:uppercase;font-weight:500}.actions[data-v-da7e226c]{text-align:center}@media (min-width:768px){.sidebar[data-v-da7e226c]{border-bottom:none;height:100%;min-height:100%}}",""])},697:function(t,e,n){"use strict";n.r(e);n(19);var r=n(1),o={data:function(){return{searchText:""}},computed:{races:function(){return this.$store.state.races.recentRaces},user:function(){return this.$store.state.auth.user},isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}},methods:{logOut:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.dispatch("auth/logout");case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),search:function(){this.$router.push({path:"/search/"+encodeURI(this.searchText)})}}},c=(n(650),n(18)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("div",{staticClass:"d-flex flex-column h-100"},[n("div",{staticClass:"header"},[n("h1",[n("nuxt-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo mb-2",attrs:{src:"/images/logo.svg"}}),t._v(" RaceBase \n        ")])],1),t._v(" "),n("form",{staticClass:"search-form mb-3 mt-3",on:{submit:function(e){return e.preventDefault(),t.search()}}},[n("div",{staticClass:"input-group input-group-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("span",{staticClass:"input-group-text"},[n("fa",{attrs:{icon:"search"},on:{click:function(e){return t.search()}}})],1)])])])]),t._v(" "),n("div",{staticClass:"nav"},[n("nuxt-link",{staticClass:"link",attrs:{to:"/about"}},[t._v(" About ")]),t._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:"/news"}},[t._v(" News ")]),t._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:"/donate"}},[t._v(" Donate ")])],1),t._v(" "),n("div",{staticClass:"races mt-auto mb-3 d-none d-md-block"},[n("h3",{staticClass:"mb-3"},[t._v(" Recent Races ")]),t._v(" "),t._l(t.races,function(e){return n("div",{staticClass:"race row mb-2"},[n("div",{staticClass:"col-2 pr-0 votes"},[n("div",{staticClass:"mb-1"},[t._v(" "+t._s(e.upvotes)+" ")]),t._v(" "),n("div",[n("fa",{attrs:{icon:["far","thumbs-up"]}})],1)]),t._v(" "),n("div",{staticClass:"col-10 pr-0"},[n("h4",{staticClass:"mb-1"},[n("nuxt-link",{attrs:{to:"/races/"+e._id}},[t._v(" \n              "+t._s(e.name)+" \n            ")])],1),t._v(" "),n("div",{staticClass:"metadata"},[n("span",{staticClass:"date mr-2"},[n("fa",{staticClass:"mr-2",attrs:{icon:"calendar-alt"}}),t._v(t._s(e.date)+"\n            ")],1)])])])}),t._v(" "),n("nuxt-link",{staticClass:"more mt-3 w-100 d-block",attrs:{to:"/races/all"}},[t._v("\n        More Races\n      ")])],2),t._v(" "),t.isLoggedIn?n("div",{staticClass:"user mt-3 mt-md-auto mx-md-0 mx-auto"},[n("div",{staticClass:"profile row mb-1 pl-3"},[n("div",{staticClass:"col-3 pl-4"},[t.user.profilePicUrl?t._e():n("img",{staticClass:"profile-pic mr-3 d-inline-block",attrs:{src:"/images/default.png"}}),t._v(" "),t.user.profilePicUrl?n("img",{staticClass:"profile-pic mr-3 d-inline-block",attrs:{src:t.user.profilePicUrl.replace("http","https")}}):t._e()]),t._v(" "),n("div",{staticClass:"col-9"},[n("h3",{staticClass:"mb-2"},[t._v(" "+t._s(t.user.name)+" ")]),t._v(" "),n("h4",[t.user.athlete_id?n("span",[n("nuxt-link",{attrs:{to:"/athlete/"+t.user.athlete_id}},[t._v("\n                @"+t._s(t.user.athlete_id)+" \n              ")])],1):t._e(),t._v(" "),t.user.athlete_id?t._e():n("span",[n("nuxt-link",{attrs:{to:"/user/settings"}},[t._v("Claim an ID")])],1)])])]),t._v(" "),n("div",{staticClass:"links pl-4"},[n("nuxt-link",{attrs:{to:"/user/content"}},[t._v("Content")]),t._v(" "),n("nuxt-link",{attrs:{to:"/user/log/week"}},[t._v("Logs")]),t._v(" "),n("nuxt-link",{attrs:{to:"/user/settings"}},[n("fa",{attrs:{icon:"sliders-h"}})],1),t._v(" "),n("a",{staticClass:"logout",attrs:{href:"#"},on:{click:function(e){return t.logOut()}}},[t._v("Log Out")])],1)]):t._e(),t._v(" "),t.isLoggedIn?t._e():n("div",{staticClass:"actions links mt-auto"},[n("nuxt-link",{staticClass:"btn btn-default",attrs:{to:"/login"}},[t._v("Log In")]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/signup"}},[t._v("Sign Up")])],1),t._v(" "),n("div",{staticClass:"site-links links mt-2 pl-0 pb-4"},[n("nuxt-link",{attrs:{to:"/developers"}},[t._v("For Developers")]),t._v(" "),n("nuxt-link",{attrs:{to:"/press"}},[t._v("For the Press")]),t._v(" "),n("nuxt-link",{attrs:{to:"/privacy"}},[t._v("Privacy")])],1)])])},[],!1,null,"da7e226c",null);e.default=component.exports}}]);