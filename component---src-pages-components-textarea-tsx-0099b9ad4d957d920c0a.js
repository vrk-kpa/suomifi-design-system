"use strict";(self.webpackChunksuomifi_design_system=self.webpackChunksuomifi_design_system||[]).push([[6640],{3549:function(e,t,r){r.d(t,{Q:function(){return y}});var n=r(4942),a=r(45987),o=r(67294),i=r(69931),l=r.n(i),c=r(97166),s=r(50890),u=r(75503),f=r(42137),d=["className","theme","children"],p=["children"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=(0,c.default)((function(e){var t=e.className;e.theme;var r=e.children,n=(0,a.Z)(e,d);return o.createElement(s.I,b(b({},n),{},{className:l()(t,"fi-hint-text",{})}),r)})).withConfig({componentId:"sc-ketar6-0"})(["",""],(function(e){return function(e){return(0,c.css)(["color:",";",";&.fi-hint-text{display:block;}"],e.colors.blackBase,(0,f.LZ)(e)("bodyTextSmall"))}(e.theme)})),y=(0,o.forwardRef)((function(e,t){var r=e.children,n=(0,a.Z)(e,p);return r?o.createElement(u.cY,null,(function(e){var a=e.suomifiTheme;return o.createElement(h,b({forwardedRef:t,theme:a},n),r)})):null}));y.displayName="HintText"},191:function(e,t,r){r.d(t,{_:function(){return g}});var n=r(4942),a=r(70885),o=r(45987),i=r(67294),l=r(69931),c=r.n(l),s=r(97166),u=r(75503),f=r(42137),d=r(26630),p=r(22690),m=r(50890),b=["className","contentStyle","contentClassName","theme","labelMode","wrapperProps","children","asProp","optionalText","tooltipComponent","forceTooltipRerender"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x="fi-label",v={labelSpan:"".concat(x,"_label-span"),optionalText:"".concat(x,"_optional-text")},O=(0,s.default)((function(e){var t=e.className,r=e.contentStyle,n=e.contentClassName;e.theme;var l,s=e.labelMode,u=void 0===s?"visible":s,f=e.wrapperProps,h=e.children,O=e.asProp,g=void 0===O?"label":O,w=e.optionalText,E=e.tooltipComponent,j=e.forceTooltipRerender,P=void 0!==j&&j,T=(0,o.Z)(e,b),Z=(0,i.useState)(null),k=(0,a.Z)(Z,2),z=k[0],N=k[1];return i.createElement(p.lk,y(y({className:c()(t,x)},f),{},{forwardedRef:function(e){return N(e)}}),"hidden"===u?i.createElement(d.T,y({as:g},T),h,w&&"(".concat(w,")")):i.createElement(i.Fragment,null,i.createElement(m.I,y(y({as:g,style:r?y({},r):{}},T),{},{className:c()(v.labelSpan,n)}),h,w&&i.createElement(m.I,{className:v.optionalText}," (".concat(w,")"))),!!E&&(l=E,(0,i.isValidElement)(l)?(0,i.cloneElement)(l,{anchorElement:z,key:P?Date.now():null}):null)))})).withConfig({componentId:"sc-cooxd2-0"})(["",""],(function(e){return function(e){return(0,s.css)(["&.fi-label{& .fi-label_label-span{",";display:inline-block;vertical-align:middle;color:",";& .fi-label_optional-text{",";}& .fi-tooltip{margin-left:",";}}}"],(0,f.LZ)(e)("actionElementInnerTextBold"),e.colors.blackBase,e.typography.bodyTextSmall,e.spacing.insetS)}(e.theme)})),g=function(e){return i.createElement(u.cY,null,(function(t){var r=t.suomifiTheme;return i.createElement(O,y({theme:r},e))}))};g.displayName="Label"},82582:function(e,t,r){r.d(t,{r:function(){return v}});var n=r(4942),a=r(45987),o=r(67294),i=r(69931),l=r.n(i),c=r(97166),s=r(75503),u=r(50890),f=r(42137),d=["className","children","disabled","status","theme","ariaLiveMode"],p=["children"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h="fi-status-text",y={error:"".concat(h,"--error")},x=(0,c.default)((function(e){var t=e.className,r=e.children,i=e.disabled,c=e.status;e.theme;var s=e.ariaLiveMode,f=void 0===s?"polite":s,p=(0,a.Z)(e,d),m=i?{"aria-live":"off"}:{"aria-live":f};return o.createElement(u.I,b(b(b({},p),m),{},{className:l()(t,h,(0,n.Z)({},y.error,"error"===c)),"aria-atomic":"true"}),r)})).withConfig({componentId:"sc-18fcmym-0"})(["",""],(function(e){return function(e){return(0,c.css)(["",";color:",";font-size:14px;line-height:20px;&.fi-status-text{display:block;&.fi-status-text--error{color:",";}}"],(0,f.LZ)(e)("bodySemiBoldSmall"),e.colors.blackBase,e.colors.alertBase)}(e.theme)})),v=(0,o.forwardRef)((function(e,t){var r=e.children,n=(0,a.Z)(e,p);return o.createElement(s.cY,null,(function(e){var a=e.suomifiTheme;return o.createElement(x,b({forwardedRef:t,theme:a},n),r)}))}));v.displayName="StatusText"},93024:function(e,t,r){var n=r(67294),a=r(28117),o=r(39657);t.Z=function(e){var t=e.title,r=e.items;return n.createElement("section",{style:{background:a.R.colors.highlightLight3,margin:a.R.spacing.xl+" 0",padding:a.R.spacing.m,border:"1px solid "+a.R.colors.depthLight1}},n.createElement(o.X6,{variant:"h3",as:"h2"},t),n.createElement("ul",{style:{margin:0,padding:"0 0 0 "+a.R.spacing.s}},r.map((function(e,t){return!!e&&n.createElement("li",{key:t,style:{margin:a.R.spacing.m}},n.createElement(o.xv,null,e))}))))}},34884:function(e,t,r){r.r(t),r.d(t,{default:function(){return V}});var n=r(67294),a=r(28117),o=r(4942),i=r(45987),l=r(15671),c=r(43144),s=r(60136),u=r(82963),f=r(61120),d=r(97166),p=r(69931),m=r.n(p),b=r(44647),h=r(49229),y=r(75503),x=r(22690),v=r(58642),O=["forwardedRef"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=(0,d.css)([""," "," "," "," display:inline-block;max-width:100%;"],v.i.normalize.html,v.i.normalize.textarea,(0,v.O)(["::-webkit-input-placeholder"]),v.i.common),j=(0,d.default)((function(e){var t=e.forwardedRef,r=(0,i.Z)(e,O);return n.createElement("textarea",w(w({},r),{},{ref:t}))})).withConfig({componentId:"sc-vdx405-0"})(["",""],E),P=r(191),T=r(3549),Z=r(82582),k=r(42137),z=["id","className","disabled","children","onClick","labelMode","labelText","hintText","status","statusText","visualPlaceholder","resize","optionalText","aria-describedby","fullWidth","containerProps","forwardedRef","statusTextAriaLiveMode","tooltipComponent"],N=["theme"],R=["id"];function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,f.Z)(e);if(t){var a=(0,f.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,u.Z)(this,r)}}var C="fi-textarea",B={fullWidth:"".concat(C,"--full-width"),textareaContainer:"".concat(C,"_textarea-element-container"),textarea:"".concat(C,"_textarea"),resizeHorizontal:"".concat(C,"_textarea-resize--horizontal"),resizeBoth:"".concat(C,"_textarea-resize--both"),resizeNone:"".concat(C,"_textarea-resize--none"),disabled:"".concat(C,"--disabled"),error:"".concat(C,"--error"),statusTextHasContent:"".concat(C,"_statusText--has-content")},L=function(e){(0,s.Z)(r,e);var t=_(r);function r(){return(0,l.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"render",value:function(){var e,t,r=this.props,a=r.id,l=r.className,c=r.disabled,s=void 0!==c&&c,u=r.children,f=r.onClick,d=r.labelMode,p=r.labelText,h=r.hintText,y=r.status,v=r.statusText,O=r.visualPlaceholder,g=r.resize,w=r.optionalText,E=r["aria-describedby"],k=r.fullWidth,N=r.containerProps,R=r.forwardedRef,D=r.statusTextAriaLiveMode,_=void 0===D?"assertive":D,L=r.tooltipComponent,I=(0,i.Z)(r,z),M=s?{}:{onMouseDown:f},F=v?"".concat(a,"-statusText"):void 0,H=h?"".concat(a,"-hintText"):void 0;return n.createElement(x.hh,S(S({},N),{},{className:m()(C,l,(e={},(0,o.Z)(e,B.disabled,!!s),(0,o.Z)(e,B.error,"error"===y&&!s),(0,o.Z)(e,B.fullWidth,k),e))}),n.createElement(P._,{htmlFor:a,labelMode:d,optionalText:w,tooltipComponent:L},p),n.createElement(T.Q,{id:H},h),n.createElement(x.hh,{className:B.textareaContainer},n.createElement(j,S(S(S({id:a,className:m()(B.textarea,(t={},(0,o.Z)(t,B.resizeBoth,"both"===g),(0,o.Z)(t,B.resizeHorizontal,"horizontal"===g),(0,o.Z)(t,B.resizeNone,"none"===g),t)),disabled:s,defaultValue:u,forwardedRef:R,placeholder:O,"aria-invalid":"error"===y},(0,b.I5)("aria-describedby",[F,H,E])),I),M))),n.createElement(Z.r,{id:F,className:m()((0,o.Z)({},B.statusTextHasContent,!!v)),status:y,disabled:s,ariaLiveMode:_},v))}}]),r}(n.Component),I=(0,d.default)((function(e){e.theme;var t=(0,i.Z)(e,N);return n.createElement(L,S({},t))})).withConfig({componentId:"sc-fz1c6p-0"})(["",""],(function(e){return function(e){return(0,d.css)([""," "," color:",";width:290px;&.fi-textarea{display:flex;flex-direction:column;& .fi-textarea_statusText--has-content{margin-top:",";}& .fi-textarea_textarea-element-container{margin-top:",";&:focus-within{outline:none;position:relative;&::after{","}}}& .fi-textarea_textarea{display:block;resize:vertical;border-radius:2px;border:1px solid ",";box-shadow:",";padding:8px 14px 13px 10px;",";width:100%;background-color:",";&:focus{outline:none;}&::placeholder{font-style:italic;color:",";opacity:1;}&-resize--horizontal{resize:horizontal;}&-resize--both{resize:both;}&-resize--none{resize:none;}}& .fi-status-text{display:block;line-height:18px;}&.fi-textarea--disabled{color:",";cursor:not-allowed;& .fi-textarea_textarea{background-color:",";}}&.fi-textarea--error{& .fi-textarea_textarea{border:2px solid ",";}}}&.fi-textarea--full-width{width:100%;}"],(0,k.bG)(e),(0,k.LZ)(e)("bodyText"),e.colors.blackBase,e.spacing.xxs,e.spacing.insetL,e.focus.absoluteFocus,e.colors.depthDark3,e.shadows.actionElementBoxShadow,e.typography.bodyTextSmall,e.colors.whiteBase,e.colors.depthDark2,e.colors.depthBase,e.colors.depthLight3,e.colors.alertBase)}(e.theme)})),M=(0,n.forwardRef)((function(e,t){var r=e.id,a=(0,i.Z)(e,R);return n.createElement(y.cY,null,(function(e){var o=e.suomifiTheme;return n.createElement(h.z,{id:r},(function(e){return n.createElement(I,S({theme:o,id:e,forwardedRef:t},a))}))}))}));M.displayName="Textarea";var F=r(50607),H=r(15083),W=r(10719),Y=r(92167),A=r(93024),X=r(39657),G=r(45786),K=r(39497),Q=r(91971),V=function(){return n.createElement(H.Z,{sideNavData:Y.Z},n.createElement(W.Z,{title:F.TN}),n.createElement(X.X6,{variant:"h1"},F.TN),n.createElement(X.nv,{variant:"lead"},n.createElement(X.xv,{variant:"lead"},F.mf)),n.createElement(G.Z,null,n.createElement(Q.Z,{style:{marginBottom:a.R.spacing.s}},n.createElement(M,{labelText:F.P_,hintText:F.tC,visualPlaceholder:F._q}))),n.createElement(A.Z,{title:F.gG,items:F.TK}),F.NS.map((function(e,t){return n.createElement(K.Z,{key:t,mainTitle:e.title,paragraphs:e.paragraphs,links:e.links})})),n.createElement(G.Z,{mainTitle:F.aA,description:F.K9,exampleFirst:!0,filterProps:[]},n.createElement(Q.Z,null,n.createElement(M,{labelText:F.sc,status:"error",hintText:F.f2,visualPlaceholder:F.Xu,statusText:F.yE}))),n.createElement(G.Z,{mainTitle:F.nk,description:F.vB,exampleFirst:!0,filterProps:[]},n.createElement(Q.Z,null,n.createElement(M,{labelText:F.FU,disabled:!0}))))}}}]);
//# sourceMappingURL=component---src-pages-components-textarea-tsx-0099b9ad4d957d920c0a.js.map