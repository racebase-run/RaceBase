exports.ids=[81],exports.modules={187:function(t,e,d){"use strict";d.r(e);var r=d(92),l=d.n(r);for(var n in r)"default"!==n&&function(t){d.d(e,t,(function(){return r[t]}))}(n);e.default=l.a},188:function(t,e,d){(e=d(2)(!1)).push([t.i,".profile .input-group-text[data-v-71569510]{font-size:14px}.profile .input-group-text img[data-v-71569510]{opacity:.7;width:25px}.profile-pic[data-v-71569510]{border-radius:7px;overflow:hidden;display:inline-block;width:80px;height:80px}.brand-pic[data-v-71569510],.featured-pic[data-v-71569510],.profile-pic[data-v-71569510]{margin:0 auto}.featured-pic[data-v-71569510]{width:100px;border-radius:5px}.card .btn[data-v-71569510]{display:table;margin:0 auto}.card .settings-label[data-v-71569510]{text-align:center}.settings-label[data-v-71569510]{text-transform:uppercase;font-weight:500;font-size:13px;margin-bottom:10px}.tag[data-v-71569510]{font-size:14px;vertical-align:middle;border-radius:4px;border:1px solid #ccc;padding:6px 12px;white-space:nowrap;margin-bottom:9px}.claim[data-v-71569510],.tag[data-v-71569510]{display:inline-block}.claim[data-v-71569510]{width:270px}.claim .btn.btn-primary[data-v-71569510]{margin-top:0}.claim-prompt[data-v-71569510]{font-size:20px;text-align:center;color:#777}.claim-prompt .btn[data-v-71569510]{text-transform:uppercase;font-size:18px;font-weight:500}",""]),t.exports=e},313:function(t,e,d){"use strict";d.r(e);var r={data:()=>({id:"",claimInput:"",claimFailure:"",claimSuccess:"",aliasSuccess:"",aliasFailure:"",aliasInput:"",aliases:[],profilePic:null,brandPic:null,featuredPic:null,message:"",imageMessage:""}),async asyncData({store:t,$axios:e}){let d={...t.state.auth.user};return{user:d,id:d._id,publicLogs:d.publicLogs}},components:{ProfilePic:()=>d.e(0).then(d.bind(null,346)),SettingsNav:()=>d.e(6).then(d.bind(null,355))},middleware:"auth",methods:{loadUser:async function(){await this.$store.dispatch("auth/fetchUser"),this.user={...this.$store.state.auth.user},this.currentEmail=this.user.email},addAlias:async function(){try{await this.$axios.$post("user/"+this.id+"/alias/"+this.aliasInput);this.loadUser()}catch(t){console.log(t.response.data),this.aliasFailure=t.response.data,this.aliasSuccess=null}},removeAlias:function(t){this.$axios.$delete("user/"+this.id+"/alias/"+t).then(t=>{this.aliasSuccess=null,this.aliasFailure=null,this.loadUser()}).catch(t=>{this.aliasFailure=t.response.data,this.aliasSuccess=null})},unclaim:function(t){this.$axios.$post("user/unclaim/athlete").then(t=>{this.claimSuccess=t.success,this.claimFailure=null,this.loadUser()}).catch(t=>{console.log(t),this.claimFailure=t.response.data,this.claimSuccess=null})},updateProfile:function(){this.$axios.$put("user/"+this.id,this.user).then(t=>{this.message="Profile updated.",this.loadUser()}).catch(t=>{this.message=t.response.data})},onProfilePicChanged:function(t){this.profilePic=t.target.files[0]},onBrandPicChanged:function(t){this.brandPic=t.target.files[0]},onFeaturedPicChanged:function(t){this.featuredPic=t.target.files[0]},uploadProfilePic:function(){const t=new FormData;t.append("image",this.profilePic),this.$axios.$post("user/"+this.user._id+"/profile_pic",t).then(t=>{this.imageMessage="Profile updated.",this.loadUser()}).catch(t=>{console.log(t),this.imageMessage=t.response.data})},uploadBrandPic:function(){const t=new FormData;t.append("image",this.brandPic),this.$axios.$post("user/"+this.user._id+"/brand_pic",t).then(t=>{this.imageMessage="Profile updated.",this.loadUser()}).catch(t=>{console.log(t),this.imageMessage=t.response.data})},uploadFeaturedPic:function(){const t=new FormData;t.append("image",this.featuredPic),this.$axios.$post("user/"+this.user._id+"/featured_pic",t).then(t=>{this.imageMessage="Profile updated.",this.loadUser()}).catch(t=>{console.log(t),this.imageMessage=t.response.data})},changeLogType:function(){console.log(this.publicLogs),this.$axios.$put("user/"+this.id,{publicLogs:this.publicLogs}).then(t=>{this.loadUser()}).catch(t=>{console.log(t),this.emailMessage=t.response.data})}}},l=d(1);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"mx-auto w-90 w-md-100 mx-md-0 pl-md-5"},[t._ssrNode('<h1 class="mt-4" data-v-71569510>',"</h1>",[d("fa",{attrs:{icon:"cogs"}}),t._ssrNode(" Profile \n  ")],2),t._ssrNode(" "),d("SettingsNav",{attrs:{coach:t.user.coach}}),t._ssrNode(" "),t.user.athlete_id?t._e():t._ssrNode('<div class="claim-prompt my-4" data-v-71569510>',"</div>",[t._ssrNode("<div data-v-71569510> To get started with your profile... </div> "),d("nuxt-link",{staticClass:"btn btn-primary mt-3",attrs:{to:"/signup/claim"}},[t._v("Claim your Athlete ID")])],2),t._ssrNode(" "),t.user.athlete_id?t._ssrNode('<div class="settings-section" data-v-71569510>',"</div>",[t._ssrNode('<div class="settings-label" data-v-71569510>Athlete ID</div> '),t.user.athlete_id?t._ssrNode('<div class="athlete-id d-flex align-items-center mb-3" data-v-71569510>',"</div>",[t._ssrNode('<div class="tag mb-0 mr-2" data-v-71569510>',"</div>",[d("fa",{attrs:{icon:"user"}}),t._ssrNode(t._ssrEscape("   "+t._s(t.user.athlete_id)))],2),t._ssrNode(" "+(t.user.athlete_id?'<button class="btn btn-primary" data-v-71569510>\n        Unclaim\n      </button>':"\x3c!----\x3e"))],2):t._e()],2):t._e(),t._ssrNode(" "),t.user.athlete_id?t._ssrNode('<div class="settings-section mb-3" data-v-71569510>',"</div>",[t._ssrNode('<div class="settings-label" data-v-71569510>',"</div>",[t._ssrNode("Aliases "),d("fa",{attrs:{icon:"user-plus"}})],2),t._ssrNode(" "),t._ssrNode('<div class="aliases" data-v-71569510>',"</div>",t._l(t.user.aliases,(function(e){return t.user.aliases.length>0?t._ssrNode('<div class="alias tag mr-2" data-v-71569510>',"</div>",[t._ssrNode(t._ssrEscape("\n        "+t._s(e)+"  \n        ")),t._ssrNode("<a data-v-71569510>","</a>",[d("fa",{attrs:{icon:"times"}})],1)],2):t._e()})),0),t._ssrNode(' <form class="claim mb-2" data-v-71569510><div class="input-group" data-v-71569510><input pattern="^\\S*$" type="text" id="athleteIDInput" placeholder="Alias Athlete ID (no spaces)" required="required"'+t._ssrAttr("value",t.aliasInput)+' class="form-control" data-v-71569510> <span class="input-group-append" data-v-71569510><input value="Claim" type="submit" class="btn btn-primary" data-v-71569510></span></div></form> <br data-v-71569510> '+(t.aliasFailure?'<div class="alert alert-warning d-inline-block mt-2" data-v-71569510>'+t._ssrEscape(" \n      "+t._s(t.aliasFailure)+"\n    ")+"</div>":"\x3c!----\x3e"))],2):t._e(),t._ssrNode(" "),t.user.athlete_id?t._ssrNode('<div class="settings-section" data-v-71569510>',"</div>",[t._ssrNode('<div class="settings-label" data-v-71569510>Profile</div> '),t._ssrNode('<form class="profile mb-4 w-md-75 w-100" data-v-71569510>',"</form>",[t._ssrNode('<div class="row mb-3" data-v-71569510><div class="col-md-6 col-12 mb-md-0 mb-3" data-v-71569510><div class="input-group" data-v-71569510><input placeholder="Current Trainer"'+t._ssrAttr("value",t.user.trainer)+' class="form-control" data-v-71569510> <div class="input-group-append" data-v-71569510><span class="input-group-text" data-v-71569510><img src="/images/trainer.svg" class="shoe mr-1" data-v-71569510></span></div></div></div> <div class="col-md-6 col-12" data-v-71569510><div class="input-group" data-v-71569510><input placeholder="Current Racer"'+t._ssrAttr("value",t.user.racer)+' class="form-control" data-v-71569510> <div class="input-group-append" data-v-71569510><span class="input-group-text" data-v-71569510><img src="/images/racer.svg" class="shoe mr-1" data-v-71569510></span></div></div></div></div> '),t._ssrNode('<div class="row" data-v-71569510>',"</div>",[t._ssrNode('<div class="col-md-6 col-12 mb-md-0 mb-3" data-v-71569510><div class="input-group" data-v-71569510><input placeholder="Weekly Mileage"'+t._ssrAttr("value",t.user.mileage)+' class="form-control" data-v-71569510> <div class="input-group-append" data-v-71569510><span class="input-group-text" data-v-71569510> miles per week </span></div></div></div> '),t._ssrNode('<div class="col-md-6 col-12" data-v-71569510>',"</div>",[t._ssrNode('<div class="input-group" data-v-71569510>',"</div>",[t._ssrNode('<input placeholder="Location"'+t._ssrAttr("value",t.user.location)+' class="form-control" data-v-71569510> '),t._ssrNode('<div class="input-group-append" data-v-71569510>',"</div>",[t._ssrNode('<span class="input-group-text" data-v-71569510>',"</span>",[d("fa",{staticClass:"mr-1",attrs:{icon:"map-marker-alt"}})],1)])],2)])],2),t._ssrNode(' <div class="row mt-3" data-v-71569510><div class="col-md-6 col-12 mb-md-0 mb-3" data-v-71569510><input placeholder="Strava URL"'+t._ssrAttr("value",t.user.stravaUrl)+' class="form-control" data-v-71569510></div></div> <input type="submit" value="Update" class="btn btn-primary mt-3" data-v-71569510> '+(t.message?'<div class="mt-3" data-v-71569510>'+t._ssrEscape(" "+t._s(t.message)+" ")+"</div>":"\x3c!----\x3e"))],2)],2):t._e(),t._ssrNode(" "),t.user.athlete_id?t._ssrNode('<div class="settings-section pictures \n    row \n    mt-3 \n    w-100 w-md-auto" data-v-71569510>',"</div>",[t._ssrNode('<div class="col-md-4 col-12 mb-md-0 mb-3" data-v-71569510>',"</div>",[t._ssrNode('<div class="settings-section card p-3 mt-0" data-v-71569510>',"</div>",[t._ssrNode('<div class="settings-label mb-3" data-v-71569510> Profile Picture </div> '),t._ssrNode('<div class="row" data-v-71569510>',"</div>",[t._ssrNode('<div class="profile-pic" data-v-71569510>',"</div>",[d("ProfilePic",{attrs:{url:t.user.profilePicUrl}})],1),t._ssrNode(' <div class="col-6" data-v-71569510><div data-v-71569510><label class="mb-2 btn btn-default" data-v-71569510>\n                Browse\n                <input type="file" name="image" hidden="hidden" data-v-71569510></label></div> <div data-v-71569510><button class="btn btn-primary" data-v-71569510> Upload </button></div></div>')],2),t._ssrNode(" "+(t.profilePic?'<span class="pic-name mt-3" data-v-71569510>'+t._ssrEscape(" "+t._s(t.profilePic.name)+" ")+"</span>":"\x3c!----\x3e"))],2)]),t._ssrNode(' <div class="col-md-4 col-12 mb-md-0 mb-3" data-v-71569510><div class="settings-section card p-3 mt-0" data-v-71569510><div class="settings-label mb-3" data-v-71569510> Brand / Team Logo </div> <div class="row" data-v-71569510><div class="col-6 align-items-center align-content-center d-flex" data-v-71569510>'+(t.user.brandPicUrl?"<img"+t._ssrAttr("src",t.user.brandPicUrl)+' class="brand-pic mb-2" data-v-71569510>':"\x3c!----\x3e")+'</div> <div class="col-6" data-v-71569510><div data-v-71569510><label class="mb-2 mx-auto btn btn-default" data-v-71569510>\n                Browse\n                <input type="file" name="image" hidden="hidden" data-v-71569510></label></div> <div data-v-71569510><button class="btn btn-primary" data-v-71569510> Upload </button></div></div></div> '+(t.brandPic?'<span class="pic-name" data-v-71569510>'+t._ssrEscape(" "+t._s(t.brandPic.name)+" ")+"</span>":"\x3c!----\x3e")+'</div></div> <div class="col-md-4 col-12 mb-md-0 mb-3" data-v-71569510><div class="settings-section card p-3 pb-md-3 mt-0" data-v-71569510><div class="settings-label mb-3" data-v-71569510> Featured Image </div> <div class="row" data-v-71569510><div class="col-6 align-items-center align-content-center d-flex" data-v-71569510>'+(t.user.featuredPicUrl?"<img"+t._ssrAttr("src",t.user.featuredPicUrl)+' class="featured-pic mb-2" data-v-71569510>':"\x3c!----\x3e")+'</div> <div class="col-6" data-v-71569510><div data-v-71569510><label class="mb-2 mx-auto btn btn-default" data-v-71569510>\n                Browse\n                <input type="file" name="image" hidden="hidden" data-v-71569510></label></div> <div data-v-71569510><button class="btn btn-primary" data-v-71569510> Upload </button></div></div></div> '+(t.featuredPic?'<span class="pic-name" data-v-71569510>'+t._ssrEscape(" "+t._s(t.featuredPic.name)+" ")+"</span>":"\x3c!----\x3e")+"</div></div> "+(t.imageMessage?'<div class="mt-3 pl-3" data-v-71569510><strong data-v-71569510>'+t._ssrEscape(" "+t._s(t.imageMessage)+" ")+"</strong></div>":"\x3c!----\x3e"))],2):t._e()],2)}),[],!1,(function(t){var e=d(187);e.__inject__&&e.__inject__(t)}),"71569510","09d9326f");e.default=component.exports},92:function(t,e,d){var content=d(188);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=d(3).default;t.exports.__inject__=function(t){r("0bcb865a",content,!0,t)}}};