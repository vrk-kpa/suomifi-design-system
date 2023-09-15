"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9533],{71153:function(e,t,o){o.d(t,{Lt:function(){return z},_e:function(){return F},p3:function(){return j}});var r=o(67434),n=o(60257),a=o(675),i=o(62991),l=o(98607),s=o(78502),c=o(26274),d=o(41518),u=o(67294),p=o(32125),f=o(24446),h=o.n(f),v=o(98492),b=o(93029),m=o(35243),w=o(12834),y=o(27143),g=o(54869),x=o(16344),k=o(27111),S=o(2763),P=o(72465),E=o(48180),D=o(22074),I=o(29853),O=o(16121),Z=o(17890),V=["id","name","disabled","children","labelText","labelMode","forwardedRef","optionalText","aria-labelledby","hintText","status","statusText","visualPlaceholder","alwaysShowVisualPlaceholder","className","onChange","onBlur","tooltipComponent","portal","statusTextAriaLiveMode","fullWidth","wrapperProps"],_=["theme"],B=["id"];function C(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function T(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?C(Object(o),!0).forEach((function(t){(0,d.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=(0,c.Z)(e);if(t){var n=(0,c.Z)(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return(0,s.Z)(this,o)}}var N="fi-dropdown",j={baseClassName:N,labelIsVisible:"".concat(N,"_label--visible"),inputWrapper:"".concat(N,"_input-wrapper"),button:"".concat(N,"_button"),popover:"".concat(N,"_popover"),itemList:"".concat(N,"_item-list"),item:"".concat(N,"_item"),statusTextHasContent:"".concat(N,"_statusText--has-content"),displayValue:"".concat(N,"_display-value"),open:"".concat(N,"--open"),disabled:"".concat(N,"--disabled"),error:"".concat(N,"--error"),italicize:"".concat(N,"--italicize"),fullWidth:"".concat(N,"--full-width")},A={onItemClick:function(){return null},selectedDropdownValue:null,id:"",focusedItemValue:null,noSelectedStyles:!1,onItemTabPress:function(){return null},onItemMouseOver:function(){return null}},M=u.createContext(A),K=M.Provider,F=M.Consumer,L=function(e){(0,l.Z)(o,e);var t=R(o);function o(e){var r;return(0,n.Z)(this,o),r=t.call(this,e),(0,d.Z)((0,i.Z)(r),"state",{selectedValue:"value"in r.props?r.props.value:"defaultValue"in r.props?r.props.defaultValue:void 0,selectedValueNode:o.getSelectedValueNode("value"in r.props?r.props.value:"defaultValue"in r.props?r.props.defaultValue:void 0,r.props.children),ariaExpanded:!1,showPopover:!1,focusedDescendantId:"value"in r.props&&r.props.value?r.props.value:"defaultValue"in r.props?r.props.defaultValue:r.getFirstItemValue(),preventListScrolling:!1}),(0,d.Z)((0,i.Z)(r),"buttonRef",void 0),(0,d.Z)((0,i.Z)(r),"popoverRef",void 0),(0,d.Z)((0,i.Z)(r),"componentIsMounted",void 0),(0,d.Z)((0,i.Z)(r),"handleSpaceAndEnter",(function(e,t){var o=r.state,n=o.focusedDescendantId,a=o.showPopover;if(a){if(a&&n){var i=e.find((function(e){return(null===e||void 0===e?void 0:e.props.value)===n}));i&&!i.props.disabled&&r.handleItemSelection(i.props.value)}}else if(r.openPopover(),!n){var l=t();l&&r.setState({focusedDescendantId:l.props.value})}})),(0,d.Z)((0,i.Z)(r),"handleKeyDown",(function(e){r.setState({preventListScrolling:!1});var t=r.state,o=t.focusedDescendantId,n=t.ariaExpanded,a=t.showPopover,i=Array.isArray(r.props.children)?r.props.children:void 0!==r.props.children?[r.props.children]:void 0;if(i){var l=i.flat(),s=o?l.findIndex((function(e){return(null===e||void 0===e?void 0:e.props.value)===o})):null,c=function(){return l[null!==s?(s+1)%l.length:0]};switch(e.key){case"ArrowDown":if(e.preventDefault(),a){var d=c();d&&r.setState({focusedDescendantId:d.props.value})}else r.openPopover();break;case"ArrowUp":if(e.preventDefault(),a){var u=l[null!==s&&-1!==s?(s-1+l.length)%l.length:l.length-1];u&&r.setState({focusedDescendantId:u.props.value})}else r.openPopover();break;case" ":e.preventDefault(),r.setState({showPopover:!a,ariaExpanded:!n}),r.handleSpaceAndEnter(l,c);break;case"Enter":e.preventDefault(),r.handleSpaceAndEnter(l,c);break;case"Escape":a&&(e.stopPropagation(),r.focusToButtonAndClosePopover())}}})),(0,d.Z)((0,i.Z)(r),"handleOnBlur",(function(){var e=(0,E.r3)(r.buttonRef);e&&requestAnimationFrame((function(){var t,o,n=null===(t=r.popoverRef.current)||void 0===t?void 0:t.contains(e.activeElement);if(!n){r.props.onBlur&&r.props.onBlur();var a=null===(o=r.buttonRef.current)||void 0===o?void 0:o.contains(e.activeElement),i=n||a;i||r.setState({showPopover:i,ariaExpanded:i})}}))})),r.buttonRef=u.createRef(),r.popoverRef=u.createRef(),r}return(0,a.Z)(o,[{key:"componentDidMount",value:function(){this.componentIsMounted=!0}},{key:"componentWillUnmount",value:function(){this.componentIsMounted=!1}},{key:"isOutsideClick",value:function(e){return!!this.buttonRef&&this.buttonRef.current.contains(e.target)}},{key:"handleItemSelection",value:function(e){var t=this;this.props.onChange&&this.props.onChange(e),this.setState({selectedValue:e,selectedValueNode:o.getSelectedValueNode(e,this.props.children),focusedDescendantId:e,ariaExpanded:!1}),setTimeout((function(){var e;t.componentIsMounted&&(null===(e=t.buttonRef.current)||void 0===e||e.focus(),t.setState({showPopover:!1}))}),10)}},{key:"getFirstItemValue",value:function(){if(Array.isArray(this.props.children)){var e=this.props.children[0];return Array.isArray(e)?e[0].props.value:e.props.value}return this.props.children?this.props.children.props.value:null}},{key:"getDisplayValue",value:function(){var e;return this.props.alwaysShowVisualPlaceholder?this.props.visualPlaceholder:null!==(e=this.state.selectedValueNode)&&void 0!==e?e:this.props.visualPlaceholder}},{key:"focusToButtonAndClosePopover",value:function(){var e;this.setState({ariaExpanded:!1}),null===(e=this.buttonRef.current)||void 0===e||e.focus(),this.setState({showPopover:!1})}},{key:"openPopover",value:function(){var e=this;this.setState({showPopover:!0,ariaExpanded:!0}),setTimeout((function(){var t;null===(t=e.popoverRef.current)||void 0===t||t.focus()}),200)}},{key:"render",value:function(){var e,t=this,o=this.props,n=o.id,a=o.name,i=o.disabled,l=o.children,s=o.labelText,c=o.labelMode,p=o.forwardedRef,f=o.optionalText,m=o["aria-labelledby"],S=o.hintText,P=o.status,_=o.statusText,B=o.visualPlaceholder,C=o.alwaysShowVisualPlaceholder,R=o.className;o.onChange,o.onBlur;var A=o.tooltipComponent,M=o.portal,F=void 0===M||M,L=o.statusTextAriaLiveMode,W=void 0===L?"assertive":L,z=o.fullWidth,H=o.wrapperProps,q=(0,r.Z)(o,V);if(u.Children.count(l)<1)return(0,b.j)().warn("Dropdown '".concat(s,"' does not contain items")),null;var G=this.state,U=G.selectedValue,Y=G.ariaExpanded,J=G.showPopover,Q=G.focusedDescendantId,X=G.preventListScrolling,$="".concat(n,"-label"),ee="".concat(n,"_button"),te="".concat(n,"-popover"),oe=S?"".concat(n,"-hintText"):void 0,re=_?"".concat(n,"-statusText"):void 0,ne="".concat(n,"-displayValue"),ae=Q?"".concat(n,"-").concat(Q):"",ie=this.getDisplayValue(),le=B&&!C&&!U,se=p||null;return u.createElement(y.hh,T({className:h()(R,N,(e={},(0,d.Z)(e,j.disabled,!!i),(0,d.Z)(e,j.open,!!J),(0,d.Z)(e,j.error,"error"===P),(0,d.Z)(e,j.italicize,le),(0,d.Z)(e,j.fullWidth,z),e)),id:n},H),u.createElement(k._,{id:$,labelMode:c,optionalText:f,className:h()((0,d.Z)({},j.labelIsVisible,"hidden"!==c)),tooltipComponent:A,onClick:function(){var e;i||(null===(e=t.buttonRef.current)||void 0===e||e.focus())}},s),u.createElement(O.Q,{id:oe},S),u.createElement(y.hh,{className:j.inputWrapper},u.createElement(w.S,T(T(T({"aria-haspopup":"listbox",tabIndex:i?-1:0,forwardedRef:(0,E.K_)(this.buttonRef,se),id:ee,className:j.button},(0,v.I)("aria-labelledby",[ne,m,$])),(0,v.I)("aria-describedby",[re,oe])),{},{"aria-owns":te,"aria-expanded":Y,onClick:function(){J?t.focusToButtonAndClosePopover():t.openPopover()},onKeyDown:this.handleKeyDown,onBlur:this.handleOnBlur},q),u.createElement(x.I,{className:j.displayValue,id:ne},ie),u.createElement(g.X,{tabIndex:-1,type:"hidden",name:a,value:U||""})),u.createElement(Z.r,{id:re,className:h()((0,d.Z)({},j.statusTextHasContent,!!_)),status:P,disabled:i,ariaLiveMode:W},_),J&&u.createElement(D.J,{sourceRef:this.buttonRef,onClickOutside:function(e){t.isOutsideClick(e)||t.setState({showPopover:!1,ariaExpanded:!1})},matchWidth:!0,onKeyDown:this.handleKeyDown,portal:F},u.createElement(K,{value:{onItemClick:function(e){return t.handleItemSelection(e)},selectedDropdownValue:U,id:n,focusedItemValue:Q,noSelectedStyles:C,onItemTabPress:function(){return t.focusToButtonAndClosePopover()},onItemMouseOver:function(e){return t.setState({preventListScrolling:!0,focusedDescendantId:e})}}},u.createElement(I.A,{id:te,ref:this.popoverRef,focusedDescendantId:ae,className:j.itemList,onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),t.focusToButtonAndClosePopover())},preventScrolling:X},l||[])))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.value;return"value"in e&&r!==t.selectedValue?{selectedValue:r,selectedValueNode:o.getSelectedValueNode(r,e.children)}:null}},{key:"getSelectedValueNode",value:function(e,t){if(void 0!==e&&void 0!==t){if(!Array.isArray(t))return t.props.children;for(var o=t.flat(),r=0;r<o.length;r+=1){var n=o[r];if(n.props.value===e)return n.props.children}}}}]),o}(u.Component),W=(0,p.ZP)((function(e){e.theme;var t=(0,r.Z)(e,_);return u.createElement(L,T({},t))})).withConfig({componentId:"sc-ykxi7a-0"})(["",""],(function(e){return function(e){return(0,p.iv)(["width:290px;.fi-dropdown_item-list{padding-top:0;}&.fi-dropdown{display:inline-block;.fi-dropdown_label--visible{margin-bottom:",";}.fi-hint-text{margin-bottom:",";}.fi-status-text{line-height:1.1rem;&.fi-dropdown_statusText--has-content{margin-top:",";}}.fi-dropdown_button{"," position:relative;display:inline-block;word-break:break-word;width:100%;overflow-wrap:break-word;height:40px;padding:7px 38px 7px 7px;border-color:",";text-align:left;line-height:1.5;background-color:",";box-shadow:",";cursor:pointer;user-select:none;white-space:nowrap;&:focus-visible{outline:none;}&:before{content:'';position:absolute;top:50%;right:16px;margin-top:-3px;border-style:solid;border-color:"," transparent transparent transparent;border-width:6px 4px 0 4px;}&[aria-expanded='true']:before{border-color:transparent transparent "," transparent;border-width:0 4px 6px 4px;}}.fi-dropdown_display-value{width:100%;height:100%;display:inline-block;line-height:1.5;overflow:hidden;}.fi-dropdown_popover{"," "," margin-top:-1px;padding:0;box-sizing:border-box;font-size:100%;border:0;background-color:",";border-color:",";border-style:solid;border-width:0 1px 1px 1px;border-radius:0px 0px "," ",";max-height:265px;overflow-y:auto;overflow-x:hidden;&:focus-within{outline:0;box-shadow:none;}}&--full-width{width:100%;}&--open{.fi-dropdown_button{border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;padding-bottom:8px;}}&--error{.fi-dropdown_button{border-color:",";border-width:2px;}}&--italicize{.fi-dropdown_button{font-style:italic;color:",";opacity:1;}}&--disabled{.fi-dropdown_input-wrapper{cursor:not-allowed;.fi-dropdown_button{background-color:",";color:",";opacity:1;pointer-events:none;&:before{border-color:"," transparent transparent transparent;}}}}&:not(.fi-dropdown--open){.fi-dropdown_button{&:focus{"," position:relative;&:after{","}}}}}"],e.spacing.xs,e.spacing.xs,e.spacing.xxs,(0,S.qH)(e),e.colors.depthDark3,e.colors.whiteBase,e.shadows.actionElementBoxShadow,e.colors.blackBase,e.colors.blackBase,(0,S.bG)(e),e.typography.actionElementInnerText,e.colors.whiteBase,e.colors.depthDark3,e.radiuses.basic,e.radiuses.basic,e.colors.alertBase,e.colors.depthDark2,e.colors.depthLight3,e.colors.depthBase,e.colors.depthBase,e.focuses.highContrastFocus,e.focuses.absoluteFocus)}(e.theme)})),z=(0,u.forwardRef)((function(e,t){var o=e.id,n=(0,r.Z)(e,B);return u.createElement(P.cY,null,(function(e){var r=e.suomifiTheme;return u.createElement(m.z,{id:o},(function(e){return u.createElement(W,T({theme:r,id:e,forwardedRef:t},n))}))}))}));z.displayName="Dropdown"},99533:function(e,t,o){o.d(t,{h:function(){return g}});var r=o(41518),n=o(67434),a=o(67294),i=o(32125),l=o(33539),s=o(2763),c=o(71153),d=o(24446),u=o.n(d),p=o(72465),f=o(73705),h=o(48180),v=["children","className","theme","consumer","value","disabled"];function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach((function(t){(0,r.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var w={hasKeyboardFocus:"".concat(c.p3.item,"--hasKeyboardFocus"),selected:"".concat(c.p3.item,"--selected"),disabled:"".concat(c.p3.item,"--disabled"),noSelectedStyles:"".concat(c.p3.item,"--noSelectedStyles"),icon:"".concat(c.p3.item,"_icon")},y=(0,i.ZP)((function(e){var t,o=e.children,i=e.className;e.theme;var s=e.consumer,d=e.value,p=e.disabled,b=void 0!==p&&p,y=(0,n.Z)(e,v),g=s.selectedDropdownValue===d,x=s.focusedItemValue===d,k="".concat(s.id,"-").concat(d),S=(0,a.useRef)(null);(0,a.useLayoutEffect)((function(){var e,t;(null===(e=(0,h.r3)(S).activeElement)||void 0===e?void 0:e.id)!==k&&x&&(null===(t=S.current)||void 0===t||t.focus({preventScroll:!0}))}),[s.focusedItemValue]);return a.createElement(f.r,m({className:u()(i,c.p3.item,(t={},(0,r.Z)(t,w.hasKeyboardFocus,x),(0,r.Z)(t,w.selected,g),(0,r.Z)(t,w.disabled,b),(0,r.Z)(t,w.noSelectedStyles,s.noSelectedStyles),t)),tabIndex:x?0:-1,role:"option","aria-disabled":b,"aria-selected":g,id:k,onClick:function(){b||s.onItemClick(d)},forwardedRef:S,onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),s.onItemTabPress())},onMouseOver:function(){s.onItemMouseOver(d)}},y),o,g&&!s.noSelectedStyles&&a.createElement(l.N,{className:w.icon,"aria-hidden":!0}))})).withConfig({componentId:"sc-18aaa06-0"})(["",""],(function(e){return function(e){return(0,i.iv)(["&.fi-dropdown_item{"," "," cursor:pointer;line-height:1.5;padding:",";border:0;position:relative;&:focus{outline:0;}&:hover{background-color:",";color:",";}.fi-dropdown_item_icon{position:absolute;top:14px;right:10px;height:12px;width:12px;}&--selected{background-color:",";color:",";}&--hasKeyboardFocus{background-color:",";color:",";}&--noSelectedStyles{&.fi-dropdown_item--selected{background-color:",";color:",";&.fi-dropdown_item--hasKeyboardFocus{background-color:",";color:",";}}}&--disabled{color:",";cursor:not-allowed;&:hover{color:",";}}@media (forced-colors:active){&--hasKeyboardFocus,&:hover{background-color:Highlight;}}}"],(0,s.bG)(e),e.typography.actionElementInnerText,e.spacing.insetM,e.colors.highlightBase,e.colors.whiteBase,e.colors.depthSecondaryDark1,e.colors.blackBase,e.colors.highlightBase,e.colors.whiteBase,e.colors.whiteBase,e.colors.blackBase,e.colors.highlightBase,e.colors.whiteBase,e.colors.depthBase,e.colors.depthBase)}(e.theme)})),g=function(e){return a.createElement(p.cY,null,(function(t){var o=t.suomifiTheme;return a.createElement(c._e,null,(function(t){return a.createElement(y,m({theme:o,consumer:t},e))}))}))};g.displayName="DropdownItem"}}]);