(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{425:function(t,e,n){"use strict";var r=n(5),o=n(31),c=n(38),l=n(147),m=n(73),f=n(17),j=n(55).f,d=n(74).f,v=n(13).f,h=n(428).trim,y=r.Number,w=y,_=y.prototype,k="Number"==c(n(96)(_)),x="trim"in String.prototype,z=function(t){var e=m(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=x?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(k?f((function(){_.valueOf.call(n)})):"Number"!=c(n))?l(new w(z(e)),n,y):z(e)};for(var N,D=n(14)?j(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;D.length>C;C++)o(w,N=D[C])&&!o(y,N)&&v(y,N,d(w,N));y.prototype=_,_.constructor=y,n(18)(r,"Number",y)}},426:function(t,e,n){"use strict";n.r(e),n.d(e,"timeStringToDecimal",(function(){return c})),n.d(e,"timeDecimalToString",(function(){return l})),n.d(e,"formatDateUrl",(function(){return m})),n.d(e,"getDateFromUrl",(function(){return f})),n.d(e,"getPace",(function(){return j}));n(95);var r=n(297),o=n.n(r);function c(t){if(!t)return 0;var a=t.split(":");return(60*+a[0]+ +a[1])/60}function l(t){var e=Math.floor(t),s=Math.round(60*(t-e));if(s>=60){var n=Math.floor(s/60);e+=n,s-=60*n}return s=("0"+s).slice(-2),"NaN"==e||"aN"==s?"0:00":e+":"+s}function m(t){return t.format("MM-DD-YYYY")}function f(s){return s&&o()(s,"MM-DD-YYYY").isValid()?o()(s,"MM-DD-YYYY").toDate():new Date}function j(time,t){if(!time||!t)return"0:00";var a=(time||"0:00").split(":");return l((60*+a[0]+ +a[1])/t/60)}},427:function(t,e,n){var map={"./af":298,"./af.js":298,"./ar":299,"./ar-dz":300,"./ar-dz.js":300,"./ar-kw":301,"./ar-kw.js":301,"./ar-ly":302,"./ar-ly.js":302,"./ar-ma":303,"./ar-ma.js":303,"./ar-sa":304,"./ar-sa.js":304,"./ar-tn":305,"./ar-tn.js":305,"./ar.js":299,"./az":306,"./az.js":306,"./be":307,"./be.js":307,"./bg":308,"./bg.js":308,"./bm":309,"./bm.js":309,"./bn":310,"./bn.js":310,"./bo":311,"./bo.js":311,"./br":312,"./br.js":312,"./bs":313,"./bs.js":313,"./ca":314,"./ca.js":314,"./cs":315,"./cs.js":315,"./cv":316,"./cv.js":316,"./cy":317,"./cy.js":317,"./da":318,"./da.js":318,"./de":319,"./de-at":320,"./de-at.js":320,"./de-ch":321,"./de-ch.js":321,"./de.js":319,"./dv":322,"./dv.js":322,"./el":323,"./el.js":323,"./en-SG":324,"./en-SG.js":324,"./en-au":325,"./en-au.js":325,"./en-ca":326,"./en-ca.js":326,"./en-gb":327,"./en-gb.js":327,"./en-ie":328,"./en-ie.js":328,"./en-il":329,"./en-il.js":329,"./en-nz":330,"./en-nz.js":330,"./eo":331,"./eo.js":331,"./es":332,"./es-do":333,"./es-do.js":333,"./es-us":334,"./es-us.js":334,"./es.js":332,"./et":335,"./et.js":335,"./eu":336,"./eu.js":336,"./fa":337,"./fa.js":337,"./fi":338,"./fi.js":338,"./fo":339,"./fo.js":339,"./fr":340,"./fr-ca":341,"./fr-ca.js":341,"./fr-ch":342,"./fr-ch.js":342,"./fr.js":340,"./fy":343,"./fy.js":343,"./ga":344,"./ga.js":344,"./gd":345,"./gd.js":345,"./gl":346,"./gl.js":346,"./gom-latn":347,"./gom-latn.js":347,"./gu":348,"./gu.js":348,"./he":349,"./he.js":349,"./hi":350,"./hi.js":350,"./hr":351,"./hr.js":351,"./hu":352,"./hu.js":352,"./hy-am":353,"./hy-am.js":353,"./id":354,"./id.js":354,"./is":355,"./is.js":355,"./it":356,"./it-ch":357,"./it-ch.js":357,"./it.js":356,"./ja":358,"./ja.js":358,"./jv":359,"./jv.js":359,"./ka":360,"./ka.js":360,"./kk":361,"./kk.js":361,"./km":362,"./km.js":362,"./kn":363,"./kn.js":363,"./ko":364,"./ko.js":364,"./ku":365,"./ku.js":365,"./ky":366,"./ky.js":366,"./lb":367,"./lb.js":367,"./lo":368,"./lo.js":368,"./lt":369,"./lt.js":369,"./lv":370,"./lv.js":370,"./me":371,"./me.js":371,"./mi":372,"./mi.js":372,"./mk":373,"./mk.js":373,"./ml":374,"./ml.js":374,"./mn":375,"./mn.js":375,"./mr":376,"./mr.js":376,"./ms":377,"./ms-my":378,"./ms-my.js":378,"./ms.js":377,"./mt":379,"./mt.js":379,"./my":380,"./my.js":380,"./nb":381,"./nb.js":381,"./ne":382,"./ne.js":382,"./nl":383,"./nl-be":384,"./nl-be.js":384,"./nl.js":383,"./nn":385,"./nn.js":385,"./pa-in":386,"./pa-in.js":386,"./pl":387,"./pl.js":387,"./pt":388,"./pt-br":389,"./pt-br.js":389,"./pt.js":388,"./ro":390,"./ro.js":390,"./ru":391,"./ru.js":391,"./sd":392,"./sd.js":392,"./se":393,"./se.js":393,"./si":394,"./si.js":394,"./sk":395,"./sk.js":395,"./sl":396,"./sl.js":396,"./sq":397,"./sq.js":397,"./sr":398,"./sr-cyrl":399,"./sr-cyrl.js":399,"./sr.js":398,"./ss":400,"./ss.js":400,"./sv":401,"./sv.js":401,"./sw":402,"./sw.js":402,"./ta":403,"./ta.js":403,"./te":404,"./te.js":404,"./tet":405,"./tet.js":405,"./tg":406,"./tg.js":406,"./th":407,"./th.js":407,"./tl-ph":408,"./tl-ph.js":408,"./tlh":409,"./tlh.js":409,"./tr":410,"./tr.js":410,"./tzl":411,"./tzl.js":411,"./tzm":412,"./tzm-latn":413,"./tzm-latn.js":413,"./tzm.js":412,"./ug-cn":414,"./ug-cn.js":414,"./uk":415,"./uk.js":415,"./ur":416,"./ur.js":416,"./uz":417,"./uz-latn":418,"./uz-latn.js":418,"./uz.js":417,"./vi":419,"./vi.js":419,"./x-pseudo":420,"./x-pseudo.js":420,"./yo":421,"./yo.js":421,"./zh-cn":422,"./zh-cn.js":422,"./zh-hk":423,"./zh-hk.js":423,"./zh-tw":424,"./zh-tw.js":424};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=427},428:function(t,e,n){var r=n(8),o=n(37),c=n(17),l=n(429),m="["+l+"]",f=RegExp("^"+m+m+"*"),j=RegExp(m+m+"*$"),d=function(t,e,n){var o={},m=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=m?e(v):l[t];n&&(o[n]=f),r(r.P+r.F*m,"String",o)},v=d.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(j,"")),t};t.exports=d},429:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},471:function(t,e,n){var content=n(595);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("2d14f56c",content,!0,{sourceMap:!1})},594:function(t,e,n){"use strict";var r=n(471);n.n(r).a},595:function(t,e,n){(e=n(11)(!1)).push([t.i,"thead th[data-v-0a39b60b]{border-top:none;font-weight:500;padding:0 10px}td[data-v-0a39b60b],thead th[data-v-0a39b60b]{text-align:center}.slider[data-v-0a39b60b]{display:block;width:100%;margin:0 auto;background:#ebebeb;border-radius:20px;height:7px}.slider[data-v-0a39b60b]::-moz-range-thumb,.slider[data-v-0a39b60b]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:15px;height:15px;border-radius:100px;background:#468df5;border:none;cursor:pointer}.pr[data-v-0a39b60b]{font-size:18px;text-transform:uppercase;text-align:center;font-weight:500}.pace[data-v-0a39b60b]{color:#468df5;font-size:28px;margin-left:3px;font-family:DS Digital}.output[data-v-0a39b60b]{margin:0 auto;width:95%;padding:20px;border-radius:5px;border:1px solid #dadada}.zone[data-v-0a39b60b]{text-transform:uppercase;font-weight:500;font-size:23px}.unit[data-v-0a39b60b]{text-transform:none;font-size:16px;font-weight:400}",""]),t.exports=e},787:function(t,e,n){"use strict";n.r(e);n(20),n(34),n(21),n(36),n(35),n(29),n(30),n(7),n(425),n(28);var r=n(426);function o(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,o=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){l=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw r}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={head:function(){return{title:"Pace Zones - RaceBase"}},data:function(){return{zones:[{name:"Anaerobic",range:[0,2.7]},{name:"V02",range:[2.7,5]},{name:"CV",range:[5,8.4]},{name:"LT",range:[8.4,14]},{name:"AT",range:[14,43]},{name:"Aerobic",range:[43,95]},{name:"Recovery",range:[95,null]}],input:{time:"",distance:0},scaleVal:0}},methods:{slowDown:function(t){return(1+t/160)*(e=30.5,n=this.k*t+1,Math.log(n)/Math.log(e));var e,n},calculatePace:function(t){return Object(r.timeDecimalToString)(this.paceLimit+this.slowDown(t))},calculatePaceDecimal:function(t){return this.paceLimit+this.slowDown(t)},getZone:function(t){var e,n=o(this.zones);try{for(n.s();!(e=n.n()).done;){var r=e.value,c=r.range[0],l=r.range[1];if(t>=c&&t<l)return r.name}}catch(t){n.e(t)}finally{n.f()}return"Recovery"}},computed:{timeDecimal:function(){return Object(r.timeStringToDecimal)(this.input.time)},pace:function(){return Object(r.getPace)(this.input.time,this.input.distance)},paceDecimal:function(){return Object(r.timeStringToDecimal)(this.pace)},k:function(){var t=Number(this.input.distance),e=this.paceLimit,p=this.paceDecimal;return(Math.pow(30.5,(p-e)/(t/160+1))-1)/t},paceLimit:function(){var t=Math.pow(1.46,this.paceDecimal);return t/(Number(this.input.distance)+t/(this.paceDecimal-2.57))+2.57},curDist:function(){return Math.pow(this.scaleVal,1.83)}}},m=(n(594),n(16)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto w-95 mt-4"},[n("h1",[t._v(" Pace Zone Calculator "),n("fa",{attrs:{icon:"calculator"}})],1),t._v(" "),n("p",[t._v(" Enter your PR for any distance below: ")]),t._v(" "),n("div",{staticClass:"container my-4"},[n("div",{staticClass:"row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.time,expression:"input.time"}],staticClass:"col mr-3 form-control",attrs:{type:"text",placeholder:"Finishing Time"},domProps:{value:t.input.time},on:{input:function(e){e.target.composing||t.$set(t.input,"time",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.distance,expression:"input.distance"}],staticClass:"col form-control",attrs:{type:"number",placeholder:"Distance"},domProps:{value:t.input.distance},on:{input:function(e){e.target.composing||t.$set(t.input,"distance",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"pr mb-3"},[t._v(" PR Pace: "),n("span",{staticClass:"pace"},[t._v(t._s(t.pace))]),t._v(" "),n("span",{staticClass:"unit"},[t._v(" min / mi ")])]),t._v(" "),n("div",{staticClass:"output"},[n("table",{staticClass:"table"},[n("thead",[n("tr",t._l(t.zones,(function(e){return n("th",[t._v(" \n            "+t._s(e.name)+"\n          ")])})),0)]),t._v(" "),n("tbody",[n("tr",t._l(t.zones,(function(e,r){return n("td",[t._v("\n            "+t._s(t.calculatePace(e.range[0]))+" - "+t._s(e.range[1]?t.calculatePace(e.range[1]):"INF")+"\n          ")])})),0)])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("div",[n("span",{staticClass:"pace"},[t._v(" "+t._s(t.calculatePace(t.curDist))+" ")]),t._v(" min / mi ")]),t._v(" "),n("div",{staticClass:"zone ml-auto"},[t._v(" "+t._s(t.getZone(t.curDist))+" ")])]),t._v(" "),n("div",{staticClass:"slider mt-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.scaleVal,expression:"scaleVal"}],staticClass:"slider mb-2",attrs:{type:"range",min:0,max:13,step:.2},domProps:{value:t.scaleVal},on:{__r:function(e){t.scaleVal=e.target.value}}})])])])}),[],!1,null,"0a39b60b",null);e.default=component.exports}}]);