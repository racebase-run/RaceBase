(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{437:function(t,e,n){"use strict";n(128),n(20);var r=n(2);e.a={data:function(){return{results:{},query:"",currentPage:1,lastPage:!1,searchInput:""}},methods:{search:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e||(this.currentPage=1),""==this.searchInput){t.next=9;break}return t.next=4,this.$axios.get("search/results/"+this.searchInput+"/"+this.currentPage+"/10");case 4:n=t.sent,this.results=n.data.docs,this.lastPage=n.data.lastPage,t.next=10;break;case 9:this.results={};case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),next:function(){this.currentPage++,this.search(!0)},prev:function(){this.currentPage--,this.search(!0)}}}},624:function(t,e,n){var content=n(784);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("9f51e742",content,!0,{sourceMap:!1})},783:function(t,e,n){"use strict";var r=n(624);n.n(r).a},784:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,".claim[data-v-63570fe9]{padding:3px 5px;text-transform:uppercase;font-size:13px}td[data-v-63570fe9]{white-space:nowrap}",""])},856:function(t,e,n){"use strict";n.r(e);n(20);var r=n(2),c=n(423),o=n.n(c),l=n(437),h={created:function(){this.user.team_id&&this.$router.push("/welcome")},data:function(){return{filtered:[]}},methods:{claim:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("/team/claim/"+e);case 2:t.sent,"Successfully claimed team"&&this.$router.push("/welcome");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},computed:{user:function(){return this.$store.state.auth.user}},mixins:[l.a],components:{SearchBar:function(){return n.e(3).then(n.bind(null,850))},Pagers:function(){return n.e(8).then(n.bind(null,870))}},watch:{results:function(t){var e=o.a.uniq(t,function(t){return[t.team].join()});this.filtered=e}}},f=(n(783),n(19)),component=Object(f.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-5"},[n("SearchBar",{on:{search:t.search},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),t._v(" "),0!==Object.keys(t.results).length?n("div",{staticClass:"results-container mb-3"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-striped mb-0"},[t._m(0),t._v(" "),n("tbody",t._l(t.filtered,function(e){return n("tr",[n("td",[n("div",{staticClass:"claim btn btn-primary",on:{click:function(n){return t.claim(e.team_id)}}},[t._v("\n              Claim\n            ")])]),t._v(" "),n("td",[e.team_id?n("a",{attrs:{href:"/athlete/"+e.team_id,target:"_blank"}},[t._v("\n              "+t._s(e.team_id)+"\n               "),n("fa",{attrs:{icon:"external-link-alt"}})],1):t._e()]),t._v(" "),n("td",[t._v("\n            "+t._s(e.team)+"\n          ")])])}),0)])])]):t._e(),t._v(" "),0===Object.keys(t.results).length||t.lastPage?t._e():n("Pagers",{attrs:{currentPage:t.currentPage,lastPage:t.lastPage},on:{prev:t.prev,next:t.next}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th"),this._v(" "),e("th",[this._v("Team ID")]),this._v(" "),e("th",[this._v("Team Name")])])])}],!1,null,"63570fe9",null);e.default=component.exports}}]);