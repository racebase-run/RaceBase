(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{528:function(t,n,e){var content=e(741);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("85fb28de",content,!0,{sourceMap:!1})},740:function(t,n,e){"use strict";var l=e(528);e.n(l).a},741:function(t,n,e){(n=e(11)(!1)).push([t.i,".version[data-v-5b85360a]{padding:0;width:25px;height:25px;line-height:25px;border-radius:5px;font-size:16.66666667px;font-weight:600;margin:0 auto;display:block}.title[data-v-5b85360a]{border-bottom:1px solid #dadada}.title .btn[data-v-5b85360a]{font-size:12px;padding:3px 7px}.title .btn[data-v-5b85360a],h4[data-v-5b85360a]{text-transform:uppercase}h4[data-v-5b85360a]{font-size:18px}.label[data-v-5b85360a]{width:100px;text-align:right;margin-right:15px}.data[data-v-5b85360a]{font-weight:500}.version[data-v-5b85360a]{margin:0}.version[data-v-5b85360a]:hover{cursor:default}",""]),t.exports=n},840:function(t,n,e){"use strict";e.r(n);var l={props:["doc","root"],data:function(){return{confirmed:!1}}},d=(e(740),e(16)),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"title d-flex align-items-center mb-3 pb-3 pl-3"},[e("h4",{staticClass:"mb-0 mr-3"},[t._v(" Result Info ")]),t._v(" "),e("nuxt-link",{staticClass:"btn btn-default mr-2",attrs:{to:"/result/edit/"+t.doc._id}},[t._v("\n            Edit "),e("fa",{staticClass:"ml-1",attrs:{icon:"pencil-alt"}})],1),t._v(" "),t.root?e("div",[t.confirmed?e("div",{staticClass:"d-flex"},[e("button",{staticClass:"btn btn-danger mr-2",on:{click:function(n){return t.$emit("deleteResult",t.doc._id)}}},[t._v("\n                    Confirm "),e("fa",{attrs:{icon:"check"}})],1),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:function(n){t.confirmed=!1}}},[t._v(" \n                    Cancel "),e("fa",{attrs:{icon:"times"}})],1)]):e("button",{staticClass:"btn btn-default",on:{click:function(n){t.confirmed=!0}}},[t._v(" \n                Delete "),e("fa",{staticClass:"ml-1",attrs:{icon:["fas","trash-alt"]}})],1)]):t._e()],1),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"label"},[t._v("\n            Version\n        ")]),t._v(" "),e("div",{staticClass:"data version btn btn-primary"},[t._v(" \n            "+t._s(t.doc.version||1)+"\n        ")])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"label"},[t._v("\n            Race\n        ")]),t._v(" "),e("div",{staticClass:"data"},[e("nuxt-link",{attrs:{to:"/races/"+t.doc.race_id}},[t._v(" "+t._s(t.doc.race)+" ")])],1)]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"label"},[t._v("\n            Event\n        ")]),t._v(" "),e("div",{staticClass:"data"},[t._v(" \n            "+t._s(t.doc.event)+"\n        ")])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"label"},[t._v("\n            Athlete\n        ")]),t._v(" "),e("div",{staticClass:"data"},[t._v(" \n            "+t._s(t.doc.athlete)+"\n        ")])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"label"},[t._v("\n            Athlete ID\n        ")]),t._v(" "),e("div",{staticClass:"data"},[e("nuxt-link",{attrs:{to:"/athlete/"+t.doc.athlete_id}},[t._v(" \n                "+t._s(t.doc.athlete_id)+"\n            ")])],1)]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"label"},[t._v("\n            Team\n        ")]),t._v(" "),e("div",{staticClass:"data"},[t._v(" \n            "+t._s(t.doc.team)+"\n        ")])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"label"},[t._v("\n            Team ID\n        ")]),t._v(" "),e("div",{staticClass:"data"},[e("nuxt-link",{attrs:{to:"/team/"+t.doc.team_id}},[t._v(" \n                "+t._s(t.doc.team_id)+"\n            ")])],1)]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"label"},[t._v("\n            Time\n        ")]),t._v(" "),e("div",{staticClass:"data"},[t._v(" \n            "+t._s(t.doc.time)+"\n        ")])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"label"},[t._v("\n            Place\n        ")]),t._v(" "),e("div",{staticClass:"data"},[t._v(" \n            "+t._s(t.doc.place)+"\n        ")])])])}),[],!1,null,"5b85360a",null);n.default=component.exports}}]);