(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{790:function(t,e,n){"use strict";n.r(e);n(34),n(36),n(35),n(28),n(29),n(30),n(54),n(21),n(20),n(7),n(44);var r=n(25),o=(n(24),n(3));n(431);function c(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw r}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f,d={middleware:"coach",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,v,f,d,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.$router,r=t.store,o=m({},r.state.auth.user),e.next=4,n.$get("team/public/"+o.team_id);case 4:return l=e.sent,e.next=7,n.$get("/team/"+o.team_id+"/active");case 7:v=e.sent,f=c(v);try{for(f.s();!(d=f.n()).done;)(a=d.value).showInvite=!1,a.sentInvite=!1}catch(t){f.e(t)}finally{f.f()}return e.abrupt("return",{team:l,active:v});case 11:case"end":return e.stop()}}),e)})))()},methods:{inviteAthlete:(f=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$post("/team/invite/"+e.athlete_id);case 3:t.sent,e.sentInvite=!0,e.showInvite=!1,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.response.data);case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(t){return f.apply(this,arguments)})},computed:{user:function(){return this.$store.state.auth.user}}},h=n(16),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto w-95 mt-4"},[t.team?n("h1",[t._v(" \n        "+t._s(t.team.name||"Your Team")+"\n    ")]):n("h1",[t._v(" The team you belong to no longer exists. ")]),t._v(" "),n("div",{staticClass:"mb-3"},[t._v(" @"+t._s(t.team.team_id)+" ")]),t._v(" "),n("div",{staticClass:"mb-3"},[n("button",{staticClass:"btn btn-default"},[n("nuxt-link",{attrs:{to:"/team/edit"}},[n("fa",{staticClass:"mr-1",attrs:{icon:"pencil-alt"}}),t._v(" Edit Team Info ")],1)],1),t._v(" "),n("button",{staticClass:"btn btn-default"},[n("nuxt-link",{attrs:{to:"/team/rosters"}},[n("fa",{staticClass:"mr-1",attrs:{icon:"users"}}),t._v(" Rosters and Groups ")],1)],1),t._v(" "),n("button",{staticClass:"btn btn-default"},[n("nuxt-link",{attrs:{to:"/team/schedule"}},[n("fa",{staticClass:"mr-1",attrs:{icon:"calendar-alt"}}),t._v(" Meet Schedule ")],1)],1)]),t._v(" "),n("h5",[t._v(" Active Athletes ")]),t._v(" "),n("div",{staticClass:"active section mb-4"},t._l(t.active,(function(e){return n("div",{staticClass:"athlete p-2"},[n("div",{staticClass:"d-flex align-items-center"},[n("ProfilePic",{staticClass:"profile-pic mr-2",attrs:{url:e.profilePicUrl}}),t._v(" "),n("div",{staticClass:"ml-2"},[n("div",{staticClass:"name"},[t._v(" "+t._s(e.name)+" ")]),t._v(" "),n("nuxt-link",{attrs:{to:"/athlete/"+e.athlete_id}},[t._v(" \n              @"+t._s(e.athlete_id)+" \n            ")])],1),t._v(" "),n("div",{staticClass:"ml-auto"},[e.team_id==t.team.team_id?n("button",{staticClass:"btn btn-default btn-small",attrs:{disabled:""}},[t._v("\n              Joined "),n("fa",{staticClass:"ml-2",attrs:{icon:"check"}})],1):e.name?n("div",[e.sentInvite?n("div",{staticClass:"btn btn-dark btn-small"},[n("fa",{attrs:{icon:"check"}}),t._v(" Invited\n              ")],1):n("div",{staticClass:"btn btn-primary btn-small",on:{click:function(t){e.showInvite=!0}}},[n("fa",{staticClass:"mr-1",attrs:{icon:"envelope"}}),t._v("Invite\n              ")],1)]):t._e()])],1),t._v(" "),e.showInvite&&!e.sentInvite?n("div",{staticClass:"mt-2"},[t._v(" \n          Are you sure? This will "),n("strong",[t._v("send an email")]),t._v(" to "+t._s(e.name)+". \n          "),n("div",{staticClass:"d-flex align-items-center mt-2"},[n("div",{staticClass:"btn-small btn btn-outline-primary mr-2",on:{click:function(n){return t.inviteAthlete(e)}}},[t._v("Yes, send invite")]),t._v(" "),n("div",{staticClass:"btn-small btn btn-outline-danger",on:{click:function(t){e.showInvite=!1}}},[t._v("No")])])]):t._e()])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);