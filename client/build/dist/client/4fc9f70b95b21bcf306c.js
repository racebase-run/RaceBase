(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{418:function(t,e,n){"use strict";var r=n(4),l=n(24),o=n(27),d=n(130),c=n(57),v=n(15),f=n(58).f,m=n(84).f,j=n(16).f,h=n(421).trim,y=r.Number,k=y,x=y.prototype,_="Number"==o(n(83)(x)),w="trim"in String.prototype,C=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var n,r,l,o=(e=w?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+e}for(var code,d=e.slice(2),i=0,v=d.length;i<v;i++)if((code=d.charCodeAt(i))<48||code>l)return NaN;return parseInt(d,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(_?v(function(){x.valueOf.call(n)}):"Number"!=o(n))?d(new k(C(e)),n,y):C(e)};for(var z,M=n(11)?f(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;M.length>D;D++)l(k,z=M[D])&&!l(y,z)&&j(y,z,m(k,z));y.prototype=x,x.constructor=y,n(18)(r,"Number",y)}},420:function(t,e,n){var map={"./af":291,"./af.js":291,"./ar":292,"./ar-dz":293,"./ar-dz.js":293,"./ar-kw":294,"./ar-kw.js":294,"./ar-ly":295,"./ar-ly.js":295,"./ar-ma":296,"./ar-ma.js":296,"./ar-sa":297,"./ar-sa.js":297,"./ar-tn":298,"./ar-tn.js":298,"./ar.js":292,"./az":299,"./az.js":299,"./be":300,"./be.js":300,"./bg":301,"./bg.js":301,"./bm":302,"./bm.js":302,"./bn":303,"./bn.js":303,"./bo":304,"./bo.js":304,"./br":305,"./br.js":305,"./bs":306,"./bs.js":306,"./ca":307,"./ca.js":307,"./cs":308,"./cs.js":308,"./cv":309,"./cv.js":309,"./cy":310,"./cy.js":310,"./da":311,"./da.js":311,"./de":312,"./de-at":313,"./de-at.js":313,"./de-ch":314,"./de-ch.js":314,"./de.js":312,"./dv":315,"./dv.js":315,"./el":316,"./el.js":316,"./en-SG":317,"./en-SG.js":317,"./en-au":318,"./en-au.js":318,"./en-ca":319,"./en-ca.js":319,"./en-gb":320,"./en-gb.js":320,"./en-ie":321,"./en-ie.js":321,"./en-il":322,"./en-il.js":322,"./en-nz":323,"./en-nz.js":323,"./eo":324,"./eo.js":324,"./es":325,"./es-do":326,"./es-do.js":326,"./es-us":327,"./es-us.js":327,"./es.js":325,"./et":328,"./et.js":328,"./eu":329,"./eu.js":329,"./fa":330,"./fa.js":330,"./fi":331,"./fi.js":331,"./fo":332,"./fo.js":332,"./fr":333,"./fr-ca":334,"./fr-ca.js":334,"./fr-ch":335,"./fr-ch.js":335,"./fr.js":333,"./fy":336,"./fy.js":336,"./ga":337,"./ga.js":337,"./gd":338,"./gd.js":338,"./gl":339,"./gl.js":339,"./gom-latn":340,"./gom-latn.js":340,"./gu":341,"./gu.js":341,"./he":342,"./he.js":342,"./hi":343,"./hi.js":343,"./hr":344,"./hr.js":344,"./hu":345,"./hu.js":345,"./hy-am":346,"./hy-am.js":346,"./id":347,"./id.js":347,"./is":348,"./is.js":348,"./it":349,"./it-ch":350,"./it-ch.js":350,"./it.js":349,"./ja":351,"./ja.js":351,"./jv":352,"./jv.js":352,"./ka":353,"./ka.js":353,"./kk":354,"./kk.js":354,"./km":355,"./km.js":355,"./kn":356,"./kn.js":356,"./ko":357,"./ko.js":357,"./ku":358,"./ku.js":358,"./ky":359,"./ky.js":359,"./lb":360,"./lb.js":360,"./lo":361,"./lo.js":361,"./lt":362,"./lt.js":362,"./lv":363,"./lv.js":363,"./me":364,"./me.js":364,"./mi":365,"./mi.js":365,"./mk":366,"./mk.js":366,"./ml":367,"./ml.js":367,"./mn":368,"./mn.js":368,"./mr":369,"./mr.js":369,"./ms":370,"./ms-my":371,"./ms-my.js":371,"./ms.js":370,"./mt":372,"./mt.js":372,"./my":373,"./my.js":373,"./nb":374,"./nb.js":374,"./ne":375,"./ne.js":375,"./nl":376,"./nl-be":377,"./nl-be.js":377,"./nl.js":376,"./nn":378,"./nn.js":378,"./pa-in":379,"./pa-in.js":379,"./pl":380,"./pl.js":380,"./pt":381,"./pt-br":382,"./pt-br.js":382,"./pt.js":381,"./ro":383,"./ro.js":383,"./ru":384,"./ru.js":384,"./sd":385,"./sd.js":385,"./se":386,"./se.js":386,"./si":387,"./si.js":387,"./sk":388,"./sk.js":388,"./sl":389,"./sl.js":389,"./sq":390,"./sq.js":390,"./sr":391,"./sr-cyrl":392,"./sr-cyrl.js":392,"./sr.js":391,"./ss":393,"./ss.js":393,"./sv":394,"./sv.js":394,"./sw":395,"./sw.js":395,"./ta":396,"./ta.js":396,"./te":397,"./te.js":397,"./tet":398,"./tet.js":398,"./tg":399,"./tg.js":399,"./th":400,"./th.js":400,"./tl-ph":401,"./tl-ph.js":401,"./tlh":402,"./tlh.js":402,"./tr":403,"./tr.js":403,"./tzl":404,"./tzl.js":404,"./tzm":405,"./tzm-latn":406,"./tzm-latn.js":406,"./tzm.js":405,"./ug-cn":407,"./ug-cn.js":407,"./uk":408,"./uk.js":408,"./ur":409,"./ur.js":409,"./uz":410,"./uz-latn":411,"./uz-latn.js":411,"./uz.js":410,"./vi":412,"./vi.js":412,"./x-pseudo":413,"./x-pseudo.js":413,"./yo":414,"./yo.js":414,"./zh-cn":415,"./zh-cn.js":415,"./zh-hk":416,"./zh-hk.js":416,"./zh-tw":417,"./zh-tw.js":417};function r(t){var e=l(t);return n(e)}function l(t){var e=map[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=420},421:function(t,e,n){var r=n(6),l=n(26),o=n(15),d=n(422),c="["+d+"]",v=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),m=function(t,e,n){var l={},c=o(function(){return!!d[t]()||"​"!="​"[t]()}),v=l[t]=c?e(j):d[t];n&&(l[n]=v),r(r.P+r.F*c,"String",l)},j=m.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(f,"")),t};t.exports=m},422:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},423:function(t,e,n){"use strict";n.r(e),n.d(e,"timeStringToDecimal",function(){return o}),n.d(e,"timeDecimalToString",function(){return d}),n.d(e,"formatDateUrl",function(){return c}),n.d(e,"getDateFromUrl",function(){return v}),n.d(e,"getPace",function(){return f});n(82);var r=n(289),l=n.n(r);function o(t){if(!t)return 0;var a=t.split(":");return(60*+a[0]+ +a[1])/60}function d(t){var e=Math.floor(t),s=Math.round(60*(t-e));if(s>=60){var n=Math.floor(s/60);e+=n,s-=60*n}return s=("0"+s).slice(-2),"NaN"==e||"aN"==s?"0:00":e+":"+s}function c(t){return t.format("MM-DD-YYYY")}function v(s){return s&&l()(s,"MM-DD-YYYY").isValid()?l()(s,"MM-DD-YYYY").toDate():new Date}function f(time,t){if(!time||!t)return"0:00";var a=(time||"0:00").split(":");return d((60*+a[0]+ +a[1])/t/60)}},589:function(t,e,n){var content=n(694);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("18ab1c6b",content,!0,{sourceMap:!1})},641:function(t,e,n){var map={"./af":441,"./af.js":441,"./ar":442,"./ar-dz":443,"./ar-dz.js":443,"./ar-kw":444,"./ar-kw.js":444,"./ar-ly":445,"./ar-ly.js":445,"./ar-ma":446,"./ar-ma.js":446,"./ar-sa":447,"./ar-sa.js":447,"./ar-tn":448,"./ar-tn.js":448,"./ar.js":442,"./az":449,"./az.js":449,"./be":450,"./be.js":450,"./bg":451,"./bg.js":451,"./bm":452,"./bm.js":452,"./bn":453,"./bn.js":453,"./bo":454,"./bo.js":454,"./br":455,"./br.js":455,"./bs":456,"./bs.js":456,"./ca":457,"./ca.js":457,"./cs":458,"./cs.js":458,"./cv":459,"./cv.js":459,"./cy":460,"./cy.js":460,"./da":461,"./da.js":461,"./de":462,"./de-at":463,"./de-at.js":463,"./de-ch":464,"./de-ch.js":464,"./de.js":462,"./dv":465,"./dv.js":465,"./el":466,"./el.js":466,"./en-SG":467,"./en-SG.js":467,"./en-au":468,"./en-au.js":468,"./en-ca":469,"./en-ca.js":469,"./en-gb":470,"./en-gb.js":470,"./en-ie":471,"./en-ie.js":471,"./en-il":472,"./en-il.js":472,"./en-nz":473,"./en-nz.js":473,"./eo":474,"./eo.js":474,"./es":475,"./es-do":476,"./es-do.js":476,"./es-us":477,"./es-us.js":477,"./es.js":475,"./et":478,"./et.js":478,"./eu":479,"./eu.js":479,"./fa":480,"./fa.js":480,"./fi":481,"./fi.js":481,"./fo":482,"./fo.js":482,"./fr":483,"./fr-ca":484,"./fr-ca.js":484,"./fr-ch":485,"./fr-ch.js":485,"./fr.js":483,"./fy":486,"./fy.js":486,"./ga":487,"./ga.js":487,"./gd":488,"./gd.js":488,"./gl":489,"./gl.js":489,"./gom-latn":490,"./gom-latn.js":490,"./gu":491,"./gu.js":491,"./he":492,"./he.js":492,"./hi":493,"./hi.js":493,"./hr":494,"./hr.js":494,"./hu":495,"./hu.js":495,"./hy-am":496,"./hy-am.js":496,"./id":497,"./id.js":497,"./is":498,"./is.js":498,"./it":499,"./it-ch":500,"./it-ch.js":500,"./it.js":499,"./ja":501,"./ja.js":501,"./jv":502,"./jv.js":502,"./ka":503,"./ka.js":503,"./kk":504,"./kk.js":504,"./km":505,"./km.js":505,"./kn":506,"./kn.js":506,"./ko":507,"./ko.js":507,"./ku":508,"./ku.js":508,"./ky":509,"./ky.js":509,"./lb":510,"./lb.js":510,"./lo":511,"./lo.js":511,"./lt":512,"./lt.js":512,"./lv":513,"./lv.js":513,"./me":514,"./me.js":514,"./mi":515,"./mi.js":515,"./mk":516,"./mk.js":516,"./ml":517,"./ml.js":517,"./mn":518,"./mn.js":518,"./mr":519,"./mr.js":519,"./ms":520,"./ms-my":521,"./ms-my.js":521,"./ms.js":520,"./mt":522,"./mt.js":522,"./my":523,"./my.js":523,"./nb":524,"./nb.js":524,"./ne":525,"./ne.js":525,"./nl":526,"./nl-be":527,"./nl-be.js":527,"./nl.js":526,"./nn":528,"./nn.js":528,"./pa-in":529,"./pa-in.js":529,"./pl":530,"./pl.js":530,"./pt":531,"./pt-br":532,"./pt-br.js":532,"./pt.js":531,"./ro":533,"./ro.js":533,"./ru":534,"./ru.js":534,"./sd":535,"./sd.js":535,"./se":536,"./se.js":536,"./si":537,"./si.js":537,"./sk":538,"./sk.js":538,"./sl":539,"./sl.js":539,"./sq":540,"./sq.js":540,"./sr":541,"./sr-cyrl":542,"./sr-cyrl.js":542,"./sr.js":541,"./ss":543,"./ss.js":543,"./sv":544,"./sv.js":544,"./sw":545,"./sw.js":545,"./ta":546,"./ta.js":546,"./te":547,"./te.js":547,"./tet":548,"./tet.js":548,"./tg":549,"./tg.js":549,"./th":550,"./th.js":550,"./tl-ph":551,"./tl-ph.js":551,"./tlh":552,"./tlh.js":552,"./tr":553,"./tr.js":553,"./tzl":554,"./tzl.js":554,"./tzm":555,"./tzm-latn":556,"./tzm-latn.js":556,"./tzm.js":555,"./ug-cn":557,"./ug-cn.js":557,"./uk":558,"./uk.js":558,"./ur":559,"./ur.js":559,"./uz":560,"./uz-latn":561,"./uz-latn.js":561,"./uz.js":560,"./vi":562,"./vi.js":562,"./x-pseudo":563,"./x-pseudo.js":563,"./yo":564,"./yo.js":564,"./zh-cn":565,"./zh-cn.js":565,"./zh-hk":566,"./zh-hk.js":566,"./zh-tw":567,"./zh-tw.js":567};function r(t){var e=l(t);return n(e)}function l(t){var e=map[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=641},693:function(t,e,n){"use strict";var r=n(589);n.n(r).a},694:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"h1[data-v-ae9a85da]{font-size:32px;font-weight:500}h1 .name[data-v-ae9a85da]{font-weight:400;color:#468df5}h2[data-v-ae9a85da]{font-size:21px}h2[data-v-ae9a85da],h4[data-v-ae9a85da]{text-transform:uppercase}h4[data-v-ae9a85da]{font-size:14px;color:#b1b1b1;font-weight:400;width:100%}.schedule input[data-v-ae9a85da],h4 input[data-v-ae9a85da]{display:inline-block;border:none;color:#468df5;font-size:14px;width:auto;padding:0;line-height:1;height:auto}.week[data-v-ae9a85da]{padding:0;overflow:hidden}.log-pager.today[data-v-ae9a85da]{color:#468df5}.day[data-v-ae9a85da]{overflow:hidden;text-align:center;padding:0;min-height:100%;border-right:1px solid #f3f3f3}.day .calendar[data-v-ae9a85da]{font-size:16px}.day .calendar .dow[data-v-ae9a85da],.day .calendar .dow a[data-v-ae9a85da]{text-align:left;text-transform:uppercase;font-weight:500;color:#000}.day .calendar .dom[data-v-ae9a85da],.day .calendar .dom a[data-v-ae9a85da]{color:#777;text-align:right}.day .calendar .dom.today[data-v-ae9a85da]{display:flex;justify-content:center;align-items:center;padding:0;margin-right:3px;margin-top:-4px}.day .calendar .dom.today a[data-v-ae9a85da]{text-align:center;border-radius:100px;color:#fff;background:#e72970;padding-bottom:0;line-height:27px;width:27px;height:27px}.day .placeholder[data-v-ae9a85da]{font-size:17px;text-transform:uppercase;color:#777;font-weight:500}.day .placeholder .fa-pencil-alt[data-v-ae9a85da]{display:block;margin:0 auto;font-size:24px;color:#468df5}.day .unit[data-v-ae9a85da]{color:#777;font-size:14px;font-weight:400;text-transform:uppercase}.day .mileage[data-v-ae9a85da]{font-weight:500;font-size:26px;color:#468df5}@media (min-width:992px){.day .mileage[data-v-ae9a85da]{font-size:23px}}.day .pace[data-v-ae9a85da]{font-weight:400;font-size:19px;color:#468df5}@media (min-width:992px){.day .pace[data-v-ae9a85da]{font-size:16px}}.day .checks[data-v-ae9a85da]{text-align:left;font-size:15px}.day .checks label[data-v-ae9a85da]{margin-bottom:0;font-weight:500}.day .stats[data-v-ae9a85da]{font-size:18px;font-weight:500}@media (min-width:992px){.day .stats[data-v-ae9a85da]{font-size:15px}}.day .stats .fa-heartbeat[data-v-ae9a85da]{color:#e72970}.day .stats .fa-bed[data-v-ae9a85da]{color:#f67e2c}.day .feel[data-v-ae9a85da]{width:100%;height:3.5px;background:#777}.day .f1[data-v-ae9a85da]{background:#e72970}.day .f2[data-v-ae9a85da]{background:#f67e2c}.day .f3[data-v-ae9a85da]{background:#1acbb0}.day .f4[data-v-ae9a85da]{background:#468df5}.day .f5[data-v-ae9a85da]{background:#802dc4}.schedule[data-v-ae9a85da]{max-width:100%}.schedule[data-v-ae9a85da],.schedule h4[data-v-ae9a85da]{font-size:15px}.schedule .col .label[data-v-ae9a85da]{text-transform:uppercase;color:#575757;font-weight:500;text-align:center}@media (min-width:992px){.schedule .col .label[data-v-ae9a85da]{text-align:right}}.schedule .col .mileage[data-v-ae9a85da]{color:#468df5;font-weight:500}.schedule .col input[data-v-ae9a85da]{font-size:17px;text-align:center;width:100%}.schedule .goal[data-v-ae9a85da]{background:#468df5;font-size:16px;color:#fff;border-radius:5px;padding:2px 7px;white-space:nowrap}.stats.row .box[data-v-ae9a85da]{margin:10px;overflow:hidden}.stats.row .box .placeholder[data-v-ae9a85da]{text-transform:uppercase;color:#777;font-weight:400;font-size:14px}.num[data-v-ae9a85da]{color:#468df5}.data[data-v-ae9a85da]{text-align:right;font-weight:500;font-size:21px;color:#777}",""])},839:function(t,e,n){"use strict";n.r(e);n(28),n(29),n(21),n(418),n(82),n(42);var r=n(8),l=(n(20),n(2)),o=n(640),d=n.n(o);Array.prototype.sum=function(t){for(var e=0,i=0,n=this.length;i<n;i++)e+=this[i][t];return e},d.a.tz.setDefault("America/Los_Angeles");var c=n(423),v=c.timeStringToDecimal,f=c.timeDecimalToString,m=c.formatDateUrl,j=c.getDateFromUrl,h=c.getPace,y=function(t){return Math.round(100*t)/100},k=function(t){for(var e=0,n=0,r=0,i=0,l=t.length;i<l;i++)e+=t[i].distance||0,n+=t[i].elevationGain||0,r+=v(t[i].time);return{totalMileage:y(e),totalElev:y(n),totalTime:f(y(r))}},x=function(data,t){return data.filter(function(a){return a[t]>0}).map(function(a){return a[t]})},_={components:{Chart:function(){return Promise.all([n.e(77),n.e(69)]).then(n.bind(null,868))},LogPagers:function(){return n.e(79).then(n.bind(null,816))},Stat:function(){return n.e(76).then(n.bind(null,869))}},middleware:"auth",head:function(){return{title:"Training Log (Week of "+this.weekOf+") - RaceBase"}},asyncData:function(){var t=Object(l.a)(regeneratorRuntime.mark(function t(e){var n,l,o,c,f,y,x,_,data,w,C,z;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,l=e.params,o=e.$axios,(c=Object(r.a)({},n.state.auth.user)).name?c.firstName=c.name.split(" ")[0]:c.firstName="",f=d()(),y=l.date,x=j(l.date),_=d()(x).startOf("isoWeek").format("M/D/YY"),t.next=9,o.$get("/log/list/week/"+y);case 9:return data=t.sent,w=m(d()(x).subtract(7,"days")),t.next=13,o.$get("/log/list/week/"+w);case 13:return C=t.sent,t.next=16,Array.apply(null,Array(7)).map(function(t,i){var e=d()(j(l.date)).startOf("isoWeek").weekday(i+1),n=e.format("dddd"),r=e.format("ddd"),o=e.format("DD"),c=m(e),y=!1;if(m(d()())==m(e)&&(y=!0),i<data.length&&d()(data[i].date).format("dddd")==n){var x=data[i];x.dow=r,x.dom=o,x.today=y,x.url=c;var _=k(x.runs);return x.totalMileage=_.totalMileage,x.totalElev=_.totalElev,x.totalTime=_.totalTime,x.sleepDecimal=v(x.sleep),x.avgPace=h(x.totalTime,x.totalMileage),x}return{dow:r,dom:o,today:y,url:c,now:f}});case 16:return z=t.sent,t.abrupt("return",{days:z,lastWeek:C,weekOf:_,user:c,date:l.date||m(d()())});case 18:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),computed:{totalMileage:function(){for(var t=0,i=0,e=this.days.length;i<e;i++)this.days[i].totalMileage&&(t+=this.days[i].totalMileage||0);return Math.round(100*t)/100},totalElev:function(){for(var t=0,i=0,e=this.days.length;i<e;i++)this.days[i].totalElev&&(t+=this.days[i].totalElev);return Math.round(100*t)/100},totalGoal:function(){for(var t=0,i=0,e=this.days.length;i<e;i++)t+=Number(this.days[i].mileageGoal)||0;return Math.round(100*t)/100},avgSleep:function(){for(var t=0,e=0,i=0;i<this.days.length;i++)this.days[i].sleep&&(t+=v(this.days[i].sleep),e++);return f(t/e)},sleepDifferential:function(){for(var t=v(this.avgSleep),e=0,n=0,i=0;i<this.days.length;i++)this.days[i].sleep&&this.lastWeek[i]&&(e+=v(this.lastWeek[i].sleep),n++);var r=e/n||0;return Math.round((t-r)/r*1e3)/10||0},sleepData:function(){return x(this.days,"sleepDecimal")},mileageData:function(){return x(this.days,"totalMileage")}},methods:{changeDate:function(t){var e=d()(t,"M/D/YY");e.isValid()&&this.$router.push({params:{date:m(e)}})},updateSchedule:function(t,e){this.$axios.$post("log/"+e+"/goal",{goal:t}).then(function(t){console.log(t)})},updateEntireSchedule:function(){var t=Object(l.a)(regeneratorRuntime.mark(function t(){var e,n,r,l,o,d,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=!0,n=!1,r=void 0,t.prev=3,l=this.days[Symbol.iterator]();case 5:if(e=(o=l.next()).done){t.next=14;break}return d=o.value,t.next=9,this.$axios.$post("/log/"+d.url+"/goal",{goal:d.mileageGoal});case 9:c=t.sent,console.log(c);case 11:e=!0,t.next=5;break;case 14:t.next=20;break;case 16:t.prev=16,t.t0=t.catch(3),n=!0,r=t.t0;case 20:t.prev=20,t.prev=21,e||null==l.return||l.return();case 23:if(t.prev=23,!n){t.next=26;break}throw r;case 26:return t.finish(23);case 27:return t.finish(20);case 28:case"end":return t.stop()}},t,this,[[3,16,20,28],[21,,23,27]])}));return function(){return t.apply(this,arguments)}}(),getCheckPercentage:function(t){for(var e=0,n=0,i=0;i<this.days.length;i++)this.days[i].runs&&this.days[i].checks&&(this.days[i].checks[t]&&n++,this.days[i].runs[0]&&this.days[i].runs[0].distance>0&&e++);return Math.round(n/e*100)||0}},watch:{$route:function(){this.date=this.$route.params.date||this.date}}},w=(n(693),n(14)),component=Object(w.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto w-md-100 mx-md-0 px-md-4 container"},[n("div",{staticClass:"row"},[n("h1",{staticClass:"mt-4 col"},[t.user.name?n("span",{staticClass:"name"},[t._v(t._s(t.user.firstName)+"'s")]):t._e(),t._v("\n        Training Log\n      ")])]),t._v(" "),n("div",{staticClass:"header row mb-2"},[n("div",{staticClass:"col d-flex align-items-center"},[n("h4",{staticClass:"mt-4 mb-0"},[t._v("Week of \n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.weekOf,expression:"weekOf"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.weekOf},on:{keyup:function(e){return"keyCode"in e&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeDate(t.weekOf)},input:function(e){e.target.composing||(t.weekOf=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col d-flex flex-row align-items-end"},[n("div",{staticClass:"btn btn-default log-pager ml-auto mr-2 today",on:{click:function(e){return t.changeDate(t.now)}}},[t._v(" Today ")]),t._v(" "),n("LogPagers",{attrs:{date:t.date,interval:"7"}})],1)]),t._v(" "),n("div",{staticClass:"week box row mt-3 mx-auto mb-3"},t._l(t.days,function(e){return n("div",{staticClass:"day col-lg d-flex flex-column"},[n("div",{staticClass:"calendar row p-2"},[n("div",{staticClass:"dow col"},[n("nuxt-link",{attrs:{to:"/user/log/"+e.url}},[t._v(t._s(e.dow)+" ")])],1),t._v(" "),n("div",{staticClass:"dom col",class:e.today?"today":""},[n("nuxt-link",{attrs:{to:"/user/log/"+e.url}},[t._v(t._s(e.dom)+" ")])],1)]),t._v(" "),n("div",{staticClass:"row mb-4 mb-lg-auto"},[n("div",{staticClass:"mt-auto mb-auto col-6 col-lg-12"},[e.totalMileage>0?n("div",{staticClass:"mt-auto"},[n("div",{staticClass:"mileage"},[t._v(" "+t._s(e.totalMileage||0)+" "),n("span",{staticClass:"unit"},[t._v(" mi ")])]),t._v(" "),n("div",{staticClass:"pace"},[t._v(" "+t._s(e.avgPace||"0:00")+" "),n("span",{staticClass:"unit"},[t._v(" min / mi ")])])]):e.rhr||e.sleep?n("div",[n("nuxt-link",{staticClass:"placeholder",attrs:{to:"/user/log/"+e.url}},[n("div",{staticClass:"mb-2"},[t._v(" Edit "),n("fa",{attrs:{icon:"pencil-alt"}})],1)])],1):n("div",{staticClass:"mt-3 mb-5"},[n("nuxt-link",{staticClass:"placeholder",attrs:{to:"/user/log/"+e.url}},[n("div",{staticClass:"mb-2"},[t._v(" Edit ")]),t._v(" "),n("fa",{attrs:{icon:"pencil-alt"}})],1)],1)]),t._v(" "),n("div",{staticClass:"col-6 col-lg-12"},[e.rhr||e.sleep?n("div",{staticClass:"mt-2"},[n("div",{staticClass:"stats mb-3"},[n("div",[n("fa",{staticClass:"mr-2",attrs:{icon:"heartbeat"}}),t._v(" "+t._s(e.rhr||"N/A")+" "),n("span",{staticClass:"unit ml-2"},[t._v(" BPM ")])],1),t._v(" "),n("div",[n("fa",{staticClass:"mr-2",attrs:{icon:"bed"}}),t._v(" "+t._s(e.sleep||"N/A")+" "),n("span",{staticClass:"unit ml-2"},[t._v(" hrs ")])],1)])]):t._e(),t._v(" "),!e.rhr&&!e.sleep&&e.totalMileage>0?n("div",{staticClass:"mx-auto mt-3"},[n("nuxt-link",{attrs:{to:"/user/log/"+e.url}},[t._v(" Add more "),n("fa",{attrs:{icon:"pencil-alt"}})],1)],1):t._e()])]),t._v(" "),e.runs?n("div",{staticClass:"feel mt-1",class:"f"+(e.runs[0]?e.runs[0].feel:"")}):t._e()])}),0),t._v(" "),n("div",{staticClass:"schedule row align-items-center mb-3"},[n("h4",{staticClass:"col-12 col-lg mb-2 mb-lg-0"},[t._v(" Schedule ")]),t._v(" "),t._l(t.days,function(e){return n("div",{staticClass:"col row item"},[n("div",{staticClass:"col-12 col-lg-6 label px-0"},[t._v(t._s(e.dow))]),t._v(" "),n("div",{staticClass:"col-12 col-lg-6 mileage px-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mileageGoal,expression:"day.mileageGoal"}],staticClass:"form-control",attrs:{placeholder:"0"},domProps:{value:e.mileageGoal},on:{keyup:function(n){return"keyCode"in n&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.updateSchedule(e.mileageGoal,e.url)},input:function(n){n.target.composing||t.$set(e,"mileageGoal",n.target.value)}}})])])}),t._v(" "),n("div",{staticClass:"col-12 col-lg d-flex align-items-center mt-3 mt-lg-0"},[n("h4",{staticClass:"d-inline-block mb-0"},[t._v(" Goal ")]),t._v(" "),n("div",{staticClass:"d-inline-block goal ml-3"},[t._v(" "+t._s(t.totalGoal||0)+" mi")])]),t._v(" "),n("div",{staticClass:"btn btn-small btn-primary",on:{click:function(e){return t.updateEntireSchedule()}}},[t._v(" \n        Save \n      ")])],2),t._v(" "),n("div",{staticClass:"stats row align-items-start"},[n("div",{staticClass:"box col-lg p-0"},[n("div",{staticClass:"row mb-2 px-3 pt-3 pb-0"},[n("h2",{staticClass:"col"},[t._v(" Total ")]),t._v(" "),n("div",{staticClass:"data col mb-2"},[n("span",{staticClass:"num"},[t._v(t._s(t.totalMileage))]),t._v(" mi")]),t._v(" "),n("Stat",{attrs:{value:Math.round(100*(t.totalGoal-t.totalMileage))/100||0,unit:" mi"}},[t._v(" left this week ")]),t._v(" "),n("Stat",{attrs:{value:t.totalElev,unit:" ft"}},[t._v(" elev. gain this week ")]),t._v(" "),0==t.totalMileage?n("div",{staticClass:"mx-auto mt-3 placeholder"},[t._v("\n            Add log entries to see stats\n          ")]):t._e()],1),t._v(" "),t.totalMileage>0&&t.mileageData.length>1?n("no-ssr",[n("Chart",{attrs:{data:t.mileageData,name:"mileage",color:"blue"}})],1):t._e()],1),t._v(" "),n("div",{staticClass:"sleep box col-lg p-0"},[n("div",[n("div",{staticClass:"row pt-3 px-3 pb-0 mb-2"},[n("h2",{staticClass:"col"},[t._v(" Avg Sleep ")]),t._v(" "),n("div",{staticClass:"data col mb-2"},[n("span",{staticClass:"num"},[t._v(t._s(t.avgSleep))]),t._v(" hrs")]),t._v(" "),n("Stat",{attrs:{value:t.sleepDifferential,unit:"%",comp:!0}},[t._v(" than last week ")]),t._v(" "),"0:00"==t.avgSleep?n("div",{staticClass:"mx-auto mt-3 placeholder"},[t._v(" \n              Add log entries to see stats\n            ")]):t._e()],1),t._v(" "),"0:00"!=t.avgSleep&&t.sleepData.length>1?n("no-ssr",{staticClass:"mt-2"},[n("Chart",{attrs:{data:t.sleepData,name:"sleep",color:"orange"}})],1):t._e()],1)]),t._v(" "),n("div",{staticClass:"box col-lg"},[n("div",{staticClass:"row mb-2"},[n("h2",{staticClass:"col"},[t._v(" Core ")]),t._v(" "),n("div",{staticClass:"data col"},[n("span",{staticClass:"num"},[t._v(t._s(t.getCheckPercentage("core"))+"%")])])]),t._v(" "),n("div",{staticClass:"row"},[n("h2",{staticClass:"col"},[t._v(" Stretching ")]),t._v(" "),n("div",{staticClass:"data col"},[n("span",{staticClass:"num"},[t._v(t._s(t.getCheckPercentage("stretching"))+"%")])])])])])])},[],!1,null,"ae9a85da",null);e.default=component.exports}}]);