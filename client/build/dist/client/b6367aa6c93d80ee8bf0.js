(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{808:function(e,t,r){"use strict";r.r(t);r(54),r(21),r(20),r(7),r(44);var n=r(25),o=(r(24),r(3));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h,f={components:{GroupEditor:function(){return r.e(18).then(r.bind(null,842))}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,h,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.store,o=e.params,c=l({},n.state.auth.user),t.next=4,r.$get("team/roster/"+o.rosterId);case 4:return h=t.sent,t.next=7,r.$get("team/"+c.team_id+"/athletes");case 7:return f=t.sent,t.abrupt("return",{roster:h,athletes:f,user:c,rosterId:o.rosterId});case 9:case"end":return t.stop()}}),t)})))()},methods:{save:(h=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in r=[],t)t[n]&&r.push(n);return e.next=4,this.$axios.$post("team/roster/"+this.rosterId+"/athletes",{athletes:r});case 4:o=e.sent,this.roster=l({},o);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})}},m=r(16),component=Object(m.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mx-auto w-95 mt-4"},[t("GroupEditor",{attrs:{group:this.roster,available:this.athletes,type:"roster",team_id:this.user.team_id},on:{save:this.save}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);