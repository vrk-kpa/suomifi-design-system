(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4],{398:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return O});n(179),n(85),n(118),n(63),n(62),n(175);var a=n(32),r=(n(1),n(405)),i=n(408),o=n(428),c=n(421),s=n(419),l=n(433),u=n(484),d=n(454),p=n(422),h=n(432),b=n(406),m=Object.keys(o.a.colors).map(function(e){var t;return(t={})[e]={name:e,value:o.a.colors[e],border:"none"},t}).reduce(function(e,t){return Object.assign({},e,t)},{}),g="1px solid "+o.a.colors.depthLight13;m.whiteBase=Object.assign({},m.whiteBase,{border:g}),m.highlightLight53=Object.assign({},m.highlightLight53,{border:g});var f=[{id:"textColors",colors:[m.blackBase,m.depthBase,m.depthDark27]},{id:"brandColors",colors:[m.brandBase]},{id:"controlColors",colors:[m.highlightBase,m.highlightLight4,m.highlightLight45,m.highlightLight50,m.highlightLight53,m.highlightDark9,m.depthBase,m.depthLight26,m.depthDark27,m.accentBase,m.depthSecondary,m.depthSecondaryDark3,m.accentTertiaryDark9]},{id:"iconColors",colors:[m.accentBase,m.depthBase,m.depthDark27]},{id:"backgroundColors",colors:[m.whiteBase,m.depthLight30,m.depthLight13,m.highlightLight45,m.highlightLight50,m.highlightLight53,m.depthSecondary]},{id:"trafficColors",colors:[m.successBase,m.warningBase,m.alertBase,m.warningLight47]},{id:"accentColors",colors:[m.accentBase,m.accentSecondary,m.accentSecondaryLight40,m.accentTertiary]}];t.default=Object(i.withI18next)()(function(){return Object(a.a)(r.NamespacesConsumer,{ns:["colors"]},function(e){return Object(a.a)(c.a,{sideNavData:Object(u.a)(e)},Object(a.a)(s.a,{title:e("title")}),Object(a.a)(b.a.h1,null,e("title")),Object(a.a)("p",null,Object(a.a)(b.b.lead,null,e("intro"))),Object(a.a)(d.a,{title:e("note.title"),items:e("note.items")}),e("sections").map(function(e,t){return Object(a.a)(p.a,{key:t,mainTitle:e.title,paragraphs:e.paragraphs,links:e.links})}),f.map(function(t){return Object(a.a)(l.a,{key:t.id,mainTitle:e(t.id+".title"),description:e(t.id+".description"),exampleFirst:!1,noCode:!0},Object(a.a)(h.a,{style:{padding:0,justifyContent:"flex-start",background:"none"}},t.colors.map(function(n,r){return i=t.id+"."+r,o=n.name,c=n.value,s=e(n.name+".label"),l={border:n.border},Object(a.a)("div",{key:i,style:{margin:".5rem 2rem 1.5rem 0",lineHeight:"1rem"}},Object(a.a)("div",{style:Object.assign({width:"10rem",height:"3rem",marginBottom:"1rem",background:c},l)}),Object(a.a)("div",{style:{fontSize:".8rem"}},s),Object(a.a)("div",{style:{fontSize:".8rem"}},c),Object(a.a)("div",{style:{fontSize:".8rem"}},o));var i,o,c,s,l})))}))})});var O="2520468691"},406:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return g});n(173);var a=n(20),r=n.n(a),i=(n(85),n(118),n(63),n(62),n(175),n(86)),o=n.n(i),c=n(32),s=n(1),l=n.n(s),u=n(807),d=n(808),p=n(407),h=function(e){return function(t){return Object(c.a)(l.a.Fragment,null,Object(c.a)(p.a,null,Object(c.a)(e,t)),Object(c.a)(p.c,null,Object(c.a)(e,o()({smallScreen:!0},t))))}},b=function(e,t){var n;Object.assign(e,Object.assign({},(n=t,Object.keys(n).map(function(e){var t;return(t={})[e]=h(n[e]),t}).reduce(function(e,t){return Object.assign({},e,t)},{}))))},m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return h(u.a)(this.props)},t}(u.a);b(m,u.a);var g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return Object(c.a)(d.a,this.props)},t}(d.a);b(g,d.a),g.bold=d.a.bold},407:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return d});var a=n(86),r=n.n(a),i=n(32),o=(n(1),n(444)),c=n.n(o),s=function(e){return Object(i.a)(c.a,r()({},e,{minWidth:992}))},l=function(e){return Object(i.a)(c.a,r()({},e,{maxWidth:991}))},u=function(e){return Object(i.a)(c.a,r()({},e,{minWidth:768,maxWidth:991}))},d=function(e){return Object(i.a)(c.a,r()({},e,{maxWidth:767}))}},409:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});n(64);var a=function(e){return e&&"/"===e},r=function(e){return e&&e.replace(/\/$|$/,"/")}},410:function(e,t,n){"use strict";n(174),n(85);var a=n(172),r=n.n(a),i=n(434),o=n(32),c=n(1),s=n.n(c),l=n(408),u=n(806),d=n(409),p=function(e){var t=e.children,n=r()(e,["children"]);return Object(o.a)(l.Link,n,t)};t.a=function(e){var t=e.icon,n=e.text,a=e.title,r=e.url,c=e.style,l=Object(i.a)(u.a,{target:"ebrhuch0"})(Object.assign({display:"inline-flex",lineHeight:"1.5em"},c)),h=Object(o.a)("span",{style:{display:"inline-flex",alignItems:"center"}},t&&Object(o.a)("span",{style:{display:"inline-flex",marginRight:n?".5rem":0}},t),n);return Object(o.a)(s.a.Fragment,null,r.startsWith("/")?Object(o.a)(l,{to:Object(d.a)(r),as:p,title:a},h):Object(o.a)(l,{href:r,rel:"noopener noreferrer",target:"_blank",title:a},h))}},411:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return h}),n.d(t,"useStaticQuery",function(){return b});var a=n(32),r=n(1),i=n.n(r),o=n(14),c=n.n(o),s=n(84),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withAssetPrefix",function(){return s.withAssetPrefix}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"parsePath",function(){return s.parsePath}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(412),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var p=i.a.createContext({}),h=function(e){return Object(a.a)(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.a)("div",null,"Loading (StaticQuery)")})},b=function(e){i.a.useContext;var t=i.a.useContext(p);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},412:function(e,t,n){var a;e.exports=(a=n(427))&&a.default||a},417:function(e,t,n){"use strict";var a=n(32),r=(n(1),n(410)),i=function(e){return e&&!!e.text&&!!e.url};t.a=function(e){var t=e.links,n=void 0===t?[]:t;if(1===(n=function(e){return e.filter(i)}(n)).length){var o=n[0];return Object(a.a)(r.a,{text:o.text,url:o.url})}return n.length>1?Object(a.a)("ul",{style:{margin:0,padding:0,listStyle:"none"}},n.map(function(e,t){return Object(a.a)("li",{key:t,style:{margin:"1rem 0"}},Object(a.a)(r.a,{text:e.text,url:e.url}))})):null}},419:function(e,t,n){"use strict";var a=n(32),r=(n(1),n(436)),i=n.n(r),o=n(405);t.a=function(e){var t=e.title,n=e.description,r=e.meta,c=void 0===r?[]:r,s=e.keywords,l=void 0===s?[]:s;return Object(a.a)(o.NamespacesConsumer,null,function(e,r){var o=r.i18n,s=n||e("common:site.description"),u=o.language;return Object(a.a)(i.a,{htmlAttributes:{lang:u},title:t,titleTemplate:"%s | "+e("common:site.title"),meta:[{name:"description",content:s},{property:"og:title",content:t},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e("common:site.author")},{name:"twitter:title",content:t},{name:"twitter:description",content:s}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(c)})})}},420:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAB2klEQVQoz2P4//8/AxAwmpqZcx0/fd7g4vW7Jheu3TE+f+Wm2ZnzF0UZoEA9c0swEM8wyN/WY1y4vc+wYHufCZDWztnaCxSfqJG1RRmsEGggI5Bibe/qq/jw4cP/V69e/Xn69NmvH9+//X/1+s0muIFp6zJUU9ftMSvYuNahbMsG29LNGxzLt2zQy96wXiV13Wb19HXaMANBFE9Nc++sTSef/t959snfA5ee/zly4/3/m4/eHINayPDv//8cIPvI1x9/trz88HP7uy+/tr/48GM7UAyEd3/89lsX2YW8PROnzzh5693/nWce/dl3/vHvQ9fe/L/77P1xoDwzSN2zt19DX3/8PvPl+++9z99963/x/ls/iH754Xv/qw/fJ91/8RnFy7yTp86YAWT///Xt45+vn979AbF/fP9+Ytu5FywgdU/e/Sp6+Obn+fMPPu8D4oMXgPj03U8Hrz35ehAod/Txu1/6yAbydfdNnAoy5NvXb38+ffwINvDb9x+HYGG46+DR2J0HjqzYe/jEbCCeC8J7gBgoPhcovnDngaNqKAb2TpgMNvDF289/Xr//DDPwML+KNjgM12zamrF645a9G7ftXLd+644N67ZsB+M1m7duWL1p6xagPDhSAETuVsS/070NAAAAAElFTkSuQmCC",aspectRatio:2.8260869565217392,src:"/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/bb341/buttonsMobileFI.png",srcSet:"/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/7c0ed/buttonsMobileFI.png 200w,\n/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/647de/buttonsMobileFI.png 400w,\n/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/bb341/buttonsMobileFI.png 715w",sizes:"(max-width: 715px) 100vw, 715px"}}}}}},421:function(e,t,n){"use strict";var a=n(32),r=n(1),i=n.n(r),o=n(405),c=n(428),s=n(86),l=n.n(s),u=(n(85),n(408)),d=n(809),p=n(608),h=n(801),b=function(e){var t=e.changeLng,n=e.lng,r=e.availableLngs;return Object(a.a)(o.NamespacesConsumer,{ns:["language"]},function(e){return Object(a.a)(d.a.language,{name:e(n+".short"),"aria-label":e("menu.label")},r.map(function(r){return Object(a.a)(p.a.language,{key:r,onSelect:function(){return t(r)},selected:r===n},e(r+".long"))}))})},m=function(e){var t=e.changeLng,n=e.lng,r=e.availableLngs;return Object(a.a)(o.NamespacesConsumer,{ns:["language"]},function(e){return Object(a.a)("ul",{"aria-label":e("menu.label"),style:{margin:"1rem",padding:0,listStyle:"none",display:"flex",alignItems:"center",justifyContent:"center"}},r.map(function(r){return Object(a.a)("li",{key:r},Object(a.a)(h.a.secondaryNoborder,{onClick:function(){return t(r)},disabled:r===n,lang:r,style:{textTransform:"uppercase"}},e(r+".medium")))}))})},g=function(e,t){var n=e.variant;return Object(a.a)(u.Language,null,function(e){return r=Object.assign({},e),!!(i=r.availableLngs)&&i.length>1&&("menu"===n?Object(a.a)(b,l()({},t,e)):"list"===n?Object(a.a)(m,l()({},t,e)):null);var r,i})},f={menu:function(e){return Object(a.a)(g,l()({variant:"menu"},e))},list:function(e){return Object(a.a)(g,l()({variant:"list"},e))}};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var v=i.a.createElement("path",{fill:"#003479",d:"M53 0H2C.9 0 0 .9 0 2v51c0 1.1.9 2 2 2h51c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"}),y=i.a.createElement("g",{fill:"#FFF"},i.a.createElement("path",{d:"M14 20v-5c0-1.1.9-2 2-2h5v7M14 27h7v14c0 .5-.4 1-1 1h-5c-.6 0-1-.5-1-1M28 13h13c.5 0 1 .4 1 1v6H28M41 34H28v-7h14v6c0 .6-.4 1-1 1z"})),j=function(e){return i.a.createElement("svg",O({viewBox:"0 0 55 55",preserveAspectRatio:"xMidYMin meet",width:"1em",height:"1em"},e),v,y)};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var w=i.a.createElement("path",{fill:"#003479",d:"M53 0H2C.9 0 0 .9 0 2v51c0 1.1.9 2 2 2h51c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"}),k=i.a.createElement("g",{fill:"#FFF"},i.a.createElement("path",{d:"M14 20v-5c0-1.1.9-2 2-2h5v7M14 27h7v14c0 .5-.4 1-1 1h-5c-.6 0-1-.5-1-1M28 13h13c.5 0 1 .4 1 1v6H28M41 34H28v-7h14v6c0 .6-.4 1-1 1z"})),S=i.a.createElement("g",{fill:"#003479"},i.a.createElement("path",{d:"M85.1 42.3c-3.2 0-6-.8-8.1-1.9l.6-4c2 1.3 4.7 2.5 7.6 2.5 3 0 5.2-1.6 5.2-4.4 0-2.6-1.2-3.7-5.5-5.7-5.5-2.5-7.5-4.3-7.5-8.4 0-4.7 3.6-7.6 8.8-7.6 2.8 0 4.9.7 6.6 1.6l-.6 3.9c-1.6-1.2-3.8-2.1-6.1-2.1-3.3 0-4.8 1.8-4.8 3.9 0 2.2 1.1 3.3 5.5 5.3 5.6 2.6 7.6 4.5 7.6 8.9-.1 4.9-3.9 8-9.3 8zM102 22v13.7c0 2.1.9 3.4 3.1 3.4 2 0 4-1.3 5.8-3.2V22h3.7v20h-3l-.5-2.9c-1.9 1.8-4.3 3.3-7.1 3.3-3.8 0-5.8-2.3-5.8-5.9V22h3.8zM127.7 42.4c-5.3 0-9.2-3.8-9.2-10.4 0-6.6 3.9-10.5 9.2-10.5 5.4 0 9.3 3.9 9.3 10.5.1 6.6-3.9 10.4-9.3 10.4zm0-17.7c-3.6 0-5.4 3.2-5.4 7.4 0 4.1 1.9 7.3 5.4 7.3 3.7 0 5.5-3.1 5.5-7.3.1-4.2-1.9-7.4-5.5-7.4zM165.7 42V28.3c0-2.1-.8-3.4-2.9-3.4-2 0-3.9 1.3-5.7 3.2V42h-3.7V28.3c0-2.1-.8-3.4-2.9-3.4-2 0-3.9 1.3-5.7 3.2V42H141V22h3l.5 2.9c1.9-1.7 4.2-3.3 7-3.3 2.9 0 4.5 1.3 5.3 3.3 1.8-1.7 4.2-3.3 7.1-3.3 3.8 0 5.7 2.3 5.7 5.9V42h-3.9zM176.5 17.7c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4zM174.6 42V22h3.7v20h-3.7zM200 16.3c-1.7 0-2.8.7-2.8 2.6V22h4l.5 3.2h-4.5V42h-3.7V25.1h-3V22h3v-3.5c0-4 2.6-5.5 6.2-5.5.6 0 1.1 0 1.6.1l.5 3.4c-.3-.1-1.1-.2-1.8-.2zM206.8 17.7c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4zM204.9 42V22h3.7v20h-3.7zM185.6 42c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4z"})),A=function(e){return i.a.createElement("svg",x({viewBox:"0 0 220 55",preserveAspectRatio:"xMidYMin meet",width:"1em",height:"1em"},e),w,k,S)},C=n(20),N=n.n(C),B=n(485),L=n(61),z=n(409),P=function(e){function t(){return e.apply(this,arguments)||this}return N()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,n=e.children;return Object(a.a)(u.Link,{to:t,css:Object(L.a)([{display:"flex",alignItems:"center",justifyContent:"space-between",height:"3.2rem",paddingLeft:"1rem",paddingRight:"1rem",borderBottom:"1px solid "+c.a.colors.depthSecondary,color:c.a.colors.highlightBase,textDecoration:"none",whiteSpace:"nowrap","&:hover":{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase}},"&:focus { "+c.a.outlines.basic+" }"]),getProps:function(e){var n=e.isCurrent,a=e.isPartiallyCurrent;return Object(z.b)(t)||!a||n?n?{style:{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase,fontWeight:600}}:void 0:{style:{fontWeight:600}}}},n)},t}(r.Component),D=function(e){function t(t){var n;return(n=e.call(this,t)||this).isOpen=function(){return n.state.isOpen},n.toggleOpen=function(){n.setState(function(e){return{isOpen:!e.isOpen}})},n.state={isOpen:!1},n}return N()(t,e),t.prototype.render=function(){var e=this,t=this.props.mainNavData;return Object(a.a)(o.NamespacesConsumer,null,function(n){return Object(a.a)("div",{style:{position:"relative"}},Object(a.a)(h.a,{"aria-label":n("common:open.navigation.main"),"aria-expanded":e.isOpen(),"aria-haspopup":!0,style:{background:"none",padding:0,border:0,width:"40px",height:"40px",minWidth:"40px",minHeight:"40px",fontSize:"24px"},onClick:e.toggleOpen},e.isOpen()?Object(a.a)(B.a,{icon:"close",color:c.a.colors.depthDark27}):Object(a.a)(B.a,{icon:"menu",color:c.a.colors.depthDark27})),e.isOpen()&&Object(a.a)("div",{style:{position:"absolute",top:"50px",right:0,zIndex:c.a.zindexes.focus+1,width:"20rem",background:c.a.colors.whiteBase,border:"1px solid "+c.a.colors.depthLight13,boxShadow:c.a.shadows.menuShadow}},Object(a.a)("nav",{"aria-label":n("common:navigation.main")},Object(a.a)("ul",{style:{margin:0,padding:0,listStyle:"none"}},t.items.map(function(e){return Object(a.a)("li",{key:e.to},Object(a.a)(P,{to:e.to},e.label))}))),Object(a.a)(f.list,null)))})},t}(r.Component),T=n(407),M=function(e){return{items:[{to:"/",label:e("home:title")},{to:"/styles/",label:e("styles:title")},{to:"/components/",label:e("components:title")},{to:"/info/",label:e("info:title")}]}},E=n(410),I=function(){return Object(a.a)(o.NamespacesConsumer,null,function(e){return Object(a.a)("header",{style:{padding:"1rem",borderTop:"4px solid "+c.a.colors.brandBase,boxSizing:"border-box",background:c.a.colors.whiteBase,borderBottom:"1px solid "+c.a.colors.depthLight13,display:"flex",justifyContent:"center",lineHeight:"40px"}},Object(a.a)("div",{style:{width:"100%",maxWidth:1140,display:"flex",alignItems:"center",justifyContent:"space-between"}},Object(a.a)(E.a,{icon:Object(a.a)(i.a.Fragment,null,Object(a.a)(T.a,null,Object(a.a)(A,{style:{width:"128px",height:"32px"}})),Object(a.a)(T.c,null,Object(a.a)(j,{style:{width:"32px",height:"32px"}}))),title:e("common:to.homepage"),url:"/"}),Object(a.a)("div",{style:{flex:1,position:"relative",marginLeft:".5rem"}},Object(a.a)("div",{style:{fontSize:"28px",fontWeight:600,color:c.a.colors.brandBase}},e("common:header.title")),Object(a.a)("div",{style:{position:"absolute",top:"-.2rem",left:"9.6rem",whiteSpace:"nowrap",lineHeight:"16px",fontSize:"16px",fontWeight:600,textTransform:"uppercase",color:c.a.colors.highlightBase}},e("common:header.stamp"))),Object(a.a)(T.a,null,Object(a.a)(f.menu,null)),Object(a.a)(T.c,null,Object(a.a)(D,{mainNavData:M(e)}))))})},F=function(e){var t=e.to,n=e.children;return Object(a.a)(u.Link,{to:t,css:Object(L.a)([{padding:".5rem",lineHeight:"2.8rem",whiteSpace:"nowrap",color:c.a.colors.blackBase,textDecoration:"none","&:hover":{borderBottom:"4px solid "+c.a.colors.highlightBase}},"&:focus { "+c.a.outlines.basic+" }"]),getProps:function(e){var n=e.isCurrent,a=e.isPartiallyCurrent;if(n||!Object(z.b)(t)&&a)return{style:{borderBottom:"4px solid "+c.a.colors.highlightBase}}}},n)},W=function(e){var t=e.mainNavData;return Object(a.a)(o.NamespacesConsumer,null,function(e){return Object(a.a)("nav",{"aria-label":e("common:navigation.main"),style:{padding:0,boxSizing:"border-box",background:""+c.a.colors.whiteBase,borderBottom:"1px solid "+c.a.colors.depthLight13,display:"flex",justifyContent:"center"}},Object(a.a)("ul",{style:{margin:0,padding:0,width:"100%",maxWidth:1140,display:"flex",alignItems:"center",flexWrap:"wrap",listStyle:"none"}},t.items.map(function(e){return Object(a.a)("li",{key:e.to,style:{margin:"0 1.2rem"}},Object(a.a)(F,{to:e.to},e.label))})))})},H=function(e){var t=e.to,n=e.children;return Object(a.a)("a",{href:t,css:Object(L.a)([{position:"absolute",zIndex:c.a.zindexes.focus+1,left:"-100rem",margin:"1rem",padding:".5rem",background:c.a.colors.highlightLight53,border:"1px solid "+c.a.colors.depthLight13,color:c.a.colors.blackBase,textDecoration:"none"},"&:focus { "+c.a.outlines.basic+" }",{"&:focus":{position:"absolute",left:"auto"}}])},n)},V=n(47),R=(n(173),n(174),n(177),n(119),n(176),n(120),n(808)),q=n(411),X=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).toggleOpen=function(e){e.preventDefault();var n=t.props,a=n.to;(0,n.handleToggle)(a)},t}return N()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,n=e.showAsTo,r=e.isPartialMatch,i=e.children,o=e.hasChildren,s=e.isOpen,l=e.level;return Object(a.a)(u.Link,{to:t,css:Object(L.a)([{display:"flex",alignItems:"center",justifyContent:"space-between",height:"3.2rem",paddingLeft:l+".2rem",paddingRight:".5rem",borderBottom:"1px solid "+c.a.colors.depthSecondary,color:c.a.colors.highlightBase,textDecoration:"none",textTransform:1===l?"uppercase":"none","&:hover":{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase}},"&:focus { "+c.a.outlines.basic+" }"]),getProps:function(e){var a=e.isCurrent,i=e.isPartiallyCurrent,o=n?r(n):i;return Object(z.b)(t)||!o||a?a?{style:{background:c.a.colors.depthSecondary,color:c.a.colors.brandBase,fontWeight:600}}:void 0:{style:{fontWeight:600}}}},i,o&&Object(a.a)(h.a,{"aria-expanded":s(t),style:{float:"right",background:"none",padding:0,border:0,width:"40px",height:"40px",minWidth:"40px",minHeight:"40px",fontSize:"16px",transform:s(t)?"rotate(.5turn)":"none"},onClick:this.toggleOpen},Object(a.a)(B.a,{icon:"chevronDown",color:c.a.colors.depthDark27})))},t}(r.Component),G=function(e){function t(t){var n;return(n=e.call(this,t)||this).SIDENAVSTATE_KEY="sideNavState",n.getSessionState=function(){return JSON.parse(sessionStorage.getItem(n.SIDENAVSTATE_KEY))||{}},n.setSessionState=function(e){try{sessionStorage.setItem(n.SIDENAVSTATE_KEY,JSON.stringify(e))}catch(t){}},n.componentDidMount=function(){var e=n.getSessionState(),t=n.getCurrentPath(),a=n.getPathTree(t).map(function(e){var t;return(t={})[e]=!0,t}).reduce(function(e,t){return Object.assign({},e,t)},{});e.isOpen=Object.assign({},e.isOpen,a),n.setState(function(){return n.setSessionState(e),e})},n.getPathTree=function(e,t){if(void 0===t&&(t=[]),e){var a="/"+e.split("/").join("/");a+=a.endsWith("/")?"":"/",t.push(a);var r=e.split("/").slice(0,-1).join("/");n.getPathTree(r,t)}return t},n.getCurrentPath=function(){var e=n.props.location.pathname.match(RegExp(Object(q.withPrefix)("/../(.*)")));return e&&e[1]},n.isPartiallyCurrent=function(e){var t=n.getCurrentPath();return e&&t&&t.startsWith(e.substr(1))},n.isCurrent=function(e){var t=n.getCurrentPath();return e&&t&&t===e.substr(1)},n.isNavOpen=function(){return n.state.isNavOpen},n.toggleNavOpen=function(){n.setState(function(e){return n.setSessionState(Object.assign({},e,{isNavOpen:!e.isNavOpen})),{isNavOpen:!e.isNavOpen}})},n.isOpen=function(e){return n.state.isOpen[e]},n.toggleOpen=function(e){n.setState(function(t){return t.isOpen[e]=!t.isOpen[e],n.setSessionState(t),{isOpen:t.isOpen}})},n.hasChildren=function(e){return!!e.children&&e.children.length>0},n.Title=function(){var e=n.props.sideNavData;return Object(a.a)("div",{style:{padding:".5rem",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid "+c.a.colors.depthSecondary,textShadow:"none"}},Object(a.a)("div",{style:{display:"flex",alignItems:"center"}},Object(a.a)("div",{style:{fontSize:"40px"}},e.icon),Object(a.a)(R.a.bold,{style:{marginLeft:".5rem"}},e.title)),Object(a.a)(T.c,null,Object(a.a)("div",{style:{float:"right",background:"none",marginRight:".8rem",padding:0,border:0,width:"16px",height:"16px",fontSize:"16px",transform:n.isNavOpen()?"rotate(.5turn)":"none"}},Object(a.a)(B.a,{icon:"chevronDown",color:c.a.colors.depthDark27}))))},n.renderNavItems=function(e,t){return Object(a.a)("ul",{style:{margin:0,padding:0,width:"100%",listStyle:"none"}},e.map(function(e){return Object(a.a)("li",{key:e.to,css:Object(L.a)({position:"relative","&::after":{content:'""',position:"absolute",top:"-1px",left:0,bottom:0,borderLeft:1===t&&(e.showAsTo?n.isCurrent(e.to)||n.isPartiallyCurrent(e.showAsTo):n.isPartiallyCurrent(e.to))?"4px solid "+c.a.colors.brandBase:0}})},Object(a.a)(X,{to:e.to,showAsTo:e.showAsTo,isPartialMatch:n.isPartiallyCurrent,hasChildren:n.hasChildren(e),isOpen:n.isOpen,handleToggle:n.toggleOpen,level:t},e.label),n.hasChildren(e)&&!!n.state.isOpen[e.to]&&n.renderNavItems(e.children,t+1))}))},n.state={isNavOpen:!1,isOpen:{}},n}return N()(t,e),t.prototype.render=function(){var e=this.props.sideNavData;return Object(a.a)("nav",{"aria-label":e.title,style:{margin:0,padding:0,boxSizing:"border-box",background:""+c.a.colors.whiteBase}},Object(a.a)(T.a,null,Object(a.a)(this.Title,null),this.renderNavItems(e.items,1)),Object(a.a)(T.c,null,Object(a.a)(h.a,{"aria-expanded":this.isNavOpen(),onClick:this.toggleNavOpen,fullWidth:!0,style:{background:"none",padding:0,border:0}},Object(a.a)(this.Title,null)),this.isNavOpen()&&this.renderNavItems(e.items,1)))},t}(r.Component),Y=function(e){var t=e.sideNavData,n=e.style;return t?Object(a.a)(V.Location,null,function(e){var r=e.location;return Object(a.a)("div",{id:"sidenav",style:n},Object(a.a)(G,{location:r,sideNavData:t}))}):null},Q=function(e){var t=e.hasFrame,n=void 0===t||t,r=e.children,i=e.style;return Object(a.a)("main",{id:"main",style:Object.assign({margin:n?"2rem 1rem":0},i)},r)},_=function(e){var t=e.sideNavData,n=e.hasFrame,r=void 0===n||n,i=e.children;return Object(a.a)("div",{style:{background:c.a.colors.depthLight30,paddingTop:r?"1rem":0,paddingBottom:"3rem"}},Object(a.a)(T.a,null,Object(a.a)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"nowrap"}},Object(a.a)("div",{style:{margin:r?"1rem 2rem 0 2rem":0,width:"100%",maxWidth:r?1140:"initial",display:"flex",flexWrap:"nowrap",background:r?c.a.colors.whiteBase:"none",border:r?"1px solid "+c.a.colors.depthLight13:0}},Object(a.a)(Y,{sideNavData:t,style:{width:"22rem",marginRight:"1rem"}}),Object(a.a)(Q,{hasFrame:r,style:{flex:1}},i)))),Object(a.a)(T.d,null,Object(a.a)(Y,{sideNavData:t,style:{margin:"0 2rem",border:"1px solid "+c.a.colors.depthLight13}}),Object(a.a)("div",{style:{margin:r?"1rem 2rem 0 2rem":0,background:r?c.a.colors.whiteBase:"none",border:r?"1px solid "+c.a.colors.depthLight13:0}},Object(a.a)(Q,{hasFrame:r},i))),Object(a.a)(T.b,null,Object(a.a)(Y,{sideNavData:t,style:{margin:"0 1rem",border:"1px solid "+c.a.colors.depthLight13}}),Object(a.a)("div",{style:{margin:r?"1rem 0 0 0":0,background:r?c.a.colors.whiteBase:"none",border:r?"1px solid "+c.a.colors.depthLight13:0}},Object(a.a)(Q,{hasFrame:r},i))))},J=n(406);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var K=i.a.createElement("defs",null),Z=i.a.createElement("path",{className:"slack_svg__cls-1",d:"M19.78 1.13a4.58 4.58 0 0 0-4.57 4.59 4.58 4.58 0 0 0 4.57 4.59h4.58V5.72a4.59 4.59 0 0 0-4.57-4.59m0 12.23H7.58A4.59 4.59 0 0 0 3 18a4.59 4.59 0 0 0 4.58 4.59h12.2A4.59 4.59 0 0 0 24.36 18a4.59 4.59 0 0 0-4.58-4.59M48.78 18a4.59 4.59 0 0 0-4.58-4.59A4.59 4.59 0 0 0 39.62 18v4.59h4.58A4.59 4.59 0 0 0 48.78 18m-12.21 0V5.72A4.59 4.59 0 0 0 32 1.13a4.59 4.59 0 0 0-4.58 4.59V18A4.59 4.59 0 0 0 32 22.54 4.59 4.59 0 0 0 36.57 18M32 47a4.59 4.59 0 0 0 4.58-4.59A4.58 4.58 0 0 0 32 37.83h-4.59v4.58A4.59 4.59 0 0 0 32 47m0-12.23h12.2a4.59 4.59 0 0 0 4.58-4.59 4.58 4.58 0 0 0-4.58-4.58H32a4.58 4.58 0 0 0-4.58 4.58A4.59 4.59 0 0 0 32 34.77M3 30.18a4.59 4.59 0 0 0 4.58 4.59 4.59 4.59 0 0 0 4.58-4.59V25.6H7.58A4.58 4.58 0 0 0 3 30.18m12.21 0v12.23A4.57 4.57 0 0 0 19.78 47a4.59 4.59 0 0 0 4.58-4.59V30.18a4.57 4.57 0 0 0-4.57-4.58 4.56 4.56 0 0 0-4.57 4.58"}),$=function(e){return i.a.createElement("svg",U({id:"slack_svg__Layer_1","data-name":"Layer 1",viewBox:"0 0 50 50",width:"1em",height:"1em"},e),K,Z)};function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var te=i.a.createElement("path",{d:"M24.61 0a24.62 24.62 0 0 0-7.78 48c1.23.23 1.68-.53 1.68-1.18v-4.19c-6.85 1.49-8.29-3.3-8.29-3.3-1.15-2.87-2.8-3.63-2.8-3.63-2.2-1.52.2-1.52.2-1.52a5.19 5.19 0 0 1 3.8 2.56c2.2 3.76 5.76 2.67 7.17 2a5.27 5.27 0 0 1 1.56-3.29c-5.47-.62-11.21-2.73-11.21-12.16a9.54 9.54 0 0 1 2.48-6.57 8.85 8.85 0 0 1 .26-6.54s2.07-.66 6.77 2.52a23.31 23.31 0 0 1 12.33 0c4.7-3.18 6.76-2.52 6.76-2.52a8.79 8.79 0 0 1 .24 6.51 9.49 9.49 0 0 1 2.53 6.61c0 9.45-5.75 11.54-11.23 12.14A5.9 5.9 0 0 1 30.75 40v6.76c0 .65.44 1.42 1.69 1.18a24.62 24.62 0 0 0-7.8-48z"}),ne=function(e){return i.a.createElement("svg",ee({"data-name":"Layer 1",viewBox:"0 0 49.23 48.01",width:"1em",height:"1em"},e),te)},ae=function(e){var t=e.header,n=e.title,r=e.description,i=e.links,o=e.background,s=void 0===o?c.a.colors.whiteBase:o,l=e.textColor,u=void 0===l?"blackBase":l,d=e.linkColor,p=e.textDecoration,h=e.center,b=void 0!==h&&h,m=e.wrapAll,g=void 0!==m&&m;return Object(a.a)("div",{style:{margin:0,padding:"1rem",background:s,display:"flex",justifyContent:"center"}},Object(a.a)("div",{style:{width:"100%",maxWidth:1140,display:g?"initial":"flex",flexWrap:"wrap",justifyContent:b?"center":"space-between"}},t&&Object(a.a)("div",{style:{flex:"100%",marginTop:"1rem"}},t),Object(a.a)("div",{style:{flex:"40%",textAlign:b?"center":"initial"}},Object(a.a)("p",{style:{margin:"1rem 0"}},Object(a.a)(J.b.bold,{color:u,style:{textAlign:"inherit"}},n)),Object(a.a)("p",{style:{margin:"1rem 0"}},Object(a.a)(J.b,{color:u},r))),Object(a.a)("div",{style:{margin:"1rem 0",marginLeft:g?0:"3rem",flex:"50%",textAlign:b?"center":"initial"}},Object(a.a)("ul",{style:{margin:0,padding:0,width:"100%",listStyle:"none",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:g?b?"center":"initial":"flex-end"}},i&&i.map(function(e,t){return e&&!!e.text&&!!e.url&&Object(a.a)("li",{key:t,style:{display:"inline-flex",justifyContent:g?b?"center":"initial":"flex-end",flex:g?"100%":"unset",margin:g?".5rem 0":"0 1.5rem 1rem 1.5rem"}},Object(a.a)(E.a,{icon:e.icon,text:e.text,url:e.url,style:{"&:link,:visited,:focus,:hover,:active":{fontSize:"16px",color:c.a.colors[d],textDecoration:p}}}))})))))},re=function(e){var t=e.center,n=void 0!==t&&t,r=e.wrapAll,s=void 0!==r&&r;return Object(a.a)(o.NamespacesConsumer,null,function(e){return Object(a.a)(i.a.Fragment,null,Object(a.a)(ae,{header:Object(a.a)(E.a,{icon:Object(a.a)(A,{style:{width:"128px",height:"32px"}}),title:e("common:to.homepage"),url:"/"}),description:e("common:footer.description"),links:e("common:footer.links"),wrapAll:s}),Object(a.a)(ae,{title:e("common:footer.social.title"),description:e("common:footer.social.description"),links:[{icon:Object(a.a)($,{style:{fill:c.a.colors.whiteBase,fontSize:"25px"}}),text:e("common:slack.link.text"),url:e("common:slack.link.url")},{icon:Object(a.a)(ne,{style:{fill:c.a.colors.whiteBase,fontSize:"25px"}}),text:e("common:github.link.text"),url:e("common:github.link.url")}],background:c.a.colors.brandBase,textColor:"whiteBase",linkColor:"whiteBase",textDecoration:"underline",center:n,wrapAll:s}))})},ie=function(){return Object(a.a)("footer",{id:"footer"},Object(a.a)(T.a,null,Object(a.a)(re,null)),Object(a.a)(T.d,null,Object(a.a)(re,null)),Object(a.a)(T.b,null,Object(a.a)(re,{center:!0,wrapAll:!0})))},oe=(n(445),n(446),function(e){var t=e.hasSideNav;return Object(a.a)(o.NamespacesConsumer,null,function(e){return Object(a.a)(i.a.Fragment,null,Object(a.a)(H,{to:"#main"},e("common:to.main.content")),t&&Object(a.a)(H,{to:"#sidenav"},e("common:to.sidenav")))})});t.a=function(e){var t=e.sideNavData,n=e.hasFrame,r=void 0===n||n,i=e.children;return Object(a.a)(o.NamespacesConsumer,null,function(e){return Object(a.a)("div",{style:{fontFamily:c.a.typography.fontFamily+", sans-serif",fontSize:c.a.typography.fontSize.body,lineHeight:"1.5em",color:c.a.colors.blackBase}},Object(a.a)(oe,{hasSideNav:!!t}),Object(a.a)(I,null),Object(a.a)(T.a,null,Object(a.a)(W,{mainNavData:M(e)})),Object(a.a)(_,{sideNavData:t,hasFrame:r},i),Object(a.a)(ie,null))})}},422:function(e,t,n){"use strict";var a=n(32),r=n(1),i=n(172),o=n.n(i),c=n(20),s=n.n(c),l=n(86),u=n.n(l),d=n(420),p=n(411),h=n(430),b=n.n(h),m=function(e){return Object(a.a)(p.StaticQuery,{query:"3539101165",render:function(t){return Object(a.a)(b.a,u()({fluid:t.image.childImageSharp.fluid},e))},data:d})},g=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).images={ButtonsMobileFI:m},t}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.imgKey,n=o()(e,["imgKey"]),r=this.images[t];return Object(a.a)(r,n)},t}(r.Component),f=n(406),O=n(417),v=function(e){return e&&!!e.text},y=function(e){var t=e.items,n=void 0===t?[]:t;return(n=function(e){return e.filter(v)}(n)).length>0?Object(a.a)("ul",null,n.map(function(e,t){return Object(a.a)("li",{key:t},Object(a.a)(f.b,null,e.text))})):null};t.a=function(e){var t=e.mainTitle,n=e.title,r=e.paragraphs,i=e.links;return Object(a.a)("section",null,!!t&&Object(a.a)(f.a.h2,null,t),!!n&&Object(a.a)(f.a.h3,null,n),r.map(function(e,t){return Object(a.a)("div",{key:t},!!e["image.key"]&&Object(a.a)("div",{"aria-hidden":!0},Object(a.a)(g,{imgKey:e["image.key"],alt:e["image.alt"]})),!!e.text&&Object(a.a)("p",null,Object(a.a)(f.b,null,e.text)),Object(a.a)("div",{style:{margin:"1rem 0"}},Object(a.a)(y,{items:e.listItems})))}),Object(a.a)("div",{style:{margin:"1rem 0 2rem"}},Object(a.a)(O.a,{links:i})))}},427:function(e,t,n){"use strict";n.r(t);n(85);var a=n(1),r=n.n(a),i=n(14),o=n.n(i),c=n(121),s=n(12),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},432:function(e,t,n){"use strict";n(85);var a=n(32),r=(n(1),n(428)),i=function(e){var t=e.style,n=e.children;return Object(a.a)("div",{style:Object.assign({display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",padding:".8rem",margin:"1.5rem 0"},t,{background:t&&t.background?t.background:r.a.colors.depthLight30})},n)};i.displayName="div",t.a=i},433:function(e,t,n){"use strict";var a=n(32),r=n(1),i=n.n(r),o=n(405),c=n(428),s=n(804),l=(n(85),n(451)),u=n.n(l),d=n(805),p=function(e){var t=e.style,n=e.children;return Object(a.a)(d.a,{language:"jsx",customStyle:Object.assign({margin:0,padding:0,background:"none",fontSize:"1rem",whiteSpace:"pre-wrap",overflow:"hidden"},t),codeTagProps:{style:{}}},n)},h=function(e){var t=e.javascript,n=e.style,r=e.filterProps,i=e.children;return Object(a.a)("div",{style:Object.assign({padding:"1rem"},n)},!!t&&Object(a.a)(p,{style:{marginBottom:i?"1rem":0}},t),!!i&&Object(a.a)(p,null,u()(i,{filterProps:r||["id","style","aria-label"],showFunctions:!0,functionValue:function(){return"..."}})))},b=n(406);t.a=function(e){var t=e.mainTitle,n=e.title,r=e.description,l=e.exampleFirst,u=e.noCode,d=e.codeString,p=e.showOnlyCodeString,m=e.filterProps,g=e.children;return Object(a.a)(o.NamespacesConsumer,null,function(e){return Object(a.a)("div",{style:{marginBottom:"2rem",borderBottom:"1px solid "+c.a.colors.depthLight13}},Object(a.a)("div",{style:{margin:"1.5rem 0"}},!!t&&Object(a.a)(b.a.h2,null,t),!!n&&Object(a.a)(b.a.h3,null,n)),!!l&&Object(a.a)("div",null,g),Object(a.a)("div",null,Object(a.a)(b.b,null,r)),!l&&Object(a.a)("div",null,g),!u&&Object(a.a)("div",{style:{padding:"1.5rem 0 2rem 0"}},Object(a.a)(s.a.expansion,{title:e("common:react"),titleProps:{style:{textAlign:"left",textTransform:"uppercase"}},noPadding:!0},d&&Object(a.a)(h,{javascript:d}),!p&&function e(t){return i.a.Children.map(t,function(t){return!t.type||"div"!==t.type&&"div"!==t.type.displayName?t:e(t.props.children)})}(g).map(function(e,t){return Object(a.a)(h,{key:t,filterProps:m,style:{paddingTop:0!==t||d?0:"1rem"}},e)}))))})}},440:function(e,t){},441:function(e,t){},442:function(e,t){},443:function(e,t){},454:function(e,t,n){"use strict";var a=n(32),r=(n(1),n(428)),i=n(406);t.a=function(e){var t=e.title,n=e.items;return Object(a.a)("section",{style:{background:r.a.colors.highlightLight50,margin:"2rem 0",padding:"20px",border:"1px solid "+r.a.colors.depthLight13}},Object(a.a)(i.a.h3,{as:"h2"},t),Object(a.a)("ul",{style:{margin:0,padding:"0 0 0 2rem"}},n.map(function(e,t){return!!e&&Object(a.a)("li",{key:t,style:{marginTop:"1rem"}},Object(a.a)(i.b,null,e))})))}},484:function(e,t,n){"use strict";var a=n(32),r=(n(1),n(485));t.a=function(e){return{title:e("styles:title"),icon:Object(a.a)(r.a,{icon:"staticIllustrationWand"}),items:[{to:"/styles/",showAsTo:"/styles/info/",label:e("styles:info.title")},{to:"/styles/colors/",label:e("colors:title")}]}}}}]);
//# sourceMappingURL=component---src-pages-styles-colors-tsx-667181f0200c266654fa.js.map