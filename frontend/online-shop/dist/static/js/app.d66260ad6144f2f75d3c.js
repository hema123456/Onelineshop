webpackJsonp([1],{"34KM":function(t,e){},"4q7u":function(t,e){},"9tO+":function(t,e){},Edga:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};s.d(a,"queryGoods",function(){return p}),s.d(a,"queryCategorys",function(){return f});var n=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"globel_view_layer"}},[e("router-view")],1)},staticRenderFns:[]};var c=s("VU/8")({},i,!1,function(t){s("TPyF")},null,null).exports,o=s("/ocq"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"container clearf"},[t._m(0),t._v(" "),s("div",{staticClass:"col-8"},[s("div",{staticClass:"nav"},[s("ul",{staticClass:"menu"},t._l(t.nav_items,function(e){return s("li",{key:e.id,staticClass:"nav-item"},[s("a",{class:e.class,attrs:{href:e.link}},[t._v(t._s(e.content))])])}),0)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("div",{staticClass:"avatar"},[e("a",{attrs:{href:"#",title:"flexrope"}},[e("img",{attrs:{src:"/static/image/logo.png",alt:"flexrope"}})])])])}]};var l=s("VU/8")({data:function(){return{nav_items:[{id:1,class:"nav-item",title:"home",link:"/home",content:"home"},{id:2,class:"nav-item",title:"shop",link:"/shop",content:"shop"},{id:3,class:"nav-item",title:"about us",link:"/about",content:"about us"},{id:4,class:"nav-item",title:"contact",link:"/contact",content:"contact"},{id:5,class:"icon-phone",title:"phone",link:"/contact",content:""},{id:6,class:"icon-envelop",title:"mail",link:"/contact",content:""},{id:7,class:"icon-social_wechat",title:"wechat",link:"/contact",content:""},{id:8,class:"icon-cart cart-button",title:"cart",link:"#",content:""}]}}},r,!1,function(t){s("4q7u")},null,null).exports,u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"container clearf"},[s("div",{staticClass:"col-4"},[s("div",{staticClass:"footer-menu"},[s("h6",[t._v("footer menu")]),t._v(" "),s("ul",{staticClass:"menu"},t._l(t.foot_items,function(e){return s("li",{key:e.id,staticClass:"link-item"},[s("a",{attrs:{href:e.link}},[t._v(t._s(e.content))])])}),0)])]),t._v(" "),s("div",{staticClass:"col-4"},[s("div",{staticClass:"main-menu"},[s("h6",[t._v("main menu")]),t._v(" "),s("ul",{staticClass:"menu"},t._l(t.main_items,function(e){return s("li",{key:e.id,staticClass:"link-item"},[s("a",{class:e.class,attrs:{href:e.link}},[t._v(t._s(e.content))])])}),0)])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4"},[s("div",{staticClass:"footer-borad"},[s("div",{staticClass:"icon icon-envelop"}),t._v(" "),s("div",[t._v("felix felix.liu@flexrope.cn"),s("br"),t._v("aaron aaron.zhou@flexrope.cn")]),t._v(" "),s("div",{staticClass:"icon icon-phone"}),t._v(" "),s("div",[t._v("felix +8613265740369 "),s("br"),t._v("aaron +8615674867519 ")]),t._v(" "),s("div",{staticClass:"icon icon-social_wechat"}),t._v(" "),s("div",[t._v("felix 13265740369"),s("br"),t._v("aaron 15674867519")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",staticStyle:{"padding-bottom":"20px"}},[e("div",{staticClass:"credits"},[e("p",[this._v("© 2020 flexrope.Powered by Hippo\n      "),e("br"),this._v("\n      All rights reserved. flexrope is a registered trademark of FlexRope Industry And Trade Co.,Ltd.\n      ")])])])}]};var _=s("VU/8")({data:function(){return{foot_items:[{id:1,link:"#",content:"FAQ"},{id:2,link:"#",content:"Privacy Policy"},{id:3,link:"#",content:"Terms & Conditions"}],main_items:[{id:1,class:"nav_item",link:"/home",content:"Home"},{id:2,class:"nav_item",link:"/shop",content:"Shop"},{id:3,class:"nav_item",link:"/about",content:"About us"},{id:4,class:"nav_item",link:"/contact",content:"Contact"}]}}},u,!1,function(t){s("yqQ7")},null,null).exports,v=s("mtWM"),d=s.n(v),m="http://127.0.0.1:8000",p=function(t){return d.a.get(m+"/api/goods/",{params:t})},f=function(t){return d.a.get(m+"/api/categorys/",{params:t})},h={data:function(){return{hot_sellers:[]}},created:function(){this.getGoods();var t=localStorage.getItem("ip");this.$cookieStore.setCookie("flr_ck_ip",t,60)},methods:{getGoods:function(){var t=this;p({is_hot:!0}).then(function(e){console.log(e.data),t.hot_sellers=e.data.results}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-page"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"container clearf"},[s("h2",{staticClass:"title"},[t._v("Our Bestsellers")]),t._v(" "),t._l(t.hot_sellers,function(e){return s("div",{key:e.id,staticClass:"col-3 product"},[s("div",{staticClass:"product_item"},[t._m(2,!0),t._v(" "),s("div",{staticClass:"product_image"},[s("a",{attrs:{title:e.name}},[s("img",{attrs:{src:e.pic_url}})])]),t._v(" "),s("div",{staticClass:"product_info"},[s("div",{staticClass:"product_name"},[s("a",{attrs:{title:e.name}},[t._v(t._s(e.name))])]),t._v(" "),s("div",{staticClass:"product_price"},[s("span",{staticClass:"price b"},[t._v(t._s(e.min_unit_price)+" - "+t._s(e.max_unit_price)+" $")]),t._v("\n               ⁄ \n              "),s("span",{staticClass:"unit"},[t._v(t._s(e.unit))])]),t._v(" "),s("div",{staticClass:"product_moq"},[s("span",{staticClass:"moq b"},[t._v(t._s(e.min_order))]),t._v("\n               ⁄ \n              "),s("span",{staticClass:"unit b"},[t._v(t._s(e.unit))]),t._v(" "),s("span",{staticClass:"description"},[t._v("(Min. Order)")]),t._v(" \n              "),t._m(3,!0)])])])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slider"},[e("ul",[e("li",[e("a",[e("img",{attrs:{src:"https://sc01.alicdn.com/kf/H97b9a984168f4794a71e05dc80a3ce18Q.jpg"}})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"advantage",staticStyle:{"padding-top":"20px"}},[e("img",{attrs:{src:"/static/image/advantage.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon left_top"},[e("button",{staticClass:"icon-heart"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon right_bottom"},[e("button",{staticClass:"icon-plus"})])}]};var g=s("VU/8")(h,C,!1,function(t){s("Y6+7")},null,null).exports,b={data:function(){return{data_list:[],categories:[],goods:[]}},created:function(){this.getCategorys(),this.getGoods()},methods:{getCategorys:function(){var t=this;f().then(function(e){console.log(e.data),t.categories=e.data}).catch(function(t){console.log(t)})},getGoods:function(){var t=this;p().then(function(e){console.log(e.data),t.goods=e.data.results}).catch(function(t){console.log(t)})},thumbUp:function(){},addToCart:function(){}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-page"},[s("div",{staticClass:"container clearf"},[s("div",{staticClass:"navbar"}),t._v(" "),t._l(t.categories,function(e){return s("div",{key:e.id,staticClass:"container clearf category"},[s("h2",[t._v(t._s(e.name))]),t._v(" "),t._l(t.goods,function(a){return a.category.id===e.id?s("div",{key:a.id,staticClass:"col-3 product"},[s("div",{staticClass:"product_item"},[t._m(0,!0),t._v(" "),s("div",{staticClass:"product_image"},[s("a",{attrs:{title:a.name}},[s("img",{attrs:{src:a.pic_url}})])]),t._v(" "),s("div",{staticClass:"product_info"},[s("div",{staticClass:"product_name"},[s("a",{attrs:{title:a.name}},[t._v(t._s(a.name))])]),t._v(" "),s("div",{staticClass:"product_price"},[s("span",{staticClass:"price b"},[t._v(t._s(a.min_unit_price)+" - "+t._s(a.max_unit_price)+" $")]),t._v("\n                   ⁄ \n                  "),s("span",{staticClass:"unit"},[t._v(t._s(a.unit))])]),t._v(" "),s("div",{staticClass:"product_moq"},[s("span",{staticClass:"moq b"},[t._v(t._s(a.min_order))]),t._v("\n                   ⁄ \n                  "),s("span",{staticClass:"unit b"},[t._v(t._s(a.unit))]),t._v(" "),s("span",{staticClass:"description"},[t._v("(Min. Order)")]),t._v(" \n                  "),t._m(1,!0)])])])]):t._e()})],2)})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon left_top"},[e("button",{staticClass:"icon-heart"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon right_bottom"},[e("button",{staticClass:"icon-plus"})])}]};var x=s("VU/8")(b,k,!1,function(t){s("9tO+")},null,null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-page"},[e("div",{staticClass:"wrapper col-12"},[e("img",{attrs:{src:"/static/image/about.png"}})]),this._v(" "),e("div",{staticClass:"container clearf"})])}]};var E=s("VU/8")({},y,!1,function(t){s("PgEb")},null,null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-page"},[s("div",{staticClass:"container clearf"},[s("h1",{staticClass:"title"},[t._v("contact us")]),t._v(" "),s("p",{staticClass:"text"},[t._v("if you have any questions or suggestions , You can contact us through phone,mail,wechat or the message board below.")]),t._v(" "),s("div",{staticClass:"container contact_borad"},[s("div",{staticClass:"icon icon-envelop"}),t._v(" "),s("div",[t._v("felix felix.liu@flexrope.cn"),s("br"),t._v("aaron aaron.zhou@flexrope.cn")]),t._v(" "),s("div",{staticClass:"icon icon-phone"}),t._v(" "),s("div",[t._v("felix +8613265740369 "),s("br"),t._v("aaron +8615674867519 ")]),t._v(" "),s("div",{staticClass:"icon icon-social_wechat"}),t._v(" "),s("div",[t._v("felix 13265740369"),s("br"),t._v("aaron 15674867519")])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"mail_sender"},[s("h2",{staticClass:"title"},[t._v("Message board")]),t._v(" "),s("div",{staticClass:"col-4"},[s("label",[t._v("Name"),s("span",{staticClass:"red"},[t._v("*")])]),t._v(" "),s("input",{staticClass:"user_name",attrs:{type:"text",placeholder:"  your name",required:"required"}})]),t._v(" "),s("div",{staticClass:"col-8"},[s("label",[t._v("Email"),s("span",{staticClass:"red"},[t._v("*")])]),t._v(" "),s("input",{staticClass:"user_email",attrs:{type:"text",placeholder:" your email"}})]),t._v(" "),s("div",{staticClass:"col-12"},[s("label",[t._v("Content"),s("span",{staticClass:"red"},[t._v("*")])]),t._v(" "),s("textarea",{staticClass:"user_message",attrs:{placeholder:" say something..."}}),s("br"),t._v(" "),s("input",{staticClass:"email_sender_button",attrs:{type:"submit",value:"SEND"}})])])])])}]};var w=s("VU/8")({},$,!1,function(t){s("Edga")},null,null).exports,q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap_box"},[e("router-view",{attrs:{name:"header"}}),this._v(" "),e("router-view",{attrs:{name:"content"}}),this._v(" "),e("router-view",{attrs:{name:"footer"}})],1)},staticRenderFns:[]};var F=s("VU/8")(null,q,!1,function(t){s("ro2L")},null,null).exports;n.a.use(o.a);var O=new o.a({mode:"history",routes:[{path:"/",component:F,children:[{name:"home",path:"home",components:{header:l,content:g,footer:_}},{name:"shop",path:"shop",components:{header:l,content:x,footer:_}},{name:"about",path:"about",components:{header:l,content:E,footer:_}},{name:"contact",path:"contact",components:{header:l,content:w,footer:_}}]}]});O.beforeEach(function(t,e,s){"/"===t.path?s({path:"/home"}):s()});var S=O,P=s("NYxO");n.a.use(P.a);var R={userInfo:{},goodsList:{totalPrice:"",goods_list:[]}},U=new P.a.Store({state:R});s("34KM"),s("eOoE");function M(t,e,s){var a=new Date;a.setSeconds(a.getSeconds()+s),document.cookie=t+"="+escape(e)+"; expires="+a.toGMTString(),console.log(document.cookie)}n.a.prototype.$cookieStore={setCookie:M,getCookie:function(t){if(document.cookie.length>0){var e=document.cookie.indexOf(t+"=");if(-1!==e){e=e+t.length+1;var s=document.cookie.indexOf(";",e);return-1===s&&(s=document.cookie.length),unescape(document.cookie.substring(e,s))}}return""},delCookie:function(t){M(t,"",-1)}},n.a.prototype.$http=d.a,n.a.config.productionTip=!1,new n.a({el:"#app",store:U,router:S,components:{App:c},template:"<App/>"})},PgEb:function(t,e){},TPyF:function(t,e){},"Y6+7":function(t,e){},eOoE:function(t,e){},ro2L:function(t,e){},yqQ7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d66260ad6144f2f75d3c.js.map