(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{216:function(e,t,r){"use strict";var n=r(3),c=r(23),o=r(26),l=r(113),h=r(55),f=r(12),m=r(56).f,v=r(78).f,d=r(13).f,I=r(218).trim,N=n.Number,x=N,_=N.prototype,w="Number"==o(r(77)(_)),E="trim"in String.prototype,R=function(e){var t=h(e,!1);if("string"==typeof t&&t.length>2){var r,n,c,o=(t=E?t.trim():I(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+t}for(var code,l=t.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+t};if(!N(" 0o1")||!N("0b1")||N("+0x1")){N=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof N&&(w?f(function(){_.valueOf.call(r)}):"Number"!=o(r))?l(new x(R(t)),r,N):R(t)};for(var A,y=r(7)?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;y.length>C;C++)c(x,A=y[C])&&!c(N,A)&&d(N,A,v(x,A));N.prototype=_,_.constructor=N,r(15)(n,"Number",N)}},218:function(e,t,r){var n=r(5),c=r(25),o=r(12),l=r(219),h="["+l+"]",f=RegExp("^"+h+h+"*"),m=RegExp(h+h+"*$"),v=function(e,t,r){var c={},h=o(function(){return!!l[e]()||"​"!="​"[e]()}),f=c[e]=h?t(d):l[e];r&&(c[r]=f),n(n.P+n.F*h,"String",c)},d=v.trim=function(e,t){return e=String(c(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(m,"")),e};e.exports=v},219:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},689:function(e,t,r){"use strict";r.r(t);r(216),r(19);var n=r(1),c={components:{RaceTable:function(){return r.e(5).then(r.bind(null,702))}},head:function(){return{title:"All Races - RaceBase",meta:[{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.io/images/opengraph/races.png"},{hid:"OpenGraph Title",property:"og:title",content:"All Races"}]}},data:function(){return{searching:!1,typing:!1,searchInput:""}},asyncData:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n,c,o,l,h;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,c=n.page||"1",e.next=4,r.$get("race/list/"+c+"/10");case 4:return o=e.sent,e.next=7,r.$get("result/count");case 7:return l=e.sent,l=Number(l.count).toLocaleString(),h=o.page==o.pages,e.abrupt("return",{races:o.docs,count:l,currentPage:c,lastPage:h});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),methods:{search:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.searchInput){e.next=8;break}return e.next=3,this.$axios.$get("race/list/"+this.currentPage+"/10");case 3:r=e.sent,this.races=r.docs,this.lastPage=r.page==r.pages,e.next=9;break;case 8:this.$axios.$get("search/races/"+this.searchInput).then(function(e){!t||e.length>0?(n.races=e,n.searching=!0):n.searching=!1});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},o=r(18),component=Object(o.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"w-90 mx-auto"},[r("h1",{staticClass:"mt-4"},[e._v(" Races ")]),e._v(" "),r("div",{staticClass:"results-count mt-2 mb-3"},[e._v(e._s(e.count)+" results and counting")])]),e._v(" "),r("form",{staticClass:"search-form mb-3 w-90 mx-auto",on:{submit:function(t){return t.preventDefault(),e.search(!1)}}},[r("div",{staticClass:"input-group search home-search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.searchInput},on:{keyup:function(t){return e.search(!0)},input:function(t){t.target.composing||(e.searchInput=t.target.value)}}}),e._v(" "),r("span",{staticClass:"input-group-append",attrs:{id:"basic-addon2"}},[r("span",{staticClass:"input-group-text"},[r("fa",{attrs:{icon:"search"},on:{click:function(t){return e.search(!1)}}})],1)])])]),e._v(" "),r("RaceTable",{attrs:{races:e.races,lastPage:e.lastPage,currentPage:e.currentPage}})],1)},[],!1,null,"381c04cc",null);t.default=component.exports}}]);