(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7449],{17581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/toast",function(){return n(74848)}])},67527:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(26042),i=n(69396),o=n(85893),s=n(19200),r=n(16027),c=n(27001),l=n(67294),p=n(68275),d=n.n(p),m=function(e){var t=e.style,n=e.children;return(0,o.jsxs)("div",{className:d().frame,children:[(0,o.jsx)("div",{className:d().microphone}),(0,o.jsx)("div",{className:d().screen,style:(0,a.Z)({},t),children:n})]})},h=n(18743),u=n.n(h),x=function(e){var t=e.children,n=e.style;return(0,o.jsx)("div",{className:u().showcaseBox,style:n,children:t})},v=n(87413),f=n(22557),g=function(e){var t=e.style,n=e.children;return(0,o.jsx)(f.Z,{language:"jsx",customStyle:(0,a.Z)({margin:0,padding:0,background:"none",fontSize:"0.85rem",whiteSpace:"pre-wrap",wordBreak:"break-word"},t),codeTagProps:{style:{}},wrapLongLines:!0,children:n})},_=function(e){var t=e.style,n=e.filterProps,a=e.children,i=e.codeString;return(0,o.jsxs)("div",{className:"py-xs",style:t,children:[!!i&&(0,o.jsx)(g,{style:{marginBottom:a?"1rem":0},children:i}),!!a&&(0,o.jsx)(g,{children:(0,v.ZP)(a,{filterProps:n||["id","style","aria-label"],showFunctions:!0,functionValue:function(){return"..."}})})]})},j=function(e){return l.Children.map(e,(function(e){return e&&e.type&&("div"===e.type||"div"===e.type.displayName)?j(e.props.children):e}))},b=function(e){var t=e.children,n=e.variant,l=e.filterPropsInExample,p=e.codeString,d=e.showCode,h=void 0!==d&&d,u=e.style,v="mobile_device"===n?(0,o.jsx)(x,{style:(0,i.Z)((0,a.Z)({},u),{paddingBottom:0}),children:(0,o.jsx)(m,{children:t})}):t?(0,o.jsx)(x,{style:u,children:t}):null;return(0,o.jsxs)(o.Fragment,{children:[v,h&&(0,o.jsxs)(s.xH,{className:"mt-l mb-l",children:[(0,o.jsx)(r.T,{children:"Koodiesimerkki (React)"}),(0,o.jsx)(c.i,{children:p?(0,o.jsx)(_,{codeString:p}):j(t).map((function(e,t){return(0,o.jsx)(_,{filterProps:l,style:{paddingTop:0===t?"1rem":0},children:e},t)}))})]})]})}},35424:function(e,t,n){"use strict";var a=n(85893),i=n(4115),o=n(77258),s=n.n(o);t.Z=function(e){var t=e.children;return(0,a.jsx)(i.g,{variant:"div",className:s().infoBox,children:t})}},88466:function(e,t,n){"use strict";var a=n(85893),i=n(12232),o=n(67702),s=n(89439),r=n(4115),c=n(39153),l=n(17121),p=n(30792),d=n(41605),m=n.n(d),h=n(41664),u=n.n(h),x=n(11163),v=function(e,t){switch(e){case"book":return(0,a.jsx)(i.Z,{className:t});case"puzzle":return(0,a.jsx)(o.I,{className:t});case"magicWand":return(0,a.jsx)(s.C,{className:t});default:return null}};t.Z=function(e){var t=e.navItems,n=e.children,i=e.navIcon,o=e.navHeaderText,s=(0,x.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.g,{className:"container",children:[(0,a.jsx)(r.g,{variant:"section",className:m().smallScreenNavContainer,children:(0,a.jsx)(c.B,{"aria-label":"Sivunavigaatio",id:"sidenav",variant:"smallScreen",smallScreenExpandButtonText:(0,a.jsxs)(r.g,{variant:"div",className:"flex align-center",children:[v(i,m().navStaticIcon),(0,a.jsx)(r.g,{className:m().navHeadertext,children:o})]}),initiallyExpanded:!1,children:t.map((function(e){return(0,a.jsx)(l.p,{selected:s.pathname===e.path,children:(0,a.jsx)(u(),{href:e.path,passHref:!0,children:(0,a.jsx)(p.r,{"aria-current":s.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})}),(0,a.jsxs)(r.g,{variant:"section",className:m().SideNavLayout,children:[(0,a.jsxs)(r.g,{className:m().left,children:[(0,a.jsxs)(r.g,{variant:"div",className:m().navHeader,children:[v(i,m().navStaticIcon),(0,a.jsx)(r.g,{className:m().navHeadertext,children:o})]}),(0,a.jsx)(c.B,{"aria-label":"Sivunavigaatio",id:"sidenav",children:t.map((function(e){return(0,a.jsx)(l.p,{selected:s.pathname===e.path,children:(0,a.jsx)(u(),{href:e.path,passHref:!0,children:(0,a.jsx)(p.r,{"aria-current":s.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})]}),(0,a.jsx)(r.g,{variant:"main",id:"main",className:m().right,children:n})]})]})})}},74848:function(e,t,n){"use strict";n.r(t);var a=n(85893),i=n(9008),o=n.n(i),s=n(37039),r=n(88466),c=n(91760),l=n(35424),p=n(67527),d=n(1292),m=n(4115),h=n(30407),u=n(72119),x=n(89222),v=n(53760),f=n(89424);t.default=function(){var e=(0,s.$G)().t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:e("toast_page.site_title")})}),(0,a.jsxs)(r.Z,{navItems:c.t,navHeaderText:e("main_nav.components"),navIcon:"puzzle",children:[(0,a.jsx)(d.X,{variant:"h1",children:e("toast_page.heading")}),(0,a.jsx)(m.g,{variant:"div",mt:"m",children:(0,a.jsx)(h.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Toast",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("common.see_technical_documentation_of_component")})}),(0,a.jsx)(u.n,{className:"my-xl",children:(0,a.jsx)(x.x,{variant:"lead",children:e("toast_page.ingress")})}),(0,a.jsx)(p.Z,{style:{marginBottom:v.R.spacing.s},children:(0,a.jsx)(f.F,{children:e("toast_page.example.content")})}),(0,a.jsx)(m.g,{variant:"section",className:"my-xl",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(d.X,{variant:"h3",as:"h2",children:e("common.accessibility_and_usability")}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:e("toast_page.accessibility_list.point_1")}),(0,a.jsx)("li",{children:e("toast_page.accessibility_list.point_2")}),(0,a.jsx)("li",{children:e("toast_page.accessibility_list.point_3")})]})]})}),(0,a.jsxs)(m.g,{variant:"section",children:[(0,a.jsx)(d.X,{variant:"h2",className:"mb-xl",children:e("toast_page.what_does_the_component_contain.heading")}),(0,a.jsx)(u.n,{className:"my-xl",children:e("toast_page.what_does_the_component_contain.text_1")})]}),(0,a.jsxs)(m.g,{variant:"section",children:[(0,a.jsx)(d.X,{variant:"h2",className:"mb-xl",children:e("toast_page.size_and_usage.heading")}),(0,a.jsx)(u.n,{className:"my-xl",children:e("toast_page.size_and_usage.text_1")}),(0,a.jsx)(u.n,{className:"my-xl",children:e("toast_page.size_and_usage.text_2")})]}),(0,a.jsx)(m.g,{variant:"div",mt:"m",mb:"l",children:(0,a.jsx)(h.d,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("toast_page.link_text")})})]})]})}},91760:function(e,t,n){"use strict";n.d(t,{t:function(){return i}});var a=n(86287),i=[{title:a.components.component_usage_info,path:"/components"},{title:a.components.actionmenu,path:"/components/actionmenu"},{title:a.components.alert,path:"/components/alert"},{title:a.components.block,path:"/components/block"},{title:a.components.breadcrumb,path:"/components/breadcrumb"},{title:a.components.button,path:"/components/button"},{title:a.components.checkbox,path:"/components/checkbox"},{title:a.components.date_input,path:"/components/dateinput"},{title:a.components.dropdown,path:"/components/dropdown"},{title:a.components.expander,path:"/components/expander"},{title:a.components.heading,path:"/components/heading"},{title:a.components.icon,path:"/components/icon"},{title:a.components.language_menu,path:"/components/languagemenu"},{title:a.components.link,path:"/components/link"},{title:a.components.loading_spinner,path:"/components/loadingspinner"},{title:a.components.modal,path:"/components/modal"},{title:a.components.multiselect,path:"/components/multiselect"},{title:a.components.notification,path:"/components/notification"},{title:a.components.pagination,path:"/components/pagination"},{title:a.components.radio_button,path:"/components/radiobutton"},{title:a.components.search_input,path:"/components/searchinput"},{title:a.components.service_navigation,path:"/components/servicenavigation"},{title:a.components.side_navigation,path:"/components/sidenavigation"},{title:a.components.singleselect,path:"/components/singleselect"},{title:a.components.text,path:"/components/text"},{title:a.components.textarea,path:"/components/textarea"},{title:a.components.text_input,path:"/components/textinput"},{title:a.components.toast,path:"/components/toast"},{title:a.components.toggle,path:"/components/toggle"},{title:a.components.tooltip,path:"/components/tooltip"},{title:a.components.wizard_navigation,path:"/components/wizardnavigation"}]},77258:function(e){e.exports={infoBox:"InfoBox_infoBox__we0AO"}},68275:function(e){e.exports={frame:"MobileDevice_frame__Vj0B_",microphone:"MobileDevice_microphone__mAuTL",screen:"MobileDevice_screen__xvTTt"}},18743:function(e){e.exports={showcaseBox:"ShowcaseBox_showcaseBox__FG31_"}},41605:function(e){e.exports={smallScreenNavContainer:"SideNavLayout_smallScreenNavContainer__AM9Lz",navHeadertext:"SideNavLayout_navHeadertext__IjrFs",SideNavLayout:"SideNavLayout_SideNavLayout__WNNTT",left:"SideNavLayout_left__HEGEN",navHeader:"SideNavLayout_navHeader__HRIUu",right:"SideNavLayout_right__3d8ao",navStaticIcon:"SideNavLayout_navStaticIcon__rLjuG"}},89424:function(e,t,n){"use strict";n.d(t,{F:function(){return H}});var a=n(13633),i=n(41640),o=n(41518),s=n(67434),r=n(60257),c=n(675),l=n(98607),p=n(78502),d=n(26274),m=n(67294),h=n(32125),u=n(24446),x=n.n(u),v=n(2763),f=n(72465),g=n(52151),_=n(38906);const j=e=>m.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},e),m.createElement("path",{d:"M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0Zm0 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm5.65 6.24a1 1 0 0 1 .11 1.41l-6 7a1 1 0 0 1-1.467.057l-3-3a1 1 0 0 1 1.414-1.414l2.237 2.236 5.297-6.18a1 1 0 0 1 1.41-.108Z",fill:"#222",fillRule:"evenodd",className:"fi-icon-base-fill"}));var b=n(84221),y=n(58245),N=n(43427);const w=(0,h.ZP)((e=>{const{className:t,mousePointer:n,ariaLabel:a,color:i,fill:o,baseColor:s,highlightColor:r}=e,c=(0,g._)(e,["className","mousePointer","ariaLabel","color","fill","baseColor","highlightColor"]);return m.createElement(j,Object.assign({className:(0,_.Z)(y.e,t,{[y.y]:!!n})},c,(0,N.u)(a),(0,N.P)(a)))}))`
  ${b.pv}
`,S=e=>m.createElement(w,Object.assign({},e));S.displayName="Icon";var Z=n(1292),E=n(27143),B=["ariaLiveMode","children","className","headingText","headingVariant","id"],O=["theme"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.Z)(e);if(t){var i=(0,d.Z)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,p.Z)(this,n)}}var T="fi-toast",I={styleWrapper:"".concat(T,"-wrapper"),heading:"".concat(T,"-heading"),contentWrapper:"".concat(T,"-content-wrapper"),icon:"".concat(T,"_icon"),iconWrapper:"".concat(T,"_icon-wrapper")},C=function(e){(0,l.Z)(n,e);var t=P(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.ariaLiveMode,n=void 0===t?"polite":t,a=e.children,i=e.className,o=e.headingText,r=e.headingVariant,c=void 0===r?"h2":r,l=e.id,p=(0,s.Z)(e,B);return m.createElement(E.lk,L({className:x()(T,i),as:"section"},p),m.createElement(E.hh,{className:I.styleWrapper},m.createElement(E.hh,{className:I.iconWrapper},m.createElement(S,{className:I.icon})),m.createElement(E.hh,{className:I.contentWrapper,id:l,"aria-live":n},o&&m.createElement(Z.X,{variant:c,className:I.heading},o),a)))}}]),n}(m.Component),R=(0,h.ZP)((function(e){e.theme;var t=(0,s.Z)(e,O);return m.createElement(C,L({},t))})).withConfig({componentId:"sc-oh9c9j-0"})(["",";"],(function(e){return function(e){return(0,h.iv)([""," "," border-top:4px solid ",";width:100%;box-shadow:",";border-radius:4px;overflow:hidden;&.fi-toast{background-color:",";& .fi-toast-wrapper{padding:20px 15px;display:flex;align-items:flex-start;& .fi-icon .fi-icon-base-fill{fill:",";}& .fi-toast-content-wrapper{vertical-align:middle;","}& .fi-toast-heading{"," margin-top:-1px;padding-bottom:",";}& .fi-toast_icon-wrapper{flex:0;padding-right:",";& .fi-toast_icon{height:24px;width:24px;}}}}"],(0,v.bG)(e),(0,v.LZ)(e)("bodyTextSmall"),e.colors.successBase,e.shadows.wideBoxShadow,e.colors.whiteBase,e.colors.successBase,(0,v.LZ)(e)("bodyTextSmall"),(0,v.LZ)(e)("bodySemiBold"),e.spacing.xxs,e.spacing.xs)}(e.theme)})),H=(0,m.forwardRef)((function(e,t){var n=(0,i.Z)({},((0,a.Z)(e),e));return m.createElement(f.cY,null,(function(e){var a=e.suomifiTheme;return m.createElement(R,L({forwardedRef:t,theme:a},n))}))}));H.displayName="Toast"}},function(e){e.O(0,[1345,8043,9774,2888,179],(function(){return t=17581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);