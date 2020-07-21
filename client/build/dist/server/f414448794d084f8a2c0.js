exports.ids=[62],exports.modules={110:function(t,e,r){var content=r(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("a3bd832e",content,!0,t)}},221:function(t,e,r){"use strict";r.r(e);var n=r(110),d=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=d.a},222:function(t,e,r){(e=r(2)(!1)).push([t.i,"h4[data-v-23a7fbaa],h5[data-v-23a7fbaa]{font-weight:600;text-transform:uppercase}.race-title[data-v-23a7fbaa]{font-weight:600;font-size:23px}.header-link[data-v-23a7fbaa]{text-transform:uppercase;font-size:12px;font-weight:500}",""]),t.exports=e},339:function(t,e,r){"use strict";r.r(e);r(61);var n={head(){return{title:this.teamId+" - RaceBase",meta:[{hid:"OpenGraph Title",property:"og:title",content:this.teamId+" - Team Results"},{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.run/images/opengraph/team.png"},{hid:"Description",name:"description",content:"View "+this.teamId+"'s results on RaceBase, the Internet's first community sourced results database"},{hid:"OpenGraph Description",property:"og:description",content:"View "+this.teamId+"'s race results on RaceBase, the Internet's first community sourced results database"}]}},async asyncData({$axios:t,params:e,redirect:r}){let n=e.id,d=await t.$get("team/"+n+"/years"),o=e.year||d[0],c=await t.$get("team/"+n+"/year/"+o+"/races");Object.keys(c).length<=0&&r("/notfound");return{years:d,curYear:o,athletes:[],teamId:n,races:c,race_ids:Object.keys(c)}},methods:{updateResults:async function(){let t=await $axios.$get("team/"+teamId+"/year/"+curYear+"/races");t&&(this.races=t,this.race_ids=Object.keys(t))}},watch:{$route:function(){this.curYear=this.$route.params.year||this.years[0],this.updateResults()}}},d=r(1);var component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto w-90 w-md-100 mx-md-0 pl-md-4 mt-4"},[t._ssrNode('<h5 class="mb-3" data-v-23a7fbaa>',"</h5>",[t._ssrNode("<small data-v-23a7fbaa>","</small>",[t._ssrNode(t._ssrEscape(t._s(t.curYear)+" Team Results ")),r("fa",{attrs:{icon:["fas","users"]}})],2)]),t._ssrNode(" "),t._ssrNode('<div class="d-flex align-items-center mb-2" data-v-23a7fbaa>',"</div>",[t._ssrNode('<h4 class="mr-4 mb-0 pb-0" data-v-23a7fbaa>'+t._ssrEscape(" @"+t._s(t.teamId)+" ")+"</h4> "),r("nuxt-link",{staticClass:"btn btn-default header-link mr-2",attrs:{to:"/team/"+t.teamId+"/schedule"}},[r("fa",{attrs:{icon:"calendar-alt"}}),t._v(" Meet Schedule\n    ")],1),t._ssrNode(" "),r("nuxt-link",{staticClass:"btn btn-default header-link mr-2",attrs:{to:"/team/"+t.teamId+"/"+t.curYear+"/athletes"}},[t._v(" \n      Athletes\n    ")]),t._ssrNode(' <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-default dropdown-toggle header-link" data-v-23a7fbaa>\n      Year\n    </button> '),t._ssrNode('<ul class="dropdown-menu dropdown-menu-right" data-v-23a7fbaa>',"</ul>",t._l(t.years,(function(e){return t._ssrNode("<li data-v-23a7fbaa>","</li>",[r("nuxt-link",{staticClass:"dropdown-item",attrs:{to:{params:{year:e}}}},[t._v("\n          "+t._s(e)+"\n        ")])],1)})),0)],2),t._ssrNode(" "),t._l(t.race_ids,(function(e){return t._ssrNode('<div class="results-container mb-4 mt-3" data-v-23a7fbaa>',"</div>",[t._ssrNode('<div class="race-title" data-v-23a7fbaa><a'+t._ssrAttr("href","/races/"+e)+" data-v-23a7fbaa>"+t._ssrEscape("\n        "+t._s(t.races[e].name)+"\n      ")+"</a></div> "),Object.keys(t.races[e].events.length>0)?t._ssrNode("<div data-v-23a7fbaa>","</div>",t._l(Object.keys(t.races[e].events),(function(n){return t._ssrNode("<div data-v-23a7fbaa>","</div>",[r("nuxt-link",{attrs:{to:"/races/"+e+"/"+n+"/team/"+t.teamId}},[t._v(" \n          "+t._s(t.races[e].events[n].name)+"\n        ")])],1)})),0):t._e()],2)}))],2)}),[],!1,(function(t){var e=r(221);e.__inject__&&e.__inject__(t)}),"23a7fbaa","7c20169a");e.default=component.exports}};