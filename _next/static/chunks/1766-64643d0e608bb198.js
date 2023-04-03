"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1766],{1766:function(e,t,r){r.d(t,{X:function(){return H}});var n=r(67434),o=r(60257),c=r(675),i=r(62991),a=r(98607),l=r(78502),s=r(26274),u=r(41518),f=r(67294),p=r(32125),b=r(94184),d=r.n(b),h=r(98492),m=r(93029),O=r(35243),y=r(72465),v=r(27143),g=r(54869),x=r(6121),j=r(49651),w=r(17890),k=r(16121),P=r(36337),E=r(2763),Z=function(e){return(0,p.iv)([""," "," & .fi-checkbox_label{position:relative;display:block;padding-left:",";cursor:pointer;line-height:27px;&::before{content:'';position:absolute;left:0px;top:",";box-sizing:border-box;height:18px;width:18px;border:1px solid ",";border-radius:",";background-color:",";}}& .fi-checkbox_icon{position:absolute;height:10px;width:10px;left:4px;top:9px;}&:focus-within{& .fi-checkbox_label{&::before{","}}}& .fi-checkbox_input{position:absolute;opacity:0;z-index:-9999;}& .fi-hint-text{padding-left:",";color:",";}& .fi-status-text{line-height:18px;&.fi-checkbox_statusText--has-content{margin-top:",";}}",";",";",";",";"],(0,E.bG)(e),(0,E.LZ)(e)("bodyTextSmall"),e.spacing.l,e.spacing.xxs,e.colors.depthDark3,e.radius.basic,e.colors.whiteBase,e.focus.boxShadowFocus,e.spacing.l,e.colors.depthDark1,e.spacing.xxs,function(e){return(0,p.iv)(["&.fi-checkbox--large{& .fi-checkbox_label{padding-left:",";line-height:30px;&::before{content:'';position:absolute;left:0px;top:0px;box-sizing:border-box;height:30px;width:30px;color:",";border:2px solid;}& .fi-checkbox_icon{height:20px;width:20px;left:5px;top:4px;}}& .fi-hint-text{padding-left:",";}}"],e.spacing.xxl,e.colors.depthDark3,e.spacing.xxl)}(e),function(e){return(0,p.iv)(["&.fi-checkbox--checked{& .fi-checkbox_label{&::before{border-color:",";}& > .fi-checkbox_icon .fi-icon-base-fill{fill:",";}}}"],e.colors.highlightBase,e.colors.highlightBase)}(e),function(e){return(0,p.iv)(["&.fi-checkbox--error{& .fi-checkbox_label{&::before{border-color:",";border-width:2px;}& > .fi-checkbox_icon .fi-icon-base-fill{fill:",";}}}"],e.colors.alertBase,e.colors.alertBase)}(e),function(e){return(0,p.iv)(["&.fi-checkbox--disabled{& .fi-checkbox_label{cursor:not-allowed;color:",";&::before{background-color:",";border-color:",";border-width:1px;}& > .fi-checkbox_icon .fi-icon-base-fill{fill:",";}}&.fi-checkbox--large{& .fi-checkbox_label::before{border-width:2px;}}}"],e.colors.depthBase,e.colors.depthLight3,e.colors.depthLight1,e.colors.depthLight1)}(e))},T=["id","className","disabled","aria-label","aria-labelledby","aria-describedby","statusTextAriaLiveMode","children","checked","defaultChecked","onClick","hintText","status","statusText","name","value","forwardedRef","onClick","variant"],S=["theme"],D=["id","status"];function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var R="fi-checkbox",I={container:"".concat(R,"_container"),input:"".concat(R,"_input"),label:"".concat(R,"_label"),statusTextHasContent:"".concat(R,"_statusText--has-content"),hintText:"".concat(R,"_hintText"),disabled:"".concat(R,"--disabled"),error:"".concat(R,"--error"),checked:"".concat(R,"--checked"),large:"".concat(R,"--large")},B="fi-checkbox_icon",L={disabled:"".concat(B,"--disabled"),checked:"".concat(B,"--checked"),error:"".concat(B,"--error")},z=function(e){(0,a.Z)(r,e);var t=N(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return e=t.call.apply(t,[this].concat(c)),(0,u.Z)((0,i.Z)(e),"state",{checkedState:!!e.props.checked||!!e.props.defaultChecked}),(0,u.Z)((0,i.Z)(e),"handleClick",(function(){var t=e.props,r=t.onClick,n=t.checked,o=e.state.checkedState;void 0===n&&e.setState({checkedState:!o}),r&&r({checkboxState:!o})})),e}return(0,c.Z)(r,[{key:"render",value:function(){var e,t,r=this.props,o=r.id,c=r.className,i=r.disabled,a=void 0!==i&&i,l=r["aria-label"],s=r["aria-labelledby"],p=r["aria-describedby"],b=r.statusTextAriaLiveMode,O=void 0===b?"assertive":b,y=r.children;r.checked,r.defaultChecked,r.onClick;var P=r.hintText,E=r.status,Z=r.statusText,S=r.name,D=r.value,C=r.forwardedRef;r.onClick;var N=r.variant,z=(0,n.Z)(r,T),M=this.state.checkedState;y||(0,m.j)().error("Checkbox component should have a label or a child element that acts as one. Add label content or a child element."),("name"in this.props&&("string"!==typeof S||""===S)||"value"in this.props&&("string"!==typeof D||""===D))&&(0,m.j)().warn("Name and value props should have non-empty values if provided.");var H=Z?"".concat(o,"-statusText"):void 0,Y=P?"".concat(o,"-hintText"):void 0;return f.createElement(v.hh,{className:d()(I.container,c,R,(e={},(0,u.Z)(e,I.error,"error"===E&&!a),(0,u.Z)(e,I.checked,M&&!a),(0,u.Z)(e,I.large,"large"===N),(0,u.Z)(e,I.disabled,!!a),e))},f.createElement(g.X,_(_(_(_({type:"checkbox",disabled:a,id:o},(0,h.I5)("aria-label",[l])),(0,h.I5)("aria-labelledby",[s])),(0,h.I5)("aria-describedby",[H,Y,p])),{},{"aria-invalid":"error"===E,checked:!!M,className:I.input,onChange:this.handleClick,name:S,forwardedRef:C},D?{value:D}:{})),f.createElement(x.I,_({htmlFor:o,className:I.label},z),!!M&&f.createElement(j.JO,{icon:"check",className:d()(B,(t={},(0,u.Z)(t,L.checked,M&&!a),(0,u.Z)(t,L.error,"error"===E&&!a),(0,u.Z)(t,L.disabled,!!a),t))}),y),f.createElement(k.Q,{id:Y},P),f.createElement(w.r,{className:d()((0,u.Z)({},I.statusTextHasContent,!!Z)),id:H,status:E,disabled:a,ariaLiveMode:O},Z))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.checked;return void 0!==r&&r!==t.checkedState?{checkedState:r}:null}}]),r}(f.Component),M=(0,p.ZP)((function(e){e.theme;var t=(0,n.Z)(e,S);return f.createElement(z,_({},t))})).withConfig({componentId:"sc-1lesxnx-0"})(["",""],(function(e){var t=e.theme;return Z(t)})),H=(0,f.forwardRef)((function(e,t){var r=e.id,o=e.status,c=(0,n.Z)(e,D);return f.createElement(y.cY,null,(function(e){var n=e.suomifiTheme;return f.createElement(O.z,{id:r},(function(e){return f.createElement(P.Y,null,(function(r){var i=r.status;return f.createElement(M,_({theme:n,id:e,forwardedRef:t,status:o||i},c))}))}))}))}));H.displayName="Checkbox"},36337:function(e,t,r){r.d(t,{c:function(){return z},Y:function(){return I}});var n=r(41518),o=r(67434),c=r(60257),i=r(675),a=r(98607),l=r(78502),s=r(26274),u=r(67294),f=r(32125),p=r(94184),b=r.n(p),d=r(98492),h=r(72465),m=r(27143),O=r(4065),y=r(93930),v=r(27111),g=r(16121),x=r(17890),j=r(2763),w=r(35243),k=r(44934),P=["children","className","theme","labelText","labelMode","optionalText","groupHintText","id","groupStatus","groupStatusText","tooltipComponent"],E=["id"];function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var D="fi-checkbox-group",C={legend:"".concat(D,"_legend"),labelIsVisible:"".concat(D,"_label--visible"),container:"".concat(D,"_container"),statusTextHasContent:"".concat(D,"_statusText--has-content")},_={},N=u.createContext(_),R=N.Provider,I=N.Consumer,B=function(e){(0,a.Z)(r,e);var t=S(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className;e.theme;var c=e.labelText,i=e.labelMode,a=e.optionalText,l=e.groupHintText,s=e.id,f=e.groupStatus,p=void 0===f?"default":f,h=e.groupStatusText,j=e.tooltipComponent,w=(0,o.Z)(e,P),E=h?"".concat(s,"-statusText"):void 0;return u.createElement(m.lk,T({className:b()(D,r),id:s},w),u.createElement(O.X,null,u.createElement(y.e,{className:C.legend},u.createElement(v._,{htmlFor:s,labelMode:i,optionalText:a,className:b()((0,n.Z)({},C.labelIsVisible,"hidden"!==i)),tooltipComponent:j},c),l&&u.createElement(g.Q,null,l),h&&u.createElement(k.T,T({},(0,d.I5)("aria-labelledby",[E])))),u.createElement(m.hh,{className:C.container},u.createElement(R,{value:{status:p}},t))),u.createElement(x.r,{className:b()((0,n.Z)({},C.statusTextHasContent,!!h)),id:E,status:p},h))}}]),r}(u.Component),L=(0,f.ZP)(B).withConfig({componentId:"sc-svuo6b-0"})(["",""],(function(e){return function(e){return(0,f.iv)([""," & .fi-checkbox-group_label--visible{margin-bottom:10px;}& .fi-checkbox-group_legend .fi-hint-text{margin-bottom:10px;}& .fi-checkbox-group_container{& > .fi-checkbox{margin-bottom:",";&:last-child{margin-bottom:0;}}& .fi-checkbox--large{margin-top:",";margin-bottom:",";}}"],(0,j.bG)(e),e.spacing.xs,e.spacing.xxs,e.spacing.s)}(e.theme)})),z=(0,u.forwardRef)((function(e,t){var r=e.id,n=(0,o.Z)(e,E);return u.createElement(h.cY,null,(function(e){var o=e.suomifiTheme;return u.createElement(w.z,{id:r},(function(e){return u.createElement(L,T({theme:o,id:e,forwardedRef:t},n))}))}))}));z.displayName="CheckboxGroup"},16121:function(e,t,r){r.d(t,{Q:function(){return O}});var n=r(41518),o=r(67434),c=r(67294),i=r(94184),a=r.n(i),l=r(32125),s=r(16344),u=r(72465),f=r(2763),p=["className","theme","children"],b=["children"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=(0,l.ZP)((function(e){var t=e.className;e.theme;var r=e.children,n=(0,o.Z)(e,p);return c.createElement(s.I,h(h({},n),{},{className:a()(t,"fi-hint-text",{})}),r)})).withConfig({componentId:"sc-ketar6-0"})(["",""],(function(e){return function(e){return(0,l.iv)(["color:",";",";&.fi-hint-text{display:block;}"],e.colors.blackBase,(0,f.LZ)(e)("bodyTextSmall"))}(e.theme)})),O=(0,c.forwardRef)((function(e,t){var r=e.children,n=(0,o.Z)(e,b);return r?c.createElement(u.cY,null,(function(e){var o=e.suomifiTheme;return c.createElement(m,h({forwardedRef:t,theme:o},n),r)})):null}));O.displayName="HintText"},27111:function(e,t,r){r.d(t,{_:function(){return x}});var n=r(41518),o=r(27135),c=r(67434),i=r(67294),a=r(94184),l=r.n(a),s=r(32125),u=r(72465),f=r(2763),p=r(44934),b=r(27143),d=r(16344),h=["className","contentStyle","contentClassName","theme","labelMode","wrapperProps","children","asProp","optionalText","tooltipComponent","forceTooltipRerender"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y="fi-label",v={labelSpan:"".concat(y,"_label-span"),optionalText:"".concat(y,"_optional-text")},g=(0,s.ZP)((function(e){var t=e.className,r=e.contentStyle,n=e.contentClassName;e.theme;var a,s=e.labelMode,u=void 0===s?"visible":s,f=e.wrapperProps,m=e.children,g=e.asProp,x=void 0===g?"label":g,j=e.optionalText,w=e.tooltipComponent,k=e.forceTooltipRerender,P=void 0!==k&&k,E=(0,c.Z)(e,h),Z=(0,i.useState)(null),T=(0,o.Z)(Z,2),S=T[0],D=T[1];return i.createElement(b.lk,O(O({className:l()(t,y)},f),{},{forwardedRef:function(e){return D(e)}}),"hidden"===u?i.createElement(p.T,O({as:x},E),m,j&&"(".concat(j,")")):i.createElement(i.Fragment,null,i.createElement(d.I,O(O({as:x,style:r?O({},r):{}},E),{},{className:l()(v.labelSpan,n)}),m,j&&i.createElement(d.I,{className:v.optionalText}," (".concat(j,")"))),!!w&&(a=w,(0,i.isValidElement)(a)?(0,i.cloneElement)(a,{anchorElement:S,key:P?Date.now():null}):null)))})).withConfig({componentId:"sc-cooxd2-0"})(["",""],(function(e){return function(e){return(0,s.iv)(["&.fi-label{& .fi-label_label-span{",";display:inline-block;vertical-align:middle;color:",";& .fi-label_optional-text{",";}& .fi-tooltip{margin-left:",";}}}"],(0,f.LZ)(e)("actionElementInnerTextBold"),e.colors.blackBase,e.typography.bodyTextSmall,e.spacing.insetS)}(e.theme)})),x=function(e){return i.createElement(u.cY,null,(function(t){var r=t.suomifiTheme;return i.createElement(g,O({theme:r},e))}))};x.displayName="Label"},17890:function(e,t,r){r.d(t,{r:function(){return v}});var n=r(41518),o=r(67434),c=r(67294),i=r(94184),a=r.n(i),l=r(32125),s=r(72465),u=r(16344),f=r(2763),p=["className","children","disabled","status","theme","ariaLiveMode"],b=["children"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m="fi-status-text",O={error:"".concat(m,"--error")},y=(0,l.ZP)((function(e){var t=e.className,r=e.children,i=e.disabled,l=e.status;e.theme;var s=e.ariaLiveMode,f=void 0===s?"polite":s,b=(0,o.Z)(e,p),d=i?{"aria-live":"off"}:{"aria-live":f};return c.createElement(u.I,h(h(h({},b),d),{},{className:a()(t,m,(0,n.Z)({},O.error,"error"===l)),"aria-atomic":"true"}),r)})).withConfig({componentId:"sc-18fcmym-0"})(["",""],(function(e){return function(e){return(0,l.iv)(["",";color:",";font-size:14px;line-height:20px;&.fi-status-text{display:block;&.fi-status-text--error{color:",";}}"],(0,f.LZ)(e)("bodySemiBoldSmall"),e.colors.blackBase,e.colors.alertBase)}(e.theme)})),v=(0,c.forwardRef)((function(e,t){var r=e.children,n=(0,o.Z)(e,b);return c.createElement(s.cY,null,(function(e){var o=e.suomifiTheme;return c.createElement(y,h({forwardedRef:t,theme:o},n),r)}))}));v.displayName="StatusText"},4065:function(e,t,r){r.d(t,{X:function(){return s}});var n=r(41518),o=r(67294),c=r(32125),i=r(75142);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l=(0,c.iv)([""," "," max-width:100%;"],i.i.normalize.html,i.i.common),s=(0,c.ZP)((function(e){return o.createElement("fieldset",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))})).withConfig({componentId:"sc-1fimn2v-0"})(["",""],l)},54869:function(e,t,r){r.d(t,{X:function(){return p}});var n=r(41518),o=r(67434),c=r(67294),i=r(32125),a=r(75142),l=["type","forwardedRef"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=(0,i.iv)([""," "," "," "," display:inline-block;max-width:100%;"],a.i.normalize.html,a.i.normalize.input,(0,a.O)(["::-webkit-input-placeholder"]),a.i.common),p=(0,i.ZP)((function(e){var t=e.type,r=e.forwardedRef,n=(0,o.Z)(e,l);return c.createElement("input",u(u({},n),{},{type:t||"text",ref:r}))})).withConfig({componentId:"sc-fkzflm-0"})(["",""],f)},6121:function(e,t,r){r.d(t,{I:function(){return s}});var n=r(41518),o=r(67294),c=r(32125),i=r(75142);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l=(0,c.iv)([""," "," max-width:100%;"],i.i.normalize.html,i.i.common),s=(0,c.ZP)((function(e){return o.createElement("label",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))})).withConfig({componentId:"sc-190rfa1-0"})(["",""],l)},93930:function(e,t,r){r.d(t,{e:function(){return s}});var n=r(41518),o=r(67294),c=r(32125),i=r(75142);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l=(0,c.iv)([""," "," max-width:100%;"],i.i.normalize.html,i.i.common),s=(0,c.ZP)((function(e){return o.createElement("legend",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))})).withConfig({componentId:"sc-l026dr-0"})(["",""],l)}}]);