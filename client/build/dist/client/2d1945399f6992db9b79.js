(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{461:function(t,e,n){var content=n(568);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("78e2bb76",content,!0,{sourceMap:!1})},567:function(t,e,n){"use strict";var r=n(461);n.n(r).a},568:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".code[data-v-202b86a4]{font-family:Source Code Pro}.meta[data-v-202b86a4]{font-size:14px}",""])},722:function(t,e,n){"use strict";n.r(e);n(22);var r=n(2),o={asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.params,t.next=3,n.$get("/docs/blog/"+r.url);case 3:return o=t.sent,t.abrupt("return",{post:o});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),layout:"api"},c=(n(567),n(14)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-4"},[n("h1",[t._v(" "+t._s(t.post.data.title)+" ")]),t._v(" "),n("div",{staticClass:"code meta d-flex align-items-center mb-2"},[t._v("\n    Posted by "),n("strong",[t._v(t._s(t.post.data.author))]),t._v(", \n    "+t._s(t.post.data.date)+"\n  ")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.post.content)}})])},[],!1,null,"202b86a4",null);e.default=component.exports}}]);