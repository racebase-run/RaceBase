exports.ids=[14],exports.modules={134:function(e,t,n){var content=n(268);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("7cda04ea",content,!0,e)}},267:function(e,t,n){"use strict";n.r(t);var r=n(134),d=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t.default=d.a},268:function(e,t,n){(t=n(2)(!1)).push([e.i,".checkbox[data-v-8b81fdec]{font-size:10px;padding:0;width:25px;height:25px;line-height:25px;color:#777}.btn-save[data-v-8b81fdec]{font-weight:600;text-transform:uppercase;font-size:13px;padding:6px 5px 3px;line-height:100%;height:auto}",""]),e.exports=t},365:function(e,t,n){"use strict";n.r(t);var r={props:["group","available","type","team_id"],data(){let e={};for(var t of this.available)e[t.athlete_id]=!1;for(var n of this.group.athletes)e[n]=!0;return{selected:e,original:{...e}}},methods:{save:function(){this.original={...this.selected},this.$emit("save",this.selected)}},computed:{saved:function(){for(var e of Object.keys(this.selected))if(this.selected[e]!=this.original[e])return!1;return!0}}},d=n(1);var component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._ssrNode('<h4 class="d-flex align-items-center" data-v-8b81fdec>',"</h4>",[e._ssrNode(e._ssrEscape("\n        "+e._s(e.group.name)+" \n        ")),e._ssrNode('<button class="btn btn-primary ml-3 btn-save" data-v-8b81fdec>',"</button>",[e._ssrNode(e._ssrEscape(" \n            "+e._s(e.saved?"Saved":"Save")+"\n            ")),e.saved?n("fa",{attrs:{icon:"check"}}):e._e()],2)],2),e._ssrNode(' <h5 class="mb-3" data-v-8b81fdec>'+e._ssrEscape(" @"+e._s(e.team_id)+" ")+"</h5> "),e._ssrNode("<div data-v-8b81fdec>","</div>",e._l(e.available,(function(t){return e._ssrNode('<div class="d-flex align-items-center mb-2" data-v-8b81fdec>',"</div>",[e._ssrNode("<button"+e._ssrClass("btn checkbox mr-2",e.selected[t.athlete_id]?"btn-primary":"btn-default")+" data-v-8b81fdec>","</button>",[e.selected[t.athlete_id]?n("fa",{attrs:{icon:"check"}}):n("fa",{attrs:{icon:"times"}})],1),e._ssrNode(" "),n("nuxt-link",{attrs:{to:"/athlete/"+t.athlete_id}},[e._v(" \n                @"+e._s(t.athlete_id)+"\n            ")])],2)})),0)],2)}),[],!1,(function(e){var t=n(267);t.__inject__&&t.__inject__(e)}),"8b81fdec","38f30c6c");t.default=component.exports}};