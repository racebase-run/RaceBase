(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{530:function(t,e,n){var content=n(745);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7cda04ea",content,!0,{sourceMap:!1})},744:function(t,e,n){"use strict";var r=n(530);n.n(r).a},745:function(t,e,n){(e=n(11)(!1)).push([t.i,".checkbox[data-v-8b81fdec]{font-size:10px;padding:0;width:25px;height:25px;line-height:25px;color:#777}.btn-save[data-v-8b81fdec]{font-weight:600;text-transform:uppercase;font-size:13px;padding:6px 5px 3px;line-height:100%;height:auto}",""]),t.exports=e},842:function(t,e,n){"use strict";n.r(e);n(54),n(34),n(21),n(36),n(35),n(28),n(29),n(30),n(20),n(7),n(44);var r=n(25);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function l(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw r}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={props:["group","available","type","team_id"],data:function(){var t,e={},n=l(this.available);try{for(n.s();!(t=n.n()).done;){e[t.value.athlete_id]=!1}}catch(t){n.e(t)}finally{n.f()}var r,o=l(this.group.athletes);try{for(o.s();!(r=o.n()).done;){e[r.value]=!0}}catch(t){o.e(t)}finally{o.f()}return{selected:e,original:c({},e)}},methods:{save:function(){this.original=c({},this.selected),this.$emit("save",this.selected)}},computed:{saved:function(){for(var t=0,e=Object.keys(this.selected);t<e.length;t++){var n=e[t];if(this.selected[n]!=this.original[n])return!1}return!0}}},h=(n(744),n(16)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"d-flex align-items-center"},[t._v("\n        "+t._s(t.group.name)+" \n        "),n("button",{staticClass:"btn btn-primary ml-3 btn-save",on:{click:function(e){return t.save()}}},[t._v(" \n            "+t._s(t.saved?"Saved":"Save")+"\n            "),t.saved?n("fa",{attrs:{icon:"check"}}):t._e()],1)]),t._v(" "),n("h5",{staticClass:"mb-3"},[t._v(" @"+t._s(t.team_id)+" ")]),t._v(" "),n("div",t._l(t.available,(function(e){return n("div",{staticClass:"d-flex align-items-center mb-2"},[n("button",{staticClass:"btn checkbox mr-2",class:t.selected[e.athlete_id]?"btn-primary":"btn-default",on:{click:function(n){t.selected[e.athlete_id]=!t.selected[e.athlete_id]}}},[t.selected[e.athlete_id]?n("fa",{attrs:{icon:"check"}}):n("fa",{attrs:{icon:"times"}})],1),t._v(" "),n("nuxt-link",{attrs:{to:"/athlete/"+e.athlete_id}},[t._v(" \n                @"+t._s(e.athlete_id)+"\n            ")])],1)})),0)])}),[],!1,null,"8b81fdec",null);e.default=component.exports}}]);