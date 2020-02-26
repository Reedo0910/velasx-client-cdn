(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{201:function(t,e,o){"use strict";o(17);var r=o(220),n={timeout:9e4,withCredentials:!0,baseURL:"/api"},l=o.n(r).a.create(n);l.interceptors.response.use((function(t){return t}),(function(t){if(t.response)switch(t.response.status){case 404:console.log(t)}return Promise.reject(t)})),e.a=l},203:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return l})),o.d(e,"e",(function(){return c})),o.d(e,"a",(function(){return d})),o.d(e,"d",(function(){return f})),o.d(e,"f",(function(){return v})),o.d(e,"g",(function(){return h}));var r=o(201);function n(t){return Object(r.a)({url:"/archives/archive/"+t,method:"get"})}function l(t,e,o){var n={columnType:t=t||"",page:e=e||1,count:o=o||-1};return Object(r.a)({url:"/archives/list/",method:"get",params:n})}function c(t,e,o,n){var l={archiveId:t,columnId:e,categoryId:o,publishDate:n};return Object(r.a)({url:"/archives/related/",method:"get",params:l})}function d(t,e,o,n){var l={columnId:t,categoryId:e=e||0,page:o=o||1,count:n=n||5};return Object(r.a)({url:"/archives/column/",method:"get",params:l})}function f(t){return Object(r.a)({url:"/archives/like/"+t,method:"get"})}function v(t){var data={archiveId:t};return Object(r.a)({url:"/archives/like",method:"post",data:data})}function h(t){var data={archiveId:t};return Object(r.a)({url:"/archives/share",method:"post",data:data})}},206:function(t,e,o){"use strict";var r=o(219),n=o.n(r);n.a.locale("zh-cn"),e.a=n.a},208:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return n}));var r=[{title:"未分类",category:[]},{title:"频道",category:[{title:"未分类",sub:["未分类"]},{title:"杂聊",sub:["未分类","随笔","碎碎念","科技观点","摘抄"]},{title:"影视",sub:["未分类","动画评析","动画推荐","动画原声"]},{title:"游戏",sub:["未分类","游戏日记","游戏鉴赏","游戏原声"]},{title:"小说",sub:["未分类","短篇小说","中篇小说","迷你小说"]}]},{title:"日志",category:[{title:"未分类",sub:[]},{title:"网站日志",sub:[]},{title:"公告",sub:[]}]}],n=["/","/","/log"]},216:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"a",(function(){return n}));var r=[{icon:"icon-new",text:"未分类",link:"/",param:"home",themeColor:"#444"},{icon:"icon-cup-of-tea",link:"/talk",text:"杂聊",themeColor:"#fdb400"},{icon:"icon-icon-test",text:"影视",link:"/cinephile",param:"cinephile",themeColor:"#c4183c"},{icon:"icon-games",text:"游戏",link:"/game",param:"game",themeColor:"#007bfc"},{icon:"icon-textbook",text:"小说",link:"/novel",param:"novel",themeColor:"#5a6169"}],n=[{text:"日志",replaceText:"网站日志",themeColor:"#202528",isTextOnly:!0}]},217:function(t,e,o){var content=o(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("6fe40b30",content,!0,{sourceMap:!1})},218:function(t,e,o){var content=o(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("2cc8d184",content,!0,{sourceMap:!1})},223:function(t,e,o){"use strict";o(198);var r=o(206),n=o(83),l=o(216),c=[],d=l.b.concat(l.a);d.map((function(t){c.push(t.text)}));var f={name:"PostCard",props:{pId:{type:Number,required:!0},pTitle:{type:String,required:!0},subTitle:{type:String,required:!0},summary:{type:String,required:!0},cover:{type:String,required:!0},tag:{type:String,required:!0},category:{type:String,default:""},subCategory:{type:String,required:!0},amNum:{type:String,required:!0},spoilerTag:{type:Number},readCount:{type:Number,required:!0},commentCount:{type:Number,required:!0},likeCount:{type:Number,required:!0},date:{type:String,required:!0},hideTitle:{type:Boolean,default:!1}},data:function(){return{}},methods:{formatTime:function(t){return Object(r.a)(t).fromNow()}},computed:{getCover:function(){return this.cover?this.cover:Object(n.g)(this.date)},getCategoryTagName:function(){var t=c.indexOf(this.category);return t<=0?this.subCategory:d[t].replaceText?d[t].replaceText:this.category},getCategoryTagColor:function(){var t=c.indexOf(this.category);return t<=0?"#141414":d[t].themeColor}}},v=(o(229),o(5)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nuxt-link",{staticClass:"post-item-card",attrs:{to:"/am/"+t.pId}},[o("div",{staticClass:"card-header"},[o("div",{staticClass:"post-cover-wrapper"},[o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.getCover,expression:"getCover",arg:"background-image"}],staticClass:"post-cover lazy-bg"})]),t._v(" "),o("div",{staticClass:"category-tag small",style:{"background-color":t.getCategoryTagColor}},[o("span",[t._v(t._s(t.getCategoryTagName))])]),t._v(" "),o("div",{staticClass:"text-shade"})]),t._v(" "),o("div",{staticClass:"card-body"},[o("ul",{staticClass:"info-list"},[o("li",[o("i",{staticClass:"iconfont icon-radio-tower"}),t._v(" "),o("span",{staticClass:"text-muted"},[t._v(t._s(t.amNum))]),t._v(" "),o("span",{staticClass:"small"},[t._v("kHz")])]),t._v(" "),o("li",[o("i",{staticClass:"iconfont icon-like"}),t._v("\n          "+t._s(t.likeCount)+"\n        ")]),t._v(" "),o("li",[o("i",{staticClass:"iconfont icon-commentprocessingoutline"}),t._v("\n          "+t._s(t.commentCount)+"\n        ")]),t._v(" "),o("li",[o("i",{staticClass:"iconfont icon-time"}),t._v("\n          "+t._s(t.formatTime(t.date))+"\n        ")])]),t._v(" "),t.hideTitle?t._e():o("h3",{class:t.subTitle?"with-subtitle":""},[t._v(t._s(t.pTitle))]),t._v(" "),t.subTitle||!t.hideTitle?o("h4",[t._v(t._s(t.subTitle))]):t._e(),t._v(" "),o("p",{staticClass:"small"},[t._v(t._s(t.summary))]),t._v(" "),o("div",{staticClass:"bottom-info"},[2===t.spoilerTag?o("div",{directives:[{name:"tooltip",rawName:"v-tooltip.right.ios",value:"建议观看后阅读",expression:"'建议观看后阅读'",modifiers:{right:!0,ios:!0}}],staticClass:"small spoiler-tag severe"},[t._v("剧透")]):t._e()])])])],1)}),[],!1,null,"b067a83a",null);e.a=component.exports},224:function(t,e,o){var map={"./zh-cn":207,"./zh-cn.js":207};function r(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=224},229:function(t,e,o){"use strict";var r=o(217);o.n(r).a},230:function(t,e,o){(e=o(7)(!1)).push([t.i,".post-item-card[data-v-b067a83a]{display:block;text-decoration:none;color:#000;width:100%;overflow:hidden;position:relative;border-radius:10px;background-color:#fff;border:3px solid #efefef;cursor:pointer;margin-bottom:30px;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}.post-item-card[data-v-b067a83a]:hover{border-color:#ccc;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}.post-item-card:hover .post-cover[data-v-b067a83a]{-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08)}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-item-card[data-v-b067a83a]{color:#fff;background-color:#222;border-color:#3e3e3e}body:not(.no-dark-theme) .post-item-card[data-v-b067a83a]:hover{border-color:#1c1c1c}}.card-header[data-v-b067a83a]{position:relative;min-height:13rem}.card-header.mini-header[data-v-b067a83a]{min-height:3rem}.post-cover-wrapper[data-v-b067a83a]{width:100%;height:100%;position:absolute;z-index:1;overflow:hidden;background-color:#9c9c9c}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-cover-wrapper[data-v-b067a83a]{background-color:#2c2c2c}}.post-cover[data-v-b067a83a]{width:100%;height:100%;position:absolute;background-size:cover;background-position:50%;background-repeat:no-repeat;-webkit-transition:all .4s ease-out;-o-transition:all .4s ease-out;transition:all .4s ease-out}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-cover[data-v-b067a83a]{-webkit-filter:grayscale(30%) brightness(95%);filter:grayscale(30%) brightness(95%)}}.text-shade[data-v-b067a83a]{position:absolute;z-index:10;bottom:0;left:0;width:100%;height:100px;background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,.396078)));background:-o-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.396078));background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.396078))}.category-tag[data-v-b067a83a]{position:absolute;top:-17px;right:-6px;background-color:#141414;color:#fff;padding:25px 20px 8px 17px;border-top-right-radius:10px;border-bottom-left-radius:10px;z-index:2}.card-body[data-v-b067a83a]{position:relative;padding:20px 25px;min-height:7rem}.card-body h3[data-v-b067a83a],.card-body h4[data-v-b067a83a],.card-body p[data-v-b067a83a]{position:relative;z-index:5;margin:0 0 .5em;line-height:1.5}.card-body h3.with-subtitle[data-v-b067a83a]{margin-bottom:0}.card-body h4[data-v-b067a83a]{margin-top:0;font-size:.9em;color:#666}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .card-body h4[data-v-b067a83a]{color:#ccc}}.card-body .am-tag[data-v-b067a83a]{position:absolute;z-index:1;color:#ccc;font-size:16px;font-weight:700;right:25px;top:20px}.card-body .info-block[data-v-b067a83a]{margin-top:15px}.card-body .info-block i[data-v-b067a83a]{font-weight:700}.card-body .bottom-info[data-v-b067a83a]{padding-top:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.spoiler-tag[data-v-b067a83a]{display:inline-block;border:1px solid #888;line-height:20px;color:#000;vertical-align:middle;padding:0 5px;border-radius:3px;margin-right:.7em}.spoiler-tag.severe[data-v-b067a83a]{border-color:#c4183c;color:#c4183c}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .spoiler-tag.severe[data-v-b067a83a]{border-color:#ff6f8c;color:#ff6f8c}}.spoiler-tag.light[data-v-b067a83a]{border-color:#17c671;color:#17c671}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .spoiler-tag.light[data-v-b067a83a]{border-color:#f0b2be;color:#f0b2be}}.post-tag[data-v-b067a83a]{display:inline-block;line-height:20px;margin:0!important;border:1px solid #222;border-radius:3px;padding:0 5px;color:#222}ul.info-list[data-v-b067a83a]{position:absolute;top:-28px;margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-negative:0;flex-shrink:0;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:1.5;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style:none;font-size:.8em;z-index:100}ul.info-list i[data-v-b067a83a]{font-weight:700;font-size:.8em}ul.info-list i.icon-radio-tower[data-v-b067a83a]{font-weight:500}ul.info-list li[data-v-b067a83a]{padding-right:20px;color:#fff;text-shadow:rgba(68,68,68,.74902) 1px 1px 1px}",""]),t.exports=e},232:function(t,e,o){"use strict";var r=o(218);o.n(r).a},233:function(t,e,o){(e=o(7)(!1)).push([t.i,".fade-enter-active[data-v-50876a92]{-webkit-transition:opacity .5s ease;-o-transition:opacity .5s ease;transition:opacity .5s ease}.fade-leave-active[data-v-50876a92]{-webkit-transition:opacity 0s ease;-o-transition:opacity 0s ease;transition:opacity 0s ease}.fade-enter[data-v-50876a92],.fade-leave[data-v-50876a92]{opacity:0}.mask[data-v-50876a92]{width:100%;height:200px;position:relative;z-index:100}.loading[data-v-50876a92]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.obj[data-v-50876a92]{width:3px;height:0;background-color:#2980b9;margin:0 2px;border-radius:20px;-webkit-animation:loading-data-v-50876a92 .8s infinite;animation:loading-data-v-50876a92 .8s infinite}.obj[data-v-50876a92]:nth-child(2){-webkit-animation-delay:.1s;animation-delay:.1s}.obj[data-v-50876a92]:nth-child(3){-webkit-animation-delay:.2s;animation-delay:.2s}.obj[data-v-50876a92]:nth-child(4){-webkit-animation-delay:.3s;animation-delay:.3s}.obj[data-v-50876a92]:nth-child(5){-webkit-animation-delay:.4s;animation-delay:.4s}.obj[data-v-50876a92]:nth-child(6){-webkit-animation-delay:.5s;animation-delay:.5s}.obj[data-v-50876a92]:nth-child(7){-webkit-animation-delay:.6s;animation-delay:.6s}.obj[data-v-50876a92]:nth-child(8){-webkit-animation-delay:.7s;animation-delay:.7s}@-webkit-keyframes loading-data-v-50876a92{0%{height:0}50%{height:30px}to{height:0}}@keyframes loading-data-v-50876a92{0%{height:0}50%{height:30px}to{height:0}}",""]),t.exports=e},261:function(t,e,o){var content=o(364);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("8c36c156",content,!0,{sourceMap:!1})},263:function(t,e,o){"use strict";var r={name:"LoadingIcon",props:["isShow"]},n=(o(232),o(5)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade"}},[o("client-only",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"mask"},[o("div",{staticClass:"loading"},[o("div",{staticClass:"obj"}),t._v(" "),o("div",{staticClass:"obj"}),t._v(" "),o("div",{staticClass:"obj"}),t._v(" "),o("div",{staticClass:"obj"}),t._v(" "),o("div",{staticClass:"obj"}),t._v(" "),o("div",{staticClass:"obj"}),t._v(" "),o("div",{staticClass:"obj"}),t._v(" "),o("div",{staticClass:"obj"})])])])],1)}),[],!1,null,"50876a92",null);e.a=component.exports},363:function(t,e,o){"use strict";var r=o(261);o.n(r).a},364:function(t,e,o){(e=o(7)(!1)).push([t.i,"a[data-v-38cf218f]{text-decoration:none;color:#000}.section-link[data-v-38cf218f]{color:#444;-webkit-transition:all .15s ease-out;-o-transition:all .15s ease-out;transition:all .15s ease-out}.section-link[data-v-38cf218f]:hover{color:#666;-webkit-transition:all .15s ease-out;-o-transition:all .15s ease-out;transition:all .15s ease-out}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .section-link[data-v-38cf218f]{color:#dfdfdf}body:not(.no-dark-theme) .section-link[data-v-38cf218f]:hover{color:#ccc}}button.link-btn[data-v-38cf218f]{display:inline-block;border:1px solid #fff;border-radius:5px;outline:none;background-color:rgba(0,0,0,0);color:#fff;padding:6px 12px;cursor:pointer}button.link-btn[data-v-38cf218f]:hover{background-color:#fff;color:#000}.swipe-group[data-v-38cf218f]{width:100%;position:relative;margin:0 auto;padding:0;overflow:hidden}.swipe-group[data-v-38cf218f],.swipe-group .swiper-container[data-v-38cf218f]{border-radius:5px}.swipe-group .slide[data-v-38cf218f]{position:relative}.swipe-group .link-mask[data-v-38cf218f]{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background-color:rgba(0,0,0,.25)}.swipe-group .swiper-button-next[data-v-38cf218f],.swipe-group .swiper-button-prev[data-v-38cf218f]{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swipe-group .swiper-button-prev[data-v-38cf218f]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\");left:20px;right:auto}.swipe-group .swiper-button-next[data-v-38cf218f]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\");right:20px;left:auto}.swipe-group .swiper-button-next[data-v-38cf218f],.swipe-group .swiper-button-prev[data-v-38cf218f]{opacity:0;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}.swipe-group .slide-link[data-v-38cf218f]{position:relative;z-index:2;width:80%;height:100%;display:block;margin:0 auto;text-decoration:none;color:#fff;text-align:center;padding:120px 0}.swipe-group .slide-link p[data-v-38cf218f]{margin:15px 0 0}.swipe-group .slide-link h3[data-v-38cf218f]{font-size:1.8em;margin:0}.swipe-group .slide-link .link-btn[data-v-38cf218f]{margin-top:25px;border-width:1px;font-size:.9em}.swipe-group .slide-link i[data-v-38cf218f]{padding-left:.1em;-webkit-transition:all .25s cubic-bezier(.3,-.5,.6,1.5);-o-transition:all .25s cubic-bezier(.3,-.5,.6,1.5);transition:all .25s cubic-bezier(.3,-.5,.6,1.5)}.swipe-group .slide-link:hover i[data-v-38cf218f]{padding-left:.2em;-webkit-transition:all .25s cubic-bezier(.3,-.5,.6,1.5);-o-transition:all .25s cubic-bezier(.3,-.5,.6,1.5);transition:all .25s cubic-bezier(.3,-.5,.6,1.5)}.swipe-group:hover .swiper-button-next[data-v-38cf218f],.swipe-group:hover .swiper-button-prev[data-v-38cf218f]{opacity:1;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}.placeholder[data-v-38cf218f]{width:100%;height:50px}.light-theme[data-v-38cf218f]{background-color:#f5f5f5}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .light-theme[data-v-38cf218f]{background-color:#2c2c2c}}header[data-v-38cf218f]{position:relative;background-color:#eee;width:100%;height:525px;overflow:hidden}.header-contain[data-v-38cf218f]{right:0;bottom:0;padding-top:90px;z-index:10}.header-bg[data-v-38cf218f],.header-contain[data-v-38cf218f]{position:absolute;top:0;left:0;width:100%;height:100%}.header-bg-image[data-v-38cf218f]{background-size:cover;background-position:center top 5%;background-repeat:no-repeat;-webkit-filter:blur(20px);filter:blur(20px);z-index:1}.header-bg-overlay[data-v-38cf218f]{background-color:#eee;background-image:-o-linear-gradient(315deg,#fdfcfb 0,#e2d1c3 100%);background-image:linear-gradient(135deg,#fdfcfb,#e2d1c3);opacity:.7;z-index:2}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .header-bg-overlay[data-v-38cf218f]{background-color:#444;background-image:-webkit-gradient(linear,left bottom,left top,from(#09203f),to(#537895));background-image:-o-linear-gradient(bottom,#09203f 0,#537895 100%);background-image:linear-gradient(0deg,#09203f 0,#537895)}}.title-link[data-v-38cf218f]{display:inline-block}.title-link i[data-v-38cf218f]{margin-right:.3em;font-size:.9em}.more-link[data-v-38cf218f]{display:inline-block;padding:5px 8px;border:2px solid #888;border-radius:5px;vertical-align:middle;line-height:1.2em;opacity:.5;-webkit-transition:all .15s ease-out;-o-transition:all .15s ease-out;transition:all .15s ease-out}.more-link[data-v-38cf218f]:hover{opacity:1;-webkit-transition:all .15s ease-out;-o-transition:all .15s ease-out;transition:all .15s ease-out}.more-link[data-v-38cf218f],.more-link i[data-v-38cf218f]{font-size:.8em}.more-link i[data-v-38cf218f]{font-weight:700}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .more-link[data-v-38cf218f]{border-color:#bdbdbd;color:#fff}}.section-block[data-v-38cf218f]{position:relative;width:100%;padding:50px 0}.section-block+.section-block[data-v-38cf218f]{padding-top:0}.title-block[data-v-38cf218f]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;padding:0 15px}.category-block[data-v-38cf218f]{margin-bottom:60px}.more-block[data-v-38cf218f]{padding:5px 0 25px}.load-more-block[data-v-38cf218f],.more-block[data-v-38cf218f]{text-align:center}.load-more-block button[data-v-38cf218f]{cursor:pointer;outline:none;opacity:.7;background-color:rgba(0,0,0,0)}.load-more-block button i[data-v-38cf218f]{margin-right:.2em}.load-more-block p[data-v-38cf218f]{color:#444;opacity:0;-webkit-transition:all .5s ease-out .5s;-o-transition:all .5s .5s ease-out;transition:all .5s ease-out .5s}.load-more-block p.loaded[data-v-38cf218f]{opacity:1}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .load-more-block p[data-v-38cf218f]{color:#dfdfdf}}.text-content[data-v-38cf218f]{color:#fff;z-index:3;position:relative}.bg-content[data-v-38cf218f]{background-position:50%;background-size:cover;background-repeat:no-repeat;position:absolute;margin:auto;top:0;left:0;right:0;bottom:0;z-index:1;width:100%;height:100%;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .bg-content[data-v-38cf218f]{-webkit-filter:grayscale(30%) brightness(95%);filter:grayscale(30%) brightness(95%)}}.bg-mask[data-v-38cf218f]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.45);z-index:2}.bg-mask[data-v-38cf218f],.page-link[data-v-38cf218f]{-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}.page-link[data-v-38cf218f]{display:block;border-radius:10px;padding:20px 30px 30px;margin:10px 0;position:relative;overflow:hidden;border:3px solid #e8e8e8;background-color:#888}.page-link .link-btn[data-v-38cf218f]{font-size:.8em}.page-link[data-v-38cf218f]:hover{border-color:#aaa}.page-link:hover .bg-content[data-v-38cf218f]{-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .page-link[data-v-38cf218f]{border-color:#3e3e3e}body:not(.no-dark-theme) .page-link[data-v-38cf218f]:hover{border-color:#1c1c1c}}@media screen and (max-width:576px){header[data-v-38cf218f]{height:430px}.swipe-group .slide-link[data-v-38cf218f]{padding:75px 0}.swipe-group .slide-link h3[data-v-38cf218f]{font-size:1.6em}.swipe-group .swiper-button-next[data-v-38cf218f],.swipe-group .swiper-button-prev[data-v-38cf218f]{opacity:1;width:18px;height:27px;margin-top:-12px;background-size:18px 27px}}",""]),t.exports=e},370:function(t,e,o){"use strict";o.r(e);o(32),o(17),o(67);var r=o(203),n=o(201);var l=o(208),c=(o(216),o(83)),d=o(263),f=o(223),v=o(365),h=o(277);function m(data){var t=[];return data.map((function(p){t.push({id:p.archive_id,title:p.title,subtitle:p.subtitle?p.subtitle:"",am:Object(c.e)(p.archive_id),category:1===p.column?0===p.category?"":l.a[1].category[p.category].title:l.a[p.column].title,summary:p.summary,cover:p.cover[0],tag:p.tag[0],readCount:p.info.read_count,likeCount:p.info.like.count,commentCount:p.info.comment_count,spoilerTag:p.meta.spoiler_alert_tag,date:p.meta.publish_date,isHideTitle:2===p.column&&2!==p.category})})),t}var k={meta:{index:0,style:"light",crumbs:[]},head:function(){return{title:"Velas电波站 · 非正常信号发射与搜寻装置"}},components:{PostCard:f.a,LoadingIcon:d.a,Carousel:v.a,Slide:h.a},data:function(){return{slogen:"电波站",isLoading1:!1,navigateTo:0,activeSlide:this.$store.state.activeSlide,links:[{href:"/comment",title:"留言",description:"快来告诉我你的想法",cover:"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/ocean.jpg"},{href:"/about",title:"关于本站",description:"电波站和站长的介绍",cover:"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/fancycrave-1.jpg"},{href:"/links",title:"友情链接",description:"站长和他的小伙伴们",cover:"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/friends.jpg"}]}},asyncData:function(t){t.params;var e=t.query,o=(t.error,e.page&&parseInt(e.page)>0?parseInt(e.page):1),l=[],c=0,d=Object(r.c)("channel",1,12*o),f=Object(n.a)({url:"/slide",method:"get"});return Promise.all([d,f]).then((function(t){if(!t[0].data)throw new Error("channel archives not found");if(!t[1].data)throw new Error("post archives not found");var e=t[0].data,r=e.archives;c=e.count,l=m(r);var n=t[1].data.docs,d=[];return n.map((function(t){d.push({id:t.order+1,title:t.title,href:t.href,describe:t.describe,subcategory:t.subcategory,imageSrc:t.image_src,isLoaded:!1})})),{docs1:l,slides:d,channelPage:o,channelCount:c}})).catch((function(t){return console.log(t),{docs1:l,channelPage:o,channelCount:c,slides:[{id:1,title:"",href:"",describe:"",subcategory:"",imageSrc:"",isLoaded:!1}]}}))},computed:{isLoadedAll:function(){return 12*this.channelPage>=this.channelCount}},methods:{nextSlide:function(){this.activeSlide<this.slides.length-1&&this.activeSlide++},prevSlide:function(){this.activeSlide>0&&this.activeSlide--},loadPosts:function(){if(!this.isLoadedAll){var t=this;this.isLoading1=!0,Object(r.c)("channel",++this.channelPage,12).then((function(e){var o;o=m(e.data.archives),t.docs1=t.docs1.concat(o),t.isLoading1=!1,t.$router.push({path:t.$route.path,query:{page:t.channelPage}})})).catch((function(e){t.isLoading1=!1}))}},lazyLoadSlideBg:function(t){t<=this.slides.length-1&&this.slides[t]&&!this.slides[t].isLoaded&&(this.slides[t].isLoaded=!0),t<this.slides.length-1&&this.slides[t+1]&&!this.slides[t+1].isLoaded&&(this.slides[t+1].isLoaded=!0)}},watch:{activeSlide:function(t){this.lazyLoadSlideBg(t),this.$store.commit("SET_ACTIVE_SLIDE",t)}},mounted:function(){var t=this;this.$nextTick((function(){0!==t.activeSlide&&(t.navigateTo=[t.activeSlide,!1]),t.lazyLoadSlideBg(t.activeSlide)}))}},x=(o(363),o(5)),component=Object(x.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"template-content"},[o("header",[o("div",{staticClass:"container header-contain"},[t._m(0),t._v(" "),o("div",{staticClass:"row no-gutters"},[o("div",{staticClass:"swipe-group"},[o("carousel",{attrs:{"per-page":1,autoplay:!0,autoplayTimeout:1e4,speed:800,paginationPadding:8,loop:!0,navigateTo:t.navigateTo,paginationPosition:"bottom-overlay"},model:{value:t.activeSlide,callback:function(e){t.activeSlide=e},expression:"activeSlide"}},t._l(t.slides,(function(s,e){return o("slide",{key:e,staticClass:"slide"},[o("div",{staticClass:"my-slides-hero bg-slot lazy-bg",style:"background-image: url("+(s.isLoaded?s.imageSrc:"")+")",attrs:{lazy:s.isLoaded?"loaded":"loading"}}),t._v(" "),o("div",{staticClass:"link-mask"}),t._v(" "),o("div",{staticClass:"slide-link shadow-text"},[o("h3",[t._v(t._s(s.title))]),t._v(" "),o("p",[o("span",[t._v(t._s(s.subcategory))]),t._v(" "),o("span",[t._v("/")]),t._v(" "),o("span",[t._v(t._s(s.describe))])]),t._v(" "),o("nuxt-link",{staticClass:"link-btn shadow-box shadow-text",attrs:{tag:"button",to:s.href}},[t._v("阅读文章")])],1)])})),1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.activeSlide,expression:"activeSlide !== 0"}],staticClass:"swiper-button-prev",on:{click:t.prevSlide}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.activeSlide!==t.slides.length-1,expression:"activeSlide !== slides.length - 1"}],staticClass:"swiper-button-next",on:{click:t.nextSlide}})],1)])]),t._v(" "),o("transition-group",{attrs:{name:"fade-bg"}},t._l(t.slides,(function(e){return o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.imageSrc,expression:"sildeimage.imageSrc",arg:"background-image"},{name:"show",rawName:"v-show",value:t.activeSlide===e.id-1,expression:"activeSlide === sildeimage.id - 1"}],key:e.id,staticClass:"header-bg header-bg-image"})})),0),t._v(" "),o("div",{staticClass:"header-bg header-bg-overlay"})],1),t._v(" "),o("main",[o("section",{staticClass:"section-block light-theme"},[o("div",{staticClass:"container"},[t._m(1),t._v(" "),o("transition-group",{staticClass:"post-list row",attrs:{name:"grid"}},[t._l(t.docs1,(function(p){return o("post-card",{key:p.id,staticClass:"post-item col-lg-4 col-md-6 col-sm-12",attrs:{"p-id":p.id,"am-num":p.am,"p-title":p.title,"sub-title":p.subtitle,summary:p.summary,cover:p.cover,tag:p.tag,category:p.category,"sub-category":"未分类","read-count":p.readCount,"comment-count":p.commentCount,"like-count":p.likeCount,"spoiler-tag":p.spoilerTag,date:p.date,"hide-title":p.isHideTitle}})})),t._v(" "),o("loading-icon",{key:"load-icon-1",attrs:{isShow:t.isLoading1}})],2),t._v(" "),o("div",{staticClass:"load-more-block"},[t.isLoadedAll?t._e():o("button",{staticClass:"more-link",on:{click:t.loadPosts}},[o("i",{staticClass:"fa fa-caret-down",attrs:{"aria-hidden":"true"}}),t._v(" 加载更多文章\n          ")]),t._v(" "),o("p",{staticClass:"small",class:{loaded:t.isLoadedAll}},[t._v("已经全部加载完啦(*¯︶¯*)")])])],1)]),t._v(" "),o("section",{staticClass:"section-block"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row title-block"},[o("nuxt-link",{attrs:{to:"/more"}},[o("h2",{staticClass:"title-link section-link"},[t._v("更多精彩")])]),t._v(" "),o("nuxt-link",{staticClass:"more-link",attrs:{to:"/more"}},[o("i",{staticClass:"iconfont icon-plus"}),t._v("\n            其他页面\n          ")])],1),t._v(" "),o("div",{staticClass:"row"},t._l(t.links,(function(e){return o("div",{key:e.href,staticClass:"col-lg-4"},[o("nuxt-link",{staticClass:"page-link",attrs:{to:e.href}},[o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.cover,expression:"l.cover",arg:"background-image"}],staticClass:"bg-content lazy-bg"}),t._v(" "),o("div",{staticClass:"bg-mask"}),t._v(" "),o("div",{staticClass:"text-content shadow-text"},[o("h2",[t._v(t._s(e.title))]),t._v(" "),o("p",[t._v(t._s(e.description))])])])],1)})),0)]),t._v(" "),o("div",{staticClass:"placeholder"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row sr-only"},[e("h1",{staticClass:"sr-only"},[this._v("Velas电波站")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row title-block sr-only"},[e("h2",{staticClass:"title-link"},[this._v("频道")])])}],!1,null,"38cf218f",null);e.default=component.exports}}]);