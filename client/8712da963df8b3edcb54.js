(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{284:function(t){t.exports=JSON.parse('{"data":[{"date":"2017-8-29","content":["日志停止更新，更新总结由Velas News代替完成。"]},{"date":"2017-8-21","content":["一些搜索引擎优化工作（SEO）"]},{"date":"2017-8-4","content":["修复了IE9 - IE11的支持（由于HTML5支持问题，不建议使用IE9进行浏览）","首页及导航栏设计调整"]},{"date":"2017-8-3","content":["首页、页脚和日志设计调整","首页自适应逻辑优化","日志组件自适应逻辑优化"]},{"date":"2017-8-2","content":["重新设计了首页","页脚设计调整","修复了导航栏组件与回到顶部组件在刚创建时状态异常的bug"]},{"date":"2017-8-1","content":["增加了时间胶囊功能","界面微调"]},{"date":"2017-7-18","content":["移动端适配优化","Web App适配"]},{"date":"2017-7-17","content":["全站完成移动端界面的适配"]},{"date":"2017-7-14","content":["首页和底栏设计调整","将网站所有图片进行了压缩并移到了图床上，以提升加载速度","增加了404页面"]},{"date":"2017-7-13","content":["重新设计了导航栏样式，新增了多个动画效果","重构了导航栏和底栏代码","取消了sourcemap，大大缩小了载入文件体积"]},{"date":"2017-7-11","content":["更改了日志的json书写格式，并为其增加了文本过滤器(Filter)，更方便了我的日志编写","为前端路由增加了懒加载方式，使网页加载更加迅速","修复了Log的日志在切换时，过渡效果会造成文本跳动的bug"]},{"date":"2017-7-10","content":["使用vue-cli将Velas.xyz进行了重构。新版的Velas为SPA(单页面应用)，且完全使用了组件化开发","为页面切换增加了切换动画","将网页由虚拟主机搬迁到nginx服务器下，加快了网页的请求处理与载入速度"]},{"date":"2017-3-22","content":["导航栏及部分页面逻辑修复"]},{"date":"2017-3-21","content":["完成了Music页的排版与布局"]},{"date":"2017-3-20","content":["优化了文件结构，缩短了第一次打开网页时文件的请求时间","修复了Log页当当日只有一条更新日志时，项目符号无法切换的bug","优化了导航栏的动画细节"]},{"date":"2017-3-15","content":["对导航栏样式与功能进行了扩展","优化了导航栏模块化设计的代码","修复了Log页切换月份时的渲染问题","对首页的banner的设计进行了调整"]},{"date":"2017-2-11","content":["使用了Vue对Velas进行了重构(*由于重构的原因，之前的部分功能将暂时或永久失效)","使用了全新的设计风格对Velas进行了重新设计"]},{"date":"2016-8-11","content":["标注设计样式调整。","修复了在触屏设备上标注展开后不能隐藏的bug。"]},{"date":"2016-8-8","content":["针对移动设备和高分屏优化Talk页的定位逻辑，优化了展开/关闭文章的体验。","重写了日志页中将月份列表标题固定定位的方法，修复了标题固定定位异常、日志页定位触发失效、标题固定定位超出边界等bug。","修复了在Firefox中平滑定位失效的bug。","日志页新增了标注信息功能。现在，带有标注的更新项都会有虚线注明。将鼠标移到其上方时，将自动显示相应的标注内容。方便了以后翻阅更新相关代码或注释备忘等。"]},{"date":"2016-8-7","content":["优化Talk页的定位逻辑","对日志页和Talk页舍弃了使用锚点的定位方法，并引入了利用jQ实现平滑定位的方法。使定位过程更加流畅。","代码结构优化。"]},{"date":"2016-8-6","content":["修复了展开动画在运行过程中被关闭，或关闭过程中被展开时，页面（动画）卡死的bug。","代码结构优化"]},{"date":"2016-8-5","content":["为Talk页文章详情的展开/关闭添加了动画，并实现了仅对展开的文章进行图片懒加载。","对Talk页文章列表的代码结构进行模块化，为后台接入做准备。"]},{"date":"2016-8-4","content":["为日志页列表的展开/关闭添加了动画。","优化了日志页列表的使用逻辑和实现代码。"]},{"date":"2016-8-1","content":["修复了一处瀑布流在CSS3实现方式下界面异常的bug","修复了一处Talk页（留言板页）界面的显示bug。","修复了Edge以及其他webkit手机浏览器下的日志页的月份标题在fixed状态下点击时发生错位的bug。","日志页代码优化，并对日志展开行为的代码进行分离。","将jQ库(版本:2.1.1)放到了服务器中，一定程度上缓解了之前打开日志页有延时的问题。"]},{"date":"2016-7-31","content":["增加了瀑布流在CSS3下的实现方式。","修复了瀑布流在JS实现方式下显示bug。","修复了瀑布流的JS运行可能会在浏览器报错的bug。"]},{"date":"2016-7-29","content":["摄影页开放，用于瀑布流视图测试。","首页界面细节调整。"]},{"date":"2016-7-8","content":["Talk界面细节调整。"]},{"date":"2016-7-7","content":["消除了Webkit的Font Boosting特性对个别网页字体与排版的影响。现在日志页与Talk页的字体大小在安卓浏览器上都与其他页面统一了。"]},{"date":"2016-7-4","content":["修复了Talk和实验室页面部分UI出错的bug"]},{"date":"2016-7-1","content":["修复了网页语言会被浏览器识别为英文的bug","更新了404页面的设计"]},{"date":"2016-6-19","content":["更改了Talk页月份列表毛玻璃效果的实现方式，新的模糊效果更加自然。同时也修复了(Microsoft Edge、iOS Safari、Android Browser等)原本支持filter:blur的浏览器上Talk页月份列表背景不能显示毛玻璃效果的bug。"]},{"date":"2016-6-7","content":["做了一些视觉风格的调整。"]},{"date":"2016-6-6","content":["调整了Talk页月份列表的配色和排版，使得整体视觉体验更统一。"]},{"date":"2016-6-5","content":["重新设计了Talk页的月份列表，并将打开月份列表的方式改为点击月份标签。"]},{"date":"2016-6-4","content":["为Talk页加入月份列表和月份标签。","由于兼容性问题，移除了日志页月份在移动端的浮动置顶效果。"]},{"date":"2016-6-3","content":["为日志页加入日志列表折叠功能，并优化了一系列代码"]},{"date":"2016-6-2","content":["引入了makefixed.js元素固定插件。优化了日志页元素固定样式（fixed）效果。","优化了Talk页的文章展开逻辑"]},{"date":"2016-5-29","content":["引入了Echo.js图像延迟加载库(lazy-loading)。现在Talk页面文章处于折叠状态下时，折叠部分的图片不会像原先那样全部加载了。","日志列表逻辑改进，当更新项只有一个时显示项目符号","Talk页面收起/展开文章功能代码优化"]},{"date":"2016-5-28","content":["留言板的布局调整，并改进了JS代码"]},{"date":"2016-5-27","content":["Talk页增加文章展开/收起按钮","Talk页的留言板(demo)开放"]},{"date":"2016-5-26","content":["调整了首页在移动端上的显示效果","优化了首页和日志页的视觉效果"]},{"date":"2016-5-25","content":["Talk页面开放"]},{"date":"2016-5-19","content":["美化实验室环境"]},{"date":"2016-5-18","content":["一点点美化工作"]},{"date":"2016-5-17","content":["发现了渐变参数（linear-gradient），用于游戏页美化","实验室项目列表实现了卡片效果"]},{"date":"2016-5-16","content":["CSS代码调整，适应响应式布局","游戏页开放，尝试引入Html5视频"]},{"date":"2016-5-14","content":["全新实验室页设计","日志页界面调整"]},{"date":"2016-5-13","content":["全新日志页设计","优化了代码和图片体积，大大提升了网页加载速度"]},{"date":"2016-5-12","content":["新域名加入！启用了www.velas.xyz新网址，更便于记忆","采用js图片预加载方式，提升了首页的体验","开放实验室版面"]},{"date":"2016-5-11","content":["全新的首页设计","进行了图片压缩，加快了网页加载速度，减少了流量消耗","开放更新日志版面，一起来见证Velas的成长","结构优化"]},{"date":"2016-5-10","content":["发现了新的动画过渡方式，现在动画更加自然流畅啦","更换了首页图片","结构优化"]},{"date":"2016-5-6","content":["为网页添加了CSS3动画，使页面更加灵动","增加了404提示页面和弹窗消息"]},{"date":"2016-5-3","content":["Velas建站"]}]}')},285:function(t,e,n){var content=n(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("4040d06c",content,!0,{sourceMap:!1})},286:function(t,e,n){var content=n(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("386a414c",content,!0,{sourceMap:!1})},287:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTEwLjggOS41bC45LS45TDguMSA1IDQuMiA4LjZsLjkuOSAzLTIuNyAyLjcgMi43eiIvPjwvc3ZnPg=="},288:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTUuMSA1bC0uOS45IDMuNiAzLjYgMy45LTMuNi0xLS45LTMgMi43TDUuMSA1eiIvPjwvc3ZnPg=="},289:function(t,e,n){var content=n(350);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("2871d04e",content,!0,{sourceMap:!1})},290:function(t,e,n){var content=n(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("3cfb3662",content,!0,{sourceMap:!1})},291:function(t,e,n){var content=n(354);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("035b01c4",content,!0,{sourceMap:!1})},345:function(t,e,n){"use strict";var o=n(285);n.n(o).a},346:function(t,e,n){(e=n(7)(!1)).push([t.i,"#date-selector[data-v-d5b75f7c]{margin:0 auto;padding:20px 30px 0}#date-selector p[data-v-d5b75f7c],#date-selector select[data-v-d5b75f7c]{display:inline-block}#date-selector select[data-v-d5b75f7c]{padding:0 10px}#date-selector p[data-v-d5b75f7c]{margin-right:10px;color:#444}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) #date-selector p[data-v-d5b75f7c]{color:#eee}}",""]),t.exports=e},347:function(t,e,n){"use strict";var o=n(286);n.n(o).a},348:function(t,e,n){var o=n(7),l=n(51),r=n(287),d=n(288);e=o(!1);var c=l(r),h=l(d);e.push([t.i,".catalog-list[data-v-df5140e4]{float:left;position:absolute;left:50px;top:30px;padding:15px 0}.catalog-list ul[data-v-df5140e4]{font-size:14px;width:135px;margin-left:15px;color:#444;list-style:none;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .catalog-list ul[data-v-df5140e4]{color:#eee}}.catalog-list ul li[data-v-df5140e4]{padding:5px 15px;position:relative;display:block;list-style:none;margin-left:-15px}.catalog-list ul a[data-v-df5140e4]{text-decoration:none}.catalog-list .main-nav .panel[data-v-df5140e4]{padding-top:0;padding-bottom:0}.catalog-list .main-nav .panel .area[data-v-df5140e4],.catalog-list .main-nav .panel .area[data-v-df5140e4]:hover{color:#444;border-left:1px solid #ccc;display:block;padding:8px 15px;font-size:16px;position:relative;font-weight:500}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .catalog-list .main-nav .panel .area[data-v-df5140e4],body:not(.no-dark-theme) .catalog-list .main-nav .panel .area[data-v-df5140e4]:hover{color:#eee}}.catalog-list .main-nav .panel ul[data-v-df5140e4]{margin-left:0;padding:inherit;overflow:hidden;height:0}.catalog-list .main-nav .panel li[data-v-df5140e4]{border-left:1px solid #ccc;padding-left:25px;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}.catalog-list .main-nav .panel li[data-v-df5140e4]:hover{color:#000;-webkit-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .catalog-list .main-nav .panel li[data-v-df5140e4]{border-left-color:#888}body:not(.no-dark-theme) .catalog-list .main-nav .panel li[data-v-df5140e4]:hover{color:#fff}}.catalog-list .main-nav .panel.expanded .area[data-v-df5140e4],.catalog-list .main-nav .panel.expanded li[data-v-df5140e4]{border-color:#373277}.catalog-list .main-nav .panel.expanded .area[data-v-df5140e4]:hover{background:url("+c+") 100px 5px no-repeat;background-size:24px}.catalog-list .main-nav .panel.closed .area[data-v-df5140e4]:hover{background:url("+h+") 100px 5px no-repeat;background-size:24px;border-color:#373277}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .catalog-list .main-nav .panel.closed .area[data-v-df5140e4]:hover,body:not(.no-dark-theme) .catalog-list .main-nav .panel.expanded .area[data-v-df5140e4],body:not(.no-dark-theme) .catalog-list .main-nav .panel.expanded li[data-v-df5140e4]{border-color:#c3c0ec}}",""]),t.exports=e},349:function(t,e,n){"use strict";var o=n(289);n.n(o).a},350:function(t,e,n){(e=n(7)(!1)).push([t.i,".day-list[data-v-8ea09ea4]{position:absolute;top:30px;float:left;padding:15px 0}.day-list[data-v-8ea09ea4],.day-list .affix[data-v-8ea09ea4]{right:80px}.day-list li[data-v-8ea09ea4]{-webkit-transition:all .1s ease-out;-o-transition:all .1s ease-out;transition:all .1s ease-out;border-left:1px solid #ccc;padding-left:25px}.day-list li.active[data-v-8ea09ea4],.day-list li.active[data-v-8ea09ea4]:hover{border-color:#000;-webkit-transition:all .1s ease-out;-o-transition:all .1s ease-out;transition:all .1s ease-out}.day-list li[data-v-8ea09ea4]:hover{border-color:#666;-webkit-transition:all .1s ease-out;-o-transition:all .1s ease-out;transition:all .1s ease-out}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .day-list li[data-v-8ea09ea4]{border-left-color:#888}body:not(.no-dark-theme) .day-list li.active[data-v-8ea09ea4],body:not(.no-dark-theme) .day-list li.active[data-v-8ea09ea4]:hover{border-color:#fff}body:not(.no-dark-theme) .day-list li[data-v-8ea09ea4]:hover{border-color:silver}}.day-list ul[data-v-8ea09ea4]{font-size:14px;width:135px;margin-left:15px;color:#444;list-style:none;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .day-list ul[data-v-8ea09ea4]{color:#eee}}.day-list ul li[data-v-8ea09ea4]{padding:5px 15px;position:relative;display:block;list-style:none;margin-left:-15px}.day-list ul a[data-v-8ea09ea4]{text-decoration:none}",""]),t.exports=e},351:function(t,e,n){"use strict";var o=n(290);n.n(o).a},352:function(t,e,n){(e=n(7)(!1)).push([t.i,".updatelog-list[data-v-d9433228]{padding-top:20px;margin:0 auto;line-height:26px}.updatelog-list li[data-v-d9433228]{font-size:16px}.updatelog-list li.singleList[data-v-d9433228]{list-style-type:circle}.updatelog-list .date[data-v-d9433228]{width:100%;position:relative;background-color:hsla(0,0%,100%,.95)}.updatelog-list .date i[data-v-d9433228]{-webkit-transition:all .16s ease;-o-transition:all .16s ease;transition:all .16s ease}.updatelog-list .date h3[data-v-d9433228]{margin:0;padding:0 10px;color:#444;line-height:40px;cursor:pointer}.updatelog-list .notecard[data-v-d9433228]{overflow:hidden;margin:17px auto}.updatelog-list .notecard h2[data-v-d9433228],.updatelog-list .notecard ol[data-v-d9433228]{float:left;max-height:9999px}.updatelog-list .notecard ol[data-v-d9433228]{width:77%}.updatelog-list .notecard h2[data-v-d9433228]{width:120px;padding-left:25px;font-weight:500}@media screen and (max-width:900px){.updatelog-list[data-v-d9433228]{padding:0 20px}}",""]),t.exports=e},353:function(t,e,n){"use strict";var o=n(291);n.n(o).a},354:function(t,e,n){(e=n(7)(!1)).push([t.i,"header[data-v-44f131e0]{margin:0 auto;border-top:2px solid #000;border-bottom:2px solid #000}header h1[data-v-44f131e0]{margin:0 auto;padding:30px 0;color:#000;font-size:2em;letter-spacing:1px}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) header[data-v-44f131e0]{border-color:#fff}body:not(.no-dark-theme) header h1[data-v-44f131e0]{color:#fff}}main[data-v-44f131e0]{position:relative;width:100%;margin:0 auto;min-height:400px}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) main[data-v-44f131e0]{color:#fff}}.blank[data-v-44f131e0]{height:120px}",""]),t.exports=e},379:function(t,e,n){"use strict";n.r(e);n(98);var o=n(284),l=new(n(0).a);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d=function t(e,n,o){r(this,t),this.Year=e,this.Month=n,this.Date=o},c=function t(e,n){r(this,t),this.Year=e,this.Months=n},h=function t(e,n){r(this,t),this.Month=e,this.Days=n},f=function t(e,content){r(this,t),this.Day=e,this.Content=content};function v(){var t=[];return o.data.map((function(element){var e=parseInt(element.date.split("-")[0]),n=parseInt(element.date.split("-")[1]),o=parseInt(element.date.split("-")[2]),l=new f(o,element.content);if(0===t.length||e!==t[t.length-1].Year){var r=[];r.push(l);var d=[],v=new h(n,r);d.push(v);var m=new c(e,d);t.push(m)}else{var x=t[t.length-1].Months;if(n!==x[x.length-1].Month){var y=[];y.push(l);var k=new h(n,y);x.push(k)}else{x[x.length-1].Days.push(l)}}})),t}var m={name:"DateSelector",data:function(){return{logs:o.data,selected:""}},computed:{DateFilter:function(){var t=[];return this.logs.forEach((function(element){var e=element.date.split("-")[0],n=element.date.split("-")[1],o=e+"-"+n;0!==t.length&&o===t[t.length-1].Date||t.push(new d(e,n,o))}),this),t}},created:function(){var t=this.logs[0].date,e=parseInt(t.split("-")[0]),n=parseInt(t.split("-")[1]);this.selected=e+"-"+n,l.$emit("logchange",e,n)},methods:{setMAndY:function(){var t=parseInt(this.selected.split("-")[0]),e=parseInt(this.selected.split("-")[1]);l.$emit("logchange",t,e)}}},x=(n(345),n(5)),y=Object(x.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{attrs:{id:"date-selector"}},[n("p",[t._v("选择日期")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?n:n[0]},function(e){return t.setMAndY()}]}},t._l(t.DateFilter,(function(e){return n("option",{key:e.Date,domProps:{value:e.Date}},[t._v(t._s(e.Year)+"年 "+t._s(e.Month)+"月")])})),0)])])}),[],!1,null,"d5b75f7c",null).exports,k=n(94),w={name:"CatalogList",data:function(){return{logs:o.data,expandIndex:-1}},computed:{YMFilter:function(){var t=[];return this.logs.forEach((function(element){var e=parseInt(element.date.split("-")[0]),n=parseInt(element.date.split("-")[1]);if(0===t.length||e!==t[t.length-1].Year){var o=[];o.push(n),t.push(new c(e,o))}else{var l=t[t.length-1].Months;n!==l[l.length-1]&&l.push(n)}}),this),t}},methods:{expandPanel:function(t){this.$nextTick((function(){var e=document.querySelectorAll(".panel");if(this.expandIndex===t){this.expandIndex=-1;for(var i=0;i<e.length;i++)Object(k.i)(e[i].querySelector("ul"),0)}else{this.expandIndex=t;for(var n=0;n<e.length;n++)Object(k.i)(e[n].querySelector("ul"),0);Object(k.i)(e[t].querySelector("ul"),"auto")}}))},setMAndY:function(t,e){l.$emit("logchange",t,e)}},mounted:function(){document.querySelector(".area").click(),document.querySelector(".catalog-list-item").click()}},M=(n(347),Object(x.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalog-list",attrs:{id:"catalog-list"}},[n("affix",{staticStyle:{width:"175px"},attrs:{"relative-element-selector":"#updatelog-list",offset:{top:-30,bottom:0}}},[n("ul",{staticClass:"main-nav"},t._l(t.YMFilter,(function(e,o){return n("li",{key:e.Year,staticClass:"panel",class:{expanded:t.expandIndex===o,closed:t.expandIndex!==o}},[n("a",{staticClass:"area",on:{click:function(e){return t.expandPanel(o)}}},[t._v(t._s(e.Year)+"年")]),t._v(" "),n("ul",t._l(e.Months,(function(o){return n("li",{key:o},[n("a",{staticClass:"catalog-list-item",on:{click:function(n){return t.setMAndY(e.Year,o)}}},[t._v(t._s(e.Year)+"年"+t._s(o)+"月")])])})),0)])})),0)])],1)}),[],!1,null,"df5140e4",null).exports),_={name:"LogList",data:function(){return{activeIndex:-1,thisYear:0,thisMonth:0}},computed:{getCurrentYearList:function(){var t=this;return v().filter((function(e){return e.Year===t.thisYear}))},getCurrentMonthList:function(){var t=this,e=v().filter((function(e){return e.Year===t.thisYear}));return e&&e.length>0?e[0].Months.filter((function(e){return t.thisMonth===e.Month})):[]}},methods:{goAnchor:function(t){var e=document.getElementById(t);k.a.scrollTo(e)},setDItemActive:function(t){this.$nextTick((function(){this.activeIndex=t}))},handleScroll:function(){this.activeIndex=Object(k.c)(".notecard",30)}},created:function(){var t=this;l.$on("logchange",(function(e,n){t.thisYear=e,t.thisMonth=n,t.activeIndex=-1}))},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},C=(n(349),Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"day-list",attrs:{id:"day-list"}},[n("affix",{staticStyle:{width:"156px"},attrs:{"relative-element-selector":"#updatelog-list",offset:{top:-30,bottom:0}}},[n("ul",{staticClass:"sub-nav"},[n("transition",{attrs:{name:"fadelog"}},t._l(t.getCurrentYearList,(function(e){return n("div",{key:e.Year},[n("transition",{attrs:{name:"fadelog"}},t._l(t.getCurrentMonthList,(function(e){return n("div",{key:e.Month},t._l(e.Days,(function(o,l){return n("li",{key:o.Day,class:{active:t.activeIndex===l}},[n("a",{on:{click:function(e){t.goAnchor("anchor-"+l),t.setDItemActive(l)}}},[t._v(t._s(e.Month)+"月"+t._s(o.Day)+"日")])])})),0)})),0)],1)})),0)],1)])],1)}),[],!1,null,"8ea09ea4",null).exports),I={name:"UpdateList",data:function(){return{thisYear:0,thisMonth:0}},computed:{getCurrentYearList:function(){var t=this;return v().filter((function(e){return e.Year===t.thisYear}))},getCurrentMonthList:function(){var t=this,e=v().filter((function(e){return e.Year===t.thisYear}));return e&&e.length>0?e[0].Months.filter((function(e){return t.thisMonth===e.Month})):[]}},created:function(){var t=this;l.$on("logchange",(function(e,n){t.thisYear=e,t.thisMonth=n}))},updated:function(){this.$nextTick((function(){var header=document.querySelector("header");(document.documentElement.scrollTop||document.body.scrollTop)>header.offsetHeight-50&&window.scrollTo(0,header.offsetHeight-50)}))}},L=(n(351),{name:"LogItem",components:{DateSeletor:y,CatalogList:M,DayList:C,UpdateList:Object(x.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"updatelog-list container",attrs:{id:"updatelog-list"}},[n("transition",{attrs:{name:"fadelog"}},t._l(t.getCurrentYearList,(function(e){return n("div",{key:e.Year},[n("transition",{attrs:{name:"fadelog"}},t._l(t.getCurrentMonthList,(function(e){return n("div",{key:e.Month},t._l(e.Days,(function(o,l){return n("div",{key:o.Day,staticClass:"notecard",attrs:{id:"anchor-"+l}},[n("h2",[t._v(t._s(e.Month)+"月"+t._s(o.Day)+"日")]),t._v(" "),n("ol",t._l(o.Content,(function(e){return n("li",{key:e,class:{singleList:1==o.Content.length}},[t._v(t._s(e))])})),0)])})),0)})),0)],1)})),0)],1)}),[],!1,null,"d9433228",null).exports},data:function(){return{isCompact:!1}},methods:{displayCheck:function(){var t=0;document.documentElement&&document.documentElement.clientWidth&&(t=document.documentElement.clientWidth),this.isCompact=t<=1500}},beforeMount:function(){this.displayCheck(),window.addEventListener("resize",this.displayCheck)},beforeDestroy:function(){window.removeEventListener("resize",this.displayCheck)}}),S={meta:{index:5,style:"light",crumbs:[{route:"#",text:"更新记录"}]},head:function(){return{title:"更新记录 - Velas电波站"}},components:{LogItem:Object(x.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"log-item"}},[e("date-seletor",{directives:[{name:"show",rawName:"v-show",value:this.isCompact,expression:"isCompact"}]}),this._v(" "),e("client-only",[e("catalog-list",{directives:[{name:"show",rawName:"v-show",value:!this.isCompact,expression:"!isCompact"}]})],1),this._v(" "),e("update-list"),this._v(" "),e("client-only",[e("day-list",{directives:[{name:"show",rawName:"v-show",value:!this.isCompact,expression:"!isCompact"}]})],1)],1)}),[],!1,null,null,null).exports}},T=(n(353),Object(x.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"template-content"},[e("div",{staticClass:"top-space-holder"}),this._v(" "),this._m(0),this._v(" "),e("main",[e("log-item"),this._v(" "),e("div",{staticClass:"blank"})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"container"},[e("h1",{staticClass:"col-10 offset-1"},[this._v("更新日志")])])}],!1,null,"44f131e0",null));e.default=T.exports}}]);