exports.ids=[27],exports.modules={106:function(t,e,d){"use strict";d.r(e);var o=d(69),l=d.n(o);for(var c in o)"default"!==c&&function(t){d.d(e,t,function(){return o[t]})}(c);e.default=l.a},107:function(t,e,d){(t.exports=d(2)(!1)).push([t.i,"h1[data-v-56dca31a]{font-size:32px;font-weight:500}h1 .name[data-v-56dca31a]{font-weight:400;color:#468df5}h2[data-v-56dca31a]{font-size:21px}h2[data-v-56dca31a],h4[data-v-56dca31a]{text-transform:uppercase}h4[data-v-56dca31a]{font-size:14px;color:#b1b1b1;font-weight:400;width:100%}.schedule input[data-v-56dca31a],h4 input[data-v-56dca31a]{display:inline-block;border:none;color:#468df5;font-size:14px;width:auto;padding:0;line-height:1;height:auto}.week[data-v-56dca31a]{padding:0;overflow:hidden}.log-pager.today[data-v-56dca31a]{color:#468df5}.day[data-v-56dca31a]{overflow:hidden;text-align:center;padding:0;min-height:100%;border-right:2px solid #f3f3f3}.day .calendar[data-v-56dca31a]{font-size:16px}.day .calendar .dow[data-v-56dca31a],.day .calendar .dow a[data-v-56dca31a]{text-align:left;text-transform:uppercase;font-weight:500;color:#000}.day .calendar .dom[data-v-56dca31a],.day .calendar .dom a[data-v-56dca31a]{color:#777;text-align:right}.day .calendar .dom.today[data-v-56dca31a]{border-radius:100px;background:#e72970;color:#fff;padding:2px 5px;display:table;width:auto;height:auto;margin-top:-5px!important;margin-right:10px}.day .calendar .dom.today a[data-v-56dca31a]{color:#fff}.day .placeholder[data-v-56dca31a]{font-size:17px;text-transform:uppercase;color:#777;font-weight:500}.day .placeholder .fa-pencil-alt[data-v-56dca31a]{display:block;margin:0 auto;font-size:24px;color:#468df5}.day .unit[data-v-56dca31a]{color:#777;font-size:14px;font-weight:400;text-transform:uppercase}.day .mileage[data-v-56dca31a]{font-weight:500;font-size:26px;color:#468df5}@media (min-width:992px){.day .mileage[data-v-56dca31a]{font-size:23px}}.day .pace[data-v-56dca31a]{font-weight:400;font-size:19px;color:#468df5}@media (min-width:992px){.day .pace[data-v-56dca31a]{font-size:16px}}.day .checks[data-v-56dca31a]{text-align:left;font-size:15px}.day .checks label[data-v-56dca31a]{margin-bottom:0;font-weight:500}.day .stats[data-v-56dca31a]{font-size:18px;font-weight:500}@media (min-width:992px){.day .stats[data-v-56dca31a]{font-size:15px}}.day .stats .fa-heartbeat[data-v-56dca31a]{color:#e72970}.day .stats .fa-bed[data-v-56dca31a]{color:#f67e2c}.day .feel[data-v-56dca31a]{width:100%;height:7px;background:#777}.day .f1[data-v-56dca31a]{background:#e72970}.day .f2[data-v-56dca31a]{background:#f67e2c}.day .f3[data-v-56dca31a]{background:#1acbb0}.day .f4[data-v-56dca31a]{background:#468df5}.day .f5[data-v-56dca31a]{background:#802dc4}.schedule[data-v-56dca31a]{max-width:100%;font-size:17px}.schedule h4[data-v-56dca31a]{font-size:15px}.schedule .col .label[data-v-56dca31a]{text-transform:uppercase;color:#575757;font-weight:500;text-align:center}@media (min-width:992px){.schedule .col .label[data-v-56dca31a]{text-align:right}}.schedule .col .mileage[data-v-56dca31a]{color:#468df5;font-weight:500}.schedule .col input[data-v-56dca31a]{font-size:17px;text-align:center;width:100%}.schedule .goal[data-v-56dca31a]{background:#468df5;font-size:16px;color:#fff;border-radius:5px;padding:2px 7px;white-space:nowrap}.stats.row .box[data-v-56dca31a]{margin:10px;overflow:hidden}.stats.row .box .placeholder[data-v-56dca31a]{text-transform:uppercase;color:#777;font-weight:400;font-size:14px}.num[data-v-56dca31a]{color:#468df5}.data[data-v-56dca31a]{text-align:right;font-weight:500;font-size:21px;color:#777}",""])},152:function(t,e,d){"use strict";d.r(e);var o=d(55),l=d.n(o);Array.prototype.sum=function(t){for(var e=0,i=0,d=this.length;i<d;i++)e+=this[i][t];return e};let{timeStringToDecimal:c,timeDecimalToString:r,formatDateUrl:n,getDateFromUrl:v,getPace:f}=d(59),h=function(t){return Math.round(100*t)/100},m=function(data,t){return data.filter(a=>a[t]>0).map(a=>a[t])};var _={components:{Chart:()=>d.e(29).then(d.bind(null,164)),LogPagers:()=>d.e(3).then(d.bind(null,165)),Stat:()=>d.e(35).then(d.bind(null,166))},middleware:"auth",async asyncData({store:t,params:e,$axios:d}){l.a.locale("en-US");let o={...t.state.auth.user};o.name?o.firstName=o.name.split(" ")[0]:o.firstName="";let m=e.date,_=v(e.date),x=l()(_).startOf("isoWeek").format("M/D/YY"),data=await d.$get("/log/list/week/"+m),y=n(l()(_).subtract(7,"days")),w=await d.$get("/log/list/week/"+y);console.log(data);let N=await Array.apply(null,Array(7)).map(function(t,i){let d=l()(v(e.date)).startOf("week").weekday(i+1),o=d.format("ddd"),m=d.format("DD"),_=n(d);var x=!1;if(n(l()())==n(d)&&(x=!0),console.log(data[i].date),console.log(l()(data[i].date)),console.log(i,data.length),console.log(l()(data[i].date).format("ddd"),o),i<data.length&&l()(data[i].date).format("ddd")==o){let t=data[i];t.dow=o,t.dom=m,t.today=x,t.url=_;let e=function(t){for(var e=0,d=0,o=0,i=0,l=t.length;i<l;i++)e+=t[i].distance||0,d+=t[i].elevationGain||0,o+=c(t[i].time);return{totalMileage:h(e),totalElev:h(d),totalTime:r(h(o))}}(t.runs);return t.totalMileage=e.totalMileage,t.totalTime=e.totalTime,t.sleepDecimal=c(t.sleep),t.avgPace=f(t.totalTime,t.totalMileage),t}return{dow:o,dom:m,today:x,url:_}});return console.log(N),{days:N,lastWeek:w,weekOf:x,user:o,date:e.date||n(l()())}},computed:{totalMileage:function(){for(var t=0,i=0,e=this.days.length;i<e;i++)this.days[i].totalMileage&&(t+=this.days[i].totalMileage||0);return Math.round(100*t)/100},totalElev:function(){for(var t=0,i=0,e=this.days.length;i<e;i++)this.days[i].run&&(t+=this.days[i].run.elevationGain);return Math.round(100*t)/100},totalGoal:function(){for(var t=0,i=0,e=this.days.length;i<e;i++)t+=Number(this.days[i].mileageGoal)||0;return Math.round(100*t)/100},avgSleep:function(){for(var t=0,e=0,i=0;i<this.days.length;i++)this.days[i].sleep&&(t+=c(this.days[i].sleep),e++);return r(t/e)},sleepDifferential:function(){let t=c(this.avgSleep);for(var e=0,d=0,i=0;i<this.days.length;i++)this.days[i].sleep&&this.lastWeek[i]&&(e+=c(this.lastWeek[i].sleep),d++);let o=e/d||0;return Math.round((t-o)/o*1e3)/10||0},sleepData:function(){return m(this.days,"sleepDecimal")},mileageData:function(){return m(this.days,"totalMileage")}},methods:{changeDate:function(t){let e=l()(t,"M/D/YY");e.isValid()&&this.$router.push({params:{date:n(e)}})},updateSchedule:function(t,e){this.$axios.$post("log/"+e+"/goal",{goal:t}).then(t=>{console.log(t)})},getCheckPercentage:function(t){let e=0,d=0;for(var i=0;i<this.days.length;i++)this.days[i].runs&&this.days[i].checks&&(this.days[i].checks[t]&&d++,this.days[i].runs[0]&&this.days[i].runs[0].distance>0&&e++);return Math.round(d/e*100)||0}},watch:{$route:function(){this.date=this.$route.params.date||this.date}}},x=d(1);var component=Object(x.a)(_,function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"mx-auto w-md-100 mx-md-0 px-md-4 container"},[t._ssrNode('<div class="row" data-v-56dca31a><h1 class="mt-4 col" data-v-56dca31a>'+(t.user.name?'<span class="name" data-v-56dca31a>'+t._ssrEscape(t._s(t.user.firstName)+"'s")+"</span>":"\x3c!----\x3e")+'\n      Training Log\n    </h1> <div class="col d-flex align-items-center justify-content-end" data-v-56dca31a><div class="btn btn-primary" data-v-56dca31a>Monthly View</div></div></div> '),t._ssrNode('<div class="header row mb-2" data-v-56dca31a>',"</div>",[t._ssrNode('<div class="col d-flex align-items-center" data-v-56dca31a><h4 class="mt-4 mb-0" data-v-56dca31a>Week of \n        <input type="text"'+t._ssrAttr("value",t.weekOf)+' class="form-control" data-v-56dca31a></h4></div> '),t._ssrNode('<div class="col d-flex flex-row align-items-end" data-v-56dca31a>',"</div>",[t._ssrNode('<div class="btn btn-default log-pager ml-auto mr-2 today" data-v-56dca31a> Today </div> '),d("LogPagers",{attrs:{date:t.date,interval:"7"}})],2)],2),t._ssrNode(" "),t._ssrNode('<div class="week box row mt-3 mx-auto mb-3" data-v-56dca31a>',"</div>",t._l(t.days,function(e){return t._ssrNode('<div class="day col-lg d-flex flex-column" data-v-56dca31a>',"</div>",[t._ssrNode('<div class="calendar row p-2" data-v-56dca31a>',"</div>",[t._ssrNode('<div class="dow col" data-v-56dca31a>',"</div>",[d("nuxt-link",{attrs:{to:"/user/log/"+e.url}},[t._v(t._s(e.dow)+" ")])],1),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass("dom col",e.today?"today":"")+" data-v-56dca31a>","</div>",[d("nuxt-link",{attrs:{to:"/user/log/"+e.url}},[t._v(t._s(e.dom)+" ")])],1)],2),t._ssrNode(" "),t._ssrNode('<div class="row mb-4 mb-lg-auto" data-v-56dca31a>',"</div>",[t._ssrNode('<div class="mt-auto mb-auto col-6 col-lg-12" data-v-56dca31a>',"</div>",[e.totalMileage>0?t._ssrNode('<div class="mt-auto" data-v-56dca31a>',"</div>",[t._ssrNode('<div class="mileage" data-v-56dca31a>'+t._ssrEscape(" "+t._s(e.totalMileage||0)+" ")+'<span class="unit" data-v-56dca31a> mi </span></div> <div class="pace" data-v-56dca31a>'+t._ssrEscape(" "+t._s(e.avgPace||"0:00")+" ")+'<span class="unit" data-v-56dca31a> min / mi </span></div>')],2):e.rhr||e.sleep?t._ssrNode("<div data-v-56dca31a>","</div>",[d("nuxt-link",{staticClass:"placeholder",attrs:{to:"/user/log/"+e.url}},[d("div",{staticClass:"mb-2"},[t._v(" Edit "),d("fa",{attrs:{icon:"pencil-alt"}})],1)])],1):t._ssrNode('<div class="mt-3 mb-5" data-v-56dca31a>',"</div>",[d("nuxt-link",{staticClass:"placeholder",attrs:{to:"/user/log/"+e.url}},[d("div",{staticClass:"mb-2"},[t._v(" Edit ")]),t._v(" "),d("fa",{attrs:{icon:"pencil-alt"}})],1)],1)]),t._ssrNode(" "),t._ssrNode('<div class="col-6 col-lg-12" data-v-56dca31a>',"</div>",[e.rhr||e.sleep?t._ssrNode('<div class="mt-2" data-v-56dca31a>',"</div>",[t._ssrNode('<div class="stats mb-3" data-v-56dca31a>',"</div>",[t._ssrNode("<div data-v-56dca31a>","</div>",[d("fa",{staticClass:"mr-2",attrs:{icon:"heartbeat"}}),t._ssrNode(t._ssrEscape(" "+t._s(e.rhr||"N/A")+" ")+'<span class="unit ml-2" data-v-56dca31a> BPM </span>')],2),t._ssrNode(" "),t._ssrNode("<div data-v-56dca31a>","</div>",[d("fa",{staticClass:"mr-2",attrs:{icon:"bed"}}),t._ssrNode(t._ssrEscape(" "+t._s(e.sleep||"N/A")+" ")+'<span class="unit ml-2" data-v-56dca31a> hrs </span>')],2)],2)]):t._e(),t._ssrNode(" "),!e.rhr&&!e.sleep&&e.totalMileage>0?t._ssrNode('<div class="mx-auto mt-3" data-v-56dca31a>',"</div>",[d("nuxt-link",{attrs:{to:"/user/log/"+e.url}},[t._v(" Add more "),d("fa",{attrs:{icon:"pencil-alt"}})],1)],1):t._e()],2)],2),t._ssrNode(" <div"+t._ssrClass("feel mt-1","f"+(e.run?e.run.feel:""))+" data-v-56dca31a></div>")],2)}),0),t._ssrNode(' <div class="schedule row align-items-center mb-3" data-v-56dca31a><h4 class="col-12 col-lg mb-2 mb-lg-0" data-v-56dca31a> Scheduled </h4> '+t._ssrList(t.days,function(e){return'<div class="col row item" data-v-56dca31a><div class="col-12 col-lg-6 label px-0" data-v-56dca31a>'+t._ssrEscape(t._s(e.dow))+'</div> <div class="col-12 col-lg-6 mileage px-0" data-v-56dca31a><input placeholder="0"'+t._ssrAttr("value",e.mileageGoal)+' class="form-control" data-v-56dca31a></div></div>'})+' <div class="col-12 col-lg d-flex align-items-center mt-3 mt-lg-0" data-v-56dca31a><h4 class="d-inline-block mb-0" data-v-56dca31a> Goal </h4> <div class="d-inline-block goal ml-3" data-v-56dca31a>'+t._ssrEscape(" "+t._s(t.totalGoal||0)+" mi")+"</div></div></div> "),t._ssrNode('<div class="stats row align-items-start" data-v-56dca31a>',"</div>",[t._ssrNode('<div class="box col-lg p-0" data-v-56dca31a>',"</div>",[t._ssrNode('<div class="row mb-2 px-3 pt-3 pb-0" data-v-56dca31a>',"</div>",[t._ssrNode('<h2 class="col" data-v-56dca31a> Total </h2> <div class="data col mb-2" data-v-56dca31a><span class="num" data-v-56dca31a>'+t._ssrEscape(t._s(t.totalMileage))+"</span> mi</div> "),d("Stat",{attrs:{value:Math.round(100*(t.totalGoal-t.totalMileage))/100||0,unit:" mi"}},[t._v(" left this week ")]),t._ssrNode(" "),d("Stat",{attrs:{value:t.totalElev,unit:" ft"}},[t._v(" elev. gain this week ")]),t._ssrNode(" "+(0==t.totalMileage?'<div class="mx-auto mt-3 placeholder" data-v-56dca31a>\n          Add log entries to see stats\n        </div>':"\x3c!----\x3e"))],2),t._ssrNode(" "),t.totalMileage>0&&t.mileageData.length>1?d("no-ssr",[d("Chart",{attrs:{data:t.mileageData,name:"mileage",color:"blue"}})],1):t._e()],2),t._ssrNode(" "),t._ssrNode('<div class="sleep box col-lg p-0" data-v-56dca31a>',"</div>",[t._ssrNode("<div data-v-56dca31a>","</div>",[t._ssrNode('<div class="row pt-3 px-3 pb-0 mb-2" data-v-56dca31a>',"</div>",[t._ssrNode('<h2 class="col" data-v-56dca31a> Avg Sleep </h2> <div class="data col mb-2" data-v-56dca31a><span class="num" data-v-56dca31a>'+t._ssrEscape(t._s(t.avgSleep))+"</span> hrs</div> "),d("Stat",{attrs:{value:t.sleepDifferential,unit:"%",comp:!0}},[t._v(" than last week ")]),t._ssrNode(" "+("0:00"==t.avgSleep?'<div class="mx-auto mt-3 placeholder" data-v-56dca31a> \n            Add log entries to see stats\n          </div>':"\x3c!----\x3e"))],2),t._ssrNode(" "),"0:00"!=t.avgSleep&&t.sleepData.length>1?d("no-ssr",{staticClass:"mt-2"},[d("Chart",{attrs:{data:t.sleepData,name:"sleep",color:"orange"}})],1):t._e()],2)]),t._ssrNode(' <div class="box col-lg" data-v-56dca31a><div class="row mb-2" data-v-56dca31a><h2 class="col" data-v-56dca31a> Core </h2> <div class="data col" data-v-56dca31a><span class="num" data-v-56dca31a>'+t._ssrEscape(t._s(t.getCheckPercentage("core"))+"%")+'</span></div></div> <div class="row" data-v-56dca31a><h2 class="col" data-v-56dca31a> Stretching </h2> <div class="data col" data-v-56dca31a><span class="num" data-v-56dca31a>'+t._ssrEscape(t._s(t.getCheckPercentage("stretching"))+"%")+"</span></div></div></div>")],2)],2)},[],!1,function(t){var e=d(106);e.__inject__&&e.__inject__(t)},"56dca31a","45602a1a");e.default=component.exports},59:function(t,e,d){"use strict";d.r(e),d.d(e,"timeStringToDecimal",function(){return c}),d.d(e,"timeDecimalToString",function(){return r}),d.d(e,"formatDateUrl",function(){return n}),d.d(e,"getDateFromUrl",function(){return v}),d.d(e,"getPace",function(){return f});var o=d(55),l=d.n(o);function c(t){if(!t)return 0;let a=t.split(":");return(60*+a[0]+ +a[1])/60}function r(t){let e=Math.floor(t),s=Math.round(60*(t-e));if(s>=60){let t=Math.floor(s/60);e+=t,s-=60*t}return s=("0"+s).slice(-2),"NaN"==e||"aN"==s?"0:00":e+":"+s}function n(t){return t.format("MM-DD-YYYY")}function v(s){let t;return t=s&&l()(s,"MM-DD-YYYY").isValid()?l()(s,"MM-DD-YYYY").toDate():new Date}function f(time,t){if(!time||!t)return"0:00";let a=time.split(":");return r((60*+a[0]+ +a[1])/t/60)}},69:function(t,e,d){var content=d(107);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=d(3).default;t.exports.__inject__=function(t){o("0d4f5a3a",content,!0,t)}}};
//# sourceMappingURL=553a38ea3113d22c30f4.js.map