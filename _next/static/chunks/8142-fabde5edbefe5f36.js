"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8142],{46845:function(e,t,n){n.d(t,{z:function(){return B}});var r=n(41518),o=n(67434),i=n(60257),c=n(675),a=n(98607),l=n(78502),u=n(26274),s=n(67294),d=n(32125),f=n(94184),p=n.n(f),m=n(2763),h=n(69192),b=function(e){return(0,d.iv)(["color:",";background:none;background-color:",";border:1px solid ",";text-shadow:none;&:hover{background:",";}&:active{background:none;background-color:",";}&.fi-button--disabled,&[disabled],&:disabled{color:",";text-shadow:none;background:none;background-color:",";border-color:",";}"],e.colors.highlightBase,e.colors.whiteBase,e.colors.highlightBase,e.gradients.whiteBaseToDepthLight2,e.colors.depthLight2,e.colors.depthBase,e.colors.highlightLight4,e.colors.depthBase)},v=function(e){return(0,d.iv)([""," padding:"," ",";min-height:40px;color:",";background:",";border-radius:",";text-align:center;text-shadow:",";cursor:pointer;&:focus{outline:none;position:relative;&::after{","}}&:hover{background:",";}&:active{background:",";}&.fi-button--disabled,&[disabled],&:disabled{text-shadow:0 1px 1px ",";background:",";user-select:none;cursor:not-allowed;}&.fi-button--disabled::after{border:none;box-shadow:none;}&.fi-button--fullwidth{display:block;width:100%;}"," "," "," "," & > .fi-button_icon{width:16px;height:16px;margin-right:",";vertical-align:middle;transform:translateY(-0.1em);&.fi-button_icon--right{margin-right:0;margin-left:",";}}&.fi-button--disabled > .fi-button_icon{cursor:not-allowed;}"],(0,m.LI)(e),e.spacing.insetL,e.spacing.insetXxl,e.colors.whiteBase,e.gradients.highlightBaseToHighlightDark1,e.radiuses.basic,e.shadows.invertTextShadow,e.focuses.absoluteFocus,e.gradients.highlightLight1ToHighlightBase,e.colors.highlightDark1,(0,h.k)(.5)(e.colors.blackBase),e.gradients.depthLight1ToDepthBase,function(e){return(0,d.iv)(["&.fi-button--inverted{background:none;background-color:",";border:1px solid ",";text-shadow:none;&:hover{background:",";}&:active{background:none;background-color:",";}&.fi-button--disabled,&[disabled],&:disabled{opacity:0.41;background:none;background-color:none;}}"],e.colors.highlightBase,e.colors.whiteBase,e.gradients.whiteBaseNegative,e.colors.highlightBase)}(e),function(e){return(0,d.iv)(["&.fi-button--secondary{","}"],b(e))}(e),function(e){return(0,d.iv)(["&.fi-button--secondary-noborder{"," border:none;background-color:transparent;}"],b(e))}(e),function(e){return(0,d.iv)(["&.fi-button--link{color:",";"," background:",";border:none;&:hover{background:",";}&:active{background:",";}&.fi-button--disabled,&[disabled],&:disabled{color:",";background:none;background-color:",";}}"],e.colors.highlightBase,b(e),e.gradients.depthSecondaryToDepthSecondaryDark1,e.gradients.highlightLight4ToDepthSecondary,e.gradients.depthLight3ToDepthLight2,e.colors.depthBase,e.colors.depthLight3)}(e),e.spacing.insetM,e.spacing.insetM)},g=n(12834),I=n(49651),y=n(72465),w=["fullWidth","variant","className","disabled","onClick","aria-disabled","icon","iconRight","iconProps","forwardedRef","children"],O=["className"],x=["theme"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var Z="fi-button",P="".concat(Z,"--disabled"),E="".concat(Z,"_icon"),j="".concat(Z,"_icon--right"),S="".concat(Z,"--fullwidth"),C=function(e){(0,a.Z)(n,e);var t=R(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,c.Z)(n,[{key:"render",value:function(){var e,t=this.props,n=t.fullWidth,i=t.variant,c=void 0===i?"default":i,a=t.className,l=t.disabled,u=void 0!==l&&l,d=t.onClick,f=t["aria-disabled"],m=void 0!==f&&f,h=t.icon,b=t.iconRight,v=t.iconProps,y=void 0===v?{className:void 0}:v,x=t.forwardedRef,k=t.children,R=(0,o.Z)(t,w),C=y.className,A=(0,o.Z)(y,O),B=u||m?{}:{onClick:d};return s.createElement(g.S,T(T(T(T({},R),B),u?{}:{tabIndex:0}),{},{"aria-disabled":!!m||!!u,forwardedRef:x,disabled:!!u,className:p()(Z,a,(e={},(0,r.Z)(e,P,!!u||!!m),(0,r.Z)(e,"".concat(Z,"--inverted"),"inverted"===c),(0,r.Z)(e,"".concat(Z,"--secondary"),"secondary"===c),(0,r.Z)(e,"".concat(Z,"--secondary-noborder"),"secondaryNoBorder"===c),(0,r.Z)(e,"".concat(Z,"--link"),"link"===c),(0,r.Z)(e,S,n),e))}),!!h&&s.createElement(I.JO,T(T({},A),{},{mousePointer:!0,icon:h,color:"currentColor",className:p()(E,C)})),k,!!b&&s.createElement(I.JO,T(T({},A),{},{mousePointer:!0,icon:b,color:"currentColor",className:p()(E,j,C)})))}}]),n}(s.Component),A=(0,d.ZP)((function(e){e.theme;var t=(0,o.Z)(e,x);return s.createElement(C,T({},t))})).withConfig({componentId:"sc-1ykxrn9-0"})(["",""],(function(e){var t=e.theme;return v(t)})),B=(0,s.forwardRef)((function(e,t){return s.createElement(y.cY,null,(function(n){var r=n.suomifiTheme;return s.createElement(A,T({theme:r,forwardedRef:t},e))}))}));B.displayName="Button"},2008:function(e,t,n){n.d(t,{a:function(){return i}});var r=n(32125),o=n(2763),i=function(e){return(0,r.iv)([""," "," &.fi-chip{border-radius:14px;padding:"," ",";color:",";background:",";max-height:100%;display:inline-block;&:focus{outline:0;position:relative;&::after{"," border-radius:16px;}}& .fi-chip--content{display:block;word-break:break-word;overflow:hidden;line-height:1.5em;}}&.fi-chip--disabled{&.fi-chip{cursor:not-allowed;background:",";&:hover,&:active{background:",";}}}"],(0,o.bG)(e),(0,o.LZ)(e)("actionElementInnerTextBold"),e.spacing.insetXxs,e.spacing.insetL,e.colors.whiteBase,e.colors.highlightBase,e.focuses.absoluteFocus,e.colors.depthBase,e.colors.depthBase)}},99650:function(e,t,n){n.d(t,{e:function(){return r},m:function(){return o}});var r="fi-chip",o={disabled:"".concat(r,"--disabled"),content:"".concat(r,"--content")}},28142:function(e,t,n){n.d(t,{N:function(){return Oe}});var r=n(67434),o=n(60257),i=n(675),c=n(62991),a=n(98607),l=n(78502),u=n(26274),s=n(41518),d=n(67294),f=n(32125),p=n(94184),m=n.n(p),h=n(72465),b=n(27143),v=n(48180),g=n(35243),I=n(10076),y=n(22074),w=n(54290),O=n(29853),x=n(4606),k=n(66646),T=n(44934),R=n(65131);var Z=n(14298);function P(e){return function(e){if(Array.isArray(e))return(0,R.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,Z.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=n(41640),j=n(93029),S=n(12834),C=n(16344),A=n(49651),B=n(99650),D=n(2008),L=["className","children","onClick","removable","actionLabel","forwardedRef","disabled","aria-disabled"],N=["theme"];function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var V={removable:"".concat(B.e,"--removable"),button:"".concat(B.e,"--button"),icon:"".concat(B.e,"--icon")},K=function(e){(0,a.Z)(n,e);var t=F(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e,t=this.props,n=t.className,o=t.children,i=t.onClick,c=t.removable,a=t.actionLabel,l=t.forwardedRef,u=t.disabled,f=void 0!==u&&u,p=t["aria-disabled"],h=void 0!==p&&p,b=(0,r.Z)(t,L),v=f||h?{}:{onClick:i};return c&&!a&&(0,j.j)().error("Provide actionLabel to communicate removability to screen readers"),d.createElement(S.S,_(_({className:m()(B.e,V.button,n,(e={},(0,s.Z)(e,B.m.disabled,!!f||!!h),(0,s.Z)(e,V.removable,!!c),e)),disabled:f,"aria-disabled":!!h||!!f},v),{},{forwardedRef:l},b),d.createElement(C.I,{className:B.m.content},o),!!c&&d.createElement(d.Fragment,null,d.createElement(A.JO,{mousePointer:!0,icon:"close",color:"currentColor",className:V.icon,"aria-hidden":!0}),d.createElement(T.T,null,a)))}}]),n}(d.Component),W=(0,f.ZP)((function(e){e.theme;var t=(0,r.Z)(e,N);return d.createElement(K,_({},t))})).withConfig({componentId:"sc-1whmkdc-0"})(["",""],(function(e){return function(e){return(0,f.iv)([""," &.fi-chip--button{cursor:pointer;&:hover{background:",";}&:active{background:",";}}&.fi-chip--removable{padding-top:",";padding-right:22px;padding-bottom:",";padding-left:",";position:relative;& .fi-chip--icon{position:absolute;top:8px;right:10px;height:12px;width:12px;}& .fi-chip--content{margin-right:",";}&.fi-chip--disabled{& .fi-chip--icon{cursor:not-allowed;}}}"],(0,D.a)(e),e.colors.highlightLight1,e.colors.highlightDark1,e.spacing.insetXxs,e.spacing.insetXxs,e.spacing.insetL,e.spacing.xs)}(e.theme)})),J=(0,d.forwardRef)((function(e,t){var n=(0,E.Z)({},e);return d.createElement(h.cY,null,(function(e){var r=e.suomifiTheme;return d.createElement(W,_({theme:r,forwardedRef:t},n))}))}));J.displayName="Chip";var H=n(2763),Y=["className","theme","children","id"],z=["id"];function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var Q="fi-chip-list",G={content_wrapper:"".concat(Q,"_content_wrapper")},$=function(e){(0,a.Z)(n,e);var t=X(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.className;e.theme;var n=e.children,o=e.id,i=(0,r.Z)(e,Y);return d.createElement(b.hh,{className:m()(Q,t,{}),id:o},d.createElement(b.hh,U({className:G.content_wrapper},i),n))}}]),n}(d.Component),ee=(0,f.ZP)($).withConfig({componentId:"sc-139mv72-0"})(["",""],(function(e){return function(e){return(0,f.iv)([""," padding-top:5px;& .fi-chip-list_content_wrapper > *{margin-right:10px;margin-top:10px;padding-right:-10px;}& .fi-chip-list_content_wrapper{display:inline-flex;flex-wrap:wrap;width:100%;}"],(0,H.LZ)(e)("bodyText"))}(e.theme)})),te=function(e){var t=e.id,n=(0,r.Z)(e,z);return d.createElement(h.cY,null,(function(e){var r=e.suomifiTheme;return d.createElement(g.z,{id:t},(function(e){return d.createElement(ee,U({theme:r,id:e},n))}))}))};te.displayName="ChipList";var ne=function(e){var t=e.selectedItems,n=e.sourceRef,r=e.ariaChipActionLabel,o=e.onClick,i=t.filter((function(e){return!e.disabled})).reduce((function(e,t,n){var r=P(e);return r[n]=d.createRef(),r}),[]);return t&&t.length>0?d.createElement(te,null,t.filter((function(e){return e.disabled})).map((function(e){return d.createElement(J,{"aria-disabled":!0,key:e.uniqueItemId,actionLabel:r,removable:!0},e.chipText?e.chipText:e.labelText)})),t.filter((function(e){return!e.disabled})).map((function(e,c){return d.createElement(J,{key:e.uniqueItemId,removable:!e.disabled,onClick:function(){var r,a,l;if(t.filter((function(e){return!e.disabled})).length>1){if(c>0)null===(r=i[c-1])||void 0===r||null===(a=r.current)||void 0===a||a.focus();else if(0===c){var u,s;null===(u=i[1])||void 0===u||null===(s=u.current)||void 0===s||s.focus()}}else null===n||void 0===n||null===(l=n.current)||void 0===l||l.focus();o&&o(e)},actionLabel:r,ref:i[c]},e.chipText?e.chipText:e.labelText)}))):null},re=n(46845),oe=["className","selectedItems","children","onClick"];function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ce=function(e){var t=e.className,n=e.selectedItems,o=e.children,i=e.onClick,c=(0,r.Z)(e,oe),a=n.reduce((function(e,t){return t.disabled?e+1:e}),0);return o&&Object.keys(n).length>0&&Object.keys(n).length!==a?d.createElement(re.z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:t,variant:"link",icon:"remove",onClick:i},c),o):null},ae=n(73429),le=n(39870),ue=n(24997),se=["id","className","theme","labelText","optionalText","hintText","onItemSelectionsChange","chipListVisible","ariaChipActionLabel","removeAllButtonLabel","visualPlaceholder","loading","loadingText","noItemsText","defaultSelectedItems","onChange","debounce","status","statusText","selectedItems","onItemSelect","onRemoveAll","onBlur","ariaSelectedAmountText","ariaSelectedAmountTextFunction","ariaOptionsAvailableText","ariaOptionsAvailableTextFunction","ariaOptionChipRemovedText","ariaOptionChipRemovedTextFunction","disabled","allowItemAddition","itemAdditionHelpText","tooltipComponent","items","forwardedRef"],de=["id"];function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function me(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return he(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return he(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function be(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var ve="fi-multiselect",ge={open:"".concat(ve,"--open"),error:"".concat(ve,"--error"),content_wrapper:"".concat(ve,"_content_wrapper"),removeAllButton:"".concat(ve,"_removeAllButton")},Ie=function(e){(0,a.Z)(n,e);var t=be(n);function n(e){var r;return(0,o.Z)(this,n),r=t.call(this,e),(0,s.Z)((0,c.Z)(r),"popoverListRef",void 0),(0,s.Z)((0,c.Z)(r),"filterInputRef",void 0),(0,s.Z)((0,c.Z)(r),"toggleButtonRef",void 0),(0,s.Z)((0,c.Z)(r),"chipRemovalAnnounceTimeOut",null),(0,s.Z)((0,c.Z)(r),"state",{filterInputValue:"",filteredItems:r.props.items,showPopover:!1,showOptionsAvailableText:!1,focusedDescendantId:null,selectedItems:r.props.selectedItems?r.props.selectedItems||[]:r.props.defaultSelectedItems||[],chipRemovalAnnounceText:"",computedItems:r.props.items}),(0,s.Z)((0,c.Z)(r),"handleItemSelection",(function(e){if(!e.disabled){var t=r.props,n=t.onItemSelectionsChange,o=t.onItemSelect,i=t.selectedItems,c=[];c=r.state.selectedItems.find((function(t){return t.uniqueItemId===e.uniqueItemId}))?r.state.selectedItems.filter((function(t){return t.uniqueItemId!==e.uniqueItemId})):r.state.selectedItems.concat([e]),i||r.setState((function(t,n){var r=n.items.some((function(t){return t.uniqueItemId===e.uniqueItemId}));if(t.selectedItems.find((function(t){return t.uniqueItemId===e.uniqueItemId}))){if(r)return{selectedItems:c};var o=t.computedItems.filter((function(t){return t.uniqueItemId!==e.uniqueItemId}));return{selectedItems:c,computedItems:o}}return{selectedItems:c,computedItems:r?t.computedItems:t.computedItems.concat([e])}})),o&&o(e.uniqueItemId),n&&n(c)}})),(0,s.Z)((0,c.Z)(r),"handleRemoveAllSelections",(function(){r.setState((function(e,t){var n=e.selectedItems,r=t.onItemSelectionsChange,o=t.onRemoveAll,i=[];o&&o();var c,a=me(n);try{for(a.s();!(c=a.n()).done;){var l=c.value;l.disabled&&i.push(l)}}catch(u){a.e(u)}finally{a.f()}return r&&r(i),{selectedItems:i,computedItems:t.items}})),r.filterInputRef&&r.filterInputRef.current&&r.filterInputRef.current.focus()})),(0,s.Z)((0,c.Z)(r),"filter",(function(e,t){return e.labelText.toLowerCase().includes(t.toLowerCase())})),(0,s.Z)((0,c.Z)(r),"focusInInput",(function(e){return!!e&&e.activeElement===r.filterInputRef.current})),(0,s.Z)((0,c.Z)(r),"focusInPopover",(function(e){var t;return!!e&&(null===(t=r.popoverListRef.current)||void 0===t?void 0:t.contains(e.activeElement))})),(0,s.Z)((0,c.Z)(r),"focusInToggleButton",(function(e){var t;return!!e&&(null===(t=r.toggleButtonRef.current)||void 0===t?void 0:t.contains(e.activeElement))})),(0,s.Z)((0,c.Z)(r),"handleBlur",(function(){r.props.onBlur&&r.props.onBlur();var e=(0,v.r3)(r.popoverListRef);e&&requestAnimationFrame((function(){var t=r.focusInPopover(e),n=r.focusInInput(e),o=r.focusInToggleButton(e),i=t||n||o,c=r.state.selectedItems.filter((function(e){return r.props.items.every((function(t){return t.uniqueItemId!==e.uniqueItemId}))}));i||r.setState((function(e,t){return{filterInputValue:"",filteredItems:t.items,showPopover:!1,showOptionsAvailableText:!1,focusedDescendantId:null,computedItems:t.items.concat(c)}}))}))})),(0,s.Z)((0,c.Z)(r),"handleKeyDown",(function(e){var t=r.state,n=t.filteredItems,o=t.focusedDescendantId,i=t.filterInputValue,c=o?n.findIndex((function(e){return e.uniqueItemId===o})):null;switch(e.key){case"ArrowDown":r.setState({showPopover:!0});var a=!r.props.allowItemAddition||c!==n.length-1&&0!==n.length||""===i||r.inputValueInItems()?n[null!==c?(c+1)%n.length:0]:{uniqueItemId:i.toLowerCase(),labelText:i};a&&r.setState({focusedDescendantId:a.uniqueItemId});break;case"ArrowUp":r.setState({showPopover:!0});var l=!r.props.allowItemAddition||null!==c&&0!==c||""===i||r.inputValueInItems()?n[null!==c&&-1!==c?(c-1+n.length)%n.length:n.length-1]:{uniqueItemId:i.toLowerCase(),labelText:i};l&&r.setState({focusedDescendantId:l.uniqueItemId});break;case"Enter":if(e.preventDefault(),o){var u=n.find((function(e){return e.uniqueItemId===o}));if(u)r.handleItemSelection(u);else{var s={uniqueItemId:i.toLowerCase(),labelText:i};r.handleItemSelection(s)}}break;case"Escape":r.state.showPopover&&e.stopPropagation(),r.setState((function(e,t){return{filterInputValue:"",filteredItems:t.items}})),r.setState({showPopover:!1,focusedDescendantId:null})}})),(0,s.Z)((0,c.Z)(r),"disableItems",(function(e){return e.map((function(e){return pe(pe({},e),{},{disabled:!0})}))})),(0,s.Z)((0,c.Z)(r),"inputValueInItems",(function(){return!!r.state.computedItems.find((function(e){return e.uniqueItemId===r.state.filterInputValue.toLowerCase()||e.labelText.toLowerCase()===r.state.filterInputValue.toLowerCase()}))})),r.popoverListRef=d.createRef(),r.filterInputRef=r.props.forwardedRef?r.props.forwardedRef:d.createRef(),r.toggleButtonRef=d.createRef(),r}return(0,i.Z)(n,[{key:"componentDidUpdate",value:function(e){JSON.stringify(this.props.items)!==JSON.stringify(e.items)&&this.setState({computedItems:this.props.items})}},{key:"componentWillUnmount",value:function(){this.chipRemovalAnnounceTimeOut&&clearTimeout(this.chipRemovalAnnounceTimeOut)}},{key:"clickWasInToggleButton",value:function(e){return!!this.toggleButtonRef&&this.toggleButtonRef.current.contains(e.target)}},{key:"handleToggleButtonClick",value:function(e){e.preventDefault(),this.filterInputRef&&this.filterInputRef.current&&(document.activeElement!==this.filterInputRef.current?this.filterInputRef.current.focus():this.setState((function(e){return{showPopover:!e.showPopover,showOptionsAvailableText:!e.showOptionsAvailableText}})))}},{key:"render",value:function(){var e,t=this,n=this.state,o=n.filteredItems,i=n.showPopover,c=n.focusedDescendantId,a=n.selectedItems,l=n.filterInputValue,u=n.chipRemovalAnnounceText,f=n.computedItems,p=this.props,h=p.id,g=p.className;p.theme;var R=p.labelText,Z=p.optionalText,P=p.hintText;p.onItemSelectionsChange;var E=p.chipListVisible,j=p.ariaChipActionLabel,S=p.removeAllButtonLabel,C=p.visualPlaceholder,A=p.loading,B=p.loadingText,D=p.noItemsText;p.defaultSelectedItems;var L=p.onChange,N=p.debounce,q=p.status,_=p.statusText;p.selectedItems,p.onItemSelect,p.onRemoveAll,p.onBlur;var F=p.ariaSelectedAmountText,V=p.ariaSelectedAmountTextFunction,K=p.ariaOptionsAvailableText,W=p.ariaOptionsAvailableTextFunction,J=p.ariaOptionChipRemovedText,H=p.ariaOptionChipRemovedTextFunction,Y=p.disabled,z=p.allowItemAddition,M=p.itemAdditionHelpText,U=p.tooltipComponent;p.items,p.forwardedRef;var X=(0,r.Z)(p,se),Q=o.map((function(e){return pe(pe({},e),{},{checked:!!a.find((function(t){return t.uniqueItemId===e.uniqueItemId}))})})),G=c?"".concat(h,"-").concat(c):"",$="".concat(h,"-popover");return d.createElement(d.Fragment,null,d.createElement(b.hh,pe(pe({},X),{},{className:m()(ve,g,(e={},(0,s.Z)(e,ge.open,i),(0,s.Z)(e,ge.error,"error"===q),e))}),d.createElement(b.hh,{className:m()(ge.content_wrapper,{})},d.createElement(I.K,{waitFor:N},(function(e){return d.createElement(w.H,{inputElementContainerProps:{role:"combobox","aria-haspopup":"listbox","aria-owns":$,"aria-expanded":i},"aria-activedescendant":G,id:h,labelText:R,optionalText:Z,hintText:P,items:f,onFilter:function(e){t.setState((function(t){var n=t.focusedDescendantId;return e.some((function(e){return e.uniqueItemId===n}))||(n=null),{filteredItems:e,focusedDescendantId:n}}))},filterFunc:t.filter,forwardedRef:t.filterInputRef,onFocus:function(){return t.setState({showPopover:!0,showOptionsAvailableText:!0})},onKeyDown:t.handleKeyDown,onBlur:t.handleBlur,value:l,onChange:function(n){L&&e(L,n),t.setState({filterInputValue:n,showPopover:!0})},visualPlaceholder:C,status:q,statusText:_,"aria-controls":$,disabled:Y,tooltipComponent:U},d.createElement(ae.e,{open:i,ref:t.toggleButtonRef,onClick:function(e){return t.handleToggleButtonClick(e)},"aria-hidden":!0,tabIndex:-1,disabled:Y}))})),i&&d.createElement(y.J,{sourceRef:this.filterInputRef,matchWidth:!0,onKeyDown:this.handleKeyDown,onClickOutside:function(e){t.clickWasInToggleButton(e)||t.setState({showPopover:!1})}},d.createElement(O.A,{id:$,ref:this.popoverListRef,focusedDescendantId:G,"aria-multiselectable":"true"},d.createElement(b.hh,null,!A&&Q.length>0&&Q.map((function(e){var n,r=e.uniqueItemId===c;return d.createElement(x.Q,{hasKeyboardFocus:r,key:"".concat(e.uniqueItemId,"_").concat(e.checked),id:"".concat(h,"-").concat(e.uniqueItemId),checked:e.checked,disabled:e.disabled,onClick:function(){t.handleItemSelection(e)},hightlightQuery:null===(n=t.filterInputRef.current)||void 0===n?void 0:n.value},e.labelText)})),!A&&0===Q.length&&!z&&d.createElement(k.q,null,D),!A&&""!==l&&!this.inputValueInItems()&&z&&d.createElement(le.p,{hintText:M,hasKeyboardFocus:l===c,id:"".concat(h,"-").concat(l.toLowerCase()),onClick:function(){var e={labelText:l,uniqueItemId:l.toLowerCase()};t.handleItemSelection(e),t.setState({focusedDescendantId:l.toLowerCase()})}},l),A&&d.createElement(k.q,{className:"loading"},d.createElement(ue.T,{status:"loading",variant:"small",textAlign:"right",text:B}))))),E&&d.createElement(ne,{sourceRef:this.filterInputRef,selectedItems:Y?this.disableItems(a):a,ariaChipActionLabel:j,onClick:function(e){t.chipRemovalAnnounceTimeOut&&clearTimeout(t.chipRemovalAnnounceTimeOut),t.chipRemovalAnnounceTimeOut=setTimeout((function(){t.setState({chipRemovalAnnounceText:""})}),1e3),H?t.setState({chipRemovalAnnounceText:H(e.chipText?e.chipText:e.labelText)}):t.setState({chipRemovalAnnounceText:"".concat(e.chipText?e.chipText:e.labelText," ").concat(J)}),t.handleItemSelection(e)}}),d.createElement(ce,{className:ge.removeAllButton,selectedItems:Y?this.disableItems(a):a,onClick:this.handleRemoveAllSelections},S))),d.createElement(T.T,{"aria-live":"polite","aria-atomic":"true"},this.state.showOptionsAvailableText?V?d.createElement(d.Fragment,null,V(a.length)):d.createElement(d.Fragment,null,a.length,F):""),d.createElement(T.T,{"aria-live":"polite","aria-atomic":"true",id:"".concat(h,"-filteredItems-length")},!A&&this.state.showOptionsAvailableText&&this.focusInInput((0,v.r3)(this.popoverListRef))?W?d.createElement(d.Fragment,null,W(o.length)):d.createElement(d.Fragment,null,o.length,K):""),d.createElement(T.T,{"aria-live":"polite","aria-atomic":"true",id:"".concat(h,"-loading-announce")},A?B:""),d.createElement(T.T,{"aria-live":"assertive","aria-atomic":"true",id:"".concat(h,"-chip-removal-announce")},u))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.selectedItems;return"selectedItems"in e&&n!==t.selectedItems?{selectedItems:n||t.selectedItems||[]}:null}}]),n}(d.Component),ye=(0,f.ZP)(Ie).withConfig({componentId:"sc-xk35df-0"})(["",""],(function(e){return function(e){return(0,f.iv)([""," width:290px;&.fi-multiselect{& .fi-filter-input_input-element-container{position:relative;}& .fi-filter-input_input{padding-right:36px;}}& .fi-multiselect_content_wrapper{display:inline-block;width:100%;}&.fi-multiselect--open{& .fi-filter-input_input{border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}}& .fi-multiselect_removeAllButton{margin-top:10px;}"],(0,H.LZ)(e)("bodyText"))}(e.theme)}));function we(e,t){var n=e.id,o=(0,r.Z)(e,de);return d.createElement(h.cY,null,(function(e){var r=e.suomifiTheme;return d.createElement(g.z,{id:n},(function(e){return d.createElement(ye,pe({theme:r,id:e,forwardedRef:t},o))}))}))}var Oe=(0,d.forwardRef)(we);Oe.displayName="MultiSelect"},69192:function(e,t,n){n.d(t,{k:function(){return a}});var r=n(41518),o=n(96637);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=function(e){return function(t){return(0,o.pW)(c(c({},(0,o.Oq)(t)),{},{alpha:e}))}}}}]);