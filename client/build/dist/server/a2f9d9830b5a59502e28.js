exports.ids=[17],exports.modules={361:function(e,t,r){"use strict";r.r(t);var d={props:["races","lastPage","currentPage"]},o=r(1);var component=Object(o.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._ssrNode((e.races?"\x3c!----\x3e":'<h3 class="no-results" data-v-5e701356> No results! </h3>')+" "),e._ssrNode('<div class="table-responsive w-90 mx-auto" data-v-5e701356>',"</div>",[e._ssrNode('<table class="table table-striped mb-0" data-v-5e701356>',"</table>",[e._ssrNode("<tbody data-v-5e701356>","</tbody>",e._l(e.races,(function(t){return e._ssrNode("<tr data-v-5e701356>","</tr>",[e._ssrNode('<td class="vote-data d-flex align-items-center" data-v-5e701356>',"</td>",[e._ssrNode('<div class="votes" data-v-5e701356>',"</div>",[e._ssrNode("<div data-v-5e701356><b data-v-5e701356>"+e._ssrEscape(e._s(t.upvotes||0))+"</b></div> "),r("fa",{attrs:{icon:["far","thumbs-up"]}})],2),e._ssrNode(" "),e._ssrNode('<div class="votes" data-v-5e701356>',"</div>",[e._ssrNode("<div data-v-5e701356><b data-v-5e701356>"+e._ssrEscape(e._s(t.downvotes||0))+"</b></div> "),r("fa",{attrs:{icon:["far","thumbs-down"]}})],2)],2),e._ssrNode(" "),e._ssrNode('<td class="race-data" data-v-5e701356>',"</td>",[r("router-link",{staticClass:"race-title",attrs:{to:"/races/"+t._id}},[e._v(e._s(t.name))]),e._ssrNode(" "),e._ssrNode('<div class="metadata" data-v-5e701356>',"</div>",[e._ssrNode('<span class="mr-2" data-v-5e701356>'+e._ssrEscape("\n                "+e._s(t.date)+"\n              ")+"</span> "),e._ssrNode('<span class="mr-2" data-v-5e701356>',"</span>",[e._ssrNode("\n                 "),r("fa",{staticClass:"divider",attrs:{icon:"map-marker-alt"}}),e._ssrNode(e._ssrEscape("\n                "+e._s(t.location)+"\n              "))],2),e._ssrNode(" "),e._ssrNode("<span data-v-5e701356>","</span>",[r("fa",{attrs:{icon:"user"}}),e._ssrNode(e._ssrEscape("\n                "+e._s(t.user)+"\n              "))],2)],2)],2),e._ssrNode(' <td class="verified-data" data-v-5e701356></td>')],2)})),0)])]),e._ssrNode(" "),e._ssrNode('<div class="btn-group-wrap mt-3 w-90 mx-auto pb-5" data-v-5e701356>',"</div>",[e._ssrNode('<div role="pager" aria-label="Pager" class="btn-group pager" data-v-5e701356>',"</div>",[e.currentPage>1?r("nuxt-link",{staticClass:"btn btn-default",attrs:{to:{params:{page:Number(e.currentPage)-1}}}},[e._v("\n        Prev\n      ")]):e._e(),e._ssrNode(" "),e.lastPage?e._e():r("nuxt-link",{staticClass:"btn btn-default",attrs:{to:{params:{page:Number(e.currentPage)+1}}}},[e._v("\n        Next\n      ")])],2)])],2)}),[],!1,(function(e){}),"5e701356","5ec08dfb");t.default=component.exports}};