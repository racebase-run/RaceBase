(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{588:function(t,e,n){var content=n(690);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("48316796",content,!0,{sourceMap:!1})},689:function(t,e,n){"use strict";var r=n(588);n.n(r).a},690:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".fa-cog[data-v-1886955e]{color:#333;font-size:20px;margin-bottom:1px;margin-right:5px}.fa-times[data-v-1886955e]{cursor:pointer}.pic-name[data-v-1886955e]{font-size:12px;text-align:center}.pictures[data-v-1886955e]{width:90%}.auto-width-input[data-v-1886955e]{width:auto;display:inline;flex:none;background:#fff}.claim[data-v-1886955e]{display:inline-block;width:270px}.claim .btn.btn-primary[data-v-1886955e]{margin-top:0}.profile .input-group-text[data-v-1886955e]{font-size:14px}.profile .input-group-text img[data-v-1886955e]{opacity:.7;width:25px}.profile-pic[data-v-1886955e]{border-radius:7px;overflow:hidden;display:inline-block;width:80px;height:80px}.brand-pic[data-v-1886955e],.featured-pic[data-v-1886955e],.profile-pic[data-v-1886955e]{margin:0 auto}.featured-pic[data-v-1886955e]{width:100px;border-radius:5px}.card .btn[data-v-1886955e]{display:table;margin:0 auto}.card .settings-label[data-v-1886955e]{text-align:center}.settings-section[data-v-1886955e]{margin-top:20px}.settings-section .btn[data-v-1886955e]{font-size:15px}.settings-section .settings-label[data-v-1886955e]{text-transform:uppercase;font-weight:500;font-size:13px;margin-bottom:10px}.settings-section .tag[data-v-1886955e]{font-size:14px;vertical-align:middle;border-radius:4px;border:1px solid #ccc;padding:6px 12px;display:inline-block;white-space:nowrap;margin-bottom:9px}.settings-section .alert[data-v-1886955e]{width:270px;padding:8px 12px}.settings-section .athlete-id .btn[data-v-1886955e]{margin-top:-9.5px}form input[data-v-1886955e]{font-size:14px}@media screen and (max-width:767px){.alert[data-v-1886955e],.claim[data-v-1886955e]{width:90%;margin:10px auto 0}.danger-zone[data-v-1886955e]{margin-bottom:50px}}",""])},837:function(t,e,n){"use strict";n.r(e);var r=n(8),c=(n(20),n(2)),l={data:function(){return{id:"",aliasInput:"",claimInput:"",aliases:[],claimFailure:"",claimSuccess:"",aliasSuccess:"",aliasFailure:"",deleteSuccess:"",makeSure:!1,profilePic:null,brandPic:null,featuredPic:null,message:"",imageMessage:"",joinCode:""}},components:{ProfilePic:function(){return n.e(2).then(n.bind(null,860))}},head:function(){return{title:"Settings - RaceBase"}},middleware:"auth",asyncData:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e){var n,c,l,o,d,m;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.store,c=e.$axios,l=Object(r.a)({},n.state.auth.user),o=null,!l.team_id||!l.coach){t.next=9;break}return t.next=6,c.$get("/team/"+l.team_id);case 6:o=t.sent,t.next=13;break;case 9:if(!l.team_id){t.next=13;break}return t.next=12,c.$get("/team/public/"+l.team_id);case 12:o=t.sent;case 13:return d=l.email,t.next=16,c.$get("/user/referrals");case 16:return m=t.sent.referrals,t.abrupt("return",{user:l,id:l._id,resent:!1,sentReset:!1,referrals:m,currentEmail:d,emailMessage:"",team:o,coachAccount:l.coach,publicLogs:l.publicLogs});case 18:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),methods:{loadUser:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("auth/fetchUser");case 2:this.user=Object(r.a)({},this.$store.state.auth.user),this.currentEmail=this.user.email;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),joinTeam:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("team/join/"+this.joinCode);case 2:t.sent,this.loadUser();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),leaveTeam:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("team/leave");case 2:this.loadUser();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),addAlias:function(){var t=this;this.$axios.$post("user/"+this.id+"/alias/"+this.aliasInput).then(function(e){e.failure?(t.aliasSuccess=null,t.aliasFailure=e.failure):e.success&&(t.aliasFailure=null,t.aliasSuccess=e.success,t.loadUser())})},removeAlias:function(t){var e=this;this.$axios.$delete("user/"+this.id+"/alias/"+t).then(function(t){e.aliasSuccess=null,e.aliasFailure=null,e.loadUser()})},claim:function(t){var e=this;this.$axios.$post("user/claim/"+this.id+"/"+t).then(function(t){e.claimFailure="",e.claimSuccess="",t.failure?(e.claimSuccess=null,e.claimFailure=t.failure):t.success&&(e.claimFailure=null,e.claimSuccess=t.success,e.loadUser())})},unclaim:function(t){var e=this;this.$axios.$post("user/unclaim/"+this.id+"/"+t).then(function(t){e.claimFailure="",e.claimSuccess="",t.failure?(e.claimFailure=t.failure,e.claimSuccess=null):t.success&&(e.claimSuccess=t.success,e.claimFailure=null,e.loadUser())})},unclaimTeam:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("/user/unclaim/team");case 2:e=t.sent,console.log(e),this.loadUser();case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),deleteAccount:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$delete("user/"+this.id);case 2:return t.next=4,this.$store.dispatch("auth/logout");case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),updateProfile:function(){var t=this;this.$axios.$put("user/"+this.id,this.user).then(function(e){t.message="Profile updated.",t.loadUser()})},updateEmail:function(){var t=this;this.$axios.$put("user/"+this.id+"/email/"+this.user.email).then(function(e){t.emailMessage=e,t.loadUser()})},changeAccountType:function(){var t=this;this.$axios.$put("user/"+this.id+"/coach",{coach:this.coachAccount}).then(function(e){t.loadUser()})},changeLogType:function(){var t=this;console.log(this.publicLogs),this.$axios.$put("user/"+this.id,{publicLogs:this.publicLogs}).then(function(e){t.loadUser()})},onProfilePicChanged:function(t){this.profilePic=t.target.files[0]},onBrandPicChanged:function(t){this.brandPic=t.target.files[0]},onFeaturedPicChanged:function(t){this.featuredPic=t.target.files[0]},uploadProfilePic:function(){var t=this,e=new FormData;e.append("image",this.profilePic),this.$axios.$post("user/"+this.user._id+"/profile_pic",e).then(function(e){t.imageMessage="Profile updated.",t.loadUser()})},resendVerification:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("user/resendVerification");case 2:this.resent=!0;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),uploadBrandPic:function(){var t=this,e=new FormData;e.append("image",this.brandPic),this.$axios.$post("user/"+this.user._id+"/brand_pic",e).then(function(e){t.imageMessage="Profile updated.",t.loadUser()})},uploadFeaturedPic:function(){var t=this,e=new FormData;e.append("image",this.featuredPic),this.$axios.$post("user/"+this.user._id+"/featured_pic",e).then(function(e){t.imageMessage="Profile updated.",t.loadUser()})},addToClipboard:function(){document.querySelector("#copy").select(),document.execCommand("copy"),this.copied=!0},resetPassword:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("/user/forgotPassword",{email:this.user.email});case 2:this.sentReset=!0;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},o=(n(689),n(14)),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mx-auto w-90 w-md-100 mx-md-0 pl-md-5"},[n("h1",{staticClass:"mt-4"},[n("fa",{attrs:{icon:"cog"}}),t._v(" Settings \n  ")],1),t._v(" "),n("div",{staticClass:"settings-section mt-4"},[n("div",{staticClass:"settings-label"},[t._v("Referral Code")]),t._v(" "),n("div",{staticClass:"mb-2"},[t._v("\n      Refer 5 friends with this code and get a free RaceBase tee shirt!\n    ")]),t._v(" "),n("div",{staticClass:"input-group"},[n("input",{staticClass:"auto-width-input form-control",attrs:{id:"copy",readonly:""},domProps:{value:t.user.referralCode}}),t._v(" "),n("span",{staticClass:"input-group-append"},[n("div",{staticClass:"btn btn-outline-dark",on:{click:t.addToClipboard}},[n("fa",{attrs:{icon:"clipboard"}})],1)])]),t._v(" "),n("div",{staticClass:"mt-2"},[n("strong",[t._v(" \n        You have "+t._s(t.referrals||0)+" referral"),1!=t.referrals?n("span",[t._v("s")]):t._e(),t._v(". \n      ")])])]),t._v(" "),t.user.athlete_id?n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v("Profile")]),t._v(" "),n("form",{staticClass:"profile mb-4 w-md-75 w-100",on:{submit:function(e){return e.preventDefault(),t.updateProfile()}}},[n("div",{staticClass:"row mb-3"},[n("div",{staticClass:"col-md-6 col-12 mb-md-0 mb-3"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.trainer,expression:"user.trainer"}],staticClass:"form-control",attrs:{placeholder:"Current Trainer"},domProps:{value:t.user.trainer},on:{input:function(e){e.target.composing||t.$set(t.user,"trainer",e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"col-md-6 col-12"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.racer,expression:"user.racer"}],staticClass:"form-control",attrs:{placeholder:"Current Racer"},domProps:{value:t.user.racer},on:{input:function(e){e.target.composing||t.$set(t.user,"racer",e.target.value)}}}),t._v(" "),t._m(1)])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 col-12 mb-md-0 mb-3"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.mileage,expression:"user.mileage"}],staticClass:"form-control",attrs:{placeholder:"Weekly Mileage"},domProps:{value:t.user.mileage},on:{input:function(e){e.target.composing||t.$set(t.user,"mileage",e.target.value)}}}),t._v(" "),t._m(2)])]),t._v(" "),n("div",{staticClass:"col-md-6 col-12"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.location,expression:"user.location"}],staticClass:"form-control",attrs:{placeholder:"Location"},domProps:{value:t.user.location},on:{input:function(e){e.target.composing||t.$set(t.user,"location",e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("span",{staticClass:"input-group-text"},[n("fa",{staticClass:"mr-1",attrs:{icon:"map-marker-alt"}})],1)])])])]),t._v(" "),n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col-md-6 col-12 mb-md-0 mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.stravaUrl,expression:"user.stravaUrl"}],staticClass:"form-control",attrs:{placeholder:"Strava URL"},domProps:{value:t.user.stravaUrl},on:{input:function(e){e.target.composing||t.$set(t.user,"stravaUrl",e.target.value)}}})])]),t._v(" "),n("input",{staticClass:"btn btn-primary mt-3",attrs:{type:"submit",value:"Update"}}),t._v(" "),t.message?n("div",{staticClass:"mt-3"},[t._v(" "+t._s(t.message)+" ")]):t._e()])]):t._e(),t._v(" "),t.user.athlete_id?n("div",{staticClass:"settings-section pictures \n    row \n    mt-3 \n    w-100 w-md-auto"},[n("div",{staticClass:"col-md-4 col-12 mb-md-0 mb-3"},[n("div",{staticClass:"settings-section card p-3 mt-0"},[n("div",{staticClass:"settings-label mb-3"},[t._v(" Profile Picture ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"profile-pic"},[n("ProfilePic",{attrs:{url:t.user.profilePicUrl}})],1),t._v(" "),n("div",{staticClass:"col-6"},[n("div",[n("label",{staticClass:"mb-2 btn btn-default"},[t._v("\n                Browse\n                "),n("input",{attrs:{type:"file",name:"image",hidden:""},on:{change:t.onProfilePicChanged}})])]),t._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",on:{click:t.uploadProfilePic}},[t._v(" Upload ")])])])]),t._v(" "),t.profilePic?n("span",{staticClass:"pic-name mt-3"},[t._v(" "+t._s(t.profilePic.name)+" ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-4 col-12 mb-md-0 mb-3"},[n("div",{staticClass:"settings-section card p-3 mt-0"},[n("div",{staticClass:"settings-label mb-3"},[t._v(" Brand / Team Logo ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 align-items-center align-content-center d-flex"},[t.user.brandPicUrl?n("img",{staticClass:"brand-pic mb-2",attrs:{src:t.user.brandPicUrl}}):t._e()]),t._v(" "),n("div",{staticClass:"col-6"},[n("div",[n("label",{staticClass:"mb-2 mx-auto btn btn-default"},[t._v("\n                Browse\n                "),n("input",{attrs:{type:"file",name:"image",hidden:""},on:{change:t.onBrandPicChanged}})])]),t._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",on:{click:t.uploadBrandPic}},[t._v(" Upload ")])])])]),t._v(" "),t.brandPic?n("span",{staticClass:"pic-name"},[t._v(" "+t._s(t.brandPic.name)+" ")]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-4 col-12 mb-md-0 mb-3"},[n("div",{staticClass:"settings-section card p-3 pb-md-3 mt-0"},[n("div",{staticClass:"settings-label mb-3"},[t._v(" Featured Image ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 align-items-center align-content-center d-flex"},[t.user.featuredPicUrl?n("img",{staticClass:"featured-pic mb-2",attrs:{src:t.user.featuredPicUrl}}):t._e()]),t._v(" "),n("div",{staticClass:"col-6"},[n("div",[n("label",{staticClass:"mb-2 mx-auto btn btn-default"},[t._v("\n                Browse\n                "),n("input",{attrs:{type:"file",name:"image",hidden:""},on:{change:t.onFeaturedPicChanged}})])]),t._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",on:{click:t.uploadFeaturedPic}},[t._v(" Upload ")])])])]),t._v(" "),t.featuredPic?n("span",{staticClass:"pic-name"},[t._v(" "+t._s(t.featuredPic.name)+" ")]):t._e()])]),t._v(" "),t.imageMessage?n("div",{staticClass:"mt-3 pl-3"},[n("strong",[t._v(" "+t._s(t.imageMessage)+" ")])]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v("Logs")]),t._v(" "),n("div",[n("label",{staticClass:"form-check-label mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.publicLogs,expression:"publicLogs"}],attrs:{type:"radio"},domProps:{value:!0,checked:t._q(t.publicLogs,!0)},on:{change:function(e){t.publicLogs=!0}}}),t._v(" Public "),n("fa",{attrs:{icon:"globe-americas"}}),t._v("  \n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.publicLogs,expression:"publicLogs"}],attrs:{type:"radio"},domProps:{value:!1,checked:t._q(t.publicLogs,!1)},on:{change:function(e){t.publicLogs=!1}}}),t._v(" Private "),n("fa",{attrs:{icon:"lock"}})],1)]),t._v(" "),n("div",{staticClass:"btn btn-primary btn-small",on:{click:t.changeLogType}},[t._v("Save")])]),t._v(" "),n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v("Email")]),t._v(" "),n("div",[n("form",{staticClass:"input-group mb-2",on:{submit:function(e){return e.preventDefault(),t.updateEmail(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control auto-width-input",attrs:{type:"email",placeholder:"Change your email..."},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),n("span",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-dark",attrs:{type:"submit"}},[n("fa",{attrs:{icon:t.user.email==t.currentEmail?"check":"save"}})],1)])])]),t._v(" "),t.emailMessage?n("div",[t._v(t._s(t.emailMessage))]):t._e(),t._v(" "),t.user.active?n("div",[t._v(" Your email has been verified. ")]):n("div",[t._v("\n      Please verify your email! \n      Click \n      "),n("a",{attrs:{href:"#"},on:{click:t.resendVerification}},[t._v("here")]),t._v(" \n      to resend your verification email.\n      "),t.resent?n("p",[n("strong",[t._v("Sent.")])]):t._e()])]),t._v(" "),n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v("Reset Password")]),t._v(" "),n("div",[t._v("\n      Click \n      "),n("a",{attrs:{href:"#"},on:{click:t.resetPassword}},[t._v("here")]),t._v(" \n      to send a reset link to your email.\n      "),t.sentReset?n("p",[n("strong",[t._v("Sent.")])]):t._e()])]),t._v(" "),n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v("Athlete ID")]),t._v(" "),t.user.athlete_id?n("span",{staticClass:"athlete-id"},[n("div",{staticClass:"tag"},[n("fa",{attrs:{icon:"user"}}),t._v("   "+t._s(t.user.athlete_id))],1),t._v(" "),t.user.athlete_id?n("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.unclaim(t.user.athlete_id)}}},[t._v("\n        Unclaim\n      ")]):t._e()]):t._e(),t._v(" "),t.user.athlete_id?t._e():n("form",{staticClass:"claim mb-2",on:{submit:function(e){return e.preventDefault(),t.claim(t.claimInput)}}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.claimInput,expression:"claimInput"}],staticClass:"form-control",attrs:{pattern:"^\\S*$",type:"text",id:"athleteIDInput",placeholder:"Athlete ID (no spaces)",required:""},domProps:{value:t.claimInput},on:{input:function(e){e.target.composing||(t.claimInput=e.target.value)}}}),t._v(" "),t._m(3)])]),t._v(" "),t.claimSuccess?n("div",{staticClass:"alert alert-success"},[t._v(" \n      "+t._s(t.claimSuccess)+" \n    ")]):t._e(),t._v(" "),t.claimFailure?n("div",{staticClass:"alert alert-danger"},[t._v(" \n      "+t._s(t.claimFailure)+"\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v(" Account Type ")]),t._v(" "),n("div",[n("label",{staticClass:"form-check-label mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.coachAccount,expression:"coachAccount"}],attrs:{type:"radio"},domProps:{value:!0,checked:t._q(t.coachAccount,!0)},on:{change:function(e){t.coachAccount=!0}}}),t._v(" Coach   \n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.coachAccount,expression:"coachAccount"}],attrs:{type:"radio"},domProps:{value:!1,checked:t._q(t.coachAccount,!1)},on:{change:function(e){t.coachAccount=!1}}}),t._v(" Athlete\n      ")])]),t._v(" "),n("div",{staticClass:"btn btn-primary btn-small",on:{click:t.changeAccountType}},[t._v("Save")])]),t._v(" "),t.user.coach?t._e():n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v(" Team ")]),t._v(" "),t.user.team_id?n("div",{staticClass:"d-flex align-items-center"},[n("div",{staticClass:"tag mr-2 mb-0"},[t._v(" \n        "+t._s(t.user.team_id)+"\n      ")]),t._v(" "),n("div",{staticClass:"btn btn-primary",on:{click:t.leaveTeam}},[t._v("\n        Leave\n      ")])]):n("div",{staticClass:"d-flex flex-shrink w-50"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.joinCode,expression:"joinCode"}],staticClass:"form-control mr-2",attrs:{type:"text",placeholder:"Join Code"},domProps:{value:t.joinCode},on:{input:function(e){e.target.composing||(t.joinCode=e.target.value)}}}),t._v(" "),n("div",{staticClass:"btn btn-primary",on:{click:t.joinTeam}},[t._v(" Join ")])])]),t._v(" "),t.user.coach?n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v(" Coaching ")]),t._v(" "),t.user.team_id?n("div",{staticClass:"d-flex align-items-center"},[n("div",[t._v(" Your team: ")]),t._v(" "),n("nuxt-link",{staticClass:"ml-2",attrs:{to:"/team/"+t.user.team_id}},[t._v("\n        "+t._s(t.user.team_id)+"\n      ")]),t._v(" "),n("div",{staticClass:"btn btn-outline-primary btn-small ml-3",on:{click:t.unclaimTeam}},[t._v("\n        Unclaim\n      ")])],1):n("div",[n("nuxt-link",{attrs:{to:"/signup/coach/claim"}},[t._v("Claim a team")])],1),t._v(" "),t.user.team_id?n("div",{staticClass:"mt-2"},[n("strong",[t._v("Join Code:")]),t._v(" "+t._s(t.team.join_code))]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"settings-section"},[n("div",{staticClass:"settings-label"},[t._v("Aliases "),n("fa",{attrs:{icon:"user-plus"}})],1),t._v(" "),n("div",{staticClass:"aliases"},t._l(t.user.aliases,function(e){return t.user.aliases.length>0?n("div",{staticClass:"alias tag mr-2"},[t._v("\n        "+t._s(e)+"  \n        "),n("a",{on:{click:function(n){return t.removeAlias(e)}}},[n("fa",{attrs:{icon:"times"}})],1)]):t._e()}),0),t._v(" "),n("form",{staticClass:"claim mb-2",on:{submit:function(e){return e.preventDefault(),t.addAlias()}}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.aliasInput,expression:"aliasInput"}],staticClass:"form-control",attrs:{pattern:"^\\S*$",type:"text",id:"athleteIDInput",placeholder:"Alias Athlete ID (no spaces)",required:""},domProps:{value:t.aliasInput},on:{input:function(e){e.target.composing||(t.aliasInput=e.target.value)}}}),t._v(" "),t._m(4)])]),t._v(" "),t.aliasSuccess?n("div",{staticClass:"alert alert-success"},[t._v(" \n      "+t._s(t.aliasSuccess)+" \n    ")]):t._e(),t._v(" "),t.aliasFailure?n("div",{staticClass:"alert alert-danger"},[t._v(" \n      "+t._s(t.aliasFailure)+"\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"settings-section danger-zone pb-4"},[n("div",{staticClass:"settings-label"},[t._v("Danger Zone")]),t._v(" "),t.makeSure?t._e():n("button",{staticClass:"btn btn-danger",on:{click:function(e){t.makeSure=!0}}},[t._v("\n      Delete your account "),n("fa",{attrs:{icon:"trash-alt"}})],1),t._v(" "),t.makeSure?n("div",{staticClass:"alert alert-info make-sure"},[t._v("\n      Are you sure? This cannot be undone.\n    ")]):t._e(),t._v(" "),t.makeSure?n("button",{staticClass:"btn btn-default make-sure",on:{click:function(e){t.makeSure=!1}}},[t._v("\n      No\n    ")]):t._e(),t._v(" "),t.makeSure?n("button",{staticClass:"btn btn-danger make-sure",on:{click:t.deleteAccount}},[t._v("\n      Yes, delete my account\n    ")]):t._e(),t._v(" "),t.deleteSuccess?n("div",{staticClass:"alert alert-success"},[t._v(" \n      "+t._s(t.deleteSuccess)+" \n    ")]):t._e()])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[e("img",{staticClass:"shoe mr-1",attrs:{src:"/images/trainer.svg"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[e("img",{staticClass:"shoe mr-1",attrs:{src:"/images/racer.svg"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[this._v(" miles per week ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-append"},[e("input",{staticClass:"btn btn-primary",attrs:{value:"Claim",type:"submit"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-append"},[e("input",{staticClass:"btn btn-primary",attrs:{value:"Claim",type:"submit"}})])}],!1,null,"1886955e",null);e.default=component.exports}}]);