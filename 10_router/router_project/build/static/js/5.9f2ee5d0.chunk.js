(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5,7],{37:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},41:function(e,t,c){"use strict";c.r(t);var s=c(9),n=c(37),i=c.n(n),r=c(1);t.default=function(){return Object(r.jsxs)("div",{className:i.a.noquotes,children:[Object(r.jsx)("p",{children:"No quotes found!"}),Object(r.jsx)(s.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})}},43:function(e,t,c){e.exports={item:"QuoteItem_item__2dOvb"}},44:function(e,t,c){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},54:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),i=c(9),r=c(43),o=c.n(r),a=c(1),u=function(e){return Object(a.jsxs)("li",{className:o.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(i.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},d=c(44),j=c.n(d),l=function(e){var t,c,i=Object(n.h)(),r=Object(n.i)(),o="asc"===new URLSearchParams(r.search).get("sort"),d=(t=e.quotes,c=o,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("div",{className:j.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){i.replace({pathname:r.pathname,search:"?sort=".concat(o?"desc":"asc")})},children:["Sort ",o?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:j.a.list,children:d.map((function(e){return Object(a.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(35),h=c(36),x=c(14),O=c(41);t.default=function(){var e=Object(b.a)(h.d,!0),t=e.sendRequest,c=e.status,n=e.data,i=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(x.a,{})}):i?Object(a.jsx)("p",{className:"centered focused",children:i}):"completed"!==c||n&&0!==n.length?Object(a.jsx)(l,{quotes:n}):Object(a.jsx)(O.default,{})}}}]);
//# sourceMappingURL=5.9f2ee5d0.chunk.js.map