(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,n){var r=n(165).Redirect;e.exports=r},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var r=n(0),o=n.n(r),a=n(4),u=n.n(a),i=n(144),l=n.n(i);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var c=n(146),f=n.n(c);n.d(t,"PageRenderer",function(){return f.a});var s=n(32);n.d(t,"parsePath",function(){return s.a});var d=o.a.createContext({}),p=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},146:function(e,t,n){var r;e.exports=(r=n(147))&&r.default||r},147:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),o=n.n(r),a=n(4),u=n.n(a),i=n(53),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,n){"use strict";var r=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nProvider=function(e){var t=e.children,n=(0,a.default)(e,["children"]);return u.default.createElement(i.Provider,{value:(0,o.default)({},n)},t)},t.I18nConsumer=void 0;var o=r(n(168)),a=r(n(163)),u=r(n(0)),i=(r(n(4)),u.default.createContext());var l=i.Consumer;t.I18nConsumer=l},157:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},158:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},159:function(e,t,n){var r=n(170),o=n(51);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},160:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},161:function(e,t,n){var r=n(171);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},163:function(e,t,n){var r=n(164);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},165:function(e,t,n){"use strict";var r=n(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Head",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"I18nProvider",{enumerable:!0,get:function(){return l.I18nProvider}}),Object.defineProperty(t,"I18nConsumer",{enumerable:!0,get:function(){return l.I18nConsumer}});var o=r(n(167)),a=r(n(169)),u=r(n(177)),i=r(n(178)),l=n(154)},166:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}},167:function(e,t,n){"use strict";var r=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(150)),a=r(n(0)),u=(r(n(4)),r(n(156))),i=n(154);function l(e){var t=e.availableLngs,n=e.children,r=e.lng,o=e.originalPath,i=e.siteUrl;e.hreflang;return a.default.createElement(a.default.Fragment,null,a.default.createElement(u.default,null,a.default.createElement("html",{lang:r}),a.default.createElement("link",{rel:"alternate",href:"".concat(i),hreflang:"x-default"}),t.map(function(e){return a.default.createElement("link",{key:e,rel:"alternate",href:"".concat(i).concat(e).concat(o),hreflang:e})}),n))}l.defaultProps={hreflang:!0};t.default=function(e){return a.default.createElement(i.I18nConsumer,null,function(t){return a.default.createElement(l,(0,o.default)({},t,e))})}},168:function(e,t,n){var r=n(52);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}},169:function(e,t,n){"use strict";var r=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(157)),a=r(n(158)),u=r(n(159)),i=r(n(160)),l=r(n(161)),c=r(n(51)),f=r(n(52)),s=n(0),d=n(145),p=n(172),g=n(176),y=function(e){function t(){var e,n;(0,o.default)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return n=(0,u.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(a))),(0,f.default)((0,c.default)((0,c.default)(n)),"perform",function(){var e=n.props.pageContext,t=e.fallbackLng,r=e.availableLngs,o=e.redirectPage,a=window.localStorage.getItem("@igorkoLng")||(0,p.lookup)(r,(0,p.navigatorLanguages)(),t);window.localStorage.setItem("@igorkoLng",a);var u="/".concat(a).concat(o);(0,d.navigate)(u,{replace:!0})}),n}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){(0,g.isBrowser)()||this.perform()}},{key:"render",value:function(){return null}}]),t}(s.PureComponent);t.default=y},170:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},171:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(173);Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return u(r).default}});var o=n(174);Object.defineProperty(t,"lookup",{enumerable:!0,get:function(){return u(o).default}});var a=n(175);function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"navigatorLanguages",{enumerable:!0,get:function(){return u(a).default}})},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;t.default=function(e){if(!e)return null;var t=r.exec(e);if(!t)return null;var n=t[3]?t[3].split("-"):[],o={language:n.length>0?n.shift():null,extlang:n},a=[];if(t[7]){var u=t[7].slice(1).split("-"),i=void 0,l=[];u.forEach(function(e){1===e.length?i?(a.push({singleton:i,extension:l}),i=e,l=[]):i=e:l.push(e)}),a.push({singleton:i,extension:l})}return{langtag:{language:o,script:t[4]||null,region:t[5]||null,variant:t[6]?t[6].slice(1).split("-"):[],extension:a,privateuse:t[8]?t[8].slice(3).split("-"):[]},privateuse:t[9]?t[9].slice(2).split("-"):[],grandfathered:{irregular:t[1]||null,regular:t[2]||null}}}},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e||!t)return n;e=Array.isArray(e)?e:[e],t=Array.isArray(t)?t:[t];for(var o=function(n){if("*"===t[n])return"continue";var r=e.find(function(e){return function(e,t){for(;;){if("*"===t||e===t)return!0;var n=t.lastIndexOf("-");if(-1===n)return!1;n>3&&"-"===t.charAt(n-2)&&(n-=2),t=t.substring(0,n)}}(e.toLowerCase(),t[n].toLowerCase())});return r?{v:r}:void 0},a=0;a<t.length;a++){var u=o(a);switch(u){case"continue":continue;default:if("object"===(void 0===u?"undefined":r(u)))return u.v}}return n}},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0],void 0===("undefined"==typeof navigator?"undefined":r(navigator)))return null;var e=[];return navigator.languages&&(e=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(navigator.languages))),navigator.language&&e.push(navigator.language),navigator.browserLanguage&&e.push(navigator.browserLanguage),navigator.userLanguage&&e.push(navigator.userLanguage),e.length>0?e:null}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowser=function(){return"undefined"==typeof window}},177:function(e,t,n){"use strict";var r=n(166),o=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(150)),u=o(n(157)),i=o(n(158)),l=o(n(159)),c=o(n(160)),f=o(n(161)),s=o(n(51)),d=o(n(52)),p=r(n(0)),g=n(145),y=n(154),v=function(e){function t(){var e,n;(0,u.default)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=(0,l.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(o))),(0,d.default)((0,s.default)((0,s.default)(n)),"handleChangeLng",function(e){var t=n.props.originalPath,r="/".concat(e).concat(t);(0,g.navigate)(r)}),n}return(0,f.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.availableLngs;return(0,e.children)({lng:e.lng,changeLng:this.handleChangeLng,availableLngs:t})}}]),t}(p.Component);t.default=function(e){return p.default.createElement(y.I18nConsumer,null,function(t){return p.default.createElement(v,(0,a.default)({},t,e))})}},178:function(e,t,n){"use strict";var r=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(150)),a=r(n(163)),u=r(n(0)),i=r(n(4)),l=n(145),c=n(154),f=function(e){var t=e.to,n=e.lng,r=e.children,i=(0,a.default)(e,["to","lng","children"]);return u.default.createElement(l.Link,(0,o.default)({to:n?"/".concat(n).concat(t):"".concat(t)},i),r)};f.propTypes={to:i.default.string.isRequired,children:i.default.node.isRequired};t.default=function(e){return u.default.createElement(c.I18nConsumer,null,function(t){var n=t.lng;return u.default.createElement(f,(0,o.default)({lng:n},e))})}}}]);
//# sourceMappingURL=component---cache-igorko-redirect-js-996677e944b5d9bce1ad.js.map