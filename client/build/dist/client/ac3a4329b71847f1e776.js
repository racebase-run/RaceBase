(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{425:function(t,e,n){"use strict";var r=n(5),o=n(31),c=n(38),l=n(147),d=n(73),m=n(17),j=n(55).f,v=n(74).f,f=n(13).f,h=n(428).trim,_=r.Number,y=_,k=_.prototype,x="Number"==c(n(96)(k)),C="trim"in String.prototype,D=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=C?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,m=l.length;i<m;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(x?m((function(){k.valueOf.call(n)})):"Number"!=c(n))?l(new y(D(e)),n,_):D(e)};for(var N,S=n(14)?j(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;S.length>w;w++)o(y,N=S[w])&&!o(_,N)&&f(_,N,v(y,N));_.prototype=k,k.constructor=_,n(18)(r,"Number",_)}},426:function(t,e,n){"use strict";n.r(e),n.d(e,"timeStringToDecimal",(function(){return c})),n.d(e,"timeDecimalToString",(function(){return l})),n.d(e,"formatDateUrl",(function(){return d})),n.d(e,"getDateFromUrl",(function(){return m})),n.d(e,"getPace",(function(){return j}));n(95);var r=n(297),o=n.n(r);function c(t){if(!t)return 0;var a=t.split(":");return(60*+a[0]+ +a[1])/60}function l(t){var e=Math.floor(t),s=Math.round(60*(t-e));if(s>=60){var n=Math.floor(s/60);e+=n,s-=60*n}return s=("0"+s).slice(-2),"NaN"==e||"aN"==s?"0:00":e+":"+s}function d(t){return t.format("MM-DD-YYYY")}function m(s){return s&&o()(s,"MM-DD-YYYY").isValid()?o()(s,"MM-DD-YYYY").toDate():new Date}function j(time,t){if(!time||!t)return"0:00";var a=(time||"0:00").split(":");return l((60*+a[0]+ +a[1])/t/60)}},427:function(t,e,n){var map={"./af":298,"./af.js":298,"./ar":299,"./ar-dz":300,"./ar-dz.js":300,"./ar-kw":301,"./ar-kw.js":301,"./ar-ly":302,"./ar-ly.js":302,"./ar-ma":303,"./ar-ma.js":303,"./ar-sa":304,"./ar-sa.js":304,"./ar-tn":305,"./ar-tn.js":305,"./ar.js":299,"./az":306,"./az.js":306,"./be":307,"./be.js":307,"./bg":308,"./bg.js":308,"./bm":309,"./bm.js":309,"./bn":310,"./bn.js":310,"./bo":311,"./bo.js":311,"./br":312,"./br.js":312,"./bs":313,"./bs.js":313,"./ca":314,"./ca.js":314,"./cs":315,"./cs.js":315,"./cv":316,"./cv.js":316,"./cy":317,"./cy.js":317,"./da":318,"./da.js":318,"./de":319,"./de-at":320,"./de-at.js":320,"./de-ch":321,"./de-ch.js":321,"./de.js":319,"./dv":322,"./dv.js":322,"./el":323,"./el.js":323,"./en-SG":324,"./en-SG.js":324,"./en-au":325,"./en-au.js":325,"./en-ca":326,"./en-ca.js":326,"./en-gb":327,"./en-gb.js":327,"./en-ie":328,"./en-ie.js":328,"./en-il":329,"./en-il.js":329,"./en-nz":330,"./en-nz.js":330,"./eo":331,"./eo.js":331,"./es":332,"./es-do":333,"./es-do.js":333,"./es-us":334,"./es-us.js":334,"./es.js":332,"./et":335,"./et.js":335,"./eu":336,"./eu.js":336,"./fa":337,"./fa.js":337,"./fi":338,"./fi.js":338,"./fo":339,"./fo.js":339,"./fr":340,"./fr-ca":341,"./fr-ca.js":341,"./fr-ch":342,"./fr-ch.js":342,"./fr.js":340,"./fy":343,"./fy.js":343,"./ga":344,"./ga.js":344,"./gd":345,"./gd.js":345,"./gl":346,"./gl.js":346,"./gom-latn":347,"./gom-latn.js":347,"./gu":348,"./gu.js":348,"./he":349,"./he.js":349,"./hi":350,"./hi.js":350,"./hr":351,"./hr.js":351,"./hu":352,"./hu.js":352,"./hy-am":353,"./hy-am.js":353,"./id":354,"./id.js":354,"./is":355,"./is.js":355,"./it":356,"./it-ch":357,"./it-ch.js":357,"./it.js":356,"./ja":358,"./ja.js":358,"./jv":359,"./jv.js":359,"./ka":360,"./ka.js":360,"./kk":361,"./kk.js":361,"./km":362,"./km.js":362,"./kn":363,"./kn.js":363,"./ko":364,"./ko.js":364,"./ku":365,"./ku.js":365,"./ky":366,"./ky.js":366,"./lb":367,"./lb.js":367,"./lo":368,"./lo.js":368,"./lt":369,"./lt.js":369,"./lv":370,"./lv.js":370,"./me":371,"./me.js":371,"./mi":372,"./mi.js":372,"./mk":373,"./mk.js":373,"./ml":374,"./ml.js":374,"./mn":375,"./mn.js":375,"./mr":376,"./mr.js":376,"./ms":377,"./ms-my":378,"./ms-my.js":378,"./ms.js":377,"./mt":379,"./mt.js":379,"./my":380,"./my.js":380,"./nb":381,"./nb.js":381,"./ne":382,"./ne.js":382,"./nl":383,"./nl-be":384,"./nl-be.js":384,"./nl.js":383,"./nn":385,"./nn.js":385,"./pa-in":386,"./pa-in.js":386,"./pl":387,"./pl.js":387,"./pt":388,"./pt-br":389,"./pt-br.js":389,"./pt.js":388,"./ro":390,"./ro.js":390,"./ru":391,"./ru.js":391,"./sd":392,"./sd.js":392,"./se":393,"./se.js":393,"./si":394,"./si.js":394,"./sk":395,"./sk.js":395,"./sl":396,"./sl.js":396,"./sq":397,"./sq.js":397,"./sr":398,"./sr-cyrl":399,"./sr-cyrl.js":399,"./sr.js":398,"./ss":400,"./ss.js":400,"./sv":401,"./sv.js":401,"./sw":402,"./sw.js":402,"./ta":403,"./ta.js":403,"./te":404,"./te.js":404,"./tet":405,"./tet.js":405,"./tg":406,"./tg.js":406,"./th":407,"./th.js":407,"./tl-ph":408,"./tl-ph.js":408,"./tlh":409,"./tlh.js":409,"./tr":410,"./tr.js":410,"./tzl":411,"./tzl.js":411,"./tzm":412,"./tzm-latn":413,"./tzm-latn.js":413,"./tzm.js":412,"./ug-cn":414,"./ug-cn.js":414,"./uk":415,"./uk.js":415,"./ur":416,"./ur.js":416,"./uz":417,"./uz-latn":418,"./uz-latn.js":418,"./uz.js":417,"./vi":419,"./vi.js":419,"./x-pseudo":420,"./x-pseudo.js":420,"./yo":421,"./yo.js":421,"./zh-cn":422,"./zh-cn.js":422,"./zh-hk":423,"./zh-hk.js":423,"./zh-tw":424,"./zh-tw.js":424};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=427},428:function(t,e,n){var r=n(8),o=n(37),c=n(17),l=n(429),d="["+l+"]",m=RegExp("^"+d+d+"*"),j=RegExp(d+d+"*$"),v=function(t,e,n){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),m=o[t]=d?e(f):l[t];n&&(o[n]=m),r(r.P+r.F*d,"String",o)},f=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(j,"")),t};t.exports=v},429:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},472:function(t,e,n){var content=n(597);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("77b36c0c",content,!0,{sourceMap:!1})},596:function(t,e,n){"use strict";var r=n(472);n.n(r).a},597:function(t,e,n){(e=n(11)(!1)).push([t.i,".header[data-v-34da6dc8]{text-transform:uppercase;font-weight:500;font-size:14px;border-bottom:1px solid #dadada}.averages-header[data-v-34da6dc8]{text-align:left;color:#468df5;border-top:1px solid #dadada}.split-table[data-v-34da6dc8]{border:1px solid #dadada;border-radius:5px}.split-table .split[data-v-34da6dc8]{font-size:20px}.split-table .averages[data-v-34da6dc8]{font-size:17px}.split-table .time[data-v-34da6dc8]{font-family:DS Digital;font-size:25px}.no-splits[data-v-34da6dc8]{padding:20px;text-align:center}.no-splits .big[data-v-34da6dc8]{font-size:20px;font-weight:500;text-transform:uppercase}.log-entry h4[data-v-34da6dc8]{text-transform:uppercase;font-size:18px}",""]),t.exports=e},788:function(t,e,n){"use strict";n.r(e);n(34),n(21),n(36),n(35),n(28),n(29),n(30);var r=n(51),o=(n(44),n(20),n(7),n(425),n(431)),c=n.n(o),l=n(426);function d(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw r}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var j=1.60934,v={components:{UnitSelector:function(){return n.e(106).then(n.bind(null,834))}},head:function(){return{title:"Split Calculator - RaceBase"}},data:function(){return{input:{distance:null,time:"",unit:"miles"},splits:[],unit:!1,projectedDist:null,projectedDistUnit:"miles",paceUnit:"miles"}},methods:{addSplit:function(){this.splits.push({distance:this.input.distance,time:this.input.time,unit:this.input.unit}),this.input.time=null},getPace:function(time,t,e){var n=e==this.paceUnit?1:"kilometers"==e?1/j:j;return Object(l.getPace)(time,t*n)},getProjection:function(time,t,e){var n=e==this.projectedDistUnit?1:"kilometers"==e?1/j:j,r=Object(l.timeStringToDecimal)(time),o=n*t;return Object(l.timeDecimalToString)(r/o*this.projectedDist)}},computed:{splitAverages:function(){var t,e={distance:0,time:0},n=d(this.splits);try{for(n.s();!(t=n.n()).done;){var r=t.value,o=r.unit==this.input.unit?1:"kilometers"==r.unit?1/j:j;e.distance+=Number(r.distance*o),e.time+=Object(l.timeStringToDecimal)(r.time)}}catch(t){n.e(t)}finally{n.f()}var c={};c.distance=Math.round(100*e.distance/this.splits.length)/100,c.time=Object(l.timeDecimalToString)(e.time/this.splits.length);var m=this.input.unit==this.paceUnit?1:"kilometers"==this.input.unit?1/j:j;return c.pace=Object(l.getPace)(c.time,c.distance*m),c.projection=this.getProjection(c.time,c.distance,this.input.unit),c},logEntry:function(){var t,e="",n=c.a.groupBy(this.splits,"distance"),o=d(Object.keys(n).reverse().entries());try{for(o.s();!(t=o.n()).done;){var l=Object(r.a)(t.value,2),m=l[0],j=l[1],v=n[j];v[0].unit;e+=v.length+" x "+j+" "+v[0].unit+" ",e+="(";var f,h=d(v.entries());try{for(h.s();!(f=h.n()).done;){var _=Object(r.a)(f.value,2),i=_[0];e+=_[1].time,i+1<v.length&&(e+=", ")}}catch(t){h.e(t)}finally{h.f()}e+=")",m+1<Object.keys(n).length&&(e+=", ")}}catch(t){o.e(t)}finally{o.f()}return e}}},f=(n(596),n(16)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container w-95 mt-4"},[n("h1",{staticClass:"mb-4"},[t._v(" Split Calculator "),n("fa",{attrs:{icon:"calculator"}})],1),t._v(" "),n("div",{staticClass:"settings d-flex mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.projectedDist,expression:"projectedDist"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Projected Distance"},domProps:{value:t.projectedDist},on:{input:function(e){e.target.composing||(t.projectedDist=e.target.value)}}}),t._v(" "),n("UnitSelector",{staticClass:"px-3",attrs:{name:"projectedDistUnit"},model:{value:t.projectedDistUnit,callback:function(e){t.projectedDistUnit=e},expression:"projectedDistUnit"}})],1),t._v(" "),n("div",{staticClass:"split-table mb-3"},[t.splits.length>0?n("div",[n("div",{staticClass:"d-flex header mb-2 py-2"},[n("div",{staticClass:"col"},[t._v(" Distance ")]),t._v(" "),n("div",{staticClass:"col"},[t._v(" Time ")]),t._v(" "),n("div",{staticClass:"col d-flex align-items-center"},[t._v(" \n          Pace (Min / \n          "),n("UnitSelector",{staticClass:"ml-2",attrs:{name:"paceUnit"},model:{value:t.paceUnit,callback:function(e){t.paceUnit=e},expression:"paceUnit"}}),t._v(")\n        ")],1),t._v(" "),n("div",{staticClass:"col"},[t._v(" Projected ")])]),t._v(" "),t._l(t.splits,(function(e){return n("div",{staticClass:"d-flex mb-2 split"},[n("div",{staticClass:"col"},[t._v(" "+t._s(e.distance)+" "+t._s("kilometers"==e.unit?"km":"mi")+" ")]),t._v(" "),n("div",{staticClass:"col time"},[t._v(" "+t._s(e.time)+" ")]),t._v(" "),n("div",{staticClass:"col time"},[t._v(" "+t._s(t.getPace(e.time,e.distance,e.unit))+" ")]),t._v(" "),n("div",{staticClass:"col time"},[t._v(" "+t._s(t.getProjection(e.time,e.distance,e.unit))+" ")])])})),t._v(" "),n("div",{staticClass:"averages-header header py-1 mb-2 pl-3"},[t._v(" Averages ")]),t._v(" "),n("div",{staticClass:"d-flex mb-2 averages"},[n("div",{staticClass:"col"},[t._v(" "+t._s(t.splitAverages.distance)+" "+t._s("kilometers"==t.input.unit?"km":"mi")+" ")]),t._v(" "),n("div",{staticClass:"col"},[t._v(" "+t._s(t.splitAverages.time)+" ")]),t._v(" "),n("div",{staticClass:"col"},[t._v(" "+t._s(t.splitAverages.pace)+" ")]),t._v(" "),n("div",{staticClass:"col"},[t._v(" "+t._s(t.splitAverages.projection)+" ")])])],2):n("div",{staticClass:"no-splits"},[n("div",{staticClass:"big"},[t._v(" No splits yet! ")]),t._v("\n      Add some below...\n    ")])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.distance,expression:"input.distance"}],staticClass:"form-control col mr-2",attrs:{type:"number",placeholder:"Distance"},domProps:{value:t.input.distance},on:{input:function(e){e.target.composing||t.$set(t.input,"distance",e.target.value)}}}),t._v(" "),n("UnitSelector",{staticClass:"px-3",attrs:{name:"splitUnit"},model:{value:t.input.unit,callback:function(e){t.$set(t.input,"unit",e)},expression:"input.unit"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.time,expression:"input.time"}],staticClass:"form-control col mr-2",attrs:{type:"text",placeholder:"Time"},domProps:{value:t.input.time},on:{input:function(e){e.target.composing||t.$set(t.input,"time",e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:t.addSplit}},[t._v(" Add Split ")])],1),t._v(" "),n("div",{staticClass:"mt-3 log-entry mb-5"},[n("h4",[t._v(" Log Entry ")]),t._v(" "),n("div",[t._v(" "+t._s(t.logEntry||"Add some splits to get started")+" ")])])])}),[],!1,null,"34da6dc8",null);e.default=component.exports}}]);