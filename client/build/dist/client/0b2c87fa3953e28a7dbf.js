(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{616:function(t,e,r){var content=r(775);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("0b42f119",content,!0,{sourceMap:!1})},774:function(t,e,r){"use strict";var n=r(616);r.n(n).a},775:function(t,e,r){(t.exports=r(9)(!1)).push([t.i,"body[data-v-17a483fe]{font-family:Avenir Next!important}a[data-v-17a483fe]{color:#3976d0}b[data-v-17a483fe]{font-weight:500}p[data-v-17a483fe]{font-size:14px;line-height:24px}.more[data-v-17a483fe]{font-style:italic}.user[data-v-17a483fe]{margin:0 auto}.user .name[data-v-17a483fe],.user .username[data-v-17a483fe]{width:100%;display:block;text-align:left}.user .username[data-v-17a483fe]{font-size:14px}.user .links a[data-v-17a483fe]{margin:6px;font-size:14px}.profile-pic[data-v-17a483fe]{display:block;border-radius:10px;width:45px;height:45px;margin:0 auto;border:1px solid #dadada}.header[data-v-17a483fe]{margin:30px auto 0;text-align:center}.header h1[data-v-17a483fe],.header h2[data-v-17a483fe]{font-weight:400}.header h1[data-v-17a483fe]{height:100px;line-height:100px;margin-bottom:-5px;font-size:45px}.header h1[data-v-17a483fe],.header h2[data-v-17a483fe]{text-align:center;width:100%}.header h2[data-v-17a483fe]{font-size:17px;margin-bottom:20px}.header .buttons[data-v-17a483fe]{display:block;margin:0 auto}.header .buttons .btn[data-v-17a483fe]{margin:5px}h3[data-v-17a483fe]{font-size:19px;text-align:left}h3[data-v-17a483fe],h4[data-v-17a483fe]{text-transform:uppercase}h4[data-v-17a483fe]{font-size:14px;margin-bottom:12px}.logo[data-v-17a483fe]{margin-top:-15px;margin-right:5px;height:50px}.search-container[data-v-17a483fe]{width:100%}.search-container .search-form[data-v-17a483fe]{margin:0 auto;width:auto;display:table}.search-container .search-form .input-group[data-v-17a483fe]{margin:0 auto;width:320px}.user .welcome[data-v-17a483fe]{font-size:20px;font-weight:500}.about p[data-v-17a483fe]{font-size:14px}@media (min-width:992px){.about p[data-v-17a483fe]{font-size:16px}}.support .insta[data-v-17a483fe]{font-size:17px}.race .col-2[data-v-17a483fe]{text-align:center;font-size:15px}.race h5[data-v-17a483fe]{font-size:16px;font-weight:400}@media (min-width:992px){.race h5[data-v-17a483fe]{font-size:18px}}.race .metadata[data-v-17a483fe]{text-transform:uppercase;font-size:13px}@media (min-width:768px){.user[data-v-17a483fe]{position:absolute;top:0;right:0}}",""])},858:function(t,e,r){"use strict";r.r(e);r(20);var n=r(2),o=(r(78),{layout:"home",components:{NewsItem:function(){return r.e(12).then(r.bind(null,865))},UserWidget:function(){return r.e(15).then(r.bind(null,880))}},head:function(){return{meta:[{hid:"OpenGraph Title",property:"og:title",content:"RaceBase - Community Sourced Running Results"},{hid:"OpenGraph Description",property:"og:description",content:""},{hid:"OpenGraph URL",property:"og:url",content:"https://racebase.io"},{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.io/images/opengraph/home.png"}]}},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,t.next=3,r.$get("race/list/1/3");case 3:return n=t.sent,t.abrupt("return",{races:n.docs,searchInput:""});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),methods:{search:function(t){this.$router.push({path:"/search/"+encodeURI(this.searchInput)})},logOut:function(){this.$store.dispatch("auth/logout")}},computed:{posts:function(){return this.$store.state.posts.posts.slice(0,3)},user:function(){return this.$store.state.auth.user},isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}}}),c=(r(774),r(14)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"header row"},[t._m(0),t._v(" "),r("h2",[t._v(" Community sourced running results ")]),t._v(" "),r("div",{staticClass:"search-container"},[r("form",{staticClass:"search-form mb-3",on:{submit:function(e){return e.preventDefault(),t.search()}}},[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-append"},[r("span",{staticClass:"input-group-text",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.search()}}},[r("fa",{attrs:{icon:"search"}})],1)])])])]),t._v(" "),t.isLoggedIn?t._e():r("div",{staticClass:"buttons"},[r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"signup"}},[t._v(" Sign Up ")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-default",attrs:{to:"login"}},[t._v(" Log In ")])],1),t._v(" "),t.isLoggedIn?r("div",{staticClass:"user p-3"},[r("UserWidget",{attrs:{user:t.user},on:{logOut:t.logOut}})],1):t._e()]),t._v(" "),r("div",{staticClass:"row mt-5 mx-auto"},[r("div",{staticClass:"col-md-8 col-12 px-0 pr-md-4 pb-4"},[r("h3",{staticClass:"mb-3"},[t._v("News")]),t._v(" "),t._l(t.posts,function(t,e){return r("div",[r("news-item",{attrs:{story:t,link:t.link}})],1)}),t._v(" "),r("nuxt-link",{staticClass:"more more-stories",attrs:{to:"/news"}},[t._v(" More Stories ")])],2),t._v(" "),r("div",{staticClass:"col-md-4 col-12"},[r("div",{staticClass:"races mb-4"},[r("h4",[t._v("Recent Races")]),t._v(" "),t._l(t.races,function(e){return r("div",{staticClass:"race row mb-2"},[r("div",{staticClass:"col-2 pr-0"},[r("div",{staticClass:"mb-1"},[t._v(" "+t._s(e.upvotes)+" ")]),t._v(" "),r("div",[r("fa",{attrs:{icon:["far","thumbs-up"]}})],1)]),t._v(" "),r("div",{staticClass:"col-10 pr-0"},[r("h5",{staticClass:"mb-1"},[r("nuxt-link",{attrs:{to:"/races/"+e._id}},[t._v(" \n                "+t._s(e.name)+" \n              ")])],1),t._v(" "),r("div",{staticClass:"metadata"},[r("span",{staticClass:"date mr-2"},[t._v(" "+t._s(e.date)+" ")]),t._v(" "),r("span",[r("fa",{attrs:{icon:"user-circle"}}),t._v(" "+t._s(e.user)+" ")],1)])])])}),t._v(" "),r("nuxt-link",{staticClass:"more ml-2",attrs:{to:"/races/all"}},[t._v("More Races")])],2),t._v(" "),r("div",{staticClass:"about mb-4"},[r("h4",[t._v("About Us")]),t._v(" "),t._m(1),t._v(" "),r("p",{staticClass:"mb-2"},[t._v("\n          We believe that people are more important than any race, or time, or championship.\n        ")]),t._v(" "),r("nuxt-link",{staticClass:"more",attrs:{to:"about"}},[t._v("Learn more")])],1),t._v(" "),r("div",{staticClass:"support mb-5"},[r("h4",[t._v("Support RaceBase")]),t._v(" "),r("div",{staticClass:"links mb-3"},[r("a",{staticClass:"btn btn-primary mr-3",attrs:{href:"https://donorbox.org/racebase",target:"_blank"}},[t._v("\n            Donate\n          ")]),t._v(" "),r("a",{staticClass:"insta",attrs:{target:"_blank",href:"https://www.instagram.com/racebase.io/"}},[r("fa",{attrs:{icon:["fab","instagram"]}}),t._v("\n            racebase.io\n          ")],1)]),t._v(" "),r("p",{staticClass:"mb-2"},[t._v(" Want to help us make RaceBase better? ")]),t._v(" "),r("nuxt-link",{attrs:{to:"contribute"}},[t._v(" Learn about ways you can help ")])],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("img",{staticClass:"logo",attrs:{src:"/images/logo.svg"}}),this._v(" RaceBase ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-2"},[e("b",[this._v("We believe in the power of community.")])])}],!1,null,"17a483fe",null);e.default=component.exports}}]);