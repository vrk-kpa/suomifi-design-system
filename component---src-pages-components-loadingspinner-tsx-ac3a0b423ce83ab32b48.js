"use strict";(self.webpackChunksuomifi_design_system=self.webpackChunksuomifi_design_system||[]).push([[8415],{93024:function(e,t,n){var i=n(67294),a=n(28117),r=n(39657);t.Z=function(e){var t=e.title,n=e.items;return i.createElement("section",{style:{background:a.R.colors.highlightLight3,margin:a.R.spacing.xl+" 0",padding:a.R.spacing.m,border:"1px solid "+a.R.colors.depthLight1}},i.createElement(r.X6,{variant:"h3",as:"h2"},t),i.createElement("ul",{style:{margin:0,padding:"0 0 0 "+a.R.spacing.s}},n.map((function(e,t){return!!e&&i.createElement("li",{key:t,style:{margin:a.R.spacing.m}},i.createElement(r.xv,null,e))}))))}},84406:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var i=n(63366),a=n(67294),r=n(28117),l=n(87462),o=n(4942),c=n(45987),s=n(15671),d=n(43144),m=n(60136),f=n(82963),u=n(61120),g=n(97166),p=n(69931),h=n.n(p),v=n(42137),x=n(75503),y=n(22690),E=n(26630),b=n(93927),Z=n(46248),S=["className","id","text","textAlign","textVisibility","variant","status"],R=["theme"];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,f.Z)(this,n)}}var k="fi-loadingSpinner",j={text:"".concat(k,"_text"),textAlignBottom:"".concat(k,"-textAlign--bottom"),textAlignRight:"".concat(k,"-textAlign--right"),small:"".concat(k,"--small"),failed:"".concat(k,"--failed"),loading:"".concat(k,"--loading"),success:"".concat(k,"--success"),icon:"".concat(k,"_icon")},_=function(e){(0,m.Z)(n,e);var t=O(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,d.Z)(n,[{key:"render",value:function(){var e,t=this.props,n=t.className,i=t.id,r=t.text,l=t.textAlign,s=void 0===l?"bottom":l,d=t.textVisibility,m=void 0===d?"visible":d,f=t.variant,u=void 0===f?"normal":f,g=t.status,p=void 0===g?"loading":g,v=(0,c.Z)(t,S);return a.createElement(y.lk,w({className:h()(k,n,(e={},(0,o.Z)(e,j.loading,"loading"===p),(0,o.Z)(e,j.failed,"failed"===p),(0,o.Z)(e,j.success,"success"===p),(0,o.Z)(e,j.small,"small"===u),(0,o.Z)(e,j.textAlignRight,"right"===s),e)),as:"section",id:i},v),"loading"===p&&a.createElement(b.Y,{icon:"preloader",className:j.icon}),"success"===p&&a.createElement(Z.JO,{icon:"checkCircleFilled",className:j.icon}),"failed"===p&&a.createElement(Z.JO,{icon:"errorFilled",className:j.icon}),"visible"===m?a.createElement(y.hh,{className:j.text},r):a.createElement(E.T,null,r))}}]),n}(a.Component),T=(0,g.default)((function(e){e.theme;var t=(0,c.Z)(e,R);return a.createElement(_,w({},t))})).withConfig({componentId:"sc-141i9nw-0"})(["",";"],(function(e){return function(e){return(0,g.css)([""," "," &.fi-loadingSpinner{display:block;text-align:center;& .fi-loadingSpinner_icon{display:inline-block;width:40px;height:40px;}& .fi-loadingSpinner_text{font-size:18px;font-weight:600;text-align:center;margin-top:6px;}&.fi-loadingSpinner-textAlign--right{display:flex;align-items:center;& .fi-loadingSpinner_text{margin-left:10px;margin-top:0;line-height:1.5em;}}&.fi-loadingSpinner--small{.fi-loadingSpinner_icon{width:24px;height:24px;}& .fi-loadingSpinner_text{font-size:16px;font-weight:normal;margin-top:0;}}&.fi-loadingSpinner--loading{& .fi-loadingSpinner_icon{animation:rotation 1.5s infinite linear;}}&.fi-loadingSpinner--success{.fi-icon-base-fill{fill:",";}}&.fi-loadingSpinner--failed{.fi-icon-base-fill{fill:",";}}}@keyframes rotation{from{transform:rotate(0deg);}to{transform:rotate(359deg);}}@media (prefers-reduced-motion){&.fi-loadingSpinner.fi-loadingSpinner--loading{.fi-loadingSpinner_icon{animation:rotation 10s infinite linear;}}}"],(0,v.bG)(e),(0,v.LZ)(e)("bodyTextSmall"),e.colors.successBase,e.colors.alertBase)}(e.theme)})),N=(0,a.forwardRef)((function(e,t){var n=(0,l.Z)({},e);return a.createElement(x.cY,null,(function(e){var i=e.suomifiTheme;return a.createElement(T,w({forwardedRef:t,theme:i},n))}))}));N.displayName="LoadingSpinner";var I=n(46747),A=n(2010),B=n(15083),P=n(10719),D=n(92167),L=n(93024),z=n(39657),M=n(39497),X=n(45786),V=n(91971),$=["title","desc","noCode"],F=["title","desc","noCode"],G=["title","desc","noCode"],J=function(e){var t=e.title,n=e.desc,l=e.noCode,o=((0,i.Z)(e,$),(0,a.useState)(!1)),c=o[0],s=o[1],d=(0,a.useState)(0),m=(d[0],d[1]),f=(0,a.useState)("loading"),u=f[0],g=f[1];return a.createElement(X.Z,{mainTitle:t,description:n,noCode:l},a.createElement(V.Z,{style:{marginBottom:r.R.spacing.s,display:"flex",flexDirection:"column"}},a.createElement(I.z,{disabled:c,onClick:function(){var e,t;g("loading"),c||(e=0,t=setInterval((function(){e>=100?(clearInterval(t),s(!1),e=0):e+=10,m(e)}),300)),s(!c)}},A.Mh),a.createElement("div",{"aria-live":"assertive","aria-busy":"loading"===u,style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100px",marginTop:r.R.spacing.m,border:"1px solid "+r.R.colors.depthLight1}},c&&a.createElement(N,{status:u,text:"success"!==u?A.$o:A.w8}))))},K=function(e){var t=e.title,n=e.desc,l=e.noCode,o=((0,i.Z)(e,F),(0,a.useState)(!1)),c=o[0],s=o[1],d=(0,a.useState)(0),m=(d[0],d[1]),f=(0,a.useState)("failed"),u=f[0],g=f[1];return a.createElement(X.Z,{mainTitle:t,description:n,noCode:l},a.createElement(V.Z,{style:{marginBottom:r.R.spacing.s,display:"flex",flexDirection:"column"}},a.createElement(I.z,{disabled:"loading"===u,onClick:function(){var e,t;c?g("failed"):(g("loading"),e=0,t=setInterval((function(){e>=100?(clearInterval(t),g("success"),e=0):e+=10,m(e)}),300)),s(!c)}},"success"===u?A.ey:A.Mh),a.createElement("div",{"aria-live":"assertive","aria-busy":"loading"===u,style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100px",marginTop:r.R.spacing.m,border:"1px solid "+r.R.colors.depthLight1}},c&&a.createElement(N,{status:u,text:"success"!==u?A.$o:A.w8}))))},Y=function(e){var t=e.title,n=e.desc,l=e.noCode,o=((0,i.Z)(e,G),(0,a.useState)(!1)),c=o[0],s=o[1],d=(0,a.useState)(0),m=(d[0],d[1]),f=(0,a.useState)("success"),u=f[0],g=f[1];return a.createElement(X.Z,{mainTitle:t,description:n,noCode:l},a.createElement(V.Z,{style:{marginBottom:r.R.spacing.s,display:"flex",flexDirection:"column"}},a.createElement(I.z,{disabled:"loading"===u,onClick:function(){var e,t;c?g("success"):(g("loading"),e=0,t=setInterval((function(){e>=100?(clearInterval(t),g("failed"),e=0):e+=10,m(e)}),300)),s(!c)}},"failed"===u?A.ey:A.Mh),a.createElement("div",{"aria-live":"assertive","aria-busy":"loading"===u,style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100px",marginTop:r.R.spacing.m,border:"1px solid "+r.R.colors.depthLight1}},c&&a.createElement(N,{status:u,text:"failed"!==u?A.$o:A.o_}))))},Q=function(){return a.createElement(B.Z,{sideNavData:D.Z},a.createElement(P.Z,{title:A.TN}),a.createElement(z.X6,{variant:"h1"},A.TN),a.createElement(z.nv,{variant:"lead"},a.createElement(z.xv,{variant:"lead"},A.mf)),a.createElement(X.Z,null,a.createElement(V.Z,{style:{marginBottom:r.R.spacing.s}},a.createElement(N,{status:"loading",variant:"normal",textAlign:"right",text:"Loading"}))),a.createElement(L.Z,{title:A.gG,items:A.TK}),A.NS.map((function(e,t){return a.createElement(M.Z,{key:t,mainTitle:e.title,paragraphs:e.paragraphs,links:e.links})})),a.createElement(J,{title:A.gS,desc:A.u4,noCode:!0}),a.createElement(K,{title:A.XV,desc:A.RQ,noCode:!0}),a.createElement(Y,{title:A.XM,desc:A.K9,noCode:!0}))}}}]);
//# sourceMappingURL=component---src-pages-components-loadingspinner-tsx-ac3a0b423ce83ab32b48.js.map