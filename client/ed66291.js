(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{398:function(t,e,n){"use strict";var r=n(7),o=n(34),c=n(35),l=n(200),h=n(90),d=n(12),f=n(67).f,v=n(68).f,m=n(17).f,P=n(403).trim,y="Number",C=r.Number,x=C,w=C.prototype,S=c(n(124)(w))==y,k="trim"in String.prototype,O=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=k?e.trim():P(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(S?d((function(){w.valueOf.call(n)})):c(n)!=y)?l(new x(O(e)),n,C):O(e)};for(var T,M=n(13)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;M.length>E;E++)o(x,T=M[E])&&!o(C,T)&&m(C,T,v(x,T));C.prototype=w,w.constructor=C,n(20)(r,y,C)}},403:function(t,e,n){var r=n(2),o=n(36),c=n(12),l=n(404),h="["+l+"]",d=RegExp("^"+h+h+"*"),f=RegExp(h+h+"*$"),v=function(t,e,n){var o={},h=c((function(){return!!l[t]()||"​"!="​"[t]()})),d=o[t]=h?e(m):l[t];n&&(o[n]=d),r(r.P+r.F*h,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},404:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},411:function(t,e,n){"use strict";n(201)("sub",(function(t){return function(){return t(this,"sub","","")}}))},452:function(t,e,n){var content=n(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("2129293c",content,!0,{sourceMap:!1})},453:function(t,e,n){var content=n(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("4eefeb05",content,!0,{sourceMap:!1})},454:function(t,e,n){var content=n(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("3c0f02f4",content,!0,{sourceMap:!1})},455:function(t,e,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("ca21ea9c",content,!0,{sourceMap:!1})},457:function(t,e,n){"use strict";n(29),n(30);var r={name:"slide",props:["title"],data:function(){return{width:null}},inject:["carousel"],mounted:function(){this.$isServer||this.$el.addEventListener("dragstart",(function(t){return t.preventDefault()})),this.$el.addEventListener(this.carousel.isTouch?"touchend":"mouseup",this.onTouchEnd)},computed:{activeSlides:function(){for(var t=this.carousel,e=t.currentPage,n=t.breakpointSlidesPerPage,r=[],o=t.$children.filter((function(t){return t.$el&&t.$el.className.indexOf("VueCarousel-slide")>=0})).map((function(t){return t._uid})),i=0;i<n;){var c=o[e*n+i];r.push(c),i++}return r},isActive:function(){return this.activeSlides.indexOf(this._uid)>=0},isCenter:function(){var t=this.carousel.breakpointSlidesPerPage;return!(t%2==0||!this.isActive)&&this.activeSlides.indexOf(this._uid)===Math.floor(t/2)},isAdjustableHeight:function(){return this.carousel.adjustableHeight}},methods:{onTouchEnd:function(t){var e=this.carousel.isTouch&&t.changedTouches&&t.changedTouches.length>0?t.changedTouches[0].clientX:t.clientX,n=this.carousel.dragStartX-e;(0===this.carousel.minSwipeDistance||Math.abs(n)<this.carousel.minSwipeDistance)&&(this.$emit("slideclick",Object.assign({},t.currentTarget.dataset)),this.$emit("slide-click",Object.assign({},t.currentTarget.dataset)))}}},o=(n(537),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"VueCarousel-slide",class:{"VueCarousel-slide-active":t.isActive,"VueCarousel-slide-center":t.isCenter,"VueCarousel-slide-adjustableHeight":t.isAdjustableHeight},attrs:{tabindex:"-1","aria-hidden":!t.isActive,role:"tabpanel"}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},531:function(t,e,n){var r=n(2);r(r.S,"Math",{sign:n(532)})},532:function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},533:function(t,e,n){"use strict";n(452)},534:function(t,e,n){var r=n(5)(!1);r.push([t.i,'.VueCarousel-navigation-button[data-v-57a1aab7]{position:absolute;top:50%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-color:rgba(0,0,0,0);padding:0;cursor:pointer;outline:none}.VueCarousel-navigation-button[data-v-57a1aab7]:focus{outline:1px solid #add8e6}.VueCarousel-navigation-next[data-v-57a1aab7]{right:0;-webkit-transform:translateY(-50%) translateX(100%);transform:translateY(-50%) translateX(100%);font-family:"system"}.VueCarousel-navigation-prev[data-v-57a1aab7]{left:0;-webkit-transform:translateY(-50%) translateX(-100%);transform:translateY(-50%) translateX(-100%);font-family:"system"}.VueCarousel-navigation--disabled[data-v-57a1aab7]{opacity:.5;cursor:default}@font-face{font-family:system;font-style:normal;font-weight:300;src:local(".SFNSText-Light"),local(".HelveticaNeueDeskInterface-Light"),local(".LucidaGrandeUI"),local("Ubuntu Light"),local("Segoe UI Symbol"),local("Roboto-Light"),local("DroidSans"),local("Tahoma")}',""]),t.exports=r},535:function(t,e,n){"use strict";n(453)},536:function(t,e,n){var r=n(5)(!1);r.push([t.i,".VueCarousel-pagination[data-v-47042a71]{width:100%;text-align:center}.VueCarousel-pagination--top-overlay[data-v-47042a71]{position:absolute;top:0}.VueCarousel-pagination--bottom-overlay[data-v-47042a71]{position:absolute;bottom:0}.VueCarousel-dot-container[data-v-47042a71]{display:inline-block;margin:0 auto;padding:0}.VueCarousel-dot[data-v-47042a71]{display:inline-block;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-clip:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;padding:0;border-radius:100%;outline:none}.VueCarousel-dot[data-v-47042a71]:focus{outline:1px solid #add8e6}",""]),t.exports=r},537:function(t,e,n){"use strict";n(454)},538:function(t,e,n){var r=n(5)(!1);r.push([t.i,".VueCarousel-slide{-ms-flex-preferred-size:inherit;flex-basis:inherit;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:none}.VueCarousel-slide-adjustableHeight{display:table;-ms-flex-preferred-size:auto;flex-basis:auto;width:100%}",""]),t.exports=r},539:function(t,e,n){"use strict";n(455)},540:function(t,e,n){var r=n(5)(!1);r.push([t.i,".VueCarousel{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}.VueCarousel--reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.VueCarousel-wrapper{width:100%;position:relative;overflow:hidden}.VueCarousel-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-backface-visibility:hidden;backface-visibility:hidden}.VueCarousel-inner--center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",""]),t.exports=r},543:function(t,e,n){"use strict";n(48),n(25),n(52),n(53);var r=n(115);var o=n(149),c=n(86);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=n(24),d=n(11);n(91),n(92),n(398),n(30),n(29),n(93),n(531);var f={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0},autoplayDirection:{type:String,default:"forward"}},data:()=>({autoplayInterval:null}),destroyed(){this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay(){this.autoplay&&(this.autoplayInterval=setInterval(this.autoplayAdvancePage,this.autoplayTimeout))},restartAutoplay(){this.pauseAutoplay(),this.startAutoplay()},autoplayAdvancePage(){this.advancePage(this.autoplayDirection)}},mounted(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay()}};var v=(t,e,n)=>{let r;return()=>{const o=void 0,c=n&&!r;clearTimeout(r),r=setTimeout((()=>{r=null,n||t.apply(o)}),e),c&&t.apply(o)}},m={name:"navigation",inject:["carousel"],props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"&#9654"},prevLabel:{type:String,default:"&#9664"}},computed:{canAdvanceForward:function(){return this.carousel.canAdvanceForward||!1},canAdvanceBackward:function(){return this.carousel.canAdvanceBackward||!1}},methods:{triggerPageAdvance:function(t){this.$emit("navigationclick",t)}}},P=(n(533),n(8)),y=Object(P.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"VueCarousel-navigation"},[n("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-prev",class:{"VueCarousel-navigation--disabled":!t.canAdvanceBackward},style:"padding: "+t.clickTargetSize+"px; margin-right: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Previous page",tabindex:t.canAdvanceBackward?0:-1},domProps:{innerHTML:t._s(t.prevLabel)},on:{click:function(e){return e.preventDefault(),t.triggerPageAdvance("backward")}}}),t._v(" "),n("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-next",class:{"VueCarousel-navigation--disabled":!t.canAdvanceForward},style:"padding: "+t.clickTargetSize+"px; margin-left: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Next page",tabindex:t.canAdvanceForward?0:-1},domProps:{innerHTML:t._s(t.nextLabel)},on:{click:function(e){return e.preventDefault(),t.triggerPageAdvance("forward")}}})])}),[],!1,null,"57a1aab7",null).exports,C={name:"pagination",inject:["carousel"],computed:{paginationPositionModifierName:function(){var t=this.carousel.paginationPosition;if(!(t.indexOf("overlay")<0))return t},paginationPropertyBasedOnPosition:function(){return this.carousel.paginationPosition.indexOf("top")>=0?"bottom":"top"},paginationCount:function(){return this.carousel&&this.carousel.scrollPerPage?this.carousel.pageCount:this.carousel.slideCount||0},dotContainerStyle:function(){var t=this.carousel;if(-1===t.maxPaginationDotCount)return{"margin-top":"".concat(2*t.paginationPadding,"px")};var e=2*t.paginationPadding,n=t.maxPaginationDotCount*(t.paginationSize+e);return{"margin-top":"".concat(2*t.paginationPadding,"px"),overflow:"hidden",width:"".concat(n,"px"),margin:"0 auto","white-space":"nowrap"}}},methods:{goToPage:function(t){this.$emit("paginationclick",t)},isCurrentDot:function(t){return t===this.carousel.currentPage},getDotTitle:function(t){return this.carousel.$children[t].title?this.carousel.$children[t].title:"Item ".concat(t)},dotStyle:function(t){var e=this.carousel,n={};if(n["margin-".concat(this.paginationPropertyBasedOnPosition)]="".concat(2*e.paginationPadding,"px"),Object.assign(n,{padding:"".concat(e.paginationPadding,"px"),width:"".concat(e.paginationSize,"px"),height:"".concat(e.paginationSize,"px"),"background-color":"".concat(this.isCurrentDot(t)?e.paginationActiveColor:e.paginationColor)}),-1===e.maxPaginationDotCount)return n;var r=e.paginationSize+2*e.paginationPadding,o=e.pageCount-e.maxPaginationDotCount,c=0-r*(e.currentPage>o?o:e.currentPage<=e.maxPaginationDotCount/2?0:e.currentPage-Math.ceil(e.maxPaginationDotCount/2)+1);return Object.assign(n,{"-webkit-transform":"translate3d(".concat(c,"px,0,0)"),transform:"translate3d(".concat(c,"px,0,0)"),"-webkit-transition":"-webkit-transform ".concat(e.speed/1e3,"s"),transition:"transform ".concat(e.speed/1e3,"s")})}}},x=(n(535),Object(P.a)(C,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.carousel.pageCount>1,expression:"carousel.pageCount > 1"}],staticClass:"VueCarousel-pagination",class:(t={},t["VueCarousel-pagination--"+e.paginationPositionModifierName]=e.paginationPositionModifierName,t)},[r("div",{staticClass:"VueCarousel-dot-container",style:e.dotContainerStyle,attrs:{role:"tablist"}},e._l(e.paginationCount,(function(t,n){return r("button",{key:t+"_"+n,staticClass:"VueCarousel-dot",class:{"VueCarousel-dot--active":e.isCurrentDot(n)},style:e.dotStyle(n),attrs:{"aria-hidden":"false",role:"tab",title:e.getDotTitle(n),value:e.getDotTitle(n),"aria-label":e.getDotTitle(n),"aria-selected":e.isCurrentDot(n)?"true":"false"},on:{click:function(t){return e.goToPage(n)}}})})),0)])}),[],!1,null,"47042a71",null).exports),w=n(457);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={onwebkittransitionend:"webkitTransitionEnd",onmoztransitionend:"transitionend",onotransitionend:"oTransitionEnd otransitionend",ontransitionend:"transitionend"},T=function(){for(var t in O)if(t in window)return O[t]},M={name:"carousel",beforeUpdate:function(){this.computeCarouselWidth()},components:{Navigation:y,Pagination:x,Slide:w.a},data:function(){return{browserWidth:null,carouselWidth:0,currentPage:0,dragging:!1,dragMomentum:0,dragOffset:0,dragStartY:0,dragStartX:0,isTouch:"undefined"!=typeof window&&"ontouchstart"in window,offset:0,refreshRate:16,slideCount:0,transitionstart:"transitionstart",transitionend:"transitionend",currentHeight:"auto"}},mixins:[f],provide:function(){return{carousel:this}},props:{adjustableHeight:{type:Boolean,default:!1},adjustableHeightEasing:{type:String},centerMode:{type:Boolean,default:!1},easing:{type:String,validator:function(t){return-1!==["ease","linear","ease-in","ease-out","ease-in-out"].indexOf(t)||t.includes("cubic-bezier")},default:"ease"},loop:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:8},mouseDrag:{type:Boolean,default:!0},touchDrag:{type:Boolean,default:!0},navigateTo:{type:[Number,Array],default:0},navigationClickTargetSize:{type:Number,default:8},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"&#9654"},navigationPrevLabel:{type:String,default:"&#9664"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationPosition:{type:String,default:"bottom"},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},resistanceCoef:{type:Number,default:20},scrollPerPage:{type:Boolean,default:!0},spacePadding:{type:Number,default:0},spacePaddingMaxOffsetFactor:{type:Number,default:0},speed:{type:Number,default:500},tagName:{type:String,default:"slide"},value:{type:Number},maxPaginationDotCount:{type:Number,default:-1},rtl:{type:Boolean,default:!1}},watch:{value:function(t){t!==this.currentPage&&(this.goToPage(t),this.render())},navigateTo:{immediate:!0,handler:function(t){var e=this;"object"===Object(d.a)(t)?(0==t[1]&&(this.dragging=!0,setTimeout((function(){e.dragging=!1}),this.refreshRate)),this.$nextTick((function(){e.goToPage(t[0])}))):this.$nextTick((function(){e.goToPage(t)}))}},currentPage:function(t){this.$emit("pageChange",t),this.$emit("page-change",t),this.$emit("input",t)},autoplay:function(t){!1===t?this.pauseAutoplay():this.restartAutoplay()}},computed:{breakpointSlidesPerPage:function(){if(!this.perPageCustom)return this.perPage;var t=this.perPageCustom,e=this.browserWidth,n=t.sort((function(a,b){return a[0]>b[0]?-1:1})).filter((function(t){return e>=t[0]}));return n[0]&&n[0][1]||this.perPage},canAdvanceForward:function(){return this.loop||this.offset<this.maxOffset},canAdvanceBackward:function(){return this.loop||this.currentPage>0},currentPerPage:function(){return!this.perPageCustom||this.$isServer?this.perPage:this.breakpointSlidesPerPage},currentOffset:function(){return this.isCenterModeEnabled?0:this.rtl?1*(this.offset-this.dragOffset):-1*(this.offset+this.dragOffset)},isHidden:function(){return this.carouselWidth<=0},maxOffset:function(){return Math.max(this.slideWidth*(this.slideCount-this.currentPerPage)-this.spacePadding*this.spacePaddingMaxOffsetFactor,0)},pageCount:function(){return this.scrollPerPage?Math.ceil(this.slideCount/this.currentPerPage):this.slideCount-this.currentPerPage+1},slideWidth:function(){return(this.carouselWidth-2*this.spacePadding)/this.currentPerPage},isNavigationRequired:function(){return this.slideCount>this.currentPerPage},isCenterModeEnabled:function(){return this.centerMode&&!this.isNavigationRequired},transitionStyle:function(){var t="".concat(this.speed/1e3,"s"),e="".concat(t," ").concat(this.easing," transform");return this.adjustableHeight?"".concat(e,", height ").concat(t," ").concat(this.adjustableHeightEasing||this.easing):e},padding:function(){var t=this.spacePadding;return t>0&&t}},methods:{getNextPage:function(){return this.currentPage<this.pageCount-1?this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage:function(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage:function(t){t&&"backward"===t&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage(),"navigation"):(!t||t&&"backward"!==t)&&this.canAdvanceForward&&this.goToPage(this.getNextPage(),"navigation")},goToLastSlide:function(){var t=this;this.dragging=!0,setTimeout((function(){t.dragging=!1}),this.refreshRate),this.$nextTick((function(){t.goToPage(t.pageCount)}))},attachMutationObserver:function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(e){var n={attributes:!0,data:!0};if(this.adjustableHeight&&(n=k(k({},n),{},{childList:!0,subtree:!0,characterData:!0})),this.mutationObserver=new e((function(){t.$nextTick((function(){t.computeCarouselWidth(),t.computeCarouselHeight()}))})),this.$parent.$el)for(var r=this.$el.getElementsByClassName("VueCarousel-inner"),i=0;i<r.length;i++)this.mutationObserver.observe(r[i],n)}},handleNavigation:function(t){this.advancePage(t),this.pauseAutoplay(),this.$emit("navigation-click",t)},detachMutationObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},getBrowserWidth:function(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth:function(){for(var t=this.$el.getElementsByClassName("VueCarousel-inner"),i=0;i<t.length;i++)t[i].clientWidth>0&&(this.carouselWidth=t[i].clientWidth||0);return this.carouselWidth},getCarouselHeight:function(){var t=this;if(!this.adjustableHeight)return"auto";var e=this.currentPerPage*(this.currentPage+1)-1,n=l(Array(this.currentPerPage)).map((function(n,r){return t.getSlide(e+r)})).reduce((function(t,e){return Math.max(t,e&&e.$el.clientHeight||0)}),0);return this.currentHeight=0===n?"auto":"".concat(n,"px"),this.currentHeight},getSlideCount:function(){var t=this;this.slideCount=this.$slots&&this.$slots.default&&this.$slots.default.filter((function(slot){return slot.tag&&null!==slot.tag.match("^vue-component-\\d+-".concat(t.tagName,"$"))})).length||0},getSlide:function(t){var e=this;return this.$children.filter((function(t){return null!==t.$vnode.tag.match("^vue-component-\\d+-".concat(e.tagName,"$"))}))[t]},goToPage:function(t,e){t>=0&&t<=this.pageCount&&(this.offset=this.scrollPerPage?Math.min(this.slideWidth*this.currentPerPage*t,this.maxOffset):this.slideWidth*t,this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.currentPage=t,"pagination"===e&&(this.pauseAutoplay(),this.$emit("pagination-click",t)))},onStart:function(t){2!=t.button&&(document.addEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0),this.startTime=t.timeStamp,this.dragging=!0,this.dragStartX=this.isTouch?t.touches[0].clientX:t.clientX,this.dragStartY=this.isTouch?t.touches[0].clientY:t.clientY)},onEnd:function(t){this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.pauseAutoplay();var e=this.isTouch?t.changedTouches[0].clientX:t.clientX,n=this.dragStartX-e;if(this.dragMomentum=n/(t.timeStamp-this.startTime),0!==this.minSwipeDistance&&Math.abs(n)>=this.minSwipeDistance){var r=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth;this.dragOffset=this.dragOffset+Math.sign(n)*(r/2)}this.rtl?this.offset-=this.dragOffset:this.offset+=this.dragOffset,this.dragOffset=0,this.dragging=!1,this.render(),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0)},onDrag:function(t){var e=this.isTouch?t.touches[0].clientX:t.clientX,n=this.isTouch?t.touches[0].clientY:t.clientY,r=this.dragStartX-e,o=this.dragStartY-n;if(!(this.isTouch&&Math.abs(r)<Math.abs(o))){t.stopImmediatePropagation(),this.dragOffset=r;var c=this.offset+this.dragOffset;this.rtl?0==this.offset&&this.dragOffset>0?this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset):this.offset==this.maxOffset&&this.dragOffset<0&&(this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset)):c<0?this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset):c>this.maxOffset&&(this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset))}},onResize:function(){var t=this;this.computeCarouselWidth(),this.computeCarouselHeight(),this.dragging=!0,this.render(),setTimeout((function(){t.dragging=!1}),this.refreshRate)},render:function(){this.rtl?this.offset-=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth:this.offset+=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth;var t=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth,e=t*Math.floor(this.slideCount/(this.currentPerPage-1)),n=e+this.slideWidth*(this.slideCount%this.currentPerPage);this.offset>(e+n)/2?this.offset=n:this.offset=t*Math.round(this.offset/t),this.offset=Math.max(0,Math.min(this.offset,this.maxOffset)),this.currentPage=this.scrollPerPage?Math.round(this.offset/this.slideWidth/this.currentPerPage):Math.round(this.offset/this.slideWidth)},computeCarouselWidth:function(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds()},computeCarouselHeight:function(){this.getCarouselHeight()},setCurrentPageInBounds:function(){if(!this.canAdvanceForward&&this.scrollPerPage){var t=this.pageCount-1;this.currentPage=t>=0?t:0,this.offset=Math.max(0,Math.min(this.offset,this.maxOffset))}},handleTransitionStart:function(){this.$emit("transitionStart"),this.$emit("transition-start")},handleTransitionEnd:function(){this.$emit("transitionEnd"),this.$emit("transition-end")}},mounted:function(){window.addEventListener("resize",v(this.onResize,this.refreshRate)),(this.isTouch&&this.touchDrag||this.mouseDrag)&&this.$refs["VueCarousel-wrapper"].addEventListener(this.isTouch?"touchstart":"mousedown",this.onStart),this.attachMutationObserver(),this.computeCarouselWidth(),this.computeCarouselHeight(),this.transitionstart=T(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionstart,this.handleTransitionStart),this.transitionend=T(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionend,this.handleTransitionEnd),this.$emit("mounted"),"backward"===this.autoplayDirection&&this.goToLastSlide()},beforeDestroy:function(){this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionstart,this.handleTransitionStart),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionend,this.handleTransitionEnd),this.$refs["VueCarousel-wrapper"].removeEventListener(this.isTouch?"touchstart":"mousedown",this.onStart)}},E=(n(539),Object(P.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"VueCarousel",class:{"VueCarousel--reverse":"top"===t.paginationPosition}},[n("div",{ref:"VueCarousel-wrapper",staticClass:"VueCarousel-wrapper"},[n("div",{ref:"VueCarousel-inner",class:["VueCarousel-inner",{"VueCarousel-inner--center":t.isCenterModeEnabled}],style:{transform:"translate("+t.currentOffset+"px, 0)",transition:t.dragging?"none":t.transitionStyle,"ms-flex-preferred-size":t.slideWidth+"px","webkit-flex-basis":t.slideWidth+"px","flex-basis":t.slideWidth+"px",visibility:t.slideWidth?"visible":"hidden",height:""+t.currentHeight,"padding-left":t.padding+"px","padding-right":t.padding+"px"}},[t._t("default")],2)]),t._v(" "),t.navigationEnabled?t._t("navigation",(function(){return[t.isNavigationRequired?n("navigation",{attrs:{clickTargetSize:t.navigationClickTargetSize,nextLabel:t.navigationNextLabel,prevLabel:t.navigationPrevLabel},on:{navigationclick:t.handleNavigation}}):t._e()]})):t._e(),t._v(" "),t.paginationEnabled?t._t("pagination",(function(){return[n("pagination",{on:{paginationclick:function(e){return t.goToPage(e,"pagination")}}})]})):t._e()],2)}),[],!1,null,null,null));e.a=E.exports}}]);