"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[697],{454:function(n,t,e){e.d(t,{a:function(){return o}});var r,c=e(637),a=e(168),u=e(686).Z.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  background-color: rgb(0, 0, 0, 0.5);\n"]))),i=e(184),o=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(c.Z,{color:"#032010",size:150})})}},697:function(n,t,e){e.r(t);var r=e(439),c=e(454),a=e(791),u=e(689),i=e(390),o=e(184);t.default=function(){var n=(0,u.UO)().movieId,t=(0,a.useState)([]),e=(0,r.Z)(t,2),s=e[0],f=e[1],p=(0,a.useState)(!1),h=(0,r.Z)(p,2),d=h[0],v=h[1];return(0,a.useEffect)((function(){v(!0),(0,i.Hx)(n).then(f).finally((function(){v(!1)}))}),[n]),s?(0,o.jsxs)("div",{children:[(null===s||void 0===s?void 0:s.length)>0?(0,o.jsx)("ul",{children:s.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author: ",e]}),(0,o.jsx)("p",{children:r})]},t)}))}):(0,o.jsx)("h3",{children:"There are not any reviews for this movie."}),d&&(0,o.jsx)(c.a,{})]}):function(){v(!0)}}},390:function(n,t,e){e.d(t,{Hx:function(){return d},K0:function(){return f},Mc:function(){return p},uV:function(){return h},wr:function(){return s}});var r=e(861),c=e(687),a=e.n(c),u=e(294),i="https://api.themoviedb.org/3/",o="a62896418b9c78ff6682cfb14307cf6b",s=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=697.808a96d2.chunk.js.map