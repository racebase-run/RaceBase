(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{468:function(t,e,r){var content=r(589);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("0b4fdf32",content,!0,{sourceMap:!1})},588:function(t,e,r){"use strict";var n=r(468);r.n(n).a},589:function(t,e,r){(e=r(11)(!1)).push([t.i,".outline[data-v-2f4838b9]{width:auto;border-radius:5px;border:1px solid #dadada;padding:15px}h5[data-v-2f4838b9]{text-transform:uppercase;font-size:16px}",""]),t.exports=e},784:function(t,e,r){"use strict";r.r(e);r(54),r(21),r(20),r(7),r(44);var n=r(25),o=(r(24),r(3));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f,m,d={components:{GroupList:function(){return r.e(102).then(r.bind(null,832))}},middleware:"coach",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.store,o=l({},n.state.auth.user),e.next=4,r.$get("team/"+o.team_id+"/rosters");case 4:return c=e.sent,e.next=7,r.$get("team/"+o.team_id+"/workoutgroups");case 7:return f=e.sent,e.next=10,r.$get("team/"+o.team_id);case 10:return m=e.sent,e.abrupt("return",{rosters:c,team:m,groups:f});case 12:case"end":return e.stop()}}),e)})))()},methods:{createRoster:(m=Object(o.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("team/roster",{name:e});case 2:r=t.sent,this.rosters.push(r);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return m.apply(this,arguments)}),createGroup:(f=Object(o.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("team/workoutgroup",{name:e});case 2:r=t.sent,this.groups.push(r);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})}},v=(r(588),r(16)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-95 mx-auto mt-3"},[r("div",{staticClass:"mb-4"},[r("h5",[t._v(" "+t._s(t.team.name)+" ")]),t._v(" "),r("h4",[t._v(" Rosters ")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"outline"},[r("GroupList",{attrs:{type:"roster",team_id:t.team.team_id,groups:t.rosters},on:{new:t.createRoster}})],1)]),t._v(" "),r("div",[r("h5",[t._v(" "+t._s(t.team.name)+" ")]),t._v(" "),r("h4",[t._v(" Workout Groups ")]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"outline"},[r("GroupList",{attrs:{type:"group",team_id:t.team.team_id,groups:t.groups},on:{new:t.createGroup}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert alert-info d-inline-block mt-2"},[e("b",[this._v(" Note: ")]),this._v(" Rosters are public and can be seen by anyone \n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert alert-info d-inline-block mt-2"},[e("b",[this._v(" Note: ")]),this._v(" Workout Groups are private\n        ")])}],!1,null,"2f4838b9",null);e.default=component.exports}}]);