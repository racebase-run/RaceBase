(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{238:function(t,e,a){var s=a(300);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("26a8cb32",s,!0,{})},239:function(t,e,a){var s=a(302);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("cf74ad56",s,!0,{})},299:function(t,e,a){"use strict";var s=a(238);a.n(s).a},300:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,"h1[data-v-e4858190]{font-size:25px}h2[data-v-e4858190]{font-size:17px;line-height:23px;font-style:italic;font-weight:400}.metadata[data-v-e4858190]{text-transform:uppercase;font-weight:500;color:#1e54a3;font-size:14px}",""])},301:function(t,e,a){"use strict";var s=a(239);a.n(s).a},302:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,".page-content[data-v-e4858190] h2{font-size:20px}.page-content[data-v-e4858190] ul{list-style:circle}",""])},387:function(t,e,a){"use strict";a.r(e);a(32),a(23);var s=a(1),i=a.n(s),n={head:function(){var t=this.metadata||{};return{title:t.title+" - RaceBase",meta:[{hid:"OpenGraph Image",property:"og:image",content:this.imageLink},{hid:"OpenGraph Title",property:"og:title",content:t.title},{hid:"OpenGraph Description",property:"og:description",content:t.subtitle},{hid:"OpenGraph URL",property:"og:url",content:void 0+this.$route.fullPath},{hid:"Description",name:"description",content:t.subtitle}]}},asyncData:function(){var t=i()(regeneratorRuntime.mark(function t(e){var a,s,i,n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.$axios,s=e.params,e.env,t.next=3,a.$get("posts/"+s.name);case 3:return"ENOENT"==(i=t.sent).code?n="This post doesn't exist.":(n=i.content,r=i.data,void 0,o=void 0+"/images/fullsize/"+r.image),t.abrupt("return",{content:n,metadata:r,imageLink:o,name:s.name});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},r=(a(299),a(301),a(17)),o=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-90 mx-auto",attrs:{itemscope:"",itemtype:"http://schema.org/Article"}},[a("picture",{staticClass:"mt-4 mb-3 mx-auto w-95 d-block",attrs:{itemprop:"image"}},[a("source",{attrs:{srcset:t.imageLink+".webp",type:"image/webp"}}),t._v(" "),a("source",{attrs:{srcset:t.imageLink+".jpg",type:"image/jpeg"}}),t._v(" "),a("img",{staticClass:"mt-4 mb-3 mx-auto w-95 d-block",attrs:{src:t.imageLink+".jpg",itemprop:"image"}})]),t._v(" "),a("h1",{staticClass:"mt-4"},[t._v(" "+t._s(t.metadata.title)+" ")]),t._v(" "),a("h2",[t._v(" "+t._s(t.metadata.subtitle)+" ")]),t._v(" "),a("div",{staticClass:"metadata mb-3"},[a("span",{staticClass:"date mr-3"},[a("fa",{staticClass:"mr-1",attrs:{icon:"calendar-alt"}}),t._v(" "),a("span",{attrs:{itemprop:"datePublished"}},[t._v(" "+t._s(t.metadata.date)+" ")])],1),t._v(" "),a("span",{staticClass:"author"},[a("fa",{staticClass:"mr-1",attrs:{icon:"user-circle"}}),t._v(" "),a("span",{attrs:{itemprop:"author"}},[t._v(" "+t._s(t.metadata.author)+" ")])],1),t._v(" "),a("a",{staticClass:"ml-3",attrs:{href:"https://twitter.com/intent/tweet?text="+encodeURI("Check out this article on RaceBase! ")+"&url=https://racebase.io/post/"+t.name+"&hashtags=racebase",target:"_blank","data-hashtags":"racebase"}},[a("fa",{attrs:{icon:["fab","twitter"]}}),t._v(" Tweet\n    ")],1)]),t._v(" "),a("div",{staticClass:"page-content pb-5",attrs:{itemprop:"articleBody"},domProps:{innerHTML:t._s(t.content)}})])},[],!1,null,"e4858190",null);o.options.__file="_name.vue";e.default=o.exports}}]);