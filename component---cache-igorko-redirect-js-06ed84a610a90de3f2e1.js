(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,n,t){var a=t(161).Redirect;e.exports=a},145:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return h}),t.d(n,"StaticQueryContext",function(){return p}),t.d(n,"StaticQuery",function(){return f});var a=t(0),r=t.n(a),i=t(4),u=t.n(i),o=t(144),c=t.n(o);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return o.withPrefix}),t.d(n,"navigate",function(){return o.navigate}),t.d(n,"push",function(){return o.push}),t.d(n,"replace",function(){return o.replace}),t.d(n,"navigateTo",function(){return o.navigateTo});var s=t(146),d=t.n(s);t.d(n,"PageRenderer",function(){return d.a});var l=t(32);t.d(n,"parsePath",function(){return l.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},146:function(e,n,t){var a;e.exports=(a=t(147))&&a.default||a},147:function(e,n,t){"use strict";t.r(n);t(33);var a=t(0),r=t.n(a),i=t(4),u=t.n(i),o=t(53),c=t(2),s=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(o.a,Object.assign({location:n,pageResources:t},t.json))};s.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},n.default=s}}]);
//# sourceMappingURL=component---cache-igorko-redirect-js-06ed84a610a90de3f2e1.js.map