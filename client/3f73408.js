(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{402:function(e,t,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("53233393",content,!0,{sourceMap:!1})},403:function(e,t,n){"use strict";var r=n(7),o=n(34),l=n(35),d=n(197),c=n(85),f=n(11),k=n(64).f,h=n(65).f,v=n(18).f,m=n(408).trim,y="Number",x=r.Number,C=x,_=x.prototype,P=l(n(119)(_))==y,S="trim"in String.prototype,L=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,l=(t=S?t.trim():m(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,d=t.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>o)return NaN;return parseInt(d,r)}}return+t};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof x&&(P?f((function(){_.valueOf.call(n)})):l(n)!=y)?d(new C(L(t)),n,x):L(t)};for(var w,T=n(12)?k(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;T.length>N;N++)o(C,w=T[N])&&!o(x,w)&&v(x,w,h(C,w));x.prototype=_,_.constructor=x,n(20)(r,y,x)}},404:function(e,t,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("0de7f4ea",content,!0,{sourceMap:!1})},405:function(e,t,n){"use strict";n(402)},406:function(e,t,n){var r=n(5)(!1);r.push([e.i,"header.page-header[data-v-157f35b6]{background-color:#888;height:240px;margin:0 auto;position:relative;z-index:3;border-radius:5px;overflow:hidden}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) header.page-header[data-v-157f35b6]{background-color:#444}}header.page-header h1[data-v-157f35b6],header.page-header p[data-v-157f35b6]{text-align:center;position:relative;z-index:4}header.page-header p[data-v-157f35b6]{color:#fff;letter-spacing:2px;line-height:25px}header.page-header h1[data-v-157f35b6]{margin:0;padding:75px 0 0;color:#fff;font-size:2.5em;letter-spacing:1px}header.page-header .content-mask[data-v-157f35b6]{width:100%;height:100%;background-color:#2e2e2e;position:absolute;top:0;left:0;z-index:4}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) header.page-header .content-mask[data-v-157f35b6]{-webkit-filter:grayscale(30%) brightness(95%);filter:grayscale(30%) brightness(95%)}}.header-container[data-v-157f35b6]{padding-top:90px;padding-bottom:130px;position:relative;overflow:hidden;mask-image:none;-webkit-mask-image:-webkit-radial-gradient(#fff,#000)}.header-bg[data-v-157f35b6]{-webkit-filter:blur(20px);filter:blur(20px);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);top:-25px;background-size:cover;background-repeat:no-repeat;background-position:bottom;z-index:0}.header-bg[data-v-157f35b6],.header-mask[data-v-157f35b6]{width:100%;height:100%;position:absolute;left:0}.header-mask[data-v-157f35b6]{top:0}.mask-overlay[data-v-157f35b6]{background-color:#f5f5f5;z-index:3}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .mask-overlay[data-v-157f35b6]{background-color:#2c2c2c!important}}.linear-mask[data-v-157f35b6]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,hsla(0,0%,100%,.55)),to(#f5f5f5));background:-o-linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);background:linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);z-index:2;opacity:1}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .linear-mask[data-v-157f35b6]{opacity:0}}.linear-mask.dark[data-v-157f35b6]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,rgba(0,0,0,.55)),to(#2c2c2c));background:-o-linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);background:linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);z-index:1;opacity:0}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .linear-mask.dark[data-v-157f35b6]{opacity:1}}",""]),e.exports=r},407:function(e,t,n){"use strict";var r=n(401);var o={name:"PageHeader",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},backgroundImage:{type:String,required:!0},backgroundColor:{type:String,default:"#f5f5f5"},backgroundPosition:{type:String,default:"center center"},maskOpacity:{type:String,default:"0.3"},darkMode:{type:Boolean,default:!1}},data:function(){return{isBgLoaded:!1,isBgLoadEnd:!1}},mounted:function(){var e=this;this.$nextTick((function(){var t;(t=e).$Lazyload.$on("loaded",(function e(n){n.src===Object(r.a)(t.backgroundImage)&&(t.isBgLoaded=!0,t.$Lazyload.$off("loaded",e),setTimeout((function(){t.isBgLoadEnd=!0}),500))}))}))},computed:{getBackgroundColor:function(){return this.$store.state.isDarkMode?"#2c2c2c":this.backgroundColor},getHeaderImageThumbnail:function(){return Object(r.a)(this.backgroundImage)}}},l=(n(405),n(8)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-container disable-hover"},[n("transition",{attrs:{name:"fade-page-bg"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isBgLoaded,expression:"!isBgLoaded"}],staticClass:"header-mask mask-overlay",class:{"opacity-will-change":e.isBgLoaded&&!e.isBgLoadEnd},style:"background-color: "+e.getBackgroundColor})]),e._v(" "),n("div",{staticClass:"header-mask linear-mask dark"}),e._v(" "),n("div",{staticClass:"header-mask linear-mask"}),e._v(" "),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.getHeaderImageThumbnail,expression:"getHeaderImageThumbnail",arg:"background-image"}],staticClass:"header-bg"}),e._v(" "),n("div",{staticClass:"container"},[n("header",{staticClass:"container page-header shadow-text"},[n("div",{staticClass:"content-mask",style:"opacity: "+e.maskOpacity}),e._v(" "),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.getHeaderImageThumbnail,expression:"getHeaderImageThumbnail",arg:"background-image"}],staticClass:"my-bg bg-slot lazy-bg",style:"background-position: "+e.backgroundPosition}),e._v(" "),n("h1",[e._v(e._s(e.title))]),e._v(" "),n("p",[e._v(e._s(e.subtitle))])])])],1)}),[],!1,null,"157f35b6",null);t.a=component.exports},408:function(e,t,n){var r=n(2),o=n(36),l=n(11),d=n(409),c="["+d+"]",f=RegExp("^"+c+c+"*"),k=RegExp(c+c+"*$"),h=function(e,t,n){var o={},c=l((function(){return!!d[e]()||"​"!="​"[e]()})),f=o[e]=c?t(v):d[e];n&&(o[n]=f),r(r.P+r.F*c,"String",o)},v=h.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(k,"")),e};e.exports=h},409:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},413:function(e,t,n){"use strict";n(404)},414:function(e,t,n){var r=n(5)(!1);r.push([e.i,"a[data-v-c86c3bb4]{cursor:pointer}",""]),e.exports=r},417:function(e,t,n){"use strict";n(403);var r={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var r={index:n,content:n+1,selected:n===this.selected-1};t[n]=r}else{for(var o=Math.floor(this.pageRange/2),l=function(n){var r={index:n,content:n+1,selected:n===e.selected-1};t[n]=r},d=function(e){t[e]={disabled:!0,breakView:!0}},i=0;i<this.marginPages;i++)l(i);var c=0;this.selected-o>0&&(c=this.selected-1-o);var f=c+this.pageRange-1;f>=this.pageCount&&(c=(f=this.pageCount-1)-this.pageRange+1);for(var k=c;k<=f&&k<=this.pageCount-1;k++)l(k);c>this.marginPages&&d(c-1),f+1<this.pageCount-this.marginPages&&d(f+1);for(var h=this.pageCount-1;h>=this.pageCount-this.marginPages;h--)l(h)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}},o=(n(413),n(8)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[e.firstLastButton?n("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}}),e._v(" "),e._l(e.pages,(function(t){return[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(n){return e.handlePageSelected(t.index+1)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])]})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}}),e._v(" "),e.firstLastButton?n("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}}):e._e()],2):n("ul",{class:e.containerClass},[e.firstLastButton?n("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}})]),e._v(" "),e._l(e.pages,(function(t){return n("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){return e.handlePageSelected(t.index+1)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])])})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}})]),e._v(" "),e.firstLastButton?n("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}})]):e._e()],2)}),[],!1,null,"c86c3bb4",null);t.a=component.exports},443:function(e,t,n){var content=n(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("f0e2a4ca",content,!0,{sourceMap:!1})},477:function(e,t,n){"use strict";n(443)},478:function(e,t,n){var r=n(5)(!1);r.push([e.i,"main[data-v-3aefdc72]{margin:0 auto}.blank_space[data-v-3aefdc72]{width:100%;height:1px}",""]),e.exports=r},556:function(e,t,n){"use strict";n.r(t);var r=n(407),o=n(435),l={meta:{index:5,style:"light",crumbs:[{route:"#",text:"留言"}]},head:function(){return{title:"留言 - Velas电波站"}},components:{PageHeader:r.a,CommentList:o.a}},d=(n(477),n(8)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"template-content"},[n("page-header",{attrs:{title:"留言",subtitle:"你的话，或许对我来说很重要","background-image":"https://velas-1252562537.file.myqcloud.com/images/ocean.jpg","background-position":"center center","mask-opacity":"0.25"}}),e._v(" "),n("main",{staticClass:"interlaced-main"},[n("div",{staticClass:"container"},[n("comment-list",{attrs:{"refer-id":"main","is-page":""}}),e._v(" "),n("div",{staticClass:"blank_space"})],1)])],1)}),[],!1,null,"3aefdc72",null);t.default=component.exports}}]);