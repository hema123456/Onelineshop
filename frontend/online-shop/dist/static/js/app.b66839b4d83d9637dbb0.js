webpackJsonp([1],{"/wJX":function(t,s){},"1aRQ":function(t,s){},"34KM":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={};e.d(a,"queryGoods",function(){return f}),e.d(a,"queryCategorys",function(){return p});var n=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"globel_view_layer"}},[s("router-view")],1)},staticRenderFns:[]};var c=e("VU/8")({},i,!1,function(t){e("TPyF")},null,null).exports,r=e("/ocq"),o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"container clearf"},[t._m(0),t._v(" "),e("div",{staticClass:"col-8"},[e("div",{staticClass:"nav"},[e("ul",{staticClass:"menu"},t._l(t.nav_items,function(s){return e("li",{key:s.id,staticClass:"nav-item"},[e("a",{class:s.class,attrs:{href:s.link}},[t._v(t._s(s.content))])])}),0)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-4"},[s("div",{staticClass:"avatar"},[s("a",{attrs:{href:"#",title:"flexrope"}},[s("img",{attrs:{src:"/static/image/logo.png",alt:"flexrope"}})])])])}]};var l=e("VU/8")({data:function(){return{nav_items:[{id:1,class:"nav-item",title:"home",link:"/home",content:"home"},{id:2,class:"nav-item",title:"shop",link:"/shop",content:"shop"},{id:3,class:"nav-item",title:"about us",link:"/about",content:"about us"},{id:4,class:"nav-item",title:"contact",link:"/contact",content:"contact"},{id:5,class:"icon-twitter",title:"",link:"#",content:""},{id:6,class:"icon-facebook2",title:"",link:"#",content:""},{id:7,class:"icon-linkedin",title:"",link:"#",content:""},{id:8,class:"icon-cart cart-button",title:"",link:"#",content:""}]}}},o,!1,function(t){e("1aRQ")},null,null).exports,u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"footer"},[e("div",{staticClass:"container clearf"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"footer-menu"},[e("h6",[t._v("footer menu")]),t._v(" "),e("ul",{staticClass:"menu"},t._l(t.foot_items,function(s){return e("li",{key:s.id,staticClass:"link-item"},[e("a",{attrs:{href:s.link}},[t._v(t._s(s.content))])])}),0)])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"main-menu"},[e("h6",[t._v("main menu")]),t._v(" "),e("ul",{staticClass:"menu"},t._l(t.main_items,function(s){return e("li",{key:s.id,staticClass:"link-item"},[e("a",{class:s.class,attrs:{href:s.link}},[t._v(t._s(s.content))])])}),0)])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-4"},[s("div",{staticClass:"icons"},[s("ul",{staticClass:"menu fl"},[s("li",[s("a",{staticClass:"icon-twitter",attrs:{href:"#",title:"",rel:"me",target:"_blank"}})]),this._v(" "),s("li",[s("a",{staticClass:"icon-facebook2",attrs:{href:"#",title:"",rel:"me",target:"_blank"}})]),this._v(" "),s("li",[s("a",{staticClass:"icon-linkedin",attrs:{href:"#",title:"",rel:"me",target:"_blank"}})])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container",staticStyle:{"padding-bottom":"20px"}},[s("div",{staticClass:"credits"},[s("p",[this._v("© 2020 flexrope.Powered by Hippo\n      "),s("br"),this._v("\n      All rights reserved. flexrope is a registered trademark of FlexRope Industry And Trade Co.,Ltd.\n      ")])])])}]};var _=e("VU/8")({data:function(){return{foot_items:[{id:1,link:"#",content:"FAQ"},{id:2,link:"#",content:"Privacy Policy"},{id:3,link:"#",content:"Terms & Conditions"}],main_items:[{id:1,class:"nav_item",link:"/home",content:"Home"},{id:2,class:"nav_item",link:"/shop",content:"Shop"},{id:3,class:"nav_item",link:"/about",content:"About us"},{id:4,class:"nav_item",link:"/contact",content:"Contact"}]}}},u,!1,function(t){e("VMWd")},null,null).exports,d=e("mtWM"),v=e.n(d),m="http://www.flexrope.cn:8000",f=function(t){return v.a.get(m+"/api/goods/",{params:t})},p=function(t){return v.a.get(m+"/api/categorys/",{params:t})},h={data:function(){return{hot_sellers:[]}},created:function(){this.getGoods()},methods:{getGoods:function(){var t=this;f({is_hot:!0}).then(function(s){console.log(s.data),t.hot_sellers=s.data.results}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-page"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"container clearf"},[e("h2",{staticClass:"title"},[t._v("Our Bestsellers")]),t._v(" "),t._l(t.hot_sellers,function(s){return e("div",{key:s.id,staticClass:"col-3 product"},[e("div",{staticClass:"product_item"},[t._m(2,!0),t._v(" "),e("div",{staticClass:"product_image"},[e("a",{attrs:{href:s.ali_url,target:"_blank",title:s.name}},[e("img",{attrs:{src:s.pic_url}})])]),t._v(" "),e("div",{staticClass:"product_info"},[e("div",{staticClass:"product_name"},[e("a",{attrs:{href:s.ali_url,target:"_blank",title:s.name}},[t._v(t._s(s.name))])]),t._v(" "),e("div",{staticClass:"product_price"},[e("span",{staticClass:"price b"},[t._v(t._s(s.min_unit_price)+" - "+t._s(s.max_unit_price)+" $")]),t._v("\n               ⁄ \n              "),e("span",{staticClass:"unit"},[t._v(t._s(s.unit))])]),t._v(" "),e("div",{staticClass:"product_moq"},[e("span",{staticClass:"moq b"},[t._v(t._s(s.min_order))]),t._v("\n               ⁄ \n              "),e("span",{staticClass:"unit b"},[t._v(t._s(s.unit))]),t._v(" "),e("span",{staticClass:"description"},[t._v("(Min. Order)")]),t._v(" \n              "),t._m(3,!0)])])])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"slider"},[s("ul",[s("li",[s("a",[s("img",{attrs:{src:"https://sc01.alicdn.com/kf/H97b9a984168f4794a71e05dc80a3ce18Q.jpg"}})])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"advantage",staticStyle:{"padding-top":"20px"}},[s("img",{attrs:{src:"/static/image/advantage.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"icon left_top"},[s("button",{staticClass:"icon-heart"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"icon right_bottom"},[s("button",{staticClass:"icon-plus"})])}]};var g=e("VU/8")(h,C,!1,function(t){e("e2r6")},null,null).exports,b={data:function(){return{data_list:[],categories:[],goods:[]}},created:function(){this.getCategorys(),this.getGoods()},methods:{getCategorys:function(){var t=this;p().then(function(s){console.log(s.data),t.categories=s.data}).catch(function(t){console.log(t)})},getGoods:function(){var t=this;f().then(function(s){console.log(s.data),t.goods=s.data.results}).catch(function(t){console.log(t)})},thumbUp:function(){},addToCart:function(){}}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-page"},[e("div",{staticClass:"container clearf"},[e("div",{staticClass:"navbar"}),t._v(" "),t._l(t.categories,function(s){return e("div",{key:s.id,staticClass:"container clearf category"},[e("h2",[t._v(t._s(s.name))]),t._v(" "),t._l(t.goods,function(a){return a.category.id===s.id?e("div",{key:a.id,staticClass:"col-3 product"},[e("div",{staticClass:"product_item"},[t._m(0,!0),t._v(" "),e("div",{staticClass:"product_image"},[e("a",{attrs:{href:a.ali_url,target:"_blank",title:a.name}},[e("img",{attrs:{src:a.pic_url}})])]),t._v(" "),e("div",{staticClass:"product_info"},[e("div",{staticClass:"product_name"},[e("a",{attrs:{href:a.ali_url,target:"_blank",title:a.name}},[t._v(t._s(a.name))])]),t._v(" "),e("div",{staticClass:"product_price"},[e("span",{staticClass:"price b"},[t._v(t._s(a.min_unit_price)+" - "+t._s(a.max_unit_price)+" $")]),t._v("\n                   ⁄ \n                  "),e("span",{staticClass:"unit"},[t._v(t._s(a.unit))])]),t._v(" "),e("div",{staticClass:"product_moq"},[e("span",{staticClass:"moq b"},[t._v(t._s(a.min_order))]),t._v("\n                   ⁄ \n                  "),e("span",{staticClass:"unit b"},[t._v(t._s(a.unit))]),t._v(" "),e("span",{staticClass:"description"},[t._v("(Min. Order)")]),t._v(" \n                  "),t._m(1,!0)])])])]):t._e()})],2)})],2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"icon left_top"},[s("button",{staticClass:"icon-heart"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"icon right_bottom"},[s("button",{staticClass:"icon-plus"})])}]};var y=e("VU/8")(b,k,!1,function(t){e("fzXQ")},null,null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"main-page"},[s("div",{staticClass:"wrapper col-12"},[s("img",{attrs:{src:"/static/image/about.png"}})]),this._v(" "),s("div",{staticClass:"container clearf"})])}]};var x=e("VU/8")({},E,!1,function(t){e("PgEb")},null,null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-page"},[e("div",{staticClass:"container clearf"},[e("h1",{staticClass:"title"},[t._v("contact us")]),t._v(" "),e("p",{staticClass:"text"},[t._v("if you have any questions or suggestions , You can reach us through the message board below .")]),t._v(" "),e("div",{staticClass:"mail_sender"},[e("div",{staticClass:"col-4"},[e("label",[t._v("Name"),e("span",{staticClass:"red"},[t._v("*")])]),t._v(" "),e("input",{staticClass:"user_name",attrs:{type:"text",placeholder:"  your name",required:"required"}})]),t._v(" "),e("div",{staticClass:"col-8"},[e("label",[t._v("Email"),e("span",{staticClass:"red"},[t._v("*")])]),t._v(" "),e("input",{staticClass:"user_email",attrs:{type:"text",placeholder:" your name"}})]),t._v(" "),e("div",{staticClass:"col-12"},[e("label",[t._v("Content"),e("span",{staticClass:"red"},[t._v("*")])]),t._v(" "),e("textarea",{staticClass:"user_message",attrs:{placeholder:" say something..."}}),e("br"),t._v(" "),e("input",{staticClass:"email_sender_button",attrs:{type:"submit",value:"SEND"}})])])])])}]};var w=e("VU/8")({},$,!1,function(t){e("/wJX")},null,null).exports,F={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"wrap_box"},[s("router-view",{attrs:{name:"header"}}),this._v(" "),s("router-view",{attrs:{name:"content"}}),this._v(" "),s("router-view",{attrs:{name:"footer"}})],1)},staticRenderFns:[]};var R=e("VU/8")(null,F,!1,function(t){e("ro2L")},null,null).exports;n.a.use(r.a);var q=new r.a({mode:"history",routes:[{path:"/",component:R,children:[{name:"home",path:"home",components:{header:l,content:g,footer:_}},{name:"shop",path:"shop",components:{header:l,content:y,footer:_}},{name:"about",path:"about",components:{header:l,content:x,footer:_}},{name:"contact",path:"contact",components:{header:l,content:w,footer:_}}]}]});q.beforeEach(function(t,s,e){"/"===t.path?e({path:"/home"}):e()});var U=q;e("34KM"),e("eOoE"),e("telf");n.a.prototype.$http=v.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:U,components:{App:c},template:"<App/>"})},PgEb:function(t,s){},TPyF:function(t,s){},VMWd:function(t,s){},e2r6:function(t,s){},eOoE:function(t,s){},fzXQ:function(t,s){},ro2L:function(t,s){},telf:function(t,s,e){var a=e("zNUS"),n=a.Random;a.mock("http://localhost:8080/mock/data",function(t,s){for(var e=[],a=0;a<30;a++){var i={id:a+1,title:n.csentence(5,10),company:n.csentence(5,10),attention_degree:n.integer(100,9999),photo:n.image("114x83","#00405d","#FFF","Mock.js")};e.push(i)}return{data:e}})}},["NHnr"]);
//# sourceMappingURL=app.b66839b4d83d9637dbb0.js.map