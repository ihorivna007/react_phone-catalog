(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(26),s=c.n(a),n=c(6),r=c(1),i=c.n(r),l=c(4),o=c(8),d=c(7),j=c(3),_=c(5),b=c.n(_),u="https://mate-academy.github.io/react_phone-catalog/_new";function m(e){return new Promise((function(t){setTimeout(t,e)}))}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return c&&(a.body=JSON.stringify(c),a.headers={"Content-Type":"application/json; charset=UTF-8"}),m(600).then((function(){return fetch(u+e,a)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var h=function(e){return O(e)},p=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h("/products.json"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h("/products/".concat(t,".json")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=c(27),g=c.n(f),v=c(10),N=c.n(v),y=localStorage.getItem("fav")?JSON.parse(localStorage.getItem("fav")||""):[],S=localStorage.getItem("fullList")?JSON.parse(localStorage.getItem("fullList")||""):[],w=function(e,t){return e.findIndex((function(e){return e.id===t}))},P=c(0),k=function(e){var t=e.id,c=e.bigButton,a=Object(r.useState)(-1!==w(y,t)),s=Object(j.a)(a,2),n=s[0],i=s[1];return Object(P.jsx)("button",{type:"button","aria-label":"favorite-button",onClick:function(){i((function(e){return!e})),function(e){localStorage.removeItem("fav");var t=w(y,e);if(-1!==t)y.splice(t,1);else{var c=S.find((function(t){return t.id===e}));c&&y.push(c)}localStorage.setItem("fav",JSON.stringify(y))}(t)},className:N()("favorite-button",{active:n,"favorite-button--big":c})})},L=JSON.parse(localStorage.getItem("fullList")||""),I=localStorage.getItem("cartList")?JSON.parse(localStorage.getItem("cartList")||""):[],C=function(e){var t=e.id,c=e.bigButton,a=Object(r.useState)(!1),s=Object(j.a)(a,2),n=s[0],i=s[1];return Object(P.jsx)("button",{className:N()("button",{active:n,"button--big":c}),onClick:function(){i(!0),function(e){var t=L.find((function(t){return t.id===e}));t&&I.push(t),localStorage.setItem("cartList",JSON.stringify(I))}(t)},type:"button",children:n?"Added to cart":"Add to cart"})},E=function(e){var t=e.item,c=e.hasDiscont,a=t.id,s=t.itemId,r=t.name,i=t.price,l=t.fullPrice,o=t.screen,d=t.capacity,j=t.ram,_=t.image,b="new/".concat(_);return Object(P.jsxs)("div",{className:"card link-style",children:[Object(P.jsx)(n.b,{to:"/phones/".concat(s),className:"card__header",children:Object(P.jsx)("img",{className:"card__header__image",src:b,alt:r})}),Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{className:"card__name",children:[Object(P.jsx)("p",{className:"text__body card__name__title",children:r}),Object(P.jsxs)("div",{className:"card__price",children:[Object(P.jsx)("h2",{className:"card__price__new",children:"$".concat(i)}),c&&Object(P.jsx)("h2",{className:"card__price__old",children:"$".concat(l)})]}),Object(P.jsx)("div",{})]}),Object(P.jsxs)("div",{className:"card__info",children:[Object(P.jsx)("div",{}),Object(P.jsxs)("div",{className:"card__params text__small",children:[Object(P.jsxs)("div",{className:"card__params__line",children:[Object(P.jsx)("p",{className:"card__params__title",children:"Screen"}),Object(P.jsx)("p",{className:"card__params__data",children:o})]}),Object(P.jsxs)("div",{className:"card__params__line",children:[Object(P.jsx)("p",{className:"card__params__title",children:"Capacity"}),Object(P.jsx)("p",{className:"card__params__data",children:d})]}),Object(P.jsxs)("div",{className:"card__params__line",children:[Object(P.jsx)("p",{className:"card__params__title",children:"RAM"}),Object(P.jsx)("p",{className:"card__params__data",children:j})]})]}),Object(P.jsxs)("div",{className:"card__footer",children:[Object(P.jsx)(C,{id:a}),Object(P.jsx)(k,{id:a})]})]})]})]},s)},J=function(e){var t=e.title,c=e.itemsList,a=e.isLoading,s=Object(r.useState)(0),n=Object(j.a)(s,2),i=n[0],l=n[1],o=function(e){var t;l((function(t){return t+4*e})),null===(t=document.querySelector(".page__content__cards"))||void 0===t||t.scrollTo({left:-100,behavior:"smooth"})};return Object(P.jsxs)("section",{className:"page__content",children:[Object(P.jsxs)("div",{className:"page__content__header",children:[Object(P.jsx)("h1",{children:t}),c.length>4&&Object(P.jsxs)("div",{className:"page__content__header__arrows",children:[Object(P.jsx)("button",{type:"button","aria-label":"slider-button",className:"slider-button slider-button__left",onClick:function(){return o(-1)},disabled:0===i}),Object(P.jsx)("button",{type:"button","aria-label":"slider-button",className:"slider-button slider-button__right",onClick:function(){return o(1)},disabled:i>=c.length-4})]})]}),a&&Object(P.jsx)("div",{className:"card-loaders",children:[1,2,3,4].map((function(e){return Object(P.jsx)("div",{className:"card card-loaders__loader",children:Object(P.jsx)(g.a,{color:"gray"})},e)}))}),Object(P.jsx)("div",{children:Object(P.jsx)("ul",{className:"page__content__cards",children:c.map((function(e){return Object(P.jsx)("li",{style:{transition:"500ms",transform:"translateX(".concat(288*-i,"px)")},children:Object(P.jsx)(E,{item:e,hasDiscont:!0})},e.id)}))})})]})},A=function(){var e=Object(r.useState)(-1),t=Object(j.a)(e,2),c=t[0],a=t[1],s=function(e){a((function(t){var c=0;switch(t+e){case 2:c=-1;break;case-2:c=1;break;default:c=t+e}return c}))};return Object(r.useEffect)((function(){var e=document.querySelector(".banner__dots");switch(c){case-1:null===e||void 0===e||e.classList.toggle("icon--dots--0",!0),null===e||void 0===e||e.classList.toggle("icon--dots--1",!1),null===e||void 0===e||e.classList.toggle("icon--dots--2",!1);break;case 0:null===e||void 0===e||e.classList.toggle("icon--dots--0",!1),null===e||void 0===e||e.classList.toggle("icon--dots--1",!0),null===e||void 0===e||e.classList.toggle("icon--dots--2",!1);break;case 1:null===e||void 0===e||e.classList.toggle("icon--dots--1",!1),null===e||void 0===e||e.classList.toggle("icon--dots--2",!0)}}),[c]),Object(P.jsxs)("section",{className:"banner",children:[Object(P.jsxs)("div",{className:"banner__main",children:[Object(P.jsx)("button",{"aria-label":"banner__icon",type:"button",className:"slider-button slider-button__left banner__icon",onClick:function(){return s(-1)}}),Object(P.jsx)("div",{className:"banner__cover",children:Object(P.jsx)("ul",{className:"banner__list",children:["./new/img/banner-tablets.png","./new/img/banner-phones.png","./new/img/banner-accessories.png"].map((function(e){return Object(P.jsx)("li",{style:{transition:"500ms",transform:"translateX(".concat(1040*-c,"px)")},children:Object(P.jsx)("img",{className:"banner__image",src:e,alt:"Banner"})},e)}))})}),Object(P.jsx)("button",{"aria-label":"banner__icon",type:"button",className:"slider-button slider-button__right banner__icon",onClick:function(){return s(1)}})]}),Object(P.jsx)("div",{className:"banner__footer",children:Object(P.jsx)("p",{className:"banner__dots icon icon--dots icon--dots--0"})})]})},T=function(){return Object(P.jsxs)("section",{className:"category",children:[Object(P.jsx)("div",{className:"category__header",children:Object(P.jsx)("h1",{children:"Shop by category"})}),Object(P.jsxs)("div",{className:"category__cards",children:[Object(P.jsxs)(n.b,{to:"./phones",className:"category__card",children:[Object(P.jsx)("div",{className:"category__card__content category__card--beige",children:Object(P.jsx)("img",{src:"./new/img/category-phones.png",alt:"Mobile phones",className:"category__card__image category__card__image--phone"})}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h3",{children:"Mobile phones"}),Object(P.jsx)("p",{className:"text__body",children:"71 models"})]})]}),Object(P.jsxs)(n.b,{to:"./tablets",className:"category__card",children:[Object(P.jsx)("div",{className:"category__card__content category__card--gray",children:Object(P.jsx)("img",{src:"./new/img/category-tablets.png",alt:"Tablets",className:"category__card__image category__card__image--tablet"})}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h3",{children:"Tablets"}),Object(P.jsx)("p",{className:"text__body",children:"24 models"})]})]}),Object(P.jsxs)(n.b,{to:"/accessories",className:"category__card",children:[Object(P.jsx)("div",{className:"category__card__content category__card--red",children:Object(P.jsx)("img",{src:"./new/img/category-accessories.png",alt:"Accessories",className:"category__card__image category__card__image--acc"})}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h3",{children:"Accessories"}),Object(P.jsx)("p",{className:"text__body",children:"100 models"})]})]})]})]})},B=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(!1),n=Object(j.a)(s,2),i=n[0],l=n[1],_=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,p();case 4:t=e.sent,a(t);case 6:return e.prev=6,l(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){0===c.length&&_()}),[]),localStorage.setItem("fullList",JSON.stringify(c));var u=Object(r.useMemo)((function(){return Object(o.a)(c).sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)})).slice(0,16)}),[c]),m=Object(r.useMemo)((function(){return Object(o.a)(c).sort((function(e,t){return t.year-e.year})).slice(0,16)}),[c]);return Object(P.jsxs)("main",{className:"page",children:[Object(P.jsx)(A,{}),Object(P.jsx)(J,{title:"Hot price",itemsList:u,isLoading:i}),Object(P.jsx)(T,{}),Object(P.jsx)(J,{title:"Brand new models",itemsList:m,isLoading:i}),Object(P.jsx)("section",{})]})},D=c(25),M=c(28);function q(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(j.a)(e,2),a=t[0],s=t[1];null===s?c.delete(a):Array.isArray(s)?(c.delete(a),s.forEach((function(e){c.append(a,e)}))):c.set(a,s)})),c.toString()}var $=["children","params"],F=function(e){var t=e.children,c=e.params,a=Object(M.a)(e,$),s=Object(n.d)(),r=Object(j.a)(s,1)[0];return Object(P.jsx)(n.b,Object(D.a)(Object(D.a)({to:{search:q(r,c)}},a),{},{children:t}))},U=function(e){var t=e.catalog,c=e.start,a=e.end;return Object(P.jsx)("div",{className:"catalog",children:Object(P.jsx)("div",{className:"catalog__items",children:t.slice(c,a).map((function(e){return Object(P.jsx)(E,{item:e,hasDiscont:e.fullPrice!==e.price},e.id)}))})})},H=function(){var e,t=Object(l.p)().id,c=Object(l.l)().pathname,a=c.split("/")[1],s=function(e){return e.slice(0,1).toUpperCase()+e.slice(1)};return Object(P.jsxs)("div",{className:"navigation",children:[Object(P.jsx)(n.b,{to:"/",children:Object(P.jsx)("div",{className:"icon icon--home"})}),a&&Object(P.jsxs)("ul",{className:"navigation__list text__small",children:[Object(P.jsx)("li",{className:"navigation__item",children:Object(P.jsx)("div",{className:"icon icon--nav"})}),Object(P.jsx)("li",{className:"navigation__item",children:Object(P.jsx)(n.b,{to:"/".concat(a),children:s(a)})}),t&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("li",{className:"navigation__item",children:Object(P.jsx)("div",{className:"icon icon--nav"})}),Object(P.jsx)("li",{className:"navigation__item",children:Object(P.jsx)(n.b,{to:"/".concat(a,"/").concat(t),children:(e=t,e.split("-").map((function(e){return s(e)})).join(" "))})})]})]})]})},R=c(9),X=["Default","Newest","Lowest Price","Highest Price"],z=[8,12,16,24],G=function(e){var t=e.type,c="sortBy"===t,a=Object(n.d)(),s=Object(j.a)(a,1)[0],i=c?s.get(t)||"Default":parseInt(s.get(t)||"12",10),l=c?"Sort By":"Items on page",o=c?X:z,d=Object(r.useState)(!1),_=Object(j.a)(d,2),b=_[0],u=_[1],m=Object(r.useRef)(null),O=function(e){e.target!==m.current&&b&&u(!1)};return Object(r.useEffect)((function(){return document.addEventListener("click",O),function(){document.removeEventListener("click",O)}}),[b]),Object(P.jsxs)("div",{className:"phones__header__dropdown",children:[Object(P.jsx)("p",{className:"text__small",children:l}),Object(P.jsxs)("div",{className:"dropdown",children:[Object(P.jsxs)("button",{type:"button",className:"dropdown__button",onClick:function(){return u((function(e){return!e}))},children:[Object(P.jsx)("span",{children:i}),Object(P.jsx)("span",{className:N()("icon icon--dropdown","dropdown__button__arrow",{active:b})})]}),Object(P.jsx)("div",{className:"dropdown",id:"dropdown-menu",role:"menu",children:Object(P.jsx)("div",{className:N()("dropdown__content",{active:b}),children:o.map((function(e){return Object(P.jsx)(F,{className:"link-style text__body dropdown__item",params:Object(R.a)({},t,String(e)),onClick:function(){return u(!1)},children:e},e)}))})})]})]})},Y=function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("fullList")||"")),t=Object(j.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){0===c.length&&s()}),[]);var i=Object(n.d)(),l=Object(j.a)(i,2),_=l[0],u=l[1],m=_.get("query")||"",O=_.get("sortBy")||"Default",h=parseInt(_.get("currentPage")||"1",10),x=parseInt(_.get("itemPerPage")||"12",10),f=function(){u(q(_,{currentPage:"1"}))},g=Object(r.useState)(0),v=Object(j.a)(g,2),y=v[0],S=v[1],w=Object(r.useState)(x),k=Object(j.a)(w,2),L=k[0],I=k[1],C=function(e){var t;switch(!0){case"number"===typeof e:t=e;break;case"left"===e:t=h-1;break;case"right"===e:t=h+1}u(q(_,{currentPage:String(t)}))};Object(r.useEffect)((function(){window.scrollTo({top:0,behavior:"auto"}),S(x*(h-1)),I(x*h)}),[h]);var E=Object(r.useState)(Object(o.a)(c)),J=Object(j.a)(E,2),A=J[0],T=J[1],B=Math.ceil(A.length/x);return Object(r.useEffect)((function(){switch(O){case"Newest":T(Object(o.a)(c).sort((function(e,t){return t.year-e.year})));break;case"Highest Price":T(Object(o.a)(c).sort((function(e,t){return t.price-e.price})));break;case"Lowest Price":T(Object(o.a)(c).sort((function(e,t){return e.price-t.price})));break;default:T(Object(o.a)(c))}f()}),[O]),Object(r.useEffect)((function(){f(),I(x)}),[x]),Object(r.useEffect)((function(){T(c.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}))),f()}),[m]),Object(P.jsxs)("div",{children:[Object(P.jsx)(H,{}),Object(P.jsxs)("main",{className:"page",children:[Object(P.jsxs)("section",{className:"phones",children:[Object(P.jsxs)("div",{className:"phones__header",children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{children:"Mobile phones"}),Object(P.jsx)("p",{className:"text__body phones__header__subtitle",children:"".concat(A.length," models")})]}),A.length>0&&Object(P.jsxs)("div",{className:"phones__header__dropdowns",children:[Object(P.jsx)(G,{type:"sortBy"}),Object(P.jsx)(G,{type:"itemPerPage"})]})]}),Object(P.jsxs)("div",{className:"phones__catalog",children:[A&&Object(P.jsx)(U,{catalog:A,start:y,end:L}),A.length>0&&Object(P.jsxs)("div",{className:"phones__catalog__buttons",children:[Object(P.jsx)("button",{type:"button","aria-label":"slider-button",className:"slider-button slider-button__left",disabled:"1"===_.get("currentPage"),onClick:function(){return C("left")}}),Object(P.jsx)("div",{className:"phones__catalog__buttons__paggination",children:Array.from({length:B},(function(e,t){return t+1})).map((function(e){return Object(P.jsx)(F,{className:N()("slider-button slider-button__paggination",{active:_.get("currentPage")===String(e)}),onClick:function(){return C(e)},params:{currentPage:String(e)},children:e},e)}))}),Object(P.jsx)("button",{"aria-label":"slider-button",className:"slider-button slider-button__right",disabled:_.get("currentPage")===String(B),type:"button",onClick:function(){return C("right")}})]})]})]}),Object(P.jsx)("section",{})]})]})},K=c(40),Q={midnightgreen:"#5f7170",spacegray:"#4c4c4c",gold:"#fcdbc1",silver:"#f0f0f0",black:"#000",yellow:"#fff44f",green:"#d0ffd0",purple:"#e4dde7",red:"#dd1133",coral:"#f77464",rosegold:"#ffe6ec"},V=function(){var e=Object(l.n)();return Object(P.jsxs)("div",{className:"back-button",children:[Object(P.jsx)("div",{className:"icon icon--back"}),Object(P.jsx)("p",{role:"presentation",className:"text__small",onClick:function(){e(-1)},children:"Back"})]})},W=["screen","resolution","processor","ram","capacity","camera","zoom","cell"],Z=["screen","resolution","processor","ram"],ee=function(e){return"ram"===e?e.toUpperCase():e.slice(0,1).toUpperCase()+e.slice(1)},te=function(){var e=Object(l.p)(),t=Object(r.useState)(""),c=Object(j.a)(t,2),a=c[0],s=c[1],i=Object(r.useState)(),o=Object(j.a)(i,2),_=o[0],u=o[1],m=Object(r.useState)([]),O=Object(j.a)(m,2),h=O[0],p=O[1],f=Object(r.useState)([]),g=Object(j.a)(f,2),v=g[0],y=g[1],S=Object(r.useState)(""),w=Object(j.a)(S,2),L=w[0],I=w[1],E=Object(r.useState)([]),A=Object(j.a)(E,2),T=A[0],B=A[1],D=Object(r.useState)(""),M=Object(j.a)(D,2),q=M[0],$=M[1],F=Object(r.useState)(null),U=Object(j.a)(F,2),R=U[0],X=U[1],z=Object(r.useState)(""),G=Object(j.a)(z,2),Y=G[0],te=G[1],ce=JSON.parse(localStorage.getItem("fullList")||""),ae=function(e){return"new/".concat(e)},se=function(){var e=Object(d.a)(b.a.mark((function e(t){var c,a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,X(null),e.next=4,x(t);case 4:c=e.sent,a=ce.find((function(e){return e.itemId===t})),s((null===a||void 0===a?void 0:a.id)||t),X(c),u(a),I((null===a||void 0===a?void 0:a.color)||""),$((null===a||void 0===a?void 0:a.capacity)||""),te(ae((null===a||void 0===a?void 0:a.image)||"")),e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(0),new Error("Didn't catch data");case 17:return e.prev=17,n=t.split("-").slice(0,-2).join("-"),r=ce.filter((function(e){return n===e.itemId.split("-").slice(0,-2).join("-")})),p(r),y(r.map((function(e){return e.color})).filter((function(e,t,c){return c.indexOf(e)===t}))),B(r.map((function(e){return e.capacity})).filter((function(e,t,c){return c.indexOf(e)===t}))),e.finish(17);case 24:case"end":return e.stop()}}),e,null,[[0,14,17,24]])})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){e.id&&se(e.id),window.scrollTo({top:0,behavior:"smooth"})}),[e.id]);var ne=function(e){var t=e.currentTarget.getAttribute("src");te(t||"")};return Object(P.jsxs)("div",{children:[Object(P.jsx)(H,{}),_&&R?Object(P.jsxs)("main",{className:"page cardPage",children:[Object(P.jsxs)("section",{className:"cardPage__title",children:[Object(P.jsx)(V,{}),Object(P.jsx)("h1",{children:_.name})]}),Object(P.jsxs)("section",{className:"cardPage__props",children:[Object(P.jsxs)("div",{className:"cardPage__props__images",children:[Object(P.jsx)("div",{className:"cardPage__props__images__small",children:R.images.map((function(e){return Object(P.jsx)("div",{className:N()("cardPage__props__image--cover",{active:ae(e)===Y}),children:Object(P.jsx)("img",{src:ae(e),alt:e,role:"presentation",className:"cardPage__props__image--small",onClick:ne})},e)}))}),Object(P.jsx)("div",{className:"cardPage__props__images__big",children:Object(P.jsx)("img",{src:Y,alt:_.itemId,className:"cardPage__props__image--big"})})]}),Object(P.jsxs)("div",{className:"cardPage__props__info",children:[Object(P.jsxs)("div",{className:"cardPage__props__info__sections",children:[Object(P.jsxs)("div",{className:"cardPage__props__info__section",children:[Object(P.jsx)("p",{className:"text__small",children:"Available colors"}),Object(P.jsx)("div",{className:"cardPage__props__info__circles",children:v.map((function(e){return Object(P.jsx)(n.b,{to:"/phones/".concat(h.filter((function(t){return t.color===e&&t.capacity===q}))[0].itemId),className:N()("cardPage__props__info__circle",{active:L===e}),children:Object(P.jsx)("div",{className:"cardPage__props__info__circle--inner",style:{backgroundColor:Q[e]}})},e)}))})]}),Object(P.jsx)("p",{className:"cardPage__details__title-line"}),Object(P.jsxs)("div",{className:"cardPage__props__info__section",children:[Object(P.jsx)("p",{className:"text__small",children:"Select capacity"}),Object(P.jsx)("div",{className:"cardPage__props__info__capacities",children:T.map((function(e){return Object(P.jsx)(n.b,{to:"/phones/".concat(h.filter((function(t){return t.capacity===e&&t.color===L}))[0].itemId),className:N()("text__body","slider-button__paggination","cardPage__props__info__capacity",{active:q===e}),children:e},e)}))})]}),Object(P.jsx)("p",{className:"cardPage__details__title-line"}),Object(P.jsxs)("div",{className:"cardPage__props__info__price-section",children:[Object(P.jsxs)("div",{className:"cardPage__props__info__price",children:[Object(P.jsx)("h1",{className:"card__price__new",children:"$".concat(_.price)}),Object(P.jsx)("h2",{className:"cardPage__props__info__price--old",children:"$".concat(_.fullPrice)})]}),Object(P.jsxs)("div",{className:"cardPage__props__info__buttons",children:[Object(P.jsx)(C,{id:a,bigButton:!0}),Object(P.jsx)(k,{id:a,bigButton:!0})]})]}),Object(P.jsx)("div",{className:"cardPage__props__info__details text__body",children:Z.map((function(e){return Object(P.jsxs)("div",{className:"cardPage__props__info__item",children:[Object(P.jsx)("p",{className:"cardPage__props__info__title",children:ee(e)}),Object(P.jsx)("p",{children:R[e]})]},e)}))})]}),Object(P.jsx)("p",{className:"text__small",children:"ID: ".concat(_.id)})]})]}),Object(P.jsxs)("section",{className:"cardPage__details",children:[Object(P.jsxs)("div",{className:"cardPage__details__left",children:[Object(P.jsxs)("div",{className:"cardPage__details__left__block",children:[Object(P.jsx)("h2",{children:"About"}),Object(P.jsx)("p",{className:"cardPage__details__title-line"})]}),R.description.map((function(e){return Object(P.jsxs)("div",{className:"cardPage__details__left__block",children:[Object(P.jsx)("h3",{children:e.title}),e.text.map((function(e){return Object(P.jsx)("p",{className:"text__body cardPage__details__gray-text",children:e},e)}))]},e.title)}))]}),Object(P.jsxs)("div",{className:"cardPage__details__right",children:[Object(P.jsxs)("div",{className:"cardPage__details__left__block",children:[Object(P.jsx)("h2",{children:"Tech specs"}),Object(P.jsx)("p",{className:"cardPage__details__title-line"})]}),Object(P.jsx)("div",{className:"cardPage__details__right__block",children:W.map((function(e){return Object(P.jsxs)("div",{className:"cardPage__details__right__element",children:[Object(P.jsx)("p",{className:"text__body cardPage__details__gray-text",children:ee(e)}),Object(P.jsx)("p",{className:"text__body",children:"cell"===e?R.cell.join(", "):R[e]})]},e)}))})]})]}),Object(P.jsx)(J,{title:"You may also like",itemsList:h.filter((function(e){return e.id!==_.id})),isLoading:!1}),Object(P.jsx)("section",{})]}):Object(P.jsxs)("div",{className:"page__loading",children:[Object(P.jsx)("h3",{children:"Please, wait, the page is loading..."}),Object(P.jsx)(K.a,{color:"gray"})]})]})},ce=function(){var e=JSON.parse(localStorage.getItem("fav")||""),t=Object(r.useState)(Object(o.a)(e)),c=Object(j.a)(t,2),a=c[0],s=c[1],i=a.length,l=Object(n.d)(),d=Object(j.a)(l,1)[0].get("query")||"";return Object(r.useEffect)((function(){}),[e]),Object(r.useEffect)((function(){s(e.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())})))}),[d]),Object(P.jsxs)("main",{children:[Object(P.jsx)(H,{}),Object(P.jsxs)("section",{className:"page",children:[Object(P.jsxs)("div",{className:"page__catalog",children:[Object(P.jsx)("h1",{children:"Favorites"}),a&&Object(P.jsxs)("div",{children:[Object(P.jsx)("p",{className:"text__body page__subtitle",children:"".concat(i," ").concat(i>1?"models":"model")}),Object(P.jsx)(U,{catalog:a,start:0,end:i})]})]}),Object(P.jsx)("div",{})]})]})},ae=function(e){var t=e.product,c=e.amount,a=e.handleListChange,s=void 0===a?function(){}:a,i=Object(r.useState)(c),l=Object(j.a)(i,2),o=l[0],d=l[1],_=function(e){var c=e>0?"add":"reduce";s(t.id,c),d((function(t){return t+e}))};return Object(P.jsxs)("div",{className:"cart__element cart-item text__body",children:[Object(P.jsxs)("div",{className:"cart-item__left-part",children:[Object(P.jsx)("div",{className:"icon icon--cross",role:"presentation",onClick:function(){return s(t.id,"remove")}}),Object(P.jsx)("div",{className:"cart-item__left-part__image-cover",children:Object(P.jsx)("img",{className:"cart-item__left-part__image",src:"new/".concat(t.image),alt:t.name})}),Object(P.jsx)(n.b,{to:"/phones/".concat(t.itemId),className:"cart-item__left-part__name",children:t.name})]}),Object(P.jsxs)("div",{className:"cart-item__right-part",children:[Object(P.jsxs)("div",{className:"cart-item__right-part__buttons",children:[Object(P.jsx)("button",{type:"button","aria-label":"slider-button",className:"slider-button slider-button__minus",onClick:function(){return _(-1)},disabled:1===c}),Object(P.jsx)("p",{children:o}),Object(P.jsx)("button",{type:"button","aria-label":"slider-button",className:"slider-button slider-button__plus",onClick:function(){return _(1)},disabled:c===t.count})]}),Object(P.jsx)("h2",{children:"$".concat(t.price*c)})]})]})},se=function(){var e=JSON.parse(localStorage.getItem("fullList")||""),t=JSON.parse(localStorage.getItem("cartList")||""),c=function(e){return e.filter((function(e,t,c){return c.findIndex((function(t){return t.id===e.id}))===t}))},a=Object(r.useState)(Object(o.a)(t)),s=Object(j.a)(a,2),n=s[0],i=s[1],l=Object(r.useState)(c(t)),d=Object(j.a)(l,2),_=d[0],b=d[1],u=function(){return n.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0)},m=Object(r.useState)(u),O=Object(j.a)(m,2),h=O[0],p=O[1];Object(r.useEffect)((function(){p(u)}),[n]);var x=function(t,a){var s=Object(o.a)(n);switch(a){case"add":var r=e.find((function(e){return e.id===t})),l=n.findIndex((function(e){return e.id===t}));r&&s.splice(l,0,r);break;case"remove":s=n.filter((function(e){return e.id!==t}));break;case"reduce":var d=n.findIndex((function(e){return e.id===t}));s.splice(d,1)}i(s),b(c(s)),localStorage.setItem("cartList",JSON.stringify(s))};return Object(P.jsxs)("main",{className:"page",children:[Object(P.jsxs)("section",{className:"cart",children:[Object(P.jsxs)("div",{children:[Object(P.jsx)(V,{}),Object(P.jsx)("h1",{className:"cart__title",children:"Cart"}),Object(P.jsx)("div",{className:"cart__items",children:_.length?_.map((function(e){var t=n.filter((function(t){return t.id===e.id})).length;return Object(P.jsx)(ae,{product:e,amount:t,handleListChange:x},e.id)})):Object(P.jsx)("div",{className:"cart__empty cart__element",children:"The cart is empty"})})]}),_.length?Object(P.jsx)("div",{className:"cart__total",children:Object(P.jsxs)("div",{className:"cart__element cart__total__info",children:[Object(P.jsx)("h1",{children:"$".concat(h)}),Object(P.jsx)("p",{className:"text__body cart__total__info__text",children:"Total for ".concat(n.length," ").concat(n.length>1?"items":"item")}),Object(P.jsxs)("div",{className:"cart__total__info__divider",children:[Object(P.jsx)("div",{}),Object(P.jsx)("div",{className:"cart__total__info__divider__line"}),Object(P.jsx)("div",{})]}),Object(P.jsx)("button",{type:"button",className:"button cart__total__info__button",children:"Checkout"})]})}):""]}),Object(P.jsx)("section",{})]})},ne=function(){return Object(P.jsxs)("div",{children:[Object(P.jsx)(H,{}),Object(P.jsx)("div",{className:"page__loading",children:Object(P.jsx)("h2",{children:"Not Found Page"})})]})},re=function(){return Object(P.jsxs)(l.c,{children:[Object(P.jsx)(l.a,{path:"/",element:Object(P.jsx)(B,{})}),Object(P.jsx)(l.a,{path:"/phones",element:Object(P.jsx)(Y,{})}),Object(P.jsx)(l.a,{path:"/phones/:id",element:Object(P.jsx)(te,{})}),Object(P.jsx)(l.a,{path:"/favorites",element:Object(P.jsx)(ce,{})}),Object(P.jsx)(l.a,{path:"/cart",element:Object(P.jsx)(se,{})}),Object(P.jsx)(l.a,{path:"*",element:Object(P.jsx)(ne,{})})]})},ie=function(e){var t=e.category,c=Object(n.d)(),a=Object(j.a)(c,2),s=a[0],r=a[1],i=s.get("query")||"";return Object(P.jsxs)("div",{className:"header__search",children:[Object(P.jsx)("input",{className:"header__search__input",type:"text",placeholder:"Search in ".concat(t,"..."),onChange:function(e){r(q(s,{query:e.target.value||null}))},value:i}),i.length>0?Object(P.jsx)("button",{type:"button","aria-label":"close-button",className:"icon icon--close close-button",onClick:function(){r(q(s,{query:""}))}}):Object(P.jsx)("p",{className:"icon icon--search"})]})},le=function(e){var t=e.isActive;return N()("header__link text__uppercase",{active:t})},oe=function(e){var t=e.isActive;return N()("header__icon",{active:t})},de=function(){var e=Object(l.l)().pathname,t="/phones"===e||"/favorites"===e,c="/cart"===e,a=Object(r.useState)(0),s=Object(j.a)(a,2),i=s[0],o=s[1],d=Object(r.useState)(0),_=Object(j.a)(d,2),b=_[0],u=_[1],m=Object(r.useState)(0),O=Object(j.a)(m,2),h=O[0],p=O[1];return Object(r.useEffect)((function(){u(I.length),p(y.length)}),[i]),document.addEventListener("click",(function(e){var t=e.target;(t.classList.contains("favorite-button")||t.classList.contains("button"))&&o((function(e){return e+1}))})),Object(P.jsxs)("header",{className:"header",children:[Object(P.jsx)("div",{className:"header__left",children:c?Object(P.jsx)(n.c,{className:"logo",to:"/"}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(n.c,{className:"logo",to:"/"}),Object(P.jsx)(n.c,{className:le,to:"/",children:"home"}),Object(P.jsx)(n.c,{className:le,to:"/phones",children:"phones"}),Object(P.jsx)(n.c,{className:le,to:"/tablets",children:"tablets"}),Object(P.jsx)(n.c,{className:le,to:"/accessories",children:"accessories"})]})}),Object(P.jsxs)("div",{className:"header__right",children:[t&&Object(P.jsx)(ie,{category:e.slice(1)}),!c&&Object(P.jsx)(n.c,{className:oe,to:"/favorites",children:Object(P.jsx)("div",{className:"header__icon",children:Object(P.jsxs)("div",{className:"header__icon__cover",children:[Object(P.jsx)("div",{className:"icon icon--favorites header__icon__image"}),h>0&&Object(P.jsx)("span",{className:"header__icon__amount",children:h})]})})}),Object(P.jsx)(n.c,{className:oe,to:"/cart",children:Object(P.jsx)("div",{className:"header__icon",children:Object(P.jsxs)("div",{className:"header__icon__cover",children:[Object(P.jsx)("div",{className:"icon icon--cart header__icon__image"}),b>0&&Object(P.jsx)("span",{className:"header__icon__amount",children:b})]})})})]})]})},je=function(){return Object(P.jsxs)("footer",{className:"footer",children:[Object(P.jsx)("div",{className:"footer__left",children:Object(P.jsx)(n.c,{className:"logo",to:"/"})}),Object(P.jsxs)("div",{className:"footer__centre",children:[Object(P.jsx)(n.b,{className:"text__uppercase",to:"/github",children:"github"}),Object(P.jsx)(n.b,{className:"text__uppercase",to:"/contacts",children:"contacts"}),Object(P.jsx)(n.b,{className:"text__uppercase",to:"/rights",children:"rights"})]}),Object(P.jsx)("div",{className:"footer__right",children:Object(P.jsxs)("div",{className:"footer__back-to-top link-style",children:[Object(P.jsx)("p",{className:"text__small",children:"Back to top"}),Object(P.jsx)("button",{type:"button","aria-label":"slider-button",className:"slider-button slider-button__right footer__icon",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})]})})]})},_e=(c(37),function(){return Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(de,{}),Object(P.jsx)(i.a.StrictMode,{children:Object(P.jsx)(re,{})}),Object(P.jsx)(je,{})]})});s.a.render(Object(P.jsx)(n.a,{children:Object(P.jsx)(_e,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.fc8d2a10.chunk.js.map