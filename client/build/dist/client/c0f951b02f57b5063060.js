(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{462:function(e,t,r){var content=r(575);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("fe3923c8",content,!0,{sourceMap:!1})},574:function(e,t,r){"use strict";var n=r(462);r.n(n).a},575:function(e,t,r){(t=r(11)(!1)).push([e.i,"form label[data-v-2d5ca98c]{text-transform:uppercase;font-size:13px;font-weight:500}ul[data-v-2d5ca98c]{list-style:square}",""]),e.exports=t},776:function(e,t,r){"use strict";r.r(t);r(24);var n=r(3),o=(r(28),{head:function(){return{title:"Sign Up - RaceBase",meta:[{hid:"OpenGraph Image",property:"og:image",content:"https://racebase.run/images/opengraph/signup.png"}]}},data:function(){return{input:{email:"",password:"",confirm:"",name:"",referralCode:"",coach:!1},message:!1,error:!1}},methods:{signUp:function(){var e=this;this.input.confirm==this.input.password?this.$axios.post("user",{email:this.input.email,password:this.input.password,name:this.input.name,referralCode:this.input.referralCode,coach:this.input.coach}).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.data.error){t.next=5;break}e.error=!0,e.message=r.data.error,t.next=11;break;case 5:return e.error=!1,e.message="Successfully signed up.",t.next=9,e.$store.dispatch("auth/login",{email:e.input.email,password:e.input.password});case 9:t.sent,e.input.coach?e.$router.push("/signup/coach/claim"):e.$router.push("/signup/claim");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.error=!0,e.message=t.response.data})):(this.error=!0,this.message="Passwords don't match.")}}}),c=(r(574),r(16)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mx-auto w-95 mb-5 row"},[e._m(0),e._v(" "),r("div",{staticClass:"signup col"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.signUp(t)}}},[r("h2",{staticClass:"mt-4 mb-3"},[e._v("Sign Up")]),e._v(" "),r("label",{attrs:{for:"inputName"}},[e._v(" Name ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.name,expression:"input.name"}],staticClass:"form-control mb-3",attrs:{name:"name",type:"text",placeholder:"Name",required:""},domProps:{value:e.input.name},on:{input:function(t){t.target.composing||e.$set(e.input,"name",t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"inputEmail"}},[e._v(" Email ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.email,expression:"input.email"}],staticClass:"form-control mb-3",attrs:{type:"email",name:"email",placeholder:"Email",required:"",autofocus:""},domProps:{value:e.input.email},on:{input:function(t){t.target.composing||e.$set(e.input,"email",t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"inputPassword"}},[e._v(" Password ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],staticClass:"form-control mb-3",attrs:{name:"password",type:"password",placeholder:"Password",required:""},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"inputConfirm"}},[e._v(" Confirm Password ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.confirm,expression:"input.confirm"}],staticClass:"form-control mb-3",attrs:{name:"password",type:"password",placeholder:"Confirm Password",required:""},domProps:{value:e.input.confirm},on:{input:function(t){t.target.composing||e.$set(e.input,"confirm",t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"referralCode"}},[e._v(" Referral Code (Optional) ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.referralCode,expression:"input.referralCode"}],staticClass:"form-control mb-3",attrs:{name:"referralCode",type:"text",placeholder:"Referral Code"},domProps:{value:e.input.referralCode},on:{input:function(t){t.target.composing||e.$set(e.input,"referralCode",t.target.value)}}}),e._v(" "),r("div",{staticClass:"mb-3"},[r("input",{attrs:{type:"checkbox",required:"",name:"terms"}}),e._v("\n          I agree to the \n          "),r("nuxt-link",{attrs:{to:"terms",target:"_blank"}},[e._v(" Terms and Conditions\n          ")])],1),e._v(" "),r("div",[e._v("\n        Are you a coach? \n        "),r("label",{staticClass:"form-check-label mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.coach,expression:"input.coach"}],attrs:{type:"radio",name:"coach"},domProps:{value:!0,checked:e._q(e.input.coach,!0)},on:{change:function(t){return e.$set(e.input,"coach",!0)}}}),e._v(" Yep!   \n\n          "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.coach,expression:"input.coach"}],attrs:{type:"radio"},domProps:{value:!1,checked:e._q(e.input.coach,!1)},on:{change:function(t){return e.$set(e.input,"coach",!1)}}}),e._v(" No\n        ")])]),e._v(" "),e.message?r("div",{class:"d-block alert alert-"+(e.error?"danger":"success")},[e._v("\n        "+e._s(e.message)+"\n      ")]):e._e(),e._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Sign Up")])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"why col"},[r("h2",{staticClass:"mt-4"},[e._v(" Why sign up? ")]),e._v(" "),r("p",[e._v(" When you sign up for a RaceBase account, you get these great benefits: ")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Profile customization")]),e._v(", allowing you to claim results as your own, add photos and stories, and more ")]),e._v(" "),r("li",[e._v(" Access to our tried and true "),r("strong",[e._v("Logging")]),e._v(" system ")]),e._v(" "),r("li",[r("strong",[e._v("Race Feed")]),e._v(", where you can see the results and workouts of people you care about ")]),e._v(" "),r("li",[e._v(" According to our independent study, signing up reduces your risk of getting eaten by a flying spaghetti monster by up to "),r("strong",[e._v("30%")])])])])}],!1,null,"2d5ca98c",null);t.default=component.exports}}]);