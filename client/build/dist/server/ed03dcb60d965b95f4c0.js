exports.ids=[3],exports.modules={180:function(t,e,r){"use strict";r.r(e);var n=r(57),l=r.n(n);let{formatDateUrl:d,getDateFromUrl:o}=r(61);var c={props:["date","interval"],methods:{changeToPrev:function(){if(!this.valid)return;let t=d(this.dateAsMoment.subtract(Number(this.interval),"days"));this.$router.push({params:{date:t}})},changeToNext:function(){if(!this.valid)return;let t=d(this.dateAsMoment.add(Number(this.interval),"days"));this.$router.push({params:{date:t}})}},computed:{valid:function(){return this.dateAsMoment.isValid()},dateAsMoment:function(){return l()(o(this.date))}}},h=r(1),component=Object(h.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"d-flex"},[this._ssrNode('<div class="btn btn-default log-pager d-inline-block mt-auto"> Prev </div> <div class="btn btn-default log-pager d-inline-block ml-2"> Next </div>')])},[],!1,null,null,"00414e8e");e.default=component.exports}};
//# sourceMappingURL=ed03dcb60d965b95f4c0.js.map