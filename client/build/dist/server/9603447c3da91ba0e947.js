exports.ids=[79],exports.modules={185:function(t,e,n){"use strict";n.r(e);var o=n(91),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e.default=r.a},186:function(t,e,n){(e=n(2)(!1)).push([t.i,".claim-prompt[data-v-255ee428]{font-size:20px;text-align:center;color:#777}.claim-prompt .btn[data-v-255ee428]{text-transform:uppercase;font-size:18px;font-weight:500}",""]),t.exports=e},312:function(t,e,n){"use strict";n.r(e);var o={components:{SettingsNav:()=>n.e(6).then(n.bind(null,355))},async asyncData({store:t,$axios:e}){let n={...t.state.auth.user},o=null;try{n.team_id&&n.coach?o=await e.$get("/team/"+n.team_id):n.team_id&&(o=await e.$get("/team/public/"+n.team_id))}catch(t){console.log(t)}return{user:n,team:o,coachAccount:n.coach}},middleware:"auth",methods:{unclaimTeam:async function(){let t=await this.$axios.$post("/user/unclaim/team");console.log(t),this.loadUser()},loadUser:async function(){await this.$store.dispatch("auth/fetchUser"),this.user={...this.$store.state.auth.user},this.currentEmail=this.user.email}}},r=n(1);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto w-90 w-md-100 mx-md-0 pl-md-5"},[t._ssrNode('<h1 class="mt-4" data-v-255ee428>',"</h1>",[n("fa",{attrs:{icon:"cogs"}}),t._ssrNode(" Coaching \n  ")],2),t._ssrNode(" "),n("SettingsNav",{attrs:{coach:t.user.coach}}),t._ssrNode(" "),t.user.team_id?t._ssrNode('<div class="settings-section" data-v-255ee428>',"</div>",[t.user.team_id?t._ssrNode('<div class="d-flex align-items-center" data-v-255ee428>',"</div>",[t._ssrNode("<div data-v-255ee428> Your team: </div> "),n("nuxt-link",{staticClass:"ml-2",attrs:{to:"/team/"+t.user.team_id}},[t._v("\n        "+t._s(t.user.team_id)+"\n      ")]),t._ssrNode(' <div class="btn btn-outline-primary btn-small ml-3" data-v-255ee428>\n        Unclaim\n      </div>')],2):t._ssrNode("<div data-v-255ee428>","</div>",[n("nuxt-link",{attrs:{to:"/signup/coach/claim"}},[t._v("Claim a team")])],1),t._ssrNode(" "+(t.user.team_id?'<div class="mt-2" data-v-255ee428><strong data-v-255ee428>Join Code:</strong>'+t._ssrEscape(" "+t._s(t.team.join_code))+"</div>":"\x3c!----\x3e"))],2):t._ssrNode('<div class="claim-prompt my-4" data-v-255ee428>',"</div>",[t._ssrNode("<div data-v-255ee428> To get started with coaching... </div> "),n("nuxt-link",{staticClass:"btn btn-primary mt-3",attrs:{to:"/signup/coach/claim"}},[t._v("Claim your team")])],2)],2)}),[],!1,(function(t){var e=n(185);e.__inject__&&e.__inject__(t)}),"255ee428","019266b2");e.default=component.exports},91:function(t,e,n){var content=n(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("702dfaab",content,!0,t)}}};