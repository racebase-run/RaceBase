exports.ids=[19],exports.modules={173:function(e,t,n){"use strict";n.r(t);var o={components:{RaceHeader:()=>n.e(36).then(n.bind(null,185)),RaceActions:()=>n.e(35).then(n.bind(null,186)),ResultEditor:()=>n.e(37).then(n.bind(null,187)),RaceEditor:()=>n.e(1).then(n.bind(null,183)),ResultsTable:()=>n.e(38).then(n.bind(null,188))},head(){return{title:this.currentRace.name+" - RaceBase",meta:[{hid:"OpenGraph title",property:"og:title",content:this.currentRace.name},{hid:"OpenGraph image",property:"og:image",content:"https://racebase.io/images/opengraph/results.png"},{hid:"OpenGraph description",property:"og:description",content:this.currentRace.date+" at "+this.currentRace.location}]}},computed:{isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}},async asyncData({$axios:e,params:t,redirect:n,store:o}){let d=await e.$get("race/"+t.id),r={},c=t.gender||"mens";d.message?n("/races/notfound"):r=await e.$get("race/"+d._id+"/"+c+"/events");let l=Number(t.event)||0;var h;return l=l<r.length?l:0,h=o.getters["auth/isLoggedIn"]?await e.$get("race/vote/"+t.id).catch(e=>{console.log(e)}):{},{currentRace:d,eventList:r,eventNum:l,results:await e.$get("result/list/"+d._id+"/"+c+"/"+encodeURI(r[l])).catch(()=>{n("/races/notfound")}),teamResults:await e.$get("result/teamlist/"+d._id+"/"+c+"/"+encodeURI(r[l])).catch(()=>{n("/races/notfound")}),gender:c,voteData:h}},data:()=>({message:"",editMode:!1,addMode:!1,editingRace:!1,currentResult:{}}),methods:{loadResults:async function(){this.eventList=await this.$axios.$get("race/"+this.currentRace._id+"/"+this.gender+"/events").catch(()=>{console.log("Something went wrong getting the events list.")}),this.results=await this.$axios.$get("result/list/"+this.currentRace._id+"/"+this.gender+"/"+encodeURI(this.eventList[this.eventNum])).catch(()=>{console.log("Something went wrong.")}),this.teamResults=await this.$axios.$get("result/teamlist/"+this.currentRace._id+"/"+this.gender+"/"+encodeURI(this.eventList[this.eventNum])).catch(()=>{console.log("Something went wrong.")})},loadRace:async function(e){console.log(e),this.currentRace=await this.$axios.$get("race/"+this.currentRace._id),e&&this.loadResults()},closeWindow:function(){this.addMode=!1,this.editMode=!1,this.editingRace=!1,this.currentResult={}},openAddWindow:function(){this.addMode=!0,this.editMode=!1,this.editingRace=!1},openEditWindow:function(e){this.addMode=!1,this.editMode=!0,this.currentResult=e},editRace:function(){this.addMode=!1,this.editMode=!1,this.addingRace=!1,this.editingRace=!0}},watch:{$route:function(){this.gender=this.$route.params.gender||this.gender,this.eventNum=this.$route.params.event||0,this.updateResults()}}},d=n(1),component=Object(d.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mx-auto w-90 w-md-100 mx-md-0 pl-md-5"},[e.currentRace&&!e.message?n("RaceHeader",{attrs:{race:e.currentRace}}):e._e(),e._ssrNode(" "),e.message?e._e():n("RaceActions",{staticClass:"mb-3",attrs:{eventList:e.eventList,race:e.currentRace,gender:e.gender,voteData:e.voteData},on:{openAddWindow:e.openAddWindow,editRace:e.editRace,loadRace:e.loadRace}}),e._ssrNode(" "),n("ResultEditor",{attrs:{editMode:e.editMode,addMode:e.addMode,race:e.currentRace,currentResult:e.currentResult},on:{closeWindow:e.closeWindow,loadResults:e.loadResults}}),e._ssrNode(" "),n("RaceEditor",{attrs:{addingRace:!1,editingRace:e.editingRace,race:e.currentRace},on:{closeWindow:e.closeWindow,load:e.loadRace}}),e._ssrNode(" "),e.message?e._e():n("ResultsTable",{attrs:{eventList:e.eventList,eventNum:e.eventNum,results:e.results,teamResults:e.teamResults},on:{openEditWindow:e.openEditWindow}})],2)},[],!1,null,null,"01475fac");t.default=component.exports}};
//# sourceMappingURL=a679ecd9c5865f062aa8.js.map