(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4927],{31198:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox",function(){return t(95350)}])},67527:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var a=t(26042),i=t(69396),c=t(85893),s=t(19200),o=t(16027),l=t(27001),r=t(67294),p=t(68275),h=t.n(p),d=function(e){var n=e.style,t=e.children;return(0,c.jsxs)("div",{className:h().frame,children:[(0,c.jsx)("div",{className:h().microphone}),(0,c.jsx)("div",{className:h().screen,style:(0,a.Z)({},n),children:t})]})},x=t(18743),m=t.n(x),_=function(e){var n=e.children,t=e.style;return(0,c.jsx)("div",{className:m().showcaseBox,style:t,children:n})},u=t(87413),g=t(22557),v=function(e){var n=e.style,t=e.children;return(0,c.jsx)(g.Z,{language:"jsx",customStyle:(0,a.Z)({margin:0,padding:0,background:"none",fontSize:"0.85rem",whiteSpace:"pre-wrap",wordBreak:"break-word"},n),codeTagProps:{style:{}},wrapLongLines:!0,children:t})},j=function(e){var n=e.style,t=e.filterProps,a=e.children,i=e.codeString;return(0,c.jsxs)("div",{className:"py-xs",style:n,children:[!!i&&(0,c.jsx)(v,{style:{marginBottom:a?"1rem":0},children:i}),!!a&&(0,c.jsx)(v,{children:(0,u.ZP)(a,{filterProps:t||["id","style","aria-label"],showFunctions:!0,functionValue:function(){return"..."}})})]})},b=function(e){return r.Children.map(e,(function(e){return e&&e.type&&("div"===e.type||"div"===e.type.displayName)?b(e.props.children):e}))},f=function(e){var n=e.children,t=e.variant,r=e.filterPropsInExample,p=e.codeString,h=e.style,x="mobile_device"===t?(0,c.jsx)(_,{style:(0,i.Z)((0,a.Z)({},h),{paddingBottom:0}),children:(0,c.jsx)(d,{children:n})}):n?(0,c.jsx)(_,{style:h,children:n}):null;return(0,c.jsxs)(c.Fragment,{children:[x,(0,c.jsxs)(s.xH,{className:"mt-l mb-l",children:[(0,c.jsx)(o.T,{children:"Koodiesimerkki (React)"}),(0,c.jsx)(l.i,{children:p?(0,c.jsx)(j,{codeString:p}):b(n).map((function(e,n){return(0,c.jsx)(j,{filterProps:r,style:{paddingTop:0!==n||p?0:"1rem"},children:e},n)}))})]})]})}},35424:function(e,n,t){"use strict";var a=t(85893),i=t(4115),c=t(77258),s=t.n(c);n.Z=function(e){var n=e.children;return(0,a.jsx)(i.g,{variant:"div",className:s().infoBox,children:n})}},88466:function(e,n,t){"use strict";var a=t(85893),i=t(28384),c=t(40026),s=t(32787),o=t(4115),l=t(39153),r=t(17121),p=t(30792),h=t(41605),d=t.n(h),x=t(41664),m=t.n(x),_=t(11163),u=function(e,n){switch(e){case"book":return(0,a.jsx)(i.Z,{className:n});case"puzzle":return(0,a.jsx)(c.I,{className:n});case"magicWand":return(0,a.jsx)(s.C,{className:n});default:return null}};n.Z=function(e){var n=e.navItems,t=e.children,i=e.navIcon,c=e.navHeaderText,s=(0,_.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.g,{className:"container",children:[(0,a.jsx)(o.g,{variant:"section",className:d().smallScreenNavContainer,children:(0,a.jsx)(l.B,{"aria-label":"Sivunavigaatio",id:"sidenav",variant:"smallScreen",smallScreenExpandButtonText:(0,a.jsxs)(o.g,{variant:"div",className:"flex align-center",children:[u(i,d().navStaticIcon),(0,a.jsx)(o.g,{className:d().navHeadertext,children:c})]}),initiallyExpanded:!1,children:n.map((function(e){return(0,a.jsx)(r.p,{selected:s.pathname===e.path,children:(0,a.jsx)(m(),{href:e.path,passHref:!0,children:(0,a.jsx)(p.r,{"aria-current":s.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})}),(0,a.jsxs)(o.g,{variant:"section",className:d().SideNavLayout,children:[(0,a.jsxs)(o.g,{className:d().left,children:[(0,a.jsxs)(o.g,{variant:"div",className:d().navHeader,children:[u(i,d().navStaticIcon),(0,a.jsx)(o.g,{className:d().navHeadertext,children:c})]}),(0,a.jsx)(l.B,{"aria-label":"Sivunavigaatio",id:"sidenav",children:n.map((function(e){return(0,a.jsx)(r.p,{selected:s.pathname===e.path,children:(0,a.jsx)(m(),{href:e.path,passHref:!0,children:(0,a.jsx)(p.r,{"aria-current":s.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})]}),(0,a.jsx)(o.g,{variant:"main",id:"main",className:d().right,children:t})]})]})})}},95350:function(e,n,t){"use strict";t.r(n);var a=t(85893),i=t(9008),c=t.n(i),s=t(37039),o=t(88466),l=t(91760),r=t(35424),p=t(67527),h=t(1292),d=t(4115),x=t(32594),m=t(72119),_=t(89222),u=t(53760),g=t(1766),v=t(36337);n.default=function(){var e=(0,s.$G)().t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c(),{children:(0,a.jsx)("title",{children:e("checkbox_page.site_title")})}),(0,a.jsxs)(o.Z,{navItems:l.t,navHeaderText:e("main_nav.components"),navIcon:"puzzle",children:[(0,a.jsx)(h.X,{variant:"h1",children:e("checkbox_page.heading")}),(0,a.jsx)(d.g,{variant:"div",mt:"m",children:(0,a.jsx)(x.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Checkbox",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("common.see_technical_documentation_of_component")})}),(0,a.jsx)(m.n,{className:"my-xl",children:(0,a.jsx)(_.x,{variant:"lead",children:e("checkbox_page.ingress")})}),(0,a.jsx)(p.Z,{style:{marginBottom:u.R.spacing.s},children:(0,a.jsx)(g.X,{children:e("checkbox_page.example.default.content")})}),(0,a.jsx)(d.g,{variant:"section",className:"my-xl",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(h.X,{variant:"h3",as:"h2",children:e("common.accessibility_and_usability")}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:e("checkbox_page.accessibility_list.point_1")}),(0,a.jsx)("li",{children:e("checkbox_page.accessibility_list.point_2")}),(0,a.jsx)("li",{children:e("checkbox_page.accessibility_list.point_3")}),(0,a.jsx)("li",{children:e("checkbox_page.accessibility_list.point_4")}),(0,a.jsx)("li",{children:e("checkbox_page.accessibility_list.point_5")}),(0,a.jsx)("li",{children:e("checkbox_page.accessibility_list.point_6")})]})]})}),(0,a.jsxs)(d.g,{variant:"section",children:[(0,a.jsx)(h.X,{variant:"h2",className:"mb-xl",children:e("checkbox_page.what_does_the_component_contain.heading")}),(0,a.jsx)(m.n,{className:"my-xl",children:e("checkbox_page.what_does_the_component_contain.text")})]}),(0,a.jsxs)(d.g,{variant:"section",children:[(0,a.jsx)(h.X,{variant:"h2",className:"mb-xl",children:e("checkbox_page.size_and_usage.heading")}),(0,a.jsx)(m.n,{className:"my-xl",children:e("checkbox_page.size_and_usage.text_1")})]}),(0,a.jsx)(h.X,{variant:"h2",className:"mb-xl",children:e("checkbox_page.example.large.title")}),(0,a.jsx)(m.n,{className:"my-l",children:e("checkbox_page.example.large.description")}),(0,a.jsx)(p.Z,{children:(0,a.jsx)(g.X,{variant:"large",children:e("checkbox_page.example.large.content")})}),(0,a.jsx)(h.X,{variant:"h2",className:"my-xl",children:e("checkbox_page.example.group.title")}),(0,a.jsx)(m.n,{className:"my-xl",children:e("checkbox_page.example.group.description")}),(0,a.jsx)(p.Z,{children:(0,a.jsxs)(v.c,{labelText:e("checkbox_page.example.group.label"),groupHintText:e("checkbox_page.example.group.hint"),groupStatus:"error",groupStatusText:e("checkbox_page.example.group.status_text"),children:[(0,a.jsx)(g.X,{children:e("checkbox_page.example.group.content_label_email")}),(0,a.jsx)(g.X,{children:e("checkbox_page.example.group.content_label_phone")}),(0,a.jsx)(g.X,{children:e("checkbox_page.example.group.content_label_visit")})]})}),(0,a.jsx)(h.X,{variant:"h2",className:"my-xl",children:e("checkbox_page.example.hintstate.title")}),(0,a.jsx)(m.n,{className:"my-xl",children:e("checkbox_page.example.hintstate.description")}),(0,a.jsx)(p.Z,{children:(0,a.jsx)(g.X,{hintText:e("checkbox_page.example.hintstate.hint_text"),status:"error",statusText:e("checkbox_page.example.hintstate.status_text"),children:e("checkbox_page.example.hintstate.content")})}),(0,a.jsx)(h.X,{variant:"h2",className:"my-xl",children:e("checkbox_page.example.disabled.title")}),(0,a.jsx)(m.n,{className:"my-xl",children:e("checkbox_page.example.disabled.description")}),(0,a.jsx)(p.Z,{children:(0,a.jsx)(g.X,{disabled:!0,children:e("checkbox_page.example.disabled.content")})})]})]})}},91760:function(e,n,t){"use strict";t.d(n,{t:function(){return i}});var a=t(86287),i=[{title:a.components.component_usage_info,path:"/components"},{title:a.components.alert,path:"/components/alert"},{title:a.components.block,path:"/components/block"},{title:a.components.breadcrumb,path:"/components/breadcrumb"},{title:a.components.button,path:"/components/button"},{title:a.components.checkbox,path:"/components/checkbox"},{title:a.components.date_input,path:"/components/dateinput"},{title:a.components.dropdown,path:"/components/dropdown"},{title:a.components.expander,path:"/components/expander"},{title:a.components.heading,path:"/components/heading"},{title:a.components.icon,path:"/components/icon"},{title:a.components.language_menu,path:"/components/languagemenu"},{title:a.components.link,path:"/components/link"},{title:a.components.loading_spinner,path:"/components/loadingspinner"},{title:a.components.modal,path:"/components/modal"},{title:a.components.multiselect,path:"/components/multiselect"},{title:a.components.notification,path:"/components/notification"},{title:a.components.pagination,path:"/components/pagination"},{title:a.components.radio_button,path:"/components/radiobutton"},{title:a.components.search_input,path:"/components/searchinput"},{title:a.components.service_navigation,path:"/components/servicenavigation"},{title:a.components.side_navigation,path:"/components/sidenavigation"},{title:a.components.singleselect,path:"/components/singleselect"},{title:a.components.text,path:"/components/text"},{title:a.components.textarea,path:"/components/textarea"},{title:a.components.text_input,path:"/components/textinput"},{title:a.components.toast,path:"/components/toast"},{title:a.components.toggle,path:"/components/toggle"},{title:a.components.tooltip,path:"/components/tooltip"},{title:a.components.wizard_navigation,path:"/components/wizardnavigation"}]},77258:function(e){e.exports={infoBox:"InfoBox_infoBox__we0AO"}},68275:function(e){e.exports={frame:"MobileDevice_frame__Vj0B_",microphone:"MobileDevice_microphone__mAuTL",screen:"MobileDevice_screen__xvTTt"}},18743:function(e){e.exports={showcaseBox:"ShowcaseBox_showcaseBox__FG31_"}},41605:function(e){e.exports={smallScreenNavContainer:"SideNavLayout_smallScreenNavContainer__AM9Lz",navHeadertext:"SideNavLayout_navHeadertext__IjrFs",SideNavLayout:"SideNavLayout_SideNavLayout__WNNTT",left:"SideNavLayout_left__HEGEN",navHeader:"SideNavLayout_navHeader__HRIUu",right:"SideNavLayout_right__3d8ao",navStaticIcon:"SideNavLayout_navStaticIcon__rLjuG"}}},function(e){e.O(0,[3481,8043,1766,9774,2888,179],(function(){return n=31198,e(e.s=n);var n}));var n=e.O();_N_E=n}]);