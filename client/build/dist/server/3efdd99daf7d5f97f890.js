exports.ids=[40],exports.modules={253:function(e,t,c){"use strict";c.r(t);var r={components:{RaceTable:()=>c.e(14).then(c.bind(null,283))},head:()=>({title:"All Races - RaceBase",meta:[{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.io/images/opengraph/races.png"},{hid:"OpenGraph Title",property:"og:title",content:"All Races"}]}),data:()=>({searching:!1,typing:!1,searchInput:""}),async asyncData({$axios:e,params:t}){let c=t.page||"1",r=await e.$get("race/list/"+c+"/10"),n=await e.$get("result/count");n=Number(n.count).toLocaleString();let o=r.page==r.pages;return{races:r.docs,count:n,currentPage:c,lastPage:o}},methods:{search:async function(e){if(this.searchInput)this.$axios.$get("search/races/"+this.searchInput).then(t=>{!e||t.length>0?(this.races=t,this.searching=!0):this.searching=!1});else{let e=await this.$axios.$get("race/list/"+this.currentPage+"/10");this.races=e.docs,this.lastPage=e.page==e.pages}}}},n=c(1);var component=Object(n.a)(r,function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[e._ssrNode('<div class="w-90 mx-auto" data-v-381c04cc><h1 class="mt-4" data-v-381c04cc> Races </h1> <div class="results-count mt-2 mb-3" data-v-381c04cc>'+e._ssrEscape(e._s(e.count)+" results and counting")+"</div></div> "),e._ssrNode('<form class="search-form mb-3 w-90 mx-auto" data-v-381c04cc>',"</form>",[e._ssrNode('<div class="input-group search home-search" data-v-381c04cc>',"</div>",[e._ssrNode('<input type="text" placeholder="Search"'+e._ssrAttr("value",e.searchInput)+' class="form-control" data-v-381c04cc> '),e._ssrNode('<span id="basic-addon2" class="input-group-append" data-v-381c04cc>',"</span>",[e._ssrNode('<span class="input-group-text" data-v-381c04cc>',"</span>",[c("fa",{attrs:{icon:"search"},on:{click:function(t){return e.search(!1)}}})],1)])],2)]),e._ssrNode(" "),c("RaceTable",{attrs:{races:e.races,lastPage:e.lastPage,currentPage:e.currentPage}})],2)},[],!1,function(e){},"381c04cc","c48fc576");t.default=component.exports}};
//# sourceMappingURL=3efdd99daf7d5f97f890.js.map