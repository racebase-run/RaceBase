exports.ids=[48],exports.modules={112:function(t,e,d){var content=d(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=d(3).default;t.exports.__inject__=function(t){r("f1eb5bfa",content,!0,t)}},225:function(t,e,d){"use strict";d.r(e);var r=d(112),n=d.n(r);for(var o in r)"default"!==o&&function(t){d.d(e,t,(function(){return r[t]}))}(o);e.default=n.a},226:function(t,e,d){(e=d(2)(!1)).push([t.i,"h4[data-v-558dafe2]{font-size:16px;text-transform:uppercase}",""]),t.exports=e},341:function(t,e,d){"use strict";d.r(e);var r={components:{RaceHeader:()=>d.e(5).then(d.bind(null,369))},async asyncData({$axios:t,params:e}){let d=await t.$get("race/"+e.id),r=await t.$get("event/"+e.event);return{teamResults:await t.$get("result/teamlist/"+e.id+"/event/"+e.event).catch(()=>{redirect("/races/notfound")}),race:d,event:r}}},n=d(1);var component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"mx-auto w-90 w-md-100 mx-md-0 pl-md-5"},[d("RaceHeader",{staticClass:"mb-3",attrs:{race:t.race}}),t._ssrNode(' <h4 class="mb-3" data-v-558dafe2>'+t._ssrEscape(" "+t._s(t.event.name)+" : Team Scores ")+"</h4> "),t._ssrNode('<div class="table-responsive mb-3" data-v-558dafe2>',"</div>",[t._ssrNode('<table class="table table-striped mb-2" data-v-558dafe2>',"</table>",[t._ssrNode("<thead data-v-558dafe2><tr data-v-558dafe2><th data-v-558dafe2> Team </th> <th data-v-558dafe2> Athletes </th> <th data-v-558dafe2> Score </th></tr></thead> "),t._ssrNode("<tbody data-v-558dafe2>","</tbody>",t._l(t.teamResults,(function(e){return t._ssrNode("<tr data-v-558dafe2>","</tr>",[t._ssrNode('<td class="team" data-v-558dafe2>',"</td>",[d("router-link",{attrs:{to:"/team/"+e.team_id}},[t._v("\n                "+t._s(e.team)+" \n              ")])],1),t._ssrNode(" "),t._ssrNode("<td data-v-558dafe2>","</td>",t._l(e.athletes,(function(e){return t._ssrNode("<div data-v-558dafe2>","</div>",[d("router-link",{attrs:{to:"/athlete/"+e.athlete_id}},[t._v("\n                  "+t._s(e.athlete)+"\n                ")]),t._ssrNode(t._ssrEscape(": "+t._s(e.place)+"\n              "))],2)})),0),t._ssrNode(" <td data-v-558dafe2>"+t._ssrEscape(" "+t._s(e.score)+" ")+"</td>")],2)})),0)],2)])],2)}),[],!1,(function(t){var e=d(225);e.__inject__&&e.__inject__(t)}),"558dafe2","4728beaf");e.default=component.exports}};