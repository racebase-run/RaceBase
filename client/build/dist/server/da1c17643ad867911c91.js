exports.ids=[62],exports.modules={111:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("36de6ac8",content,!0,t)}},223:function(t,e,n){"use strict";n.r(e);var r=n(111),d=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=d.a},224:function(t,e,n){(e=n(2)(!1)).push([t.i,"h2[data-v-5c1d9d57]{font-size:20px;text-transform:uppercase;font-weight:600}",""]),t.exports=e},340:function(t,e,n){"use strict";n.r(e);var r={asyncData:async({$axios:t,params:e})=>({athletes:await t.$get("team/"+e.id+"/athletes/year/"+e.year),year:e.year,teamId:e.id})},d=n(1);var component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto w-95 w-md-100 mx-md-0 pl-md-4 pb-4 mt-4"},[t._ssrNode("<h2 data-v-5c1d9d57>","</h2>",[t._ssrNode(t._ssrEscape("\n        "+t._s(t.year)+" \n        ")),n("nuxt-link",{attrs:{to:"/team/"+t.teamId+"/"+t.year}},[t._v(" \n            @"+t._s(t.teamId)+" \n        ")]),t._ssrNode("\n        Athletes "),n("fa",{attrs:{icon:["fas","users"]}})],2),t._ssrNode(" "),t._l(t.athletes,(function(e){return t._ssrNode("<div data-v-5c1d9d57>","</div>",[n("nuxt-link",{attrs:{to:"/athlete/"+e.athlete_id}},[t._v(" \n            "+t._s(e.name)+"\n        ")])],1)}))],2)}),[],!1,(function(t){var e=n(223);e.__inject__&&e.__inject__(t)}),"5c1d9d57","5d0214fc");e.default=component.exports}};