(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{229:function(t,e,n){var content=n(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("26981d86",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";var o=n(229);n.n(o).a},299:function(t,e,n){(e=n(7)(!1)).push([t.i,".template-content[data-v-74faec5b]{background-color:#f5f5f5}.template-content.dark-bg[data-v-74faec5b]{background-color:#2c2c2c}.blank-space[data-v-74faec5b]{width:100%;height:150px}ul[data-v-74faec5b]{margin:0;padding:0}li[data-v-74faec5b]{list-style:none}main[data-v-74faec5b]{min-height:400px}.no-post[data-v-74faec5b]{position:relative;color:#444;text-align:center;height:150px}.no-post[data-v-74faec5b],.no-post p[data-v-74faec5b]{vertical-align:middle}.no-post p[data-v-74faec5b]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:230px;height:50px;line-height:1.5}.page-container[data-v-74faec5b]{padding-top:25px}.post-list[data-v-74faec5b]{margin:0 auto 15px;padding-top:15px;padding-bottom:15px;border-radius:5px;background-color:hsla(0,0%,92.5%,.35)}",""]),t.exports=e},369:function(t,e,n){"use strict";n.r(e);n(208);var o=n(201),c=n(224),r=n(207),l=n(221),d=n(195),m={meta:{index:2,style:"light",crumbs:[{route:"#",text:"影视"}]},head:function(){return{title:"影视 - Velas电波站",meta:[{hid:"keywords",name:"keywords",content:"动画分享,动画赏析,动画原声带分享"},{hid:"description",name:"description",content:"由Velas电波站提供的主观的影视和动画赏析"}]}},asyncData:function(t){t.params;var e=t.query,n=(t.error,parseInt(e.p)||1),r=[];return Object(o.a)(1,2,n,9).then((function(t){if(!t.data.find)throw new Error("data not found");t.data.archives.map((function(p){r.push(Object(c.a)(p))}));var e=t.data.count||0;return{posts:r,total:e,curPage:n}})).catch((function(t){return console.log(t),{posts:r,total:0,curPage:n}}))},components:{PageHeader:d.a,Paginate:r.a,PostCard:l.a},watchQuery:["p"],methods:{onPageChange:function(t){this.$router.push({path:this.$route.path,query:{p:t}})}},computed:{getPageCount:function(){return Math.ceil(this.total/9)}}},h=(n(298),n(5)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"template-content"},[n("page-header",{attrs:{title:"影视",subtitle:"用荧幕造一个梦","background-image":"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/bakemonogatari.jpg","background-position":"center center","mask-opacity":"0.15"}}),t._v(" "),n("main",{staticClass:"interlaced-main"},[n("div",{staticClass:"container page-container"},[n("transition-group",{staticClass:"row post-list",attrs:{name:"grid",tag:"div"}},t._l(t.posts,(function(p){return n("post-card",{key:p.id,staticClass:"col-lg-4 col-md-6 col-xs-12",attrs:{"p-id":p.id,"am-num":p.am,"p-title":p.title,"sub-title":p.subtitle,summary:p.summary,cover:p.cover,tag:p.tag,"sub-category":p.subCategory,"read-count":p.readCount,"comment-count":p.commentCount,"like-count":p.likeCount,"spoiler-tag":p.spoilerTag,date:p.date}})})),1),t._v(" "),1!==t.getPageCount||1!==t.curPage?n("paginate",{attrs:{"page-count":t.getPageCount,"click-handler":t.onPageChange,value:t.curPage,"prev-text":"‹","next-text":"›","container-class":"paginate-links paginate-style-1","hide-prev-next":""}}):t._e()],1),t._v(" "),n("div",{staticClass:"blank-space"})])],1)}),[],!1,null,"74faec5b",null);e.default=component.exports}}]);