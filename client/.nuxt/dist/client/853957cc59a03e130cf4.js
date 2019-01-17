(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{234:function(t,e,a){var n=a(291);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(11).default)("3e69c1fa",n,!0,{})},290:function(t,e,a){"use strict";var n=a(234);a.n(n).a},291:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,"@media (min-width:992px){form[data-v-49d7e16c]{width:45%}}form label[data-v-49d7e16c]{text-transform:uppercase;font-size:13px;font-weight:500}",""])},392:function(t,e,a){"use strict";a.r(e);a(23);var n=a(1),s=a.n(n),r=(a(32),{head:function(){return{title:"Sign Up - RaceBase",meta:[{hid:"OpenGraph Image",property:"og:image",content:"http://localhost:3000/images/opengraph/signup.png"}]}},data:function(){return{input:{email:"",password:"",confirm:"",name:""},message:!1,error:!1}},methods:{signUp:function(){var t=this;this.input.confirm==this.input.password?this.$axios.post("user",{email:this.input.email,password:this.input.password,name:this.input.name}).then(function(){var e=s()(regeneratorRuntime.mark(function e(a){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.data.error){e.next=5;break}t.error=!0,t.message=a.data.error,e.next=10;break;case 5:return t.error=!1,t.message="Successfully signed up.",e.next=9,t.$store.dispatch("auth/login",{email:t.input.email,password:t.input.password});case 9:e.sent;case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()):(this.error=!0,this.message="Passwords don't match.")}}}),i=(a(290),a(17)),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"mx-auto mx-md-0 w-90 pl-md-5",on:{submit:function(e){return e.preventDefault(),t.signUp(e)}}},[a("h2",{staticClass:"mt-4 mb-3"},[t._v("Sign Up")]),t._v(" "),a("label",{attrs:{for:"inputName"}},[t._v(" Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.name,expression:"input.name"}],staticClass:"form-control mb-3",attrs:{name:"name",type:"text",placeholder:"Name",required:""},domProps:{value:t.input.name},on:{input:function(e){e.target.composing||t.$set(t.input,"name",e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"inputEmail"}},[t._v(" Email ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.email,expression:"input.email"}],staticClass:"form-control mb-3",attrs:{type:"email",name:"email",placeholder:"Email",required:"",autofocus:""},domProps:{value:t.input.email},on:{input:function(e){e.target.composing||t.$set(t.input,"email",e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"inputPassword"}},[t._v(" Password ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],staticClass:"form-control mb-3",attrs:{name:"password",type:"password",placeholder:"Password",required:""},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"inputConfirm"}},[t._v(" Confirm Password ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.confirm,expression:"input.confirm"}],staticClass:"form-control mb-3",attrs:{name:"password",type:"password",placeholder:"Confirm Password",required:""},domProps:{value:t.input.confirm},on:{input:function(e){e.target.composing||t.$set(t.input,"confirm",e.target.value)}}}),t._v(" "),a("div",{staticClass:"mb-3"},[a("input",{attrs:{type:"checkbox",required:"",name:"terms"}}),t._v("\n      I agree to the \n      "),a("nuxt-link",{attrs:{to:"terms",target:"_blank"}},[t._v(" Terms and Conditions\n      ")])],1),t._v(" "),t.message?a("div",{class:"d-block alert alert-"+(t.error?"danger":"success")},[t._v("\n    "+t._s(t.message)+"\n  ")]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Sign Up")])])},[],!1,null,"49d7e16c",null);o.options.__file="signup.vue";e.default=o.exports}}]);