"use strict";(self.webpackChunksuomifi_design_system=self.webpackChunksuomifi_design_system||[]).push([[9295],{3549:function(e,t,n){n.d(t,{Q:function(){return y}});var r=n(4942),i=n(45987),o=n(67294),a=n(69931),c=n.n(a),l=n(97166),s=n(50890),u=n(75503),p=n(42137),f=["className","theme","children"],d=["children"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=(0,l.default)((function(e){var t=e.className;e.theme;var n=e.children,r=(0,i.Z)(e,f);return o.createElement(s.I,h(h({},r),{},{className:c()(t,"fi-hint-text",{})}),n)})).withConfig({componentId:"sc-ketar6-0"})(["",""],(function(e){return function(e){return(0,l.css)(["color:",";",";&.fi-hint-text{display:block;}"],e.colors.blackBase,(0,p.LZ)(e)("bodyTextSmall"))}(e.theme)})),y=(0,o.forwardRef)((function(e,t){var n=e.children,r=(0,i.Z)(e,d);return n?o.createElement(u.cY,null,(function(e){var i=e.suomifiTheme;return o.createElement(b,h({forwardedRef:t,theme:i},r),n)})):null}));y.displayName="HintText"},191:function(e,t,n){n.d(t,{_:function(){return O}});var r=n(4942),i=n(70885),o=n(45987),a=n(67294),c=n(69931),l=n.n(c),s=n(97166),u=n(75503),p=n(42137),f=n(26630),d=n(22690),m=n(50890),h=["className","contentStyle","contentClassName","theme","labelMode","wrapperProps","children","asProp","optionalText","tooltipComponent","forceTooltipRerender"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v="fi-label",g={labelSpan:"".concat(v,"_label-span"),optionalText:"".concat(v,"_optional-text")},x=(0,s.default)((function(e){var t=e.className,n=e.contentStyle,r=e.contentClassName;e.theme;var c,s=e.labelMode,u=void 0===s?"visible":s,p=e.wrapperProps,b=e.children,x=e.asProp,O=void 0===x?"label":x,w=e.optionalText,E=e.tooltipComponent,Z=e.forceTooltipRerender,T=void 0!==Z&&Z,j=(0,o.Z)(e,h),P=(0,a.useState)(null),k=(0,i.Z)(P,2),R=k[0],N=k[1];return a.createElement(d.lk,y(y({className:l()(t,v)},p),{},{forwardedRef:function(e){return N(e)}}),"hidden"===u?a.createElement(f.T,y({as:O},j),b,w&&"(".concat(w,")")):a.createElement(a.Fragment,null,a.createElement(m.I,y(y({as:O,style:n?y({},n):{}},j),{},{className:l()(g.labelSpan,r)}),b,w&&a.createElement(m.I,{className:g.optionalText}," (".concat(w,")"))),!!E&&(c=E,(0,a.isValidElement)(c)?(0,a.cloneElement)(c,{anchorElement:R,key:T?Date.now():null}):null)))})).withConfig({componentId:"sc-cooxd2-0"})(["",""],(function(e){return function(e){return(0,s.css)(["&.fi-label{& .fi-label_label-span{",";display:inline-block;vertical-align:middle;color:",";& .fi-label_optional-text{",";}& .fi-tooltip{margin-left:",";}}}"],(0,p.LZ)(e)("actionElementInnerTextBold"),e.colors.blackBase,e.typography.bodyTextSmall,e.spacing.insetS)}(e.theme)})),O=function(e){return a.createElement(u.cY,null,(function(t){var n=t.suomifiTheme;return a.createElement(x,y({theme:n},e))}))};O.displayName="Label"},82582:function(e,t,n){n.d(t,{r:function(){return g}});var r=n(4942),i=n(45987),o=n(67294),a=n(69931),c=n.n(a),l=n(97166),s=n(75503),u=n(50890),p=n(42137),f=["className","children","disabled","status","theme","ariaLiveMode"],d=["children"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b="fi-status-text",y={error:"".concat(b,"--error")},v=(0,l.default)((function(e){var t=e.className,n=e.children,a=e.disabled,l=e.status;e.theme;var s=e.ariaLiveMode,p=void 0===s?"polite":s,d=(0,i.Z)(e,f),m=a?{"aria-live":"off"}:{"aria-live":p};return o.createElement(u.I,h(h(h({},d),m),{},{className:c()(t,b,(0,r.Z)({},y.error,"error"===l)),"aria-atomic":"true"}),n)})).withConfig({componentId:"sc-18fcmym-0"})(["",""],(function(e){return function(e){return(0,l.css)(["",";color:",";font-size:14px;line-height:20px;&.fi-status-text{display:block;&.fi-status-text--error{color:",";}}"],(0,p.LZ)(e)("bodySemiBoldSmall"),e.colors.blackBase,e.colors.alertBase)}(e.theme)})),g=(0,o.forwardRef)((function(e,t){var n=e.children,r=(0,i.Z)(e,d);return o.createElement(s.cY,null,(function(e){var i=e.suomifiTheme;return o.createElement(v,h({forwardedRef:t,theme:i},r),n)}))}));g.displayName="StatusText"},54384:function(e,t,n){n.d(t,{K:function(){return p}});var r=n(15671),i=n(43144),o=n(97326),a=n(60136),c=n(82963),l=n(61120),s=n(4942);function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var p=function(e){(0,a.Z)(n,e);var t=u(n);function n(){var e;(0,r.Z)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return e=t.call.apply(t,[this].concat(a)),(0,s.Z)((0,o.Z)(e),"timeout",null),(0,s.Z)((0,o.Z)(e),"debouncer",(function(t,n){if(t)if(e.props.waitFor){e.cancelTimeout();var r=e.props.waitFor;e.timeout=setTimeout((function(){t(n)}),r)}else t(n)})),(0,s.Z)((0,o.Z)(e),"cancelDebounce",(function(){e.cancelTimeout()})),e}return(0,i.Z)(n,[{key:"componentWillUnmount",value:function(){this.cancelTimeout()}},{key:"cancelTimeout",value:function(){null!==this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}},{key:"render",value:function(){var e=this.props.children;return e?e(this.debouncer,this.cancelDebounce):null}}]),n}(n(67294).Component)},20849:function(e,t,n){n.d(t,{X:function(){return f}});var r=n(4942),i=n(45987),o=n(67294),a=n(97166),c=n(58642),l=["type","forwardedRef"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,a.css)([""," "," "," "," display:inline-block;max-width:100%;"],c.i.normalize.html,c.i.normalize.input,(0,c.O)(["::-webkit-input-placeholder"]),c.i.common),f=(0,a.default)((function(e){var t=e.type,n=e.forwardedRef,r=(0,i.Z)(e,l);return o.createElement("input",u(u({},r),{},{type:t||"text",ref:n}))})).withConfig({componentId:"sc-fkzflm-0"})(["",""],p)},93024:function(e,t,n){var r=n(67294),i=n(28117),o=n(39657);t.Z=function(e){var t=e.title,n=e.items;return r.createElement("section",{style:{background:i.R.colors.highlightLight3,margin:i.R.spacing.xl+" 0",padding:i.R.spacing.m,border:"1px solid "+i.R.colors.depthLight1}},r.createElement(o.X6,{variant:"h3",as:"h2"},t),r.createElement("ul",{style:{margin:0,padding:"0 0 0 "+i.R.spacing.s}},n.map((function(e,t){return!!e&&r.createElement("li",{key:t,style:{margin:i.R.spacing.m}},r.createElement(o.xv,null,e))}))))}},29216:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(67294),i=n(28117),o=n(4942),a=n(45987),c=n(15671),l=n(43144),s=n(60136),u=n(82963),p=n(61120),f=n(97166),d=n(69931),m=n.n(d),h=n(49229),b=n(75503),y=n(54384),v=n(44647),g=n(22690),x=n(20849),O=n(50890),w=n(46248),E=n(191),Z=n(82582),T=n(3549),j=n(42137),P=n(35605),k=["className","labelText","labelMode","onChange","wrapperProps","optionalText","status","statusText","hintText","visualPlaceholder","id","type","fullWidth","icon","iconProps","forwardedRef","debounce","statusTextAriaLiveMode","aria-describedby","tooltipComponent"],R=["theme"],N=["id"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,p.Z)(e);if(t){var i=(0,p.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var S="fi-text-input",L={baseClassName:S,fullWidth:"".concat(S,"--full-width"),disabled:"".concat(S,"--disabled"),error:"".concat(S,"--error"),success:"".concat(S,"--success"),labelIsVisible:"".concat(S,"_label--visible"),icon:"".concat(S,"_with-icon"),inputElementContainer:"".concat(S,"_input-element-container"),inputElement:"".concat(S,"_input"),styleWrapper:"".concat(S,"_wrapper"),statusTextHasContent:"".concat(S,"_statusText--has-content")},B=function(e){(0,s.Z)(n,e);var t=C(n);function n(){return(0,c.Z)(this,n),t.apply(this,arguments)}return(0,l.Z)(n,[{key:"render",value:function(){var e,t=this.props,n=t.className,i=t.labelText,c=t.labelMode,l=t.onChange,s=t.wrapperProps,u=t.optionalText,p=t.status,f=t.statusText,d=t.hintText,h=t.visualPlaceholder,b=t.id,j=t.type,P=void 0===j?"text":j,R=t.fullWidth,N=t.icon,_=t.iconProps,C=t.forwardedRef,B=t.debounce,I=t.statusTextAriaLiveMode,M=void 0===I?"assertive":I,F=t["aria-describedby"],W=t.tooltipComponent,X=(0,a.Z)(t,k),z=N||(null==_?void 0:_.icon),H="".concat(b,"-hintText"),A="".concat(b,"-statusText");return r.createElement(g.hh,D(D({},s),{},{className:m()(S,n,(e={},(0,o.Z)(e,L.disabled,!!X.disabled),(0,o.Z)(e,L.icon,void 0!==z),(0,o.Z)(e,L.error,"error"===p),(0,o.Z)(e,L.success,"success"===p),(0,o.Z)(e,L.fullWidth,R),e))}),r.createElement(O.I,{className:L.styleWrapper},r.createElement(E._,{htmlFor:b,labelMode:c,optionalText:u,className:m()((0,o.Z)({},L.labelIsVisible,"hidden"!==c)),tooltipComponent:W},i),r.createElement(T.Q,{id:H},d),r.createElement(g.hh,{className:L.inputElementContainer},r.createElement(y.K,{waitFor:B},(function(e){return r.createElement(x.X,D(D(D(D({},X),{},{id:b,className:L.inputElement,type:P,forwardedRef:C,placeholder:h},{"aria-invalid":"error"===p}),(0,v.I5)("aria-describedby",[f?A:void 0,d?H:void 0,F])),{},{onChange:function(t){l&&e(l,t.currentTarget.value)}}))})),z&&r.createElement(w.JO,D({},D(D({},_),{},{icon:z})))),r.createElement(Z.r,{id:A,className:m()((0,o.Z)({},L.statusTextHasContent,!!f)),status:p,ariaLiveMode:M,disabled:X.disabled},f)))}}]),n}(r.Component),I=(0,f.default)((function(e){e.theme;var t=(0,a.Z)(e,R);return r.createElement(B,D({},t))})).withConfig({componentId:"sc-1hi9v5l-0"})(["",""],(function(e){return function(e){return(0,f.css)([""," width:290px;& .fi-text-input_wrapper{width:100%;display:inline-block;& .fi-text-input_label--visible{margin-bottom:",";}& .fi-hint-text{margin-bottom:",";}& .fi-text-input_statusText--has-content{margin-top:",";}}& .fi-text-input_input-element-container{"," &:focus-within{position:relative;&::after{","}}}&.fi-text-input--full-width{width:100%;}& .fi-text-input_input{"," background-color:",";min-width:40px;width:100%;min-height:40px;padding-left:",";border-color:",";&::placeholder{font-style:italic;color:",";opacity:1;}&::-ms-clear{display:none;width:0;height:0;}&::-ms-reveal{display:none;width:0;height:0;}}&.fi-text-input_with-icon{& .fi-text-input_input-element-container{position:relative;}& .fi-text-input_input{padding-right:",";}& .fi-icon{position:absolute;width:18px;height:18px;top:",";right:",";}}&.fi-text-input--error{& .fi-text-input_input{border:2px solid ",";padding-left:9px;padding-top:7px;padding-bottom:7px;}}&.fi-text-input--success{& .fi-text-input_input{border:2px solid ",";padding-left:9px;padding-top:7px;padding-bottom:7px;}}&.fi-text-input--disabled{& .fi-text-input_input{color:",";background-color:",";}& .fi-icon-base-fill{fill:",";}}"],(0,j.LZ)(e)("bodyText"),e.spacing.xs,e.spacing.xs,e.spacing.xxs,(0,j.$K)(e),e.focus.absoluteFocus,(0,j.qH)(e),e.colors.whiteBase,e.spacing.insetL,e.colors.depthDark3,e.colors.depthDark2,(0,P.mA)("".concat(e.spacing.insetXl," * 2 + ").concat(e.spacing.insetM)),e.spacing.insetL,e.spacing.insetL,e.colors.alertBase,e.colors.successBase,e.colors.depthBase,e.colors.depthLight3,e.colors.depthBase)}(e.theme)})),M=(0,r.forwardRef)((function(e,t){var n=e.id,i=(0,a.Z)(e,N);return r.createElement(b.cY,null,(function(e){var o=e.suomifiTheme;return r.createElement(h.z,{id:n},(function(e){return r.createElement(I,D({theme:o,id:e,forwardedRef:t},i))}))}))}));M.displayName="TextInput";var F=n(85359),W=n(15083),X=n(10719),z=n(92167),H=n(93024),A=n(39657),K=n(45786),Q=n(39497),Y=n(91971),G=function(){var e=r.useState(!0),t=e[0],n=e[1],o=t?"error":"default";return r.createElement(W.Z,{sideNavData:z.Z},r.createElement(X.Z,{title:F.TN}),r.createElement(A.X6,{variant:"h1"},F.TN),r.createElement(A.nv,{variant:"lead"},r.createElement(A.xv,{variant:"lead"},F.mf)),r.createElement(K.Z,null,r.createElement(Y.Z,{style:{marginBottom:i.R.spacing.s}},r.createElement(M,{labelText:F.Wm}))),r.createElement(H.Z,{title:F.gG,items:F.TK}),F.NS.map((function(e,t){return r.createElement(Q.Z,{key:t,mainTitle:e.title,paragraphs:e.paragraphs,links:e.links})})),r.createElement(K.Z,{mainTitle:F.JX,description:F.r,exampleFirst:!0,filterProps:[]},r.createElement(Y.Z,null,r.createElement(M,{labelText:F.n9,status:"success"}))),r.createElement(K.Z,{mainTitle:F.cp,description:F.gM,exampleFirst:!0,filterProps:[]},r.createElement(Y.Z,null,r.createElement(M,Object.assign({labelText:F.G6},t?{statusText:F.Sc}:{},{status:o,debounce:300,onChange:function(e){n(!e)}})))),r.createElement(K.Z,{mainTitle:F.QH,description:F.lq,exampleFirst:!0,filterProps:[]},r.createElement(Y.Z,null,r.createElement(M,{labelText:F.OO,disabled:!0}))),r.createElement(K.Z,{mainTitle:F.QE,description:F.Jk,exampleFirst:!0,filterProps:[]},r.createElement(Y.Z,null,r.createElement(M,{labelText:F.fG,icon:"mapLocation",optionalText:F.$x}))))}}}]);
//# sourceMappingURL=component---src-pages-components-textinput-tsx-197324dc0999094340be.js.map