exports.ids=[24],exports.modules={286:function(t,n,e){"use strict";e.r(n);var o={layout:"api",components:{Docs:()=>e.e(2).then(e.bind(null,345))},asyncData:async({$axios:t,params:n})=>({post:await t.$get("/docs/index")})},c=e(1),component=Object(c.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("Docs",[n("div",{staticClass:"container mt-4",domProps:{innerHTML:this._s(this.post.content)}})])}),[],!1,null,null,"05620c8b");n.default=component.exports}};