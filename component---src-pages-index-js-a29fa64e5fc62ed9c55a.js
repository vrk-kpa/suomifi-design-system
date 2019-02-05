(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});var a=n(8),r=(n(0),n(157)),l=n(159),i=n(180),o=n(188);t.default=Object(l.withI18next)()(function(){return Object(a.a)(r.NamespacesConsumer,{ns:["home"]},function(e){return Object(a.a)(i.default,null,Object(a.a)(o.default,{title:e("title"),keywords:["gatsby","application","react"]}),Object(a.a)("h1",null,e("title")))})});var c="2520468691"},161:function(e,t,n){var a;e.exports=(a=n(172))&&a.default||a},172:function(e,t,n){"use strict";n.r(t);n(57);var a=n(0),r=n.n(a),l=n(4),i=n.n(l),o=n(61),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},175:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(8),r=n(0),l=n.n(r),i=n(4),o=n.n(i),c=n(154),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var d=n(161),s=n.n(d);n.d(t,"PageRenderer",function(){return s.a});var f=n(39);n.d(t,"parsePath",function(){return f.a});var p=l.a.createContext({}),m=function(e){return Object(a.a)(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.a)("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},180:function(e,t,n){"use strict";n.r(t);n(57);var a=n(8),r=(n(0),n(4)),l=n.n(r),i=n(157),o=n(195),c=n(181),u=n.n(c),d=n(184),s=n.n(d),f=n(186),p=n.n(f),m=(n(210),n(187),function(e){var t=e.children;return Object(a.a)(i.NamespacesConsumer,null,function(e){return Object(a.a)("div",{style:Object.assign({},o.a.typography,{color:""+o.a.colors.text})},Object(a.a)(u.a,null),Object(a.a)(s.a,null),Object(a.a)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"nowrap"}},Object(a.a)("div",{style:{width:"100%",maxWidth:1140,padding:"0 1rem"}},Object(a.a)(p.a,{title:e("alpharel:title"),description:e("alpharel:description")}),Object(a.a)("main",null,t),Object(a.a)("footer",{style:{marginTop:"1rem"}},"© ",(new Date).getFullYear()))))})});m.propTypes={children:l.a.node.isRequired},t.default=m},181:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(159),l=a(n(0)),i=n(157),o=n(158),c=a(n(182)),u=a(n(183));t.default=function(){return l.default.createElement(i.NamespacesConsumer,null,function(e){return l.default.createElement("header",{style:{padding:"1rem",borderTop:"4px solid "+o.suomifiTheme.colors.brandColor,boxSizing:"border-box",background:o.suomifiTheme.colors.white,borderBottom:"1px solid #C9CDCF",display:"flex",justifyContent:"center",lineHeight:"40px"}},l.default.createElement("div",{style:{width:"100%",maxWidth:1140,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}},l.default.createElement("div",{style:{height:"32px"}},l.default.createElement(r.Link,{to:"/"},l.default.createElement(u.default,null))),l.default.createElement("div",{style:{flex:1,display:"flex",flexWrap:"nowrap",marginLeft:".5rem"}},l.default.createElement("div",{style:{fontSize:"28px",fontWeight:600,color:o.suomifiTheme.colors.brandColor}},e("header:title")),l.default.createElement("div",{style:{whiteSpace:"nowrap",lineHeight:"14px",alignSelf:"start",margin:".5rem",padding:".2rem .5rem",background:o.suomifiTheme.colors.secondaryColor,fontSize:"14px",fontWeight:600,textTransform:"uppercase",color:o.suomifiTheme.colors.invertText}},e("alpharel:title"))),l.default.createElement("div",null,l.default.createElement(c.default,null))))})}},182:function(e,t,n){"use strict";n(57);var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),l=n(159),i=function(e){var t=e.changeLng,n=e.lng,a=e.availableLngs;return r.default.createElement("ul",{style:{margin:0,padding:0,listStyle:"none",whiteSpace:"nowrap"}},a.map(function(e){return r.default.createElement("li",{key:e,style:{display:"inline"}},r.default.createElement("button",{style:{width:"30px",height:"30px",margin:".2rem",padding:".2rem",background:e===n?"#2A6EBB":"white",color:e===n?"white":"#282828",border:"1px solid #C9CDCF",textTransform:"uppercase",cursor:"pointer"},onClick:function(){return t(e)}},e))}))};t.default=function(e){return r.default.createElement(l.Language,null,function(t){return r.default.createElement(i,Object.assign({},e,t))})}},183:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0));t.default=function(){return r.default.createElement("svg",{viewBox:"0 0 220 55",preserveAspectRatio:"xMidYMin meet",id:"beta_suomifi_logo",height:"100%"},r.default.createElement("g",null,r.default.createElement("path",{fill:"#003479",d:"M53,0H2C0.9,0,0,0.9,0,2v51c0,1.1,0.9,2,2,2h51c1.1,0,2-0.9,2-2V2C55,0.9,54.1,0,53,0z"}),r.default.createElement("g",null,r.default.createElement("path",{fill:"#FFFFFF",d:"M14,20v-5c0-1.1,0.9-2,2-2h5v7"}),r.default.createElement("path",{fill:"#FFFFFF",d:"M14,27h7v14c0,0.5-0.4,1-1,1h-5c-0.6,0-1-0.5-1-1"}),r.default.createElement("path",{fill:"#FFFFFF",d:"M28,13h13c0.5,0,1,0.4,1,1v6H28"}),r.default.createElement("path",{fill:"#FFFFFF",d:"M41,34H28v-7h14v6C42,33.6,41.6,34,41,34z"}))),r.default.createElement("g",null,r.default.createElement("path",{fill:"#003479",d:"M85.1,42.3c-3.2,0-6-0.8-8.1-1.9l0.6-4c2,1.3,4.7,2.5,7.6,2.5c3,0,5.2-1.6,5.2-4.4c0-2.6-1.2-3.7-5.5-5.7c-5.5-2.5-7.5-4.3-7.5-8.4c0-4.7,3.6-7.6,8.8-7.6c2.8,0,4.9,0.7,6.6,1.6l-0.6,3.9c-1.6-1.2-3.8-2.1-6.1-2.1c-3.3,0-4.8,1.8-4.8,3.9c0,2.2,1.1,3.3,5.5,5.3c5.6,2.6,7.6,4.5,7.6,8.9C94.3,39.2,90.5,42.3,85.1,42.3z"}),r.default.createElement("path",{fill:"#003479",d:"M102,22v13.7c0,2.1,0.9,3.4,3.1,3.4c2,0,4-1.3,5.8-3.2V22h3.7v20h-3l-0.5-2.9c-1.9,1.8-4.3,3.3-7.1,3.3c-3.8,0-5.8-2.3-5.8-5.9V22H102z"}),r.default.createElement("path",{fill:"#003479",d:"M127.7,42.4c-5.3,0-9.2-3.8-9.2-10.4c0-6.6,3.9-10.5,9.2-10.5c5.4,0,9.3,3.9,9.3,10.5C137.1,38.6,133.1,42.4,127.7,42.4z M127.7,24.7c-3.6,0-5.4,3.2-5.4,7.4c0,4.1,1.9,7.3,5.4,7.3c3.7,0,5.5-3.1,5.5-7.3C133.3,27.9,131.3,24.7,127.7,24.7z"}),r.default.createElement("path",{fill:"#003479",d:"M165.7,42V28.3c0-2.1-0.8-3.4-2.9-3.4c-2,0-3.9,1.3-5.7,3.2V42h-3.7V28.3c0-2.1-0.8-3.4-2.9-3.4c-2,0-3.9,1.3-5.7,3.2V42H141V22h3l0.5,2.9c1.9-1.7,4.2-3.3,7-3.3c2.9,0,4.5,1.3,5.3,3.3c1.8-1.7,4.2-3.3,7.1-3.3c3.8,0,5.7,2.3,5.7,5.9V42H165.7z"}),r.default.createElement("path",{fill:"#003479",d:"M176.5,17.7c-1.3,0-2.4-1.1-2.4-2.4s1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4S177.8,17.7,176.5,17.7z M174.6,42V22h3.7v20H174.6z"}),r.default.createElement("path",{fill:"#003479",d:"M200,16.3c-1.7,0-2.8,0.7-2.8,2.6V22h4l0.5,3.2h-4.5V42h-3.7V25.1h-3V22h3v-3.5c0-4,2.6-5.5,6.2-5.5c0.6,0,1.1,0,1.6,0.1l0.5,3.4C201.5,16.4,200.7,16.3,200,16.3z"}),r.default.createElement("path",{fill:"#003479",d:"M206.8,17.7c-1.3,0-2.4-1.1-2.4-2.4s1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4S208.1,17.7,206.8,17.7z M204.9,42V22h3.7v20H204.9z"}),r.default.createElement("path",{fill:"#003479",d:"M185.6,42c-1.3,0-2.4-1.1-2.4-2.4s1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4S186.9,42,185.6,42z"})))}},184:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),l=n(157),i=n(158),o=a(n(185));t.default=function(){return r.default.createElement(l.NamespacesConsumer,null,function(e){return r.default.createElement("nav",{style:{padding:0,boxSizing:"border-box",background:""+i.suomifiTheme.colors.white,borderBottom:"1px solid #C9CDCF",display:"flex",justifyContent:"center"}},r.default.createElement("ul",{style:{margin:0,padding:0,width:"100%",maxWidth:1140,display:"flex",alignItems:"center",flexWrap:"wrap",listStyle:"none"}},[{to:"/",label:e("home:title")},{to:"/components",label:e("components:title")}].map(function(e){return r.default.createElement("li",{key:e.to,style:{margin:"0 1.2rem"}},r.default.createElement(o.default,{to:e.to},e.label))})))})}},185:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n(8),l=(n(0),n(4)),i=n.n(l),o=n(159),c=n(195),u=function(e){var t=e.to,n=e.children;return Object(r.a)(o.Link,{to:t,css:Object(a.a)({padding:".5rem",lineHeight:"2.8rem",whiteSpace:"nowrap",color:c.a.colors.text,textDecoration:"none","&:hover":{borderBottom:"4px solid "+c.a.colors.secondaryColor}},""),activeStyle:{borderBottom:"4px solid "+c.a.colors.secondaryColor}},n)};u.propTypes={to:i.a.string.isRequired,children:i.a.node.isRequired},t.default=u},186:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0));t.default=function(e){var t=e.title,n=e.description;return r.default.createElement("div",{style:{margin:"2rem 0",padding:"20px",borderTop:"1px solid #EA7125",borderBottom:"1px solid #EA7125"}},r.default.createElement("div",{style:{fontSize:"20px",fontWeight:600}},t),n?r.default.createElement("div",{style:{marginTop:"1rem"}},n):null)}},187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var a=n(8),r=(n(0),n(4)),l=n.n(r),i=n(196),o=n.n(i),c=n(157);function u(e){var t=e.description,n=e.meta,r=e.keywords,l=e.title;return Object(a.a)(c.NamespacesConsumer,null,function(e,i){var c=i.i18n,u=t||e("site:description"),d=c.language;return Object(a.a)(o.a,{htmlAttributes:{lang:d},title:l,titleTemplate:"%s | "+e("site:title"),meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e("site:author")},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})})}u.defaultProps={meta:[],keywords:[]},u.propTypes={description:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.default=u},205:function(e,t){},206:function(e,t){},207:function(e,t){},208:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-a29fa64e5fc62ed9c55a.js.map