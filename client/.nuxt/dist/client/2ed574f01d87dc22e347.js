(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{404:function(t,a,s){var e=s(528);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,s(11).default)("1dd827cb",e,!0,{})},527:function(t,a,s){"use strict";var e=s(404);s.n(e).a},528:function(t,a,s){(t.exports=s(10)(!1)).push([t.i,"",""])},569:function(t,a,s){"use strict";s.r(a);var e={props:["races","lastPage","currentPage"]},r=(s(527),s(17)),n=Object(r.a)(e,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.races?t._e():s("h3",{staticClass:"no-results"},[t._v(" No results! ")]),t._v(" "),s("div",{staticClass:"table-responsive w-90 mx-auto"},[s("table",{staticClass:"table table-striped mb-0"},[s("tbody",t._l(t.races,function(a){return s("tr",[s("td",{staticClass:"vote-data d-flex align-items-center"},[s("div",{staticClass:"votes"},[s("div",[s("b",[t._v(t._s(a.upvotes||0))])]),t._v(" "),s("fa",{attrs:{icon:["far","thumbs-up"]}})],1),t._v(" "),s("div",{staticClass:"votes"},[s("div",[s("b",[t._v(t._s(a.downvotes||0))])]),t._v(" "),s("fa",{attrs:{icon:["far","thumbs-down"]}})],1)]),t._v(" "),s("td",{staticClass:"race-data"},[s("router-link",{staticClass:"race-title",attrs:{to:"/races/"+a._id}},[t._v(t._s(a.name))]),t._v(" "),s("div",{staticClass:"metadata"},[s("span",{staticClass:"mr-2"},[t._v("\n                "+t._s(a.date)+"\n              ")]),t._v(" "),s("span",{staticClass:"mr-2"},[t._v("\n                 "),s("fa",{staticClass:"divider",attrs:{icon:"map-marker-alt"}}),t._v("\n                "+t._s(a.location)+"\n              ")],1),t._v(" "),s("span",{},[s("fa",{attrs:{icon:"user"}}),t._v("\n                "+t._s(a.user)+"\n              ")],1)])],1),t._v(" "),s("td",{staticClass:"verified-data"})])}),0)])]),t._v(" "),s("div",{staticClass:"btn-group-wrap mt-3 w-90 mx-auto pb-5"},[s("div",{staticClass:"btn-group pager",attrs:{role:"pager","aria-label":"Pager"}},[t.currentPage>1?s("nuxt-link",{staticClass:"btn btn-default",attrs:{to:{params:{page:Number(t.currentPage)-1}}}},[t._v("\n        Prev\n      ")]):t._e(),t._v(" "),t.lastPage?t._e():s("nuxt-link",{staticClass:"btn btn-default",attrs:{to:{params:{page:Number(t.currentPage)+1}}}},[t._v("\n        Next\n      ")])],1)])])},[],!1,null,"5e701356",null);n.options.__file="RaceTable.vue";a.default=n.exports}}]);