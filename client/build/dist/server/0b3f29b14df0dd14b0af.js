exports.ids=[75],exports.modules={324:function(e,t,r){"use strict";r.r(t);var o={async asyncData({$axios:e,redirect:t,params:r}){let o,n;try{o=await e.$post("team/join/"+r.joincode),n="Joined team"==o?"Successfully joined team":"Something went wrong"}catch(e){n=e.response.data}return{message:n}},middleware:"auth"},n=r(1),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-3 ml-4"},[e._ssrNode("<h2>"+e._ssrEscape(" "+e._s(e.message)+"! ")+"</h2> "),e._ssrNode("<div>","</div>",[e._ssrNode("Click "),r("nuxt-link",{attrs:{to:"/login"}},[e._v("here")]),e._ssrNode(" to log in")],2)],2)}),[],!1,null,null,"04178403");t.default=component.exports}};