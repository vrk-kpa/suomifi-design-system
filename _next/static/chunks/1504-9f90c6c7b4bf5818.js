"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1504],{53643:function(e,t,r){r.d(t,{N:function(){return p}});var n=r(38850),o=r(67294),c=r(19521),i=r(93593);const l=e=>o.createElement("svg",Object.assign({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},e),o.createElement("path",{d:"M19.447 5.384 8 17.42a1.82 1.82 0 0 1-2.667 0L.552 12.394a2.059 2.059 0 0 1 0-2.805 1.822 1.822 0 0 1 2.666 0l3.449 3.625L16.78 2.581a1.82 1.82 0 0 1 2.666 0 2.053 2.053 0 0 1 0 2.803",fill:"#222",fillRule:"evenodd",className:"fi-icon-base-fill"}));var a=r(51482),s=r(9323),u=r(88674);const f=(0,c.ZP)((e=>{const{className:t,mousePointer:r,ariaLabel:c,color:a,fill:f,baseColor:p,highlightColor:d}=e,m=(0,n._)(e,["className","mousePointer","ariaLabel","color","fill","baseColor","highlightColor"]);return o.createElement(l,Object.assign({className:(0,i.Z)(s.e,t,{[s.y]:!!r})},m,(0,u.u)(c),(0,u.P)(c)))}))`
  ${a.pv}
