(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{407:function(e,t,n){"use strict";n(173);var a=n(20),i=n.n(a),r=n(32),o=n(1),c=n.n(o),s=n(813),l=(n(85),n(118),n(63),n(62),n(175),n(86)),u=n.n(l),p=n(408),d=function(e){return function(t){return Object(r.a)(c.a.Fragment,null,Object(r.a)(p.a,null,Object(r.a)(e,t)),Object(r.a)(p.c,null,Object(r.a)(e,u()({smallScreen:!0},t))))}},h=function(e,t){var n;Object.assign(e,Object.assign({},(n=t,Object.keys(n).map(function(e){var t;return(t={})[e]=d(n[e]),t}).reduce(function(e,t){return Object.assign({},e,t)},{}))))},g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return Object(r.a)(s.a,this.props)},t}(s.a);h(g,s.a),g.bold=s.a.bold;var b=n(812),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return d(b.a)(this.props)},t}(b.a);h(f,b.a);var m=n(172),O=n.n(m),v=n(811),y=n(431),j=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=(e.smallScreen,e.style),n=O()(e,["smallScreen","style"]);return Object(r.a)(v.a,u()({style:Object.assign({margin:y.a.spacing.l+" 0",lineHeight:"27px"},t)},n))},t}(o.Component);j.lead=function(e){var t=e.smallScreen,n=e.style,a=O()(e,["smallScreen","style"]);return Object(r.a)(v.a,u()({style:Object.assign({margin:y.a.spacing.l+" 0",lineHeight:t?"28px":"30px"},n)},a))},j.secondary=function(e){e.smallScreen;var t=e.style,n=O()(e,["smallScreen","style"]);return Object(r.a)(v.a,u()({style:Object.assign({margin:y.a.spacing.m+" 0",lineHeight:"24px"},t)},n))};var x=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return d(j)(this.props)},t}(j);h(x,j),n.d(t,"c",function(){return g}),n.d(t,"a",function(){return f}),n.d(t,"b",function(){return x})},408:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return p});var a=n(86),i=n.n(a),r=n(32),o=(n(1),n(448)),c=n.n(o),s=function(e){return Object(r.a)(c.a,i()({},e,{minWidth:992}))},l=function(e){return Object(r.a)(c.a,i()({},e,{maxWidth:991}))},u=function(e){return Object(r.a)(c.a,i()({},e,{minWidth:768,maxWidth:991}))},p=function(e){return Object(r.a)(c.a,i()({},e,{maxWidth:767}))}},410:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i});n(64);var a=function(e){return e&&"/"===e},i=function(e){return e&&e.replace(/\/$|$/,"/")}},411:function(e,t,n){"use strict";n(174),n(85);var a=n(172),i=n.n(a),r=n(437),o=n(32),c=(n(1),n(406)),s=n(409),l=n(809),u=n(431),p=n(410),d=function(e){var t=e.children,n=i()(e,["children"]);return Object(o.a)(s.Link,n,t)};t.a=function(e){var t=e.icon,n=e.text,a=e.title,i=e.url,s=e.style,h=Object(r.a)(l.a,{target:"ebrhuch0"})(Object.assign({display:"inline-flex",lineHeight:"1.5em",alignItems:"center"},s)),g=Object(o.a)("span",{style:{display:"inline-flex",alignItems:"center"}},t&&Object(o.a)("span",{style:{display:"inline-flex",marginRight:n?u.a.spacing.s:0}},t),n);return Object(o.a)(c.NamespacesConsumer,null,function(e){return i.startsWith("/")?Object(o.a)(h,{to:Object(p.a)(i),as:d,title:a},g):Object(o.a)(h,{variant:"external",hideIcon:!!t,href:i,title:a,"aria-label":e("common:opens.new.window")},g)})}},412:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return b}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h}),n.d(t,"useStaticQuery",function(){return g});var a=n(32),i=n(1),r=n.n(i),o=n(14),c=n.n(o),s=n(84),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withAssetPrefix",function(){return s.withAssetPrefix}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"parsePath",function(){return s.parsePath}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(415),p=n.n(u);n.d(t,"PageRenderer",function(){return p.a});var d=r.a.createContext({}),h=function(e){return Object(a.a)(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.a)("div",null,"Loading (StaticQuery)")})},g=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},415:function(e,t,n){var a;e.exports=(a=n(429))&&a.default||a},422:function(e,t,n){"use strict";var a=n(32),i=(n(1),n(438)),r=n.n(i),o=n(406);t.a=function(e){var t=e.title,n=e.description,i=e.meta,c=void 0===i?[]:i,s=e.keywords,l=void 0===s?[]:s;return Object(a.a)(o.NamespacesConsumer,null,function(e,i){var o=i.i18n,s=n||e("common:site.description"),u=o.language;return Object(a.a)(r.a,{htmlAttributes:{lang:u},title:t,titleTemplate:"%s | "+e("common:site.title"),meta:[{name:"description",content:s},{property:"og:title",content:t},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e("common:site.author")},{name:"twitter:title",content:t},{name:"twitter:description",content:s}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(c)})})}},423:function(e,t,n){"use strict";var a=n(32),i=n(1),r=n.n(i),o=n(406),c=n(431),s=n(86),l=n.n(s),u=(n(85),n(409)),p=n(814),d=n(612),h=n(805),g=function(e){var t=e.changeLng,n=e.lng,i=e.availableLngs;return Object(a.a)(o.NamespacesConsumer,{ns:["language"]},function(e){return Object(a.a)(p.a.language,{name:e(n+".short"),"aria-label":e("menu.label")},i.map(function(i){return Object(a.a)(d.a.language,{key:i,onSelect:function(){return t(i)},selected:i===n},e(i+".long"))}))})},b=function(e){var t=e.changeLng,n=e.lng,i=e.availableLngs;return Object(a.a)(o.NamespacesConsumer,{ns:["language"]},function(e){return Object(a.a)("ul",{"aria-label":e("menu.label"),style:{margin:c.a.spacing.m,padding:0,listStyle:"none",display:"flex",alignItems:"center",justifyContent:"center"}},i.map(function(i){return Object(a.a)("li",{key:i},Object(a.a)(h.a.secondaryNoborder,{onClick:function(){return t(i)},disabled:i===n,lang:i,style:{textTransform:"uppercase"}},e(i+".medium")))}))})},f=function(e,t){var n=e.variant;return Object(a.a)(u.Language,null,function(e){return i=Object.assign({},e),!!(r=i.availableLngs)&&r.length>1&&("menu"===n?Object(a.a)(g,l()({},t,e)):"list"===n?Object(a.a)(b,l()({},t,e)):null);var i,r})},m={menu:function(e){return Object(a.a)(f,l()({variant:"menu"},e))},list:function(e){return Object(a.a)(f,l()({variant:"list"},e))}};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var v=r.a.createElement("path",{fill:"#003479",d:"M53 0H2C.9 0 0 .9 0 2v51c0 1.1.9 2 2 2h51c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"}),y=r.a.createElement("g",{fill:"#FFF"},r.a.createElement("path",{d:"M14 20v-5c0-1.1.9-2 2-2h5v7M14 27h7v14c0 .5-.4 1-1 1h-5c-.6 0-1-.5-1-1M28 13h13c.5 0 1 .4 1 1v6H28M41 34H28v-7h14v6c0 .6-.4 1-1 1z"})),j=function(e){return r.a.createElement("svg",O({viewBox:"0 0 55 55",preserveAspectRatio:"xMidYMin meet",width:"1em",height:"1em"},e),v,y)};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var w=r.a.createElement("path",{fill:"#003479",d:"M53 0H2C.9 0 0 .9 0 2v51c0 1.1.9 2 2 2h51c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"}),S=r.a.createElement("g",{fill:"#FFF"},r.a.createElement("path",{d:"M14 20v-5c0-1.1.9-2 2-2h5v7M14 27h7v14c0 .5-.4 1-1 1h-5c-.6 0-1-.5-1-1M28 13h13c.5 0 1 .4 1 1v6H28M41 34H28v-7h14v6c0 .6-.4 1-1 1z"})),k=r.a.createElement("g",{fill:"#003479"},r.a.createElement("path",{d:"M85.1 42.3c-3.2 0-6-.8-8.1-1.9l.6-4c2 1.3 4.7 2.5 7.6 2.5 3 0 5.2-1.6 5.2-4.4 0-2.6-1.2-3.7-5.5-5.7-5.5-2.5-7.5-4.3-7.5-8.4 0-4.7 3.6-7.6 8.8-7.6 2.8 0 4.9.7 6.6 1.6l-.6 3.9c-1.6-1.2-3.8-2.1-6.1-2.1-3.3 0-4.8 1.8-4.8 3.9 0 2.2 1.1 3.3 5.5 5.3 5.6 2.6 7.6 4.5 7.6 8.9-.1 4.9-3.9 8-9.3 8zM102 22v13.7c0 2.1.9 3.4 3.1 3.4 2 0 4-1.3 5.8-3.2V22h3.7v20h-3l-.5-2.9c-1.9 1.8-4.3 3.3-7.1 3.3-3.8 0-5.8-2.3-5.8-5.9V22h3.8zM127.7 42.4c-5.3 0-9.2-3.8-9.2-10.4 0-6.6 3.9-10.5 9.2-10.5 5.4 0 9.3 3.9 9.3 10.5.1 6.6-3.9 10.4-9.3 10.4zm0-17.7c-3.6 0-5.4 3.2-5.4 7.4 0 4.1 1.9 7.3 5.4 7.3 3.7 0 5.5-3.1 5.5-7.3.1-4.2-1.9-7.4-5.5-7.4zM165.7 42V28.3c0-2.1-.8-3.4-2.9-3.4-2 0-3.9 1.3-5.7 3.2V42h-3.7V28.3c0-2.1-.8-3.4-2.9-3.4-2 0-3.9 1.3-5.7 3.2V42H141V22h3l.5 2.9c1.9-1.7 4.2-3.3 7-3.3 2.9 0 4.5 1.3 5.3 3.3 1.8-1.7 4.2-3.3 7.1-3.3 3.8 0 5.7 2.3 5.7 5.9V42h-3.9zM176.5 17.7c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4zM174.6 42V22h3.7v20h-3.7zM200 16.3c-1.7 0-2.8.7-2.8 2.6V22h4l.5 3.2h-4.5V42h-3.7V25.1h-3V22h3v-3.5c0-4 2.6-5.5 6.2-5.5.6 0 1.1 0 1.6.1l.5 3.4c-.3-.1-1.1-.2-1.8-.2zM206.8 17.7c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4zM204.9 42V22h3.7v20h-3.7zM185.6 42c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4z"})),C=function(e){return r.a.createElement("svg",x({viewBox:"0 0 220 55",preserveAspectRatio:"xMidYMin meet",width:"1em",height:"1em"},e),w,S,k)},N=n(20),B=n.n(N),A=n(466),z=n(61),L=n(410),T=function(e){function t(){return e.apply(this,arguments)||this}return B()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,n=e.children;return Object(a.a)(u.Link,{to:t,css:Object(z.a)([{display:"flex",alignItems:"center",justifyContent:"space-between",height:"3.2rem",paddingLeft:c.a.spacing.m,paddingRight:c.a.spacing.m,borderBottom:"1px solid "+c.a.colors.depthSecondary,color:c.a.colors.highlightBase,textDecoration:"none",whiteSpace:"nowrap","&:hover":{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase}},"&:focus { "+c.a.outlines.basic+" }"]),getProps:function(e){var n=e.isCurrent,a=e.isPartiallyCurrent;return Object(L.b)(t)||!a||n?n?{style:{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase,fontWeight:600}}:void 0:{style:{fontWeight:600}}}},n)},t}(i.Component),D=function(e){function t(t){var n;return(n=e.call(this,t)||this).isOpen=function(){return n.state.isOpen},n.toggleOpen=function(){n.setState(function(e){return{isOpen:!e.isOpen}})},n.state={isOpen:!1},n}return B()(t,e),t.prototype.render=function(){var e=this,t=this.props.mainNavData;return Object(a.a)(o.NamespacesConsumer,null,function(n){return Object(a.a)("div",{style:{position:"relative"}},Object(a.a)(h.a,{"aria-label":n("common:open.navigation.main"),"aria-expanded":e.isOpen(),"aria-haspopup":!0,style:{background:"none",padding:0,border:0,width:"40px",height:"40px",minWidth:"40px",minHeight:"40px",fontSize:"24px"},onClick:e.toggleOpen},e.isOpen()?Object(a.a)(A.a,{icon:"close",color:c.a.colors.depthDark27}):Object(a.a)(A.a,{icon:"menu",color:c.a.colors.depthDark27})),e.isOpen()&&Object(a.a)("div",{style:{position:"absolute",top:"50px",right:0,zIndex:c.a.zindexes.focus+1,width:"20rem",background:c.a.colors.whiteBase,border:"1px solid "+c.a.colors.depthLight13,boxShadow:c.a.shadows.menuShadow}},Object(a.a)("nav",{"aria-label":n("common:navigation.main")},Object(a.a)("ul",{style:{margin:0,padding:0,listStyle:"none"}},t.items.map(function(e){return Object(a.a)("li",{key:e.to},Object(a.a)(T,{to:e.to},e.label))}))),Object(a.a)(m.list,null)))})},t}(i.Component),M=n(408),P=function(e){return{items:[{to:"/",label:e("home:title")},{to:"/styles/",label:e("styles:title")},{to:"/components/",label:e("components:title")},{to:"/info/",label:e("info:title")}]}},E=n(411),W=function(){return Object(a.a)(o.NamespacesConsumer,null,function(e){return Object(a.a)("header",{style:{padding:c.a.spacing.m,borderTop:"4px solid "+c.a.colors.brandBase,boxSizing:"border-box",background:c.a.colors.whiteBase,borderBottom:"1px solid "+c.a.colors.depthLight13,display:"flex",justifyContent:"center",lineHeight:"40px"}},Object(a.a)("div",{style:{width:"100%",maxWidth:1140,display:"flex",alignItems:"center",justifyContent:"space-between"}},Object(a.a)(E.a,{icon:Object(a.a)(r.a.Fragment,null,Object(a.a)(M.a,null,Object(a.a)(C,{style:{width:"128px",height:"32px"}})),Object(a.a)(M.c,null,Object(a.a)(j,{style:{width:"32px",height:"32px"}}))),title:e("common:to.homepage"),url:"/"}),Object(a.a)("div",{style:{flex:1,position:"relative",marginLeft:c.a.spacing.s}},Object(a.a)("div",{style:{fontSize:"28px",fontWeight:600,color:c.a.colors.brandBase}},e("common:header.title")),Object(a.a)("div",{style:{position:"absolute",top:"-.2rem",left:"9.6rem",whiteSpace:"nowrap",lineHeight:"16px",fontSize:"16px",fontWeight:600,textTransform:"uppercase",color:c.a.colors.highlightBase}},e("common:header.stamp"))),Object(a.a)(M.a,null,Object(a.a)(m.menu,null)),Object(a.a)(M.c,null,Object(a.a)(D,{mainNavData:P(e)}))))})},V=function(e){var t=e.to,n=e.children;return Object(a.a)(u.Link,{to:t,css:Object(z.a)([{padding:c.a.spacing.s,lineHeight:"2.8rem",whiteSpace:"nowrap",color:c.a.colors.blackBase,textDecoration:"none","&:hover":{borderBottom:"4px solid "+c.a.colors.highlightBase}},"&:focus { "+c.a.outlines.basic+" }"]),getProps:function(e){var n=e.isCurrent,a=e.isPartiallyCurrent;if(n||!Object(L.b)(t)&&a)return{style:{borderBottom:"4px solid "+c.a.colors.highlightBase}}}},n)},I=function(e){var t=e.mainNavData;return Object(a.a)(o.NamespacesConsumer,null,function(e){return Object(a.a)("nav",{"aria-label":e("common:navigation.main"),style:{padding:0,boxSizing:"border-box",background:""+c.a.colors.whiteBase,borderBottom:"1px solid "+c.a.colors.depthLight13,display:"flex",justifyContent:"center"}},Object(a.a)("ul",{style:{margin:0,padding:0,width:"100%",maxWidth:1140,display:"flex",alignItems:"center",flexWrap:"wrap",listStyle:"none"}},t.items.map(function(e){return Object(a.a)("li",{key:e.to,style:{margin:"0 "+c.a.spacing.l+" 0 "+c.a.spacing.s}},Object(a.a)(V,{to:e.to},e.label))})))})},F=function(e){var t=e.to,n=e.children;return Object(a.a)("a",{href:t,css:Object(z.a)([{position:"absolute",zIndex:c.a.zindexes.focus+1,left:"-1000px",margin:c.a.spacing.m,padding:c.a.spacing.s,background:c.a.colors.highlightLight53,border:"1px solid "+c.a.colors.depthLight13,color:c.a.colors.blackBase,textDecoration:"none"},"&:focus { "+c.a.outlines.basic+" }",{"&:focus":{position:"absolute",left:"auto"}}])},n)},H=n(47),R=(n(173),n(174),n(177),n(119),n(176),n(120),n(813)),q=n(412),_=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).toggleOpen=function(e){e.preventDefault();var n=t.props,a=n.to;(0,n.handleToggle)(a)},t}return B()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,n=e.showAsTo,i=e.isPartialMatch,r=e.children,o=e.hasChildren,s=e.isOpen,l=e.level;return Object(a.a)(u.Link,{to:t,css:Object(z.a)([{display:"flex",alignItems:"center",justifyContent:"space-between",height:"3.2rem",paddingLeft:l+".2rem",paddingRight:c.a.spacing.s,borderBottom:"1px solid "+c.a.colors.depthSecondary,color:c.a.colors.highlightBase,textDecoration:"none",textTransform:1===l?"uppercase":"none","&:hover":{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase}},"&:focus { "+c.a.outlines.basic+" }"]),getProps:function(e){var a=e.isCurrent,r=e.isPartiallyCurrent,o=n?i(n):r;return Object(L.b)(t)||!o||a?a?{style:{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase,fontWeight:600}}:void 0:{style:{fontWeight:600}}}},r,o&&Object(a.a)(h.a,{"aria-expanded":s(t),style:{float:"right",background:"none",padding:0,border:0,width:"40px",height:"40px",minWidth:"40px",minHeight:"40px",fontSize:"16px",transform:s(t)?"rotate(.5turn)":"none"},onClick:this.toggleOpen},Object(a.a)(A.a,{icon:"chevronDown",color:c.a.colors.depthDark27})))},t}(i.Component),G=function(e){function t(t){var n;return(n=e.call(this,t)||this).SIDENAVSTATE_KEY="sideNavState",n.getSessionState=function(){return JSON.parse(sessionStorage.getItem(n.SIDENAVSTATE_KEY))||{}},n.setSessionState=function(e){try{sessionStorage.setItem(n.SIDENAVSTATE_KEY,JSON.stringify(e))}catch(t){}},n.componentDidMount=function(){var e=n.getSessionState(),t=n.getCurrentPath(),a=n.getPathTree(t).map(function(e){var t;return(t={})[e]=!0,t}).reduce(function(e,t){return Object.assign({},e,t)},{});e.isOpen=Object.assign({},e.isOpen,a),n.setState(function(){return n.setSessionState(e),e})},n.getPathTree=function(e,t){if(void 0===t&&(t=[]),e){var a="/"+e.split("/").join("/");a+=a.endsWith("/")?"":"/",t.push(a);var i=e.split("/").slice(0,-1).join("/");n.getPathTree(i,t)}return t},n.getCurrentPath=function(){var e=n.props.location.pathname.match(RegExp(Object(q.withPrefix)("/../(.*)")));return e&&e[1]},n.isPartiallyCurrent=function(e){var t=n.getCurrentPath();return e&&t&&t.startsWith(e.substr(1))},n.isCurrent=function(e){var t=n.getCurrentPath();return e&&t&&t===e.substr(1)},n.isNavOpen=function(){return n.state.isNavOpen},n.toggleNavOpen=function(){n.setState(function(e){return n.setSessionState(Object.assign({},e,{isNavOpen:!e.isNavOpen})),{isNavOpen:!e.isNavOpen}})},n.isOpen=function(e){return n.state.isOpen[e]},n.toggleOpen=function(e){n.setState(function(t){return t.isOpen[e]=!t.isOpen[e],n.setSessionState(t),{isOpen:t.isOpen}})},n.hasChildren=function(e){return!!e.children&&e.children.length>0},n.Title=function(){var e=n.props.sideNavData;return Object(a.a)("div",{style:{padding:c.a.spacing.s,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid "+c.a.colors.depthSecondary,textShadow:"none"}},Object(a.a)("div",{style:{display:"flex",alignItems:"center"}},Object(a.a)("div",{style:{fontSize:"40px"}},e.icon),Object(a.a)(R.a.bold,{style:{marginLeft:c.a.spacing.s}},e.title)),Object(a.a)(M.c,null,Object(a.a)("div",{style:{float:"right",background:"none",marginRight:c.a.spacing.m,padding:0,border:0,width:"16px",height:"16px",fontSize:"16px",transform:n.isNavOpen()?"rotate(.5turn)":"none"}},Object(a.a)(A.a,{icon:"chevronDown",color:c.a.colors.depthDark27}))))},n.renderNavItems=function(e,t){return Object(a.a)("ul",{style:{margin:0,padding:0,width:"100%",listStyle:"none"}},e.map(function(e){return Object(a.a)("li",{key:e.to,css:Object(z.a)({position:"relative","&::after":{content:'""',position:"absolute",top:"-1px",left:0,bottom:0,borderLeft:1===t&&(e.showAsTo?n.isCurrent(e.to)||n.isPartiallyCurrent(e.showAsTo):n.isPartiallyCurrent(e.to))?"4px solid "+c.a.colors.brandBase:0}})},Object(a.a)(_,{to:e.to,showAsTo:e.showAsTo,isPartialMatch:n.isPartiallyCurrent,hasChildren:n.hasChildren(e),isOpen:n.isOpen,handleToggle:n.toggleOpen,level:t},e.label),n.hasChildren(e)&&!!n.state.isOpen[e.to]&&n.renderNavItems(e.children,t+1))}))},n.state={isNavOpen:!1,isOpen:{}},n}return B()(t,e),t.prototype.render=function(){var e=this.props.sideNavData;return Object(a.a)("nav",{"aria-label":e.title,style:{margin:0,padding:0,boxSizing:"border-box",background:""+c.a.colors.whiteBase}},Object(a.a)(M.a,null,Object(a.a)(this.Title,null),this.renderNavItems(e.items,1)),Object(a.a)(M.c,null,Object(a.a)(h.a,{"aria-expanded":this.isNavOpen(),onClick:this.toggleNavOpen,fullWidth:!0,style:{background:"none",padding:0,border:0}},Object(a.a)(this.Title,null)),this.isNavOpen()&&this.renderNavItems(e.items,1)))},t}(i.Component),Q=function(e){var t=e.sideNavData,n=e.style;return t?Object(a.a)(H.Location,null,function(e){var i=e.location;return Object(a.a)("div",{id:"sidenav",style:n},Object(a.a)(G,{location:i,sideNavData:t}))}):null},Y=function(e){var t=e.hasFrame,n=void 0===t||t,i=e.children,r=e.style;return Object(a.a)("main",{id:"main",style:Object.assign({margin:n?c.a.spacing.l+" "+c.a.spacing.m:0},r)},i)},J=function(e){var t=e.sideNavData,n=e.hasFrame,i=void 0===n||n,r=e.children;return Object(a.a)("div",{style:{background:c.a.colors.depthLight30,paddingTop:i?c.a.spacing.m:0,paddingBottom:c.a.spacing.xl}},Object(a.a)(M.a,null,Object(a.a)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"nowrap"}},Object(a.a)("div",{style:{margin:i?c.a.spacing.m+" "+c.a.spacing.l+" 0 "+c.a.spacing.l:0,width:"100%",maxWidth:i?1140:"initial",display:"flex",flexWrap:"nowrap",background:i?c.a.colors.whiteBase:"none",border:i?"1px solid "+c.a.colors.depthLight13:0}},Object(a.a)(Q,{sideNavData:t,style:{width:"22rem",marginRight:c.a.spacing.m}}),Object(a.a)(Y,{hasFrame:i,style:{flex:1}},r)))),Object(a.a)(M.d,null,Object(a.a)(Q,{sideNavData:t,style:{margin:"0 "+c.a.spacing.l,border:"1px solid "+c.a.colors.depthLight13}}),Object(a.a)("div",{style:{margin:i?c.a.spacing.m+" "+c.a.spacing.l+" 0 "+c.a.spacing.l:0,background:i?c.a.colors.whiteBase:"none",border:i?"1px solid "+c.a.colors.depthLight13:0}},Object(a.a)(Y,{hasFrame:i},r))),Object(a.a)(M.b,null,Object(a.a)(Q,{sideNavData:t,style:{margin:"0 "+c.a.spacing.m,border:"1px solid "+c.a.colors.depthLight13}}),Object(a.a)("div",{style:{margin:0,marginTop:i?c.a.spacing.m:0,background:i?c.a.colors.whiteBase:"none",border:i?"1px solid "+c.a.colors.depthLight13:0}},Object(a.a)(Y,{hasFrame:i},r))))},K=n(407),U=n(432);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var X=r.a.createElement("path",{d:"M24.61 0a24.62 24.62 0 0 0-7.78 48c1.23.23 1.68-.53 1.68-1.18v-4.19c-6.85 1.49-8.29-3.3-8.29-3.3-1.15-2.87-2.8-3.63-2.8-3.63-2.2-1.52.2-1.52.2-1.52a5.19 5.19 0 0 1 3.8 2.56c2.2 3.76 5.76 2.67 7.17 2a5.27 5.27 0 0 1 1.56-3.29c-5.47-.62-11.21-2.73-11.21-12.16a9.54 9.54 0 0 1 2.48-6.57 8.85 8.85 0 0 1 .26-6.54s2.07-.66 6.77 2.52a23.31 23.31 0 0 1 12.33 0c4.7-3.18 6.76-2.52 6.76-2.52a8.79 8.79 0 0 1 .24 6.51 9.49 9.49 0 0 1 2.53 6.61c0 9.45-5.75 11.54-11.23 12.14A5.9 5.9 0 0 1 30.75 40v6.76c0 .65.44 1.42 1.69 1.18a24.62 24.62 0 0 0-7.8-48z"}),Z=function(e){return r.a.createElement("svg",$({"data-name":"Layer 1",viewBox:"0 0 49.23 48.01",width:"1em",height:"1em"},e),X)},ee=function(e){var t=e.header,n=e.title,i=e.description,r=e.links,o=e.background,s=void 0===o?c.a.colors.whiteBase:o,l=e.textColor,u=void 0===l?"blackBase":l,p=e.linkColor,d=e.textDecoration,h=e.center,g=void 0!==h&&h,b=e.wrapAll,f=void 0!==b&&b;return Object(a.a)("div",{style:{margin:0,padding:c.a.spacing.m,background:s,display:"flex",justifyContent:"center"}},Object(a.a)("div",{style:{width:"100%",maxWidth:1140,display:f?"initial":"flex",flexWrap:"wrap",justifyContent:g?"center":"space-between"}},t&&Object(a.a)("div",{style:{flex:"100%",marginTop:c.a.spacing.m}},t),Object(a.a)("div",{style:{flex:"40%",textAlign:g?"center":"initial"}},Object(a.a)(K.b.secondary,{style:{textAlign:"inherit"}},Object(a.a)(K.c.bold,{color:u},n)),Object(a.a)(K.b.secondary,{style:{textAlign:"inherit"}},Object(a.a)(K.c,{color:u},i))),Object(a.a)("div",{style:{margin:c.a.spacing.m+" 0",marginLeft:f?0:c.a.spacing.xl,flex:"50%",textAlign:g?"center":"initial"}},Object(a.a)("ul",{style:{margin:0,padding:0,width:"100%",listStyle:"none",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:f?g?"center":"initial":"flex-end"}},r&&r.map(function(e,t){return e&&!!e.text&&!!e.url&&Object(a.a)("li",{key:t,style:{display:"inline-flex",justifyContent:f?g?"center":"initial":"flex-end",flex:f?"100%":"unset",margin:f?c.a.spacing.s+" 0":"0 "+c.a.spacing.m+" "+c.a.spacing.m}},Object(a.a)(E.a,{icon:e.icon,text:e.text,url:e.url,style:{"&:link,:visited,:focus,:hover,:active":{fontSize:"16px",color:c.a.colors[p],textDecoration:d}}}))})))))},te=function(e){var t=e.center,n=void 0!==t&&t,i=e.wrapAll,s=void 0!==i&&i;return Object(a.a)(o.NamespacesConsumer,null,function(e){return Object(a.a)(r.a.Fragment,null,Object(a.a)(ee,{header:Object(a.a)(E.a,{icon:Object(a.a)(C,{style:{width:"128px",height:"32px"}}),title:e("common:to.homepage"),url:"/"}),description:e("common:footer.description"),links:e("common:footer.links"),wrapAll:s}),Object(a.a)(ee,{title:e("common:footer.social.title"),description:e("common:footer.social.description"),links:[{icon:Object(a.a)(U.a,{style:{fill:c.a.colors.whiteBase,fontSize:"25px"}}),text:e("common:slack.link.text"),url:e("common:slack.link.url")},{icon:Object(a.a)(Z,{style:{fill:c.a.colors.whiteBase,fontSize:"25px"}}),text:e("common:github.link.text"),url:e("common:github.link.url")}],background:c.a.colors.brandBase,textColor:"whiteBase",linkColor:"whiteBase",textDecoration:"underline",center:n,wrapAll:s}))})},ne=function(){return Object(a.a)("footer",{id:"footer"},Object(a.a)(M.a,null,Object(a.a)(te,null)),Object(a.a)(M.d,null,Object(a.a)(te,null)),Object(a.a)(M.b,null,Object(a.a)(te,{center:!0,wrapAll:!0})))},ae=(n(449),n(450),function(e){var t=e.hasSideNav;return Object(a.a)(o.NamespacesConsumer,null,function(e){return Object(a.a)(r.a.Fragment,null,Object(a.a)(F,{to:"#main"},e("common:to.main.content")),t&&Object(a.a)(F,{to:"#sidenav"},e("common:to.sidenav")))})});t.a=function(e){var t=e.sideNavData,n=e.hasFrame,i=void 0===n||n,r=e.children;return Object(a.a)(o.NamespacesConsumer,null,function(e){return Object(a.a)("div",{style:{fontFamily:c.a.typography.fontFamily,fontSize:c.a.typography.fontSize.body,lineHeight:"1.5em",color:c.a.colors.blackBase}},Object(a.a)(ae,{hasSideNav:!!t}),Object(a.a)(W,null),Object(a.a)(M.a,null,Object(a.a)(I,{mainNavData:P(e)})),Object(a.a)(J,{sideNavData:t,hasFrame:i},r),Object(a.a)(ne,null))})}},429:function(e,t,n){"use strict";n.r(t);n(85);var a=n(1),i=n.n(a),r=n(14),o=n.n(r),c=n(121),s=n(12),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},432:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(1),i=n.n(a);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=i.a.createElement("defs",null),c=i.a.createElement("path",{className:"slack_svg__cls-1",d:"M19.78 1.13a4.58 4.58 0 0 0-4.57 4.59 4.58 4.58 0 0 0 4.57 4.59h4.58V5.72a4.59 4.59 0 0 0-4.57-4.59m0 12.23H7.58A4.59 4.59 0 0 0 3 18a4.59 4.59 0 0 0 4.58 4.59h12.2A4.59 4.59 0 0 0 24.36 18a4.59 4.59 0 0 0-4.58-4.59M48.78 18a4.59 4.59 0 0 0-4.58-4.59A4.59 4.59 0 0 0 39.62 18v4.59h4.58A4.59 4.59 0 0 0 48.78 18m-12.21 0V5.72A4.59 4.59 0 0 0 32 1.13a4.59 4.59 0 0 0-4.58 4.59V18A4.59 4.59 0 0 0 32 22.54 4.59 4.59 0 0 0 36.57 18M32 47a4.59 4.59 0 0 0 4.58-4.59A4.58 4.58 0 0 0 32 37.83h-4.59v4.58A4.59 4.59 0 0 0 32 47m0-12.23h12.2a4.59 4.59 0 0 0 4.58-4.59 4.58 4.58 0 0 0-4.58-4.58H32a4.58 4.58 0 0 0-4.58 4.58A4.59 4.59 0 0 0 32 34.77M3 30.18a4.59 4.59 0 0 0 4.58 4.59 4.59 4.59 0 0 0 4.58-4.59V25.6H7.58A4.58 4.58 0 0 0 3 30.18m12.21 0v12.23A4.57 4.57 0 0 0 19.78 47a4.59 4.59 0 0 0 4.58-4.59V30.18a4.57 4.57 0 0 0-4.57-4.58 4.56 4.56 0 0 0-4.57 4.58"}),s=function(e){return i.a.createElement("svg",r({id:"slack_svg__Layer_1","data-name":"Layer 1",viewBox:"0 0 50 50",width:"1em",height:"1em"},e),o,c)}},444:function(e,t){},445:function(e,t){},446:function(e,t){},447:function(e,t){}}]);
//# sourceMappingURL=3-65cda4edc11174b82bac.js.map