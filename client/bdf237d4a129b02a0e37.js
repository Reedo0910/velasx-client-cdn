(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{243:function(t,e,n){var content=n(324);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("1d4a18cc",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";var o=n(243);n.n(o).a},324:function(t,e,n){(e=n(7)(!1)).push([t.i,".template-content[data-v-7d5d4004]{background-color:#f5f5f5}.template-content.dark-bg[data-v-7d5d4004]{background-color:#2c2c2c}.blank-space[data-v-7d5d4004]{width:100%;height:150px}ul[data-v-7d5d4004]{margin:0;padding:0}li[data-v-7d5d4004]{list-style:none}main[data-v-7d5d4004]{min-height:400px}.no-post[data-v-7d5d4004]{position:relative;color:#444;text-align:center;height:150px}.no-post[data-v-7d5d4004],.no-post p[data-v-7d5d4004]{vertical-align:middle}.no-post p[data-v-7d5d4004]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:230px;height:50px;line-height:1.5}.page-container[data-v-7d5d4004]{padding-top:25px;padding-left:0;padding-right:0}.post-list[data-v-7d5d4004]{margin:0 auto;padding-top:10px}",""]),t.exports=e},378:function(t,e,n){"use strict";n.r(e);n(208);var o=n(201),r=n(224),d=n(207),c=n(221),l=n(195),h={meta:{index:1,style:"light",crumbs:[{route:"#",text:"杂聊"}]},head:function(){return{title:"杂聊 - Velas电波站",meta:[{hid:"keywords",name:"keywords",content:"碎碎念,博客,随笔,人机交互,数码产品"},{hid:"description",name:"description",content:"Velas碎碎念"}]}},asyncData:function(t){t.params;var e=t.query,n=(t.error,parseInt(e.p)||1),d=[];return Object(o.a)(1,1,n,9).then((function(t){if(!t.data.find)throw new Error("data not found");t.data.archives.map((function(p){d.push(Object(r.a)(p))}));var e=t.data.count||0;return{posts:d,total:e,curPage:n}})).catch((function(t){return console.log(t),{posts:d,total:0,curPage:n}}))},components:{PageHeader:l.a,Paginate:d.a,PostCard:c.a},watchQuery:["p"],methods:{onPageChange:function(t){this.$router.push({path:this.$route.path,query:{p:t}})}},computed:{getPageCount:function(){return Math.ceil(this.total/9)}}},m=(n(323),n(5)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"template-content"},[n("page-header",{attrs:{title:"杂聊",subtitle:"在平常中寻找意义","background-image":"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/cibao-chua-7hohUWqBqU4-unsplash.jpg","background-position":"center center","mask-opacity":"0.15"}}),t._v(" "),n("main",{staticClass:"interlaced-main"},[n("div",{staticClass:"container page-container"},[n("transition-group",{staticClass:"row post-list",attrs:{name:"grid",tag:"div"}},t._l(t.posts,(function(p){return n("post-card",{key:p.id,staticClass:"col-lg-4 col-md-6 col-xs-12",attrs:{"p-id":p.id,"am-num":p.am,"p-title":p.title,"sub-title":p.subtitle,summary:p.summary,cover:p.cover,tag:p.tag,"sub-category":p.subCategory,"read-count":p.readCount,"comment-count":p.commentCount,"like-count":p.likeCount,"spoiler-tag":p.spoilerTag,date:p.date}})})),1),t._v(" "),1!==t.getPageCount||1!==t.curPage?n("paginate",{attrs:{"page-count":t.getPageCount,"click-handler":t.onPageChange,value:t.curPage,"prev-text":"‹","next-text":"›","container-class":"paginate-links paginate-style-1","hide-prev-next":""}}):t._e()],1),t._v(" "),n("div",{staticClass:"blank-space"})])],1)}),[],!1,null,"7d5d4004",null);e.default=component.exports}}]);