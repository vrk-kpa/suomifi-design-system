(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});var a=n(0),r=n.n(a),i=n(155),o=n(165),u=n(148),c=n(152);t.default=Object(o.withI18next)()(function(){return r.a.createElement(i.a,null,function(e){return r.a.createElement(u.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,e("foo")),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.Link,{to:"/"},"Go back to the homepage"))})});var l="2889416066"},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(144),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(146),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},147:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(53),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},148:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(155),c=n(149),l=n.n(c),s=(n(162),n(151),function(e){var t=e.children;return r.a.createElement(u.a,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{siteTitle:e("site.title")}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,r.a.createElement("footer",null,"© ",(new Date).getFullYear())))})});s.propTypes={children:o.a.node.isRequired},t.a=Object(u.b)()(s)},149:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(145),i=a(n(0)),o=function(e){var t=e.siteTitle;return i.default.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.default.createElement("h1",{style:{margin:0}},i.default.createElement(r.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.defaultProps={siteTitle:""},t.default=o},151:function(e,t,n){},152:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(156),l=n.n(c),s=n(145);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,u=e.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:u},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=d;var m="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Suomi.fi Design System",description:"Suomi.fi Design System",author:"Suomi.fi"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-899a6d43cc0b7700ad52.js.map