(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{393:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"e",(function(){return c})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));function n(e,t){return e?"".concat(e,"!").concat(t):e}function o(e){return n(e,"post_thumbnail")}function l(e){return n(e,"page_thumbnail")}function c(e){return n(e,"slide_thumbnail")}function d(e){return n(e,"header_thumbnail")}function f(e){return n(e,"link_thumbnail")}},394:function(e,t,r){var content=r(398);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("53233393",content,!0,{sourceMap:!1})},395:function(e,t,r){"use strict";var n=r(7),o=r(34),l=r(45),c=r(187),d=r(81),f=r(17),h=r(61).f,m=r(82).f,v=r(18).f,k=r(400).trim,y=n.Number,x=y,C=y.prototype,_="Number"==l(r(113)(C)),P="trim"in String.prototype,w=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,l=(t=P?t.trim():k(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+t};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof y&&(_?f((function(){C.valueOf.call(r)})):"Number"!=l(r))?c(new x(w(t)),r,y):w(t)};for(var S,L=r(11)?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;L.length>T;T++)o(x,S=L[T])&&!o(y,S)&&v(y,S,m(x,S));y.prototype=C,C.constructor=y,r(20)(n,"Number",y)}},396:function(e,t,r){var content=r(406);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("0de7f4ea",content,!0,{sourceMap:!1})},397:function(e,t,r){"use strict";r(394)},398:function(e,t,r){(t=r(4)(!1)).push([e.i,"header.page-header[data-v-157f35b6]{background-color:#888;height:240px;margin:0 auto;position:relative;z-index:3;border-radius:5px;overflow:hidden}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) header.page-header[data-v-157f35b6]{background-color:#444}}header.page-header h1[data-v-157f35b6],header.page-header p[data-v-157f35b6]{text-align:center;position:relative;z-index:4}header.page-header p[data-v-157f35b6]{color:#fff;letter-spacing:2px;line-height:25px}header.page-header h1[data-v-157f35b6]{margin:0;padding:75px 0 0;color:#fff;font-size:2.5em;letter-spacing:1px}header.page-header .content-mask[data-v-157f35b6]{width:100%;height:100%;background-color:#2e2e2e;position:absolute;top:0;left:0;z-index:4}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) header.page-header .content-mask[data-v-157f35b6]{-webkit-filter:grayscale(30%) brightness(95%);filter:grayscale(30%) brightness(95%)}}.header-container[data-v-157f35b6]{padding-top:90px;padding-bottom:130px;position:relative;overflow:hidden;mask-image:none;-webkit-mask-image:-webkit-radial-gradient(#fff,#000)}.header-bg[data-v-157f35b6]{-webkit-filter:blur(20px);filter:blur(20px);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);top:-25px;background-size:cover;background-repeat:no-repeat;background-position:bottom;z-index:0}.header-bg[data-v-157f35b6],.header-mask[data-v-157f35b6]{width:100%;height:100%;position:absolute;left:0}.header-mask[data-v-157f35b6]{top:0}.mask-overlay[data-v-157f35b6]{background-color:#f5f5f5;z-index:3}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .mask-overlay[data-v-157f35b6]{background-color:#2c2c2c!important}}.linear-mask[data-v-157f35b6]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,hsla(0,0%,100%,.55)),to(#f5f5f5));background:-o-linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);background:linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);z-index:2;opacity:1}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .linear-mask[data-v-157f35b6]{opacity:0}}.linear-mask.dark[data-v-157f35b6]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,rgba(0,0,0,.55)),to(#2c2c2c));background:-o-linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);background:linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);z-index:1;opacity:0}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .linear-mask.dark[data-v-157f35b6]{opacity:1}}",""]),e.exports=t},399:function(e,t,r){"use strict";var n=r(393);var o={name:"PageHeader",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},backgroundImage:{type:String,required:!0},backgroundColor:{type:String,default:"#f5f5f5"},backgroundPosition:{type:String,default:"center center"},maskOpacity:{type:String,default:"0.3"},darkMode:{type:Boolean,default:!1}},data:function(){return{isBgLoaded:!1,isBgLoadEnd:!1}},mounted:function(){var e=this;this.$nextTick((function(){var t;(t=e).$Lazyload.$on("loaded",(function e(r){r.src===Object(n.a)(t.backgroundImage)&&(t.isBgLoaded=!0,t.$Lazyload.$off("loaded",e),setTimeout((function(){t.isBgLoadEnd=!0}),500))}))}))},computed:{getBackgroundColor:function(){return this.$store.state.isDarkMode?"#2c2c2c":this.backgroundColor},getHeaderImageThumbnail:function(){return Object(n.a)(this.backgroundImage)}}},l=(r(397),r(8)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-container disable-hover"},[r("transition",{attrs:{name:"fade-page-bg"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isBgLoaded,expression:"!isBgLoaded"}],staticClass:"header-mask mask-overlay",class:{"opacity-will-change":e.isBgLoaded&&!e.isBgLoadEnd},style:"background-color: "+e.getBackgroundColor})]),e._v(" "),r("div",{staticClass:"header-mask linear-mask dark"}),e._v(" "),r("div",{staticClass:"header-mask linear-mask"}),e._v(" "),r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.getHeaderImageThumbnail,expression:"getHeaderImageThumbnail",arg:"background-image"}],staticClass:"header-bg"}),e._v(" "),r("div",{staticClass:"container"},[r("header",{staticClass:"container page-header shadow-text"},[r("div",{staticClass:"content-mask",style:"opacity: "+e.maskOpacity}),e._v(" "),r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.getHeaderImageThumbnail,expression:"getHeaderImageThumbnail",arg:"background-image"}],staticClass:"my-bg bg-slot lazy-bg",style:"background-position: "+e.backgroundPosition}),e._v(" "),r("h1",[e._v(e._s(e.title))]),e._v(" "),r("p",[e._v(e._s(e.subtitle))])])])],1)}),[],!1,null,"157f35b6",null);t.a=component.exports},400:function(e,t,r){var n=r(6),o=r(35),l=r(17),c=r(401),d="["+c+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(e,t,r){var o={},d=l((function(){return!!c[e]()||"​"!="​"[e]()})),f=o[e]=d?t(v):c[e];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},v=m.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(h,"")),e};e.exports=m},401:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},402:function(e,t,r){"use strict";var n=r(412),o=r.n(n);o.a.locale("zh-cn"),t.a=o.a},404:function(e){e.exports=JSON.parse('{"list":[{"title":"未分类","category":[{"title":"未分类","sub":["未分类"]}]},{"title":"频道","category":[{"title":"未分类","sub":["未分类"]},{"title":"杂聊","sub":["未分类","随笔","碎碎念","观点","摘抄"]},{"title":"影视","sub":["未分类","鉴赏","推荐","原声","记录"]},{"title":"游戏","sub":["未分类","日记","鉴赏","原声"]},{"title":"小说","sub":["未分类","短篇","中篇","迷你","童话"]}]},{"title":"网站日志","category":[{"title":"未分类","sub":["未分类"]},{"title":"日志","sub":["未分类","记录","公告"]}]}]}')},405:function(e,t,r){"use strict";r(396)},406:function(e,t,r){(t=r(4)(!1)).push([e.i,"a[data-v-c86c3bb4]{cursor:pointer}",""]),e.exports=t},407:function(e,t,r){var content=r(414);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("22204337",content,!0,{sourceMap:!1})},408:function(e,t,r){"use strict";r(188)("sub",(function(e){return function(){return e(this,"sub","","")}}))},409:function(e,t,r){"use strict";r(395);var n={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var r=0;r<this.pageCount;r++){var n={index:r,content:r+1,selected:r===this.selected-1};t[r]=n}else{for(var o=Math.floor(this.pageRange/2),l=function(r){var n={index:r,content:r+1,selected:r===e.selected-1};t[r]=n},c=function(e){t[e]={disabled:!0,breakView:!0}},i=0;i<this.marginPages;i++)l(i);var d=0;this.selected-o>0&&(d=this.selected-1-o);var f=d+this.pageRange-1;f>=this.pageCount&&(d=(f=this.pageCount-1)-this.pageRange+1);for(var h=d;h<=f&&h<=this.pageCount-1;h++)l(h);d>this.marginPages&&c(d-1),f+1<this.pageCount-this.marginPages&&c(f+1);for(var m=this.pageCount-1;m>=this.pageCount-this.marginPages;m--)l(m)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}},o=(r(405),r(8)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.noLiSurround?r("div",{class:e.containerClass},[e.firstLastButton?r("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():r("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}}),e._v(" "),e._l(e.pages,(function(t){return[t.breakView?r("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?r("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):r("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(r){return e.handlePageSelected(t.index+1)},keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])]})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():r("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}}),e._v(" "),e.firstLastButton?r("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}}):e._e()],2):r("ul",{class:e.containerClass},[e.firstLastButton?r("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[r("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():r("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[r("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}})]),e._v(" "),e._l(e.pages,(function(t){return r("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?r("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?r("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):r("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(r){return e.handlePageSelected(t.index+1)},keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.handlePageSelected(t.index+1)}}},[e._v(e._s(t.content))])])})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():r("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[r("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}})]),e._v(" "),e.firstLastButton?r("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[r("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}})]):e._e()],2)}),[],!1,null,"c86c3bb4",null);t.a=component.exports},410:function(e){e.exports=JSON.parse('{"channels":[{"icon":"icon-new","text":"未分类","link":"/","param":"home","theme_color":"#444"},{"icon":"icon-cake--line","link":"/talk","text":"杂聊","theme_color":"#B17844"},{"icon":"icon-icon-test","text":"影视","link":"/cinephile","param":"cinephile","theme_color":"#904840"},{"icon":"icon-games","text":"游戏","link":"/game","param":"game","theme_color":"#006284"},{"icon":"icon-textbook","text":"小说","link":"/novel","param":"novel","theme_color":"#26453D"}],"additionals":[{"text":"未分类","link":"/","theme_color":"#444"},{"text":"日志","link":"/log","theme_color":"#202528"}]}')},411:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return l})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"e",(function(){return m}));r(62),r(408);var n=r(404);function o(p){return{id:p.archive_id,title:p.title,subtitle:p.subtitle?p.subtitle:"",category:n.list[p.column].category[p.category].title,subCategory:n.list[1].category[p.category].sub[p.sub_category],summary:p.summary,cover:p.cover[0],spoilerTag:p.meta.spoiler_alert_tag,date:p.meta.publish_date}}function l(e){var t=e.intro,r=void 0===t?"":t,n=e.spoilerTag,o="";switch(void 0===n?0:n){case 1:o="无剧透";break;case 2:o="包含剧透"}return""!==o&&(r="".concat(o,"｜").concat(r)),r}function c(e){var t=e.post,r=void 0===t?"":t,n=e.isSpoiler,o=void 0!==n&&n,l=e.isNovel;return o&&(r="<blockquote><h3>本文包含剧透</h3><p>文中含有对相关作品关键故事情节的剧透。如果您没观看过该作品的话，阅读本文可能会影响您将来观看此作品的体验。</p></blockquote>"+r),void 0!==l&&l&&(r="<blockquote><p>以下故事内容纯属虚构。如有雷同，实属巧合。</p><p>All characters appearing in this work are fictitious. Any resemblance to real persons, living or dead, is purely coincidental.</p></blockquote>"+r),r}function d(e){for(var t=e.post,r=void 0===t?"":t,n=e.copyrightTag,o=void 0===n?0:n,l=e.addLines,c=void 0===l?0:l,d=e.addHr,f=void 0!==d&&d,i=0;i<c;i++)r+="<br/>";switch(f&&(r+="<hr/>"),o){case 1:r+="<p>© 本文著作权归Velas电波站所有。未经站长允许不得对本文进行任何形式的转载或修改演绎。</p>";break;case 2:r+="<p>© 本文文字内容著作权归Velas电波站所有。商业转载请联系站长获得授权；非商业转载请注明本文出处及文章链接，且未经站长允许不得对本文文字内容进行修改演绎。</p>";break;default:r+="<p>© Velas电波站已获原作者授权转载，著作权归原作者所有。本文的转载条件请参照原文章中的声明或联系原作者。</strong></p>"}return r}var f=/\<\@velas\:music\-tag\s+?goto\="(\d+?)">(.*?)<\/@velas\:music\-tag>/gi,h=/\<\@velas\:bili\-src\="(.*?)"\s*?\/>/gi;function m(e){var t=e.md;return(void 0===t?"":t).replace(f,'<span class="music-id-tag" data-music-id="$1">$2</span>').replace(h,'<div class="video-player-container"><iframe class="video-player" src="//player.bilibili.com/player.html?$1&page=1&high_quality=1&danmaku=0" loading="lazy" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe></div>')}},413:function(e,t,r){"use strict";r(407)},414:function(e,t,r){(t=r(4)(!1)).push([e.i,'.post-item-card[data-v-f06f22a4]{display:block;text-decoration:none;color:#000;width:100%;overflow:hidden;position:relative;border-radius:10px;background-color:#f1f1f1;border:3px solid #f1f1f1;cursor:pointer;margin-bottom:30px;mask-image:none;-webkit-mask-image:-webkit-radial-gradient(#fff,#000);-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out;z-index:0}.post-item-card[data-v-f06f22a4]:hover{border-color:#d0d0d0;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-item-card[data-v-f06f22a4]{color:#fff;background-color:#272727;border-color:#272727}body:not(.no-dark-theme) .post-item-card[data-v-f06f22a4]:hover{border-color:#3e3e3e}}.card-container[data-v-f06f22a4],.card-header[data-v-f06f22a4]{position:relative}.card-header[data-v-f06f22a4]{width:calc(100% - 6px);height:12rem;border-radius:5px;margin:3px auto;overflow:hidden}.post-cover-mask[data-v-f06f22a4]{background-color:rgba(86,86,86,.3);position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;z-index:2}.post-cover[data-v-f06f22a4]{position:relative;width:100%;height:100%;background-size:cover;background-position:50%;background-repeat:no-repeat;z-index:1}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-cover[data-v-f06f22a4]{-webkit-filter:grayscale(30%) brightness(95%);filter:grayscale(30%) brightness(95%)}}.card-title[data-v-f06f22a4]{position:absolute;width:calc(100% - 3em);left:1.5em;bottom:.15em;color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:3}.card-title h3[data-v-f06f22a4],.card-title h4[data-v-f06f22a4]{margin:0 0 .5em;line-height:1.25}.card-title h3[data-v-f06f22a4]{font-size:1.3em}.card-title h3.with-subtitle[data-v-f06f22a4]{margin-bottom:.25em}.card-title h4[data-v-f06f22a4]{font-size:.95em}.card-body[data-v-f06f22a4]{padding:.25em 1.5em .75em}.card-body p.post-intro[data-v-f06f22a4]{margin:0 0 .75em;line-height:1.5;font-size:.85em}.card-body .spoiler-tag[data-v-f06f22a4]{display:inline-block;color:#444}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .card-body .spoiler-tag[data-v-f06f22a4]{color:#eee}}.card-body .spoiler-tag[data-v-f06f22a4]:after{content:"｜";margin-right:-.3em;display:inline-block;color:#000}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .card-body .spoiler-tag[data-v-f06f22a4]:after{color:#fff}}.post-info[data-v-f06f22a4]{width:100%}.post-info ul.info-list[data-v-f06f22a4]{margin:0;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-negative:0;flex-shrink:0;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:1.5;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style:none;font-size:.8em;opacity:.85}.post-info ul.info-list li[data-v-f06f22a4]{letter-spacing:.2px;color:#444}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-info ul.info-list li[data-v-f06f22a4]{color:#eee}}.post-info ul.info-list li.category-tag[data-v-f06f22a4]{padding:3px 8px;border-radius:3px;color:#fff!important}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-info ul.info-list li.category-tag[data-v-f06f22a4]{opacity:.97}}.post-info ul.info-list li+li[data-v-f06f22a4]:before{content:"";padding-left:1em}',""]),e.exports=t},415:function(e,t,r){"use strict";r(395);var n=r(402),o=r(12),l=r(393),c=r(410),d=[],f=c.channels;f.map((function(e){d.push(e.text)}));var h={name:"PostCard",props:{pId:{type:Number,required:!0},pTitle:{type:String,required:!0},subTitle:{type:String,required:!0},summary:{type:String,required:!0},cover:{type:String,required:!0},category:{type:String,required:!0},subCategory:{type:String,required:!0},spoilerTag:{type:Number},date:{type:String,required:!0}},methods:{formatTimeFromNow:function(e){var t=Object(n.a)(),r=Object(n.a)(e);return t.diff(r,"months",!0)>=11?r.format("LL"):r.fromNow()}},computed:{getCover:function(){return this.cover?Object(l.d)(this.cover):Object(o.i)(this.date)},getCategoryTagName:function(){return"".concat(this.category," · ").concat(this.subCategory)},getCategoryIcon:function(){var e=d.indexOf(this.category);return f[e].icon},getCategoryTagColor:function(){var e=d.indexOf(this.category);return"".concat(f[e].theme_color,"F8")},getThemeColor:function(){var e=d.indexOf(this.category);return"linear-gradient(".concat(f[e].theme_color,"D8, ").concat(f[e].theme_color,"EF)")}}},m=(r(413),r(8)),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nuxt-link",{staticClass:"post-item-card",attrs:{to:"/am/"+e.pId}},[r("div",{staticClass:"card-container"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"card-title shadow-text"},[r("h3",{staticClass:"post-title",class:e.subTitle?"with-subtitle":""},[e._v("\n            "+e._s(e.pTitle)+"\n          ")]),e._v(" "),e.subTitle?r("h4",{staticClass:"post-subtitle"},[e._v("\n            "+e._s(e.subTitle)+"\n          ")]):e._e()]),e._v(" "),r("div",{staticClass:"post-cover-mask"}),e._v(" "),r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.getCover,expression:"getCover",arg:"background-image"}],staticClass:"post-cover lazy-bg"})]),e._v(" "),r("div",{staticClass:"card-body"},[r("p",{staticClass:"post-intro"},[2===e.spoilerTag?r("span",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"建议接触相关作品后再阅读",expression:"'建议接触相关作品后再阅读'",modifiers:{top:!0}}],staticClass:"spoiler-tag severe"},[e._v("包含剧透")]):e._e(),e._v(" "),1===e.spoilerTag?r("span",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"可作为接触相关作品前的参考",expression:"'可作为接触相关作品前的参考'",modifiers:{top:!0}}],staticClass:"spoiler-tag light"},[e._v("无剧透")]):e._e(),e._v(" "),r("span",[e._v(e._s(e.summary))])]),e._v(" "),r("div",{staticClass:"post-info"},[r("ul",{staticClass:"info-list"},[r("li",{staticClass:"category-tag",style:{"background-color":e.getCategoryTagColor}},[e._v("\n              "+e._s(e.getCategoryTagName)+"\n            ")]),e._v(" "),r("li",[e._v(e._s(e.formatTimeFromNow(e.date)))])])])])])])],1)}),[],!1,null,"f06f22a4",null);t.a=component.exports},416:function(e,t,r){var map={"./zh-cn":403,"./zh-cn.js":403};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=416},440:function(e,t,r){var content=r(480);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("4784b6b6",content,!0,{sourceMap:!1})},479:function(e,t,r){"use strict";r(440)},480:function(e,t,r){(t=r(4)(!1)).push([e.i,".blank-space[data-v-49b4981c]{width:100%;height:150px}ul[data-v-49b4981c]{margin:0;padding:0}li[data-v-49b4981c]{list-style:none}main[data-v-49b4981c]{min-height:400px}.no-post[data-v-49b4981c]{position:relative;color:#444;text-align:center;vertical-align:middle;height:150px}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .no-post[data-v-49b4981c]{color:#dfdfdf}}.no-post p[data-v-49b4981c]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:230px;height:50px;line-height:1.5;vertical-align:middle}.page-container[data-v-49b4981c]{padding-top:25px}.my-notice[data-v-49b4981c]{text-align:center;font-size:85%;color:#181818}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .my-notice[data-v-49b4981c]{color:#f8f8f8}}",""]),e.exports=t},553:function(e,t,r){"use strict";r.r(t);r(189);var n=r(411),o=r(409),l=r(415),c=r(399),d={meta:{index:4,style:"light",crumbs:[{route:"#",text:"小说"}]},head:function(){return{title:"小说 - Velas电波站",meta:[{hid:"keywords",name:"keywords",content:"原创小说,独立小说,短篇小说,Velas"},{hid:"description",name:"description",content:"Velas站长Zeee的原创小说"}]}},asyncData:function(e){var t=e.app,r=(e.params,e.query),o=(e.error,parseInt(r.p)||1),l=[];return t.$api.archives.getArchiveByColumn({columnId:1,categoryId:4,page:o,count:9}).then((function(e){if(!e.data.find)throw new Error("data not found");e.data.archives.map((function(p){l.push(Object(n.c)(p))}));var t=e.data.count||0;return{posts:l,total:t,curPage:o}})).catch((function(e){return console.error(e),{posts:l,total:0,curPage:o}}))},components:{PageHeader:c.a,Paginate:o.a,PostCard:l.a},watchQuery:["p"],methods:{onPageChange:function(e){this.$router.push({path:this.$route.path,query:{p:e}})}},computed:{getPageCount:function(){return Math.ceil(this.total/9)}}},f=(r(479),r(8)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"template-content"},[r("page-header",{attrs:{title:"小说",subtitle:"我眼中的世界","background-image":"https://velas-1252562537.file.myqcloud.com/images/jyotirmoy-gupta-R4q3JUhT8XM-unsplash.jpg","background-position":"center center","mask-opacity":"0.2"}}),e._v(" "),r("main",{staticClass:"interlaced-main"},[r("div",{staticClass:"container page-container"},[e._m(0),e._v(" "),r("transition-group",{staticClass:"row post-list",attrs:{name:"grid",tag:"div"}},e._l(e.posts,(function(p){return r("post-card",{key:p.id,staticClass:"col-lg-4 col-md-6 col-xs-12",attrs:{"p-id":p.id,"p-title":p.title,"sub-title":p.subtitle,summary:p.summary,cover:p.cover,category:p.category,"sub-category":p.subCategory,"spoiler-tag":p.spoilerTag,date:p.date}})})),1),e._v(" "),1!==e.getPageCount||1!==e.curPage?r("paginate",{attrs:{"page-count":e.getPageCount,"click-handler":e.onPageChange,value:e.curPage,"prev-text":"‹","next-text":"›","container-class":"paginate-links paginate-style-1","hide-prev-next":""}}):e._e()],1),e._v(" "),r("div",{staticClass:"blank-space"})])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"my-notice post-list"},[t("blockquote",[t("h3",[this._v("友情提示")]),this._v(" "),t("p",[this._v("短篇按发布日期从旧往新阅读，体验可能会更好哦( ´▽` )ﾉ")])])])}],!1,null,"49b4981c",null);t.default=component.exports}}]);