(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7731],{44238:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/timeinput",function(){return n(93723)}])},67527:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var i=n(26042),a=n(69396),o=n(85893),s=n(19200),r=n(27135),c=n(27001),l=n(67294),p=n(68275),d=n.n(p),m=function(e){var t=e.style,n=e.children;return(0,o.jsxs)("div",{className:d().frame,children:[(0,o.jsx)("div",{className:d().microphone}),(0,o.jsx)("div",{className:d().screen,style:(0,i.Z)({},t),children:n})]})},u=n(18743),h=n.n(u),x=function(e){var t=e.children,n=e.style;return(0,o.jsx)("div",{className:h().showcaseBox,style:n,children:t})},_=n(87413),g=n(93179),f=function(e){var t=e.style,n=e.children;return(0,o.jsx)(g.Z,{language:"jsx",customStyle:(0,i.Z)({margin:0,padding:0,background:"none",fontSize:"0.85rem",whiteSpace:"pre-wrap",wordBreak:"break-word"},t),codeTagProps:{style:{}},wrapLongLines:!0,children:n})},v=function(e){var t=e.style,n=e.filterProps,i=e.children,a=e.codeString;return(0,o.jsxs)("div",{className:"py-xs",style:t,children:[!!a&&(0,o.jsx)(f,{style:{marginBottom:i?"1rem":0},children:a}),!!i&&(0,o.jsx)(f,{children:(0,_.ZP)(i,{filterProps:n||["id","style","aria-label"],showFunctions:!0,functionValue:function(){return"..."}})})]})},b=function(e){return l.Children.map(e,(function(e){return e&&e.type&&("div"===e.type||"div"===e.type.displayName)?b(e.props.children):e}))},j=function(e){var t=e.children,n=e.variant,l=e.filterPropsInExample,p=e.codeString,d=e.showCode,u=void 0!==d&&d,h=e.style,_="mobile_device"===n?(0,o.jsx)(x,{style:(0,a.Z)((0,i.Z)({},h),{paddingBottom:0}),children:(0,o.jsx)(m,{children:t})}):t?(0,o.jsx)(x,{style:h,children:t}):null;return(0,o.jsxs)(o.Fragment,{children:[_,u&&(0,o.jsxs)(s.xH,{className:"mt-l mb-l",children:[(0,o.jsx)(r.T,{children:"Koodiesimerkki (React)"}),(0,o.jsx)(c.i,{children:p?(0,o.jsx)(v,{codeString:p}):b(t).map((function(e,t){return(0,o.jsx)(v,{filterProps:l,style:{paddingTop:0===t?"1rem":0},children:e},t)}))})]})]})}},35424:function(e,t,n){"use strict";var i=n(85893),a=n(4115),o=n(77258),s=n.n(o);t.Z=function(e){var t=e.children;return(0,i.jsx)(a.g,{variant:"div",className:s().infoBox,children:t})}},88466:function(e,t,n){"use strict";var i=n(85893),a=n(28384),o=n(40026),s=n(32787),r=n(4115),c=n(39153),l=n(17121),p=n(30792),d=n(41605),m=n.n(d),u=n(41664),h=n.n(u),x=n(11163),_=function(e,t){switch(e){case"book":return(0,i.jsx)(a.Z,{className:t});case"puzzle":return(0,i.jsx)(o.I,{className:t});case"magicWand":return(0,i.jsx)(s.C,{className:t});default:return null}};t.Z=function(e){var t=e.navItems,n=e.children,a=e.navIcon,o=e.navHeaderText,s=(0,x.useRouter)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.g,{className:"container",children:[(0,i.jsx)(r.g,{variant:"section",className:m().smallScreenNavContainer,children:(0,i.jsx)(c.B,{"aria-label":"Sivunavigaatio",id:"sidenav",variant:"smallScreen",smallScreenExpandButtonText:(0,i.jsxs)(r.g,{variant:"div",className:"flex align-center",children:[_(a,m().navStaticIcon),(0,i.jsx)(r.g,{className:m().navHeadertext,children:o})]}),initiallyExpanded:!1,children:t.map((function(e){return(0,i.jsx)(l.p,{selected:s.pathname===e.path,children:(0,i.jsx)(h(),{href:e.path,passHref:!0,children:(0,i.jsx)(p.r,{"aria-current":s.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})}),(0,i.jsxs)(r.g,{variant:"section",className:m().SideNavLayout,children:[(0,i.jsxs)(r.g,{className:m().left,children:[(0,i.jsxs)(r.g,{variant:"div",className:m().navHeader,children:[_(a,m().navStaticIcon),(0,i.jsx)(r.g,{className:m().navHeadertext,children:o})]}),(0,i.jsx)(c.B,{"aria-label":"Sivunavigaatio",id:"sidenav",children:t.map((function(e){return(0,i.jsx)(l.p,{selected:s.pathname===e.path,children:(0,i.jsx)(h(),{href:e.path,passHref:!0,children:(0,i.jsx)(p.r,{"aria-current":s.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})]}),(0,i.jsx)(r.g,{variant:"main",id:"main",className:m().right,children:n})]})]})})}},93723:function(e,t,n){"use strict";n.r(t);var i=n(85893),a=n(9008),o=n.n(a),s=n(37039),r=n(88466),c=n(91760),l=n(35424),p=n(67527),d=n(1292),m=n(4115),u=n(32594),h=n(72119),x=n(89222),_=n(53760),g=n(27591),f=n(25279);t.default=function(){var e=(0,s.$G)().t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{children:(0,i.jsx)("title",{children:e("time_input_page.site_title")})}),(0,i.jsxs)(r.Z,{navItems:c.t,navHeaderText:e("main_nav.components"),navIcon:"puzzle",children:[(0,i.jsx)(d.X,{variant:"h1",children:e("time_input_page.heading")}),(0,i.jsx)(m.g,{variant:"div",mt:"m",children:(0,i.jsx)(u.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/TimeInput",labelNewWindow:e("common.opens_in_a_new_tab"),variant:"accent",children:e("common.see_technical_documentation_of_component")})}),(0,i.jsx)(h.n,{className:"my-xl",children:(0,i.jsx)(x.x,{variant:"lead",children:e("time_input_page.ingress")})}),(0,i.jsx)(p.Z,{style:{marginBottom:_.R.spacing.s},children:(0,i.jsx)(g.M,{labelText:e("time_input_page.example.label"),hintText:e("time_input_page.example.hint_text")})}),(0,i.jsx)(m.g,{variant:"section",className:"my-xl",children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.X,{variant:"h3",as:"h2",children:e("common.accessibility_and_usability")}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:e("time_input_page.accessibility_list.point_1")}),(0,i.jsx)("li",{children:e("time_input_page.accessibility_list.point_2")}),(0,i.jsx)("li",{children:e("time_input_page.accessibility_list.point_3")}),(0,i.jsx)("li",{children:e("time_input_page.accessibility_list.point_4")}),(0,i.jsx)("li",{children:e("time_input_page.accessibility_list.point_5")})]})]})}),(0,i.jsxs)(m.g,{variant:"section",children:[(0,i.jsx)(d.X,{variant:"h2",className:"mb-xl",children:e("time_input_page.what_does_the_component_contain.heading")}),(0,i.jsx)(h.n,{className:"my-xl",children:e("time_input_page.what_does_the_component_contain.text_1")}),(0,i.jsx)(h.n,{className:"my-xl",children:e("time_input_page.what_does_the_component_contain.text_2")})]}),(0,i.jsxs)(m.g,{variant:"section",className:"my-xl",children:[(0,i.jsx)(d.X,{variant:"h2",className:"mb-xl",children:e("time_input_page.size_and_usage.heading")}),(0,i.jsx)(h.n,{className:"my-xl",children:e("time_input_page.size_and_usage.text_1")}),(0,i.jsx)(h.n,{className:"my-xl",children:e("time_input_page.size_and_usage.text_2")}),(0,i.jsx)(m.g,{variant:"div",mt:"m",children:(0,i.jsx)(f.r,{href:"/patterns/datetime",variant:"accent",children:e("time_input_page.size_and_usage.pattern_link_text")})})]}),(0,i.jsxs)(m.g,{variant:"section",children:[(0,i.jsx)(d.X,{variant:"h2",className:"mb-xl",children:e("time_input_page.autocomplete.heading")}),(0,i.jsx)(h.n,{className:"my-xl",children:e("time_input_page.autocomplete.text")}),(0,i.jsx)(m.g,{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[e("time_input_page.autocomplete.point_1"),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"14 \u2192 14.00"}),(0,i.jsx)("li",{children:"8 \u2192 8.00"}),(0,i.jsx)("li",{children:"08 \u2192 8.00"})]})]}),(0,i.jsxs)("li",{children:[e("time_input_page.autocomplete.point_2"),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"1745 \u2192 17.45"}),(0,i.jsx)("li",{children:"0800 \u2192 8.00"})]})]}),(0,i.jsxs)("li",{children:[e("time_input_page.autocomplete.point_3"),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"02.00 \u2192 2.00"})})]}),(0,i.jsxs)("li",{children:[e("time_input_page.autocomplete.point_4"),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"15:30 \u2192 15.30"})})]})]})})]})]})]})}},91760:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var i=n(86287),a=[{title:i.components.component_usage_info,path:"/components"},{title:i.components.actionmenu,path:"/components/actionmenu"},{title:i.components.alert,path:"/components/alert"},{title:i.components.block,path:"/components/block"},{title:i.components.breadcrumb,path:"/components/breadcrumb"},{title:i.components.button,path:"/components/button"},{title:i.components.checkbox,path:"/components/checkbox"},{title:i.components.date_input,path:"/components/dateinput"},{title:i.components.details,path:"/components/details"},{title:i.components.dropdown,path:"/components/dropdown"},{title:i.components.error_summary,path:"/components/errorsummary"},{title:i.components.expander,path:"/components/expander"},{title:i.components.heading,path:"/components/heading"},{title:i.components.icon,path:"/components/icon"},{title:i.components.language_menu,path:"/components/languagemenu"},{title:i.components.link,path:"/components/link"},{title:i.components.loading_spinner,path:"/components/loadingspinner"},{title:i.components.modal,path:"/components/modal"},{title:i.components.multiselect,path:"/components/multiselect"},{title:i.components.notification,path:"/components/notification"},{title:i.components.pagination,path:"/components/pagination"},{title:i.components.radio_button,path:"/components/radiobutton"},{title:i.components.search_input,path:"/components/searchinput"},{title:i.components.service_navigation,path:"/components/servicenavigation"},{title:i.components.side_navigation,path:"/components/sidenavigation"},{title:i.components.singleselect,path:"/components/singleselect"},{title:i.components.text,path:"/components/text"},{title:i.components.textarea,path:"/components/textarea"},{title:i.components.text_input,path:"/components/textinput"},{title:i.components.time_input,path:"/components/timeinput"},{title:i.components.toast,path:"/components/toast"},{title:i.components.toggle,path:"/components/toggle"},{title:i.components.tooltip,path:"/components/tooltip"},{title:i.components.wizard_navigation,path:"/components/wizardnavigation"}]},77258:function(e){e.exports={infoBox:"InfoBox_infoBox__we0AO"}},68275:function(e){e.exports={frame:"MobileDevice_frame__Vj0B_",microphone:"MobileDevice_microphone__mAuTL",screen:"MobileDevice_screen__xvTTt"}},18743:function(e){e.exports={showcaseBox:"ShowcaseBox_showcaseBox__FG31_"}},41605:function(e){e.exports={smallScreenNavContainer:"SideNavLayout_smallScreenNavContainer__AM9Lz",navHeadertext:"SideNavLayout_navHeadertext__IjrFs",SideNavLayout:"SideNavLayout_SideNavLayout__WNNTT",left:"SideNavLayout_left__HEGEN",navHeader:"SideNavLayout_navHeader__HRIUu",right:"SideNavLayout_right__3d8ao",navStaticIcon:"SideNavLayout_navStaticIcon__rLjuG"}},16121:function(e,t,n){"use strict";n.d(t,{Q:function(){return y}});var i=n(4942),a=n(86854),o=n(91),s=n(67294),r=n(94184),c=n.n(r),l=n(19521),p=n(16344),d=n(72465),m=n(1639),u=n(43146),h=n(2763),x=n(48180),_=["className","globalMargins","theme","children"],g=["theme","globalMargins"],f=["children"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=(0,l.ZP)((function(e){var t=e.className;e.globalMargins,e.theme;var n=e.children,i=(0,o.Z)(e,_),r=(0,u.Gu)(i),l=(0,a.Z)(r,2);l[0];var d=l[1];return s.createElement(p.I,b(b({},d),{},{className:c()(t,"fi-hint-text",{}),style:b({},null===d||void 0===d?void 0:d.style)}),n)})).withConfig({componentId:"sc-ketar6-0"})(["",""],(function(e){var t=e.theme,n=e.globalMargins,i=(0,o.Z)(e,g),s=(0,u.Gu)(i),r=(0,a.Z)(s,2),c=r[0];return r[1],function(e,t,n){return(0,l.iv)(["color:",";",";"," "," &.fi-hint-text{display:block;}"],e.colors.blackBase,(0,h.LZ)(e)("bodyTextSmall"),(0,u._s)(t),(0,u._s)(n,!0))}(t,(0,x.li)(n.hintText,c),c)})),y=(0,s.forwardRef)((function(e,t){var n=e.children,i=(0,o.Z)(e,f);return n?s.createElement(m.ON,null,(function(e){var a=e.margins;return s.createElement(d.cY,null,(function(e){var o=e.suomifiTheme;return s.createElement(j,b({forwardedRef:t,theme:o,globalMargins:a},i),n)}))})):null}));y.displayName="HintText"},27591:function(e,t,n){"use strict";n.d(t,{M:function(){return C}});var i=n(4942),a=n(86854),o=n(91),s=n(67294),r=n(19521),c=n(94184),l=n.n(c),p=n(35243),d=n(72465),m=n(1639),u=n(10076),h=n(98492),x=n(48180),_=n(43146),g=n(27143),f=n(54869),v=n(16344),b=n(27111),j=n(17890),y=n(16121),w=n(2763),N=n(35360),T=["className","labelText","labelMode","visualPlaceholder","onChange","onBlur","style","optionalText","status","statusText","hintText","id","value","defaultValue","forwardedRef","debounce","statusTextAriaLiveMode","aria-describedby","tooltipComponent"],O=["theme","globalMargins"],Z=["theme","globalMargins"],E=["id"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L="fi-time-input",B={baseClassName:L,disabled:"".concat(L,"--disabled"),error:"".concat(L,"--error"),success:"".concat(L,"--success"),labelIsVisible:"".concat(L,"_label--visible"),inputElementContainer:"".concat(L,"_input-element-container"),inputElement:"".concat(L,"_input"),styleWrapper:"".concat(L,"_wrapper"),statusTextHasContent:"".concat(L,"_statusText--has-content")},P=function(e){var t,n=e.className,r=e.labelText,c=e.labelMode,p=e.visualPlaceholder,d=e.onChange,m=e.onBlur,w=e.style,N=e.optionalText,O=e.status,Z=e.statusText,E=e.hintText,S=e.id,P=e.value,I=e.defaultValue,C=e.forwardedRef,M=e.debounce,H=e.statusTextAriaLiveMode,z=void 0===H?"assertive":H,D=e["aria-describedby"],R=e.tooltipComponent,F=(0,o.Z)(e,T),G=(0,_.Gu)(F),X=(0,a.Z)(G,2);X[0];var A=X[1],V=(0,s.useState)(I||""),W=(0,a.Z)(V,2),K=W[0],Q=W[1],Y=(0,s.useRef)(null),$=C||null,U=function(){if(P)m&&m(null);else{var e=(0,x.wh)(K);e&&Q(e),m&&m(e||K)}},q="".concat(S,"-hintText"),J="".concat(S,"-statusText");return s.createElement(g.hh,{className:l()(L,n,(t={},(0,i.Z)(t,B.disabled,!!A.disabled),(0,i.Z)(t,B.error,"error"===O),(0,i.Z)(t,B.success,"success"===O),t)),style:w},s.createElement(v.I,{className:B.styleWrapper},s.createElement(b._,{htmlFor:S,labelMode:c,optionalText:N,className:l()((0,i.Z)({},B.labelIsVisible,"hidden"!==c)),tooltipComponent:R},r),s.createElement(y.Q,{id:q},E),s.createElement(g.hh,{className:B.inputElementContainer},s.createElement(u.K,{waitFor:M},(function(e){return s.createElement(f.X,k(k(k(k({},A),{},{id:S,className:B.inputElement,placeholder:p,forwardedRef:(0,x.K_)(Y,$),maxLength:5},{"aria-invalid":"error"===O}),(0,h.I)("aria-describedby",[Z?J:void 0,E?q:void 0,D])),{},{onChange:function(t){d&&e(d,t.currentTarget.value),Q(t.currentTarget.value)},onBlur:U,value:P||K}))}))),s.createElement(j.r,{id:J,className:l()((0,i.Z)({},B.statusTextHasContent,!!Z)),status:O,ariaLiveMode:z,disabled:A.disabled},Z)))},I=(0,r.ZP)((function(e){e.theme,e.globalMargins;var t=(0,o.Z)(e,O);return s.createElement(P,k({},t))})).withConfig({componentId:"sc-jwuh9o-0"})(["",""],(function(e){var t=e.theme,n=e.globalMargins,i=(0,o.Z)(e,Z),s=(0,_.Gu)(i),c=(0,a.Z)(s,2),l=c[0];return c[1],function(e,t,n){return(0,r.iv)([""," "," "," "," max-width:290px;& .fi-time-input_character-counter{",";color:",";font-size:14px;line-height:20px;flex:none;margin-top:4px;&.fi-time-input_character-counter--error{color:",";",";font-size:14px;line-height:20px;}}& .fi-time-input_bottom-wrapper{display:flex;justify-content:space-between;}& .fi-time-input_wrapper{width:100%;display:inline-block;& .fi-time-input_label--visible{margin-bottom:",";}& .fi-hint-text{margin-bottom:",";}& .fi-time-input_statusText--has-content{margin-top:",";}}& .fi-time-input_input-element-container{width:60px;"," &:focus-within{position:relative;"," &::after{","}}}&.fi-time-input--full-width{width:100%;}& .fi-time-input_input{"," "," width:100%;border:1px solid ",";border-radius:",";line-height:1;background-color:",";height:40px;padding:",";border-color:",";&::placeholder{color:",";opacity:1;text-align:center;}&::-ms-clear{display:none;width:0;height:0;}&::-ms-reveal{display:none;width:0;height:0;}}&.fi-time-input_with-icon{& .fi-time-input_input-element-container{position:relative;}& .fi-time-input_input{padding-right:",";}& .fi-icon{position:absolute;width:18px;height:18px;top:",";right:",";}}&.fi-time-input--error{& .fi-time-input_input{border:2px solid ",";padding-left:9px;padding-top:7px;padding-bottom:7px;}}&.fi-time-input--success{& .fi-time-input_input{border:2px solid ",";padding-left:9px;padding-top:7px;padding-bottom:7px;}}&.fi-time-input--disabled{& .fi-time-input_input{color:",";background-color:",";}& .fi-icon-base-fill{fill:",";}}"],(0,w.LZ)(e)("bodyText"),(0,_._s)(t),(0,_._s)(n,!0),(0,w.oE)(),(0,w.LZ)(e)("bodyTextSmall"),e.colors.blackBase,e.colors.alertBase,(0,w.LZ)(e)("bodySemiBoldSmall"),e.spacing.xs,e.spacing.xs,e.spacing.xxs,(0,w.$K)(e),e.focuses.highContrastFocus,e.focuses.absoluteFocus,(0,w.bG)(e),(0,w.LZ)(e)("actionElementInnerText"),e.colors.depthLight1,e.radiuses.basic,e.colors.whiteBase,e.spacing.insetL,e.colors.depthDark3,e.colors.depthDark2,(0,N.mA)("".concat(e.spacing.insetXl," * 2 + ").concat(e.spacing.insetM)),e.spacing.insetL,e.spacing.insetL,e.colors.alertBase,e.colors.successBase,e.colors.depthBase,e.colors.depthLight3,e.colors.depthBase)}(t,(0,x.li)(n.timeInput,l),l)})),C=(0,s.forwardRef)((function(e,t){var n=e.id,i=(0,o.Z)(e,E);return s.createElement(m.ON,null,(function(e){var a=e.margins;return s.createElement(d.cY,null,(function(e){var o=e.suomifiTheme;return s.createElement(p.z,{id:n},(function(e){return s.createElement(I,k({theme:o,id:e,globalMargins:a,forwardedRef:t},i))}))}))}))}));C.displayName="TimeInput"}},function(e){e.O(0,[3481,5912,5360,4202,9774,2888,179],(function(){return t=44238,e(e.s=t);var t}));var t=e.O();_N_E=t}]);