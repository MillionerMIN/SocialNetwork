(this["webpackJsonpsocialnet-app"]=this["webpackJsonpsocialnet-app"]||[]).push([[6],{227:function(t,e,a){t.exports={container:"Container_container__lHqDY"}},229:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return n}));var s=function(t){if(!t)return"Field is required"},n=function(t){return function(e){if(e&&e.length>t)return"Max length ".concat(t," symbels")}}},230:function(t,e,a){"use strict";a.d(e,"c",(function(){return j})),a.d(e,"b",(function(){return d})),a.d(e,"a",(function(){return b})),a.d(e,"d",(function(){return l}));var s=a(3),n=a(59),c=(a(0),a(109)),i=a(231),r=a.n(i),o=a(1),u=function(t){var e=t.meta,a=e.error,s=e.touched,n=t.children,c=a&&s;return Object(o.jsxs)("div",{className:c?r.a.error:"",children:[n,c&&Object(o.jsx)("span",{children:a})]})},j=function(t){var e=t.input,a=Object(n.a)(t,["input"]);return Object(o.jsx)(u,Object(s.a)(Object(s.a)({},t),{},{children:Object(o.jsx)("textarea",Object(s.a)(Object(s.a)({},e),a))}))},d=function(t){var e=t.input,a=(t.meta,Object(n.a)(t,["input","meta"]));return Object(o.jsx)(u,Object(s.a)(Object(s.a)({},t),{},{children:Object(o.jsx)("input",Object(s.a)(Object(s.a)({},e),a))}))},b=function(t){return Object(o.jsx)(u,Object(s.a)(Object(s.a)({},t),{},{children:Object(o.jsx)("div",Object(s.a)(Object(s.a)({},t),{},{children:t.error}))}))},l=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsx)(c.a,Object(s.a)(Object(s.a)({name:t,placeholder:e,component:a,validate:n},i),r))}},231:function(t,e,a){t.exports={error:"FormControls_error___hLaz"}},233:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var s=a(3),n=a(59),c=(a(0),a(6)),i=a(23),r=a(1),o=function(t){return{isAuth:t.auth.isAuth}};function u(t){return Object(i.b)(o)((function(e){var a=e.isAuth,i=Object(n.a)(e,["isAuth"]);return a?Object(r.jsx)(t,Object(s.a)({},i)):Object(r.jsx)(c.a,{to:"/login"})}))}},253:function(t,e,a){t.exports={dialogs:"Chats_dialogs__102i9",visitors:"Chats_visitors__rKPeW",title:"Chats_title__3nLll",visitor:"Chats_visitor__5e6Ur",dialog:"Chats_dialog__1kTv-",prof:"Chats_prof__2oRJ2",chats:"Chats_chats__3FOMc",subtitle:"Chats_subtitle__2LEZs",active:"Chats_active__1bDLe",subtext:"Chats_subtext__2iFhQ",header:"Chats_header__3cg_D",writeMessages:"Chats_writeMessages__1HCFC"}},313:function(t,e,a){"use strict";a.r(e);var s=a(3),n=a(35),c=a(36),i=a(38),r=a(37),o=a(67),u=a(0),j=a(1);function d(t){var e=t.message;return Object(j.jsx)("div",{children:e})}var b=a(253),l=a.n(b),h=a(21);function O(t){var e=t.name,a=t.id,s=t.text,n="/chats/"+a;return Object(j.jsx)("div",{className:l.a.dialog,children:Object(j.jsxs)(h.b,{to:n,activeClassName:l.a.active,className:l.a.prof,children:[Object(j.jsx)("img",{src:"https://static-s.aa-cdn.net/img/gp/20600007187994/ytM4AkndmSigMvuUChoY1JuV1VtjoBrbMm2E-B0f9q19lVJ633gm6_-Oexe1PPaHCG0=s300?v=1",alt:"ava"}),Object(j.jsx)("div",{className:l.a.subtitle,children:e}),Object(j.jsx)("p",{className:l.a.subtext,children:s})]})})}var v=a(227),m=a.n(v),f=a(109),_=a(110),x=a(229),g=a(230);var p=Object(x.a)(50),C=Object(_.a)({form:"dialogAddMessageForm"})((function(t){return Object(j.jsxs)("form",{className:l.a.writeMessages,onSubmit:t.handleSubmit,children:[Object(j.jsx)(f.a,{component:g.c,name:"message",validate:[x.b,p],placeholder:"Enter your message"}),Object(j.jsx)("button",{children:"Send"})]})})),N=function(t){var e=t.state,a=t.sendMessageAC,s=e.dialog.map((function(t){return Object(j.jsx)(O,{name:t.name,id:t.id,text:t.text},t.id)})),n=e.chats.map((function(t){return Object(j.jsx)(d,{id:t.id,message:t.message},t.id)}));return Object(j.jsx)("div",{className:m.a.container,children:Object(j.jsxs)("div",{className:l.a.dialogs,children:[Object(j.jsxs)("div",{className:l.a.visitors,children:[Object(j.jsx)("div",{className:l.a.title,children:"Chats"}),Object(j.jsx)("div",{className:l.a.visitor,children:s})]}),Object(j.jsxs)("div",{className:l.a.chats,children:[Object(j.jsx)("div",{className:l.a.header,children:"Chat with Kyle Fisher"}),Object(j.jsx)("div",{className:l.a.messages,children:n}),Object(j.jsx)(C,{onSubmit:function(t){a(t.message)}})]})]})})},M=a(23),A=a(233),F=a(6),w=a(24),y=function(t){Object(i.a)(a,t);var e=Object(r.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(j.jsx)(N,Object(s.a)({},this.props))}}]),a}(u.Component);e.default=Object(w.d)(Object(M.b)((function(t){return{state:t.chatsPage}}),{sendMessageAC:o.b}),F.f,A.a)(y)}}]);
//# sourceMappingURL=6.c85e92ba.chunk.js.map