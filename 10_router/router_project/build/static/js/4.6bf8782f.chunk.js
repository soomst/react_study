(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{48:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},49:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},50:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},51:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},52:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(9),a=c(38),r=c(35),m=c(36),j=c(14),i=c(48),d=c.n(i),u=c(49),l=c.n(u),b=c(1),x=function(e){return Object(b.jsx)("li",{className:l.a.item,children:Object(b.jsx)("p",{children:e.text})})},O=c(50),h=c.n(O),f=function(e){return Object(b.jsx)("ul",{className:h.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(x,{text:e.text},e.id)}))})},p=c(51),N=c.n(p),_=function(e){var t=Object(n.useRef)(),c=Object(r.a)(m.a),s=c.sendRequest,o=c.status,a=c.error,i=e.onAddedComments;Object(n.useEffect)((function(){"completed"!==o||a||i()}),[o,a,i]);var d=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:N.a.form,onSubmit:d,children:["pending"===o&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(j.a,{})}),Object(b.jsxs)("div",{className:N.a.control,onSubmit:d,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:N.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],i=Object(s.j)().quoteId,u=Object(r.a)(m.c),l=u.sendRequest,x=u.status,O=u.data;Object(n.useEffect)((function(){l(i)}),[l,i]);var h,p=Object(n.useCallback)((function(){l(i),o(!1)}),[l,i]);return"pending"===x&&(h=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(j.a,{})})),"completed"===x&&O&&(h=Object(b.jsx)(f,{comments:O})),"completed"!==x||O&&0!==O.length||(h=Object(b.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(b.jsxs)("section",{className:d.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(_,{quoteId:i,onAddedComments:p}),h]})},C=c(52),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)(),c=t.quoteId,a=Object(r.a)(m.e,!0),i=a.sendRequest,d=a.status,u=a.data,l=a.error;return Object(n.useEffect)((function(){i(c)}),[i,c]),"pending"===d?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(j.a,{})}):l?Object(b.jsx)("p",{className:"centered",children:l}):u.author||u.text?Object(b.jsxs)(n.Fragment,{children:[u?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(q,{text:u.text,author:u.author,id:t.quoteId}),Object(b.jsx)(s.c,{path:"".concat(e.path),exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})})]}):Object(b.jsx)(s.b,{to:"/*"}),Object(b.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{className:"centered",children:"No Quote Found!"})}}}]);
//# sourceMappingURL=4.6bf8782f.chunk.js.map