(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{447:function(t,e,r){"use strict";r(148),r(24);var n,c=r(3);e.a={data:function(){return{results:{},query:"",currentPage:1,lastPage:!1,searchInput:""}},methods:{search:(n=Object(c.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e||(this.currentPage=1),""==this.searchInput){t.next=16;break}return t.prev=2,t.next=5,this.$axios.get("search/results/"+this.searchInput+"/"+this.currentPage+"/20");case 5:r=t.sent,this.results=r.data.docs,this.lastPage=r.data.lastPage,t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0.response.data),this.results={};case 14:t.next=17;break;case 16:this.results={};case 17:case"end":return t.stop()}}),t,this,[[2,10]])}))),function(t){return n.apply(this,arguments)}),next:function(){this.currentPage++,this.search(!0)},prev:function(){this.currentPage--,this.search(!0)}}}},521:function(t,e,r){var content=r(726);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("6ea5908b",content,!0,{sourceMap:!1})},725:function(t,e,r){"use strict";var n=r(521);r.n(n).a},726:function(t,e,r){(e=r(11)(!1)).push([t.i,".claim[data-v-f23c2264]{padding:3px 5px;text-transform:uppercase;font-size:13px}td[data-v-f23c2264]{white-space:nowrap}",""]),t.exports=e},831:function(t,e,r){"use strict";r.r(e);r(20),r(34),r(21),r(36),r(35),r(29),r(30),r(7),r(24);var n=r(3),c=(r(148),r(28),r(431)),o=r.n(c),l=r(447);function h(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,c=!0,o=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){o=!0,n=t},f:function(){try{c||null==r.return||r.return()}finally{if(o)throw n}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d,v,m={created:function(){this.user.athlete_id&&this.$router.push("/welcome"),this.searchInput=this.user.name?this.user.name.toLowerCase():"",this.search()},data:function(){return{filtered:[]}},methods:{claim:(v=Object(n.a)(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$axios.$post("user/claim/athlete/"+e).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$store.dispatch("auth/fetchUser");case 2:r.$router.push("/welcome");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t.response.data)}));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return v.apply(this,arguments)})},computed:{user:function(){return this.$store.state.auth.user}},mixins:[l.a],components:{SearchBar:function(){return r.e(3).then(r.bind(null,826))},Pagers:function(){return r.e(11).then(r.bind(null,850))}},watch:{results:(d=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=o.a.uniq(e,(function(t){return[t.athlete_id,t.team,t.athlete].join()})),n=h(r),t.prev=2,n.s();case 4:if((c=n.n()).done){t.next=18;break}return l=c.value,t.prev=6,t.next=9,this.$axios.$get("/user/athlete/"+l.athlete_id);case 9:t.sent&&(l.taken=!0),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),console.log(t.t0.response.data);case 16:t.next=4;break;case 18:t.next=23;break;case 20:t.prev=20,t.t1=t.catch(2),n.e(t.t1);case 23:return t.prev=23,n.f(),t.finish(23);case 26:this.filtered=r;case 27:case"end":return t.stop()}}),t,this,[[2,20,23,26],[6,13]])}))),function(t){return d.apply(this,arguments)})}},_=(r(725),r(16)),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-4"},[r("SearchBar",{staticClass:"mb-2",on:{search:t.search},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),t._v(" "),0!==Object.keys(t.results).length?r("div",{staticClass:"results-container mb-3"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-striped mb-0"},[t._m(0),t._v(" "),r("tbody",t._l(t.filtered,(function(e){return r("tr",[r("td",[e.taken?r("button",{staticClass:"claim btn btn-secondary",attrs:{disabled:""}},[t._v("\n              Taken\n            ")]):r("div",{staticClass:"claim btn btn-primary",on:{click:function(r){return t.claim(e.athlete_id)}}},[t._v("\n              Claim\n            ")])]),t._v(" "),r("td",[e.athlete_id?r("a",{attrs:{href:"/athlete/"+e.athlete_id,target:"_blank"}},[t._v("\n              "+t._s(e.athlete_id)+"\n               "),r("fa",{attrs:{icon:"external-link-alt"}})],1):t._e()]),t._v(" "),r("td",[t._v("\n            "+t._s(e.athlete)+"\n          ")]),t._v(" "),r("td",[e.team_id?r("a",{attrs:{href:"/team/"+e.team_id,target:"_blank"}},[t._v("\n              "+t._s(e.team)+"\n               "),r("fa",{attrs:{icon:"external-link-alt"}})],1):t._e(),t._v(" "),e.team_id?t._e():r("span",[t._v(t._s(e.team))])])])})),0)])])]):t._e(),t._v(" "),0===Object.keys(t.results).length||t.lastPage?t._e():r("Pagers",{attrs:{currentPage:t.currentPage,lastPage:t.lastPage},on:{prev:t.prev,next:t.next}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th"),this._v(" "),e("th",[this._v("Athlete ID")]),this._v(" "),e("th",[this._v("Athlete Name")]),this._v(" "),e("th",[this._v("Team")])])])}],!1,null,"f23c2264",null);e.default=component.exports}}]);