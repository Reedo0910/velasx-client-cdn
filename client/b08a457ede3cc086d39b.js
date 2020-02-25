(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{195:function(e,t,n){var content=n(200);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("01cf0b80",content,!0,{sourceMap:!1})},196:function(e,t,n){var content=n(212);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("0de7f4ea",content,!0,{sourceMap:!1})},197:function(e,t,n){"use strict";var r={name:"PageHeader",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},backgroundImage:{type:String,required:!0},backgroundColor:{type:String,default:"#f5f5f5"},backgroundPosition:{type:String,default:"center center"},maskOpacity:{type:String,default:"0.3"},darkMode:{type:Boolean,default:!1}},data:function(){return{isBgLoaded:!1}},mounted:function(){var e=this;this.$nextTick((function(){var t;(t=e).$Lazyload.$on("loaded",(function(e){e.src===t.backgroundImage&&(t.isBgLoaded=!0,t.$Lazyload.$off("loaded"))}))}))},computed:{getBackgroundColor:function(){return this.$store.state.isDarkMode?"#2c2c2c":this.backgroundColor},safariCompatState:function(){return this.$store.state.isSafari?"fade-bg-safari":"fade-bg"}}},o=(n(199),n(5)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-container"},[n("transition",{attrs:{name:e.safariCompatState}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isBgLoaded,expression:"!isBgLoaded"}],staticClass:"header-mask mask-overlay",style:"background-color: "+e.getBackgroundColor})]),e._v(" "),n("div",{staticClass:"header-mask linear-mask dark"}),e._v(" "),n("div",{staticClass:"header-mask linear-mask"}),e._v(" "),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.backgroundImage,expression:"backgroundImage",arg:"background-image"}],staticClass:"header-bg"}),e._v(" "),n("div",{staticClass:"container"},[n("header",{staticClass:"container page-header shadow-text"},[n("div",{staticClass:"content-mask",style:"opacity: "+e.maskOpacity}),e._v(" "),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.backgroundImage,expression:"backgroundImage",arg:"background-image"}],staticClass:"my-bg bg-slot lazy-bg",style:"background-position: "+e.backgroundPosition}),e._v(" "),n("h1",[e._v(e._s(e.title))]),e._v(" "),n("p",[e._v(e._s(e.subtitle))])])])],1)}),[],!1,null,"4c6b1475",null);t.a=component.exports},198:function(e,t,n){"use strict";var r=n(4),o=n(22),l=n(25),c=n(115),d=n(64),f=n(11),k=n(40).f,h=n(65).f,v=n(12).f,m=n(204).trim,y=r.Number,_=y,x=y.prototype,C="Number"==l(n(84)(x)),P="trim"in String.prototype,w=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,l=(t=P?t.trim():m(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+t};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof y&&(C?f((function(){x.valueOf.call(n)})):"Number"!=l(n))?c(new _(w(t)),n,y):w(t)};for(var S,L=n(10)?k(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;L.length>N;N++)o(_,S=L[N])&&!o(y,S)&&v(y,S,h(_,S));y.prototype=x,x.constructor=y,n(13)(r,"Number",y)}},199:function(e,t,n){"use strict";var r=n(195);n.n(r).a},200:function(e,t,n){(t=n(7)(!1)).push([e.i,"header.page-header[data-v-4c6b1475]{background-color:#888;height:240px;margin:0 auto;position:relative;z-index:3;border-radius:5px;overflow:hidden}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) header.page-header[data-v-4c6b1475]{background-color:#444}}header.page-header h1[data-v-4c6b1475],header.page-header p[data-v-4c6b1475]{text-align:center;position:relative;z-index:4}header.page-header p[data-v-4c6b1475]{color:#fff;letter-spacing:2px;line-height:25px}header.page-header h1[data-v-4c6b1475]{margin:0;padding:75px 0 0;color:#fff;font-size:2.5em;letter-spacing:1px}header.page-header .content-mask[data-v-4c6b1475]{width:100%;height:100%;background-color:#2e2e2e;position:absolute;top:0;left:0;z-index:4}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) header.page-header .content-mask[data-v-4c6b1475]{-webkit-filter:grayscale(50%) brightness(95%);filter:grayscale(50%) brightness(95%)}}.header-container[data-v-4c6b1475]{padding-top:90px;padding-bottom:130px;position:relative;overflow:hidden}.header-bg[data-v-4c6b1475]{-webkit-filter:blur(20px);filter:blur(20px);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);top:-25px;background-size:cover;background-repeat:no-repeat;background-position:bottom;z-index:0}.header-bg[data-v-4c6b1475],.header-mask[data-v-4c6b1475]{width:100%;height:100%;position:absolute;left:0}.header-mask[data-v-4c6b1475]{top:0}.mask-overlay[data-v-4c6b1475]{background-color:#f5f5f5;z-index:3}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .mask-overlay[data-v-4c6b1475]{background-color:#2c2c2c!important}}.linear-mask[data-v-4c6b1475]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,hsla(0,0%,100%,.55)),to(#f5f5f5));background:-o-linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);background:linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);z-index:2;opacity:1}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .linear-mask[data-v-4c6b1475]{opacity:0}}.linear-mask.dark[data-v-4c6b1475]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,rgba(0,0,0,.55)),to(#2c2c2c));background:-o-linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);background:linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);z-index:1;opacity:0}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .linear-mask.dark[data-v-4c6b1475]{opacity:1}}",""]),e.exports=t},204:function(e,t,n){var r=n(9),o=n(21),l=n(11),c=n(205),d="["+c+"]",f=RegExp("^"+d+d+"*"),k=RegExp(d+d+"*$"),h=function(e,t,n){var o={},d=l((function(){return!!c[e]()||"​"!="​"[e]()})),f=o[e]=d?t(v):c[e];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},v=h.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(k,"")),e};e.exports=h},205:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},209:function(e,t,n){"use strict";n(198);var r={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var r={index:n,content:n+1,selected:n===this.selected-1};t[n]=r}else{for(var o=Math.floor(this.pageRange/2),l=function(n){var r={index:n,content:n+1,selected:n===e.selected-1};t[n]=r},c=function(e){t[e]={disabled:!0,breakView:!0}},i=0;i<this.marginPages;i++)l(i);var d=0;this.selected-o>0&&(d=this.selected-1-o);var f=d+this.pageRange-1;f>=this.pageCount&&(d=(f=this.pageCount-1)-this.pageRange+1);for(var k=d;k<=f&&k<=this.pageCount-1;k++)l(k);d>this.marginPages&&c(d-1),f+1<this.pageCount-this.marginPages&&c(f+1);for(var h=this.pageCount-1;h>=this.pageCount-this.marginPages;h--)l(h)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}},o=(n(211),n(5)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[e.firstLastButton?n("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}}),e._v(" "),e._l(e.pages,(function(t){return[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(n){return e.handlePageSelected(t.index+1)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])]})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}}),e._v(" "),e.firstLastButton?n("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}}):e._e()],2):n("ul",{class:e.containerClass},[e.firstLastButton?n("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}})]),e._v(" "),e._l(e.pages,(function(t){return n("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){return e.handlePageSelected(t.index+1)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])])})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}})]),e._v(" "),e.firstLastButton?n("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}})]):e._e()],2)}),[],!1,null,"c86c3bb4",null);t.a=component.exports},210:function(e,t,n){"use strict";var r=n(9),o=n(213)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),r(r.P+r.F*l,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(87)("find")},211:function(e,t,n){"use strict";var r=n(196);n.n(r).a},212:function(e,t,n){(t=n(7)(!1)).push([e.i,"a[data-v-c86c3bb4]{cursor:pointer}",""]),e.exports=t},213:function(e,t,n){var r=n(30),o=n(86),l=n(31),c=n(26),d=n(214);e.exports=function(e,t){var n=1==e,f=2==e,k=3==e,h=4==e,v=6==e,m=5==e||v,y=t||d;return function(t,d,_){for(var x,C,P=l(t),w=o(P),S=r(d,_,3),L=c(w.length),N=0,T=n?y(t,L):f?y(t,0):void 0;L>N;N++)if((m||N in w)&&(C=S(x=w[N],N,P),e))if(n)T[N]=C;else if(C)switch(e){case 3:return!0;case 5:return x;case 6:return N;case 2:T.push(x)}else if(h)return!1;return v?-1:k||h?h:T}}},214:function(e,t,n){var r=n(215);e.exports=function(e,t){return new(r(e))(t)}},215:function(e,t,n){var r=n(14),o=n(116),l=n(2)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}},239:function(e,t,n){var content=n(312);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("163bcf1d",content,!0,{sourceMap:!1})},311:function(e,t,n){"use strict";var r=n(239);n.n(r).a},312:function(e,t,n){(t=n(7)(!1)).push([e.i,"main[data-v-3737ab1c]{min-height:400px;padding:10px 0}h2[data-v-3737ab1c]{font-size:1.3em}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) h2[data-v-3737ab1c]{color:#fff}}.links-container[data-v-3737ab1c]{padding:40px 60px 20px;background-color:#fff;border-top-left-radius:5px;border-top-right-radius:5px}.links-container a[data-v-3737ab1c]{display:inline-block;text-decoration:none;color:#444}.links-container a[data-v-3737ab1c]:hover{text-decoration:underline;color:#777}.links-container ul[data-v-3737ab1c]{list-style-type:circle}.links-container li[data-v-3737ab1c]{margin:15px 0}.links-container hr[data-v-3737ab1c]{margin:30px 0}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .links-container[data-v-3737ab1c]{color:#fff;background-color:#222}body:not(.no-dark-theme) .links-container a[data-v-3737ab1c]{color:#ccc}body:not(.no-dark-theme) .links-container a[data-v-3737ab1c]:hover{color:#dfdfdf}}.post-container[data-v-3737ab1c]{background-color:#fff;padding:20px 30px;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.post-container h2[data-v-3737ab1c]{text-align:center}.post-container p[data-v-3737ab1c]{line-height:1.5}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-container[data-v-3737ab1c]{color:#fff;background-color:#222}}.link-description[data-v-3737ab1c]{margin-left:.5em;font-weight:300;color:#777}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .link-description[data-v-3737ab1c]{color:#ccc}}del[data-v-3737ab1c]{background-color:#ddd;color:rgba(0,0,0,0);text-decoration:none;-webkit-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease;cursor:default}del[data-v-3737ab1c]:hover{color:#444;background-color:rgba(0,0,0,0);-webkit-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) del[data-v-3737ab1c]{background-color:#444}body:not(.no-dark-theme) del[data-v-3737ab1c]:hover{color:#e0e0e0}}blockquote[data-v-3737ab1c]{border-left:5px solid #ccc;padding-left:1em}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) blockquote[data-v-3737ab1c]{border-left-color:#888}}",""]),e.exports=t},376:function(e,t,n){"use strict";n.r(t);var r=n(262),o={meta:{index:5,style:"light",crumbs:[{route:"#",text:"友情链接"}]},head:function(){return{title:"友情链接 - Velas电波站"}},components:{PageHeader:n(197).a,CommentList:r.a},data:function(){return{blogList:[{name:"Le Phower's",intro:"朝闻道 夕死可矣",url:"phower.me"},{name:"Cysime Moflu",intro:"再不会遇见第二个时光",url:"blog.cysi.me"},{name:"21世纪旗手",intro:"一种千禧一代看世界的方式",url:"www.themillennials.cn"},{name:"初之音",intro:"",url:"www.himiku.com"},{name:"无文字 | 三无计划",intro:"",url:"blog.imalan.cn"},{name:"一只小白",intro:"",url:"blog.blanc.site"},{name:"Broca-Phenol",intro:"坎坷之路，终抵群星。",url:"phenol-phthalein.info"},{name:"Just lepture",intro:"",url:"lepture.com/"},{name:"KirimaSharo's Blog",intro:"与你分享手机，网络上萌萌哒的应用～",url:"syaro.cn/"},{name:"chopstack",intro:"",url:"chopstack.com"},{name:"九月与猫",intro:"",url:"www.septemberneko.me",isHttp:!0},{name:"freejishu的美丽世界",intro:"Code · Thinking · ACG",url:"www.freejishu.com/"},{name:"下午茶的轻音部",intro:"",url:"www.myeriri.com"},{name:"Yellow Bee's Blog",intro:"",url:"www.yelbee.top",isHttp:!0},{name:"桜庭夜",intro:"悠哉日常大王。",url:"yuuiki.cn"},{name:"Eltrac's Track",intro:"My thought's deep into me.",url:"guhub.cn"}],favList:[{name:"やくしまるえつこ",intro:"药师丸悦子的个人网站",url:"http://yakushimaruetsuko.com"},{name:"灯森 Akari Mori",intro:"Zeee的碎碎念博客",url:"https://www.akari-mori.com/"}]}}},l=(n(311),n(5)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"template-content"},[n("page-header",{attrs:{title:"友情链接",subtitle:"电波站的友星们","background-image":"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/friends.jpg","background-position":"center center"}}),e._v(" "),n("main",{staticClass:"interlaced-main"},[n("div",{staticClass:"container"},[n("div",{staticClass:"links-container"},[n("div",{staticClass:"links"},[n("h2",[e._v("独立博客")]),e._v(" "),n("ul",e._l(e.blogList,(function(b){return n("li",{key:b.name},[n("a",{attrs:{href:b.isHttp?"http://"+b.url:"https://"+b.url,target:"_blank",rel:"noopener noreferrer nofollow"}},[e._v(e._s(b.name))]),e._v(" "),n("span",{staticClass:"link-description"},[e._v(e._s(b.intro))])])})),0),e._v(" "),n("hr"),e._v(" "),n("h2",[e._v("个人收藏")]),e._v(" "),n("ul",e._l(e.favList,(function(t){return n("li",{key:t.name},[n("a",{attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer nofollow"}},[e._v(e._s(t.name))]),e._v(" "),n("span",{staticClass:"link-description"},[e._v(e._s(t.intro))])])})),0),e._v(" "),n("hr")])]),e._v(" "),n("div",{staticClass:"post-container"},[e._m(0),e._v(" "),n("comment-list",{attrs:{"refer-id":"links","hide-comments":""}})],1)])])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("blockquote",[n("article",[n("p",[n("strong",[e._v("友链申请须知：")]),e._v("电波站的友情链接大多是网站设计、所使用的技术或是文章内容让我十分欣赏、本着“友情”和“欣赏”为缘由而\n              "),n("del",{attrs:{title:"你知道得太多了"}},[e._v("可能是单方面")]),e._v("添加的网站。\n            ")]),e._v(" "),n("p",[n("span",[e._v("如果您认为您的网站与我的小站有共鸣，请通过下方的留言框告知我")]),e._v(" "),n("strong",[e._v("您的网站地址")]),e._v(" "),n("span",[e._v("和")]),e._v(" "),n("strong",[e._v("网站名称")]),e._v(" "),n("span",[e._v("。我看到后会尽快回访，并视情况将您的网站收录为友链。")])]),e._v(" "),n("p",[e._v("请不要通过本页面以外的留言框申请友链，与页面主题无关的评论可能会被删除。")])]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("我的文字链接：Velas电波站")]),e._v(" "),n("p",[e._v("副标题：非正常信号发射与搜寻装置")]),e._v(" "),n("p",[e._v("网站地址：https://www.velasx.com")]),e._v(" "),n("p",[e._v("头像地址（如需要）：https://public-1252562537.cos.ap-guangzhou.myqcloud.com/avatar.jpg")])])}],!1,null,"3737ab1c",null);t.default=component.exports}}]);