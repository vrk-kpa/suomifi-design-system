(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1073],{25439:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/patterns/datetime",function(){return n(2019)}])},35424:function(e,t,n){"use strict";var i=n(85893),r=n(4115),a=n(77258),o=n.n(a);t.Z=function(e){var t=e.children;return(0,i.jsx)(r.g,{variant:"div",className:o().infoBox,children:t})}},88466:function(e,t,n){"use strict";var i=n(85893),r=n(28384),a=n(40026),o=n(32787),s=n(4115),c=n(39153),l=n(17121),d=n(30792),u=n(41605),m=n.n(u),f=n(41664),p=n.n(f),h=n(11163),x=function(e,t){switch(e){case"book":return(0,i.jsx)(r.Z,{className:t});case"puzzle":return(0,i.jsx)(a.I,{className:t});case"magicWand":return(0,i.jsx)(o.C,{className:t});default:return null}};t.Z=function(e){var t=e.navItems,n=e.children,r=e.navIcon,a=e.navHeaderText,o=(0,h.useRouter)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.g,{className:"container",children:[(0,i.jsx)(s.g,{variant:"section",className:m().smallScreenNavContainer,children:(0,i.jsx)(c.B,{"aria-label":"Sivunavigaatio",id:"sidenav",variant:"smallScreen",smallScreenExpandButtonText:(0,i.jsxs)(s.g,{variant:"div",className:"flex align-center",children:[x(r,m().navStaticIcon),(0,i.jsx)(s.g,{className:m().navHeadertext,children:a})]}),initiallyExpanded:!1,children:t.map((function(e){return(0,i.jsx)(l.p,{selected:o.pathname===e.path,children:(0,i.jsx)(p(),{href:e.path,passHref:!0,children:(0,i.jsx)(d.r,{"aria-current":o.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})}),(0,i.jsxs)(s.g,{variant:"section",className:m().SideNavLayout,children:[(0,i.jsxs)(s.g,{className:m().left,children:[(0,i.jsxs)(s.g,{variant:"div",className:m().navHeader,children:[x(r,m().navStaticIcon),(0,i.jsx)(s.g,{className:m().navHeadertext,children:a})]}),(0,i.jsx)(c.B,{"aria-label":"Sivunavigaatio",id:"sidenav",children:t.map((function(e){return(0,i.jsx)(l.p,{selected:o.pathname===e.path,children:(0,i.jsx)(p(),{href:e.path,passHref:!0,children:(0,i.jsx)(d.r,{"aria-current":o.pathname===e.path?"page":void 0,children:e.title})})},e.title)}))})]}),(0,i.jsx)(s.g,{variant:"main",id:"main",className:m().right,children:n})]})]})})}},2019:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var i=n(85893),r=n(9008),a=n.n(r),o=n(37039),s=n(1292),c=n(4115),l=n(89222),d=n(72119),u=n(32594),m=n(88466),f=n(97397),p=n(35424),h=n(67294),x=n(16121),_=n(35787),b=n(27591),g=n(48180),v=n(17890),y=n(46845),j=n(61436),w=n(48097),S=function(){var e=(0,o.$G)().t,t=(0,h.useState)(""),n=t[0],r=t[1],a=(0,h.useState)(""),s=a[0],l=a[1],d=(0,h.useState)(""),u=d[0],m=d[1],f=(0,h.useState)(""),p=f[0],S=f[1],N=(0,h.useState)(""),k=N[0],T=N[1],O=(0,h.useState)(""),E=O[0],L=O[1],P=(0,h.useState)(!1),Z=P[0],C=P[1],M=(0,h.useRef)(null),B=(0,h.useRef)(null),D={fontWeight:600,fontSize:"18px",padding:0,marginBottom:Z?0:"5px"};(0,h.useEffect)((function(){return I(),window.addEventListener("resize",I),function(){return window.removeEventListener("resize",I)}}),[]);var I=function(){C(window.innerWidth<576)};return(0,i.jsxs)(c.g,{children:[(0,i.jsxs)("fieldset",{style:{padding:0,margin:0,border:"none"},children:[(0,i.jsx)("legend",{style:D,children:e("datetime.reference_implementation.publishing_date")}),!Z&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Q,{id:"date-hint-text",children:e("datetime.reference_implementation.date_hint_text")}),(0,i.jsx)(x.Q,{id:"time-hint-text",children:e("datetime.reference_implementation.time_hint_text")})]}),(0,i.jsxs)(c.g,{mt:Z?"xs":"s",children:[(0,i.jsx)(_.W,{style:{display:Z?"block":"inline-block"},labelText:e("datetime.reference_implementation.date_label"),datePickerEnabled:!0,"aria-describedby":Z?void 0:"date-status-text date-hint-text",hintText:Z?e("datetime.reference_implementation.date_hint_text"):void 0,statusText:Z?n:void 0,statusTextAriaLiveMode:"off",ref:M,value:u,onChange:function(e){return m(e.value)},onBlur:function(){""!==n&&u!==k&&r("")},onDatePickerButtonBlur:function(){""!==n&&u!==k&&r("")},status:""!==n?"error":"default",fullWidth:Z,smallScreen:Z}),(0,i.jsx)(b.M,{style:{display:Z?"block":"inline-block"},ref:B,labelText:e("datetime.reference_implementation.time_label"),ml:Z?void 0:"s",mt:Z?"s":void 0,"aria-describedby":Z?void 0:"time-status-text time-hint-text",hintText:Z?e("datetime.reference_implementation.time_hint_text"):void 0,statusText:Z?s:void 0,statusTextAriaLiveMode:"off",value:p,onChange:function(e){return S(e)},status:""!==s?"error":"default",onBlur:function(){var e=(0,g.wh)(p);e&&S(e),""!==s&&p!==E&&l("")}})]}),!Z&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.r,{status:"error",id:"date-status-text",mt:"xxs",ariaLiveMode:"off",children:n}),(0,i.jsx)(v.r,{status:"error",id:"time-status-text",ariaLiveMode:"off",children:s})]})]}),(0,i.jsx)(y.z,{onClick:function(){var t,n,i="",a="";(i=""===u?e("datetime.reference_implementation.errors.date_is_mandatory"):u.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/)?(0,j.Z)((0,w.Z)(u,"d.M.yyyy",new Date))?"":e("datetime.reference_implementation.errors.nonexistent_date"):e("datetime.reference_implementation.errors.date_incorrect_format"),a=""===p?e("datetime.reference_implementation.errors.time_is_mandatory"):p.match(/^\d{1,2}\.\d{2}$/)?function(e){if(e.match(/^\d{1,2}\.\d{2}$/)){var t=e.split("."),n=parseInt(t[0]),i=parseInt(t[1]);if(n>=0&&n<25&&i>=0&&i<60)return!0}return!1}(p)?"":e("datetime.reference_implementation.errors.nonexistent_time"):e("datetime.reference_implementation.errors.time_incorrect_format"),""!==i)&&(r(i),T(u),null===(t=M.current)||void 0===t||t.focus());""!==a&&(l(a),L(p),""===i&&(null===(n=B.current)||void 0===n||n.focus()))},mt:"xl",children:e("datetime.reference_implementation.save")})]})},N=n(313),k=function(){var e=(0,o.$G)().t,t=(0,h.useState)(""),n=t[0],r=t[1],a=(0,h.useState)(""),s=a[0],l=a[1],d=(0,h.useState)(""),u=d[0],m=d[1],f=(0,h.useState)(""),p=f[0],S=f[1],k=(0,h.useState)(""),T=k[0],O=k[1],E=(0,h.useState)(""),L=E[0],P=E[1],Z=(0,h.useState)(""),C=Z[0],M=Z[1],B=(0,h.useState)(""),D=B[0],I=B[1],W=(0,h.useState)(""),z=W[0],H=W[1],R=(0,h.useState)(""),$=R[0],A=R[1],F=(0,h.useState)(""),G=F[0],X=F[1],Q=(0,h.useState)(""),K=Q[0],V=Q[1],Y=(0,h.useState)(!1),q=Y[0],U=Y[1],J=(0,h.useRef)(null),ee=(0,h.useRef)(null),te=(0,h.useRef)(null),ne=(0,h.useRef)(null),ie={fontWeight:600,fontSize:"18px",padding:0,marginBottom:q?0:"5px"};(0,h.useEffect)((function(){return re(),window.addEventListener("resize",re),function(){return window.removeEventListener("resize",re)}}),[]);var re=function(){U(window.innerWidth<576)},ae=function(t,n){return""===t?e("begin"===n?"datetime.reference_implementation.errors.beginning_date_is_mandatory":"datetime.reference_implementation.errors.ending_date_is_mandatory"):t.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/)?(0,j.Z)((0,w.Z)(t,"d.M.yyyy",new Date))?"":e("begin"===n?"datetime.reference_implementation.errors.nonexistent_beginning_date":"datetime.reference_implementation.errors.nonexistent_ending_date"):e("begin"===n?"datetime.reference_implementation.errors.beginning_date_incorrect_format":"datetime.reference_implementation.errors.ending_date_incorrect_format")},oe=function(t,n){return""===t?e("begin"===n?"datetime.reference_implementation.errors.beginning_time_is_mandatory":"datetime.reference_implementation.errors.ending_time_is_mandatory"):t.match(/^\d{1,2}\.\d{2}$/)?function(e){if(e.match(/^\d{1,2}\.\d{2}$/)){var t=e.split("."),n=parseInt(t[0]),i=parseInt(t[1]);if(n>=0&&n<25&&i>=0&&i<60)return!0}return!1}(t)?"":e("begin"===n?"datetime.reference_implementation.errors.nonexistent_beginning_time":"datetime.reference_implementation.errors.nonexistent_ending_time"):e("begin"===n?"datetime.reference_implementation.errors.beginning_time_incorrect_format":"datetime.reference_implementation.errors.ending_time_incorrect_format")};return(0,i.jsxs)(c.g,{children:[(0,i.jsxs)("fieldset",{style:{padding:0,margin:0,border:"none"},children:[(0,i.jsx)("legend",{style:ie,children:e("datetime.reference_implementation.event_time")}),!q&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Q,{id:"date-hint-text-d",children:e("datetime.reference_implementation.date_hint_text")}),(0,i.jsx)(x.Q,{id:"time-hint-text-d",children:e("datetime.reference_implementation.time_hint_text")})]}),(0,i.jsxs)(c.g,{mt:"s",children:[(0,i.jsx)(_.W,{id:"beginning-date",style:{display:q?"block":"inline-block"},labelText:e("datetime.reference_implementation.beginning_date"),datePickerEnabled:!0,"aria-describedby":q?"date-hint-text-d":"beginning-date-status-text date-hint-text-d",statusText:q?n:void 0,statusTextAriaLiveMode:"off",ref:J,value:T,onChange:function(e){return O(e.value)},onBlur:function(){""!==n&&T!==z&&(r(""),H(""))},onDatePickerButtonBlur:function(){""!==n&&T!==z&&(r(""),H(""))},status:""!==n?"error":"default",fullWidth:q,smallScreen:q}),(0,i.jsx)(b.M,{id:"beginning-time",style:{display:q?"block":"inline-block"},ref:te,labelText:e("datetime.reference_implementation.time_label"),ml:q?void 0:"s",mt:q?"s":void 0,"aria-describedby":q?"beginning-date time-hint-text-d":"beginning-date beginning-time-status-text time-hint-text-d",statusText:q?u:void 0,statusTextAriaLiveMode:"off",value:C,onChange:function(e){return M(e)},status:""!==u?"error":"default",onBlur:function(){var e=(0,g.wh)(C);e&&M(e),""!==u&&C!==G&&(m(""),X(""))}})]}),!q&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.r,{status:"error",id:"beginning-date-status-text",mt:"xxs",ariaLiveMode:"off",children:n}),(0,i.jsx)(v.r,{status:"error",id:"beginning-time-status-text",ariaLiveMode:"off",children:u})]}),(0,i.jsxs)(c.g,{mt:"xs",children:[(0,i.jsx)(_.W,{id:"ending-date",style:{display:q?"block":"inline-block"},labelText:e("datetime.reference_implementation.ending_date"),datePickerEnabled:!0,"aria-describedby":q?"date-hint-text-d":"ending-date-status-text date-hint-text-d",statusText:q?s:void 0,statusTextAriaLiveMode:"off",ref:ee,value:L,onChange:function(e){return P(e.value)},onBlur:function(){""!==s&&L!==$&&(l(""),A(""))},onDatePickerButtonBlur:function(){""!==s&&L!==$&&(l(""),A(""))},status:""!==s?"error":"default",fullWidth:q,smallScreen:q}),(0,i.jsx)(b.M,{id:"ending-time",style:{display:q?"block":"inline-block"},ref:ne,labelText:e("datetime.reference_implementation.time_label"),ml:q?void 0:"s",mt:q?"s":void 0,"aria-describedby":q?"ending-date time-hint-text-d":"ending-date ending-time-status-text time-hint-text-d",statusText:q?p:void 0,statusTextAriaLiveMode:"off",value:D,onChange:function(e){return I(e)},status:""!==p?"error":"default",onBlur:function(){var e=(0,g.wh)(D);e&&I(e),""!==p&&D!==K&&(S(""),V(""))}})]}),!q&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.r,{status:"error",id:"ending-date-status-text",mt:"xxs",ariaLiveMode:"off",children:s}),(0,i.jsx)(v.r,{status:"error",id:"ending-time-status-text",ariaLiveMode:"off",children:p})]})]}),(0,i.jsx)(y.z,{onClick:function(){var t=ae(T,"begin"),n=ae(L,"end"),i=oe(C,"begin"),a=oe(D,"end");if(""===t&&""===i&&""===n&&""===a){var o="".concat(T," ").concat(C),s="".concat(L," ").concat(D),c=(0,w.Z)(o,"dd.MM.yyyy H.mm",new Date),d=(0,w.Z)(T,"dd.MM.yyyy",new Date),u=(0,w.Z)(s,"dd.MM.yyyy H.mm",new Date),f=(0,w.Z)(L,"dd.MM.yyyy",new Date);(0,N.Z)(u,c)&&((0,N.Z)(f,d)?(n=e("datetime.reference_implementation.errors.end_before_beginning"),A(L)):(a=e("datetime.reference_implementation.errors.end_before_beginning"),V(D)))}var p,h,x,_,b=!1;""!==t&&(r(t),H(T),null===(p=J.current)||void 0===p||p.focus(),b=!0);""!==i&&(m(i),X(C),b||(null===(h=te.current)||void 0===h||h.focus(),b=!0));""!==n&&(l(n),A(L),b||(null===(x=ee.current)||void 0===x||x.focus(),b=!0));""!==a&&(S(a),V(D),b||null===(_=ne.current)||void 0===_||_.focus())},mt:"xl",children:e("datetime.reference_implementation.save")})]})},T=function(){var e=(0,o.$G)().t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a(),{children:(0,i.jsxs)("title",{children:[e("datetime.heading")," | Suomi.fi Design System"]})}),(0,i.jsxs)(m.Z,{navItems:f.t,navHeaderText:e("main_nav.patterns"),navIcon:"puzzle",children:[(0,i.jsx)(s.X,{variant:"h1",children:e("datetime.heading")}),(0,i.jsx)(c.g,{my:"xl",children:(0,i.jsx)(l.x,{variant:"lead",children:e("datetime.ingress")})}),(0,i.jsxs)(c.g,{mb:"xxxl",children:[(0,i.jsx)(s.X,{variant:"h2",className:"mb-l",children:e("datetime.reference_implementation.heading")}),(0,i.jsx)(d.n,{mb:"l",children:e("datetime.reference_implementation.paragraph")}),(0,i.jsx)(u.d,{labelNewWindow:e("common.opens_in_a_new_tab"),href:"https://github.com/vrk-kpa/suomifi-design-system/tree/develop/components/Datetime/Datetime.tsx",children:e("datetime.reference_implementation.link_text")}),(0,i.jsx)(c.g,{my:"xxl",children:(0,i.jsx)(S,{})})]}),(0,i.jsxs)(c.g,{mb:"xxxl",children:[(0,i.jsx)(s.X,{variant:"h2",className:"mb-l",children:e("datetime.reference_implementation.heading_complex")}),(0,i.jsx)(d.n,{mb:"l",children:e("datetime.reference_implementation.complex_paragraph")}),(0,i.jsx)(u.d,{labelNewWindow:e("common.opens_in_a_new_tab"),href:"https://github.com/vrk-kpa/suomifi-design-system/tree/develop/components/Datetime/DoubleDatetime.tsx",children:e("datetime.reference_implementation.link_text")}),(0,i.jsx)(c.g,{my:"xxl",children:(0,i.jsx)(k,{})})]}),(0,i.jsx)(c.g,{variant:"section",my:"xl",children:(0,i.jsxs)(p.Z,{children:[(0,i.jsx)(s.X,{variant:"h3",as:"h2",children:e("common.accessibility_and_usability")}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_1")}),(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_2")}),(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_3")}),(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_4")}),(0,i.jsxs)("li",{children:[e("datetime.accessibility_list.point_5"),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_5_1")}),(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_5_2")}),(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_5_3")})]})]}),(0,i.jsxs)("li",{children:[e("datetime.accessibility_list.point_6"),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_6_1")}),(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_6_2")}),(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_6_3")}),(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_6_4")})]})]}),(0,i.jsx)("li",{children:e("datetime.accessibility_list.point_7")})]})]})}),(0,i.jsxs)(c.g,{variant:"section",mb:"l",children:[(0,i.jsx)(s.X,{variant:"h2",children:e("datetime.components_text")}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(u.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Block",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("components.block")})}),(0,i.jsx)("li",{children:(0,i.jsx)(u.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/button",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("components.button")})}),(0,i.jsx)("li",{children:(0,i.jsx)(u.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/HintText",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("components.hint_text")})}),(0,i.jsx)("li",{children:(0,i.jsx)(u.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Statustext",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("components.status_text")})}),(0,i.jsx)("li",{children:(0,i.jsx)(u.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/DateInput",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("components.date_input")})}),(0,i.jsx)("li",{children:(0,i.jsx)(u.d,{href:"https://vrk-kpa.github.io/suomifi-ui-components/#/Components/TimeInput",labelNewWindow:e("common.opens_in_a_new_tab"),children:e("components.time_input")})})]})]})]})]})}},97397:function(e,t,n){"use strict";n.d(t,{t:function(){return r}});var i=n(86287),r=[{title:i.patterns.general,path:"/patterns"},{title:i.patterns.multi_insert,path:"/patterns/multi-insert"},{title:i.patterns.datetime,path:"/patterns/datetime"}]},77258:function(e){e.exports={infoBox:"InfoBox_infoBox__we0AO"}},41605:function(e){e.exports={smallScreenNavContainer:"SideNavLayout_smallScreenNavContainer__AM9Lz",navHeadertext:"SideNavLayout_navHeadertext__IjrFs",SideNavLayout:"SideNavLayout_SideNavLayout__WNNTT",left:"SideNavLayout_left__HEGEN",navHeader:"SideNavLayout_navHeader__HRIUu",right:"SideNavLayout_right__3d8ao",navStaticIcon:"SideNavLayout_navStaticIcon__rLjuG"}},27591:function(e,t,n){"use strict";n.d(t,{M:function(){return C}});var i=n(4942),r=n(86854),a=n(91),o=n(67294),s=n(19521),c=n(94184),l=n.n(c),d=n(35243),u=n(72465),m=n(10076),f=n(98492),p=n(48180),h=n(43146),x=n(27143),_=n(54869),b=n(16344),g=n(27111),v=n(17890),y=n(16121),j=n(2763),w=n(35360),S=["className","labelText","labelMode","visualPlaceholder","onChange","onBlur","style","optionalText","status","statusText","hintText","id","value","defaultValue","forwardedRef","debounce","statusTextAriaLiveMode","aria-describedby","tooltipComponent"],N=["theme"],k=["id"];function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E="fi-time-input",L={baseClassName:E,disabled:"".concat(E,"--disabled"),error:"".concat(E,"--error"),success:"".concat(E,"--success"),labelIsVisible:"".concat(E,"_label--visible"),inputElementContainer:"".concat(E,"_input-element-container"),inputElement:"".concat(E,"_input"),styleWrapper:"".concat(E,"_wrapper"),statusTextHasContent:"".concat(E,"_statusText--has-content")},P=function(e){var t,n=e.className,s=e.labelText,c=e.labelMode,d=e.visualPlaceholder,u=e.onChange,j=e.onBlur,w=e.style,N=e.optionalText,k=e.status,T=e.statusText,P=e.hintText,Z=e.id,C=e.value,M=e.defaultValue,B=e.forwardedRef,D=e.debounce,I=e.statusTextAriaLiveMode,W=void 0===I?"assertive":I,z=e["aria-describedby"],H=e.tooltipComponent,R=(0,a.Z)(e,S),$=(0,h.Gu)(R),A=(0,r.Z)($,2),F=A[0],G=A[1],X=(0,h.vi)(F),Q=(0,o.useState)(M||""),K=(0,r.Z)(Q,2),V=K[0],Y=K[1],q=(0,o.useRef)(null),U=B||null,J=function(){if(C)j&&j(null);else{var e=(0,p.wh)(V);e&&Y(e),j&&j(e||V)}},ee="".concat(Z,"-hintText"),te="".concat(Z,"-statusText");return o.createElement(x.hh,{className:l()(E,n,(t={},(0,i.Z)(t,L.disabled,!!G.disabled),(0,i.Z)(t,L.error,"error"===k),(0,i.Z)(t,L.success,"success"===k),t)),style:O(O({},X),w)},o.createElement(b.I,{className:L.styleWrapper},o.createElement(g._,{htmlFor:Z,labelMode:c,optionalText:N,className:l()((0,i.Z)({},L.labelIsVisible,"hidden"!==c)),tooltipComponent:H},s),o.createElement(y.Q,{id:ee},P),o.createElement(x.hh,{className:L.inputElementContainer},o.createElement(m.K,{waitFor:D},(function(e){return o.createElement(_.X,O(O(O(O({},G),{},{id:Z,className:L.inputElement,placeholder:d,forwardedRef:(0,p.K_)(q,U),maxLength:5},{"aria-invalid":"error"===k}),(0,f.I)("aria-describedby",[T?te:void 0,P?ee:void 0,z])),{},{onChange:function(t){u&&e(u,t.currentTarget.value),Y(t.currentTarget.value)},onBlur:J,value:C||V}))}))),o.createElement(v.r,{id:te,className:l()((0,i.Z)({},L.statusTextHasContent,!!T)),status:k,ariaLiveMode:W,disabled:G.disabled},T)))},Z=(0,s.ZP)((function(e){e.theme;var t=(0,a.Z)(e,N);return o.createElement(P,O({},t))})).withConfig({componentId:"sc-jwuh9o-0"})(["",""],(function(e){return function(e){return(0,s.iv)([""," max-width:290px;& .fi-time-input_character-counter{",";color:",";font-size:14px;line-height:20px;flex:none;margin-top:4px;&.fi-time-input_character-counter--error{color:",";",";font-size:14px;line-height:20px;}}& .fi-time-input_bottom-wrapper{display:flex;justify-content:space-between;}& .fi-time-input_wrapper{width:100%;display:inline-block;& .fi-time-input_label--visible{margin-bottom:",";}& .fi-hint-text{margin-bottom:",";}& .fi-time-input_statusText--has-content{margin-top:",";}}& .fi-time-input_input-element-container{width:60px;"," &:focus-within{position:relative;"," &::after{","}}}&.fi-time-input--full-width{width:100%;}& .fi-time-input_input{"," "," width:100%;border:1px solid ",";border-radius:",";line-height:1;background-color:",";height:40px;padding:",";border-color:",";&::placeholder{color:",";opacity:1;text-align:center;}&::-ms-clear{display:none;width:0;height:0;}&::-ms-reveal{display:none;width:0;height:0;}}&.fi-time-input_with-icon{& .fi-time-input_input-element-container{position:relative;}& .fi-time-input_input{padding-right:",";}& .fi-icon{position:absolute;width:18px;height:18px;top:",";right:",";}}&.fi-time-input--error{& .fi-time-input_input{border:2px solid ",";padding-left:9px;padding-top:7px;padding-bottom:7px;}}&.fi-time-input--success{& .fi-time-input_input{border:2px solid ",";padding-left:9px;padding-top:7px;padding-bottom:7px;}}&.fi-time-input--disabled{& .fi-time-input_input{color:",";background-color:",";}& .fi-icon-base-fill{fill:",";}}"],(0,j.LZ)(e)("bodyText"),(0,j.LZ)(e)("bodyTextSmall"),e.colors.blackBase,e.colors.alertBase,(0,j.LZ)(e)("bodySemiBoldSmall"),e.spacing.xs,e.spacing.xs,e.spacing.xxs,(0,j.$K)(e),e.focuses.highContrastFocus,e.focuses.absoluteFocus,(0,j.bG)(e),(0,j.LZ)(e)("actionElementInnerText"),e.colors.depthLight1,e.radiuses.basic,e.colors.whiteBase,e.spacing.insetL,e.colors.depthDark3,e.colors.depthDark2,(0,w.mA)("".concat(e.spacing.insetXl," * 2 + ").concat(e.spacing.insetM)),e.spacing.insetL,e.spacing.insetL,e.colors.alertBase,e.colors.successBase,e.colors.depthBase,e.colors.depthLight3,e.colors.depthBase)}(e.theme)})),C=(0,o.forwardRef)((function(e,t){var n=e.id,i=(0,a.Z)(e,k);return o.createElement(u.cY,null,(function(e){var r=e.suomifiTheme;return o.createElement(d.z,{id:n},(function(e){return o.createElement(Z,O({theme:r,id:e,forwardedRef:t},i))}))}))}));C.displayName="TimeInput"},72119:function(e,t,n){"use strict";n.d(t,{n:function(){return j}});var i=n(4942),r=n(86854),a=n(91),o=n(67294),s=n(19521),c=n(94184),l=n.n(c),d=n(43146),u=n(72465),m=n(2763),f=n(75142),p=["forwardedRef"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var x=(0,s.iv)([""," "," display:block;max-width:100%;word-wrap:normal;word-break:normal;white-space:normal;"],f.i.normalize.html,f.i.common),_=(0,s.ZP)((function(e){var t=e.forwardedRef,n=(0,a.Z)(e,p);return o.createElement("p",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({ref:t},n))})).withConfig({componentId:"sc-13pc990-0"})(["",""],x),b=["className","theme","style"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=(0,s.ZP)((function(e){var t=e.className;e.theme;var n=e.style,i=(0,a.Z)(e,b),s=(0,d.Gu)(i),c=(0,r.Z)(s,2),u=c[0],m=c[1],f=(0,d.vi)(u);return o.createElement(_,v(v({className:l()("fi-paragraph",t)},m),{},{style:v(v({},f),n)}))})).withConfig({componentId:"sc-1acqefb-0"})(["",""],(function(e){return function(e){return(0,s.iv)([""," "," margin:0;"],(0,m.bG)(e),(0,m.LZ)(e)("bodyText"))}(e.theme)})),j=(0,o.forwardRef)((function(e,t){return o.createElement(u.cY,null,(function(n){var i=n.suomifiTheme;return o.createElement(y,v({theme:i,forwardedRef:t},e))}))}));j.displayName="Paragraph"},35243:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var i=n(86854),r=n(67294),a=n(48180),o=0,s=!1,c=function(){return o+=1},l=function(e){var t=e.id,n=e.children,o=function(e){var t=e||(s?c():null),n=(0,r.useState)(t),o=(0,i.Z)(n,2),l=o[0],d=o[1];return(0,a.Pu)((function(){null===l&&d(c())}),[]),(0,r.useEffect)((function(){s||(s=!0)}),[]),null!=l?String(l):void 0}(t);return n(o||"")}},48180:function(e,t,n){"use strict";n.d(t,{K_:function(){return l},Pu:function(){return o},fA:function(){return c},r3:function(){return s},wh:function(){return u}});var i=n(67294),r=n(93029);function a(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var o=a()?i.useLayoutEffect:i.useEffect,s=function(e){if(null!==e&&null!==e.current){var t=e.current;return a()?t?t.ownerDocument:document:null}return null},c=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/-/g,"\\x2d")},l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){if("function"===typeof t)t(e);else if(t)try{t.current=e}catch(n){(0,r.j)().error("Cannot assign element ".concat(e," to ref ").concat(t))}}))}},d=function(e){if(e.match(/^\d{1,2}\.\d{2}$/)||e.match(/^\d{1,2}\:\d{2}$/)){var t=e.split(e.includes(".")?".":":"),n=parseInt(t[0],10),i=parseInt(t[1],10);if(n>=0&&n<25&&i>=0&&i<60)return!0}return!1},u=function(e){if(!e.match(/^[0-9:.]+$/))return null;var t=parseInt(e,10);if(e.match(/^\d{1,2}$/)&&t>=0&&t<25)return"".concat(t,".00");if(e.match(/^\d{4}$/)&&d("".concat(e[0]).concat(e[1],".").concat(e[2]).concat(e[3]))){var n=parseInt("".concat(e[0]).concat(e[1]),10);return"".concat(n,".").concat(e[2]).concat(e[3])}return d(e)&&"0"===e[0]?"".concat(e[1],".").concat(e[3]).concat(e[4]):d(e)?e.replace(":","."):null}}},function(e){e.O(0,[3481,5360,5237,1504,9533,5787,9774,2888,179],(function(){return t=25439,e(e.s=t);var t}));var t=e.O();_N_E=t}]);