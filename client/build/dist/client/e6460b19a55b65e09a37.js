(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{426:function(t,e,r){"use strict";r.r(e),r.d(e,"timeStringToDecimal",(function(){return l})),r.d(e,"timeDecimalToString",(function(){return c})),r.d(e,"formatDateUrl",(function(){return d})),r.d(e,"getDateFromUrl",(function(){return v})),r.d(e,"getPace",(function(){return m}));r(95);var n=r(297),o=r.n(n);function l(t){if(!t)return 0;var a=t.split(":");return(60*+a[0]+ +a[1])/60}function c(t){var e=Math.floor(t),s=Math.round(60*(t-e));if(s>=60){var r=Math.floor(s/60);e+=r,s-=60*r}return s=("0"+s).slice(-2),"NaN"==e||"aN"==s?"0:00":e+":"+s}function d(t){return t.format("MM-DD-YYYY")}function v(s){return s&&o()(s,"MM-DD-YYYY").isValid()?o()(s,"MM-DD-YYYY").toDate():new Date}function m(time,t){if(!time||!t)return"0:00";var a=(time||"0:00").split(":");return c((60*+a[0]+ +a[1])/t/60)}},427:function(t,e,r){var map={"./af":298,"./af.js":298,"./ar":299,"./ar-dz":300,"./ar-dz.js":300,"./ar-kw":301,"./ar-kw.js":301,"./ar-ly":302,"./ar-ly.js":302,"./ar-ma":303,"./ar-ma.js":303,"./ar-sa":304,"./ar-sa.js":304,"./ar-tn":305,"./ar-tn.js":305,"./ar.js":299,"./az":306,"./az.js":306,"./be":307,"./be.js":307,"./bg":308,"./bg.js":308,"./bm":309,"./bm.js":309,"./bn":310,"./bn.js":310,"./bo":311,"./bo.js":311,"./br":312,"./br.js":312,"./bs":313,"./bs.js":313,"./ca":314,"./ca.js":314,"./cs":315,"./cs.js":315,"./cv":316,"./cv.js":316,"./cy":317,"./cy.js":317,"./da":318,"./da.js":318,"./de":319,"./de-at":320,"./de-at.js":320,"./de-ch":321,"./de-ch.js":321,"./de.js":319,"./dv":322,"./dv.js":322,"./el":323,"./el.js":323,"./en-SG":324,"./en-SG.js":324,"./en-au":325,"./en-au.js":325,"./en-ca":326,"./en-ca.js":326,"./en-gb":327,"./en-gb.js":327,"./en-ie":328,"./en-ie.js":328,"./en-il":329,"./en-il.js":329,"./en-nz":330,"./en-nz.js":330,"./eo":331,"./eo.js":331,"./es":332,"./es-do":333,"./es-do.js":333,"./es-us":334,"./es-us.js":334,"./es.js":332,"./et":335,"./et.js":335,"./eu":336,"./eu.js":336,"./fa":337,"./fa.js":337,"./fi":338,"./fi.js":338,"./fo":339,"./fo.js":339,"./fr":340,"./fr-ca":341,"./fr-ca.js":341,"./fr-ch":342,"./fr-ch.js":342,"./fr.js":340,"./fy":343,"./fy.js":343,"./ga":344,"./ga.js":344,"./gd":345,"./gd.js":345,"./gl":346,"./gl.js":346,"./gom-latn":347,"./gom-latn.js":347,"./gu":348,"./gu.js":348,"./he":349,"./he.js":349,"./hi":350,"./hi.js":350,"./hr":351,"./hr.js":351,"./hu":352,"./hu.js":352,"./hy-am":353,"./hy-am.js":353,"./id":354,"./id.js":354,"./is":355,"./is.js":355,"./it":356,"./it-ch":357,"./it-ch.js":357,"./it.js":356,"./ja":358,"./ja.js":358,"./jv":359,"./jv.js":359,"./ka":360,"./ka.js":360,"./kk":361,"./kk.js":361,"./km":362,"./km.js":362,"./kn":363,"./kn.js":363,"./ko":364,"./ko.js":364,"./ku":365,"./ku.js":365,"./ky":366,"./ky.js":366,"./lb":367,"./lb.js":367,"./lo":368,"./lo.js":368,"./lt":369,"./lt.js":369,"./lv":370,"./lv.js":370,"./me":371,"./me.js":371,"./mi":372,"./mi.js":372,"./mk":373,"./mk.js":373,"./ml":374,"./ml.js":374,"./mn":375,"./mn.js":375,"./mr":376,"./mr.js":376,"./ms":377,"./ms-my":378,"./ms-my.js":378,"./ms.js":377,"./mt":379,"./mt.js":379,"./my":380,"./my.js":380,"./nb":381,"./nb.js":381,"./ne":382,"./ne.js":382,"./nl":383,"./nl-be":384,"./nl-be.js":384,"./nl.js":383,"./nn":385,"./nn.js":385,"./pa-in":386,"./pa-in.js":386,"./pl":387,"./pl.js":387,"./pt":388,"./pt-br":389,"./pt-br.js":389,"./pt.js":388,"./ro":390,"./ro.js":390,"./ru":391,"./ru.js":391,"./sd":392,"./sd.js":392,"./se":393,"./se.js":393,"./si":394,"./si.js":394,"./sk":395,"./sk.js":395,"./sl":396,"./sl.js":396,"./sq":397,"./sq.js":397,"./sr":398,"./sr-cyrl":399,"./sr-cyrl.js":399,"./sr.js":398,"./ss":400,"./ss.js":400,"./sv":401,"./sv.js":401,"./sw":402,"./sw.js":402,"./ta":403,"./ta.js":403,"./te":404,"./te.js":404,"./tet":405,"./tet.js":405,"./tg":406,"./tg.js":406,"./th":407,"./th.js":407,"./tl-ph":408,"./tl-ph.js":408,"./tlh":409,"./tlh.js":409,"./tr":410,"./tr.js":410,"./tzl":411,"./tzl.js":411,"./tzm":412,"./tzm-latn":413,"./tzm-latn.js":413,"./tzm.js":412,"./ug-cn":414,"./ug-cn.js":414,"./uk":415,"./uk.js":415,"./ur":416,"./ur.js":416,"./uz":417,"./uz-latn":418,"./uz-latn.js":418,"./uz.js":417,"./vi":419,"./vi.js":419,"./x-pseudo":420,"./x-pseudo.js":420,"./yo":421,"./yo.js":421,"./zh-cn":422,"./zh-cn.js":422,"./zh-hk":423,"./zh-hk.js":423,"./zh-tw":424,"./zh-tw.js":424};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=427},484:function(t,e,r){var content=r(626);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("cb5b789e",content,!0,{sourceMap:!1})},624:function(t,e,r){t.exports=function(){"use strict";var t=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var r=Object.prototype.toString.call(t);return"[object RegExp]"===r||"[object Date]"===r||function(t){return t.$$typeof===e}(t)}(t)},e="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(t,e){return!1!==e.clone&&e.isMergeableObject(t)?l((r=t,Array.isArray(r)?[]:{}),t,e):t;var r}function n(t,source,e){return t.concat(source).map((function(element){return r(element,e)}))}function o(t,source,e){var n={};return e.isMergeableObject(t)&&Object.keys(t).forEach((function(o){n[o]=r(t[o],e)})),Object.keys(source).forEach((function(o){e.isMergeableObject(source[o])&&t[o]?n[o]=function(t,e){if(!e.customMerge)return l;var r=e.customMerge(t);return"function"==typeof r?r:l}(o,e)(t[o],source[o],e):n[o]=r(source[o],e)})),n}function l(e,source,l){(l=l||{}).arrayMerge=l.arrayMerge||n,l.isMergeableObject=l.isMergeableObject||t;var c=Array.isArray(source);return c===Array.isArray(e)?c?l.arrayMerge(e,source,l):o(e,source,l):r(source,l)}return l.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,r){return l(t,r,e)}),{})},l}()},625:function(t,e,r){"use strict";var n=r(484);r.n(n).a},626:function(t,e,r){(e=r(11)(!1)).push([t.i,"input[type=number][data-v-41a46c3e]::-webkit-inner-spin-button,input[type=number][data-v-41a46c3e]::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0}input[type=number][data-v-41a46c3e]{-moz-appearance:textfield!important}h1[data-v-41a46c3e]{font-size:32px;font-weight:500}h2[data-v-41a46c3e]{font-size:26px}h2[data-v-41a46c3e],h2.name[data-v-41a46c3e]{font-weight:400}h2.name[data-v-41a46c3e]{font-size:20px;color:#468df5}h3[data-v-41a46c3e]{font-size:18px;color:#000;font-weight:500;text-transform:uppercase;text-align:left}h4[data-v-41a46c3e]{text-transform:uppercase;font-size:14px;color:#b1b1b1;font-weight:400;display:table;height:auto}.day .btn-default[data-v-41a46c3e],.header.row .btn-default[data-v-41a46c3e],td .btn-default[data-v-41a46c3e]{box-shadow:none;border:1px solid #dadada;padding:3px 6px;text-transform:uppercase;color:#777;font-size:14px;font-weight:500}.day .btn-default.today[data-v-41a46c3e]{color:#468df5}.log-entry[data-v-41a46c3e]{border:1px solid #dadada;border-radius:7px}.log-entry .day[data-v-41a46c3e]{color:#777;font-size:20px}.log-entry .day[data-v-41a46c3e],.log-entry label[data-v-41a46c3e]{text-align:right;text-transform:uppercase}.log-entry label[data-v-41a46c3e]{font-size:15px;font-weight:500;display:inline-block;margin-bottom:0}.log-entry h2 input[data-v-41a46c3e]{font-size:22px;text-align:left}.log-entry .sliders input[data-v-41a46c3e],.log-entry h2 input[data-v-41a46c3e]{border:none}.log-entry input[data-v-41a46c3e]{border:1px solid #dadada;vertical-align:middle;border-radius:3px;color:#468df5}.log-entry input[data-v-41a46c3e]::-webkit-input-placeholder{font-size:18px;font-weight:400;text-align:center}.log-entry input[data-v-41a46c3e]::-moz-placeholder{font-size:18px;font-weight:400;text-align:center}.log-entry input[data-v-41a46c3e]:-ms-input-placeholder{font-size:18px;font-weight:400;text-align:center}.log-entry input[data-v-41a46c3e]::-ms-input-placeholder{font-size:18px;font-weight:400;text-align:center}.log-entry input[data-v-41a46c3e],.log-entry input[data-v-41a46c3e]::placeholder{font-size:18px;font-weight:400;text-align:center}.log-entry input[data-v-41a46c3e]::-webkit-input-placeholder{color:#b1b1b1}.log-entry input[data-v-41a46c3e]::-moz-placeholder{color:#b1b1b1}.log-entry input[data-v-41a46c3e]:-ms-input-placeholder{color:#b1b1b1}.log-entry input[data-v-41a46c3e]::-ms-input-placeholder{color:#b1b1b1}.log-entry input[data-v-41a46c3e]::placeholder{color:#b1b1b1}.log-entry .runs-list[data-v-41a46c3e]{border-top:1px solid #f3f3f3}.log-entry .runs-list .tag[data-v-41a46c3e]{font-size:15px;font-weight:500;vertical-align:middle;border-radius:4px;border:1px solid #ccc;padding:6px 12px;display:inline-block;white-space:nowrap;margin-bottom:9px;cursor:pointer}.log-entry .runs-list .tag .fa-trash-alt[data-v-41a46c3e]{color:#468df5}.log-entry .runs-list .btn-primary[data-v-41a46c3e]{font-weight:400;box-shadow:none;border:none}.log-entry .run-title[data-v-41a46c3e]{border-top:1px solid #f3f3f3}.log-entry .run-title input[data-v-41a46c3e]{border:none;text-align:left}.log-entry .run-title input[data-v-41a46c3e]::-webkit-input-placeholder{text-align:left}.log-entry .run-title input[data-v-41a46c3e]::-moz-placeholder{text-align:left}.log-entry .run-title input[data-v-41a46c3e]:-ms-input-placeholder{text-align:left}.log-entry .run-title input[data-v-41a46c3e]::-ms-input-placeholder{text-align:left}.log-entry .run-title input[data-v-41a46c3e]::placeholder{text-align:left}.log-entry .sliders h4[data-v-41a46c3e]{color:#000;font-weight:500}.log-entry .sliders .numbers[data-v-41a46c3e]{font-size:18px;font-weight:500}.log-entry .sliders .numbers .col[data-v-41a46c3e]{text-align:center}.log-entry .sliders .numbers .one[data-v-41a46c3e]{color:#e72970}.log-entry .sliders .numbers .two[data-v-41a46c3e]{color:#f67e2c}.log-entry .sliders .numbers .three[data-v-41a46c3e]{color:#1acbb0}.log-entry .sliders .numbers .four[data-v-41a46c3e]{color:#468df5}.log-entry .sliders .numbers .five[data-v-41a46c3e]{color:#802dc4}.log-entry .sliders .slider[data-v-41a46c3e]{display:block;width:95%;margin:0 auto;background:#ebebeb;border-radius:20px;height:7px}.log-entry .sliders .slider[data-v-41a46c3e]::-moz-range-thumb,.log-entry .sliders .slider[data-v-41a46c3e]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:15px;height:15px;border-radius:100px;background:#468df5;border:none;cursor:pointer}.log-entry .other[data-v-41a46c3e]{border-top:1px solid #f3f3f3}.log-entry .weights th[data-v-41a46c3e]{color:#b1b1b1;text-transform:uppercase;font-weight:400;font-size:15px;text-align:center}.log-entry .weights td[data-v-41a46c3e]{padding:7px;color:#468df5;font-weight:500;text-align:center}.log-entry .weights td input[data-v-41a46c3e]::-webkit-input-placeholder{font-size:20px;text-align:center}.log-entry .weights td input[data-v-41a46c3e]::-moz-placeholder{font-size:20px;text-align:center}.log-entry .weights td input[data-v-41a46c3e]:-ms-input-placeholder{font-size:20px;text-align:center}.log-entry .weights td input[data-v-41a46c3e]::-ms-input-placeholder{font-size:20px;text-align:center}.log-entry .weights td input[data-v-41a46c3e],.log-entry .weights td input[data-v-41a46c3e]::placeholder{font-size:20px;text-align:center}.log-entry .weights td.x[data-v-41a46c3e]{color:#b1b1b1}.log-entry .weights td.delete[data-v-41a46c3e]{cursor:pointer}.log-entry .weights td.exercise[data-v-41a46c3e]{width:37%}.log-entry .weights td.exercise input[data-v-41a46c3e]{border:none;color:#468df5;font-weight:400}.log-entry .weights td.exercise input[data-v-41a46c3e]::-webkit-input-placeholder{text-align:right;font-size:19px}.log-entry .weights td.exercise input[data-v-41a46c3e]::-moz-placeholder{text-align:right;font-size:19px}.log-entry .weights td.exercise input[data-v-41a46c3e]:-ms-input-placeholder{text-align:right;font-size:19px}.log-entry .weights td.exercise input[data-v-41a46c3e]::-ms-input-placeholder{text-align:right;font-size:19px}.log-entry .weights td.exercise input[data-v-41a46c3e],.log-entry .weights td.exercise input[data-v-41a46c3e]::placeholder{text-align:right;font-size:19px}.log-entry .bottom .btn[data-v-41a46c3e]{text-transform:uppercase;font-size:15px;font-weight:500;padding:4px 7px;display:table}.log-entry .bottom textarea[data-v-41a46c3e]{resize:none}.trends[data-v-41a46c3e]{font-size:17px;color:#777}.trends .stat[data-v-41a46c3e]{background:#468df5;color:#fff;border-radius:5px;padding:2px 6px;box-shadow:0 3px 7px 2px hsla(0,0%,74.5%,.36);margin-right:10px}.trends .stat-down[data-v-41a46c3e]{background:#e72970}.trends .stat-up[data-v-41a46c3e]{background:#1acbb0}.trends .row[data-v-41a46c3e]{margin:10px}.schedule h2[data-v-41a46c3e],.streaks h2[data-v-41a46c3e]{text-transform:uppercase;font-size:18px;font-weight:500;margin-bottom:0;text-align:left}.schedule .num[data-v-41a46c3e],.streaks .num[data-v-41a46c3e]{color:#468df5}.schedule .data[data-v-41a46c3e],.streaks .data[data-v-41a46c3e]{text-align:right;font-weight:500;font-size:21px;color:#777}.schedule[data-v-41a46c3e]{text-align:center}.schedule .day[data-v-41a46c3e]{text-align:left}.schedule .reps[data-v-41a46c3e]{font-size:21px;font-weight:500;color:#b1b1b1}.schedule .recovery[data-v-41a46c3e]{color:#777;text-transform:uppercase;font-weight:400;font-size:16px}.schedule .green[data-v-41a46c3e]{color:#1acbb0}.schedule .workout[data-v-41a46c3e]{font-size:19px;font-weight:500}.schedule .workout .num[data-v-41a46c3e]{font-weight:600}.schedule .workout .box[data-v-41a46c3e]{height:100%;margin-bottom:0}",""]),t.exports=e},804:function(t,e,r){"use strict";r.r(e);r(54),r(21),r(20),r(7),r(44),r(95),r(28);var n=r(25),o=(r(24),r(3)),l=r(538),c=r.n(l),d=r(624),v=r.n(d),m=r(432),h=r.n(m);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.a.tz.setDefault("America/Los_Angeles");var x,_=r(426),w=_.timeStringToDecimal,j=_.formatDateUrl,D=_.getDateFromUrl,C=_.getPace,k={runs:[{distance:"",time:"",elevationGain:"",difficulty:1,feel:5}],checks:{core:!1,stretching:!1},sleep:"",rhr:"",weight:0,note:""},z={components:{LogPagers:function(){return r.e(93).then(r.bind(null,759))}},head:function(){return{title:"Training Log "+c()(this.day).format("M/D/YY")+" - RaceBase"}},middleware:"auth",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,d,m,h,f,x,_,C,z,R,$,O,N,M,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.$axios,o=t.params,(l=y({},r.state.auth.user)).name?l.firstName=l.name.split(" ")[0]:l.firstName="",d=o.date,m=D(d),h=c()(m).format("MMMM D YYYY"),f=c()(m).format("ddd"),x=o.date||null,e.next=10,n.$get("log/"+x);case 10:return _=e.sent,C={},e.t0=Math,e.next=15,n.$get("log/avg/moving/rhr/"+d);case 15:return e.t1=e.sent.avg,e.t2=10*e.t1,e.t3=e.t0.round.call(e.t0,e.t2),C.rhr=e.t3/10,e.next=21,n.$get("log/avg/moving/sleep/"+d);case 21:return C.sleep=e.sent.avg,e.next=24,n.$get("log/streaks");case 24:return z=e.sent,R=v()(k,_),_.runs&&_.runs.length>0&&(R.runs=_.runs),$=w(C.sleep),O=(w(R.sleep)-$)/$*100,O=Math.round(10*O)/10,isFinite(O)||(O=0),N=!!R.weights,M=j(c()(m).add(1,"day")),e.next=35,n.$get("log/schedule/"+M);case 35:return P=e.sent.goal,e.abrupt("return",{user:l,id:l._id,dayUrl:d,entryData:R,originalData:JSON.parse(JSON.stringify(R)),currentDay:h,dow:f,didWeights:N,movingAvgs:C,sleepTrend:O,day:m,date:o.date,streaks:z,curRun:0,goalTomorrow:P,emptyEntry:k});case 37:case"end":return e.stop()}}),e)})))()},methods:{load:(x=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Math,t.next=3,this.$axios.$get("log/avg/moving/rhr/"+this.dayUrl);case 3:return t.t1=t.sent.avg,t.t2=10*t.t1,t.t3=t.t0.round.call(t.t0,t.t2),this.movingAvgs.rhr=t.t3/10,t.next=9,this.$axios.$get("log/avg/moving/sleep/"+this.dayUrl);case 9:return this.movingAvgs.sleep=t.sent.avg,t.next=12,this.$axios.$get("log/streaks");case 12:this.streaks=t.sent;case 13:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)}),submitEntry:function(){var t=this;this.entryData.runs[this.curRun].difficulty=parseInt(this.entryData.runs[this.curRun].difficulty),this.entryData.runs[this.curRun].feel=parseInt(this.entryData.runs[this.curRun].feel),this.didWeights||this.$set(this.entryData,"weights",null),this.$axios.$post("log/"+j(c()(this.currentDay)),this.entryData).then((function(e){e.entry=e||{},t.entryData=v()(t.emptyEntry,e),t.originalData=JSON.parse(JSON.stringify(t.entryData)),t.load()})).catch((function(t){console.log("Error submitting entry:"),console.log(t)}))},changeDate:function(t){var e=c()(t);e.isValid()&&this.$router.push("/user/log/"+j(e))},clear:function(){this.entryData=k},changeToPrev:function(){var t=j(c()(this.currentDay).subtract(1,"days"));this.$router.push("/user/log/"+t)},changeToNext:function(){var t=j(c()(this.currentDay).add(1,"days"));this.$router.push("/user/log/"+t)},addExercise:function(){this.entryData.weights.push({name:"",reps:0,sets:0})},deleteExercise:function(t){this.entryData.weights.splice(t,1),this.entryData.weights.length<1&&(this.$set(this.entryData,"weights",null),this.didWeights=!1)},revert:function(){this.entryData=JSON.parse(JSON.stringify(this.originalData))},newRun:function(){this.entryData.runs.push({}),this.curRun=this.entryData.runs.length-1},removeRun:function(i){i<=this.entryData.runs.length-1&&this.entryData.runs.splice(i,1),this.entryData.runs[0]||this.entryData.runs.push({}),this.curRun=0}},computed:{pace:function(){if(!this.entryData.runs)return"0:00";if(!this.entryData.runs[this.curRun])return"0:00";if(!this.entryData.runs[this.curRun].time||!this.entryData.runs[this.curRun].distance)return"0:00";var a=this.entryData.runs[this.curRun].time.split(":"),p=(60*+a[0]+ +a[1])/this.entryData.runs[this.curRun].distance/60,t=Math.floor(p),e=Math.round(60*(p-t));e=("0"+e).slice(-2);return C(this.entryData.runs[this.curRun].time,this.entryData.runs[this.curRun].distance)},modified:function(){return!h.a.isEqual(this.entryData,this.originalData)},isToday:function(){return j(c()())==this.date}},watch:{didWeights:function(){this.didWeights&&!this.entryData.weights&&this.$set(this.entryData,"weights",[{}])},$route:function(){this.date=this.$route.params.date||this.date}}},R=(r(625),r(16)),component=Object(R.a)(z,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto w-md-100 mx-md-0 px-md-4 container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col mt-3"},[t.user.name?r("h2",{staticClass:"name 4"},[t._v(" "+t._s(t.user.firstName)+"'s ")]):t._e(),t._v(" "),r("h1",[t._v(" \n        Training Log\n      ")])]),t._v(" "),r("div",{staticClass:"col d-flex align-items-center justify-content-end"},[r("nuxt-link",{staticClass:"mr-3 btn btn-outline-primary btn-small",attrs:{to:"/athlete/"+t.user.athlete_id+"/logs"}},[t._v("Monthly View")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-primary btn-small",attrs:{to:"/user/log/week/"}},[t._v("Weekly View")])],1)]),t._v(" "),r("div",{staticClass:"row mt-4 mb-5"},[r("div",{staticClass:"col-lg-8 col-md-12"},[r("div",{staticClass:"header row mb-2"},[r("div",{staticClass:"col d-flex"},[r("h4",{staticClass:"align-self-center mb-0"},[t._v("Log Entry "),r("fa",{staticClass:"ml-1",attrs:{icon:"book-open"}})],1)]),t._v(" "),r("div",{staticClass:"col d-flex flex-row align-items-end"},[r("LogPagers",{staticClass:"ml-auto",attrs:{date:t.date,interval:"1"}})],1)]),t._v(" "),r("form",{staticClass:"log-entry px-4 py-3"},[r("div",{staticClass:"row"},[r("h2",{staticClass:"col-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentDay,expression:"currentDay"}],staticClass:"d-inline-block",domProps:{value:t.currentDay},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeDate(t.currentDay)},input:function(e){e.target.composing||(t.currentDay=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col day"},[r("div",{staticClass:"btn btn-default mr-2 d-inline-block",on:{click:function(e){return t.changeDate(t.currentDay)}}},[t._v(" Go ")]),t._v(" "),r("div",{staticClass:"btn btn-default mr-2 d-inline-block",on:{click:t.clear}},[t._v(" Clear ")]),t._v(" "),t.isToday?t._e():r("div",{staticClass:"btn btn-default mr-3 d-inline-block today",on:{click:function(e){t.changeDate(new Date)}}},[t._v(" \n              Today \n            ")]),t._v("\n            "+t._s(t.dow)+"\n          ")])]),t._v(" "),r("div",{staticClass:"row align-items-center mt-2"},[t._m(0),t._v(" "),r("div",{staticClass:"col row align-items-center ml-auto"},[r("label",{staticClass:"col-7"},[t._v(" Mileage Goal ")]),t._v(" "),r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.mileageGoal,expression:"entryData.mileageGoal"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0.0"},domProps:{value:t.entryData.mileageGoal},on:{input:function(e){e.target.composing||t.$set(t.entryData,"mileageGoal",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"runs-list row mt-3 pt-3"},[t._l(t.entryData.runs,(function(e,n){return r("div",{staticClass:"tag ml-2"},[r("span",{on:{click:function(e){t.curRun=n}}},[t._v(" "+t._s(e.name||"Run "+Number(n+1))+" ")]),t._v(" "),r("fa",{staticClass:"ml-2",attrs:{icon:"trash-alt"},on:{click:function(e){return t.removeRun(n)}}})],1)})),t._v(" "),r("div",{staticClass:"btn btn-primary ml-2 tag",on:{click:function(e){return t.newRun()}}},[t._v(" Add Run ")])],2),t._v(" "),r("div",{staticClass:"run-title row mt-2 pt-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].name,expression:"entryData.runs[curRun].name"}],staticClass:"form-control col-7",attrs:{placeholder:"Run "+Number(t.curRun+1)},domProps:{value:t.entryData.runs[t.curRun].name},on:{input:function(e){e.target.composing||t.$set(t.entryData.runs[t.curRun],"name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"run row mt-2"},[r("div",{staticClass:"col-6 col-lg row align-items-center mb-2 mb-lg-0"},[r("label",{staticClass:"col-5"},[t._v(" Dist ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].distance,expression:"entryData.runs[curRun].distance"}],staticClass:"form-control col-7",attrs:{type:"number",placeholder:"0.0"},domProps:{value:t.entryData.runs[t.curRun].distance},on:{input:function(e){e.target.composing||t.$set(t.entryData.runs[t.curRun],"distance",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-6 col-lg row align-items-center mb-2 mb-lg-0"},[r("label",{staticClass:"col-5"},[t._v(" Time ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].time,expression:"entryData.runs[curRun].time"}],staticClass:"form-control col-7",attrs:{type:"text",placeholder:"0:00"},domProps:{value:t.entryData.runs[t.curRun].time},on:{input:function(e){e.target.composing||t.$set(t.entryData.runs[t.curRun],"time",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-6 col-lg row align-items-center mb-2 mb-lg-0"},[r("label",{staticClass:"col-5"},[t._v(" Pace ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.pace,expression:"pace"}],staticClass:"form-control col-7",attrs:{type:"text",placeholder:"0:00"},domProps:{value:t.pace},on:{input:function(e){e.target.composing||(t.pace=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-6 col-lg row align-items-center mb-2 mb-lg-0"},[r("label",{staticClass:"col-5"},[t._v(" Elev ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].elevationGain,expression:"entryData.runs[curRun].elevationGain"}],staticClass:"form-control col-7",attrs:{type:"number",placeholder:"0"},domProps:{value:t.entryData.runs[t.curRun].elevationGain},on:{input:function(e){e.target.composing||t.$set(t.entryData.runs[t.curRun],"elevationGain",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"sliders row mt-3"},[r("div",{staticClass:"col-12 col-lg-6 mb-3 mb-lg-0"},[r("h4",{staticClass:"mb-3"},[t._v(" Difficulty ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].difficulty,expression:"entryData.runs[curRun].difficulty"}],staticClass:"slider mb-2",attrs:{type:"range",min:"1",max:"5",step:"1"},domProps:{value:t.entryData.runs[t.curRun].difficulty},on:{__r:function(e){return t.$set(t.entryData.runs[t.curRun],"difficulty",e.target.value)}}}),t._v(" "),t._m(1)]),t._v(" "),r("div",{staticClass:"col-12 col-lg-6"},[r("h4",{staticClass:"mb-3"},[t._v(" Feel ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.runs[t.curRun].feel,expression:"entryData.runs[curRun].feel"}],staticClass:"slider mb-2",attrs:{type:"range",min:"1",max:"5",step:"1"},domProps:{value:t.entryData.runs[t.curRun].feel},on:{__r:function(e){return t.$set(t.entryData.runs[t.curRun],"feel",e.target.value)}}}),t._v(" "),t._m(2)])]),t._v(" "),r("div",{staticClass:"other row mt-4 pt-4"},[r("div",{staticClass:"col-6 col-lg row align-items-center mb-3 mb-lg-0"},[r("label",{staticClass:"col-6"},[t._v(" Sleep ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.sleep,expression:"entryData.sleep"}],staticClass:"form-control col-6",attrs:{type:"text",placeholder:"0:00"},domProps:{value:t.entryData.sleep},on:{input:function(e){e.target.composing||t.$set(t.entryData,"sleep",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-6 col-lg row align-items-center mb-3 mb-lg-0"},[r("label",{staticClass:"col-7"},[t._v(" RHR "),r("fa",{attrs:{icon:"heartbeat"}})],1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.rhr,expression:"entryData.rhr"}],staticClass:"form-control col-5",attrs:{type:"number",placeholder:"0"},domProps:{value:t.entryData.rhr},on:{input:function(e){e.target.composing||t.$set(t.entryData,"rhr",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-6 col-lg row align-items-center"},[r("div",{staticClass:"mx-auto"},[r("label",{staticClass:"mr-2"},[t._v(" Core ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.checks.core,expression:"entryData.checks.core"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.entryData.checks.core)?t._i(t.entryData.checks.core,null)>-1:t.entryData.checks.core},on:{change:function(e){var r=t.entryData.checks.core,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&t.$set(t.entryData.checks,"core",r.concat([null])):l>-1&&t.$set(t.entryData.checks,"core",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.entryData.checks,"core",o)}}})])]),t._v(" "),r("div",{staticClass:"col-6 col-lg row align-items-center"},[r("div",{staticClass:"mx-auto"},[r("label",{staticClass:"mr-2"},[t._v(" Stretching ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.entryData.checks.stretching,expression:"entryData.checks.stretching"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.entryData.checks.stretching)?t._i(t.entryData.checks.stretching,null)>-1:t.entryData.checks.stretching},on:{change:function(e){var r=t.entryData.checks.stretching,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&t.$set(t.entryData.checks,"stretching",r.concat([null])):l>-1&&t.$set(t.entryData.checks,"stretching",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.entryData.checks,"stretching",o)}}})])])]),t._v(" "),r("h3",{staticClass:"mt-5 mt-lg-4"},[t._v(" Weights "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.didWeights,expression:"didWeights"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.didWeights)?t._i(t.didWeights,null)>-1:t.didWeights},on:{change:function(e){var r=t.didWeights,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&(t.didWeights=r.concat([null])):l>-1&&(t.didWeights=r.slice(0,l).concat(r.slice(l+1)))}else t.didWeights=o}}})]),t._v(" "),t.didWeights?r("div",{staticClass:"weights row mx-auto w-95"},[r("div",{staticClass:"row"},[r("table",[t._m(3),t._v(" "),r("tbody",[t._l(t.entryData.weights,(function(e,n){return r("tr",[r("td",{staticClass:"exercise"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"exercise.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter exercise"},domProps:{value:e.name},on:{input:function(r){r.target.composing||t.$set(e,"name",r.target.value)}}})]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sets,expression:"exercise.sets"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0"},domProps:{value:e.sets},on:{input:function(r){r.target.composing||t.$set(e,"sets",r.target.value)}}})]),t._v(" "),r("td",{staticClass:"x"},[t._v(" x ")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.reps,expression:"exercise.reps"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0"},domProps:{value:e.reps},on:{input:function(r){r.target.composing||t.$set(e,"reps",r.target.value)}}})]),t._v(" "),r("td",{staticClass:"delete"},[r("fa",{attrs:{icon:"trash"},on:{click:function(e){return t.deleteExercise(n)}}})],1)])})),t._v(" "),r("tr",[r("td",{attrs:{colspan:"3"}}),t._v(" "),r("td",[r("div",{staticClass:"btn btn-default",on:{click:t.addExercise}},[t._v(" New Exercise ")])])])],2)])])]):t._e(),t._v(" "),r("div",{staticClass:"bottom row mt-3 mb-2"},[r("div",{staticClass:"col-md-8"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.entryData.note,expression:"entryData.note"}],staticClass:"form-control",attrs:{placeholder:"Add note..."},domProps:{value:t.entryData.note},on:{input:function(e){e.target.composing||t.$set(t.entryData,"note",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-4 d-flex flex-row align-items-end mt-3 mt-lg-0"},[t.modified?r("div",{staticClass:"btn btn-default mt-auto ml-auto",on:{click:function(e){return t.revert()}}},[t._v("\n              Revert\n            ")]):t._e(),t._v(" "),r("div",{staticClass:"btn btn-primary",class:t.modified?"ml-3":"ml-auto",on:{click:function(e){return t.submitEntry()}}},[t._v(" \n              Save"),t.modified?t._e():r("span",[t._v("d")]),t._v(" "),t.modified?t._e():r("fa",{staticClass:"ml-2",attrs:{icon:"check"}})],1)])])])]),t._v(" "),r("div",{staticClass:"col-12 col-lg-4 mt-3 mt-lg-0"},[r("h4",[t._v(" Trends "),r("fa",{staticClass:"ml-1",attrs:{icon:"chart-line"}})],1),t._v(" "),r("div",{staticClass:"trends box flat-box px-1 py-2"},[r("div",{staticClass:"row"},[r("span",{staticClass:"stat"},[t._v(" "+t._s(t.movingAvgs.sleep)+" hr ")]),t._v(" 5 day avg sleep")]),t._v(" "),r("div",{staticClass:"row"},[r("span",{staticClass:"stat",class:"stat-"+(t.sleepTrend>=0?"up":"down")},[t._v(" "+t._s(t.sleepTrend)+"% ")]),t._v(" \n          "+t._s(t.sleepTrend>=0?"more":"less")+" \n          sleep than usual \n        ")]),t._v(" "),r("div",{staticClass:"row"},[r("span",{staticClass:"stat"},[t._v(" "+t._s(t.movingAvgs.rhr)+" bpm ")]),t._v(" 5 day avg RHR ")])]),t._v(" "),r("h4",[t._v(" Streaks "),r("fa",{staticClass:"ml-1",attrs:{icon:"fire-alt"}})],1),t._v(" "),r("div",{staticClass:"streaks box flat-box py-2"},[r("div",{staticClass:"row flex align-items-center"},[r("h2",{staticClass:"col"},[t._v(" Core ")]),t._v(" "),r("div",{staticClass:"data col"},[r("span",{staticClass:"num"},[t._v(t._s(t.streaks.core||0))]),t._v(" day")])]),t._v(" "),r("div",{staticClass:"row flex align-items-center"},[r("h2",{staticClass:"col"},[t._v(" Stretching ")]),t._v(" "),r("div",{staticClass:"data col"},[r("span",{staticClass:"num"},[t._v(t._s(t.streaks.stretching||0))]),t._v(" day")])])]),t._v(" "),r("h4",[t._v(" Schedule "),r("fa",{staticClass:"ml-1",attrs:{icon:"calendar-alt"}})],1),t._v(" "),r("div",{staticClass:"schedule box flat-box"},[r("div",{staticClass:"day row flex align-items-center mb-2"},[r("h2",{staticClass:"col"},[t._v(" Today ")]),t._v(" "),r("div",{staticClass:"data col"},[r("span",{staticClass:"num"},[t._v(t._s(t.entryData.mileageGoal))]),t._v(" mi")])]),t._v(" "),r("div",{staticClass:"row flex align-items-center"},[r("h2",{staticClass:"col"},[t._v(" Tomorrow ")]),t._v(" "),r("div",{staticClass:"data col"},[r("span",{staticClass:"num"},[t._v(t._s(t.goalTomorrow))]),t._v(" mi")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-3 col-lg-6"},[e("h3",{staticClass:"mb-0"},[this._v(" Runs ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"numbers row"},[r("div",{staticClass:"col one"},[t._v(" 1 ")]),t._v(" "),r("div",{staticClass:"col two"},[t._v(" 2 ")]),t._v(" "),r("div",{staticClass:"col three"},[t._v(" 3 ")]),t._v(" "),r("div",{staticClass:"col four"},[t._v(" 4 ")]),t._v(" "),r("div",{staticClass:"col five"},[t._v(" 5 ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"numbers row"},[r("div",{staticClass:"col one"},[t._v(" 1 ")]),t._v(" "),r("div",{staticClass:"col two"},[t._v(" 2 ")]),t._v(" "),r("div",{staticClass:"col three"},[t._v(" 3 ")]),t._v(" "),r("div",{staticClass:"col four"},[t._v(" 4 ")]),t._v(" "),r("div",{staticClass:"col five"},[t._v(" 5 ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th"),this._v(" "),e("th",[this._v(" Sets ")]),this._v(" "),e("th"),this._v(" "),e("th",[this._v(" Reps ")]),this._v(" "),e("th")])])}],!1,null,"41a46c3e",null);e.default=component.exports}}]);