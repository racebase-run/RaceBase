(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{812:function(t,e,r){"use strict";r.r(e);r(20);var n=r(2),c={asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.params,e.redirect,c=!1,t.next=4,r.$post("user/verify/"+n.token);case 4:return"Successfully verified email"==(o=t.sent)&&(c=!0),t.abrupt("return",{response:o,success:c});case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},o=r(19),component=Object(o.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-3 ml-4"},[e("h2",[this._v(" "+this._s(this.response)+"! ")]),this._v(" "),e("div",[this._v("Click "),e("nuxt-link",{attrs:{to:"/login"}},[this._v("here")]),this._v(" to log in")],1)])},[],!1,null,null,null);e.default=component.exports}}]);