(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1411],{30791:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/searchinput",function(){return n(71031)}])},71031:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var r=n(85893),a=n(9008),i=n.n(a),o=n(37039),c=n(88466),l=n(91760),s=n(35424),u=n(67527),p=n(1292),h=n(4115),d=n(32594),f=n(72119),m=n(89222),b=n(53760),v=n(67434),g=n(60257),x=n(675),_=n(62991),y=n(98607),w=n(78502),j=n(26274),O=n(41518),E=n(67294),P=n(32125),Z=n(94184),k=n.n(Z),N=n(35243),T=n(72465),B=n(98492),R=n(10076),D=n(12834),S=n(27143),C=n(54869),I=n(16344),L=n(44934),z=n(17890),M=n(27111),F=n(49651),X=n(2763),W=n(54279),H=["value","defaultValue","className","labelText","labelMode","clearButtonLabel","searchButtonLabel","searchButtonProps","wrapperProps","onChange","onSearch","children","status","statusText","visualPlaceholder","id","fullWidth","debounce","theme","forwardedRef","aria-describedby","statusTextAriaLiveMode"],V=["id"];function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,j.Z)(e);if(t){var a=(0,j.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,w.Z)(this,n)}}var $="fi-search-input",q={fullWidth:"".concat($,"--full-width"),error:"".concat($,"--error"),notEmpty:"".concat($,"--not-empty"),labelIsVisible:"".concat($,"_label--visible"),styleWrapper:"".concat($,"_wrapper"),inputElement:"".concat($,"_input"),inputElementContainer:"".concat($,"_input-element-container"),functionalityContainer:"".concat($,"_functionality-container"),statusTextHasContent:"".concat($,"_statusText--has-content"),button:"".concat($,"_button"),searchButton:"".concat($,"_button-search"),searchIcon:"".concat($,"_button-search-icon"),clearButton:"".concat($,"_button-clear"),clearIcon:"".concat($,"_button-clear-icon")},G=function(e){(0,y.Z)(n,e);var t=Y(n);function n(){var e;(0,g.Z)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),(0,O.Z)((0,_.Z)(e),"state",{value:e.props.value||e.props.defaultValue||""}),(0,O.Z)((0,_.Z)(e),"inputRef",e.props.forwardedRef||(0,E.createRef)()),e}return(0,x.Z)(n,[{key:"render",value:function(){var e,t=this,n=this.props;n.value,n.defaultValue;var r=n.className,a=n.labelText,i=n.labelMode,o=n.clearButtonLabel,c=n.searchButtonLabel,l=n.searchButtonProps,s=n.wrapperProps,u=n.onChange,p=n.onSearch;n.children;var h=n.status,d=n.statusText,f=n.visualPlaceholder,m=n.id,b=n.fullWidth,g=n.debounce;n.theme,n.forwardedRef;var x=n["aria-describedby"],_=n.statusTextAriaLiveMode,y=void 0===_?"assertive":_,w=(0,v.Z)(n,H),j="".concat(m,"-statusText"),P=function(e){"value"in t.props||t.setState({value:e})},Z=function(){p&&p(t.state.value)},N=function(){P(""),u&&u(""),setTimeout((function(){t.inputRef.current&&t.inputRef.current.focus()}),100)},T=function(e){t.state.value&&"Enter"===(null===e||void 0===e?void 0:e.key)&&Z()},X=function(e){"Escape"===(null===e||void 0===e?void 0:e.key)&&e.preventDefault()},V=A(A({},l),{},{className:k()(null===l||void 0===l?void 0:l.className,q.button,q.searchButton)},this.state.value?{onClick:Z}:{tabIndex:-1,hidden:!0}),K=A({className:k()(q.button,q.clearButton)},this.state.value?{onClick:N}:{tabIndex:-1,hidden:!0});return E.createElement(S.hh,A(A({},s),{},{className:k()(r,$,(e={},(0,O.Z)(e,q.error,"error"===h),(0,O.Z)(e,q.notEmpty,!!this.state.value),(0,O.Z)(e,q.fullWidth,b),e))}),E.createElement(I.I,{className:q.styleWrapper},E.createElement(M._,{htmlFor:m,labelMode:i,className:k()((0,O.Z)({},q.labelIsVisible,"hidden"!==i))},a),E.createElement(R.K,{waitFor:g},(function(e,n){return E.createElement(S.hh,{className:q.functionalityContainer},E.createElement(S.hh,{className:q.inputElementContainer},E.createElement(C.X,A(A(A({},w),(0,B.I5)("aria-describedby",[d?j:void 0,x])),{},{forwardedRef:t.inputRef,"aria-invalid":"error"===h,id:m,className:q.inputElement,type:"search",role:"searchbox",value:t.state.value,placeholder:f,onChange:function(t){var n=t.currentTarget.value;P(n),u&&e(u,n)},onKeyPress:T,onKeyDown:X}))),E.createElement(W.k,A(A({},K),{},{label:o,onClick:function(){N(),n()}})),E.createElement(D.S,A({},V),E.createElement(L.T,null,c),E.createElement(F.JO,{"aria-hidden":!0,icon:"search",className:q.searchIcon})))})),E.createElement(z.r,{id:j,className:k()((0,O.Z)({},q.statusTextHasContent,!!d)),status:h,ariaLiveMode:y},d)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.value;return"value"in e&&n!==t.value?{value:n}:null}}]),n}(E.Component),J=(0,P.ZP)(G).withConfig({componentId:"sc-15b5myw-0"})(["",""],(function(e){return function(e){return(0,P.iv)([""," width:290px;& .fi-search-input{&_wrapper{width:100%;min-width:105px;display:inline-block;& .fi-search-input_label--visible{margin-bottom:",";}& .fi-search-input_statusText--has-content{margin-top:",";}}&_functionality-container{position:relative;}&_input-element-container{background-color:",";color:",";"," &:focus-within{position:relative;box-shadow:",";&:after{"," top:-3px;bottom:-3px;right:-3px;left:-3px;}> input:focus{outline:none;}}width:100%;height:40px;box-sizing:border-box;border:1px solid ",";border-radius:",";}&_input{"," padding-top:",";padding-bottom:",";width:calc(100% - 24px);min-width:65px;border:0;min-height:36px;margin-top:1px;margin-bottom:1px;&::placeholder{font-style:italic;color:",";opacity:1;}&::-ms-clear{display:none;width:0;height:0;}&::-ms-reveal{display:none;width:0;height:0;}&::-webkit-search-decoration,&::-webkit-search-cancel-button,&::-webkit-search-results-button,&::-webkit-search-results-decoration{display:none;}appearance:none;}&_button{position:absolute;top:0;display:flex;justify-content:center;align-items:center;box-sizing:border-box;outline:none;box-shadow:none;cursor:default;pointer-events:none;&-clear{right:40px;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;overflow:hidden;&-icon{width:12px;height:12px;& .fi-icon-base-fill{fill:",";}}}&-search{right:0px;height:40px;width:40px;border-radius:0 "," "," 0;border:0;&-icon{width:18px;height:18px;& .fi-icon-base-fill{fill:",";}}}}}&.fi-search-input--full-width{width:100%;}&.fi-search-input--error{& .fi-search-input_input-element-container{border:1px solid ",";border-right:0;}& .fi-search-input_button-search{border:1px solid ",";border-left:0;}}&.fi-search-input--not-empty{& .fi-search-input_input-element-container{width:calc(100% - 40px);border-radius:"," 0 0 ",";border-right:0;}& .fi-search-input_button{cursor:pointer;pointer-events:all;}& .fi-search-input_button-search{background:",";&:focus{&:after{","}}&:hover{background:",";}&:active{background-color:",";}& .fi-search-input_button-search-icon .fi-icon-base-fill{fill:",";}}& .fi-search-input_button-clear{clip:auto;overflow:visible;height:20px;width:20px;margin:10px;}}"],(0,X.LZ)(e)("bodyText"),e.spacing.xs,e.spacing.xxs,e.colors.whiteBase,e.colors.blackBase,(0,X.$K)(e),e.shadows.actionElementBoxShadow,e.focuses.absoluteFocus,e.colors.depthDark3,e.radiuses.basic,(0,X.qH)(e),e.spacing.insetS,e.spacing.insetS,e.colors.depthDark2,e.colors.highlightDark1,e.radiuses.basic,e.radiuses.basic,e.colors.depthDark1,e.colors.alertBase,e.colors.alertBase,e.radiuses.basic,e.radiuses.basic,e.gradients.highlightBaseToHighlightDark1,e.focuses.absoluteFocus,e.gradients.highlightLight1ToHighlightBase,e.colors.highlightDark1,e.colors.whiteBase)}(e.theme)})),U=(0,E.forwardRef)((function(e,t){var n=e.id,r=(0,v.Z)(e,V);return E.createElement(T.cY,null,(function(e){var a=e.suomifiTheme;return E.createElement(N.z,{id:n},(function(e){return E.createElement(J,A({theme:a,id:e,forwardedRef:t},r))}))}))}));U.displayName="SearchInput";var Q=function(){var e=(0,o.$G)().t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:e("search_input_page.site_title")})}),(0,r.jsxs)(c.Z,{navItems:l.t,navHeaderText:e("main_nav.components"),navIcon:"puzzle",children:[(0,r.jsx)(p.X,{variant:"h1",children:e("search_input_page.heading")}),(0,r.jsx)(h.g,{variant:"div",mt:"m",children:(0,r.jsx)(d.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/SearchInput",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("common.see_technical_documentation_of_component")})}),(0,r.jsx)(f.n,{className:"my-xl",children:(0,r.jsx)(m.x,{variant:"lead",children:e("search_input_page.ingress")})}),(0,r.jsx)(u.Z,{style:{marginBottom:b.R.spacing.s},children:(0,r.jsx)(U,{labelText:e("search_input_page.example.regular.label"),clearButtonLabel:e("search_input_page.example.regular.clear_button_label"),searchButtonLabel:e("search_input_page.example.regular.search_button_label")})}),(0,r.jsx)(h.g,{variant:"section",className:"my-xl",children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(p.X,{variant:"h3",as:"h2",children:e("common.accessibility_and_usability")}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:e("search_input_page.accessibility_list.point_1")}),(0,r.jsx)("li",{children:e("search_input_page.accessibility_list.point_2")}),(0,r.jsx)("li",{children:e("search_input_page.accessibility_list.point_3")}),(0,r.jsx)("li",{children:e("search_input_page.accessibility_list.point_4")})]})]})}),(0,r.jsxs)(h.g,{variant:"section",children:[(0,r.jsx)(p.X,{variant:"h2",className:"mb-xl",children:e("search_input_page.what_does_the_component_contain.heading")}),(0,r.jsx)(f.n,{className:"my-xl",children:e("search_input_page.what_does_the_component_contain.text_1")})]}),(0,r.jsxs)(h.g,{variant:"section",children:[(0,r.jsx)(p.X,{variant:"h2",className:"mb-xl",children:e("search_input_page.size_and_usage.heading")}),(0,r.jsx)(f.n,{className:"my-xl",children:e("search_input_page.size_and_usage.text_1")}),(0,r.jsx)(f.n,{className:"my-xl",children:e("search_input_page.size_and_usage.text_2")}),(0,r.jsx)(f.n,{className:"my-xl",children:e("search_input_page.size_and_usage.text_3")})]}),(0,r.jsxs)(h.g,{variant:"section",children:[(0,r.jsx)(p.X,{variant:"h2",className:"mb-xl",children:e("search_input_page.in_ui.heading")}),(0,r.jsx)(f.n,{className:"my-xl",children:e("search_input_page.in_ui.text_1")})]})]})]})}},27111:function(e,t,n){"use strict";n.d(t,{_:function(){return y}});var r=n(41518),a=n(27135),i=n(67434),o=n(67294),c=n(94184),l=n.n(c),s=n(32125),u=n(72465),p=n(2763),h=n(44934),d=n(27143),f=n(16344),m=["className","contentStyle","contentClassName","theme","labelMode","wrapperProps","children","asProp","optionalText","tooltipComponent","forceTooltipRerender"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g="fi-label",x={labelSpan:"".concat(g,"_label-span"),optionalText:"".concat(g,"_optional-text")},_=(0,s.ZP)((function(e){var t=e.className,n=e.contentStyle,r=e.contentClassName;e.theme;var c,s=e.labelMode,u=void 0===s?"visible":s,p=e.wrapperProps,b=e.children,_=e.asProp,y=void 0===_?"label":_,w=e.optionalText,j=e.tooltipComponent,O=e.forceTooltipRerender,E=void 0!==O&&O,P=(0,i.Z)(e,m),Z=(0,o.useState)(null),k=(0,a.Z)(Z,2),N=k[0],T=k[1];return o.createElement(d.lk,v(v({className:l()(t,g)},p),{},{forwardedRef:function(e){return T(e)}}),"hidden"===u?o.createElement(h.T,v({as:y},P),b,w&&"(".concat(w,")")):o.createElement(o.Fragment,null,o.createElement(f.I,v(v({as:y,style:n?v({},n):{}},P),{},{className:l()(x.labelSpan,r)}),b,w&&o.createElement(f.I,{className:x.optionalText}," (".concat(w,")"))),!!j&&(c=j,(0,o.isValidElement)(c)?(0,o.cloneElement)(c,{anchorElement:N,key:E?Date.now():null}):null)))})).withConfig({componentId:"sc-cooxd2-0"})(["",""],(function(e){return function(e){return(0,s.iv)(["&.fi-label{& .fi-label_label-span{",";display:inline-block;vertical-align:middle;color:",";& .fi-label_optional-text{",";}& .fi-tooltip{margin-left:",";}}}"],(0,p.LZ)(e)("actionElementInnerTextBold"),e.colors.blackBase,e.typography.bodyTextSmall,e.spacing.insetS)}(e.theme)})),y=function(e){return o.createElement(u.cY,null,(function(t){var n=t.suomifiTheme;return o.createElement(_,v({theme:n},e))}))};y.displayName="Label"},17890:function(e,t,n){"use strict";n.d(t,{r:function(){return x}});var r=n(41518),a=n(67434),i=n(67294),o=n(94184),c=n.n(o),l=n(32125),s=n(72465),u=n(16344),p=n(2763),h=["className","children","disabled","status","theme","ariaLiveMode"],d=["children"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b="fi-status-text",v={error:"".concat(b,"--error")},g=(0,l.ZP)((function(e){var t=e.className,n=e.children,o=e.disabled,l=e.status;e.theme;var s=e.ariaLiveMode,p=void 0===s?"polite":s,d=(0,a.Z)(e,h),f=o?{"aria-live":"off"}:{"aria-live":p};return i.createElement(u.I,m(m(m({},d),f),{},{className:c()(t,b,(0,r.Z)({},v.error,"error"===l)),"aria-atomic":"true"}),n)})).withConfig({componentId:"sc-18fcmym-0"})(["",""],(function(e){return function(e){return(0,l.iv)(["",";color:",";font-size:14px;line-height:20px;&.fi-status-text{display:block;&.fi-status-text--error{color:",";}}"],(0,p.LZ)(e)("bodySemiBoldSmall"),e.colors.blackBase,e.colors.alertBase)}(e.theme)})),x=(0,i.forwardRef)((function(e,t){var n=e.children,r=(0,a.Z)(e,d);return i.createElement(s.cY,null,(function(e){var a=e.suomifiTheme;return i.createElement(g,m({forwardedRef:t,theme:a},r),n)}))}));x.displayName="StatusText"},10076:function(e,t,n){"use strict";n.d(t,{K:function(){return p}});var r=n(60257),a=n(675),i=n(62991),o=n(98607),c=n(78502),l=n(26274),s=n(41518);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var a=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var p=function(e){(0,o.Z)(n,e);var t=u(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),(0,s.Z)((0,i.Z)(e),"timeout",null),(0,s.Z)((0,i.Z)(e),"debouncer",(function(t,n){if(t)if(e.props.waitFor){e.cancelTimeout();var r=e.props.waitFor;e.timeout=setTimeout((function(){t(n)}),r)}else t(n)})),(0,s.Z)((0,i.Z)(e),"cancelDebounce",(function(){e.cancelTimeout()})),e}return(0,a.Z)(n,[{key:"componentWillUnmount",value:function(){this.cancelTimeout()}},{key:"cancelTimeout",value:function(){null!==this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}},{key:"render",value:function(){var e=this.props.children;return e?e(this.debouncer,this.cancelDebounce):null}}]),n}(n(67294).Component)},54869:function(e,t,n){"use strict";n.d(t,{X:function(){return h}});var r=n(41518),a=n(67434),i=n(67294),o=n(32125),c=n(75142),l=["type","forwardedRef"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,o.iv)([""," "," "," "," display:inline-block;max-width:100%;"],c.i.normalize.html,c.i.normalize.input,(0,c.O)(["::-webkit-input-placeholder"]),c.i.common),h=(0,o.ZP)((function(e){var t=e.type,n=e.forwardedRef,r=(0,a.Z)(e,l);return i.createElement("input",u(u({},r),{},{type:t||"text",ref:n}))})).withConfig({componentId:"sc-fkzflm-0"})(["",""],p)}},function(e){e.O(0,[6510,8043,1550,9774,2888,179],(function(){return t=30791,e(e.s=t);var t}));var t=e.O();_N_E=t}]);