exports.ids=[15],exports.modules={109:function(t,e,r){"use strict";r.r(e);var n=r(71),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},110:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"h1[data-v-e4858190]{font-size:25px}h2[data-v-e4858190]{font-size:17px;line-height:23px;font-style:italic;font-weight:400}.metadata[data-v-e4858190]{text-transform:uppercase;font-weight:500;color:#1e54a3;font-size:14px}",""])},111:function(t,e,r){"use strict";r.r(e);var n=r(72),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},112:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".page-content[data-v-e4858190] h2{font-size:20px}.page-content[data-v-e4858190] ul{list-style:circle}",""])},155:function(t,e,r){"use strict";r.r(e);var n={head(){let t=this.metadata||{};return{title:t.title+" - RaceBase",meta:[{hid:"OpenGraph Image",property:"og:image",content:this.imageLink},{hid:"OpenGraph Title",property:"og:title",content:t.title},{hid:"OpenGraph Description",property:"og:description",content:t.subtitle},{hid:"OpenGraph URL",property:"og:url",content:"https://racebase.io"+this.$route.fullPath},{hid:"Description",name:"description",content:t.subtitle}]}},async asyncData({$axios:t,params:e,env:r}){let n=await t.$get("posts/"+e.name);var content,o,c;if("ENOENT"==n.code)content="This post doesn't exist.";else{content=n.content,c="https://api.racebase.io"+"/images/fullsize/"+(o=n.data).image}return{content:content,metadata:o,imageLink:c,name:e.name}}},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-90 mx-auto",attrs:{itemscope:"",itemtype:"http://schema.org/Article"}},[t._ssrNode('<picture itemprop="image" class="mt-4 mb-3 mx-auto w-95 d-block" data-v-e4858190><source'+t._ssrAttr("srcset",t.imageLink+".webp")+' type="image/webp" data-v-e4858190> <source'+t._ssrAttr("srcset",t.imageLink+".jpg")+' type="image/jpeg" data-v-e4858190> <img'+t._ssrAttr("src",t.imageLink+".jpg")+' itemprop="image" class="mt-4 mb-3 mx-auto w-95 d-block" data-v-e4858190></picture> <h1 class="mt-4" data-v-e4858190>'+t._ssrEscape(" "+t._s(t.metadata.title)+" ")+"</h1> <h2 data-v-e4858190>"+t._ssrEscape(" "+t._s(t.metadata.subtitle)+" ")+"</h2> "),t._ssrNode('<div class="metadata mb-3" data-v-e4858190>',"</div>",[t._ssrNode('<span class="date mr-3" data-v-e4858190>',"</span>",[r("fa",{staticClass:"mr-1",attrs:{icon:"calendar-alt"}}),t._ssrNode(' <span itemprop="datePublished" data-v-e4858190>'+t._ssrEscape(" "+t._s(t.metadata.date)+" ")+"</span>")],2),t._ssrNode(" "),t._ssrNode('<span class="author" data-v-e4858190>',"</span>",[r("fa",{staticClass:"mr-1",attrs:{icon:"user-circle"}}),t._ssrNode(' <span itemprop="author" data-v-e4858190>'+t._ssrEscape(" "+t._s(t.metadata.author)+" ")+"</span>")],2),t._ssrNode(" "),t._ssrNode("<a"+t._ssrAttr("href","https://twitter.com/intent/tweet?text="+encodeURI("Check out this article on RaceBase! ")+"&url=https://racebase.io/post/"+t.name+"&hashtags=racebase")+' target="_blank" data-hashtags="racebase" class="ml-3" data-v-e4858190>',"</a>",[r("fa",{attrs:{icon:["fab","twitter"]}}),t._ssrNode(" Tweet\n    ")],2)],2),t._ssrNode(' <div itemprop="articleBody" class="page-content pb-5" data-v-e4858190>'+t._s(t.content)+"</div>")],2)},[],!1,function(t){var e=r(109);e.__inject__&&e.__inject__(t);var n=r(111);n.__inject__&&n.__inject__(t)},"e4858190","8b787c6e");e.default=component.exports},71:function(t,e,r){var content=r(110);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("08aca92d",content,!0,t)}},72:function(t,e,r){var content=r(112);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("79c961ca",content,!0,t)}}};
//# sourceMappingURL=77aaee5951a1ac54cde6.js.map