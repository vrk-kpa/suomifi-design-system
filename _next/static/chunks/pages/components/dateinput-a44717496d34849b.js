(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5949],{87024:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dateinput",function(){return n(67931)}])},67527:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(26042),i=n(69396),s=n(85893),o=n(19200),c=n(16027),l=n(27001),r=n(67294),p=n(68275),d=n.n(p),m=function(e){var t=e.style,n=e.children;return(0,s.jsxs)("div",{className:d().frame,children:[(0,s.jsx)("div",{className:d().microphone}),(0,s.jsx)("div",{className:d().screen,style:(0,a.Z)({},t),children:n})]})},h=n(18743),_=n.n(h),x=function(e){var t=e.children,n=e.style;return(0,s.jsx)("div",{className:_().showcaseBox,style:n,children:t})},u=n(87413),g=n(22557),v=function(e){var t=e.style,n=e.children;return(0,s.jsx)(g.Z,{language:"jsx",customStyle:(0,a.Z)({margin:0,padding:0,background:"none",fontSize:"0.85rem",whiteSpace:"pre-wrap",wordBreak:"break-word"},t),codeTagProps:{style:{}},wrapLongLines:!0,children:n})},j=function(e){var t=e.style,n=e.filterProps,a=e.children,i=e.codeString;return(0,s.jsxs)("div",{className:"py-xs",style:t,children:[!!i&&(0,s.jsx)(v,{style:{marginBottom:a?"1rem":0},children:i}),!!a&&(0,s.jsx)(v,{children:(0,u.ZP)(a,{filterProps:n||["id","style","aria-label"],showFunctions:!0,functionValue:function(){return"..."}})})]})},b=function(e){return r.Children.map(e,(function(e){return e&&e.type&&("div"===e.type||"div"===e.type.displayName)?b(e.props.children):e}))},f=function(e){var t=e.children,n=e.variant,r=e.filterPropsInExample,p=e.codeString,d=e.style,h="mobile_device"===n?(0,s.jsx)(x,{style:(0,i.Z)((0,a.Z)({},d),{paddingBottom:0}),children:(0,s.jsx)(m,{children:t})}):t?(0,s.jsx)(x,{style:d,children:t}):null;return(0,s.jsxs)(s.Fragment,{children:[h,(0,s.jsxs)(o.xH,{className:"mt-l mb-l",children:[(0,s.jsx)(c.T,{children:"Koodiesimerkki (React)"}),(0,s.jsx)(l.i,{children:p?(0,s.jsx)(j,{codeString:p}):b(t).map((function(e,t){return(0,s.jsx)(j,{filterProps:r,style:{paddingTop:0!==t||p?0:"1rem"},children:e},t)}))})]})]})}},35424:function(e,t,n){"use strict";var a=n(85893),i=n(4115),s=n(77258),o=n.n(s);t.Z=function(e){var t=e.children;return(0,a.jsx)(i.g,{variant:"div",className:o().infoBox,children:t})}},88466:function(e,t,n){"use strict";var a=n(85893),i=n(4115),s=n(39153),o=n(59761),c=n(17121),l=n(30792),r=n(41605),p=n.n(r),d=n(41664),m=n.n(d),h=n(11163);t.Z=function(e){var t=e.navItems,n=e.children,r=e.navIcon,d=e.navHeaderText,_=(0,h.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.g,{className:"container",children:[(0,a.jsx)(i.g,{variant:"section",className:p().smallScreenNavContainer,children:(0,a.jsx)(s.B,{"aria-label":"Sivunavigaatio",id:"sidenav",variant:"smallScreen",smallScreenExpandButtonText:(0,a.jsxs)(i.g,{variant:"div",className:"flex align-center",children:[(0,a.jsx)(o.m,{className:p().navStaticIcon,icon:r}),(0,a.jsx)(i.g,{className:p().navHeadertext,children:d})]}),initiallyExpanded:!1,children:t.map((function(e){return(0,a.jsx)(c.p,{selected:_.pathname===e.path,children:(0,a.jsx)(m(),{href:e.path,passHref:!0,children:(0,a.jsx)(l.r,{"aria-current":_.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})}),(0,a.jsxs)(i.g,{variant:"section",className:p().SideNavLayout,children:[(0,a.jsxs)(i.g,{className:p().left,children:[(0,a.jsxs)(i.g,{variant:"div",className:p().navHeader,children:[(0,a.jsx)(o.m,{className:p().navStaticIcon,icon:r}),(0,a.jsx)(i.g,{className:p().navHeadertext,children:d})]}),(0,a.jsx)(s.B,{"aria-label":"Sivunavigaatio",id:"sidenav",children:t.map((function(e){return(0,a.jsx)(c.p,{selected:_.pathname===e.path,children:(0,a.jsx)(m(),{href:e.path,passHref:!0,children:(0,a.jsx)(l.r,{"aria-current":_.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})]}),(0,a.jsx)(i.g,{variant:"main",id:"main",className:p().right,children:n})]})]})})}},67931:function(e,t,n){"use strict";n.r(t);var a=n(26042),i=n(69396),s=n(85893),o=n(67294),c=n(9008),l=n.n(c),r=n(37039),p=n(88466),d=n(91760),m=n(35424),h=n(67527),_=n(1292),x=n(4115),u=n(32594),g=n(72119),v=n(89222),j=n(53760),b=n(73870);t.default=function(){var e=(0,r.$G)().t,t=(0,o.useState)(!0),n=t[0],c=t[1],f=n?"error":"default";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l(),{children:(0,s.jsx)("title",{children:e("date_input_page.site_title")})}),(0,s.jsxs)(p.Z,{navItems:d.t,navHeaderText:e("main_nav.components"),navIcon:"puzzle",children:[(0,s.jsx)(_.X,{variant:"h1",children:e("date_input_page.heading")}),(0,s.jsx)(x.g,{variant:"div",mt:"m",children:(0,s.jsx)(u.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/DateInput",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("common.see_technical_documentation_of_component")})}),(0,s.jsx)(g.n,{className:"my-xl",children:(0,s.jsx)(v.x,{variant:"lead",children:e("date_input_page.ingress")})}),(0,s.jsx)(h.Z,{style:{marginBottom:j.R.spacing.s},children:(0,s.jsx)("div",{style:{maxWidth:"350px"},children:(0,s.jsx)(b.W,{labelText:e("date_input_page.example.common.label"),hintText:e("date_input_page.example.common.hint_text"),datePickerEnabled:!0,fullWidth:!0})})}),(0,s.jsx)(x.g,{variant:"section",className:"my-xl",children:(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(_.X,{variant:"h3",as:"h2",children:e("common.accessibility_and_usability")}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:e("date_input_page.accessibility_list.point_1")}),(0,s.jsx)("li",{children:e("date_input_page.accessibility_list.point_2")}),(0,s.jsx)("li",{children:e("date_input_page.accessibility_list.point_3")}),(0,s.jsx)("li",{children:e("date_input_page.accessibility_list.point_4")})]})]})}),(0,s.jsxs)(x.g,{variant:"section",children:[(0,s.jsx)(_.X,{variant:"h2",className:"mb-xl",children:e("date_input_page.what_does_the_component_contain.heading")}),(0,s.jsx)(g.n,{className:"my-xl",children:e("date_input_page.what_does_the_component_contain.text_1")}),(0,s.jsx)(g.n,{className:"my-xl",children:e("date_input_page.what_does_the_component_contain.text_2")}),(0,s.jsx)(g.n,{className:"my-xl",children:e("date_input_page.what_does_the_component_contain.text_3")})]}),(0,s.jsxs)(x.g,{variant:"section",children:[(0,s.jsx)(_.X,{variant:"h2",className:"mb-xl",children:e("date_input_page.size_and_usage.heading")}),(0,s.jsx)(g.n,{className:"my-xl",children:e("date_input_page.size_and_usage.text_1")}),(0,s.jsx)(g.n,{className:"my-xl",children:e("date_input_page.size_and_usage.text_2")}),(0,s.jsx)(g.n,{className:"my-xl",children:e("date_input_page.size_and_usage.text_3")}),(0,s.jsx)(g.n,{className:"my-xl",children:e("date_input_page.size_and_usage.text_4")}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:e("date_input_page.shortcuts.shortcut_1_description")}),(0,s.jsxs)("li",{children:[e("date_input_page.shortcuts.shortcut_2_description"),(0,s.jsx)("kbd",{className:"keyboard-button",children:"Home"}),e("date_input_page.shortcuts.shortcut_3_description"),(0,s.jsx)("kbd",{className:"keyboard-button",children:"End"})]}),(0,s.jsxs)("li",{children:[e("date_input_page.shortcuts.shortcut_4_description"),(0,s.jsx)("kbd",{className:"keyboard-button",children:"PageUp"}),e("date_input_page.shortcuts.shortcut_5_description"),(0,s.jsx)("kbd",{className:"keyboard-button",children:"PageDown"})]}),(0,s.jsxs)("li",{children:[e("date_input_page.shortcuts.shortcut_6_description"),(0,s.jsx)("kbd",{className:"keyboard-button",children:"Shift"})," + ",(0,s.jsx)("kbd",{className:"keyboard-button",children:"PageUp"}),e("date_input_page.shortcuts.shortcut_7_description"),(0,s.jsx)("kbd",{className:"keyboard-button",children:"Shift"})," + ",(0,s.jsx)("kbd",{className:"keyboard-button",children:"PageDown"})]})]})]}),(0,s.jsxs)(x.g,{variant:"section",children:[(0,s.jsx)(_.X,{variant:"h2",className:"mb-xl",children:e("date_input_page.example.smallscreen.title")}),(0,s.jsx)(h.Z,{children:(0,s.jsx)("div",{style:{maxWidth:"350px"},children:(0,s.jsx)(b.W,{labelText:e("date_input_page.example.common.label"),hintText:e("date_input_page.example.common.hint_text"),datePickerEnabled:!0,smallScreen:!0,fullWidth:!0})})})]}),(0,s.jsxs)(x.g,{variant:"section",children:[(0,s.jsx)(_.X,{variant:"h2",className:"my-xl",children:e("date_input_page.example.error.title")}),(0,s.jsx)(h.Z,{children:(0,s.jsx)("div",{style:{maxWidth:"350px"},children:(0,s.jsx)(b.W,(0,i.Z)((0,a.Z)({labelText:e("date_input_page.example.common.label"),hintText:e("date_input_page.example.common.hint_text"),fullWidth:!0},n?{statusText:e("date_input_page.example.error.status_text")}:{}),{status:f,debounce:300,onChange:function(e){var t=e.value;c(!t)}}))})})]}),(0,s.jsx)(_.X,{variant:"h2",className:"my-xl",children:e("date_input_page.example.optional.title")}),(0,s.jsx)(h.Z,{children:(0,s.jsx)("div",{style:{maxWidth:"350px"},children:(0,s.jsx)(b.W,{labelText:e("date_input_page.example.common.label"),hintText:e("date_input_page.example.common.hint_text"),optionalText:e("date_input_page.example.optional.optional_text"),fullWidth:!0})})})]})]})}},91760:function(e,t,n){"use strict";n.d(t,{t:function(){return i}});var a=n(86287),i=[{title:a.components.component_usage_info,path:"/components"},{title:a.components.alert,path:"/components/alert"},{title:a.components.block,path:"/components/block"},{title:a.components.breadcrumb,path:"/components/breadcrumb"},{title:a.components.button,path:"/components/button"},{title:a.components.checkbox,path:"/components/checkbox"},{title:a.components.date_input,path:"/components/dateinput"},{title:a.components.dropdown,path:"/components/dropdown"},{title:a.components.expander,path:"/components/expander"},{title:a.components.heading,path:"/components/heading"},{title:a.components.icon,path:"/components/icon"},{title:a.components.language_menu,path:"/components/languagemenu"},{title:a.components.link,path:"/components/link"},{title:a.components.loading_spinner,path:"/components/loadingspinner"},{title:a.components.modal,path:"/components/modal"},{title:a.components.multiselect,path:"/components/multiselect"},{title:a.components.notification,path:"/components/notification"},{title:a.components.pagination,path:"/components/pagination"},{title:a.components.radio_button,path:"/components/radiobutton"},{title:a.components.search_input,path:"/components/searchinput"},{title:a.components.service_navigation,path:"/components/servicenavigation"},{title:a.components.side_navigation,path:"/components/sidenavigation"},{title:a.components.singleselect,path:"/components/singleselect"},{title:a.components.text,path:"/components/text"},{title:a.components.textarea,path:"/components/textarea"},{title:a.components.text_input,path:"/components/textinput"},{title:a.components.toast,path:"/components/toast"},{title:a.components.toggle,path:"/components/toggle"},{title:a.components.tooltip,path:"/components/tooltip"},{title:a.components.wizard_navigation,path:"/components/wizardnavigation"}]},77258:function(e){e.exports={infoBox:"InfoBox_infoBox__we0AO"}},68275:function(e){e.exports={frame:"MobileDevice_frame__Vj0B_",microphone:"MobileDevice_microphone__mAuTL",screen:"MobileDevice_screen__xvTTt"}},18743:function(e){e.exports={showcaseBox:"ShowcaseBox_showcaseBox__FG31_"}},41605:function(e){e.exports={smallScreenNavContainer:"SideNavLayout_smallScreenNavContainer__AM9Lz",navHeadertext:"SideNavLayout_navHeadertext__IjrFs",SideNavLayout:"SideNavLayout_SideNavLayout__WNNTT",left:"SideNavLayout_left__HEGEN",navHeader:"SideNavLayout_navHeader__HRIUu",right:"SideNavLayout_right__3d8ao",navStaticIcon:"SideNavLayout_navStaticIcon__rLjuG"}}},function(e){e.O(0,[6510,8043,6637,6698,9533,3870,9774,2888,179],(function(){return t=87024,e(e.s=t);var t}));var t=e.O();_N_E=t}]);