(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{393:function(t,e,r){var content=r(504);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("0e74738d",content,!0,{sourceMap:!1})},503:function(t,e,r){"use strict";var n=r(393);r.n(n).a},504:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".profile-header h1[data-v-3f33c06d]{font-size:23px;font-weight:500}.profile-header h2[data-v-3f33c06d]{font-size:16px;font-weight:400}.profile-header .btn.follow[data-v-3f33c06d]{vertical-align:top;font-size:11px;font-weight:500;text-transform:uppercase;height:25px;padding:5px 7px}.profile-header .strava[data-v-3f33c06d]{color:#f67e2c}.profile-info .shoe[data-v-3f33c06d]{width:25px}.profile-info .location .icon[data-v-3f33c06d]{color:#e72970}h2.year[data-v-3f33c06d]{font-size:23px}h3.event-header[data-v-3f33c06d]{text-align:left;text-transform:uppercase;font-weight:500;font-size:18px}.results-table td[data-v-3f33c06d]{vertical-align:middle}.results-table .place[data-v-3f33c06d]{text-align:center;font-size:11px}.results-table .place .num[data-v-3f33c06d]{font-size:18px;font-weight:500}.results-table .title[data-v-3f33c06d]{color:#3976d0;font-size:17px;font-weight:500}.results-table .metadata[data-v-3f33c06d]{font-size:14px}.results-table .distance[data-v-3f33c06d]{font-weight:500}.results-table .team[data-v-3f33c06d],.results-table .team a[data-v-3f33c06d]{color:#802dc4}.results-table .time[data-v-3f33c06d]{font-family:DS Digital,Helvetica,sans-serif;font-size:27px;color:#468df5;text-align:right;padding-right:15px}.results-table .time .star[data-v-3f33c06d]{color:#f67e2c}.brand[data-v-3f33c06d]{width:70px}.brand[data-v-3f33c06d],.user-image[data-v-3f33c06d]{display:block;margin:0 auto}.user-image[data-v-3f33c06d]{width:90%;border-radius:5px}.personal-records[data-v-3f33c06d]{margin:0 auto}.personal-records thead[data-v-3f33c06d]{width:100%;text-align:center;font-weight:500}.personal-records thead th[data-v-3f33c06d]{text-transform:uppercase;border:none;font-size:16px;color:grey;padding-bottom:0}.personal-records td[data-v-3f33c06d]{vertical-align:middle;padding:0 15px}.personal-records .distance[data-v-3f33c06d]{text-transform:uppercase;font-weight:500;font-size:16px}.personal-records .time[data-v-3f33c06d]{font-family:DS Digital;color:#3976d0;font-size:22px;text-align:right}.personal-records .more[data-v-3f33c06d]{text-align:right;font-style:italic;font-size:12px;text-transform:uppercase}.personal-records .more div[data-v-3f33c06d]{margin-top:15px}.personal-records .more a[data-v-3f33c06d]{text-decoration:underline}",""])},547:function(t,e,r){"use strict";r.r(e);r(80),r(19),r(447),r(41),r(57),r(214),r(449),r(114),r(22);var n=r(1),c=r(378),o=r.n(c),l=r(451),d=r.n(l),m=function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(e=d()(e.toLowerCase())||0).match(/(\d\s?k|\d\s?km|(meter)(s)?|00\s?m)/g)){t.next=13;break}return t.next=5,v(e);case 5:if(!((r=t.sent)>3e3&&Number.isInteger(r/1e3))){t.next=10;break}return t.abrupt("return",r/1e3+" km");case 10:return t.abrupt("return",r+"m");case 11:t.next=21;break;case 13:if(!e.match(/(mi)/g)){t.next=20;break}return t.next=16,h(e);case 16:return n=t.sent,t.abrupt("return",n+" mi");case 20:return t.abrupt("return","Unknown");case 21:t.next=27;break;case 23:return t.prev=23,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return","Unknown");case 27:case"end":return t.stop()}},t,this,[[0,23]])}));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",parseInt(e.toLowerCase().replace(",","").replace(/\s?(k)(m)?(ilometers)?/g,"000m").replace(/\s?(meter)[s]?/g,"m").replace(" ","").match(/\d+(m)/g)[0].replace("m",""))||0);case 4:return t.prev=4,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",0);case 8:case"end":return t.stop()}},t,this,[[0,4]])}));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",parseFloat(e.toLowerCase().replace(",","").replace(" ","").replace(/(mi)(le)?(s)?/g,"mi").match(/\d+(.)?\d*(mi)/g)[0].replace("mi",""))||0);case 4:return t.prev=4,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",0);case 8:case"end":return t.stop()}},t,this,[[0,4]])}));return function(e){return t.apply(this,arguments)}}(),f={head:function(){return{title:this.name+" - RaceBase",meta:[{hid:"OpenGraph Title",property:"og:title",content:this.athlete.name},{hid:"OpenGraph URL",property:"og:url",content:"https://racebase.io"+this.$route.fullPath},{hid:"OpenGraph Image",property:"og:image",content:this.athlete.profilePicUrl},{hid:"Description",name:"description",content:"View "+this.name+"'s race results on RaceBase, the Internet's first community sourced results database"},{hid:"OpenGraph Description",property:"og:description",content:"View "+this.name+"'s race results on RaceBase, the Internet's first community sourced results database"}]}},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c,l,d,v,h,f,_,x,C,w,k,y,R,U,I,L,z;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.params,c=e.$axios,l=e.redirect,d=r.state.auth.user,t.next=4,c.$get("user/athlete/"+n.id);case 4:return v=t.sent,t.next=7,c.$get("result/list/athlete/"+n.id);case 7:(!(h=t.sent)||h.length<1)&&l("/notfound"),f=v?v.name:h[0].athlete,n.id,t.t0=regeneratorRuntime.keys(h);case 12:if((t.t1=t.t0()).done){t.next=28;break}return _=t.t1.value,t.prev=14,x=h[_],t.next=18,m(x.event);case 18:x.distance=t.sent,C=new Date(x.date),x.year=C.getFullYear(),t.next=26;break;case 23:t.prev=23,t.t2=t.catch(14),console.log(t.t2);case 26:t.next=12;break;case 28:for(U in w=o.a.groupBy(h,"year"),k=o.a.groupBy(h,"distance"),y={},R=[],k)y[U]=o.a.sortBy(k[U],"time")[0],R.push(y[U]);return h=o.a.sortBy(Object.values(w),"year").reverse(),w=Object.keys(w).sort().reverse(),t.next=37,c.$get("user/claimed/"+n.id);case 37:return I=t.sent,L=I.claimed,z=I.user,t.abrupt("return",{user:d,athlete:v,results:h,years:w,records:y,recordsArray:R,claimed:L,claimedBy:z,name:f,id:n.id});case 41:case"end":return t.stop()}},t,this,[[14,23]])}));return function(e){return t.apply(this,arguments)}}(),computed:{isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}},methods:{claim:function(){var t=this;this.user&&this.$axios.$post("user/claim/"+this.user._id+"/"+this.id).then(function(e){t.getClaim()})},addAlias:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$axios.$post("user/"+this.user._id+"/alias/"+this.id).then(function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.success){t.next=4;break}return t.next=3,e.getClaim();case 3:e.$store.dispatch("auth/fetchUser");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getClaim:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$get("user/claimed/"+this.id);case 2:e=t.sent,this.claimed=e.claimed,this.claimedBy=e.user;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},_=(r(503),r(18)),component=Object(_.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.results.length<=0?r("div",{staticClass:"w-90 mx-auto mt-4"},[r("h1",[t._v(" That athlete doesn't exist! ")]),t._v("\n  Click "),r("nuxt-link",{attrs:{to:"/"}},[t._v("here")]),t._v(" to go home\n")],1):t._e(),t._v(" "),t.results.length>0?r("div",{staticClass:"row mw-100 pl-0 w-100 mx-0"},[r("div",{staticClass:"col-md-8 col-12 px-0 order-12 order-md-1"},[r("div",{staticClass:"profile mt-4 mb-4 w-90 mx-auto",attrs:{itemscope:"",itemtype:"http://schema.org/Person"}},[r("div",{staticClass:"profile-header mb-3"},[t.athlete.profilePicUrl?t._e():r("img",{staticClass:"profile-pic mr-3 d-inline-block",attrs:{src:"/images/default.png",itemprop:"image"}}),t._v(" "),t.athlete.profilePicUrl?r("img",{staticClass:"profile-pic mr-3 d-inline-block",attrs:{src:t.athlete.profilePicUrl.replace("http","https"),itemprop:"image"}}):t._e(),t._v(" "),r("div",{staticClass:"d-inline-block mr-3"},[r("h1",{attrs:{itemprop:"name"}},[t._v(" "+t._s(t.name)+" ")]),t._v(" "),r("h2",{staticClass:"mb-0"},[t._v("\n            @"+t._s(t.id)+"\n            \n            "),t.athlete.stravaUrl?r("a",{staticClass:"ml-3 strava",attrs:{href:t.athlete.stravaUrl,target:"_blank"}},[r("fa",{attrs:{icon:["fab","strava"]}}),t._v(" Strava\n            ")],1):t._e(),t._v(" "),r("a",{staticClass:"ml-3",attrs:{href:"https://twitter.com/intent/tweet?text="+encodeURI("Check out this profile on RaceBase! @racebaseio")+"&url=https://racebase.io/athlete/"+t.id+"&hashtags=racebase",target:"_blank","data-hashtags":"racebase"}},[r("fa",{attrs:{icon:["fab","twitter"]}}),t._v(" Tweet\n            ")],1)])]),t._v(" "),t.isLoggedIn?r("button",{staticClass:"btn btn-primary follow mt-3 mt-lg-0 d-none"},[t._v("\n          Follow\n        ")]):t._e()]),t._v(" "),t.athlete?r("div",{staticClass:"profile-info mb-2"},[r("div",{staticClass:"shoes mb-2"},[t.user.trainer?r("span",{staticClass:"trainer mr-3 d-block d-lg-inline-block"},[r("object",{staticClass:"shoe mr-1",attrs:{type:"image/svg+xml",data:"/images/trainer-blue.svg"}}),t._v("\n            "+t._s(t.user.trainer)+"\n          ")]):t._e(),t._v(" "),t.user.racer?r("span",{staticClass:"racer"},[r("object",{staticClass:"shoe mr-1",attrs:{type:"image/svg+xml",data:"/images/racer.svg"}}),t._v("\n            "+t._s(t.user.racer)+"\n          ")]):t._e()]),t._v(" "),r("div",{staticClass:"personal"},[t.user.mileage?r("span",{staticClass:"mileage mr-3"},[r("fa",{staticClass:"icon mr-1",attrs:{icon:"calendar-alt"}}),t._v("\n            "+t._s(t.user.mileage)+" MPW\n          ")],1):t._e(),t._v(" "),t.user.location?r("span",{staticClass:"location"},[r("fa",{staticClass:"icon mr-1",attrs:{icon:"map-marker-alt"}}),t._v(" "),r("span",{attrs:{itemprop:"homeLocation"}},[t._v(" "+t._s(t.user.location)+" ")])],1):t._e()])]):t._e(),t._v(" "),t.claimed?t._e():r("div",{staticClass:"claim-info"},[r("div",[t._v("\n          Is this you? \n          "),t.isLoggedIn?t._e():r("span",[r("nuxt-link",{attrs:{to:"/login"}},[t._v("Log In")]),t._v(" or \n            "),r("nuxt-link",{attrs:{to:"/signup"}},[t._v("Sign Up")]),t._v(" \n            to claim this athlete profile.\n          ")],1),t._v(" "),t.isLoggedIn?r("span",[t.user.athlete_id?t._e():r("span",[t._v("\n              Click "),r("a",{on:{click:function(e){return t.claim()}}},[t._v("here")]),t._v(" to claim this profile.\n            ")]),t._v(" "),t.user.athlete_id?r("span",[t._v("\n              Click "),r("a",{attrs:{href:"#"},on:{click:function(e){return t.addAlias()}}},[t._v("here")]),t._v(" to add this profile to your aliases.\n            ")]):t._e()]):t._e()])]),t._v(" "),t.claimed&&t.user.athlete_id!=t.id?r("div",{staticClass:"claim-info"},[r("div",[t._v("Claimed by "+t._s(t.claimedBy?t.claimedBy:"Anonymous"))]),t._v(" "),t.claimedBy?r("div",{staticClass:"smaller"},[t._v("\n          Click \n          "),r("a",{attrs:{href:"mailto:racebase@breeze.software"}},[t._v("here")]),t._v(" \n          to report a wrongfully claimed athlete.\n        ")]):t._e()]):t._e()]),t._v(" "),t.results&&0!=t.results.length||!t.athlete?t._e():r("h3",[t._v("No Results")]),t._v(" "),t._l(t.results,function(e,n){return r("div",{staticClass:"mb-4 w-90 mx-auto"},[r("h2",{staticClass:"year mb-3"},[t._v(" "+t._s(t.years[n])+" ")]),t._v(" "),r("div",{staticClass:"results-container"},[r("div",{staticClass:"table-responsive mb-4"},[r("table",{staticClass:"results-table table table-striped mb-0"},[r("tbody",t._l(e,function(e){return r("tr",[r("td",{staticClass:"place"},[r("div",{staticClass:"num"},[t._v(" "+t._s(e.place)+" ")]),t._v(" "),r("fa",{staticClass:"d-block mx-auto",attrs:{icon:"trophy"}})],1),t._v(" "),r("td",{staticClass:"race"},[r("nuxt-link",{staticClass:"title mr-2",attrs:{to:"/races/"+e.race_id}},[t._v("\n                    "+t._s(e.race)+"\n                  ")]),t._v(" "),r("div",{staticClass:"distance d-inline-block"},[t._v(" "+t._s(e.distance)+" ")]),t._v(" "),r("div",{staticClass:"metadata mt-2"},[r("span",{staticClass:"date mr-2"},[r("fa",{staticClass:"icon mr-1",attrs:{icon:"calendar-alt"}}),t._v("\n                      "+t._s(e.date)+"\n                    ")],1),t._v(" "),r("span",{staticClass:"team no-wrap"},[r("fa",{staticClass:"icon mr-1",attrs:{icon:["fab","font-awesome-flag"]}}),t._v(" "),e.team_id?r("nuxt-link",{attrs:{to:"",to:"/team/"+e.team_id}},[t._v("\n                        "+t._s(e.team)+"\n                      ")]):t._e(),t._v(" "),e.team_id?t._e():r("span",[t._v(t._s(e.team))])],1)])],1),t._v(" "),r("td",{staticClass:"time"},[t._v("\n                  "+t._s(e.time)),t.recordsArray.includes(e)?r("span",{staticClass:"star"},[t._v("*")]):t._e()])])}),0)])])])])})],2),t._v(" "),r("div",{staticClass:"col-12 col-md-4 pr-0 pl-0 pr-md-2 mt-4 ml-0 order-1 order-md-12 w-100"},[t.athlete.brandPicUrl&&t.athlete.featuredPicUrl?t._e():r("div",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[t._v(" \n      Want to customize this page? "),r("br"),t._v(" "),t.isLoggedIn?r("nuxt-link",{attrs:{to:"/user/settings"}},[t._v(" Claim this profile ")]):t._e(),t._v(" "),t.isLoggedIn?t._e():r("span",[r("nuxt-link",{attrs:{to:"/login"}},[t._v(" Log In ")]),t._v(" or\n        "),r("nuxt-link",{attrs:{to:"/signup"}},[t._v(" Sign Up ")])],1),t._v(" "),r("br"),t._v(" to add custom images.\n    ")],1),t._v(" "),t.athlete.brandPicUrl?r("img",{staticClass:"brand-pic brand mb-4",attrs:{src:t.athlete.brandPicUrl.replace("http","https")}}):t._e(),t._v(" "),t.athlete.featuredPicUrl?r("img",{staticClass:"user-image mb-4",attrs:{src:t.athlete.featuredPicUrl.replace("http","https")}}):t._e(),t._v(" "),r("div",{staticClass:"table-responsive personal-records mt-4 mx-auto w-90"},[r("table",{staticClass:"table mb-2"},[t._m(0),t._v(" "),r("tbody",[t._l(t.records,function(e,n){return r("tr",[r("td",{staticClass:"distance"},[t._v(t._s(n))]),t._v(" "),r("td",{staticClass:"time"},[t._v(t._s(e.time))])])}),t._v(" "),Object.keys(t.records).length<3?r("tr",{staticClass:"more"},[r("td",{attrs:{colspan:"2"}},[t.isLoggedIn?r("div",[r("nuxt-link",{attrs:{to:"/user/content"}},[t._v("Add more results")])],1):t._e(),t._v(" "),t.isLoggedIn?t._e():r("div",[r("nuxt-link",{attrs:{to:"/login"}},[t._v("Log in")]),t._v(" to add more results\n              ")],1)])]):t._e()],2)])])])]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"pb-2",attrs:{colspan:"2"}},[this._v(" Personal Records ")])])])}],!1,null,"3f33c06d",null);e.default=component.exports}}]);