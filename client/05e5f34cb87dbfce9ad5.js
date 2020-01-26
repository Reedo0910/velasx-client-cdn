(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{193:function(t,e,o){var content=o(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("cb2ca318",content,!0,{sourceMap:!1})},195:function(t,e,o){"use strict";var n={name:"PageHeader",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},backgroundImage:{type:String,required:!0},backgroundColor:{type:String,default:"#f5f5f5"},backgroundPosition:{type:String,default:"center center"},maskOpacity:{type:String,default:"0.3"},darkMode:{type:Boolean,default:!1}},data:function(){return{isBgLoaded:!1}},mounted:function(){var t=this;this.$nextTick((function(){var e;(e=t).$Lazyload.$on("loaded",(function(t){t.src===e.backgroundImage&&(e.isBgLoaded=!0,e.$Lazyload.$off("loaded"))}))}))},computed:{safariCompatState:function(){return this.$store.state.isSafari?"fade-bg-safari":"fade-bg"}}},r=(o(197),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header-container container"},[o("transition",{attrs:{name:t.safariCompatState}},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isBgLoaded,expression:"!isBgLoaded"}],staticClass:"header-mask mask-overlay",class:{"dark-bg":t.darkMode},style:"background-color: "+t.backgroundColor})]),t._v(" "),o("div",{staticClass:"header-mask linear-mask",class:{"dark-bg":t.darkMode}}),t._v(" "),o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.backgroundImage,expression:"backgroundImage",arg:"background-image"}],staticClass:"header-bg"}),t._v(" "),o("header",{staticClass:"container page-header shadow-text"},[o("div",{staticClass:"content-mask",style:"opacity: "+t.maskOpacity}),t._v(" "),o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.backgroundImage,expression:"backgroundImage",arg:"background-image"}],staticClass:"my-bg bg-slot lazy-bg",style:"background-position: "+t.backgroundPosition}),t._v(" "),o("h1",[t._v(t._s(t.title))]),t._v(" "),o("p",[t._v(t._s(t.subtitle))])])],1)}),[],!1,null,"a1f5305a",null);e.a=component.exports},197:function(t,e,o){"use strict";var n=o(193);o.n(n).a},198:function(t,e,o){(e=o(7)(!1)).push([t.i,".template-content[data-v-a1f5305a]{background-color:#f5f5f5}.template-content.dark-bg[data-v-a1f5305a]{background-color:#2c2c2c}.blank-space[data-v-a1f5305a]{width:100%;height:150px}ul[data-v-a1f5305a]{margin:0;padding:0}li[data-v-a1f5305a]{list-style:none}main[data-v-a1f5305a]{min-height:400px}.no-post[data-v-a1f5305a]{position:relative;color:#444;text-align:center;height:150px}.no-post[data-v-a1f5305a],.no-post p[data-v-a1f5305a]{vertical-align:middle}.no-post p[data-v-a1f5305a]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:230px;height:50px;line-height:1.5}.page-container[data-v-a1f5305a]{padding-top:25px}.post-list[data-v-a1f5305a]{margin:0 auto 15px;padding-top:15px;padding-bottom:15px;border-radius:5px;background-color:hsla(0,0%,92.5%,.35)}header.page-header[data-v-a1f5305a]{background-color:#888;height:240px;margin:0 auto;position:relative;z-index:3;border-radius:5px;overflow:hidden}header.page-header h1[data-v-a1f5305a],header.page-header p[data-v-a1f5305a]{text-align:center;position:relative;z-index:4}header.page-header p[data-v-a1f5305a]{color:#fff;letter-spacing:2px;line-height:25px}header.page-header h1[data-v-a1f5305a]{margin:0;padding:75px 0 0;color:#fff;font-size:2.5em;letter-spacing:1px}header.page-header .content-mask[data-v-a1f5305a]{width:100%;height:100%;background-color:#2e2e2e;position:absolute;top:0;left:0;z-index:4}.header-container[data-v-a1f5305a]{padding-top:90px;padding-bottom:130px;position:relative;overflow:hidden}.header-bg[data-v-a1f5305a]{-webkit-filter:blur(20px);filter:blur(20px);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);top:-25px;background-size:cover;background-repeat:no-repeat;background-position:bottom;z-index:0}.header-bg[data-v-a1f5305a],.header-mask[data-v-a1f5305a]{width:100%;height:100%;position:absolute;left:0}.header-mask[data-v-a1f5305a]{top:0;z-index:1}.mask-overlay[data-v-a1f5305a]{background-color:#f5f5f5;z-index:2}.mask-overlay.dark-bg[data-v-a1f5305a]{background-color:#2c2c2c}.linear-mask[data-v-a1f5305a]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,hsla(0,0%,100%,.55)),to(#f5f5f5));background:-o-linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);background:linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5)}.linear-mask.dark-bg[data-v-a1f5305a]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,rgba(0,0,0,.55)),to(#2c2c2c));background:-o-linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);background:linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c)}",""]),t.exports=e},230:function(t,e,o){"use strict";o.d(e,"d",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"b",(function(){return c})),o.d(e,"a",(function(){return d}));o(85);function n(t,e,o){var n=new Date;n.setTime(n.getTime()+864e5*o),window.document.cookie=t+"="+e+";path=/;expires="+n.toGMTString()}function r(t){var e=window.document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return e?e[2]:null}function c(t){n(t,"",-1)}function d(t,e){var o=r(t);return null!==o&&""!==o&&o===e}},244:function(t,e,o){var content=o(325);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("78df9313",content,!0,{sourceMap:!1})},324:function(t,e,o){"use strict";var n=o(244);o.n(n).a},325:function(t,e,o){(e=o(7)(!1)).push([t.i,".template-content.dark-bg[data-v-6c19844f]{background-color:#2c2c2c}.blank-space[data-v-6c19844f]{width:100%;height:150px}ul[data-v-6c19844f]{margin:0;padding:0}li[data-v-6c19844f]{list-style:none}main[data-v-6c19844f]{min-height:400px}.no-post[data-v-6c19844f]{position:relative;color:#444;text-align:center;height:150px}.no-post[data-v-6c19844f],.no-post p[data-v-6c19844f]{vertical-align:middle}.no-post p[data-v-6c19844f]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:230px;height:50px;line-height:1.5}.page-container[data-v-6c19844f]{padding-top:25px}.post-list[data-v-6c19844f]{margin:0 auto 15px;padding-top:15px;padding-bottom:15px;border-radius:5px;background-color:hsla(0,0%,92.5%,.35)}.template-content[data-v-6c19844f]{background-color:#f5f5f5}main[data-v-6c19844f]{padding-top:40px;margin:0 auto}.postscript[data-v-6c19844f]{max-height:999px;text-align:center;padding:50px 30px 80px;-webkit-box-sizing:border-box;box-sizing:border-box}.postscript p[data-v-6c19844f]{line-height:2em;font-size:1em;color:#444}.capsule-group[data-v-6c19844f]{padding:20px 0}.notice[data-v-6c19844f]{position:relative;width:650px;background-image:url(https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/phonelinkoff.png);background-repeat:no-repeat;background-size:40px;background-position:20px 45px;padding:10px 20px 40px 80px;margin:0 auto 50px;-webkit-box-sizing:border-box;box-sizing:border-box}.notice button[data-v-6c19844f]{position:absolute;bottom:10px;right:30px;height:40px;background:none;color:#666;cursor:pointer;border:none;border-bottom:1.5px solid rgba(0,0,0,0)}.notice button[data-v-6c19844f]:hover{border-color:#666}.cc-item-card[data-v-6c19844f]{display:block;text-decoration:none;color:#000;width:100%;overflow:hidden;position:relative;border-radius:10px;background-color:#fff;border:3px solid #efefef;cursor:pointer;margin-bottom:50px;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}.cc-item-card[data-v-6c19844f]:hover{border-color:#ccc;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}.cc-item-card:hover .post-cover[data-v-6c19844f]{-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08)}.card-header[data-v-6c19844f]{position:relative;min-height:16rem}.post-cover-wrapper[data-v-6c19844f]{z-index:1;overflow:hidden}.post-cover[data-v-6c19844f],.post-cover-wrapper[data-v-6c19844f]{width:100%;height:100%;position:absolute}.post-cover[data-v-6c19844f]{background-size:cover;background-position:50%;background-repeat:no-repeat;-webkit-transition:all .4s ease-out;-o-transition:all .4s ease-out;transition:all .4s ease-out}.category-tag[data-v-6c19844f]{position:absolute;bottom:15px;left:15px;background-color:rgba(20,20,20,.8);color:#fff;padding:6px 12px;border-radius:15px;z-index:2}.card-body[data-v-6c19844f]{position:relative;padding:20px 25px 25px}.card-body h2[data-v-6c19844f],.card-body p[data-v-6c19844f]{position:relative;z-index:5;margin:0 0 .5em;line-height:1.5}@media screen and (max-width:900px){main .notice[data-v-6c19844f]{width:85%}main .postscript p[data-v-6c19844f]{font-size:.8em}}",""]),t.exports=e},378:function(t,e,o){"use strict";o.r(e);var n=o(230),r={meta:{index:5,style:"light",crumbs:[{route:"#",text:"时间胶囊"}]},head:function(){return{title:"时间胶囊 - Velas电波站"}},components:{PageHeader:o(195).a},data:function(){return{isNotice:!0,CCs:[{version:1,screenshot:"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/screenshot-2016.velas.xyz.png",name:"Velas 2016",link:"http://2016.velas.xyz/",date:"2016年5月3日 - 2017年2月10日",intros:["瀑布流布局的Talk页面，支持折叠、月份列表、图片懒加载等","手风琴式伸缩特效的日志页面","卡片式布局的实验室页面","各种实验功能"]},{version:2,screenshot:"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/screenshot-2017.velas.xyz.png",name:"Velas 2017 春季更新",link:"http://2017.velas.xyz/",date:"2017年2月11日 - 2017年7月9日",intros:["有明、暗、透明三套主题的导航栏，支持折叠","初次引入Vue框架","具有多层结构和多选择器的Log（日志）页","果冻主题+毛玻璃的音乐卡片","将实验室与Talk从Velas分离"]},{version:3,screenshot:"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/2017summer.velas.xyz.png",name:"Velas 2017 夏季更新",link:"http://2017summer.velas.xyz/",date:"2017年7月10日 - 2018年6月15日",intros:["使用单页面应用架构，让页面间能快速切换","响应式设计，支持各种分辨率的设备","更丰富的首页内容和交互动画","通过Github API获取内容生成的News页面","全新的实验室页面: Camp","*注意: 由于api接口不再维护，News页面内容可能无法正常获取。"]},{version:3.5,screenshot:"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/2018pre.velas.xyz.png",name:"Velas 2018 预更新",link:"http://2018pre.velas.xyz/",date:"2018年6月15日 - 2018年8月24日",intros:["最后一个采用单页面应用架构的版本","使用CDN Combo合并请求，减少请求数","留言板功能实现","将所有子版块(Camp和Talk)集中在Velas中呈现","*注意: 由于服务器迁移，留言功能不可用。"]},{version:5,screenshot:"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/2018.velas.xyz-1.png",name:"Velas 2018",link:"#",date:"2018年8月25日 - 2019年1月9日",intros:["使用服务端渲染架构，使网站打开速度更快、对搜索引擎更友好","服务器接入，实现留言板和动态生成文章页面","使用图片懒加载加快页面响应","全新的页面: 电波台","*注意：由于它与Velas2019共用后台接口。为保证接口安全，因此不再提供单独访问。（页面风格可参照2018预更新）"]},{version:6,screenshot:"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/2019.velas.xyz.png",name:"Velas 电波站（Velas 2019）",link:"#",date:"2019年1月10日 至今",intros:["为展现内容而重新设计","全面接入独立网站后台，抛弃第三方平台接口","统一风格的网页设计，对无障碍访问更加友好","全新的页面: 关于、友情链接"]}]}},methods:{setCookie:function(t,e,o){Object(n.d)(t,e,o)}},beforeMount:function(){Object(n.a)("notice","false")&&(this.isNotice=!1)}},c=(o(324),o(5)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"template-content"},[o("page-header",{attrs:{title:"时间胶囊",subtitle:"窥见Velas的进化历程","background-image":"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/5-most-beautiful-glaciers-in-norway-3.jpg"}}),t._v(" "),o("main",{staticClass:"container interlaced-main"},[o("div",{staticClass:"capsule-group"},[t.isNotice?o("div",{staticClass:"notice"},[o("h3",[t._v("未适配移动端")]),t._v(" "),t._m(0),t._v(" "),o("p",[t._v("若你正使用移动设备进行浏览，可能不会获得最佳的体验。")]),t._v(" "),o("button",{on:{click:function(e){t.isNotice=!1,t.setCookie("notice","false",10)}}},[t._v("我知道了")])]):t._e(),t._v(" "),o("div",{staticClass:"row"},t._l(t.CCs,(function(e){return o("div",{key:e.verison,staticClass:"col-lg-6 col-md-10 offset-md-1 offset-lg-0 col-xs-12"},[o("a",{staticClass:"cc-item-card",attrs:{href:e.link,target:"#"===e.link?"_self":"_blank"}},[o("div",{staticClass:"card-header"},[o("div",{staticClass:"post-cover-wrapper"},[o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.screenshot,expression:"CC.screenshot",arg:"background-image"}],staticClass:"post-cover lazy-bg"})]),t._v(" "),o("div",{staticClass:"category-tag small"},[o("span",[t._v(t._s(e.date))])])]),t._v(" "),o("div",{staticClass:"card-body"},[o("h2",[t._v(t._s(e.name))]),t._v(" "),o("p",{staticStyle:{"margin-bottom":"5px"}},[t._v("特色功能：")]),t._v(" "),o("ul",t._l(e.intros,(function(e){return o("li",{key:e},[t._v(t._s(e))])})),0)])])])})),0)]),t._v(" "),t._m(1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n          在\n          "),e("strong",[this._v("Velas 2017夏季更新之前")]),this._v("的网站版本均未使用响应式设计，且未对移动端进行适配。\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"postscript"},[e("div",{staticClass:"hr"}),this._v(" "),e("p",[this._v("\n        每一天，我将把自己新的想法和知识投入到Velas中。\n        "),e("br"),this._v("在你看到或者看不到的地方，Velas都将变得比昨天更成熟一些、更精致一些。\n        "),e("br"),this._v("感谢你的到来，与我一起将Velas变得更美好。\n      ")])])}],!1,null,"6c19844f",null);e.default=component.exports}}]);