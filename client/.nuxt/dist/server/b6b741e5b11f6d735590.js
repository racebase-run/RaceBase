exports.ids=[28],exports.modules={104:function(t,e,c){"use strict";c.r(e);var d=c(68),r=c.n(d);for(var l in d)"default"!==l&&function(t){c.d(e,t,function(){return d[t]})}(l);e.default=r.a},105:function(t,e,c){(t.exports=c(2)(!1)).push([t.i,".fa-cog[data-v-5b828c17]{color:#333;font-size:20px;margin-bottom:1px;margin-right:5px}.fa-times[data-v-5b828c17]{cursor:pointer}.pic-name[data-v-5b828c17]{font-size:12px;text-align:center}.pictures[data-v-5b828c17]{width:90%}.claim[data-v-5b828c17]{display:inline-block;width:270px}.claim .btn.btn-primary[data-v-5b828c17]{margin-top:0}.profile .input-group-text[data-v-5b828c17]{font-size:14px}.profile .input-group-text img[data-v-5b828c17]{opacity:.7;width:25px}.profile-pic[data-v-5b828c17]{width:81px;height:81px}.brand-pic[data-v-5b828c17],.featured-pic[data-v-5b828c17],.profile-pic[data-v-5b828c17]{margin:0 auto}.featured-pic[data-v-5b828c17]{width:100px;border-radius:5px}.card .btn[data-v-5b828c17]{display:table;margin:0 auto}.card .settings-label[data-v-5b828c17]{text-align:center}.settings-section[data-v-5b828c17]{margin-top:20px}.settings-section .btn[data-v-5b828c17]{font-size:15px}.settings-section .settings-label[data-v-5b828c17]{text-transform:uppercase;font-weight:500;font-size:13px;margin-bottom:10px}.settings-section .tag[data-v-5b828c17]{font-size:14px;vertical-align:middle;border-radius:4px;border:1px solid #ccc;padding:6px 12px;display:inline-block;white-space:nowrap;margin-bottom:9px}.settings-section .alert[data-v-5b828c17]{width:270px;padding:8px 12px}.settings-section .athlete-id .btn[data-v-5b828c17]{margin-top:-9.5px}form input[data-v-5b828c17]{font-size:14px}@media screen and (max-width:767px){.alert[data-v-5b828c17],.claim[data-v-5b828c17]{width:90%;margin:10px auto 0}.danger-zone[data-v-5b828c17]{margin-bottom:50px}}",""])},151:function(t,e,c){"use strict";c.r(e);var d={data:()=>({id:"",aliasInput:"",claimInput:"",aliases:[],claimFailure:"",claimSuccess:"",aliasSuccess:"",aliasFailure:"",deleteSuccess:"",makeSure:!1,profilePic:null,brandPic:null,featuredPic:null,message:"",imageMessage:""}),head:()=>({title:"Settings - RaceBase"}),middleware:"auth",asyncData({store:t}){let e={...t.state.auth.user};return{user:e,id:e._id}},methods:{loadUser:async function(){await this.$store.dispatch("auth/fetchUser"),this.user={...this.$store.state.auth.user}},addAlias:function(){this.$axios.$post("user/"+this.id+"/alias/"+this.aliasInput).then(t=>{t.failure?(this.aliasSuccess=null,this.aliasFailure=t.failure):t.success&&(this.aliasFailure=null,this.aliasSuccess=t.success,this.loadUser())})},removeAlias:function(t){this.$axios.$delete("user/"+this.id+"/alias/"+t).then(t=>{this.aliasSuccess=null,this.aliasFailure=null,this.loadUser()})},claim:function(t){this.$axios.$post("user/claim/"+this.id+"/"+t).then(e=>{this.claimFailure="",this.claimSuccess="",e.failure?(this.claimSuccess=null,this.claimFailure=e.failure):e.success&&(this.claimFailure=null,this.claimSuccess=e.success,this.$set(this.user,"athlete_id",t))})},unclaim:function(t){this.$axios.$post("user/unclaim/"+this.id+"/"+t).then(t=>{this.claimFailure="",this.claimSuccess="",t.failure?(this.claimFailure=t.failure,this.claimSuccess=null):t.success&&(this.claimSuccess=t.success,this.claimFailure=null,this.$set(this.user,"athlete_id",""))})},deleteAccount:async function(){await this.$axios.$delete("user/"+this.id),await this.$store.dispatch("auth/logout")},updateProfile:function(){this.$axios.$put("user/"+this.id,this.user).then(t=>{this.message="Profile updated.",this.loadUser()})},onProfilePicChanged:function(t){this.profilePic=t.target.files[0]},onBrandPicChanged:function(t){this.brandPic=t.target.files[0]},onFeaturedPicChanged:function(t){this.featuredPic=t.target.files[0]},uploadProfilePic:function(){const t=new FormData;t.append("image",this.profilePic),this.$axios.$post("user/"+this.user._id+"/profile_pic",t).then(t=>{this.imageMessage="Profile updated.",this.loadUser()})},uploadBrandPic:function(){const t=new FormData;t.append("image",this.brandPic),this.$axios.$post("user/"+this.user._id+"/brand_pic",t).then(t=>{this.imageMessage="Profile updated.",this.loadUser()})},uploadFeaturedPic:function(){const t=new FormData;t.append("image",this.featuredPic),this.$axios.$post("user/"+this.user._id+"/featured_pic",t).then(t=>{this.imageMessage="Profile updated.",this.loadUser()})}}},r=c(1);var component=Object(r.a)(d,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t._ssrNode('<div class="mx-auto w-90 w-md-100 mx-md-0 pl-md-5" data-v-5b828c17>',"</div>",[t._ssrNode('<h1 class="mt-4" data-v-5b828c17>',"</h1>",[c("fa",{attrs:{icon:"cog"}}),t._ssrNode(" Settings \n  ")],2),t._ssrNode(" "),t.user.athlete_id?t._ssrNode('<div class="settings-section" data-v-5b828c17>',"</div>",[t._ssrNode('<div class="settings-label" data-v-5b828c17>Profile</div> '),t._ssrNode('<form class="profile mb-4 w-md-75 w-100" data-v-5b828c17>',"</form>",[t._ssrNode('<div class="row mb-3" data-v-5b828c17><div class="col-md-6 col-12 mb-md-0 mb-3" data-v-5b828c17><div class="input-group" data-v-5b828c17><input placeholder="Current Trainer"'+t._ssrAttr("value",t.user.trainer)+' class="form-control" data-v-5b828c17> <div class="input-group-append" data-v-5b828c17><span class="input-group-text" data-v-5b828c17><img src="/images/trainer.svg" class="shoe mr-1" data-v-5b828c17></span></div></div></div> <div class="col-md-6 col-12" data-v-5b828c17><div class="input-group" data-v-5b828c17><input placeholder="Current Racer"'+t._ssrAttr("value",t.user.racer)+' class="form-control" data-v-5b828c17> <div class="input-group-append" data-v-5b828c17><span class="input-group-text" data-v-5b828c17><img src="/images/racer.svg" class="shoe mr-1" data-v-5b828c17></span></div></div></div></div> '),t._ssrNode('<div class="row" data-v-5b828c17>',"</div>",[t._ssrNode('<div class="col-md-6 col-12 mb-md-0 mb-3" data-v-5b828c17><div class="input-group" data-v-5b828c17><input placeholder="Weekly Mileage"'+t._ssrAttr("value",t.user.mileage)+' class="form-control" data-v-5b828c17> <div class="input-group-append" data-v-5b828c17><span class="input-group-text" data-v-5b828c17> miles per week </span></div></div></div> '),t._ssrNode('<div class="col-md-6 col-12" data-v-5b828c17>',"</div>",[t._ssrNode('<div class="input-group" data-v-5b828c17>',"</div>",[t._ssrNode('<input placeholder="Location"'+t._ssrAttr("value",t.user.location)+' class="form-control" data-v-5b828c17> '),t._ssrNode('<div class="input-group-append" data-v-5b828c17>',"</div>",[t._ssrNode('<span class="input-group-text" data-v-5b828c17>',"</span>",[c("fa",{staticClass:"mr-1",attrs:{icon:"map-marker-alt"}})],1)])],2)])],2),t._ssrNode(' <div class="row mt-3" data-v-5b828c17><div class="col-md-6 col-12 mb-md-0 mb-3" data-v-5b828c17><input placeholder="Strava URL"'+t._ssrAttr("value",t.user.stravaUrl)+' class="form-control" data-v-5b828c17></div></div> <input type="submit" value="Update" class="btn btn-primary mt-3" data-v-5b828c17> '+(t.message?'<div class="mt-3" data-v-5b828c17>'+t._ssrEscape(" "+t._s(t.message)+" ")+"</div>":"\x3c!----\x3e"))],2)],2):t._e(),t._ssrNode(" "+(t.user.athlete_id?'<div class="settings-section pictures \n    row \n    mt-3 \n    w-100 w-md-auto" data-v-5b828c17><div class="col-md-4 col-12 mb-md-0 mb-3" data-v-5b828c17><div class="settings-section card p-3 mt-0" data-v-5b828c17><div class="settings-label mb-3" data-v-5b828c17> Profile Picture </div> <div class="row" data-v-5b828c17><div class="col-6 align-items-center align-content-center d-flex flex-wrap" data-v-5b828c17>'+(t.user.profilePicUrl?"<img"+t._ssrAttr("src",t.user.profilePicUrl)+' class="profile-pic" data-v-5b828c17>':"\x3c!----\x3e")+" "+(t.user.profilePicUrl?"\x3c!----\x3e":'<img src="/images/default.png" class="profile-pic" data-v-5b828c17>')+'</div> <div class="col-6" data-v-5b828c17><div data-v-5b828c17><label class="mb-2 btn btn-default" data-v-5b828c17>\n                Browse\n                <input type="file" name="image" hidden="hidden" data-v-5b828c17></label></div> <div data-v-5b828c17><button class="btn btn-primary" data-v-5b828c17> Upload </button></div></div></div> '+(t.profilePic?'<span class="pic-name mt-3" data-v-5b828c17>'+t._ssrEscape(" "+t._s(t.profilePic.name)+" ")+"</span>":"\x3c!----\x3e")+'</div></div> <div class="col-md-4 col-12 mb-md-0 mb-3" data-v-5b828c17><div class="settings-section card p-3 mt-0" data-v-5b828c17><div class="settings-label mb-3" data-v-5b828c17> Brand / Team Logo </div> <div class="row" data-v-5b828c17><div class="col-6 align-items-center align-content-center d-flex" data-v-5b828c17>'+(t.user.brandPicUrl?"<img"+t._ssrAttr("src",t.user.brandPicUrl)+' class="brand-pic mb-2" data-v-5b828c17>':"\x3c!----\x3e")+'</div> <div class="col-6" data-v-5b828c17><div data-v-5b828c17><label class="mb-2 mx-auto btn btn-default" data-v-5b828c17>\n                Browse\n                <input type="file" name="image" hidden="hidden" data-v-5b828c17></label></div> <div data-v-5b828c17><button class="btn btn-primary" data-v-5b828c17> Upload </button></div></div></div> '+(t.brandPic?'<span class="pic-name" data-v-5b828c17>'+t._ssrEscape(" "+t._s(t.brandPic.name)+" ")+"</span>":"\x3c!----\x3e")+'</div></div> <div class="col-md-4 col-12 mb-md-0 mb-3" data-v-5b828c17><div class="settings-section card p-3 pb-md-3 mt-0" data-v-5b828c17><div class="settings-label mb-3" data-v-5b828c17> Featured Image </div> <div class="row" data-v-5b828c17><div class="col-6 align-items-center align-content-center d-flex" data-v-5b828c17>'+(t.user.featuredPicUrl?"<img"+t._ssrAttr("src",t.user.featuredPicUrl)+' class="featured-pic mb-2" data-v-5b828c17>':"\x3c!----\x3e")+'</div> <div class="col-6" data-v-5b828c17><div data-v-5b828c17><label class="mb-2 mx-auto btn btn-default" data-v-5b828c17>\n                Browse\n                <input type="file" name="image" hidden="hidden" data-v-5b828c17></label></div> <div data-v-5b828c17><button class="btn btn-primary" data-v-5b828c17> Upload </button></div></div></div> '+(t.featuredPic?'<span class="pic-name" data-v-5b828c17>'+t._ssrEscape(" "+t._s(t.featuredPic.name)+" ")+"</span>":"\x3c!----\x3e")+"</div></div> "+(t.imageMessage?'<div class="mt-3 pl-3" data-v-5b828c17><strong data-v-5b828c17>'+t._ssrEscape(" "+t._s(t.imageMessage)+" ")+"</strong></div>":"\x3c!----\x3e")+"</div>":"\x3c!----\x3e")+' <div class="settings-section" data-v-5b828c17><div class="settings-label" data-v-5b828c17>Email</div> <div class="tag" data-v-5b828c17>'+t._ssrEscape(t._s(t.user.email))+"</div></div> "),t._ssrNode('<div class="settings-section" data-v-5b828c17>',"</div>",[t._ssrNode('<div class="settings-label" data-v-5b828c17>Athlete ID</div> '),t.user.athlete_id?t._ssrNode('<span class="athlete-id" data-v-5b828c17>',"</span>",[t._ssrNode('<div class="tag" data-v-5b828c17>',"</div>",[c("fa",{attrs:{icon:"user"}}),t._ssrNode(t._ssrEscape("   "+t._s(t.user.athlete_id)))],2),t._ssrNode(" "+(t.user.athlete_id?'<button class="btn btn-primary" data-v-5b828c17>\n        Unclaim\n      </button>':"\x3c!----\x3e"))],2):t._e(),t._ssrNode(" "+(t.user.athlete_id?"\x3c!----\x3e":'<form class="claim mb-2" data-v-5b828c17><div class="input-group" data-v-5b828c17><input pattern="^\\S*$" type="text" id="athleteIDInput" placeholder="Athlete ID (no spaces)" required="required"'+t._ssrAttr("value",t.claimInput)+' class="form-control" data-v-5b828c17> <span class="input-group-append" data-v-5b828c17><input value="Claim" type="submit" class="btn btn-primary" data-v-5b828c17></span></div></form>')+" "+(t.claimSuccess?'<div class="alert alert-success" data-v-5b828c17>'+t._ssrEscape(" \n      "+t._s(t.claimSuccess)+" \n    ")+"</div>":"\x3c!----\x3e")+" "+(t.claimFailure?'<div class="alert alert-danger" data-v-5b828c17>'+t._ssrEscape(" \n      "+t._s(t.claimFailure)+"\n    ")+"</div>":"\x3c!----\x3e"))],2),t._ssrNode(" "),t._ssrNode('<div class="settings-section" data-v-5b828c17>',"</div>",[t._ssrNode('<div class="settings-label" data-v-5b828c17>',"</div>",[t._ssrNode("Aliases "),c("fa",{attrs:{icon:"user-plus"}})],2),t._ssrNode(" "),t._ssrNode('<div class="aliases" data-v-5b828c17>',"</div>",t._l(t.user.aliases,function(e){return t.user.aliases.length>0?t._ssrNode('<div class="alias tag mr-2" data-v-5b828c17>',"</div>",[t._ssrNode(t._ssrEscape("\n        "+t._s(e)+"  \n        ")),t._ssrNode("<a data-v-5b828c17>","</a>",[c("fa",{attrs:{icon:"times"}})],1)],2):t._e()}),0),t._ssrNode(' <form class="claim mb-2" data-v-5b828c17><div class="input-group" data-v-5b828c17><input pattern="^\\S*$" type="text" id="athleteIDInput" placeholder="Alias Athlete ID (no spaces)" required="required"'+t._ssrAttr("value",t.aliasInput)+' class="form-control" data-v-5b828c17> <span class="input-group-append" data-v-5b828c17><input value="Claim" type="submit" class="btn btn-primary" data-v-5b828c17></span></div></form> '+(t.aliasSuccess?'<div class="alert alert-success" data-v-5b828c17>'+t._ssrEscape(" \n      "+t._s(t.aliasSuccess)+" \n    ")+"</div>":"\x3c!----\x3e")+" "+(t.aliasFailure?'<div class="alert alert-danger" data-v-5b828c17>'+t._ssrEscape(" \n      "+t._s(t.aliasFailure)+"\n    ")+"</div>":"\x3c!----\x3e"))],2),t._ssrNode(" "),t._ssrNode('<div class="settings-section danger-zone pb-4" data-v-5b828c17>',"</div>",[t._ssrNode('<div class="settings-label" data-v-5b828c17>Danger Zone</div> '),t.makeSure?t._e():t._ssrNode('<button class="btn btn-danger" data-v-5b828c17>',"</button>",[t._ssrNode("\n      Delete your account "),c("fa",{attrs:{icon:"trash-alt"}})],2),t._ssrNode(" "+(t.makeSure?'<div class="alert alert-info make-sure" data-v-5b828c17>\n      Are you sure? This cannot be undone.\n    </div>':"\x3c!----\x3e")+" "+(t.makeSure?'<button class="btn btn-default make-sure" data-v-5b828c17>\n      No\n    </button>':"\x3c!----\x3e")+" "+(t.makeSure?'<button class="btn btn-danger make-sure" data-v-5b828c17>\n      Yes, delete my account\n    </button>':"\x3c!----\x3e")+" "+(t.deleteSuccess?'<div class="alert alert-success" data-v-5b828c17>'+t._ssrEscape(" \n      "+t._s(t.deleteSuccess)+" \n    ")+"</div>":"\x3c!----\x3e"))],2)],2)])},[],!1,function(t){var e=c(104);e.__inject__&&e.__inject__(t)},"5b828c17","750d8839");e.default=component.exports},68:function(t,e,c){var content=c(105);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var d=c(3).default;t.exports.__inject__=function(t){d("92409fa2",content,!0,t)}}};
//# sourceMappingURL=b6b741e5b11f6d735590.js.map