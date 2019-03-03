exports.ids=[10],exports.modules={120:function(e,t,d){var content=d(224);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var c=d(3).default;e.exports.__inject__=function(e){c("ff73fd98",content,!0,e)}},223:function(e,t,d){"use strict";d.r(t);var c=d(120),r=d.n(c);for(var l in c)"default"!==l&&function(e){d.d(t,e,function(){return c[e]})}(l);t.default=r.a},224:function(e,t,d){(e.exports=d(2)(!1)).push([e.i,"a.btn-danger[data-v-52fadd22]{color:#fff}@media (min-width:992px){.card[data-v-52fadd22]{width:75%!important}}",""])},298:function(e,t,d){"use strict";d.r(t);var c={props:["editingRace","addingRace","race","load"],data:()=>({input:{name:"",location:"",link:"",date:"",csv:""},success:"",failure:"",createdLink:"",fileChosen:!1}),watch:{race:function(e,t){this.input=e}},created(){this.input=this.race||{}},methods:{createRace:function(){this.$axios.$post("race/",this.input).then(e=>{e&&(this.success="Successfully created race.",this.createdLink="/races/"+e.race._id,this.$emit("load"))}).catch(e=>{console.log(e),this.success=e.response.data})},updateRace:function(){let e=!1;this.input.csv&&(e=!0),this.$axios.$put("race/"+this.race._id,this.input).then(t=>{t&&(this.success="Successfully updated race.",this.$emit("load",e))}).catch(e=>{console.log(e),this.success=e.response.data})},closeWindow:function(){this.success="",this.failure="",this.$emit("closeWindow")},deleteRace:function(){this.$axios.$delete("race/"+this.race._id).then(e=>{this.$router.push("/user/content"),this.closeWindow()}).catch(e=>{console.log(e),this.success=e.response.data})},processFile:function(e){this.fileChosen=e.target.files[0].name;var t=new FileReader;let d=this;t.onload=function(e){var c=t.result.split("\n");c[0]=c[0].toLowerCase().replace(/\s+/g,"_");var r=c.join("\n");d.input.csv=r},t.readAsText(e.target.files[0])}}},r=d(1);var component=Object(r.a)(c,function(){var e=this,t=e.$createElement,d=e._self._c||t;return e.editingRace||e.addingRace?d("form",{staticClass:"card w-100",on:{submit:function(t){t.preventDefault(),e.editingRace?e.updateRace():e.createRace()}}},[e._ssrNode('<div class="card-body" data-v-52fadd22>',"</div>",[e._ssrNode('<span class="close" data-v-52fadd22>',"</span>",[d("fa",{attrs:{icon:["far","times-circle"]}})],1),e._ssrNode(' <h5 class="card-title mb-3" data-v-52fadd22>'+(e.addingRace?"<span data-v-52fadd22> Add Race </span>":"\x3c!----\x3e")+" "+(e.editingRace?"<span data-v-52fadd22> Edit Race </span>":"\x3c!----\x3e")+'</h5> <div class="form-group row" data-v-52fadd22><label for="nameInput" class="col-3 col-form-label" data-v-52fadd22> Race Name* </label> <div class="col-sm-9" data-v-52fadd22><input placeholder="Race Name" type="text" required="required"'+e._ssrAttr("value",e.input.name)+' class="form-control" data-v-52fadd22></div></div> <div class="form-group row" data-v-52fadd22><label for="locationInput" class="col-sm-3 col-form-label" data-v-52fadd22> Location* </label> <div class="col-sm-9" data-v-52fadd22><input placeholder="Location" type="text" required="required"'+e._ssrAttr("value",e.input.location)+' class="form-control" data-v-52fadd22></div></div> <div class="form-group row" data-v-52fadd22><label for="dateInput" class="col-sm-3 col-form-label" data-v-52fadd22> Date* </label> <div class="col-sm-9" data-v-52fadd22><input pattern="^(0[1-9]|1[012]|\\w*)(\\s|[/])(0?[1-9]|[12][0-9]|3[01])(\\s|[/])\\d\\d\\d\\d$" placeholder="Month DD YYYY" type="text" required="required"'+e._ssrAttr("value",e.input.date)+' class="form-control" data-v-52fadd22></div></div> <div class="form-group row" data-v-52fadd22><label for="linkInput" class="col-sm-3 col-form-label" data-v-52fadd22> Link </label> <div class="col-sm-9" data-v-52fadd22><input placeholder="http://race.url" type="text"'+e._ssrAttr("value",e.input.link)+' class="form-control" data-v-52fadd22></div></div> <div class="form-group row" data-v-52fadd22><label for="linkInput" class="col-sm-3 col-form-label" data-v-52fadd22> CSV File </label> <div class="col-sm-9" data-v-52fadd22><label class="btn btn-default" data-v-52fadd22>'+(e.fileChosen?"\x3c!----\x3e":"<span data-v-52fadd22> Choose File </span>")+" "+(e.fileChosen?"<span data-v-52fadd22>"+e._ssrEscape(" "+e._s(e.fileChosen)+" ")+"</span>":"\x3c!----\x3e")+' <input type="file" name="csvInput" hidden="hidden" class="file-input" data-v-52fadd22></label></div></div> '),e._ssrNode('<div class="btn-group-wrap" data-v-52fadd22>',"</div>",[e._ssrNode('<div class="btn-group panel-buttons" data-v-52fadd22>',"</div>",[e._ssrNode('<input type="submit"'+e._ssrAttr("value",e.editingRace?"Update":"Create")+' class="btn btn-primary" data-v-52fadd22> '),e.editingRace?e._ssrNode('<a class="btn btn-danger" data-v-52fadd22>',"</a>",[e._ssrNode("\n            Delete \n            "),d("fa",{attrs:{icon:["far","trash-alt"]}})],2):e._e()],2)]),e._ssrNode(" "),e._ssrNode('<div class="mt-3" data-v-52fadd22>',"</div>",[e._ssrNode((e.success?'<div role="alert" class="alert alert-success" data-v-52fadd22>'+e._ssrEscape(e._s(e.success))+"</div>":"\x3c!----\x3e")+" "+(e.failure?'<div role="alert" class="alert alert-danger" data-v-52fadd22>'+e._ssrEscape(e._s(e.failure))+"</div>":"\x3c!----\x3e")+" "),e.success&&e.addingRace?e._ssrNode("<span data-v-52fadd22>","</span>",[e._ssrNode("\n        Click "),d("nuxt-link",{attrs:{to:e.createdLink}},[e._v("here")]),e._ssrNode(" to visit your new race.\n      ")],2):e._e()],2)],2)]):e._e()},[],!1,function(e){var t=d(223);t.__inject__&&t.__inject__(e)},"52fadd22","1d9aca18");t.default=component.exports}};
//# sourceMappingURL=8d582abe9b555e7d634f.js.map