(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=(n(14),n(9)),o=n(2),s=n(0),u=function(e){var t=e.onAdd,n=Object(a.useState)("Escribe aqu\xed"),c=Object(o.a)(n,2),r=c[0],i=c[1];return console.log("Soy Add y me repinto..."),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("soy add y han pulsado intro"),r.trim().length>0&&(console.log("soy add y notifico para a\xf1adir"),t(r),i(""))},children:[" ",Object(s.jsx)("input",{type:"text",value:r,onChange:function(e){console.log("soy add y han pulsado letra"),i(e.target.value)}})]})},d=n(6),l=n.n(d),j=n(8),p=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=UCjMjH4hDurwFrscWI4Hiq23epYRk07R"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.imagenes;return Object(s.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(s.jsx)("img",{src:t.url,alt:t.title}),Object(s.jsx)("p",{children:t.title})]})},b=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.loading,r=n.data;return console.log(c),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t})," ",Object(s.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(s.jsx)(f,{imagenes:e},e.id)}))})]})},m=function(){var e=Object(a.useState)(["Cake"]),t=Object(o.a)(e,2),n=t[0],c=t[1];return console.log("soy gif y me repinto"),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(u,{onAdd:function(e){console.log("Soy gif a\xf1adiendo a lista..."),c([e].concat(Object(i.a)(n)))}}),Object(s.jsx)("hr",{})," ",Object(s.jsxs)("ol",{children:[" "," "," ",n.map((function(e,t){return Object(s.jsx)(b,{category:e},t)}))]})]})};r.a.render(Object(s.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.514ddde0.chunk.js.map