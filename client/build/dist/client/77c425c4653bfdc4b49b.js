(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{447:function(t,e,r){"use strict";r(148),r(24);var n,c=r(3);e.a={data:function(){return{results:{},query:"",currentPage:1,lastPage:!1,searchInput:""}},methods:{search:(n=Object(c.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e||(this.currentPage=1),""==this.searchInput){t.next=16;break}return t.prev=2,t.next=5,this.$axios.get("search/results/"+this.searchInput+"/"+this.currentPage+"/20");case 5:r=t.sent,this.results=r.data.docs,this.lastPage=r.data.lastPage,t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0.response.data),this.results={};case 14:t.next=17;break;case 16:this.results={};case 17:case"end":return t.stop()}}),t,this,[[2,10]])}))),function(t){return n.apply(this,arguments)}),next:function(){this.currentPage++,this.search(!0)},prev:function(){this.currentPage--,this.search(!0)}}}},524:function(t,e,r){var content=r(732);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("030c1aa8",content,!0,{sourceMap:!1})},731:function(t,e,r){"use strict";var n=r(524);r.n(n).a},732:function(t,e,r){(e=r(11)(!1)).push([t.i,".claim[data-v-69b946e2]{padding:3px 5px;text-transform:uppercase;font-size:13px}td[data-v-69b946e2]{white-space:nowrap}",""]),t.exports=e},835:function(t,e,r){"use strict";r.r(e);r(20),r(34),r(21),r(36),r(35),r(28),r(29),r(30),r(7),r(24);var n=r(3),c=r(432),o=r.n(c),l=r(447);function h(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,c=!0,o=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){o=!0,n=t},f:function(){try{c||null==r.return||r.return()}finally{if(o)throw n}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d,m,v={created:function(){this.user.team_id&&this.$router.push("/welcome")},data:function(){return{filtered:[]}},methods:{claim:(m=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$post("/team/claim/"+e);case 3:t.sent,this.$router.push("/welcome"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.response.data);case 10:case"end":return t.stop()}}),t,this,[[0,7]])}))),function(t){return m.apply(this,arguments)})},computed:{user:function(){return this.$store.state.auth.user}},mixins:[l.a],components:{SearchBar:function(){return r.e(3).then(r.bind(null,826))},Pagers:function(){return r.e(11).then(r.bind(null,850))}},watch:{results:(d=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,c,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=o.a.uniq(e,(function(t){return[t.team].join()})),n=h(r),t.prev=2,n.s();case 4:if((c=n.n()).done){t.next=19;break}return l=c.value,t.prev=6,t.next=9,this.$axios.$get("/team/public/"+l.team_id);case 9:f=t.sent,console.log(f),f.coach&&(l.taken=!0),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),console.log(t.t0.response.data);case 17:t.next=4;break;case 19:t.next=24;break;case 21:t.prev=21,t.t1=t.catch(2),n.e(t.t1);case 24:return t.prev=24,n.f(),t.finish(24);case 27:this.filtered=r;case 28:case"end":return t.stop()}}),t,this,[[2,21,24,27],[6,14]])}))),function(t){return d.apply(this,arguments)})}},x=(r(731),r(16)),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-5"},[r("SearchBar",{staticClass:"mb-3",on:{search:t.search},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),t._v(" "),0!==Object.keys(t.results).length?r("div",{staticClass:"results-container mb-3"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-striped mb-0"},[t._m(0),t._v(" "),r("tbody",t._l(t.filtered,(function(e){return r("tr",[r("td",[e.taken?r("button",{staticClass:"claim btn btn-secondary",attrs:{disabled:""}},[t._v("\n              Taken\n            ")]):r("div",{staticClass:"claim btn btn-primary",on:{click:function(r){return t.claim(e.team_id)}}},[t._v("\n              Claim\n            ")])]),t._v(" "),r("td",[e.team_id?r("a",{attrs:{href:"/athlete/"+e.team_id,target:"_blank"}},[t._v("\n              "+t._s(e.team_id)+"\n               "),r("fa",{attrs:{icon:"external-link-alt"}})],1):t._e()]),t._v(" "),r("td",[t._v("\n            "+t._s(e.team)+"\n          ")])])})),0)])])]):t._e(),t._v(" "),0===Object.keys(t.results).length||t.lastPage?t._e():r("Pagers",{attrs:{currentPage:t.currentPage,lastPage:t.lastPage},on:{prev:t.prev,next:t.next}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th"),this._v(" "),e("th",[this._v("Team ID")]),this._v(" "),e("th",[this._v("Team Name")])])])}],!1,null,"69b946e2",null);e.default=component.exports}}]);