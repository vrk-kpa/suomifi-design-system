(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2964],{85477:function(e,n,t){"use strict";t.d(n,{v2:function(){return ae},j2:function(){return ie},sN:function(){return ce},sd:function(){return le},YI:function(){return fe}});var r=t(67294),o=t(72488),a=t(1251),i=!1,u=0,c=function(){return++u};var l=t(12459);function f(e,n){return(0,r.createContext)(n)}function s(){}function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}var p=["element","index"];function v(e,n){void 0===n&&(n={});return f(0,d({descendants:[],registerDescendant:s,unregisterDescendant:s},n))}function g(e){var n=e.context,t=e.children,o=e.items,a=e.set,i=(0,r.useCallback)((function(e){var n=e.element,t=e.index,r=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,p);n&&a((function(e){var o;if(null!=t)return[].concat(e,[d({},r,{element:n,index:t})]).sort((function(e,n){return e.index-n.index}));if(0===e.length)o=[d({},r,{element:n,index:0})];else if(e.find((function(e){return e.element===n})))o=e;else{var a=e.findIndex((function(e){return!(!e.element||!n)&&Boolean(e.element.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING)})),i=d({},r,{element:n,index:a});o=-1===a?[].concat(e,[i]):[].concat(e.slice(0,a),[i],e.slice(a))}return o.map((function(e,n){return d({},e,{index:n})}))}))}),[]),u=(0,r.useCallback)((function(e){e&&a((function(n){return n.filter((function(n){return e!==n.element}))}))}),[]);return(0,r.createElement)(n.Provider,{value:(0,r.useMemo)((function(){return{descendants:o,registerDescendant:i,unregisterDescendant:u}}),[o,i,u])},t)}function m(e){return"which"in e?3===e.which:"button"in e&&2===e.button}function h(e){var n=(0,r.useRef)(null);return(0,r.useEffect)((function(){n.current=e}),[e]),n.current}var b=t(55152),y=t(85777);function w(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).join("--")}var x=t(61331);function E(e,n){return function(t){if(e&&e(t),!t.defaultPrevented)return n(t)}}function O(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function R(){return R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},R.apply(this,arguments)}var k=["onKeyDown","onMouseDown","id","ref"],D=["index","isLink","onClick","onDragStart","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseUp","onSelect","disabled","onFocus","valueText","ref"],I=["id","onKeyDown","ref"],C=["onBlur","portal","position","ref"],M="CLEAR_SELECTION_INDEX",_="CLICK_MENU_ITEM",N="CLOSE_MENU",L="OPEN_MENU_AT_INDEX",j="OPEN_MENU_CLEARED",S="SEARCH_FOR_ITEM",P="SELECT_ITEM_AT_INDEX",T="SET_BUTTON_ID",A=v(),B=f(0,{}),U={triggerId:null,isExpanded:!1,typeaheadQuery:"",selectionIndex:-1},F=function(e){var n=e.id,t=e.children,o=(0,r.useRef)(null),u=(0,r.useRef)(null),l=(0,r.useRef)(null),f=(0,r.useState)([]),s=f[0],d=f[1],p=function(e){var n=e||(i?c():null),t=(0,r.useState)(n),o=t[0],u=t[1];return(0,a.L)((function(){null===o&&u(c())}),[]),(0,r.useEffect)((function(){!1===i&&(i=!0)}),[]),null!=o?String(o):void 0}(n),v=n||w("menu",p),m=w("menu-button",v),h=(0,r.useReducer)(G,R({},U,{triggerId:m})),b=h[0],x=h[1],E=(0,r.useRef)(!1),O=(0,r.useRef)([]),k=(0,r.useRef)(!1),D=(0,r.useRef)({x:0,y:0}),I={dispatch:x,dropdownId:v,dropdownRef:u,mouseDownStartPosRef:D,popoverRef:l,readyToSelect:k,selectCallbacks:O,state:b,triggerClickedRef:E,triggerRef:o};return(0,r.useEffect)((function(){b.isExpanded?(window.__REACH_DISABLE_TOOLTIPS=!0,window.requestAnimationFrame((function(){z(u.current)}))):window.__REACH_DISABLE_TOOLTIPS=!1}),[b.isExpanded]),(0,r.createElement)(g,{context:A,items:s,set:d},(0,r.createElement)(B.Provider,{value:I},(0,y.mf)(t)?t({isExpanded:b.isExpanded,isOpen:b.isExpanded}):t))};function Z(e){var n=e.onKeyDown,t=e.onMouseDown,o=e.id,a=e.ref,i=O(e,k),u=q(),c=u.dispatch,l=u.dropdownId,f=u.mouseDownStartPosRef,s=u.triggerClickedRef,d=u.triggerRef,p=u.state,v=p.triggerId,g=p.isExpanded,h=(0,x.e)(d,a),b=W(),y=(0,r.useMemo)((function(){return b.findIndex((function(e){return!e.disabled}))}),[b]);return(0,r.useEffect)((function(){null!=o&&o!==v&&c({type:T,payload:o})}),[v,c,o]),{data:{isExpanded:g,controls:l},props:R({},i,{ref:h,id:v||void 0,onKeyDown:E(n,(function(e){switch(e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),c({type:L,payload:{index:y}});break;case"Enter":case" ":c({type:L,payload:{index:y}})}})),onMouseDown:E(t,(function(e){m(e.nativeEvent)||(f.current={x:e.clientX,y:e.clientY},g||(s.current=!0),c(g?{type:N}:{type:j}))})),type:"button"})}}function K(e){var n=e.index,t=e.isLink,o=void 0!==t&&t,i=e.onClick,u=e.onDragStart,c=e.onMouseDown,f=e.onMouseEnter,s=e.onMouseLeave,p=e.onMouseMove,v=e.onMouseUp,g=e.onSelect,h=e.disabled,y=e.onFocus,w=e.valueText,k=e.ref,I=O(e,D),C=q(),N=C.dispatch,L=C.dropdownRef,j=C.mouseDownStartPosRef,S=C.readyToSelect,T=C.selectCallbacks,B=C.triggerRef,U=C.state,F=U.selectionIndex,Z=U.isExpanded,K=(0,r.useRef)(null),Y=(0,r.useState)(w||""),H=Y[0],G=Y[1],W=(0,r.useCallback)((function(e){!w&&null!=e&&e.textContent&&G(e.textContent)}),[w]),J=(0,r.useRef)(!1),Q=function(e,n){var t=(0,r.useState)(n),o=t[0],a=t[1];return[o,(0,r.useCallback)((function(n){e.current=n,a(n)}),[])]}(K,null),V=Q[0],$=Q[1],ee=function(e,n,t){var o=(0,l.N)(),i=(0,r.useContext)(n),u=i.registerDescendant,c=i.unregisterDescendant,f=i.descendants,s=null!=t?t:f.findIndex((function(n){return n.element===e.element}));return(0,a.L)((function(){return e.element||o(),u(d({},e,{index:s})),function(){c(e.element)}}),[e,o,s,u,c].concat(Object.values(e))),s}((0,r.useMemo)((function(){return{element:V,key:H,disabled:h,isLink:o}}),[h,V,o,H]),A,n),ne=ee===F&&!h,te=(0,x.e)(k,$,W);function re(){z(B.current),g&&g(),N({type:_})}return T.current[ee]=g,(0,r.useEffect)((function(){if(Z){var e=window.setTimeout((function(){S.current=!0}),400);return function(){window.clearTimeout(e)}}S.current=!1}),[Z,S]),(0,r.useEffect)((function(){var e=(0,b.r)(K.current);return e.addEventListener("mouseup",n),function(){e.removeEventListener("mouseup",n)};function n(){J.current=!1}}),[]),{data:{disabled:h},props:R({id:X(ee),tabIndex:-1},I,{ref:te,"data-disabled":h?"":void 0,"data-selected":ne?"":void 0,"data-valuetext":H,onClick:E(i,(function(e){m(e.nativeEvent)||o&&(h?e.preventDefault():re())})),onDragStart:E(u,(function(e){o&&e.preventDefault()})),onMouseDown:E(c,(function(e){m(e.nativeEvent)||(o?J.current=!0:e.preventDefault())})),onMouseEnter:E(f,(function(e){var n=(0,b.r)(L.current);ne||null==ee||h||(null!=L&&L.current&&L.current!==n.activeElement&&K.current!==n.activeElement&&L.current.focus(),N({type:P,payload:{index:ee}}))})),onMouseLeave:E(s,(function(e){N({type:M})})),onMouseMove:E(p,(function(e){if(!S.current){var n=Math.abs(e.clientX-j.current.x),t=Math.abs(e.clientY-j.current.y);(n>8||t>8)&&(S.current=!0)}ne||null==ee||h||N({type:P,payload:{index:ee,dropdownRef:L}})})),onFocus:E(y,(function(){S.current=!0,ne||null==ee||h||N({type:P,payload:{index:ee}})})),onMouseUp:E(v,(function(e){m(e.nativeEvent)||(S.current?o?J.current?J.current=!1:K.current&&K.current.click():h||re():S.current=!0)}))})}}function Y(e){e.id;var n=e.onKeyDown,t=e.ref,o=O(e,I),a=q(),i=a.dispatch,u=a.triggerRef,c=a.dropdownRef,l=a.selectCallbacks,f=a.dropdownId,s=a.state,d=s.isExpanded,p=s.triggerId,v=s.selectionIndex,g=s.typeaheadQuery,m=W(),b=(0,x.e)(c,t);(0,r.useEffect)((function(){var e=function(e,n){void 0===n&&(n="");if(!n)return null;var t=e.find((function(e){var t,r,o;return!e.disabled&&(null==(t=e.element)||null==(r=t.dataset)||null==(o=r.valuetext)?void 0:o.toLowerCase().startsWith(n))}));return t?e.indexOf(t):null}(m,g);g&&null!=e&&i({type:P,payload:{index:e,dropdownRef:c}});var n=window.setTimeout((function(){return g&&i({type:S,payload:""})}),1e3);return function(){return window.clearTimeout(n)}}),[i,m,g,c]);var w=h(m.length),k=h(m[v]),D=h(v);(0,r.useEffect)((function(){v>m.length-1?i({type:P,payload:{index:m.length-1,dropdownRef:c}}):w!==m.length&&v>-1&&k&&D===v&&m[v]!==k&&i({type:P,payload:{index:m.findIndex((function(e){return e.key===(null==k?void 0:k.key)})),dropdownRef:c}})}),[c,i,m,w,k,D,v]);var C=E((function(e){var n=e.key;if(d)switch(n){case"Enter":case" ":var t=m.find((function(e){return e.index===v}));t&&!t.disabled&&(e.preventDefault(),t.isLink&&t.element?t.element.click():(z(u.current),l.current[t.index]&&l.current[t.index](),i({type:_})));break;case"Escape":z(u.current),i({type:N});break;case"Tab":e.preventDefault();break;default:if((0,y.HD)(n)&&1===n.length){var r=g+n.toLowerCase();i({type:S,payload:r})}}}),function(e,n){var t=(0,r.useContext)(e).descendants,o=n.callback,a=n.currentIndex,i=n.filter,u=n.key,c=void 0===u?"index":u,l=n.orientation,f=void 0===l?"vertical":l,s=n.rotate,d=void 0===s||s,p=n.rtl,v=void 0!==p&&p;return function(e){if(["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(e.key)){var n=null!=a?a:-1,r=i?t.filter(i):t;if(r.length){var u=r.findIndex((function(e){return e.index===a}));switch(e.key){case"ArrowDown":if("vertical"===f||"both"===f){e.preventDefault();var l=w();o("option"===c?l:l[c])}break;case"ArrowUp":if("vertical"===f||"both"===f){e.preventDefault();var s=x();o("option"===c?s:s[c])}break;case"ArrowLeft":if("horizontal"===f||"both"===f){e.preventDefault();var p=(v?w:x)();o("option"===c?p:p[c])}break;case"ArrowRight":if("horizontal"===f||"both"===f){e.preventDefault();var g=(v?x:w)();o("option"===c?g:g[c])}break;case"PageUp":e.preventDefault();var m=(e.ctrlKey?x:E)();o("option"===c?m:m[c]);break;case"Home":e.preventDefault();var h=E();o("option"===c?h:h[c]);break;case"PageDown":e.preventDefault();var b=(e.ctrlKey?w:O)();o("option"===c?b:b[c]);break;case"End":e.preventDefault();var y=O();o("option"===c?y:y[c])}}}function w(){return n===O().index?d?E():r[u]:r[(u+1)%r.length]}function x(){return n===E().index?d?O():r[u]:r[(u-1+r.length)%r.length]}function E(){return r[0]}function O(){return r[r.length-1]}}}(A,{currentIndex:v,orientation:"vertical",rotate:!1,filter:function(e){return!e.disabled},callback:function(e){i({type:P,payload:{index:e,dropdownRef:c}})},key:"index"}));return{data:{activeDescendant:X(v)||void 0,triggerId:p},props:R({tabIndex:-1},o,{ref:b,id:f,onKeyDown:E(n,C)})}}function H(e){var n=e.onBlur,t=e.portal,o=void 0===t||t,a=e.position,i=e.ref,u=O(e,C),c=q(),l=c.triggerRef,f=c.triggerClickedRef,s=c.dispatch,d=c.dropdownRef,p=c.popoverRef,v=c.state.isExpanded,g=(0,x.e)(p,i);return(0,r.useEffect)((function(){if(v){var e=(0,b.r)(p.current);return e.addEventListener("mousedown",n),function(){e.removeEventListener("mousedown",n)}}function n(e){var n,t;f.current?f.current=!1:(n=p.current,t=e.target,n&&n.contains(t)||s({type:N}))}}),[f,l,s,d,p,v]),{data:{portal:o,position:a,targetRef:l,isExpanded:v},props:R({ref:g,hidden:!v,onBlur:E(n,(function(e){e.currentTarget.contains(e.relatedTarget)||s({type:N})}))},u)}}function X(e){var n=(0,r.useContext)(B).dropdownId;return null!=e&&e>-1?w("option-"+e,n):void 0}function z(e){e&&e.focus()}function G(e,n){switch(void 0===n&&(n={}),n.type){case _:case N:return R({},e,{isExpanded:!1,selectionIndex:-1});case"OPEN_MENU_AT_FIRST_ITEM":return R({},e,{isExpanded:!0,selectionIndex:0});case L:return R({},e,{isExpanded:!0,selectionIndex:n.payload.index});case j:return R({},e,{isExpanded:!0,selectionIndex:-1});case P:var t=n.payload.dropdownRef,r=void 0===t?{current:null}:t;if(n.payload.index>=0&&n.payload.index!==e.selectionIndex){if(r.current){var o=(0,b.r)(r.current);r.current!==(null==o?void 0:o.activeElement)&&r.current.focus()}return R({},e,{selectionIndex:null!=n.payload.max?Math.min(Math.max(n.payload.index,0),n.payload.max):Math.max(n.payload.index,0)})}return e;case M:return R({},e,{selectionIndex:-1});case T:return R({},e,{triggerId:n.payload});case S:return"undefined"!==typeof n.payload?R({},e,{typeaheadQuery:n.payload}):e;default:return e}}function q(){return(0,r.useContext)(B)}function W(){return e=A,(0,r.useContext)(e).descendants;var e}var J=t(59864);function Q(){return Q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Q.apply(this,arguments)}function V(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var $=["as","id","children"],ee=["as"],ne=["as"],te=["as"],re=["as"],oe=["as"],ae=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?r.Fragment:t,a=e.id,i=e.children,u=V(e,$),c=(0,r.useMemo)((function(){try{return(0,J.isFragment)((0,r.createElement)(o,null))}catch(e){return!1}}),[o])?{}:Q({ref:n,id:a,"data-reach-menu":""},u);return(0,r.createElement)(o,c,(0,r.createElement)(F,{id:a,children:i}))}));var ie=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"button":t,a=Z(Q({},V(e,ee),{ref:n})),i=a.data,u=i.isExpanded,c=i.controls,l=a.props;return(0,r.createElement)(o,Q({"aria-expanded":!!u||void 0,"aria-haspopup":!0,"aria-controls":c},l,{"data-reach-menu-button":""}))}));var ue=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"div":t,a=K(Q({},V(e,ne),{ref:n})),i=a.data.disabled,u=a.props;return(0,r.createElement)(o,Q({role:"menuitem"},u,{"aria-disabled":i||void 0,"data-reach-menu-item":""}))})),ce=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"div":t,a=V(e,te);return(0,r.createElement)(ue,Q({},a,{ref:n,as:o}))}));var le=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"div":t,a=Y(Q({},V(e,re),{ref:n})),i=a.data,u=i.activeDescendant,c=i.triggerId,l=a.props;return(0,r.createElement)(o,Q({"aria-activedescendant":u,"aria-labelledby":c||void 0,role:"menu"},l,{"data-reach-menu-items":""}))}));var fe=(0,r.forwardRef)((function(e,n){var t=e.as,a=void 0===t?"div":t,i=H(Q({},V(e,oe),{ref:n})),u=i.data,c=u.portal,l=u.targetRef,f=u.position,s=i.props,d={"data-reach-menu-popover":""};return c?(0,r.createElement)(o.J2,Q({},s,d,{as:a,targetRef:l,position:f})):(0,r.createElement)(a,Q({},s,d))}))},72488:function(e,n,t){"use strict";t.d(n,{J2:function(){return x},MN:function(){return k}});var r=t(67294),o=t(1251),a=t(12459),i=t(73935),u=function(e){var n=e.children,t=e.type,u=void 0===t?"reach-portal":t,c=e.containerRef,l=(0,r.useRef)(null),f=(0,r.useRef)(null),s=(0,a.N)();return(0,o.L)((function(){if(l.current){var e=l.current.ownerDocument,n=(null==c?void 0:c.current)||e.body;return f.current=null==e?void 0:e.createElement(u),n.appendChild(f.current),s(),function(){f.current&&n&&n.removeChild(f.current)}}}),[u,s,c]),f.current?(0,i.createPortal)(n,f.current):(0,r.createElement)("span",{ref:l})};var c,l=["bottom","height","left","right","top","width"],f=new Map,s=function e(){var n=[];f.forEach((function(e,t){var r,o,a=t.getBoundingClientRect();r=a,o=e.rect,void 0===r&&(r={}),void 0===o&&(o={}),l.some((function(e){return r[e]!==o[e]}))&&(e.rect=a,n.push(e))})),n.forEach((function(e){e.callbacks.forEach((function(n){return n(e.rect)}))})),c=window.requestAnimationFrame(e)};var d=function(e,n){return{observe:function(){var t=0===f.size;f.has(e)?f.get(e).callbacks.push(n):f.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[n]}),t&&s()},unobserve:function(){var t=f.get(e);if(t){var r=t.callbacks.indexOf(n);r>=0&&t.callbacks.splice(r,1),t.callbacks.length||f.delete(e),f.size||cancelAnimationFrame(c)}}}},p=t(85777);function v(e,n,t){var a,i,u;(0,p.jn)(n)?a=n:(a=null==(u=null==n?void 0:n.observe)||u,i=null==n?void 0:n.onChange);(0,p.mf)(t)&&(i=t);var c=(0,r.useState)(e.current),l=c[0],f=c[1],s=(0,r.useRef)(!1),v=(0,r.useRef)(!1),g=(0,r.useState)(null),m=g[0],h=g[1],b=(0,r.useRef)(i);return(0,o.L)((function(){b.current=i,e.current!==l&&f(e.current)})),(0,o.L)((function(){l&&!s.current&&(s.current=!0,h(l.getBoundingClientRect()))}),[l]),(0,o.L)((function(){if(a){var n=l;if(v.current||(v.current=!0,n=e.current),n){var t=d(n,(function(e){null==b.current||b.current(e),h(e)}));return t.observe(),function(){t.unobserve()}}}}),[a,l,e]),m}var g=t(55152),m=t(61331),h=t(34760),b=t.n(h);function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)}var w=["as","targetRef","position","unstable_observableRefs"],x=(0,r.forwardRef)((function(e,n){return(0,r.createElement)(u,null,(0,r.createElement)(E,y({ref:n},e)))}));var E=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"div":t,a=e.targetRef,i=e.position,u=void 0===i?k:i,c=e.unstable_observableRefs,l=void 0===c?[]:c,f=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,w),s=(0,r.useRef)(null),d=v(s,{observe:!f.hidden}),p=v(a,{observe:!f.hidden}),h=(0,m.e)(s,n);return function(e,n){var t=(0,g.r)(e.current);function o(e){"Tab"===e.key&&n.current&&0===b()(n.current).length||("Tab"===e.key&&e.shiftKey?f(e)?s(e):d(e)?p(e):m(e)&&y():"Tab"===e.key&&(i()?u(e):c()?l(e):v(e)&&y()))}function a(){var r=b()(t),o=r&&e.current?r.indexOf(e.current):-1,a=r&&r[o+1];return(!n.current||!n.current.contains(a||null))&&a}function i(){return!!e.current&&e.current===t.activeElement}function u(e){var t=n.current&&b()(n.current);t&&t[0]&&(e.preventDefault(),t[0].focus())}function c(){if(!!n.current&&n.current.contains(t.activeElement||null)){var e=n.current&&b()(n.current);return Boolean(e&&e[e.length-1]===t.activeElement)}return!1}function l(e){var n=a();n&&(e.preventDefault(),n.focus())}function f(e){if(e.shiftKey){var n=a();return e.target===n}}function s(e){var t=n.current&&b()(n.current),r=t&&t[t.length-1];r&&(e.preventDefault(),r.focus())}function d(e){var t=n.current&&b()(n.current);return!!t&&(0!==t.length&&e.target===t[0])}function p(n){var t;n.preventDefault(),null==(t=e.current)||t.focus()}function v(e){var r=n.current?b()(t).filter((function(e){return!n.current.contains(e)})):null;return!!r&&e.target===r[r.length-1]}function m(e){return e.target===b()(t)[0]}(0,r.useEffect)((function(){return t.addEventListener("keydown",o),function(){t.removeEventListener("keydown",o)}}),[]);var h=[];function y(){var e=n.current&&b()(n.current);e&&(e.forEach((function(e){h.push([e,e.tabIndex]),e.tabIndex=-1})),t.addEventListener("focusin",w))}function w(){t.removeEventListener("focusin",w),h.forEach((function(e){var n=e[0],t=e[1];n.tabIndex=t}))}}(a,s),(0,r.createElement)(o,y({"data-reach-popover":"",ref:h},f,{style:y({position:"absolute"},O.apply(void 0,[u,p,d].concat(l)),f.style)}))}));function O(e,n,t){for(var r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];return t?e.apply(void 0,[n,t].concat(o.map((function(e){return e.current})))):{visibility:"hidden"}}function R(e,n,t){return{top:t?e.top-n.height+window.pageYOffset+"px":e.top+e.height+window.pageYOffset+"px"}}var k=function(e,n){if(!e||!n)return{};var t=D(e,n),r=t.directionRight,o=t.directionUp;return y({left:r?e.right-n.width+window.pageXOffset+"px":e.left+window.pageXOffset+"px"},R(e,n,o))};function D(e,n,t,r){void 0===t&&(t=0),void 0===r&&(r=0);var o={top:e.top-n.height<0,right:window.innerWidth<e.left+n.width-t,bottom:window.innerHeight<e.bottom+n.height-r,left:e.left+e.width-n.width<0};return{directionRight:o.right&&!o.left,directionLeft:o.left&&!o.right,directionUp:o.bottom&&!o.top,directionDown:o.top&&!o.bottom}}},12769:function(e,n,t){"use strict";function r(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}t.d(n,{N:function(){return r}})},61331:function(e,n,t){"use strict";t.d(n,{e:function(){return c}});var r=t(67294),o=t(85777);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function u(e,n){if(null!=e)if((0,o.mf)(e))e(n);else try{e.current=n}catch(t){throw new Error('Cannot assign value "'+n+'" to ref "'+e+'"')}}function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.useCallback)((function(e){for(var t,r=i(n);!(t=r()).done;){u(t.value,e)}}),n)}},55152:function(e,n,t){"use strict";t.d(n,{r:function(){return o}});var r=t(12769);function o(e){return(0,r.N)()?e?e.ownerDocument:document:null}},85777:function(e,n,t){"use strict";function r(e){return"boolean"===typeof e}function o(e){return!(!e||"[object Function]"!={}.toString.call(e))}function a(e){return"string"===typeof e}t.d(n,{HD:function(){return a},jn:function(){return r},mf:function(){return o}})},12459:function(e,n,t){"use strict";t.d(n,{N:function(){return o}});var r=t(67294);function o(){var e=(0,r.useState)(Object.create(null))[1];return(0,r.useCallback)((function(){e(Object.create(null))}),[])}},1251:function(e,n,t){"use strict";t.d(n,{L:function(){return o}});var r=t(67294),o=(0,t(12769).N)()?r.useLayoutEffect:r.useEffect},68253:function(e,n,t){"use strict";t.d(n,{p:function(){return S}});var r=t(41518),o=t(67434),a=t(60257),i=t(675),u=t(98607),c=t(78502),l=t(26274),f=t(67294),s=t(32125),d=t(94184),p=t.n(d),v=t(85477),g=t(72488),m=t(72465),h=t(93029),b=t(16344),y=t(49651),w=t(2763),x=["children","name","className","theme","forwardedRef","languageMenuButtonClassName","languageMenuOpenButtonClassName"],E=["theme","children"],O=["children","name","className"];function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function D(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,l.Z)(e);if(n){var o=(0,l.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,c.Z)(this,t)}}var I="fi-language-menu",C={item:"".concat(I,"_item"),itemLang:"".concat(I,"-language_item"),button:"".concat(I,"_button"),buttonOpen:"".concat(I,"-language_button_open"),buttonLang:"".concat(I,"-language_button"),iconLang:"".concat(I,"-language_icon")},M=function(e){(0,u.Z)(t,e);var n=D(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.name,r=e.className,a=e.theme,i=e.forwardedRef,u=e.languageMenuButtonClassName,c=e.languageMenuOpenButtonClassName,l=(0,o.Z)(e,x);return f.Children.count(n)<1?((0,h.j)().warn("Menu '".concat(t,"' does not contain items")),null):f.createElement(b.I,{className:p()(r,I)},f.createElement(v.v2,null,(function(e){var r=e.isOpen;return f.createElement(f.Fragment,null,f.createElement(v.j2,k(k({ref:i},l),{},{className:p()(u,r&&c)}),t),f.createElement(j,{theme:a,position:g.MN},n))})))}}]),t}(f.Component),_=(0,s.ZP)((function(e){return f.createElement(M,k({},e))})).withConfig({componentId:"sc-1lm0gob-0"})(["",""],(function(e){return function(e){return(0,s.iv)(["& > [data-reach-menu-button].fi-language-menu_button{"," "," cursor:pointer;&.fi-language-menu-language_button{"," "," padding:9px ",";line-height:24px;background-color:",";border:1px solid transparent;border-radius:",";word-break:break-word;& > .fi-language-menu-language_icon{height:1em;width:1em;transform:translateY(0.2em);margin-left:",";& .fi-icon-base-fill{fill:",";}}&:focus{outline:0;position:relative;&::after{","}}&:hover{border-color:",";}}&.fi-language-menu-language_button_open{border-color:",";& > .fi-language-menu-language_icon.fi-language-menu-language_icon{transform:translateY(0.2em) rotate(180deg);}}}"],(0,w.bG)(e),e.typography.bodyText,(0,w.bG)(e),e.typography.actionElementInnerTextBold,e.spacing.xs,e.colors.whiteBase,e.radiuses.basic,e.spacing.xs,e.colors.highlightBase,e.focuses.absoluteFocus,e.colors.depthLight1,e.colors.depthLight1)}(e.theme)})),N=function(e){return f.createElement(f.Fragment,null,e,f.createElement(y.JO,{icon:"chevronDown",className:C.iconLang}))},L=function(e,n){return e&&n?{left:"".concat(e.left-n.width+e.width,"px"),top:"".concat(e.top+e.height+window.pageYOffset,"px"),maxWidth:"".concat(Math.max(e.width,e.width+e.left-30),"px"),minWidth:"".concat(e.width-2,"px")}:{}},j=(0,s.ZP)((function(e){e.theme;var n=e.children,t=(0,o.Z)(e,E);return f.createElement(v.YI,k(k({},t),{},{position:L,onKeyDown:function(e){"Escape"===e.key&&e.stopPropagation()}}),f.createElement(v.sd,null,n))})).withConfig({componentId:"sc-1lm0gob-1"})(["",""],(function(e){return function(e){return(0,s.iv)(["&[data-reach-menu-popover]{"," "," background-color:",";box-shadow:",";"," position:absolute;box-sizing:content-box;margin-top:12px;border:1px solid ",";border-radius:",";&:before,&:after{content:'';position:absolute;height:0;width:0;bottom:100%;right:",";border:solid transparent;pointer-events:none;}&:before{border-bottom-color:",";border-width:8px;margin-right:-8px;}&:after{border-bottom-color:",";border-width:6.5px;margin-right:-6.5px;}}& [data-reach-menu-items]{border:0;padding:0;white-space:normal;}& [data-reach-menu-item].fi-language-menu_item{"," "," word-break:break-word;&[data-selected]{"," color:",";background-color:",";}&.fi-language-menu-language_item,&[data-selected].fi-language-menu-language_item{"," margin:"," 0;padding:0 "," 0 ",";border-left:4px solid transparent;background-color:transparent;&.fi-language-menu-lang-item-selected{",";border-left-color:",";}}&[data-selected].fi-language-menu-language_item{border-left-color:",";}&:focus{outline:0;}}"],(0,w.bG)(e),e.typography.bodyText,e.colors.whiteBase,e.shadows.menuShadow,e.typography.actionElementInnerText,e.colors.depthLight1,e.radiuses.basic,e.spacing.l,e.colors.depthLight1,e.colors.whiteBase,(0,w.bG)(e),e.typography.bodyText,e.typography.bodyText,e.colors.blackBase,e.colors.highlightLight3,e.typography.actionElementInnerText,e.spacing.xs,e.spacing.m,e.spacing.xxs,e.typography.actionElementInnerTextBold,e.colors.highlightBase,e.colors.highlightBase)}(e.theme)})),S=(0,f.forwardRef)((function(e,n){var t=e.children,r=e.name,a=e.className,i=(0,o.Z)(e,O),u=p()(C.button,C.buttonLang,a);return f.createElement(m.cY,null,(function(e){var o=e.suomifiTheme;return f.createElement(_,k(k({theme:o,forwardedRef:n},i),{},{name:N(r),languageMenuButtonClassName:u,languageMenuOpenButtonClassName:C.buttonOpen}),function(e,n){return f.Children.map(e,(function(e){return f.isValidElement(e)?f.cloneElement(e,{className:p()(C.item,n)}):e}))}(t,C.itemLang))}))}));S.displayName="LanguageMenu"},31999:function(e,n,t){"use strict";t.d(n,{X:function(){return d}});var r=t(41518),o=t(67434),a=t(67294),i=t(94184),u=t.n(i),c=t(85477),l=["selected","className"];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.selected,t=e.className,r=(0,o.Z)(e,l);return a.createElement(c.sN,s(s({},r),{},{className:u()(t,{"fi-language-menu-lang-item-selected":n})}))};d.displayName="LanguageMenuItem"},34760:function(e){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],t=n.join(","),r="undefined"===typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,n){n=n||{};var o,i,u,f=[],s=[],d=e.querySelectorAll(t);for(n.includeContainer&&r.call(e,t)&&(d=Array.prototype.slice.apply(d)).unshift(e),o=0;o<d.length;o++)a(i=d[o])&&(0===(u=c(i))?f.push(i):s.push({documentOrder:o,tabIndex:u,node:i}));return s.sort(l).map((function(e){return e.node})).concat(f)}function a(e){return!(!i(e)||function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var n=function(e){for(var n=0;n<e.length;n++)if(e[n].checked)return e[n]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!n||n===e}(e)}(e)||c(e)<0)}function i(e){return!(e.disabled||function(e){return f(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}o.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==r.call(e,t)&&a(e)},o.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==r.call(e,u)&&i(e)};var u=n.concat("iframe").join(",");function c(e){var n=parseInt(e.getAttribute("tabindex"),10);return isNaN(n)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:n}function l(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex}function f(e){return"INPUT"===e.tagName}e.exports=o}}]);