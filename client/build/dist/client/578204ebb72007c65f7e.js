(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{806:function(e,t,r){"use strict";r.r(t);r(24);var n=r(3),c={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.params,e.redirect,c=!1,t.next=4,r.$post("user/verify/"+n.token);case 4:return"Successfully verified email"==(o=t.sent)&&(c=!0),t.abrupt("return",{response:o,success:c});case 7:case"end":return t.stop()}}),t)})))()}},o=r(16),component=Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mt-3 ml-4"},[t("h2",[this._v(" "+this._s(this.response)+"! ")]),this._v(" "),t("div",[this._v("Click "),t("nuxt-link",{attrs:{to:"/login"}},[this._v("here")]),this._v(" to log in")],1)])}),[],!1,null,null,null);t.default=component.exports}}]);