(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{193:function(e,t,n){var content=n(198);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("cb2ca318",content,!0,{sourceMap:!1})},194:function(e,t,n){var content=n(210);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("0de7f4ea",content,!0,{sourceMap:!1})},195:function(e,t,n){"use strict";var r={name:"PageHeader",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},backgroundImage:{type:String,required:!0},backgroundColor:{type:String,default:"#f5f5f5"},backgroundPosition:{type:String,default:"center center"},maskOpacity:{type:String,default:"0.3"},darkMode:{type:Boolean,default:!1}},data:function(){return{isBgLoaded:!1}},mounted:function(){var e=this;this.$nextTick((function(){var t;(t=e).$Lazyload.$on("loaded",(function(e){e.src===t.backgroundImage&&(t.isBgLoaded=!0,t.$Lazyload.$off("loaded"))}))}))},computed:{safariCompatState:function(){return this.$store.state.isSafari?"fade-bg-safari":"fade-bg"}}},o=(n(197),n(5)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-container container"},[n("transition",{attrs:{name:e.safariCompatState}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isBgLoaded,expression:"!isBgLoaded"}],staticClass:"header-mask mask-overlay",class:{"dark-bg":e.darkMode},style:"background-color: "+e.backgroundColor})]),e._v(" "),n("div",{staticClass:"header-mask linear-mask",class:{"dark-bg":e.darkMode}}),e._v(" "),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.backgroundImage,expression:"backgroundImage",arg:"background-image"}],staticClass:"header-bg"}),e._v(" "),n("header",{staticClass:"container page-header shadow-text"},[n("div",{staticClass:"content-mask",style:"opacity: "+e.maskOpacity}),e._v(" "),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.backgroundImage,expression:"backgroundImage",arg:"background-image"}],staticClass:"my-bg bg-slot lazy-bg",style:"background-position: "+e.backgroundPosition}),e._v(" "),n("h1",[e._v(e._s(e.title))]),e._v(" "),n("p",[e._v(e._s(e.subtitle))])])],1)}),[],!1,null,"a1f5305a",null);t.a=component.exports},196:function(e,t,n){"use strict";var r=n(4),o=n(21),l=n(24),d=n(112),c=n(61),f=n(11),h=n(39).f,v=n(62).f,k=n(12).f,x=n(202).trim,m=r.Number,y=m,C=m.prototype,P="Number"==l(n(82)(C)),_="trim"in String.prototype,S=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,l=(t=_?t.trim():x(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,d=t.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>o)return NaN;return parseInt(d,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(P?f((function(){C.valueOf.call(n)})):"Number"!=l(n))?d(new y(S(t)),n,m):S(t)};for(var L,w=n(10)?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)o(y,L=w[N])&&!o(m,L)&&k(m,L,v(y,L));m.prototype=C,C.constructor=m,n(13)(r,"Number",m)}},197:function(e,t,n){"use strict";var r=n(193);n.n(r).a},198:function(e,t,n){(t=n(7)(!1)).push([e.i,".template-content[data-v-a1f5305a]{background-color:#f5f5f5}.template-content.dark-bg[data-v-a1f5305a]{background-color:#2c2c2c}.blank-space[data-v-a1f5305a]{width:100%;height:150px}ul[data-v-a1f5305a]{margin:0;padding:0}li[data-v-a1f5305a]{list-style:none}main[data-v-a1f5305a]{min-height:400px}.no-post[data-v-a1f5305a]{position:relative;color:#444;text-align:center;height:150px}.no-post[data-v-a1f5305a],.no-post p[data-v-a1f5305a]{vertical-align:middle}.no-post p[data-v-a1f5305a]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:230px;height:50px;line-height:1.5}.page-container[data-v-a1f5305a]{padding-top:25px}.post-list[data-v-a1f5305a]{margin:0 auto 15px;padding-top:15px;padding-bottom:15px;border-radius:5px;background-color:hsla(0,0%,92.5%,.35)}header.page-header[data-v-a1f5305a]{background-color:#888;height:240px;margin:0 auto;position:relative;z-index:3;border-radius:5px;overflow:hidden}header.page-header h1[data-v-a1f5305a],header.page-header p[data-v-a1f5305a]{text-align:center;position:relative;z-index:4}header.page-header p[data-v-a1f5305a]{color:#fff;letter-spacing:2px;line-height:25px}header.page-header h1[data-v-a1f5305a]{margin:0;padding:75px 0 0;color:#fff;font-size:2.5em;letter-spacing:1px}header.page-header .content-mask[data-v-a1f5305a]{width:100%;height:100%;background-color:#2e2e2e;position:absolute;top:0;left:0;z-index:4}.header-container[data-v-a1f5305a]{padding-top:90px;padding-bottom:130px;position:relative;overflow:hidden}.header-bg[data-v-a1f5305a]{-webkit-filter:blur(20px);filter:blur(20px);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);top:-25px;background-size:cover;background-repeat:no-repeat;background-position:bottom;z-index:0}.header-bg[data-v-a1f5305a],.header-mask[data-v-a1f5305a]{width:100%;height:100%;position:absolute;left:0}.header-mask[data-v-a1f5305a]{top:0;z-index:1}.mask-overlay[data-v-a1f5305a]{background-color:#f5f5f5;z-index:2}.mask-overlay.dark-bg[data-v-a1f5305a]{background-color:#2c2c2c}.linear-mask[data-v-a1f5305a]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,hsla(0,0%,100%,.55)),to(#f5f5f5));background:-o-linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);background:linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5)}.linear-mask.dark-bg[data-v-a1f5305a]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,rgba(0,0,0,.55)),to(#2c2c2c));background:-o-linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);background:linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c)}",""]),e.exports=t},202:function(e,t,n){var r=n(9),o=n(20),l=n(11),d=n(203),c="["+d+"]",f=RegExp("^"+c+c+"*"),h=RegExp(c+c+"*$"),v=function(e,t,n){var o={},c=l((function(){return!!d[e]()||"​"!="​"[e]()})),f=o[e]=c?t(k):d[e];n&&(o[n]=f),r(r.P+r.F*c,"String",o)},k=v.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(h,"")),e};e.exports=v},203:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},207:function(e,t,n){"use strict";n(196);var r={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var r={index:n,content:n+1,selected:n===this.selected-1};t[n]=r}else{for(var o=Math.floor(this.pageRange/2),l=function(n){var r={index:n,content:n+1,selected:n===e.selected-1};t[n]=r},d=function(e){t[e]={disabled:!0,breakView:!0}},i=0;i<this.marginPages;i++)l(i);var c=0;this.selected-o>0&&(c=this.selected-1-o);var f=c+this.pageRange-1;f>=this.pageCount&&(c=(f=this.pageCount-1)-this.pageRange+1);for(var h=c;h<=f&&h<=this.pageCount-1;h++)l(h);c>this.marginPages&&d(c-1),f+1<this.pageCount-this.marginPages&&d(f+1);for(var v=this.pageCount-1;v>=this.pageCount-this.marginPages;v--)l(v)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}},o=(n(209),n(5)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[e.firstLastButton?n("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}}),e._v(" "),e._l(e.pages,(function(t){return[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(n){return e.handlePageSelected(t.index+1)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])]})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}}),e._v(" "),e.firstLastButton?n("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}}):e._e()],2):n("ul",{class:e.containerClass},[e.firstLastButton?n("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}})]),e._v(" "),e._l(e.pages,(function(t){return n("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){return e.handlePageSelected(t.index+1)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])])})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}})]),e._v(" "),e.firstLastButton?n("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}})]):e._e()],2)}),[],!1,null,"c86c3bb4",null);t.a=component.exports},208:function(e,t,n){"use strict";var r=n(9),o=n(211)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),r(r.P+r.F*l,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(84)("find")},209:function(e,t,n){"use strict";var r=n(194);n.n(r).a},210:function(e,t,n){(t=n(7)(!1)).push([e.i,"a[data-v-c86c3bb4]{cursor:pointer}",""]),e.exports=t},211:function(e,t,n){var r=n(29),o=n(83),l=n(30),d=n(25),c=n(212);e.exports=function(e,t){var n=1==e,f=2==e,h=3==e,v=4==e,k=6==e,x=5==e||k,m=t||c;return function(t,c,y){for(var C,P,_=l(t),S=o(_),L=r(c,y,3),w=d(S.length),N=0,T=n?m(t,w):f?m(t,0):void 0;w>N;N++)if((x||N in S)&&(P=L(C=S[N],N,_),e))if(n)T[N]=P;else if(P)switch(e){case 3:return!0;case 5:return C;case 6:return N;case 2:T.push(C)}else if(v)return!1;return k?-1:h||v?v:T}}},212:function(e,t,n){var r=n(213);e.exports=function(e,t){return new(r(e))(t)}},213:function(e,t,n){var r=n(14),o=n(113),l=n(2)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}},236:function(e,t,n){var content=n(307);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("f71ba5e2",content,!0,{sourceMap:!1})},306:function(e,t,n){"use strict";var r=n(236);n.n(r).a},307:function(e,t,n){(t=n(7)(!1)).push([e.i,".template-content.dark-bg[data-v-2a787afa]{background-color:#2c2c2c}.blank-space[data-v-2a787afa]{width:100%;height:150px}ul[data-v-2a787afa]{margin:0;padding:0}li[data-v-2a787afa]{list-style:none}main[data-v-2a787afa]{min-height:400px}.no-post[data-v-2a787afa]{position:relative;color:#444;text-align:center;height:150px}.no-post[data-v-2a787afa],.no-post p[data-v-2a787afa]{vertical-align:middle}.no-post p[data-v-2a787afa]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:230px;height:50px;line-height:1.5}.page-container[data-v-2a787afa]{padding-top:25px}.post-list[data-v-2a787afa]{margin:0 auto 15px;padding-top:15px;padding-bottom:15px;border-radius:5px;background-color:hsla(0,0%,92.5%,.35)}.template-content[data-v-2a787afa]{background-color:#f5f5f5}main[data-v-2a787afa]{width:80%;margin:0 auto;padding-top:30px}.blank_space[data-v-2a787afa]{width:100%;height:1px}@media screen and (max-width:660px){main[data-v-2a787afa]{width:90%}}@media screen and (max-width:550px){main[data-v-2a787afa]{width:100%}}",""]),e.exports=t},370:function(e,t,n){"use strict";n.r(t);var r=n(195),o=n(261),l={meta:{index:5,style:"light",crumbs:[{route:"#",text:"留言"}]},head:function(){return{title:"留言 - Velas电波站"}},components:{PageHeader:r.a,CommentList:o.a}},d=(n(306),n(5)),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"template-content"},[t("page-header",{attrs:{title:"留言",subtitle:"你的话，或许对我来说很重要","background-image":"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/ocean.jpg","background-position":"center center","mask-opacity":"0.25"}}),this._v(" "),t("main",{staticClass:"interlaced-main"},[t("comment-list",{attrs:{"refer-id":"main","is-page":""}}),this._v(" "),t("div",{staticClass:"blank_space"})],1)],1)}),[],!1,null,"2a787afa",null);t.default=component.exports}}]);