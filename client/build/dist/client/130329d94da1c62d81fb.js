(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{418:function(e,t,n){"use strict";var r=n(4),c=n(24),o=n(27),d=n(130),l=n(57),h=n(15),f=n(58).f,R=n(84).f,m=n(16).f,v=n(421).trim,w=r.Number,x=w,N=w.prototype,I="Number"==o(n(83)(N)),_="trim"in String.prototype,E=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var n,r,c,o=(t=_?t.trim():v(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+t}for(var code,d=t.slice(2),i=0,h=d.length;i<h;i++)if((code=d.charCodeAt(i))<48||code>c)return NaN;return parseInt(d,r)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(I?h(function(){N.valueOf.call(n)}):"Number"!=o(n))?d(new x(E(t)),n,w):E(t)};for(var $,M=n(11)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;M.length>A;A++)c(x,$=M[A])&&!c(w,$)&&m(w,$,R(x,$));w.prototype=N,N.constructor=w,n(18)(r,"Number",w)}},421:function(e,t,n){var r=n(6),c=n(26),o=n(15),d=n(422),l="["+d+"]",h=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),R=function(e,t,n){var c={},l=o(function(){return!!d[e]()||"​"!="​"[e]()}),h=c[e]=l?t(m):d[e];n&&(c[n]=h),r(r.P+r.F*l,"String",c)},m=R.trim=function(e,t){return e=String(c(e)),1&t&&(e=e.replace(h,"")),2&t&&(e=e.replace(f,"")),e};e.exports=R},422:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},856:function(e,t,n){"use strict";n.r(t);n(418),n(20);var r=n(2),c=(n(42),{components:{RaceHeader:function(){return n.e(73).then(n.bind(null,876))},RaceActions:function(){return n.e(72).then(n.bind(null,877))},ResultEditor:function(){return n.e(14).then(n.bind(null,870))},RaceEditor:function(){return n.e(13).then(n.bind(null,872))},ResultsTable:function(){return n.e(74).then(n.bind(null,878))}},head:function(){return{title:this.currentRace.name+" - RaceBase",meta:[{hid:"OpenGraph title",property:"og:title",content:this.currentRace.name},{hid:"OpenGraph image",property:"og:image",content:"https://racebase.io/images/opengraph/results.png"},{hid:"OpenGraph description",property:"og:description",content:this.currentRace.date+" at "+this.currentRace.location}]}},computed:{isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}},asyncData:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,r,c,o,d,l,h,f,R,m,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.params,c=t.redirect,o=t.store,e.next=3,n.$get("race/"+r.id);case 3:if(d=e.sent,l={},h=r.gender||"mens",d.message){e.next=12;break}return e.next=9,n.$get("race/"+d._id+"/"+h+"/events");case 9:l=e.sent,e.next=13;break;case 12:c("/races/notfound");case 13:if(f=(f=Number(r.event)||0)<l.length?f:0,!o.getters["auth/isLoggedIn"]){e.next=21;break}return e.next=18,n.$get("race/vote/"+r.id).catch(function(e){console.log(e)});case 18:R=e.sent,e.next=22;break;case 21:R={};case 22:return e.next=24,n.$get("result/list/"+d._id+"/"+h+"/"+encodeURI(l[f])).catch(function(){c("/races/notfound")});case 24:return m=e.sent,e.next=27,n.$get("result/teamlist/"+d._id+"/"+h+"/"+encodeURI(l[f])).catch(function(){c("/races/notfound")});case 27:return v=e.sent,e.abrupt("return",{currentRace:d,eventList:l,eventNum:f,results:m,teamResults:v,gender:h,voteData:R});case 29:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),data:function(){return{message:"",editMode:!1,addMode:!1,editingRace:!1,currentResult:{}}},methods:{loadResults:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.$get("race/"+this.currentRace._id+"/"+this.gender+"/events").catch(function(){console.log("Something went wrong getting the events list.")});case 2:return this.eventList=e.sent,e.next=5,this.$axios.$get("result/list/"+this.currentRace._id+"/"+this.gender+"/"+encodeURI(this.eventList[this.eventNum])).catch(function(){console.log("Something went wrong.")});case 5:return this.results=e.sent,e.next=8,this.$axios.$get("result/teamlist/"+this.currentRace._id+"/"+this.gender+"/"+encodeURI(this.eventList[this.eventNum])).catch(function(){console.log("Something went wrong.")});case 8:this.teamResults=e.sent;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),loadRace:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,this.$axios.$get("race/"+this.currentRace._id);case 3:this.currentRace=e.sent,t&&this.loadResults();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),closeWindow:function(){this.addMode=!1,this.editMode=!1,this.editingRace=!1,this.currentResult={}},openAddWindow:function(){this.addMode=!0,this.editMode=!1,this.editingRace=!1},openEditWindow:function(e){this.addMode=!1,this.editMode=!0,this.currentResult=e},editRace:function(){this.addMode=!1,this.editMode=!1,this.addingRace=!1,this.editingRace=!0}},watch:{$route:function(){this.gender=this.$route.params.gender||this.gender,this.eventNum=this.$route.params.event||0,this.updateResults()}}}),o=n(14),component=Object(o.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mx-auto w-90 w-md-100 mx-md-0 pl-md-5"},[e.currentRace&&!e.message?n("RaceHeader",{attrs:{race:e.currentRace}}):e._e(),e._v(" "),e.message?e._e():n("RaceActions",{staticClass:"mb-3",attrs:{eventList:e.eventList,race:e.currentRace,gender:e.gender,voteData:e.voteData},on:{openAddWindow:e.openAddWindow,editRace:e.editRace,loadRace:e.loadRace}}),e._v(" "),n("ResultEditor",{attrs:{editMode:e.editMode,addMode:e.addMode,race:e.currentRace,currentResult:e.currentResult},on:{closeWindow:e.closeWindow,loadResults:e.loadResults}}),e._v(" "),n("RaceEditor",{attrs:{addingRace:!1,editingRace:e.editingRace,race:e.currentRace},on:{closeWindow:e.closeWindow,load:e.loadRace}}),e._v(" "),e.message?e._e():n("ResultsTable",{attrs:{eventList:e.eventList,eventNum:e.eventNum,results:e.results,teamResults:e.teamResults},on:{openEditWindow:e.openEditWindow}})],1)},[],!1,null,null,null);t.default=component.exports}}]);