`,p=e=>o.createElement(f,Object.assign({},e));p.displayName="Icon"},16121:function(e,t,r){r.d(t,{Q:function(){return O}});var n=r(4942),o=r(86854),c=r(91),i=r(67294),l=r(94184),a=r.n(l),s=r(19521),u=r(16344),f=r(72465),p=r(43146),d=r(2763),m=["className","theme","children"],b=["children"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=(0,s.ZP)((function(e){var t=e.className;e.theme;var r=e.children,n=(0,c.Z)(e,m),l=(0,p.Gu)(n),s=(0,o.Z)(l,2),f=s[0],d=s[1],b=(0,p.vi)(f);return i.createElement(u.I,y(y({},d),{},{className:a()(t,"fi-hint-text",{}),style:y(y({},b),null===d||void 0===d?void 0:d.style)}),r)})).withConfig({componentId:"sc-ketar6-0"})(["",""],(function(e){return function(e){return(0,s.iv)(["color:",";",";&.fi-hint-text{display:block;}"],e.colors.blackBase,(0,d.LZ)(e)("bodyTextSmall"))}(e.theme)})),O=(0,i.forwardRef)((function(e,t){var r=e.children,n=(0,c.Z)(e,b);return r?i.createElement(f.cY,null,(function(e){var o=e.suomifiTheme;return i.createElement(v,y({forwardedRef:t,theme:o},n),r)})):null}));O.displayName="HintText"},27111:function(e,t,r){r.d(t,{_:function(){return j}});var n=r(4942),o=r(86854),c=r(91),i=r(67294),l=r(94184),a=r.n(l),s=r(19521),u=r(72465),f=r(43146),p=r(2763),d=r(44934),m=r(27143),b=r(16344),h=["className","contentStyle","contentClassName","theme","labelMode","style","children","asProp","optionalText","tooltipComponent","forceTooltipRerender"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O="fi-label",w={labelSpan:"".concat(O,"_label-span"),optionalText:"".concat(O,"_optional-text")},g=(0,s.ZP)((function(e){var t=e.className,r=e.contentStyle,n=e.contentClassName;e.theme;var l,s=e.labelMode,u=void 0===s?"visible":s,p=e.style,y=e.children,g=e.asProp,j=void 0===g?"label":g,P=e.optionalText,E=e.tooltipComponent,x=e.forceTooltipRerender,Z=void 0!==x&&x,D=(0,c.Z)(e,h),R=(0,f.Gu)(D),k=(0,o.Z)(R,2),S=k[0],N=k[1],I=(0,f.vi)(S),T=(0,i.useState)(null),C=(0,o.Z)(T,2),L=C[0],_=C[1];return i.createElement(m.lk,{className:a()(t,O),forwardedRef:function(e){return _(e)},style:v(v({},I),p)},"hidden"===u?i.createElement(d.T,v({as:j},N),y,P&&"(".concat(P,")")):i.createElement(i.Fragment,null,i.createElement(b.I,v(v({as:j,style:r?v({},r):{}},N),{},{className:a()(w.labelSpan,n)}),y,P&&i.createElement(b.I,{className:w.optionalText}," (".concat(P,")"))),!!E&&(l=E,(0,i.isValidElement)(l)?(0,i.cloneElement)(l,{anchorElement:L,key:Z?Date.now():null}):null)))})).withConfig({componentId:"sc-cooxd2-0"})(["",""],(function(e){return function(e){return(0,s.iv)(["&.fi-label{& .fi-label_label-span{",";display:inline-block;vertical-align:middle;color:",";& .fi-label_optional-text{",";}& .fi-tooltip{margin-left:",";}}}"],(0,p.LZ)(e)("actionElementInnerTextBold"),e.colors.blackBase,e.typography.bodyTextSmall,e.spacing.insetS)}(e.theme)})),j=function(e){return i.createElement(u.cY,null,(function(t){var r=t.suomifiTheme;return i.createElement(g,v({theme:r},e))}))};j.displayName="Label"},29853:function(e,t,r){r.d(t,{A:function(){return D}});var n=r(91),o=r(15671),c=r(43144),i=r(97326),l=r(60136),a=r(82963),s=r(61120),u=r(4942),f=r(67294),p=r(19521),d=r(94184),m=r.n(d),b=r(72465),h=r(27143),y=r(80860),v=r(2763),O=["className","theme","forwardedRef","children","onBlur","onKeyDown","id","focusedDescendantId","preventScrolling"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var P="fi-select-item-list",E={content_wrapper:"".concat(P,"_content_wrapper")},x=function(e){(0,l.Z)(r,e);var t=j(r);function r(e){var n;return(0,o.Z)(this,r),n=t.call(this,e),(0,u.Z)((0,i.Z)(n),"wrapperRef",void 0),(0,u.Z)((0,i.Z)(n),"scrollItemList",(function(e){if(null!==n.wrapperRef&&null!==n.wrapperRef.current){var t,r,o=(null===(t=document.getElementById(e))||void 0===t?void 0:t.offsetTop)||0,c=(null===(r=document.getElementById(e))||void 0===r?void 0:r.offsetHeight)||0;if(o<n.wrapperRef.current.scrollTop)n.wrapperRef.current.scrollTop=o-4;else{var i=o+c;i>n.wrapperRef.current.scrollTop+n.wrapperRef.current.offsetHeight&&(n.wrapperRef.current.scrollTop=i-n.wrapperRef.current.offsetHeight-4)}}})),n.wrapperRef=(0,f.createRef)(),n}return(0,c.Z)(r,[{key:"componentDidUpdate",value:function(e){this.props.focusedDescendantId!==e.focusedDescendantId&&this.props.focusedDescendantId&&!this.props.preventScrolling&&this.scrollItemList(this.props.focusedDescendantId)}},{key:"componentDidMount",value:function(){this.props.focusedDescendantId&&!this.props.preventScrolling&&this.scrollItemList(this.props.focusedDescendantId)}},{key:"render",value:function(){var e=this.props,t=e.className;e.theme;var r=e.forwardedRef,o=e.children,c=e.onBlur,i=e.onKeyDown,l=e.id,a=e.focusedDescendantId;e.preventScrolling;var s=(0,n.Z)(e,O);return f.createElement(y.h,g(g({id:l,tabIndex:0,forwardRef:r,className:m()(P,t,{})},s),{},{role:"listbox",onBlur:c,"aria-activedescendant":a,onKeyDown:i}),f.createElement(h.lk,{forwardedRef:this.wrapperRef,className:E.content_wrapper},o))}}]),r}(f.Component),Z=(0,p.ZP)(x).withConfig({componentId:"sc-1x4qiwd-0"})(["",""],(function(e){return function(e){return(0,p.iv)([""," list-style-type:none;box-sizing:content-box;max-height:265px;background-color:",";border-width:0 1px 1px 1px;border-style:solid;border-color:",";border-bottom-left-radius:",";border-bottom-right-radius:",";margin:0;padding:4px 0 0 0;&:focus{outline:none;}& .fi-select-item-list_content_wrapper{display:block;width:100%;max-height:inherit;overflow-y:auto;overflow-x:hidden;}"],(0,v.LZ)(e)("bodyText"),e.colors.whiteBase,e.colors.depthDark3,e.radiuses.basic,e.radiuses.basic)}(e.theme)})),D=(0,f.forwardRef)((function(e,t){return f.createElement(b.cY,null,(function(r){var n=r.suomifiTheme;return f.createElement(Z,g({theme:n,forwardedRef:t},e))}))}))},17890:function(e,t,r){r.d(t,{r:function(){return g}});var n=r(4942),o=r(86854),c=r(91),i=r(67294),l=r(94184),a=r.n(l),s=r(19521),u=r(72465),f=r(43146),p=r(16344),d=r(2763),m=["className","children","disabled","status","theme","ariaLiveMode"],b=["children"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v="fi-status-text",O={error:"".concat(v,"--error")},w=(0,s.ZP)((function(e){var t=e.className,r=e.children,l=e.disabled,s=e.status;e.theme;var u=e.ariaLiveMode,d=void 0===u?"polite":u,b=(0,c.Z)(e,m),h=(0,f.Gu)(b),w=(0,o.Z)(h,2),g=w[0],j=w[1],P=(0,f.vi)(g),E=l?{"aria-live":"off"}:{"aria-live":d};return i.createElement(p.I,y(y(y({},j),E),{},{className:a()(t,v,(0,n.Z)({},O.error,"error"===s)),"aria-atomic":"true",style:y(y({},P),null===j||void 0===j?void 0:j.style)}),r)})).withConfig({componentId:"sc-18fcmym-0"})(["",""],(function(e){return function(e){return(0,s.iv)(["",";color:",";font-size:14px;line-height:20px;&.fi-status-text{display:block;&.fi-status-text--error{color:",";}}"],(0,d.LZ)(e)("bodySemiBoldSmall"),e.colors.blackBase,e.colors.alertBase)}(e.theme)})),g=(0,i.forwardRef)((function(e,t){var r=e.children,n=(0,c.Z)(e,b);return i.createElement(u.cY,null,(function(e){var o=e.suomifiTheme;return i.createElement(w,y({forwardedRef:t,theme:o},n),r)}))}));g.displayName="StatusText"},22074:function(e,t,r){r.d(t,{J:function(){return b}});var n=r(4942),o=r(86854),c=r(91),i=r(67294),l=r(73935),a=r(95237),s=r(48180),u=r(27143),f=["portalStyleProps","placement","allowFlip","matchWidth","children","sourceRef","onClickOutside","portal"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;t.styles.popper.width="".concat(t.rects.reference.width,"px")},effect:function(e){var t=e.state;t.elements.popper.style.width="".concat(t.elements.reference.offsetWidth,"px")}},b=function(e){var t=e.portalStyleProps,r=void 0===t?{}:t,n=e.placement,p=void 0===n?"bottom":n,b=e.allowFlip,h=void 0!==b&&b,y=e.matchWidth,v=void 0===y||y,O=e.children,w=e.sourceRef,g=e.onClickOutside,j=e.portal,P=void 0===j||j,E=(0,c.Z)(e,f),x=(0,i.useState)(null),Z=(0,o.Z)(x,2),D=Z[0],R=Z[1],k=(0,i.useState)(null),S=(0,o.Z)(k,2),N=S[0],I=S[1],T=(0,i.useRef)(null),C=(0,a.D)(w.current,D,{modifiers:[{name:"flip",enabled:h},v?m:{}],placement:p}).styles;return(0,i.useEffect)((function(){var e=function(e){var t,r;null!==(t=T.current)&&void 0!==t&&t.contains(e.target)||null!==w&&void 0!==w&&null!==(r=w.current)&&void 0!==r&&r.contains(e.target)||!g||g(e)};return document.addEventListener("click",e,{capture:!0}),function(){document.removeEventListener("click",e,{capture:!0})}}),[g,w]),(0,s.Pu)((function(){I(window.document.body)})),P&&!N?null:P&&N?i.createElement(i.Fragment,null,l.createPortal(i.createElement("div",{className:"fi-portal",ref:R,style:d(d({},C.popper),r),tabIndex:-1,role:"presentation"},i.createElement(u.lk,d({forwardedRef:T},E),O)),N)):i.createElement("div",{ref:R,style:d(d({},C.popper),r),tabIndex:-1,role:"presentation"},i.createElement(u.lk,d({forwardedRef:T},E),O))}},54869:function(e,t,r){r.d(t,{X:function(){return p}});var n=r(4942),o=r(91),c=r(67294),i=r(19521),l=r(75142),a=["type","forwardedRef"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=(0,i.iv)([""," "," "," "," display:inline-block;max-width:100%;"],l.i.normalize.html,l.i.normalize.input,(0,l.O)(["::-webkit-input-placeholder"]),l.i.common),p=(0,i.ZP)((function(e){var t=e.type,r=e.forwardedRef,n=(0,o.Z)(e,a);return c.createElement("input",u(u({},n),{},{type:t||"text",ref:r}))})).withConfig({componentId:"sc-fkzflm-0"})(["",""],f)}}]);