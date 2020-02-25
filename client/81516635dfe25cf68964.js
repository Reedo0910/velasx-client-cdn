(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{195:function(e,t,n){var content=n(200);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("01cf0b80",content,!0,{sourceMap:!1})},196:function(e,t,n){var content=n(212);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("0de7f4ea",content,!0,{sourceMap:!1})},197:function(e,t,n){"use strict";var r={name:"PageHeader",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},backgroundImage:{type:String,required:!0},backgroundColor:{type:String,default:"#f5f5f5"},backgroundPosition:{type:String,default:"center center"},maskOpacity:{type:String,default:"0.3"},darkMode:{type:Boolean,default:!1}},data:function(){return{isBgLoaded:!1}},mounted:function(){var e=this;this.$nextTick((function(){var t;(t=e).$Lazyload.$on("loaded",(function(e){e.src===t.backgroundImage&&(t.isBgLoaded=!0,t.$Lazyload.$off("loaded"))}))}))},computed:{getBackgroundColor:function(){return this.$store.state.isDarkMode?"#2c2c2c":this.backgroundColor},safariCompatState:function(){return this.$store.state.isSafari?"fade-bg-safari":"fade-bg"}}},o=(n(199),n(5)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-container"},[n("transition",{attrs:{name:e.safariCompatState}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isBgLoaded,expression:"!isBgLoaded"}],staticClass:"header-mask mask-overlay",style:"background-color: "+e.getBackgroundColor})]),e._v(" "),n("div",{staticClass:"header-mask linear-mask dark"}),e._v(" "),n("div",{staticClass:"header-mask linear-mask"}),e._v(" "),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.backgroundImage,expression:"backgroundImage",arg:"background-image"}],staticClass:"header-bg"}),e._v(" "),n("div",{staticClass:"container"},[n("header",{staticClass:"container page-header shadow-text"},[n("div",{staticClass:"content-mask",style:"opacity: "+e.maskOpacity}),e._v(" "),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.backgroundImage,expression:"backgroundImage",arg:"background-image"}],staticClass:"my-bg bg-slot lazy-bg",style:"background-position: "+e.backgroundPosition}),e._v(" "),n("h1",[e._v(e._s(e.title))]),e._v(" "),n("p",[e._v(e._s(e.subtitle))])])])],1)}),[],!1,null,"4c6b1475",null);t.a=component.exports},198:function(e,t,n){"use strict";var r=n(4),o=n(22),c=n(25),l=n(115),d=n(64),f=n(11),k=n(40).f,h=n(65).f,v=n(12).f,y=n(204).trim,m=r.Number,x=m,C=m.prototype,_="Number"==c(n(84)(C)),P="trim"in String.prototype,S=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,c=(t=P?t.trim():y(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(_?f((function(){C.valueOf.call(n)})):"Number"!=c(n))?l(new x(S(t)),n,m):S(t)};for(var L,w=n(10)?k(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)o(x,L=w[N])&&!o(m,L)&&v(m,L,h(x,L));m.prototype=C,C.constructor=m,n(13)(r,"Number",m)}},199:function(e,t,n){"use strict";var r=n(195);n.n(r).a},200:function(e,t,n){(t=n(7)(!1)).push([e.i,"header.page-header[data-v-4c6b1475]{background-color:#888;height:240px;margin:0 auto;position:relative;z-index:3;border-radius:5px;overflow:hidden}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) header.page-header[data-v-4c6b1475]{background-color:#444}}header.page-header h1[data-v-4c6b1475],header.page-header p[data-v-4c6b1475]{text-align:center;position:relative;z-index:4}header.page-header p[data-v-4c6b1475]{color:#fff;letter-spacing:2px;line-height:25px}header.page-header h1[data-v-4c6b1475]{margin:0;padding:75px 0 0;color:#fff;font-size:2.5em;letter-spacing:1px}header.page-header .content-mask[data-v-4c6b1475]{width:100%;height:100%;background-color:#2e2e2e;position:absolute;top:0;left:0;z-index:4}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) header.page-header .content-mask[data-v-4c6b1475]{-webkit-filter:grayscale(50%) brightness(95%);filter:grayscale(50%) brightness(95%)}}.header-container[data-v-4c6b1475]{padding-top:90px;padding-bottom:130px;position:relative;overflow:hidden}.header-bg[data-v-4c6b1475]{-webkit-filter:blur(20px);filter:blur(20px);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);top:-25px;background-size:cover;background-repeat:no-repeat;background-position:bottom;z-index:0}.header-bg[data-v-4c6b1475],.header-mask[data-v-4c6b1475]{width:100%;height:100%;position:absolute;left:0}.header-mask[data-v-4c6b1475]{top:0}.mask-overlay[data-v-4c6b1475]{background-color:#f5f5f5;z-index:3}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .mask-overlay[data-v-4c6b1475]{background-color:#2c2c2c!important}}.linear-mask[data-v-4c6b1475]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,hsla(0,0%,100%,.55)),to(#f5f5f5));background:-o-linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);background:linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);z-index:2;opacity:1}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .linear-mask[data-v-4c6b1475]{opacity:0}}.linear-mask.dark[data-v-4c6b1475]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,rgba(0,0,0,.55)),to(#2c2c2c));background:-o-linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);background:linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);z-index:1;opacity:0}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .linear-mask.dark[data-v-4c6b1475]{opacity:1}}",""]),e.exports=t},204:function(e,t,n){var r=n(9),o=n(21),c=n(11),l=n(205),d="["+l+"]",f=RegExp("^"+d+d+"*"),k=RegExp(d+d+"*$"),h=function(e,t,n){var o={},d=c((function(){return!!l[e]()||"​"!="​"[e]()})),f=o[e]=d?t(v):l[e];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},v=h.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(k,"")),e};e.exports=h},205:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},209:function(e,t,n){"use strict";n(198);var r={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var r={index:n,content:n+1,selected:n===this.selected-1};t[n]=r}else{for(var o=Math.floor(this.pageRange/2),c=function(n){var r={index:n,content:n+1,selected:n===e.selected-1};t[n]=r},l=function(e){t[e]={disabled:!0,breakView:!0}},i=0;i<this.marginPages;i++)c(i);var d=0;this.selected-o>0&&(d=this.selected-1-o);var f=d+this.pageRange-1;f>=this.pageCount&&(d=(f=this.pageCount-1)-this.pageRange+1);for(var k=d;k<=f&&k<=this.pageCount-1;k++)c(k);d>this.marginPages&&l(d-1),f+1<this.pageCount-this.marginPages&&l(f+1);for(var h=this.pageCount-1;h>=this.pageCount-this.marginPages;h--)c(h)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}},o=(n(211),n(5)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[e.firstLastButton?n("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}}),e._v(" "),e._l(e.pages,(function(t){return[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(n){return e.handlePageSelected(t.index+1)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])]})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}}),e._v(" "),e.firstLastButton?n("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}}):e._e()],2):n("ul",{class:e.containerClass},[e.firstLastButton?n("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}})]),e._v(" "),e._l(e.pages,(function(t){return n("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){return e.handlePageSelected(t.index+1)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])])})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}})]),e._v(" "),e.firstLastButton?n("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}})]):e._e()],2)}),[],!1,null,"c86c3bb4",null);t.a=component.exports},210:function(e,t,n){"use strict";var r=n(9),o=n(213)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(87)("find")},211:function(e,t,n){"use strict";var r=n(196);n.n(r).a},212:function(e,t,n){(t=n(7)(!1)).push([e.i,"a[data-v-c86c3bb4]{cursor:pointer}",""]),e.exports=t},213:function(e,t,n){var r=n(30),o=n(86),c=n(31),l=n(26),d=n(214);e.exports=function(e,t){var n=1==e,f=2==e,k=3==e,h=4==e,v=6==e,y=5==e||v,m=t||d;return function(t,d,x){for(var C,_,P=c(t),S=o(P),L=r(d,x,3),w=l(S.length),N=0,T=n?m(t,w):f?m(t,0):void 0;w>N;N++)if((y||N in S)&&(_=L(C=S[N],N,P),e))if(n)T[N]=_;else if(_)switch(e){case 3:return!0;case 5:return C;case 6:return N;case 2:T.push(C)}else if(h)return!1;return v?-1:k||h?h:T}}},214:function(e,t,n){var r=n(215);e.exports=function(e,t){return new(r(e))(t)}},215:function(e,t,n){var r=n(14),o=n(116),c=n(2)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&null===(t=t[c])&&(t=void 0)),void 0===t?Array:t}},237:function(e,t,n){var content=n(308);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("f71cccbe",content,!0,{sourceMap:!1})},307:function(e,t,n){"use strict";var r=n(237);n.n(r).a},308:function(e,t,n){(t=n(7)(!1)).push([e.i,"main[data-v-4f54496c]{margin:0 auto;padding-top:15px}.blank_space[data-v-4f54496c]{width:100%;height:1px}",""]),e.exports=t},374:function(e,t,n){"use strict";n.r(t);var r=n(197),o=n(262),c={meta:{index:5,style:"light",crumbs:[{route:"#",text:"留言"}]},head:function(){return{title:"留言 - Velas电波站"}},components:{PageHeader:r.a,CommentList:o.a}},l=(n(307),n(5)),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"template-content"},[t("page-header",{attrs:{title:"留言",subtitle:"你的话，或许对我来说很重要","background-image":"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/ocean.jpg","background-position":"center center","mask-opacity":"0.25"}}),this._v(" "),t("main",{staticClass:"interlaced-main"},[t("div",{staticClass:"container"},[t("comment-list",{attrs:{"refer-id":"main","is-page":""}}),this._v(" "),t("div",{staticClass:"blank_space"})],1)])],1)}),[],!1,null,"4f54496c",null);t.default=component.exports}}]);