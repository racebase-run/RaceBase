exports.ids=[36],exports.modules={317:function(t,e,r){"use strict";r.r(e);var l={head:()=>({title:"New Post - RaceBase"}),components:{NewPost:()=>r.e(9).then(r.bind(null,350))},middleware:"auth",async asyncData({store:t,params:e,$axios:r}){let l,n=t.state.auth.user;try{l=await r.$get("/result/"+e.resultId)}catch(t){l=null,console.log(t.response.data)}return{user:n,result:l,alert:""}},methods:{createdPost:function(){this.alert="Successfully created post!"}}},n=r(1),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-4 mx-auto w-95"},[r("NewPost",{attrs:{user:t.user,result:t.result,standalone:!0},on:{callback:function(e){return t.createdPost()}}}),t._ssrNode(" "),t.alert?t._ssrNode('<div class="mt-3 alert alert-primary alert-dismissable">',"</div>",[t._ssrNode(t._ssrEscape("\n    "+t._s(t.alert)+"\n\n    ")),t._ssrNode('<button type="button" data-dismiss="alert" aria-label="Close" class="close">',"</button>",[t._ssrNode('<span aria-hidden="true">',"</span>",[r("fa",{attrs:{icon:"times"}})],1)])],2):t._e()],2)}),[],!1,null,null,"5db62519");e.default=component.exports}};