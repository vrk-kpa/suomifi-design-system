(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});var r=n(0),a=n.n(r),i=n(147),u=n(148),o=n(156),l=n(160);t.default=Object(u.withI18next)()(function(){return a.a.createElement(i.NamespacesConsumer,{ns:["404"]},function(e){return a.a.createElement(o.a,null,a.a.createElement(l.a,{title:e("title")}),a.a.createElement("h1",null,e("intro")),a.a.createElement(u.Link,{to:"/"},e("common:back.to.frontpage")))})});var c="2520468691"},146:function(e,t,n){var r;e.exports=(r=n(149))&&r.default||r},149:function(e,t,n){"use strict";n.r(t);n(32);var r=n(0),a=n.n(r),i=n(4),u=n.n(i),o=n(53),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(4),u=n.n(i),o=n(145),l=n.n(o);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var c=n(146),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=a.a.createContext({}),m=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},156:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(4),u=n.n(i),o=n(147),l=n(157),c=n.n(l),s=(n(166),n(159),function(e){var t=e.children;return a.a.createElement(o.I18n,null,function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{siteTitle:e("site:title")}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,a.a.createElement("footer",null,"© ",(new Date).getFullYear())))})});s.propTypes={children:u.a.node.isRequired},t.a=s},157:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(148),i=r(n(0)),u=r(n(158)),o=function(e){var t=e.siteTitle;return i.default.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.default.createElement("h1",{style:{margin:0}},i.default.createElement(a.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))),i.default.createElement("div",{style:{position:"absolute",top:0,right:"1rem"}},i.default.createElement(u.default,null)))};o.defaultProps={siteTitle:""},t.default=o},158:function(e,t,n){"use strict";n(32);var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),i=n(148),u=function(e){var t=e.changeLng,n=e.lng,r=e.availableLngs;return a.default.createElement("ul",{style:{listStyle:"none"}},r.map(function(e){return a.default.createElement("li",{key:e,style:{display:"inline"}},a.default.createElement("button",{style:{background:"rebeccapurple",color:"white",border:0,cursor:"pointer",textDecoration:e===n?"underline":"none"},onClick:function(){return t(e)}},e))}))};t.default=function(e){return a.default.createElement(i.Language,null,function(t){return a.default.createElement(u,Object.assign({},e,t))})}},159:function(e,t,n){},160:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(4),u=n.n(i),o=n(163),l=n.n(o),c=n(147);function s(e){var t=e.description,n=e.meta,r=e.keywords,i=e.title;return a.a.createElement(c.I18n,null,function(e,u){var o=u.i18n,c=t||e("site:description"),s=o.language;return a.a.createElement(l.a,{htmlAttributes:{lang:s},title:i,titleTemplate:"%s | "+e("site:title"),meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e("site:author")},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})})}s.defaultProps={meta:[],keywords:[]},s.propTypes={description:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=s}}]);
//# sourceMappingURL=component---src-pages-404-js-d003c6801145b2d689f7.js.map