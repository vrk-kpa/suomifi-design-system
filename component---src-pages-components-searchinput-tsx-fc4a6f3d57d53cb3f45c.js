"use strict";(self.webpackChunksuomifi_design_system=self.webpackChunksuomifi_design_system||[]).push([[357],{94798:function(e,t,n){n.d(t,{k:function(){return k}});var r=n(4942),o=n(45987),a=n(15671),i=n(43144),c=n(60136),l=n(82963),s=n(61120),u=n(67294),p=n(97166),f=n(69931),h=n.n(f),d=n(75503),m=n(50222),b=n(26630),v=n(46248),y=["className","label","theme","onClick"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var x="fi-input-clear-button",E={icon:"".concat(x,"_icon")},Z=function(e){(0,c.Z)(n,e);var t=w(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.label;e.theme;var r=e.onClick,a=(0,o.Z)(e,y);return u.createElement(m.S,O(O({},a),{},{className:h()(x,t),onClick:r}),u.createElement(b.T,null,n),u.createElement(v.JO,{"aria-hidden":!0,icon:"close",className:E.icon}))}}]),n}(u.Component),j=(0,p.default)(Z).withConfig({componentId:"sc-1df7mt5-0"})(["",""],(function(e){return function(e){return(0,p.css)(["position:relative;cursor:pointer;pointer-events:all;height:20px;width:20px;justify-content:center;align-items:center;&:focus{outline:none;&:after{","}}&.fi-input-clear-button{display:flex;& .fi-input-clear-button_icon{width:16px;height:16px;& .fi-icon-base-fill{fill:",";}}&[disabled],&:disabled{cursor:not-allowed;& .fi-input-clear-button_icon{& .fi-icon-base-fill{fill:",";}}}}"],e.focus.absoluteFocus,e.colors.highlightDark1,e.colors.depthBase)}(e.theme)})),k=function(e){return u.createElement(d.cY,null,(function(t){var n=t.suomifiTheme;return u.createElement(j,O({theme:n},e))}))};k.displayName="InputClearButton"},191:function(e,t,n){n.d(t,{_:function(){return w}});var r=n(4942),o=n(70885),a=n(45987),i=n(67294),c=n(69931),l=n.n(c),s=n(97166),u=n(75503),p=n(42137),f=n(26630),h=n(22690),d=n(50890),m=["className","contentStyle","contentClassName","theme","labelMode","wrapperProps","children","asProp","optionalText","tooltipComponent"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y="fi-label",g={labelSpan:"".concat(y,"_label-span"),optionalText:"".concat(y,"_optional-text")},O=(0,s.default)((function(e){var t=e.className,n=e.contentStyle,r=e.contentClassName;e.theme;var c,s=e.labelMode,u=void 0===s?"visible":s,p=e.wrapperProps,b=e.children,O=e.asProp,w=void 0===O?"label":O,x=e.optionalText,E=e.tooltipComponent,Z=(0,a.Z)(e,m),j=(0,i.useState)(null),k=(0,o.Z)(j,2),P=k[0],T=k[1];return i.createElement(h.l,v(v({className:l()(t,y)},p),{},{forwardedRef:function(e){return T(e)}}),"hidden"===u?i.createElement(f.T,null,b,x&&"(".concat(x,")")):i.createElement(i.Fragment,null,i.createElement(d.I,v(v({as:w,style:n?v({},n):{}},Z),{},{className:l()(g.labelSpan,r)}),b,x&&i.createElement(d.I,{className:g.optionalText}," (".concat(x,")"))),!!E&&(c=E,(0,i.isValidElement)(c)?(0,i.cloneElement)(c,{anchorElement:P,key:Date.now()}):null)))})).withConfig({componentId:"sc-cooxd2-0"})(["",""],(function(e){return function(e){return(0,s.css)(["&.fi-label{& .fi-label_label-span{",";display:inline-block;vertical-align:middle;color:",";& .fi-label_optional-text{",";}& .fi-tooltip{margin-left:",";}}}"],(0,p.LZ)(e)("actionElementInnerTextBold"),e.colors.blackBase,e.typography.bodyTextSmall,e.spacing.insetS)}(e.theme)})),w=function(e){return i.createElement(u.cY,null,(function(t){var n=t.suomifiTheme;return i.createElement(O,v({theme:n},e))}))};w.displayName="Label"},82582:function(e,t,n){n.d(t,{r:function(){return g}});var r=n(4942),o=n(45987),a=n(67294),i=n(69931),c=n.n(i),l=n(97166),s=n(75503),u=n(50890),p=n(42137),f=["className","children","disabled","status","theme","ariaLiveMode"],h=["children"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b="fi-status-text",v={error:"".concat(b,"--error")},y=(0,l.default)((function(e){var t=e.className,n=e.children,i=e.disabled,l=e.status;e.theme;var s=e.ariaLiveMode,p=void 0===s?"polite":s,h=(0,o.Z)(e,f),d=i?{"aria-live":"off"}:{"aria-live":p};return a.createElement(u.I,m(m(m({},h),d),{},{className:c()(t,b,(0,r.Z)({},v.error,"error"===l)),"aria-atomic":"true"}),n)})).withConfig({componentId:"sc-18fcmym-0"})(["",""],(function(e){return function(e){return(0,l.css)(["",";color:",";font-size:14px;line-height:20px;&.fi-status-text{display:block;&.fi-status-text--error{color:",";}}"],(0,p.LZ)(e)("bodySemiBoldSmall"),e.colors.blackBase,e.colors.alertBase)}(e.theme)})),g=function(e){var t=e.children,n=(0,o.Z)(e,h);return a.createElement(s.cY,null,(function(e){var r=e.suomifiTheme;return a.createElement(y,m({theme:r},n),t)}))};g.displayName="StatusText"},54384:function(e,t,n){n.d(t,{K:function(){return p}});var r=n(15671),o=n(43144),a=n(97326),i=n(60136),c=n(82963),l=n(61120),s=n(4942);function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var p=function(e){(0,i.Z)(n,e);var t=u(n);function n(){var e;(0,r.Z)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),(0,s.Z)((0,a.Z)(e),"timeout",null),(0,s.Z)((0,a.Z)(e),"debouncer",(function(t,n){if(t)if(e.props.waitFor){e.cancelTimeout();var r=e.props.waitFor;e.timeout=setTimeout((function(){t(n)}),r)}else t(n)})),(0,s.Z)((0,a.Z)(e),"cancelDebounce",(function(){e.cancelTimeout()})),e}return(0,o.Z)(n,[{key:"componentWillUnmount",value:function(){this.cancelTimeout()}},{key:"cancelTimeout",value:function(){null!==this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}},{key:"render",value:function(){var e=this.props.children;return e?e(this.debouncer,this.cancelDebounce):null}}]),n}(n(67294).Component)},20849:function(e,t,n){n.d(t,{X:function(){return f}});var r=n(4942),o=n(45987),a=n(67294),i=n(97166),c=n(58642),l=["type","forwardedRef"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,i.css)([""," "," "," "," display:inline-block;max-width:100%;"],c.i.normalize.html,c.i.normalize.input,(0,c.O)(["::-webkit-input-placeholder"]),c.i.common),f=(0,i.default)((function(e){var t=e.type,n=e.forwardedRef,r=(0,o.Z)(e,l);return a.createElement("input",u(u({},r),{},{type:t||"text",ref:n}))})).withConfig({componentId:"sc-fkzflm-0"})(["",""],p)},93024:function(e,t,n){var r=n(67294),o=n(28117),a=n(39657);t.Z=function(e){var t=e.title,n=e.items;return r.createElement("section",{style:{background:o.R.colors.highlightLight3,margin:o.R.spacing.xl+" 0",padding:o.R.spacing.m,border:"1px solid "+o.R.colors.depthLight1}},r.createElement(a.X6,{variant:"h3",as:"h2"},t),r.createElement("ul",{style:{margin:0,padding:"0 0 0 "+o.R.spacing.s}},n.map((function(e,t){return!!e&&r.createElement("li",{key:t,style:{margin:o.R.spacing.m}},r.createElement(a.xv,null,e))}))))}},75982:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(67294),o=n(87025),a=n(15083),i=n(10719),c=n(92167),l=n(93024),s=n(39657),u=n(39497),p=n(45786),f=n(91971),h=n(28117),d=n(45987),m=n(15671),b=n(43144),v=n(97326),y=n(60136),g=n(82963),O=n(61120),w=n(4942),x=n(97166),E=n(69931),Z=n.n(E),j=n(49229),k=n(75503),P=n(44647),T=n(54384),_=n(50222),D=n(22690),N=n(20849),B=n(50890),R=n(26630),S=n(82582),C=n(191),I=n(46248),L=n(42137),M=n(94798),F=["value","defaultValue","className","labelText","labelMode","clearButtonLabel","searchButtonLabel","searchButtonProps","wrapperProps","onChange","onSearch","children","status","statusText","visualPlaceholder","id","fullWidth","debounce","theme","aria-describedby","statusTextAriaLiveMode"],W=["id"];function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,O.Z)(e);if(t){var o=(0,O.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,g.Z)(this,n)}}var H="fi-search-input",A={fullWidth:"".concat(H,"--full-width"),error:"".concat(H,"--error"),notEmpty:"".concat(H,"--not-empty"),labelIsVisible:"".concat(H,"_label--visible"),styleWrapper:"".concat(H,"_wrapper"),inputElement:"".concat(H,"_input"),inputElementContainer:"".concat(H,"_input-element-container"),functionalityContainer:"".concat(H,"_functionality-container"),statusTextHasContent:"".concat(H,"_statusText--has-content"),button:"".concat(H,"_button"),searchButton:"".concat(H,"_button-search"),searchIcon:"".concat(H,"_button-search-icon"),clearButton:"".concat(H,"_button-clear"),clearIcon:"".concat(H,"_button-clear-icon")},X=function(e){(0,y.Z)(n,e);var t=V(n);function n(){var e;(0,m.Z)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),(0,w.Z)((0,v.Z)(e),"state",{value:e.props.value||e.props.defaultValue||""}),(0,w.Z)((0,v.Z)(e),"inputRef",(0,r.createRef)()),e}return(0,b.Z)(n,[{key:"render",value:function(){var e,t=this,n=this.props;n.value,n.defaultValue;var o=n.className,a=n.labelText,i=n.labelMode,c=n.clearButtonLabel,l=n.searchButtonLabel,s=n.searchButtonProps,u=n.wrapperProps,p=n.onChange,f=n.onSearch;n.children;var h=n.status,m=n.statusText,b=n.visualPlaceholder,v=n.id,y=n.fullWidth,g=n.debounce;n.theme;var O=n["aria-describedby"],x=n.statusTextAriaLiveMode,E=void 0===x?"assertive":x,j=(0,d.Z)(n,F),k="".concat(v,"-statusText"),L=function(e){"value"in t.props||t.setState({value:e})},W=function(){f&&f(t.state.value)},z=function(){L(""),p&&p(""),setTimeout((function(){t.inputRef.current&&t.inputRef.current.focus()}),100)},V=function(e){t.state.value&&"Enter"===(null==e?void 0:e.key)&&W()},X=function(e){"Escape"===(null==e?void 0:e.key)&&e.preventDefault()},Y=K(K({},s),{},{className:Z()(null==s?void 0:s.className,A.button,A.searchButton)},this.state.value?{onClick:W}:{tabIndex:-1,"aria-hidden":!0}),J=K({className:Z()(A.button,A.clearButton)},this.state.value?{onClick:z}:{tabIndex:-1,"aria-hidden":!0});return r.createElement(D.h,K(K({},u),{},{className:Z()(o,H,(e={},(0,w.Z)(e,A.error,"error"===h),(0,w.Z)(e,A.notEmpty,!!this.state.value),(0,w.Z)(e,A.fullWidth,y),e))}),r.createElement(B.I,{className:A.styleWrapper},r.createElement(C._,{htmlFor:v,labelMode:i,className:Z()((0,w.Z)({},A.labelIsVisible,"hidden"!==i))},a),r.createElement(T.K,{waitFor:g},(function(e,n){return r.createElement(D.h,{className:A.functionalityContainer},r.createElement(D.h,{className:A.inputElementContainer},r.createElement(N.X,K(K(K({},j),(0,P.I5)("aria-describedby",[m?k:void 0,O])),{},{forwardedRef:t.inputRef,"aria-invalid":"error"===h,id:v,className:A.inputElement,type:"search",role:"searchbox",value:t.state.value,placeholder:b,onChange:function(t){var n=t.currentTarget.value;L(n),p&&e(p,n)},onKeyPress:V,onKeyDown:X}))),r.createElement(M.k,K(K({},J),{},{label:c,onClick:function(){z(),n()}})),r.createElement(_.S,K({},Y),r.createElement(R.T,null,l),r.createElement(I.JO,{"aria-hidden":!0,icon:"search",className:A.searchIcon})))})),r.createElement(S.r,{id:k,className:Z()((0,w.Z)({},A.statusTextHasContent,!!m)),status:h,ariaLiveMode:E},m)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.value;return"value"in e&&n!==t.value?{value:n}:null}}]),n}(r.Component),Y=(0,x.default)(X).withConfig({componentId:"sc-15b5myw-0"})(["",""],(function(e){return function(e){return(0,x.css)([""," width:290px;& .fi-search-input{&_wrapper{width:100%;min-width:105px;display:inline-block;& .fi-search-input_label--visible{margin-bottom:",";}& .fi-search-input_statusText--has-content{margin-top:",";}}&_functionality-container{position:relative;}&_input-element-container{background-color:",";color:",";"," &:focus-within{position:relative;box-shadow:",";&:after{"," top:-3px;bottom:-3px;right:-3px;left:-3px;}> input:focus{outline:none;}}width:100%;height:40px;box-sizing:border-box;border:1px solid ",";border-radius:",";}&_input{"," padding-top:",";padding-bottom:",";width:calc(100% - 24px);min-width:65px;border:0;min-height:36px;margin-top:1px;margin-bottom:1px;&::placeholder{font-style:italic;color:",";opacity:1;}&::-ms-clear{display:none;width:0;height:0;}&::-ms-reveal{display:none;width:0;height:0;}&::-webkit-search-decoration,&::-webkit-search-cancel-button,&::-webkit-search-results-button,&::-webkit-search-results-decoration{display:none;}appearance:none;}&_button{position:absolute;top:0;display:flex;justify-content:center;align-items:center;box-sizing:border-box;outline:none;box-shadow:none;cursor:default;pointer-events:none;&-clear{right:40px;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;overflow:hidden;&-icon{width:12px;height:12px;& .fi-icon-base-fill{fill:",";}}}&-search{right:0px;height:40px;width:40px;border-radius:0 "," "," 0;border:0;&-icon{width:18px;height:18px;& .fi-icon-base-fill{fill:",";}}}}}&.fi-search-input--full-width{width:100%;}&.fi-search-input--error{& .fi-search-input_input-element-container{border:1px solid ",";border-right:0;}& .fi-search-input_button-search{border:1px solid ",";border-left:0;}}&.fi-search-input--not-empty{& .fi-search-input_input-element-container{width:calc(100% - 40px);border-radius:"," 0 0 ",";border-right:0;}& .fi-search-input_button{cursor:pointer;pointer-events:all;}& .fi-search-input_button-search{background:",";&:focus{&:after{","}}&:hover{background:",";}&:active{background-color:",";}& .fi-search-input_button-search-icon .fi-icon-base-fill{fill:",";}}& .fi-search-input_button-clear{clip:auto;overflow:visible;height:20px;width:20px;margin:10px;}}"],(0,L.LZ)(e)("bodyText"),e.spacing.xs,e.spacing.xxs,e.colors.whiteBase,e.colors.blackBase,(0,L.$K)(e),e.shadows.actionElementBoxShadow,e.focus.absoluteFocus,e.colors.depthDark3,e.radius.basic,(0,L.qH)(e),e.spacing.insetS,e.spacing.insetS,e.colors.depthDark2,e.colors.highlightDark1,e.radius.basic,e.radius.basic,e.colors.depthDark1,e.colors.alertBase,e.colors.alertBase,e.radius.basic,e.radius.basic,e.gradients.highlightBaseToHighlightDark1,e.focus.absoluteFocus,e.gradients.highlightLight1ToHighlightBase,e.colors.highlightDark1,e.colors.whiteBase)}(e.theme)})),J=function(e){var t=e.id,n=(0,d.Z)(e,W);return r.createElement(k.cY,null,(function(e){var o=e.suomifiTheme;return r.createElement(j.z,{id:t},(function(e){return r.createElement(Y,K({theme:o,id:e},n))}))}))};J.displayName="SearchInput";var q=function(){return r.createElement(a.Z,{sideNavData:c.Z},r.createElement(i.Z,{title:o.TN}),r.createElement(s.X6,{variant:"h1"},o.TN),r.createElement(s.nv,{variant:"lead"},r.createElement(s.xv,{variant:"lead"},o.mf)),r.createElement(p.Z,null,r.createElement(f.Z,{style:{marginBottom:h.R.spacing.s}},r.createElement(J,{labelText:o.Wm,clearButtonLabel:o.rD,searchButtonLabel:o.mb}))),r.createElement(l.Z,{title:o.gG,items:o.TK}),o.NS.map((function(e,t){return r.createElement(u.Z,{key:t,mainTitle:e.title,paragraphs:e.paragraphs,links:e.links})})))}}}]);
//# sourceMappingURL=component---src-pages-components-searchinput-tsx-fc4a6f3d57d53cb3f45c.js.map