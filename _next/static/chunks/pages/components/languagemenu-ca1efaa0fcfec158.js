(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7043],{82374:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/languagemenu",function(){return t(84400)}])},67527:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var a=t(26042),i=t(69396),o=t(85893),s=t(19200),c=t(16027),l=t(27001),r=t(67294),m=t(68275),p=t.n(m),u=function(e){var n=e.style,t=e.children;return(0,o.jsxs)("div",{className:p().frame,children:[(0,o.jsx)("div",{className:p().microphone}),(0,o.jsx)("div",{className:p().screen,style:(0,a.Z)({},n),children:t})]})},d=t(18743),h=t.n(d),g=function(e){var n=e.children,t=e.style;return(0,o.jsx)("div",{className:h().showcaseBox,style:t,children:n})},_=t(87413),x=t(22557),v=function(e){var n=e.style,t=e.children;return(0,o.jsx)(x.Z,{language:"jsx",customStyle:(0,a.Z)({margin:0,padding:0,background:"none",fontSize:"0.85rem",whiteSpace:"pre-wrap",wordBreak:"break-word"},n),codeTagProps:{style:{}},wrapLongLines:!0,children:t})},j=function(e){var n=e.style,t=e.filterProps,a=e.children,i=e.codeString;return(0,o.jsxs)("div",{className:"py-xs",style:n,children:[!!i&&(0,o.jsx)(v,{style:{marginBottom:a?"1rem":0},children:i}),!!a&&(0,o.jsx)(v,{children:(0,_.ZP)(a,{filterProps:t||["id","style","aria-label"],showFunctions:!0,functionValue:function(){return"..."}})})]})},f=function(e){return r.Children.map(e,(function(e){return e&&e.type&&("div"===e.type||"div"===e.type.displayName)?f(e.props.children):e}))},N=function(e){var n=e.children,t=e.variant,r=e.filterPropsInExample,m=e.codeString,p=e.style,d="mobile_device"===t?(0,o.jsx)(g,{style:(0,i.Z)((0,a.Z)({},p),{paddingBottom:0}),children:(0,o.jsx)(u,{children:n})}):n?(0,o.jsx)(g,{style:p,children:n}):null;return(0,o.jsxs)(o.Fragment,{children:[d,(0,o.jsxs)(s.xH,{className:"mt-l mb-l",children:[(0,o.jsx)(c.T,{children:"Koodiesimerkki (React)"}),(0,o.jsx)(l.i,{children:m?(0,o.jsx)(j,{codeString:m}):f(n).map((function(e,n){return(0,o.jsx)(j,{filterProps:r,style:{paddingTop:0!==n||m?0:"1rem"},children:e},n)}))})]})]})}},35424:function(e,n,t){"use strict";var a=t(85893),i=t(4115),o=t(77258),s=t.n(o);n.Z=function(e){var n=e.children;return(0,a.jsx)(i.g,{variant:"div",className:s().infoBox,children:n})}},88466:function(e,n,t){"use strict";var a=t(85893),i=t(4115),o=t(39153),s=t(59761),c=t(17121),l=t(30792),r=t(41605),m=t.n(r),p=t(41664),u=t.n(p),d=t(11163);n.Z=function(e){var n=e.navItems,t=e.children,r=e.navIcon,p=e.navHeaderText,h=(0,d.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.g,{className:"container",children:[(0,a.jsx)(i.g,{variant:"section",className:m().smallScreenNavContainer,children:(0,a.jsx)(o.B,{"aria-label":"Sivunavigaatio",id:"sidenav",variant:"smallScreen",smallScreenExpandButtonText:(0,a.jsxs)(i.g,{variant:"div",className:"flex align-center",children:[(0,a.jsx)(s.m,{className:m().navStaticIcon,icon:r}),(0,a.jsx)(i.g,{className:m().navHeadertext,children:p})]}),initiallyExpanded:!1,children:n.map((function(e){return(0,a.jsx)(c.p,{selected:h.pathname===e.path,children:(0,a.jsx)(u(),{href:e.path,passHref:!0,children:(0,a.jsx)(l.r,{"aria-current":h.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})}),(0,a.jsxs)(i.g,{variant:"section",className:m().SideNavLayout,children:[(0,a.jsxs)(i.g,{className:m().left,children:[(0,a.jsxs)(i.g,{variant:"div",className:m().navHeader,children:[(0,a.jsx)(s.m,{className:m().navStaticIcon,icon:r}),(0,a.jsx)(i.g,{className:m().navHeadertext,children:p})]}),(0,a.jsx)(o.B,{"aria-label":"Sivunavigaatio",id:"sidenav",children:n.map((function(e){return(0,a.jsx)(c.p,{selected:h.pathname===e.path,children:(0,a.jsx)(u(),{href:e.path,passHref:!0,children:(0,a.jsx)(l.r,{"aria-current":h.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})]}),(0,a.jsx)(i.g,{variant:"main",id:"main",className:m().right,children:t})]})]})})}},84400:function(e,n,t){"use strict";t.r(n);var a=t(85893),i=t(9008),o=t.n(i),s=t(37039),c=t(88466),l=t(91760),r=t(35424),m=t(67527),p=t(67294),u=t(1292),d=t(4115),h=t(32594),g=t(72119),_=t(89222),x=t(68253),v=t(31999);n.default=function(){var e=(0,s.$G)().t,n=(0,p.useState)(e("language_menu_page.example.menuitem1short")),t=n[0],i=n[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:e("language_menu_page.site_title")})}),(0,a.jsxs)(c.Z,{navItems:l.t,navHeaderText:e("main_nav.components"),navIcon:"puzzle",children:[(0,a.jsx)(u.X,{variant:"h1",children:e("language_menu_page.heading")}),(0,a.jsx)(d.g,{variant:"div",mt:"m",children:(0,a.jsx)(h.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/LanguageMenu",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("common.see_technical_documentation_of_component")})}),(0,a.jsx)(g.n,{className:"my-xl",children:(0,a.jsx)(_.x,{variant:"lead",children:e("language_menu_page.ingress")})}),(0,a.jsx)(d.g,{variant:"section",children:(0,a.jsx)(m.Z,{children:(0,a.jsxs)(x.p,{name:t,children:[(0,a.jsx)(v.X,{onSelect:function(){return i(e("language_menu_page.example.menuitem1short"))},selected:t===e("language_menu_page.example.menuitem1short"),children:e("language_menu_page.example.menuitem1")}),(0,a.jsx)(v.X,{onSelect:function(){return i(e("language_menu_page.example.menuitem2short"))},selected:t===e("language_menu_page.example.menuitem2short"),children:e("language_menu_page.example.menuitem2")}),(0,a.jsx)(v.X,{onSelect:function(){return i(e("language_menu_page.example.menuitem3short"))},selected:t===e("language_menu_page.example.menuitem3short"),children:e("language_menu_page.example.menuitem3")})]})})}),(0,a.jsx)(d.g,{variant:"section",className:"my-xl",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(u.X,{variant:"h3",as:"h2",children:e("common.accessibility_and_usability")}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:e("language_menu_page.accessibility_list.point_1")}),(0,a.jsx)("li",{children:e("language_menu_page.accessibility_list.point_2")})]})]})}),(0,a.jsxs)(d.g,{variant:"section",children:[(0,a.jsx)(u.X,{variant:"h2",className:"mb-xl",children:e("language_menu_page.what_does_the_component_contain.heading")}),(0,a.jsx)(g.n,{className:"my-xl",children:e("language_menu_page.what_does_the_component_contain.text")})]}),(0,a.jsxs)(d.g,{variant:"section",children:[(0,a.jsx)(u.X,{variant:"h2",className:"mb-xl",children:e("language_menu_page.size_and_usage.heading")}),(0,a.jsx)(g.n,{className:"my-xl",children:e("language_menu_page.size_and_usage.text_1")})]}),(0,a.jsxs)(d.g,{variant:"section",children:[(0,a.jsx)(u.X,{variant:"h2",className:"mb-xl",children:e("language_menu_page.in_ui.heading")}),(0,a.jsx)(g.n,{className:"my-xl",children:e("language_menu_page.in_ui.text")})]})]})]})}},91760:function(e,n,t){"use strict";t.d(n,{t:function(){return i}});var a=t(86287),i=[{title:a.components.component_usage_info,path:"/components"},{title:a.components.alert,path:"/components/alert"},{title:a.components.block,path:"/components/block"},{title:a.components.breadcrumb,path:"/components/breadcrumb"},{title:a.components.button,path:"/components/button"},{title:a.components.checkbox,path:"/components/checkbox"},{title:a.components.date_input,path:"/components/dateinput"},{title:a.components.dropdown,path:"/components/dropdown"},{title:a.components.expander,path:"/components/expander"},{title:a.components.heading,path:"/components/heading"},{title:a.components.icon,path:"/components/icon"},{title:a.components.language_menu,path:"/components/languagemenu"},{title:a.components.link,path:"/components/link"},{title:a.components.loading_spinner,path:"/components/loadingspinner"},{title:a.components.modal,path:"/components/modal"},{title:a.components.multiselect,path:"/components/multiselect"},{title:a.components.notification,path:"/components/notification"},{title:a.components.pagination,path:"/components/pagination"},{title:a.components.radio_button,path:"/components/radiobutton"},{title:a.components.search_input,path:"/components/searchinput"},{title:a.components.service_navigation,path:"/components/servicenavigation"},{title:a.components.side_navigation,path:"/components/sidenavigation"},{title:a.components.singleselect,path:"/components/singleselect"},{title:a.components.text,path:"/components/text"},{title:a.components.textarea,path:"/components/textarea"},{title:a.components.text_input,path:"/components/textinput"},{title:a.components.toast,path:"/components/toast"},{title:a.components.toggle,path:"/components/toggle"},{title:a.components.tooltip,path:"/components/tooltip"},{title:a.components.wizard_navigation,path:"/components/wizardnavigation"}]},77258:function(e){e.exports={infoBox:"InfoBox_infoBox__we0AO"}},68275:function(e){e.exports={frame:"MobileDevice_frame__Vj0B_",microphone:"MobileDevice_microphone__mAuTL",screen:"MobileDevice_screen__xvTTt"}},18743:function(e){e.exports={showcaseBox:"ShowcaseBox_showcaseBox__FG31_"}},41605:function(e){e.exports={smallScreenNavContainer:"SideNavLayout_smallScreenNavContainer__AM9Lz",navHeadertext:"SideNavLayout_navHeadertext__IjrFs",SideNavLayout:"SideNavLayout_SideNavLayout__WNNTT",left:"SideNavLayout_left__HEGEN",navHeader:"SideNavLayout_navHeader__HRIUu",right:"SideNavLayout_right__3d8ao",navStaticIcon:"SideNavLayout_navStaticIcon__rLjuG"}}},function(e){e.O(0,[6510,8043,2964,9774,2888,179],(function(){return n=82374,e(e.s=n);var n}));var n=e.O();_N_E=n}]);