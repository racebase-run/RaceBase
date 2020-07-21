(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{505:function(t,e,r){var content=r(698);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("a3bd832e",content,!0,{sourceMap:!1})},697:function(t,e,r){"use strict";var n=r(505);r.n(n).a},698:function(t,e,r){(e=r(11)(!1)).push([t.i,"h4[data-v-23a7fbaa],h5[data-v-23a7fbaa]{font-weight:600;text-transform:uppercase}.race-title[data-v-23a7fbaa]{font-weight:600;font-size:23px}.header-link[data-v-23a7fbaa]{text-transform:uppercase;font-size:12px;font-weight:500}",""]),t.exports=e},818:function(t,e,r){"use strict";r.r(e);r(20),r(7),r(44),r(24);var n,c=r(3),o=(r(431),{head:function(){return{title:this.teamId+" - RaceBase",meta:[{hid:"OpenGraph Title",property:"og:title",content:this.teamId+" - Team Results"},{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.run/images/opengraph/team.png"},{hid:"Description",name:"description",content:"View "+this.teamId+"'s results on RaceBase, the Internet's first community sourced results database"},{hid:"OpenGraph Description",property:"og:description",content:"View "+this.teamId+"'s race results on RaceBase, the Internet's first community sourced results database"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,d,l,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,c=t.redirect,o=n.id,e.next=4,r.$get("team/"+o+"/years");case 4:return d=e.sent,l=n.year||d[0],e.next=8,r.$get("team/"+o+"/year/"+l+"/races");case 8:return m=e.sent,Object.keys(m).length<=0&&c("/notfound"),h=[],e.abrupt("return",{years:d,curYear:l,athletes:h,teamId:o,races:m,race_ids:Object.keys(m)});case 12:case"end":return e.stop()}}),e)})))()},methods:{updateResults:(n=Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$axios.$get("team/"+teamId+"/year/"+curYear+"/races");case 2:(e=t.sent)&&(this.races=e,this.race_ids=Object.keys(e));case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},watch:{$route:function(){this.curYear=this.$route.params.year||this.years[0],this.updateResults()}}}),d=(r(697),r(16)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto w-90 w-md-100 mx-md-0 pl-md-4 mt-4"},[r("h5",{staticClass:"mb-3"},[r("small",[t._v(t._s(t.curYear)+" Team Results "),r("fa",{attrs:{icon:["fas","users"]}})],1)]),t._v(" "),r("div",{staticClass:"d-flex align-items-center mb-2"},[r("h4",{staticClass:"mr-4 mb-0 pb-0"},[t._v(" @"+t._s(t.teamId)+" ")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-default header-link mr-2",attrs:{to:"/team/"+t.teamId+"/schedule"}},[r("fa",{attrs:{icon:"calendar-alt"}}),t._v(" Meet Schedule\n    ")],1),t._v(" "),r("nuxt-link",{staticClass:"btn btn-default header-link mr-2",attrs:{to:"/team/"+t.teamId+"/"+t.curYear+"/athletes"}},[t._v(" \n      Athletes\n    ")]),t._v(" "),r("button",{staticClass:"btn btn-default dropdown-toggle header-link",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n      Year\n    ")]),t._v(" "),r("ul",{staticClass:"dropdown-menu dropdown-menu-right"},t._l(t.years,(function(e){return r("li",[r("nuxt-link",{staticClass:"dropdown-item",attrs:{to:{params:{year:e}}}},[t._v("\n          "+t._s(e)+"\n        ")])],1)})),0)],1),t._v(" "),t._l(t.race_ids,(function(e){return r("div",{staticClass:"results-container mb-4 mt-3"},[r("div",{staticClass:"race-title"},[r("a",{attrs:{href:"/races/"+e}},[t._v("\n        "+t._s(t.races[e].name)+"\n      ")])]),t._v(" "),Object.keys(t.races[e].events.length>0)?r("div",t._l(Object.keys(t.races[e].events),(function(n){return r("div",[r("nuxt-link",{attrs:{to:"/races/"+e+"/"+n+"/team/"+t.teamId}},[t._v(" \n          "+t._s(t.races[e].events[n].name)+"\n        ")])],1)})),0):t._e()])}))],2)}),[],!1,null,"23a7fbaa",null);e.default=component.exports}}]);