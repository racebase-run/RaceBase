(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{262:function(t,e,a){var s=a(373);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("28f34901",s,!0,{})},372:function(t,e,a){"use strict";var s=a(262);a.n(s).a},373:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,"a.btn-danger[data-v-15ba36ee]{color:#fff}@media (min-width:992px){.card[data-v-15ba36ee]{width:75%!important}}",""])},389:function(t,e,a){"use strict";a.r(e);a(57),a(80),a(32);var s={props:["editingRace","addingRace","race","load"],data:function(){return{input:{name:"",location:"",link:"",date:"",csv:""},success:"",failure:"",createdLink:"",fileChosen:!1}},watch:{race:function(t,e){this.input=t}},created:function(){this.input=this.race||{}},methods:{createRace:function(){var t=this;this.$axios.$post("race/",this.input).then(function(e){e&&(t.success="Successfully created race.",t.createdLink="/races/"+e.race._id,t.$emit("load"))})},updateRace:function(){var t=this,e=!1;this.input.csv&&(e=!0),this.$axios.$put("race/"+this.race._id,this.input).then(function(a){a&&(t.success="Successfully updated race.",t.$emit("load",e))})},closeWindow:function(){this.success="",this.failure="",this.$emit("closeWindow")},deleteRace:function(){var t=this;this.$axios.$delete("race/"+this.race._id).then(function(e){t.$router.push("/user/content"),t.closeWindow()})},processFile:function(t){this.fileChosen=t.target.files[0].name;var e=new FileReader,a=this;e.onload=function(t){var s=e.result.split("\n");s[0]=s[0].toLowerCase().replace(/\s+/g,"_");var i=s.join("\n");a.input.csv=i},e.readAsText(t.target.files[0])}}},i=(a(372),a(17)),n=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.editingRace||t.addingRace?a("form",{staticClass:"card w-100",on:{submit:function(e){e.preventDefault(),t.editingRace?t.updateRace():t.createRace()}}},[a("div",{staticClass:"card-body"},[a("span",{staticClass:"close",on:{click:function(e){t.closeWindow()}}},[a("fa",{attrs:{icon:["far","times-circle"]}})],1),t._v(" "),a("h5",{staticClass:"card-title mb-3"},[t.addingRace?a("span",[t._v(" Add Race ")]):t._e(),t._v(" "),t.editingRace?a("span",[t._v(" Edit Race ")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-3 col-form-label",attrs:{for:"nameInput"}},[t._v(" Race Name* ")]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.name,expression:"input.name"}],staticClass:"form-control",attrs:{placeholder:"Race Name",type:"text",required:""},domProps:{value:t.input.name},on:{input:function(e){e.target.composing||t.$set(t.input,"name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"locationInput"}},[t._v(" Location* ")]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.location,expression:"input.location"}],staticClass:"form-control",attrs:{placeholder:"Location",type:"text",required:""},domProps:{value:t.input.location},on:{input:function(e){e.target.composing||t.$set(t.input,"location",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"dateInput"}},[t._v(" Date* ")]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.date,expression:"input.date"}],staticClass:"form-control",attrs:{pattern:"^(0[1-9]|1[012]|\\w*)(\\s|[/])(0?[1-9]|[12][0-9]|3[01])(\\s|[/])\\d\\d\\d\\d$",placeholder:"Month DD YYYY",type:"text",required:""},domProps:{value:t.input.date},on:{input:function(e){e.target.composing||t.$set(t.input,"date",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"linkInput"}},[t._v(" Link ")]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.link,expression:"input.link"}],staticClass:"form-control",attrs:{placeholder:"http://race.url",type:"text"},domProps:{value:t.input.link},on:{input:function(e){e.target.composing||t.$set(t.input,"link",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-3 col-form-label",attrs:{for:"linkInput"}},[t._v(" CSV File ")]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("label",{staticClass:"btn btn-default"},[t.fileChosen?t._e():a("span",[t._v(" Choose File ")]),t._v(" "),t.fileChosen?a("span",[t._v(" "+t._s(t.fileChosen)+" ")]):t._e(),t._v(" "),a("input",{staticClass:"file-input",attrs:{type:"file",name:"csvInput",hidden:""},on:{change:function(e){t.processFile(e)}}})])])]),t._v(" "),a("div",{staticClass:"btn-group-wrap"},[a("div",{staticClass:"btn-group panel-buttons"},[a("input",{staticClass:"btn btn-primary",attrs:{type:"submit"},domProps:{value:t.editingRace?"Update":"Create"}}),t._v(" "),t.editingRace?a("a",{staticClass:"btn btn-danger",on:{click:t.deleteRace}},[t._v("\n            Delete \n            "),a("fa",{attrs:{icon:["far","trash-alt"]}})],1):t._e()])]),t._v(" "),a("div",{staticClass:"mt-3"},[t.success?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(t._s(t.success))]):t._e(),t._v(" "),t.failure?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(t._s(t.failure))]):t._e(),t._v(" "),t.success&&t.addingRace?a("span",[t._v("\n        Click "),a("nuxt-link",{attrs:{to:t.createdLink}},[t._v("here")]),t._v(" to visit your new race.\n      ")],1):t._e()])])]):t._e()},[],!1,null,"15ba36ee",null);n.options.__file="RaceEditor.vue";e.default=n.exports}}]);