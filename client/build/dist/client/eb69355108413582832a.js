(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{519:function(t,e,r){var content=r(722);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("328fb89a",content,!0,{sourceMap:!1})},721:function(t,e,r){"use strict";var n=r(519);r.n(n).a},722:function(t,e,r){(e=r(11)(!1)).push([t.i,".meta[data-v-3612f421]{width:100%}.meta .author[data-v-3612f421],.meta .date[data-v-3612f421]{font-size:14px}.meta .delete[data-v-3612f421]{text-transform:uppercase;color:#e72970;font-size:13px;cursor:pointer}.meta .profile-pic[data-v-3612f421]{border-radius:3px;border:1px solid #dadada;width:23px;height:23px;overflow:hidden}.meta .author a[data-v-3612f421]{display:inline-block}",""]),t.exports=e},829:function(t,e,r){"use strict";r.r(e);r(297);var n={components:{ProfilePic:function(){return r.e(2).then(r.bind(null,825))}},props:["profilePicUrl","author","date","authorized","athleteId"]},o=(r(721),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"meta row align-items-center mx-auto p-2"},[r("div",{staticClass:"author d-flex align-items-center mr-0"},[r("ProfilePic",{staticClass:"mr-2 profile-pic d-inline-block",attrs:{url:t.profilePicUrl}}),t._v(" "),r("nuxt-link",{attrs:{to:"/athlete/"+t.athleteId}},[t._v("\n      "+t._s(t.author)+"\n    ")])],1),t._v(" "),r("div",{staticClass:"date ml-0"},[t._v("\n      on\n    "+t._s(t.date)+"\n  ")]),t._v(" "),t.authorized?r("div",{staticClass:"delete ml-auto",on:{click:function(e){return t.$emit("deletePost")}}},[t._v("\n    Delete\n  ")]):t._e()])}),[],!1,null,"3612f421",null);e.default=component.exports}}]);