(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{416:function(t,e,n){"use strict";var r=n(4),l=n(24),o=n(27),d=n(129),c=n(57),f=n(15),v=n(58).f,h=n(84).f,m=n(16).f,j=n(417).trim,y=r.Number,x=y,_=y.prototype,k="Number"==o(n(83)(_)),w="trim"in String.prototype,C=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var n,r,l,o=(e=w?e.trim():j(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+e}for(var code,d=e.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>l)return NaN;return parseInt(d,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(k?f(function(){_.valueOf.call(n)}):"Number"!=o(n))?d(new x(C(e)),n,y):C(e)};for(var z,M=n(11)?v(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;M.length>D;D++)l(x,z=M[D])&&!l(y,z)&&m(y,z,h(x,z));y.prototype=_,_.constructor=y,n(18)(r,"Number",y)}},417:function(t,e,n){var r=n(6),l=n(26),o=n(15),d=n(418),c="["+d+"]",f=RegExp("^"+c+c+"*"),v=RegExp(c+c+"*$"),h=function(t,e,n){var l={},c=o(function(){return!!d[t]()||"​"!="​"[t]()}),f=l[t]=c?e(m):d[t];n&&(l[n]=f),r(r.P+r.F*c,"String",l)},m=h.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},418:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},419:function(t,e,n){"use strict";n.r(e),n.d(e,"timeStringToDecimal",function(){return o}),n.d(e,"timeDecimalToString",function(){return d}),n.d(e,"formatDateUrl",function(){return c}),n.d(e,"getDateFromUrl",function(){return f}),n.d(e,"getPace",function(){return v});n(82);var r=n(288),l=n.n(r);function o(t){if(!t)return 0;var a=t.split(":");return(60*+a[0]+ +a[1])/60}function d(t){var e=Math.floor(t),s=Math.round(60*(t-e));if(s>=60){var n=Math.floor(s/60);e+=n,s-=60*n}return s=("0"+s).slice(-2),"NaN"==e||"aN"==s?"0:00":e+":"+s}function c(t){return t.format("MM-DD-YYYY")}function f(s){return s&&l()(s,"MM-DD-YYYY").isValid()?l()(s,"MM-DD-YYYY").toDate():new Date}function v(time,t){if(!time||!t)return"0:00";var a=(time||"0:00").split(":");return d((60*+a[0]+ +a[1])/t/60)}},420:function(t,e,n){var map={"./af":289,"./af.js":289,"./ar":290,"./ar-dz":291,"./ar-dz.js":291,"./ar-kw":292,"./ar-kw.js":292,"./ar-ly":293,"./ar-ly.js":293,"./ar-ma":294,"./ar-ma.js":294,"./ar-sa":295,"./ar-sa.js":295,"./ar-tn":296,"./ar-tn.js":296,"./ar.js":290,"./az":297,"./az.js":297,"./be":298,"./be.js":298,"./bg":299,"./bg.js":299,"./bm":300,"./bm.js":300,"./bn":301,"./bn.js":301,"./bo":302,"./bo.js":302,"./br":303,"./br.js":303,"./bs":304,"./bs.js":304,"./ca":305,"./ca.js":305,"./cs":306,"./cs.js":306,"./cv":307,"./cv.js":307,"./cy":308,"./cy.js":308,"./da":309,"./da.js":309,"./de":310,"./de-at":311,"./de-at.js":311,"./de-ch":312,"./de-ch.js":312,"./de.js":310,"./dv":313,"./dv.js":313,"./el":314,"./el.js":314,"./en-SG":315,"./en-SG.js":315,"./en-au":316,"./en-au.js":316,"./en-ca":317,"./en-ca.js":317,"./en-gb":318,"./en-gb.js":318,"./en-ie":319,"./en-ie.js":319,"./en-il":320,"./en-il.js":320,"./en-nz":321,"./en-nz.js":321,"./eo":322,"./eo.js":322,"./es":323,"./es-do":324,"./es-do.js":324,"./es-us":325,"./es-us.js":325,"./es.js":323,"./et":326,"./et.js":326,"./eu":327,"./eu.js":327,"./fa":328,"./fa.js":328,"./fi":329,"./fi.js":329,"./fo":330,"./fo.js":330,"./fr":331,"./fr-ca":332,"./fr-ca.js":332,"./fr-ch":333,"./fr-ch.js":333,"./fr.js":331,"./fy":334,"./fy.js":334,"./ga":335,"./ga.js":335,"./gd":336,"./gd.js":336,"./gl":337,"./gl.js":337,"./gom-latn":338,"./gom-latn.js":338,"./gu":339,"./gu.js":339,"./he":340,"./he.js":340,"./hi":341,"./hi.js":341,"./hr":342,"./hr.js":342,"./hu":343,"./hu.js":343,"./hy-am":344,"./hy-am.js":344,"./id":345,"./id.js":345,"./is":346,"./is.js":346,"./it":347,"./it-ch":348,"./it-ch.js":348,"./it.js":347,"./ja":349,"./ja.js":349,"./jv":350,"./jv.js":350,"./ka":351,"./ka.js":351,"./kk":352,"./kk.js":352,"./km":353,"./km.js":353,"./kn":354,"./kn.js":354,"./ko":355,"./ko.js":355,"./ku":356,"./ku.js":356,"./ky":357,"./ky.js":357,"./lb":358,"./lb.js":358,"./lo":359,"./lo.js":359,"./lt":360,"./lt.js":360,"./lv":361,"./lv.js":361,"./me":362,"./me.js":362,"./mi":363,"./mi.js":363,"./mk":364,"./mk.js":364,"./ml":365,"./ml.js":365,"./mn":366,"./mn.js":366,"./mr":367,"./mr.js":367,"./ms":368,"./ms-my":369,"./ms-my.js":369,"./ms.js":368,"./mt":370,"./mt.js":370,"./my":371,"./my.js":371,"./nb":372,"./nb.js":372,"./ne":373,"./ne.js":373,"./nl":374,"./nl-be":375,"./nl-be.js":375,"./nl.js":374,"./nn":376,"./nn.js":376,"./pa-in":377,"./pa-in.js":377,"./pl":378,"./pl.js":378,"./pt":379,"./pt-br":380,"./pt-br.js":380,"./pt.js":379,"./ro":381,"./ro.js":381,"./ru":382,"./ru.js":382,"./sd":383,"./sd.js":383,"./se":384,"./se.js":384,"./si":385,"./si.js":385,"./sk":386,"./sk.js":386,"./sl":387,"./sl.js":387,"./sq":388,"./sq.js":388,"./sr":389,"./sr-cyrl":390,"./sr-cyrl.js":390,"./sr.js":389,"./ss":391,"./ss.js":391,"./sv":392,"./sv.js":392,"./sw":393,"./sw.js":393,"./ta":394,"./ta.js":394,"./te":395,"./te.js":395,"./tet":396,"./tet.js":396,"./tg":397,"./tg.js":397,"./th":398,"./th.js":398,"./tl-ph":399,"./tl-ph.js":399,"./tlh":400,"./tlh.js":400,"./tr":401,"./tr.js":401,"./tzl":402,"./tzl.js":402,"./tzm":403,"./tzm-latn":404,"./tzm-latn.js":404,"./tzm.js":403,"./ug-cn":405,"./ug-cn.js":405,"./uk":406,"./uk.js":406,"./ur":407,"./ur.js":407,"./uz":408,"./uz-latn":409,"./uz-latn.js":409,"./uz.js":408,"./vi":410,"./vi.js":410,"./x-pseudo":411,"./x-pseudo.js":411,"./yo":412,"./yo.js":412,"./zh-cn":413,"./zh-cn.js":413,"./zh-hk":414,"./zh-hk.js":414,"./zh-tw":415,"./zh-tw.js":415};function r(t){var e=l(t);return n(e)}function l(t){var e=map[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=420},465:function(t,e,n){var content=n(582);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("0da6eec1",content,!0,{sourceMap:!1})},581:function(t,e,n){"use strict";var r=n(465);n.n(r).a},582:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"h1[data-v-ef15da24]{font-size:32px;font-weight:500}h1 .name[data-v-ef15da24]{font-weight:400;color:#468df5}h2[data-v-ef15da24]{font-size:21px}h2[data-v-ef15da24],h4[data-v-ef15da24]{text-transform:uppercase}h4[data-v-ef15da24]{font-size:14px;color:#b1b1b1;font-weight:400;width:100%}.schedule input[data-v-ef15da24],h4 input[data-v-ef15da24]{display:inline-block;border:none;color:#468df5;font-size:14px;width:auto;padding:0;line-height:1;height:auto}.week[data-v-ef15da24]{padding:0;overflow:hidden}.log-pager.today[data-v-ef15da24]{color:#468df5}.day[data-v-ef15da24]{overflow:hidden;text-align:center;padding:0;min-height:100%;border-right:1px solid #f3f3f3}.day .calendar[data-v-ef15da24]{font-size:16px}.day .calendar .dow[data-v-ef15da24],.day .calendar .dow a[data-v-ef15da24]{text-align:left;text-transform:uppercase;font-weight:500;color:#000}.day .calendar .dom[data-v-ef15da24],.day .calendar .dom a[data-v-ef15da24]{color:#777;text-align:right}.day .calendar .dom.today[data-v-ef15da24]{display:flex;justify-content:center;align-items:center;padding:0;margin-right:3px;margin-top:-4px}.day .calendar .dom.today a[data-v-ef15da24]{text-align:center;border-radius:100px;color:#fff;background:#e72970;padding-bottom:0;line-height:27px;width:27px;height:27px}.day .placeholder[data-v-ef15da24]{font-size:17px;text-transform:uppercase;color:#777;font-weight:500}.day .placeholder .fa-pencil-alt[data-v-ef15da24]{display:block;margin:0 auto;font-size:24px;color:#468df5}.day .unit[data-v-ef15da24]{color:#777;font-size:14px;font-weight:400;text-transform:uppercase}.day .mileage[data-v-ef15da24]{font-weight:500;font-size:26px;color:#468df5}@media (min-width:992px){.day .mileage[data-v-ef15da24]{font-size:23px}}.day .pace[data-v-ef15da24]{font-weight:400;font-size:19px;color:#468df5}@media (min-width:992px){.day .pace[data-v-ef15da24]{font-size:16px}}.day .checks[data-v-ef15da24]{text-align:left;font-size:15px}.day .checks label[data-v-ef15da24]{margin-bottom:0;font-weight:500}.day .stats[data-v-ef15da24]{font-size:18px;font-weight:500}@media (min-width:992px){.day .stats[data-v-ef15da24]{font-size:15px}}.day .stats .fa-heartbeat[data-v-ef15da24]{color:#e72970}.day .stats .fa-bed[data-v-ef15da24]{color:#f67e2c}.day .feel[data-v-ef15da24]{width:100%;height:3.5px;background:#777}.day .f1[data-v-ef15da24]{background:#e72970}.day .f2[data-v-ef15da24]{background:#f67e2c}.day .f3[data-v-ef15da24]{background:#1acbb0}.day .f4[data-v-ef15da24]{background:#468df5}.day .f5[data-v-ef15da24]{background:#802dc4}.schedule[data-v-ef15da24]{max-width:100%}.schedule[data-v-ef15da24],.schedule h4[data-v-ef15da24]{font-size:15px}.schedule .col .label[data-v-ef15da24]{text-transform:uppercase;color:#575757;font-weight:500;text-align:center}@media (min-width:992px){.schedule .col .label[data-v-ef15da24]{text-align:right}}.schedule .col .mileage[data-v-ef15da24]{color:#468df5;font-weight:500}.schedule .col input[data-v-ef15da24]{font-size:17px;text-align:center;width:100%}.schedule .goal[data-v-ef15da24]{background:#468df5;font-size:16px;color:#fff;border-radius:5px;padding:2px 7px;white-space:nowrap}.stats.row .box[data-v-ef15da24]{margin:10px;overflow:hidden}.stats.row .box .placeholder[data-v-ef15da24]{text-transform:uppercase;color:#777;font-weight:400;font-size:14px}.num[data-v-ef15da24]{color:#468df5}.data[data-v-ef15da24]{text-align:right;font-weight:500;font-size:21px;color:#777}",""])},745:function(t,e,n){"use strict";n.r(e);n(33),n(34),n(23),n(416),n(82),n(42);var r=n(7),l=(n(22),n(2)),o=n(519),d=n.n(o);Array.prototype.sum=function(t){for(var e=0,i=0,n=this.length;i<n;i++)e+=this[i][t];return e},d.a.tz.setDefault("America/Los_Angeles");var c=n(419),f=c.timeStringToDecimal,v=c.timeDecimalToString,h=c.formatDateUrl,m=c.getDateFromUrl,j=c.getPace,y=function(t){return Math.round(100*t)/100},x=function(t){for(var e=0,n=0,r=0,i=0,l=t.length;i<l;i++)e+=t[i].distance||0,n+=t[i].elevationGain||0,r+=f(t[i].time);return{totalMileage:y(e),totalElev:y(n),totalTime:v(y(r))}},_=function(data,t){return data.filter(function(a){return a[t]>0}).map(function(a){return a[t]})},k={components:{Chart:function(){return Promise.all([n.e(89),n.e(81)]).then(n.bind(null,779))},LogPagers:function(){return n.e(91).then(n.bind(null,714))},Stat:function(){return n.e(88).then(n.bind(null,780))}},middleware:"auth",head:function(){return{title:"Training Log (Week of "+this.weekOf+") - RaceBase"}},asyncData:function(){var t=Object(l.a)(regeneratorRuntime.mark(function t(e){var n,l,o,c,v,y,_,k,data,w,C,z;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,l=e.params,o=e.$axios,t.prev=1,(c=Object(r.a)({},n.state.auth.user)).name?c.firstName=c.name.split(" ")[0]:c.firstName="",v=d()(),y=l.date,_=m(l.date),k=d()(_).startOf("isoWeek").format("M/D/YY"),data={},t.prev=9,t.next=12,o.$get("/log/list/week/"+y);case 12:data=t.sent,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(9),console.log(t.t0.response.data);case 18:return w=h(d()(_).subtract(7,"days")),t.prev=19,t.next=22,o.$get("/log/list/week/"+w);case 22:C=t.sent,t.next=28;break;case 25:t.prev=25,t.t1=t.catch(19),console.log(t.t1.response.data);case 28:return t.next=30,Array.apply(null,Array(7)).map(function(t,i){var e=d()(m(l.date)).startOf("isoWeek").weekday(i+1),n=e.format("dddd"),r=e.format("ddd"),o=e.format("DD"),c=h(e),y=!1;if(h(d()())==h(e)&&(y=!0),i<data.length&&d()(data[i].date).format("dddd")==n){var _=data[i];_.dow=r,_.dom=o,_.today=y,_.url=c;var k=x(_.runs);return _.totalMileage=k.totalMileage,_.totalElev=k.totalElev,_.totalTime=k.totalTime,_.sleepDecimal=f(_.sleep),_.avgPace=j(_.totalTime,_.totalMileage),_}return{dow:r,dom:o,today:y,url:c,now:v}});case 30:return z=t.sent,t.abrupt("return",{days:z,lastWeek:C,weekOf:k,user:c,now:v,date:l.date||h(d()())});case 34:t.prev=34,t.t2=t.catch(1),console.log(t.t2);case 37:case"end":return t.stop()}},t,this,[[1,34],[9,15],[19,25]])}));return function(e){return t.apply(this,arguments)}}(),computed:{totalMileage:function(){for(var t=0,i=0,e=this.days.length;i<e;i++)this.days[i].totalMileage&&(t+=this.days[i].totalMileage||0);return Math.round(100*t)/100},totalElev:function(){for(var t=0,i=0,e=this.days.length;i<e;i++)this.days[i].totalElev&&(t+=this.days[i].totalElev);return Math.round(100*t)/100},totalGoal:function(){for(var t=0,i=0,e=this.days.length;i<e;i++)t+=Number(this.days[i].mileageGoal)||0;return Math.round(100*t)/100},avgSleep:function(){for(var t=0,e=0,i=0;i<this.days.length;i++)this.days[i].sleep&&(t+=f(this.days[i].sleep),e++);return v(t/e)},sleepDifferential:function(){for(var t=f(this.avgSleep),e=0,n=0,i=0;i<this.days.length;i++)this.days[i].sleep&&this.lastWeek[i]&&(e+=f(this.lastWeek[i].sleep),n++);var r=e/n||0;return Math.round((t-r)/r*1e3)/10||0},sleepData:function(){return _(this.days,"sleepDecimal")},mileageData:function(){return _(this.days,"totalMileage")}},methods:{changeDate:function(t){console.log(t);var e=d()(t,"M/D/YY");e.isValid()&&this.$router.push({params:{date:h(e)}})},updateSchedule:function(t,e){this.$axios.$post("log/"+e+"/goal",{goal:t}).then(function(t){console.log(t)}).catch(function(t){console.log(t.response.data)})},updateEntireSchedule:function(){var t=Object(l.a)(regeneratorRuntime.mark(function t(){var e,n,r,l,o,d,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,e=!0,n=!1,r=void 0,t.prev=4,l=this.days[Symbol.iterator]();case 6:if(e=(o=l.next()).done){t.next=15;break}return d=o.value,t.next=10,this.$axios.$post("/log/"+d.url+"/goal",{goal:d.mileageGoal});case 10:c=t.sent,console.log(c);case 12:e=!0,t.next=6;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(4),n=!0,r=t.t0;case 21:t.prev=21,t.prev=22,e||null==l.return||l.return();case 24:if(t.prev=24,!n){t.next=27;break}throw r;case 27:return t.finish(24);case 28:return t.finish(21);case 29:t.next=34;break;case 31:t.prev=31,t.t1=t.catch(0),console.log(t.t1);case 34:case"end":return t.stop()}},t,this,[[0,31],[4,17,21,29],[22,,24,28]])}));return function(){return t.apply(this,arguments)}}(),getCheckPercentage:function(t){for(var e=0,n=0,i=0;i<this.days.length;i++)this.days[i].runs&&this.days[i].checks&&(this.days[i].checks[t]&&n++,this.days[i].runs[0]&&this.days[i].runs[0].distance>0&&e++);return Math.round(n/e*100)||0}},watch:{$route:function(){this.date=this.$route.params.date||this.date}}},w=(n(581),n(14)),component=Object(w.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto w-md-100 mx-md-0 px-md-4 container mt-4"},[n("div",{staticClass:"row d-flex align-items-center"},[n("h1",{staticClass:"col"},[t.user.name?n("span",{staticClass:"name"},[t._v(t._s(t.user.firstName)+"'s")]):t._e(),t._v("\n      Training Log\n    ")]),t._v(" "),n("div",{staticClass:"col d-flex align-items-center justify-content-end"},[n("nuxt-link",{staticClass:"btn btn-outline-primary btn-small",attrs:{to:"/athlete/"+t.user.athlete_id+"/logs"}},[t._v("Monthly View")])],1)]),t._v(" "),n("div",{staticClass:"header row mb-2"},[n("div",{staticClass:"col d-flex align-items-center"},[n("h4",{staticClass:"mt-4 mb-0"},[t._v("Week of \n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.weekOf,expression:"weekOf"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.weekOf},on:{keyup:function(e){return"keyCode"in e&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeDate(t.weekOf)},input:function(e){e.target.composing||(t.weekOf=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col d-flex flex-row align-items-end"},[n("div",{staticClass:"btn btn-default log-pager ml-auto mr-2 today",on:{click:function(e){return t.changeDate(t.now)}}},[t._v(" Today ")]),t._v(" "),n("LogPagers",{attrs:{date:t.date,interval:"7"}})],1)]),t._v(" "),n("div",{staticClass:"week box row mt-3 mx-auto mb-3"},t._l(t.days,function(e){return n("div",{staticClass:"day col-lg d-flex flex-column"},[n("div",{staticClass:"calendar row p-2"},[n("div",{staticClass:"dow col"},[n("nuxt-link",{attrs:{to:"/user/log/"+e.url}},[t._v(t._s(e.dow)+" ")])],1),t._v(" "),n("div",{staticClass:"dom col",class:e.today?"today":""},[n("nuxt-link",{attrs:{to:"/user/log/"+e.url}},[t._v(t._s(e.dom)+" ")])],1)]),t._v(" "),n("div",{staticClass:"row mb-4 mb-lg-auto"},[n("div",{staticClass:"mt-auto mb-auto col-6 col-lg-12"},[e.totalMileage>0?n("div",{staticClass:"mt-auto"},[n("div",{staticClass:"mileage"},[t._v(" "+t._s(e.totalMileage||0)+" "),n("span",{staticClass:"unit"},[t._v(" mi ")])]),t._v(" "),n("div",{staticClass:"pace"},[t._v(" "+t._s(e.avgPace||"0:00")+" "),n("span",{staticClass:"unit"},[t._v(" min / mi ")])])]):e.rhr||e.sleep?n("div",[n("nuxt-link",{staticClass:"placeholder",attrs:{to:"/user/log/"+e.url}},[n("div",{staticClass:"mb-2"},[t._v(" Edit "),n("fa",{attrs:{icon:"pencil-alt"}})],1)])],1):n("div",{staticClass:"mt-3 mb-5"},[n("nuxt-link",{staticClass:"placeholder",attrs:{to:"/user/log/"+e.url}},[n("div",{staticClass:"mb-2"},[t._v(" Edit ")]),t._v(" "),n("fa",{attrs:{icon:"pencil-alt"}})],1)],1)]),t._v(" "),n("div",{staticClass:"col-6 col-lg-12"},[e.rhr||e.sleep?n("div",{staticClass:"mt-2"},[n("div",{staticClass:"stats mb-3"},[n("div",[n("fa",{staticClass:"mr-2",attrs:{icon:"heartbeat"}}),t._v(" "+t._s(e.rhr||"N/A")+" "),n("span",{staticClass:"unit ml-2"},[t._v(" BPM ")])],1),t._v(" "),n("div",[n("fa",{staticClass:"mr-2",attrs:{icon:"bed"}}),t._v(" "+t._s(e.sleep||"N/A")+" "),n("span",{staticClass:"unit ml-2"},[t._v(" hrs ")])],1)])]):t._e(),t._v(" "),!e.rhr&&!e.sleep&&e.totalMileage>0?n("div",{staticClass:"mx-auto mt-3"},[n("nuxt-link",{attrs:{to:"/user/log/"+e.url}},[t._v(" Add more "),n("fa",{attrs:{icon:"pencil-alt"}})],1)],1):t._e()])]),t._v(" "),e.runs?n("div",{staticClass:"feel mt-1",class:"f"+(e.runs[0]?e.runs[0].feel:"")}):t._e()])}),0),t._v(" "),n("div",{staticClass:"schedule row align-items-center mb-3"},[n("h4",{staticClass:"col-12 col-lg mb-2 mb-lg-0"},[t._v(" Schedule ")]),t._v(" "),t._l(t.days,function(e){return n("div",{staticClass:"col row item"},[n("div",{staticClass:"col-12 col-lg-6 label px-0"},[t._v(t._s(e.dow))]),t._v(" "),n("div",{staticClass:"col-12 col-lg-6 mileage px-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mileageGoal,expression:"day.mileageGoal"}],staticClass:"form-control",attrs:{placeholder:"0"},domProps:{value:e.mileageGoal},on:{keyup:function(n){return"keyCode"in n&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.updateSchedule(e.mileageGoal,e.url)},input:function(n){n.target.composing||t.$set(e,"mileageGoal",n.target.value)}}})])])}),t._v(" "),n("div",{staticClass:"col-12 col-lg d-flex align-items-center mt-3 mt-lg-0"},[n("h4",{staticClass:"d-inline-block mb-0"},[t._v(" Goal ")]),t._v(" "),n("div",{staticClass:"d-inline-block goal ml-3"},[t._v(" "+t._s(t.totalGoal||0)+" mi")])]),t._v(" "),n("div",{staticClass:"btn btn-small btn-primary",on:{click:function(e){return t.updateEntireSchedule()}}},[t._v(" \n      Save \n    ")])],2),t._v(" "),n("div",{staticClass:"stats row align-items-start"},[n("div",{staticClass:"box col-lg p-0"},[n("div",{staticClass:"row mb-2 px-3 pt-3 pb-0"},[n("h2",{staticClass:"col"},[t._v(" Total ")]),t._v(" "),n("div",{staticClass:"data col mb-2"},[n("span",{staticClass:"num"},[t._v(t._s(t.totalMileage))]),t._v(" mi")]),t._v(" "),n("Stat",{attrs:{value:Math.round(100*(t.totalGoal-t.totalMileage))/100||0,unit:" mi"}},[t._v(" left this week ")]),t._v(" "),n("Stat",{attrs:{value:t.totalElev,unit:" ft"}},[t._v(" elev. gain this week ")]),t._v(" "),0==t.totalMileage?n("div",{staticClass:"mx-auto mt-3 placeholder"},[t._v("\n          Add log entries to see stats\n        ")]):t._e()],1),t._v(" "),t.totalMileage>0&&t.mileageData.length>1?n("no-ssr",[n("Chart",{attrs:{data:t.mileageData,name:"mileage",color:"blue"}})],1):t._e()],1),t._v(" "),n("div",{staticClass:"sleep box col-lg p-0"},[n("div",[n("div",{staticClass:"row pt-3 px-3 pb-0 mb-2"},[n("h2",{staticClass:"col"},[t._v(" Avg Sleep ")]),t._v(" "),n("div",{staticClass:"data col mb-2"},[n("span",{staticClass:"num"},[t._v(t._s(t.avgSleep))]),t._v(" hrs")]),t._v(" "),n("Stat",{attrs:{value:t.sleepDifferential,unit:"%",comp:!0}},[t._v(" than last week ")]),t._v(" "),"0:00"==t.avgSleep?n("div",{staticClass:"mx-auto mt-3 placeholder"},[t._v(" \n            Add log entries to see stats\n          ")]):t._e()],1),t._v(" "),"0:00"!=t.avgSleep&&t.sleepData.length>1?n("no-ssr",{staticClass:"mt-2"},[n("Chart",{attrs:{data:t.sleepData,name:"sleep",color:"orange"}})],1):t._e()],1)]),t._v(" "),n("div",{staticClass:"box col-lg"},[n("div",{staticClass:"row mb-2"},[n("h2",{staticClass:"col"},[t._v(" Core ")]),t._v(" "),n("div",{staticClass:"data col"},[n("span",{staticClass:"num"},[t._v(t._s(t.getCheckPercentage("core"))+"%")])])]),t._v(" "),n("div",{staticClass:"row"},[n("h2",{staticClass:"col"},[t._v(" Stretching ")]),t._v(" "),n("div",{staticClass:"data col"},[n("span",{staticClass:"num"},[t._v(t._s(t.getCheckPercentage("stretching"))+"%")])])])])])])},[],!1,null,"ef15da24",null);e.default=component.exports}}]);