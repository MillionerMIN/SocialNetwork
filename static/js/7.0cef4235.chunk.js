(this["webpackJsonpsocialnet-app"]=this["webpackJsonpsocialnet-app"]||[]).push([[7],{227:function(e,t,n){e.exports={container:"Container_container__lHqDY"}},229:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t&&t.length>e)return"Max length ".concat(e," symbels")}}},230:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d}));var r=n(3),c=n(59),i=(n(0),n(109)),a=n(231),o=n.n(a),u=n(1),s=function(e){var t=e.meta,n=t.error,r=t.touched,c=e.children,i=n&&r;return Object(u.jsxs)("div",{className:i?o.a.error:"",children:[c,i&&Object(u.jsx)("span",{children:n})]})},b=function(e){var t=e.input,n=Object(c.a)(e,["input"]);return Object(u.jsx)(s,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(u.jsx)(s,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){return Object(u.jsx)(s,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("div",Object(r.a)(Object(r.a)({},e),{},{children:e.error}))}))},d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(u.jsx)(i.a,Object(r.a)(Object(r.a)({name:e,placeholder:t,component:n,validate:c},a),o))}},231:function(e,t,n){e.exports={error:"FormControls_error___hLaz"}},305:function(e,t,n){e.exports={loginBlock:"Login_loginBlock__2PPB2",error:"Login_error__6SziI"}},314:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(35),i=n(36),a=n(38),o=n(37),u=n(0),s=n.n(u),b=n(23),j=n(109),l=n(110),d=n(22),O=n(82),h=n(305),m=n.n(h),f=n(227),p=n.n(f),x=n(230),v=n(229),g=n(6),_=n(1),k=Object(l.a)({form:"login"})((function(e){var t=e.error,n=e.handleSubmit;return Object(_.jsxs)("form",{onSubmit:n,children:[Object(x.d)("email","Email",x.b,[v.b]),Object(x.d)("password","Password",x.b,[v.b],{type:"password"}),Object(x.d)("rememberMe",null,x.b,[],{type:"checkbox"},"rememberMe"),Object(_.jsx)("div",{children:Object(_.jsx)("label",{htmlFor:"rememberMe",children:"rememberMe"})}),t?Object(_.jsxs)("div",{className:m.a.error,children:[Object(_.jsx)(j.a,{name:"error",component:x.a}),t]}):"",Object(_.jsx)("button",{children:"LOGIN"})]})})),C=Object(b.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginTC:d.c,loginoutTC:d.d})((function(e){var t=e.isAuth,n=e.loginTC,r=e.auth,c=r.email,i=r.login;return t?Object(_.jsx)(g.a,{to:"/profile"}):Object(_.jsx)("div",{className:p.a.container,children:t?Object(_.jsx)(O.a,{email:c,login:i}):Object(_.jsxs)("div",{className:m.a.loginBlock,children:[Object(_.jsx)("h1",{children:"Login"}),Object(_.jsx)(k,{onSubmit:function(e){var t=e.email,r=e.password,c=e.rememberMe;n(t,r,c)}})]})})})),M=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getAuthUserDataTC,n=e.auth;t(n.id,n.email,n.email)}},{key:"render",value:function(){return Object(_.jsx)(C,Object(r.a)({},this.props))}}]),n}(s.a.Component);t.default=Object(b.b)((function(e){return{auth:e.auth}}),{getAuthUserDataTC:d.b})(M)}}]);
//# sourceMappingURL=7.0cef4235.chunk.js.map