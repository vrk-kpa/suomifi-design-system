(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{392:function(e,t,n){var a=n(486).Redirect;e.exports=a},424:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return y}),n.d(t,"StaticQueryContext",function(){return l}),n.d(t,"StaticQuery",function(){return p}),n.d(t,"useStaticQuery",function(){return h});var a=n(32),r=n(1),i=n.n(r),u=n(14),o=n.n(u),s=n(85),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withAssetPrefix",function(){return s.withAssetPrefix}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"parsePath",function(){return s.parsePath}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var d=n(425),f=n.n(d);n.d(t,"PageRenderer",function(){return f.a});var l=i.a.createContext({}),p=function(e){return Object(a.a)(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.a)("div",null,"Loading (StaticQuery)")})},h=function(e){i.a.useContext;var t=i.a.useContext(l);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},425:function(e,t,n){var a;e.exports=(a=n(435))&&a.default||a},435:function(e,t,n){"use strict";n.r(t);n(84);var a=n(1),r=n.n(a),i=n(14),u=n.n(i),o=n(121),s=n(10),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---cache-wapps-redirect-js-591d3f098a0e28255f1e.js.map