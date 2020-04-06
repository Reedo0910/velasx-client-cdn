(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{203:function(e,t,n){var content=n(208);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("73e4f3da",content,!0,{sourceMap:!1})},205:function(e,t,n){"use strict";var o={name:"PageHeader",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},backgroundImage:{type:String,required:!0},backgroundColor:{type:String,default:"#f5f5f5"},backgroundPosition:{type:String,default:"center center"},maskOpacity:{type:String,default:"0.3"},darkMode:{type:Boolean,default:!1}},data:function(){return{isBgLoaded:!1}},mounted:function(){var e=this;this.$nextTick((function(){var t;(t=e).$Lazyload.$on("loaded",(function(e){e.src===t.backgroundImage&&(t.isBgLoaded=!0,t.$Lazyload.$off("loaded"))}))}))},computed:{getBackgroundColor:function(){return this.$store.state.isDarkMode?"#2c2c2c":this.backgroundColor}}},r=(n(207),n(5)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-container"},[n("transition",{attrs:{name:"fade-bg"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isBgLoaded,expression:"!isBgLoaded"}],staticClass:"header-mask mask-overlay",style:"background-color: "+e.getBackgroundColor})]),e._v(" "),n("div",{staticClass:"header-mask linear-mask dark"}),e._v(" "),n("div",{staticClass:"header-mask linear-mask"}),e._v(" "),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.backgroundImage,expression:"backgroundImage",arg:"background-image"}],staticClass:"header-bg"}),e._v(" "),n("div",{staticClass:"container"},[n("header",{staticClass:"container page-header shadow-text"},[n("div",{staticClass:"content-mask",style:"opacity: "+e.maskOpacity}),e._v(" "),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.backgroundImage,expression:"backgroundImage",arg:"background-image"}],staticClass:"my-bg bg-slot lazy-bg",style:"background-position: "+e.backgroundPosition}),e._v(" "),n("h1",[e._v(e._s(e.title))]),e._v(" "),n("p",[e._v(e._s(e.subtitle))])])])],1)}),[],!1,null,"4501f4a3",null);t.a=component.exports},207:function(e,t,n){"use strict";var o=n(203);n.n(o).a},208:function(e,t,n){(t=n(7)(!1)).push([e.i,"header.page-header[data-v-4501f4a3]{background-color:#888;height:240px;margin:0 auto;position:relative;z-index:3;border-radius:5px;overflow:hidden}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) header.page-header[data-v-4501f4a3]{background-color:#444}}header.page-header h1[data-v-4501f4a3],header.page-header p[data-v-4501f4a3]{text-align:center;position:relative;z-index:4}header.page-header p[data-v-4501f4a3]{color:#fff;letter-spacing:2px;line-height:25px}header.page-header h1[data-v-4501f4a3]{margin:0;padding:75px 0 0;color:#fff;font-size:2.5em;letter-spacing:1px}header.page-header .content-mask[data-v-4501f4a3]{width:100%;height:100%;background-color:#2e2e2e;position:absolute;top:0;left:0;z-index:4}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) header.page-header .content-mask[data-v-4501f4a3]{-webkit-filter:grayscale(30%) brightness(95%);filter:grayscale(30%) brightness(95%)}}.header-container[data-v-4501f4a3]{padding-top:90px;padding-bottom:130px;position:relative;overflow:hidden;mask-image:none;-webkit-mask-image:-webkit-radial-gradient(#fff,#000)}.header-bg[data-v-4501f4a3]{-webkit-filter:blur(20px);filter:blur(20px);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);top:-25px;background-size:cover;background-repeat:no-repeat;background-position:bottom;z-index:0}.header-bg[data-v-4501f4a3],.header-mask[data-v-4501f4a3]{width:100%;height:100%;position:absolute;left:0}.header-mask[data-v-4501f4a3]{top:0}.mask-overlay[data-v-4501f4a3]{background-color:#f5f5f5;z-index:3}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .mask-overlay[data-v-4501f4a3]{background-color:#2c2c2c!important}}.linear-mask[data-v-4501f4a3]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,hsla(0,0%,100%,.55)),to(#f5f5f5));background:-o-linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);background:linear-gradient(hsla(0,0%,100%,.55) 25%,#f5f5f5);z-index:2;opacity:1}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .linear-mask[data-v-4501f4a3]{opacity:0}}.linear-mask.dark[data-v-4501f4a3]{background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,rgba(0,0,0,.55)),to(#2c2c2c));background:-o-linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);background:linear-gradient(rgba(0,0,0,.55) 25%,#2c2c2c);z-index:1;opacity:0}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .linear-mask.dark[data-v-4501f4a3]{opacity:1}}",""]),e.exports=t},235:function(e,t,n){var content=n(287);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("1a3cf399",content,!0,{sourceMap:!1})},286:function(e,t,n){"use strict";var o=n(235);n.n(o).a},287:function(e,t,n){(t=n(7)(!1)).push([e.i,'[data-v-bd44a3a4] .no-link{color:#666;text-decoration:none}[data-v-bd44a3a4] .no-link:hover{color:#222}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-container[data-v-bd44a3a4] .no-link{color:#dfdfdf}body:not(.no-dark-theme) .post-container[data-v-bd44a3a4] .no-link:hover{color:#ccc}}[data-v-bd44a3a4] br{line-height:150%;display:block;content:"";margin-top:0;margin-bottom:.5em}[data-v-bd44a3a4] del{background-color:#ddd;color:rgba(0,0,0,0);text-decoration:none;-webkit-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease;cursor:default}[data-v-bd44a3a4] del:hover{color:#444;background-color:rgba(0,0,0,0);-webkit-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-container[data-v-bd44a3a4] del{color:rgba(0,0,0,0);background-color:#444;-webkit-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease}body:not(.no-dark-theme) .post-container[data-v-bd44a3a4] del:hover{color:#e0e0e0;background-color:rgba(0,0,0,0);-webkit-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease}}[data-v-bd44a3a4] code{padding:.2em .4em;margin:0;font-size:85%;background-color:rgba(27,31,35,.05);border-radius:3px}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-container[data-v-bd44a3a4] code{background-color:rgba(192,210,226,.05)}}[data-v-bd44a3a4] blockquote{border-left:5px solid #ccc;padding-left:1em}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-container[data-v-bd44a3a4] blockquote{border-left-color:#888}}main[data-v-bd44a3a4]{min-height:400px;padding:10px 0 80px}article[data-v-bd44a3a4]{margin:50px 0}.post-container[data-v-bd44a3a4]{border-radius:5px;background-color:#fff;padding:1px 30px 20px}.post-container h2[data-v-bd44a3a4],.post-container h3[data-v-bd44a3a4]{text-align:center}.post-container p[data-v-bd44a3a4]{line-height:1.75;text-indent:2em}.post-container ol li h4[data-v-bd44a3a4],.post-container ol li p[data-v-bd44a3a4],.post-container ul li h4[data-v-bd44a3a4],.post-container ul li p[data-v-bd44a3a4]{text-indent:0}@media (prefers-color-scheme:dark){body:not(.no-dark-theme) .post-container[data-v-bd44a3a4]{background-color:#272727;color:#fff}}.fav-list code[data-v-bd44a3a4]{margin-right:.5em}article.qa li[data-v-bd44a3a4]{padding-bottom:1em;list-style-type:decimal;margin-bottom:1.5em}article.qa li h4[data-v-bd44a3a4]{cursor:pointer}article.qa li h4[data-v-bd44a3a4]:hover{opacity:.7}article.qa li blockquote[data-v-bd44a3a4]{overflow:hidden;margin:0;height:0;line-height:1.75;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:.95}',""]),e.exports=t},378:function(e,t,n){"use strict";n.r(t);var o=n(205),r=n(90),d={meta:{index:5,style:"light",crumbs:[{route:"#",text:"关于本站"}]},head:function(){return{title:"关于本站 - Velas电波站"}},components:{PageHeader:o.a},data:function(){return{updateDate:"2020年4月6日",favList:[{title:"最喜欢的颜色",items:["黑","白","灰"]},{title:"最喜欢的零食",items:["紫菜"]},{title:"最喜欢做的事",items:["发呆","接触大自然","在能接触到大自然的地方发呆"]},{title:"最喜欢的书",items:["《挪威的森林》（林少华译本）"]},{title:"最喜欢的歌手/乐队",items:["Avril Lavigne","Paramore","chelly(EGOIST)","やくしまるえつこ（藥師丸悅子）"]},{title:"最喜欢的电影",items:["《入殓师》","《加勒比海盗》（1-3）","《指环王》（系列）","《哈利波特》（系列）"]},{title:"最喜欢的游戏",items:["《古墓丽影》（2013）","《To the Moon》","《集合啦！动物森友会》","《精灵宝可梦》（系列）","《寂静岭》（系列）"]},{title:"最喜欢的动画",items:["《命运石之门》（本篇和电影）","《吹响吧！上低音号》（系列）","《冰菓》","《钢之炼金术师FA》","《物语系列》（《伤物语》除外）","《声之形》（电影）"]}],faqList:[{q:"Velas电波站是博客吗？",a:"广义上来说的话……是的。但我更乐意把它定义为「生产可传播内容」的网站，而不只是一个用来分享自己身边事或兴趣爱好的个人博客。"},{q:"电波站支持RSS订阅吗？",a:"支持呀。电波站的RSS Feed地址是：<code>https://www.velasx.com/feed</code><br />或者可直接点击页面底部的「RSS订阅」按钮。使用RSS阅读器的小伙伴可以通过RSS订阅本站，第一时间阅读最新的文章。<del>一定更，一定更。不会咕，不会咕。</del>"},{q:"电波站是基于什么技术搭建的呢？",a:"电波站是基于Vue.js + Node.js + MongoDB + Nginx搭建的网站。借助Nuxt.js实现了服务端渲染。使用了UFOVPS（美国）的VPS，使用腾讯云COS作为对象存储，使用了jsDelivr的CDN<del>（其实是白嫖的）</del>"},{q:"电波站是自己设计的吗？",a:"是的。 <del>（叉腰）</del> 我也保留对电波站原创设计的所有权利。"},{q:"为什么不用Wordpress等建站工具呢？",a:"主要是因为最初的Velas是前端练手的产物。为了不大动干戈，于是电波站也用了和Velas一样的技术栈来写。如果可以从头再来的话，我更倾向使用Wordpress。因为现在基本相当于自己把Wordpress许多的插件功能又实现了一次……"},{q:"关于电波站文章的版权？",a:"Velas电波站对版权的态度是十分严肃的，因为Zeee坚信，只有尊重版权才能催生出优秀的作品。<br />Velas电波站中所有的文字均为Zeee原创。若未在文章中特别注明，则请按照“商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎”处理。对于站内和已转载的文章文字，本站长保留对它们的全部追究权利。<br />而对于站内和文章中非Zeee原创的图片和其他媒体（如音乐、影片等），电波站将严格依照规范来进行转载。如无特别声明，所有的图片都来自无版权图片网站（如Unsplash），视频来自Bilibili外链，音乐则来自网易云音乐外链。而对于部分在本站中出现的媒体资源，由于未能联系到其原作者，Zeee先行对它们进行有责引用。如果您是相关作品的作者，并认为本站损害了您的权利，请立刻告知Zeee进行维权。"},{q:"电波站会采集我的个人信息吗？",a:"由于小站不需要用户登录，为了确保每个点赞和分享（这里指Web Share API）操作都是来自真实用户，本站会存储每次点赞和分享（Web Share API）操作的IP地址和用户代理信息（UA）作为识别码。同时，为了统计留言的访客信息，并阻止恶意留言行为，除了用户自行填写的留言用的个人信息外，本站也会存储每条留言的IP地址和用户代理信息（UA）。IP地址和UA都是互联网上的公开信息，电波站绝不会私自采集用户的任何敏感信息。除此之外，小站也会尽最大努力保证每一条所存储的信息的安全。<br />用户的浏览信息都使用Cookie技术存储在用户自己的浏览器中。小站不会公开留言访客的邮箱地址。邮箱仅作为访客的唯一标识符、头像获取和留言提醒（需用户同意）用，其他用户无法通过任何途径获取到他人的邮箱地址。"},{q:"为什么电波站那么重视留言者邮箱地址的私密性？",a:"电波站通过邮箱地址和昵称进行留言者的身份验证。在同一账户二次留言时，唯有昵称和邮箱地址和上次一致才能留言。<br/>而由于留言者的昵称是公开的，因此其首次留言所使用的邮箱地址对保证其账户私密性十分重要。若保护不当，则有可能会被他人冒充身份进行留言。相信这对于电波站和每一个留言者来说都是不愿意看到的。<br/>如果您发现自己的账户被冒充身份了，请及时联系Zeee进行处理。"},{q:"电波站有备案吗？",a:"没有（嘘～）。因为电波站的服务器在海外，所以不需要、也不支持备案。虽然因此也带来了很多不便就是了。"},{q:"电波站也会像以前的Velas那样有版本更迭吗？",a:"我相信以我的<ruby>风 <rt>niào</rt></ruby> <ruby>格 <rt>xìng</rt></ruby>来说，会的。Velas电波站实际上是Velas 2019（Velas 6.0?）。只要我在前端圈呆一天，Velas的版本迭代就不会停止。（而且我觉得它也是在向好的方向发展……吧？）不过在引入了网站后台之后，Velas的更新也会更加谨慎。而且我希望Velas以后展示的更偏向文章（和设计）而不是前端技术，毕竟技术上的东西其实在网站成熟之后，很多其实我不说也很难察觉。"},{q:"留言板终于支持输入个人网站了？",a:"是的，现在留言区可以输入个人网站啦 <del>虽然我为此把整个留言功能前端推翻重写了一遍</del>。而且点击留了网站地址的朋友名字，就可以看到他们漂亮的个人站点了（耶～）。<br />不过要注意：<strong>输入的个人网站必须是个人博客或是非营利网站</strong>，否则我会酌情移除不合规定的网址。此外，也不允许恶意使用这个功能。<br />请大家在享受这个功能的同时，一定要好好遵守规定哦。"},{q:"留言的邮件提醒安全吗？",a:"电波站在19年7月10日的更新加入了留言提醒功能。对勾选了“有回复时通知我”的用户，当他们发送的评论有新回复时，电波站会及时通过邮件来提醒他们。<br />为了防止有小朋友利用这个功能发送垃圾邮件，Zeee会对（除我自己以外的）任何回复进行人肉审核，只有审核通过的回复才会发送邮件提醒。而且不想再收到提醒的小伙伴，你们随时可以通过邮件内提供的“取消订阅”按钮来取消订阅邮件。取消订阅链接上的邮箱地址使用了AES对称加密技术。即使别人拿到了这封邮件，他们还是无法获取到你的邮箱地址。<br />因此各位小伙伴可以放心勾选该功能，电波站不会利用邮件订阅功能来发送除留言通知以外的信息。"},{q:"如何修改我留言用的个人信息？",a:'<strong>修改昵称：</strong>直接到<a class="no-link" href="https://www.velasx.com/comment" target="_blank">留言板</a>留言即可，我会在看到留言后抽空修改。修改完成后，我将删除该留言。<br/><strong>修改邮箱：</strong>使用<strong>你的旧邮箱</strong>发邮件到<code>ericrlee[at]velas.xyz</code>（把[at]改成@），在邮件中注明你的<strong>昵称</strong>和<strong>新邮箱地址</strong>。我会在核对信息后修改。修改完成后，我将回复邮件告知你。<br/><strong>修改个人站点地址（只适用于不小心写错了）：</strong>方法同 修改昵称。但是注意，由于个人站点地址和当条留言信息绑定，因此我只能帮你修改你最近一条留言中留的个人站点地址。<strong>不受理以站点迁移为由的修改</strong>，见谅。'},{q:"如何设置我留言的头像？",a:'请参考<a class="no-link" href="https://www.velasx.com/am/5355" target="_blank">《关于留言板的头像设置》</a>。'}]}},methods:{printEgg:function(){console.info("\n++++++++++++++;++++;'';',,++':,,,,,,,,,,,,,,,,,,,,,,,,,,,,'+';;';',\n+++++++++++''',;'';,:;:.` ;;; ` `:,````````````````` ;:` `;;;:,,,:`\n++++++++++':':,:'':,:,;`  ;;;,.` `````   `  ` ````````` `,.;.;,,,,.\n++++++++++',;,,,';,,:,; ` ;;:``````` ```    `  `````````   ;`;,,,,:\n++++++++++',:,,,;;,,,,'`, ;;``` ``````` ``` ` ` `   ```````;`':,,,;\n++++++++++',,,,,;:,,,:; ` ;; ````````````````` ``    ````` ,.:;:,,:\n++++++++++',,,,,:,,::;.   ;;``````````` `     ``` ```````` `.`;,:,:\n++++#++++;,,,,,:,;,,;``` ;;``````````` `  ``   ``````````  . ;,:,:\n++#+++++++;,,,,,,,,,:; ```;,`````` ``` `   `    ` ```  ```  ``;:;,,\n#+++++++++;,,,,,,,:,:'`  `;`  ````.`````` ``` ``````.` `` ` ``.;;;,\n++++++++++:::,,,,,;,;;`  `:.`  `,:::``   `` ````` ``;';;'''` , ;';,\n++++++++++:;;,:,,,;,;,`   , ;'''''';; ` `    ``` ```,::::;'';, ''',\n++++++++++;'',;,,:';'. `  ;'''''+;,. ````  ```      ..`;:.`,;;`;'':\n++++++++++++',':,;'''````''''. .,`  `` `` `  `      ..'''''`, :.'''\n+++++++++++++,':,'''' `,;'..#''+;,    ``  `  ``` `   .''''':````'''\n+++++++++#+++'';,'''' ;''..+'++''+    ``` ` ``` `    ''''''' `` '''\n+++++++++#+++++':'+'+''.  ;''++''''    `     ` `     '''''''    '''\n+++++++++#++++++;++'''`.` '''+++'''`    `` ` ```     '''''''   ,'''\n+++++++++#+++++++++';`    ''+++++'''      ``         '''+'''   ''''\n+++++++++#+++++++++';     ''+++++'''      `` `       '''+'''   ''''\n+++++++++#+++++++++':     '''++++'''   `   ```       '''''''  `''''\n+++++++++++++++++++',     '''++++'''`     ```` ` `   '''''''  ,''''\n+++''++++++++++++++'.`    ''''+++'''`  ` `````       ;;;;;'' `'''+'\n+';  ,'++++++++++++'.     ,'''''''';  ``` `  `       `;;;;;  `+''+'\n':`  ``''++++++++++'`      '''';;;';  `    `     ``   .;;:` , ''+++\n' `  `` '++++++++++'`      `;';;;;;'            `    ``  .:`  ''+++\n'` ` ,   '+++++++++'```     `;;;;;;. `  `        ` ``     ``  ''+++\n, ` ``` ``'++++++++'``        ;;;,`  ` `  ` `` `````````` `   ''+++\n`````` `  '++++++++'  `         `:.`  ``` ` `` `  ``````````` ''+++\n``` ``  . '++++++++'  ```  `,```   `` `` ```` `` `   ``````   ''+++\n``````.``,'+++++++'' ````        ` `    `   `  ` ` ` `````````''+++\n```. .`` `''+++++++' ` `` ```   ``    ``    `  ````   ````````:'+++\n```` ``` `''+++++++' `````` ``````    ``     ````  `` `````````''++\n` ```` ``,;'+++++++' ``````  ``   ` `  ` ```` ```  ```` `````` ''++\n:`````,```,'+++++++' ````` ` ```` ```  `   `  ```  `` ```````` +'++\n+```. `````'+++++++' ````` `` ``    ` `   ``     ``````````````+'++\n'` ` ` ``` '+++++++' ````   ````    `` ``   `  ` `` `````````` ''++\n+'`  ` ````'+++++++'```` ``  `` `   ````       ``   `  `````` `'+++\n+''`` `. ``'+++++++'`````` ```   ``   ``` `` `   ``` `````````,'+++\n'++'.` ` ,`++++++++'``````````   ``` ``     `````````  ```````+'+++\n''+'',`` ` '+++++++'````````````` `   ``` `` `` ````` ````````''+++\n'''++';````.+++++++'.`````````   `   `  ``  ````````` ```````'''+++\n'''+++++  ``'++++++',```````````` ``      ````,:::,`` ```````.:'+++\n'''+++++'.  +++++++':````` `  ``` ```  ``  ``...., `````````'`,'+++\n'''+##+++++'+++++++';`````` ` `  ``` `` ``` ``  `  ```````````.'+++\n'''######+++++++++++'```````````` `````     ``  `` ````````;..`'+++\n'''##########++++++++```` `  ``` ```````` ```` ```````````,....'+++\n'''############+++++' `````````````` ``````` ``` ``````` `.`...++++\n'''#############++++'  ````````````` ````````````````````;````.++++\n'''#############++++'``````````````````` ``````` ```````:``````++++\n'''##############++++;, ```````````````````  ```````` ``````..`+++'\n'''##############+++++,,. ` ``` ``````````````` `````` .```....++++\n'''###############++++,,,,:,` ``````````````````````` :````....++++\n'''###############++++,,,,,,:'',` ```````````````````;`........+++;\n'''###############++++:,,,,,,,''''+;.` `````````````;..........+++,\n'''###########@'+++++++,,,,,,,,:++++'''+;,`  ``` ``:`..........'+'.\n''''+##########,+++++++,,,,,,,,,,;+++++':...:;:.``:............'+'.\n''';:+++++++++#,+++++++:,,,,,,,,,,,+++++.,.....................'++.\n+++;..+++++++++,:++++++',,,,,,,,,,,,:++',,....................,++'.\n''';.....,:,..+,,+:+++++,,,,,,,,,,,,,,::,,....................,++,.\n''';.....``..,;,,:'+++++:,,,,,,,,,,,,,,,,,....................:+'..\n+'''.....``,  :,,,+:+++++,,,,,,,,,,,,,,,,,,...,..........,,,,,;++..\n++'+.....`,   ,,,,:,+++++,,,,,,,,,,,,,,,,,,......`........,,..++:..\n;;'+......  ``,,,,,',++++;,,,,,,,,,,,,,,,,,.....``............+'...\n\n\nお可愛いこと。\n")},expandPanel:function(e,t){var n=this.$refs.items[t].getElementsByTagName("blockquote")[0];n&&(e.isExpand?this.closePanel(e,n):this.openPanel(e,n))},openPanel:function(e,t){Object(r.i)(t,"auto"),this.$set(e,"isExpand",!0)},closePanel:function(e,t){Object(r.i)(t,0),this.$set(e,"isExpand",!1)}},mounted:function(){this.printEgg()}},l=(n(286),n(5)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"template-content"},[n("page-header",{attrs:{title:"关于本站",subtitle:"就是……电波站和站长的介绍","background-image":"https://velas-1252562537.cos.ap-hongkong.myqcloud.com/images/fancycrave-1.jpg","background-position":"center center","mask-opacity":"0.55"}}),e._v(" "),n("main",{staticClass:"interlaced-main"},[n("div",{staticClass:"container"},[n("div",{staticClass:"post-container"},[e._m(0),e._v(" "),n("hr"),e._v(" "),n("article",[n("h2",[e._v("关于我")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("目前在美国读人机交互研究生。")]),e._v(" "),e._m(3),e._v(" "),n("ul",{staticClass:"fav-list"},e._l(e.favList,(function(t){return n("li",{key:t.title},[n("p",[n("span",[e._v(e._s(t.title)+"：")]),e._v(" "),e._l(t.items,(function(t){return n("code",{key:t},[e._v(e._s(t))])}))],2)])})),0),e._v(" "),n("p",{staticClass:"small"},[e._v("*: 每个集合中仅列出了个人认为最具代表性的事物，并非个人喜好的全貌，仅作参考。")])]),e._v(" "),n("hr"),e._v(" "),n("article",{staticClass:"qa"},[n("h2",[e._v("常见问题 Q&A")]),e._v(" "),n("ol",e._l(e.faqList,(function(t,o){return n("li",{key:t.q,ref:"items",refInFor:!0,class:t.isExpand?"expanded":"collapsed"},[n("h4",{on:{click:function(n){return e.expandPanel(t,o)}}},[n("span",{domProps:{innerHTML:e._s(t.q)}}),e._v(" "),n("i",{staticClass:"iconfont",class:t.isExpand?"icon-minus":"icon-plus"})]),e._v(" "),n("blockquote",{domProps:{innerHTML:e._s(t.a)}})])})),0)]),e._v(" "),e._m(4),e._v(" "),n("p",[n("em",[e._v("本页更新于"+e._s(e.updateDate))])])])])])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h2",[e._v("关于本站")]),e._v(" "),n("p",[e._v("\n            前身是\n            "),n("strong",[e._v("Velas")]),e._v("（16/5/3-19/1/9），某个为了练习前端技术和网页设计而建的小站。后因该网站没什么实际意义，不利于吸引流量和可持续发展，因此目标转向内容的生产与传播，并改名\n            "),n("strong",[e._v("Velas电波站")]),e._v("。\n          ")]),e._v(" "),n("p",[e._v("\n            「电波站」一词受\n            "),n("strong",[e._v("やくしまるえつこ")]),e._v("さん的启发，可看作我写的每一篇文章的是向外发送的\n            "),n("ruby",[e._v("\n              电波\n              "),n("rt",[e._v("?")])]),e._v("。本质上它与「Velas」一样也\n            "),n("ruby",[e._v("\n              并没有什么特别的含义\n              "),n("rt",[e._v("El Psy Congroo")])]),e._v("，可视为自我意识过剩的产物。\n          ")]),e._v(" "),n("p",[e._v("本站不以盈利为目的。所生产的内容均为个人原因与兴趣。现专注于生产自己喜欢的内容、发表自己喜爱的影视游戏等媒介的评论，希望「让以后的自己觉得没有白看了某部片子/白玩了某个游戏」。")]),e._v(" "),n("p",[e._v("\n            想获得本站的最佳体验，请在\n            "),n("strong",[n("a",{staticClass:"no-link",attrs:{href:"https://www.mozilla.org/zh-CN/firefox/windows/",target:"_blank",rel:"noopener noreferrer nofollow"}},[e._v("Firefox (Windows版)")])]),e._v("、\n            "),n("strong",[n("a",{staticClass:"no-link",attrs:{href:"https://www.microsoft.com/edge",target:"_blank",rel:"noopener noreferrer nofollow"}},[e._v("Edge (Chromium版)")])]),e._v(" 或\n            "),n("strong",[n("a",{staticClass:"no-link",attrs:{href:"https://www.google.com/intl/zh-CN/chrome/",target:"_blank",rel:"noopener noreferrer nofollow"}},[e._v("Chrome")])]),e._v(" 上浏览。又或是将你的浏览器升级至最新版本。\n          ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Zeee")]),this._v("是自己名字的谐音，喜欢是因为写起来很像画\n            猪尾巴。\n          ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            九零后处女座一枚。程序员，设计师\n            "),t("del",[this._v("，业余作家")]),this._v("。认为编程、设计\n            "),t("del",[this._v("和写作")]),this._v("在本质上是共通的，都是在寻找事物间的联系。\n          ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("\n            最喜欢的……\n            "),t("sup",[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticStyle:{"font-size":"80%"}},[t("em",[this._v("另，这个页面有个小彩蛋噢，不知聪明的你能找到吗 :P")])])}],!1,null,"bd44a3a4",null);t.default=component.exports}}]);