(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],p=0,g=[];p<o.length;p++)i=o[p],s[i]&&g.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(g.length)g.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/DDD/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"0a51":function(t,e,n){t.exports=n.p+"img/Triple_aim.c4b4d258.svg"},"1ced":function(t,e,n){},2316:function(t,e,n){t.exports=n.p+"img/ROS_wijkscan.6bf11690.svg"},2758:function(t,e,n){t.exports=n.p+"img/Simone Bremer.5f7f89ff.jpg"},"2d1e":function(t,e,n){var a={"./Simone Bremer - kopie.jpg":"91f2","./Simone Bremer.jpg":"2758","./Simone_Bremer.jpg":"d3ef","./banner.jpg":"d156","./deze.jpg":"9b96","./header.jpg":"7631","./sven.jpg":"cb4c"};function s(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="2d1e"},"33d0":function(t,e,n){t.exports=n.p+"img/Handboek.11ea3d29.svg"},4113:function(t,e,n){t.exports=n.p+"img/Andere_bronnen.83c0c0e7.svg"},4868:function(t,e,n){t.exports=n.p+"img/ZOJP.57c1d4f7.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"},on:{click:function(e){return t.calculate_v(e)}}},[a("div",{staticClass:"container mx-auto"},[a("BannerComponent",{attrs:{background_image_url:"header",text_1:"Informatiemanagement",text_1_classes:"text-grey-darker",text_2:"bij multidisciplinaire",text_2_classes:"text-grey-dark",text_3:"zorgprojecten",text_3_classes:"text-grey-dark"}}),a("SpacerComponent",{attrs:{height:t.basic_spacer_height+"px",classes:t.basic_spacer_classes,background_image_url:""}}),a("HeaderComponent",{attrs:{header:"Introductie",header_classes:"",paragraph:"Het CBB ondersteunt bij het informatiemanagement van de ROS-organisaties. Op deze manier kunnen ROS’en voor informatiemanagement binnen zorgprojecten gebruik maken van gezamenlijk ontwikkelde kennis en tools. In het blok hieronder staat een overzicht van tools die ontwikkeld zijn om ROS-adviseurs te helpen met informatiemanagement.",paragraph_classes:"",button_paragraph:"Bent u benieuwd wat ROS-organisaties doen?",button_text:"Naar het ROS-netwerk",button_link:"https://www.google.com",button_paragraph2:"Wilt u weten hoe ROS-adviseurs met informatiemanagement omgaan?",button_text2:"Over de ROS-adviseur",button_link2:"https://www.google.com",button_classes:"bg-white hover:bg-grey-lightest py-2 px-2 mt-6 mr-2"}}),a("SpacerComponent",{attrs:{height:t.basic_spacer_height+"px",classes:t.basic_spacer_classes}}),a("h1",{staticClass:"text-dia text-right mx-12 -mb-5 text-5xl"},[t._v("Toolbox")])],1),a("div",{staticClass:"container-xl mx-lg"},[a("BlueThingComponent",{attrs:{rows:t.rows,title:"Toolbox",intro_text:"Onderstaande tools worden door ROS-adviseurs gebruikt om informatie te verzamelen<br>tijdens de verkenning en onderzoeksopzet van projecten"}})],1),a("div",{staticClass:"container mx-auto"},[a("SpacerComponent",{attrs:{height:t.basic_spacer_height+"px",classes:t.basic_spacer_classes}}),a("FooterComponent"),a("SpacerComponent",{attrs:{height:"200px",classes:t.basic_spacer_classes}}),a("SpacerComponent",{attrs:{height:t.basic_spacer_height+"px",classes:t.basic_spacer_classes}}),t.v.hidden?a("div",[a("h2",{staticClass:"text-center my-8"},[t._v("Made by Wouter & Titia\n      ")]),a("SpacerComponent",{attrs:{height:"900px",classes:t.basic_spacer_classes,background_image_url:n("9b96")}})],1):t._e(),a("SpacerComponent",{attrs:{height:t.basic_spacer_height+"px",classes:t.basic_spacer_classes}})],1)])},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"flex-1"},[t._m(0),a("div",{staticClass:"flex",staticStyle:{height:"200px","background-repeat":"no-repeat"},style:{"background-image":"url("+n("2d1e")("./"+t.background_image_url+".jpg")+")"}},[a("div",{staticClass:"flex-1 text-grey-darker px-8 py-8 m-2"},[a("div",{staticClass:"float-right"},[a("h1",{staticClass:"text-right",class:t.text_1_classes},[t._v(t._s(t.text_1))]),a("h2",{staticClass:"text-right",class:t.text_2_classes},[t._v(t._s(t.text_2))]),a("h2",{staticClass:"text-right",class:t.text_3_classes},[t._v(t._s(t.text_3))])])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-1 text-grey-darker pb-12 pt-8"},[a("img",{staticClass:"float-left",staticStyle:{height:"45px",width:"100px"},attrs:{alt:"Vue logo",src:n("dbb6")}}),a("br"),a("br")])}],c={name:"BannerComponent",props:{background_image_url:String,text_1:String,text_1_classes:String,text_2:String,text_2_classes:String,text_3:String,text_3_classes:String}},l=c,d=n("2877"),p=Object(d["a"])(l,i,o,!1,null,"586d905b",null),g=p.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Header"},[n("h1",{staticClass:"my-5",class:t.header_classes},[t._v(t._s(t.header))]),n("p",{class:t.paragraph_classes},[t._v(t._s(t.paragraph))]),n("p",{staticClass:"mt-8",class:t.paragraph_classes},[t._v(t._s(t.button_paragraph))]),n("a",{attrs:{href:t.button_link}},[n("button",{staticClass:"border border-grey-light",class:t.button_classes},[t._v("\n    "+t._s(t.button_text)+"\n  ")])]),n("p",{staticClass:"mt-8",class:t.paragraph_classes},[t._v(t._s(t.button_paragraph2))]),n("a",{attrs:{href:t.button_link2}},[n("button",{staticClass:"border border-grey-light",class:t.button_classes},[t._v("\n    "+t._s(t.button_text2)+"\n  ")])])])},m=[],b={name:"Header",props:{header:String,header_classes:String,paragraph:String,paragraph_classes:String,button_paragraph:String,button_text:String,button_link:String,button_paragraph2:String,button_text2:String,button_link2:String,button_classes:String},mounted:function(){}},_=b,h=Object(d["a"])(_,u,m,!1,null,"bffb599a",null),f=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello bg-dia"},[a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"bg-dia mt-12",staticStyle:{"margin-top":"-11px"}},[a("p",{staticClass:"text-white text-right mx-12 pt-12",domProps:{innerHTML:t._s(t.intro_text)}}),t._l(t.rows,function(e){return[a("div",{key:e.id,staticClass:"my-12"},[a("p",{staticClass:"text-2xl text-center text-wrap text-white p-3 my-2"},[t._v(t._s(e.title))]),a("div",{staticClass:"block bg-dia justify-center sm:block md:block sm:justify-center md:flex lg:flex "},[t._l(e.items,function(e){return[a("div",{key:e.id,staticClass:"mb-12 lg:w-1/4 hover:shadow-3 leftborder sm:block md:w-1/4 flex-item text-grey-darker text-center m-2 mx-8"},[a("a",{staticClass:"bg-grey",attrs:{href:e.url}},[a("div",{staticClass:"leftborder"},[a("div",{staticClass:"-mt-5"},[a("img",{staticClass:"w-2/3 sm:w-2/3  md:w-full",staticStyle:{height:"160px"},attrs:{alt:e.text,src:n("bb6e")("./"+e.image_url)}})]),a("div",[a("p",{staticClass:"px-5 m-3 text-2xl text-white"},[t._v(t._s(e.text))])]),e.long_text?a("div",[a("p",{staticClass:"px-1 text-left text-sm m-3 text-white"},[t._v(t._s(e.long_text))])]):t._e()])])])]})],2)])]}),a("div",{staticClass:"p-8"},[t._v(".")])],2)])])},x=[],k={name:"BlueThingComponent",props:{intro_text:String,title:String,rows:Array},data:function(){return{}},mounted:function(){}},C=k,S=(n("976c"),Object(d["a"])(C,v,x,!1,null,"ab0ffb80",null)),w=S.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",{staticClass:"my-5"},[t._v(t._s(t.header))]),n("ContactPersonComponent")],1)},y=[],O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer mt-24"},[a("h1",{staticClass:"text-center text-grey-dark m-4 mb-6"},[t._v("Contact")]),a("div",{staticClass:"block sm:block md:block sm:justify-center"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"w-1/6"}),a("div",{staticClass:"w-1/3"},[a("img",{staticClass:"mr-auto ml-auto block center w-40 h-40 rounded-full mr-4 ",attrs:{src:n("cb4c"),alt:"Avatar of Jonathan Reinink"}}),a("br"),a("div",{staticClass:"text-sm block"},[a("p",{staticClass:"m-1 mb-2 text-center text-lg block text-black leading-none transition-slow transition-property-shadow transition"},[t._v("Sven Maltha")]),a("p",{staticClass:"m-1 text-center text-sm block text-grey-dark"},[t._v("Interim directeur")]),a("p",{staticClass:"m-1 text-center text-sm block text-grey-dark"},[t._v("Maltha@dialogic.nl")])])]),a("div",{staticClass:"w-1/3"},[a("img",{staticClass:"mr-auto ml-auto block center w-40 h-40 rounded-full mr-4 ",attrs:{src:n("2758"),alt:"Avatar of Jonathan Reinink"}}),a("br"),a("div",{staticClass:"text-sm block"},[a("p",{staticClass:"m-1 mb-2 text-center text-lg block text-black leading-none transition-slow transition-property-shadow transition"},[t._v("Simone Bremer-Dijkhuis")]),a("p",{staticClass:"m-1 text-center text-sm block text-grey-dark"},[t._v("Landelijk projectleider")]),a("p",{staticClass:"m-1 text-center text-sm block text-grey-dark"},[t._v("S.Bremer-Dijkhuis@zonh.nl")])])])])])])}],z={name:"ContactPersonComponent",props:{header:String,paragraph:String,buttonText:String,buttonLink:String,msg:String,map:Object},mounted:function(){}},T=z,R=(n("a098"),Object(d["a"])(T,O,B,!1,null,"6130df16",null)),E=R.exports,M={name:"FooterComponent",props:{header:String,paragraph:String,buttonText:String,buttonLink:String,msg:String,map:Object},components:{ContactPersonComponent:E},mounted:function(){}},P=M,I=(n("9495"),Object(d["a"])(P,j,y,!1,null,"665fd9fb",null)),H=I.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spacer",class:t.classes,style:{height:t.height}},[n("div",{staticClass:"flex-1"},[t.background_image_url?n("div",{staticClass:"flex-1"},[n("img",{staticClass:"w-full float-left",style:"height: "+t.height,attrs:{src:t.background_image_url}}),n("br"),n("br")]):t._e()])])},D=[],J={name:"SpacerComponent",props:{background_image_url:String,classes:String,height:String},mounted:function(){},methods:{}},A=J,L=Object(d["a"])(A,$,D,!1,null,"cc94e628",null),N=L.exports,F={name:"app",components:{BannerComponent:g,HeaderComponent:f,BlueThingComponent:w,FooterComponent:H,SpacerComponent:N},data:function(){return{basic_spacer_height:75,basic_spacer_classes:"",rows:[{id:1,title:"Verkenning",items:[{id:1,text:"Ros wijkscan",url:"https://www.roswijkscan.nl/",image_url:"ROS_wijkscan.svg",long_text:"Informatie op maat over onder andere bevolkingssamenstelling, huishoudens, economische status, zorgvraag en zorgaanbod."},{id:2,text:"Triple-aim dashboard",url:"https://diadashboard.nl/cbb-triple-aim/",image_url:"Triple_aim.svg",long_text:"Een overzicht van relevante informatie uit publiek beschikbare bronnen."}]},{id:2,title:"Onderzoeksopzet",items:[{id:1,text:"IM-dashboard",long_text:"Bron over informatiemanagement binnen ROS-projecten. Inspiratiedatabank voor indicatoren en ervaring in meten.",url:"https://diadashboard.nl/cbb_informatiemanagement",image_url:"IM-dashboard.svg"},{id:2,text:"IM-handboek",long_text:"Handboek informatiemanagement. Een overzicht van de verzamelde inzichten in informatiemanagement voor de ROS.",url:"https://diadashboard.nl/cbb-triple-aim/relevante-documenten",image_url:"Handboek.svg"}]},{id:3,title:"Andere bronnen",items:[{id:2,text:"Bronnenlijst",long_text:"Lijst van bronnen die kunnen ondersteunen bij informatiemanagement in projecten.",url:"https://www.roswijkscan.nl/vaam/index.html",image_url:"Andere_bronnen.svg"},{id:1,text:"ZOJP",long_text:"Projectendatabank met verschillende ROS projecten.",url:"https://www.roswijkscan.nl/vaam/index.html",image_url:"ZOJP.svg"}]}],v:{a:0,hidden:!1},c:"ctrlKey",g:"target.className",l:""}},methods:{calculate_v:function(t){this.l=t[this.g],t&&(1==t[this.c]&&1==this.v.first?(this.v.a++,5==this.v.a?this.v.hidden=!0:this.v.hidden=!1):(this.v.hidden=!1,this.v.a--,"hello bg-dia"==t.target.className?this.v.first=!0:this.v.first=!1))}}},U=F,Z=(n("034f"),Object(d["a"])(U,s,r,!1,null,null,null)),V=Z.exports,W=(n("def6"),n("3730")),K=n.n(W);a["a"].use(K.a),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(V)}}).$mount("#app")},"64a9":function(t,e,n){},7631:function(t,e,n){t.exports=n.p+"img/header.e75fc16b.jpg"},"8d6b":function(t,e,n){t.exports=n.p+"img/IM-dashboard.d06ab75c.svg"},"8fc4":function(t,e,n){},"91f2":function(t,e,n){t.exports=n.p+"img/Simone Bremer - kopie.8d497825.jpg"},9495:function(t,e,n){"use strict";var a=n("b4d4"),s=n.n(a);s.a},"976c":function(t,e,n){"use strict";var a=n("1ced"),s=n.n(a);s.a},"9b96":function(t,e,n){t.exports=n.p+"img/deze.c255adb9.jpg"},a098:function(t,e,n){"use strict";var a=n("8fc4"),s=n.n(a);s.a},b4d4:function(t,e,n){},bb6e:function(t,e,n){var a={"./Andere_bronnen.svg":"4113","./Handboek.svg":"33d0","./IM-dashboard.svg":"8d6b","./ROS_wijkscan.svg":"2316","./Simone Bremer - kopie.jpg":"91f2","./Simone Bremer.jpg":"2758","./Simone_Bremer.jpg":"d3ef","./Triple_aim.svg":"0a51","./ZOJP.svg":"4868","./banner.jpg":"d156","./cbb_logo.png":"dbb6","./deze.jpg":"9b96","./header.jpg":"7631","./sven.jpg":"cb4c"};function s(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="bb6e"},cb4c:function(t,e,n){t.exports=n.p+"img/sven.d0c7d17e.jpg"},d156:function(t,e,n){t.exports=n.p+"img/banner.89d58d23.jpg"},d3ef:function(t,e,n){t.exports=n.p+"img/Simone_Bremer.1844c82d.jpg"},dbb6:function(t,e,n){t.exports=n.p+"img/cbb_logo.7c078ac7.png"},def6:function(t,e,n){}});
//# sourceMappingURL=app.f3c2da92.js.map