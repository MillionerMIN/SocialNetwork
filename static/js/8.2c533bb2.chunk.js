(this["webpackJsonpsocialnet-app"]=this["webpackJsonpsocialnet-app"]||[]).push([[8],{228:function(t,e,s){"use strict";e.a=s.p+"static/media/user.62bc9fd6.png"},234:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var r=s(61);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],r=!0,a=!1,o=void 0;try{for(var n,i=t[Symbol.iterator]();!(r=(n=i.next()).done)&&(s.push(n.value),!e||s.length!==e);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return s}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},236:function(t,e,s){t.exports={profile:"ProfileUser_profile__3reBe",bg:"ProfileUser_bg__cric7",photo:"ProfileUser_photo__2wLKu",title:"ProfileUser_title__1emXh",descr:"ProfileUser_descr__A7Ceb",status:"ProfileUser_status__3aznk"}},254:function(t,e,s){"use strict";s.r(e);var r=s(3),a=s(35),o=s(36),n=s(38),i=s(37),c=s(0),u=s.n(c),l=s(23),p=s(234),f=s(236),b=s.n(f),d=s.p+"static/media/ProfileImg.02b58e00.jpg",h=s(228),j=s(62),m=s(1),O=function(t){var e,s=t.profile,r=t.status,a=t.updateStatus,o=Object(c.useState)(!1),n=Object(p.a)(o,2),i=n[0],u=n[1],l=Object(c.useState)(r),f=Object(p.a)(l,2),O=f[0],g=f[1];Object(c.useEffect)((function(){console.log("useEffect status"),g(r)}),[r]);return s?Object(m.jsxs)("div",{className:b.a.profile,children:[Object(m.jsx)("img",{className:b.a.bg,src:d,alt:"profileImg"}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:b.a.photo,src:null!==s.photos.large?s.photos.large:h.a,alt:"userPhoto"})}),Object(m.jsx)("div",{className:b.a.title,children:null===(e=t.profile)||void 0===e?void 0:e.fullName}),!i&&Object(m.jsx)("span",{onDoubleClick:function(){u(!0)},className:b.a.descr,children:r||"---"}),i&&Object(m.jsx)("input",{onChange:function(t){g(t.currentTarget.value)},onBlur:function(){u(!1),a(O)},autoFocus:!0,className:b.a.descr,value:O})]}):Object(m.jsx)(j.a,{})},g=s(49),v=s(6),_=s(24),y=function(t){Object(n.a)(s,t);var e=Object(i.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.id),this.props.getProfileTC(t),this.props.getStatusTC(t)}},{key:"componentDidUpdate",value:function(t,e){t.status!==this.props.status&&this.setState({state:this.props.status}),console.log("componentDidUpdate")}},{key:"render",value:function(){return console.log("render"),Object(m.jsx)(O,Object(r.a)(Object(r.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusTC}))}}]),s}(u.a.Component);e.default=Object(_.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,id:t.auth.id}}),{getProfileTC:g.b,getStatusTC:g.c,updateStatusTC:g.e}),v.f)(y)}}]);
//# sourceMappingURL=8.2c533bb2.chunk.js.map