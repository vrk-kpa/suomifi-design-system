"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9533],{71153:function(e,t,o){o.d(t,{Lt:function(){return H},_e:function(){return L},p3:function(){return A}});var r=o(67434),n=o(60257),a=o(675),i=o(62991),l=o(98607),s=o(78502),c=o(26274),u=o(41518),d=o(67294),p=o(32125),f=o(94184),h=o.n(f),v=o(98492),b=o(93029),m=o(35243),w=o(12834),y=o(27143),x=o(54869),g=o(16344),k=o(27111),P=o(2763),S=o(72465),D=o(48180),O=o(22074),T=o(29853),V=o(16121),I=o(17890),_=o(44934),E=["id","name","disabled","children","labelText","labelMode","forwardedRef","optionalText","aria-labelledby","hintText","status","statusText","visualPlaceholder","alwaysShowVisualPlaceholder","className","onChange","onBlur","tooltipComponent","portal","statusTextAriaLiveMode","fullWidth","wrapperProps"],Z=["theme"],C=["id"];function B(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function R(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?B(Object(o),!0).forEach((function(t){(0,u.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=(0,c.Z)(e);if(t){var n=(0,c.Z)(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return(0,s.Z)(this,o)}}var N="fi-dropdown",A={baseClassName:N,labelIsVisible:"".concat(N,"_label--visible"),inputWrapper:"".concat(N,"_input-wrapper"),button:"".concat(N,"_button"),popover:"".concat(N,"_popover"),itemList:"".concat(N,"_item-list"),item:"".concat(N,"_item"),statusTextHasContent:"".concat(N,"_statusText--has-content"),displayValue:"".concat(N,"_display-value"),open:"".concat(N,"--open"),disabled:"".concat(N,"--disabled"),error:"".concat(N,"--error"),italicize:"".concat(N,"--italicize"),fullWidth:"".concat(N,"--full-width")},K={onItemClick:function(){return null},selectedDropdownValue:null,id:"",focusedItemValue:null,noSelectedStyles:!1,onItemTabPress:function(){return null}},F=d.createContext(K),z=F.Provider,L=F.Consumer,M=function(e){(0,l.Z)(o,e);var t=j(o);function o(e){var r;return(0,n.Z)(this,o),r=t.call(this,e),(0,u.Z)((0,i.Z)(r),"state",{selectedValue:"value"in r.props?r.props.value:"defaultValue"in r.props?r.props.defaultValue:void 0,selectedValueText:o.parseSelectedValueText("value"in r.props?r.props.value:"defaultValue"in r.props?r.props.defaultValue:void 0,r.props.children),showPopover:!1,focusedDescendantId:"value"in r.props&&r.props.value?r.props.value:"defaultValue"in r.props?r.props.defaultValue:r.getFirstItemValue()}),(0,u.Z)((0,i.Z)(r),"buttonRef",void 0),(0,u.Z)((0,i.Z)(r),"popoverRef",void 0),(0,u.Z)((0,i.Z)(r),"handleKeyDown",(function(e){var t=r.state,o=t.focusedDescendantId,n=t.showPopover,a=Array.isArray(r.props.children)?r.props.children:[r.props.children];if(a){var i=o?a.findIndex((function(e){return(null===e||void 0===e?void 0:e.props.value)===o})):null,l=function(){return a[null!==i?(i+1)%a.length:0]};switch(e.key){case"ArrowDown":if(e.preventDefault(),n){var s=l();s&&r.setState({focusedDescendantId:s.props.value})}else r.openPopover();break;case"ArrowUp":if(e.preventDefault(),n){var c=a[null!==i&&-1!==i?(i-1+a.length)%a.length:a.length-1];c&&r.setState({focusedDescendantId:c.props.value})}else r.openPopover();break;case" ":if(e.preventDefault(),r.setState({showPopover:!n}),n){if(n&&o){var u=a.find((function(e){return(null===e||void 0===e?void 0:e.props.value)===o}));u&&r.handleItemSelection(u.props.value)}}else if(r.openPopover(),!o){var d=l();d&&r.setState({focusedDescendantId:d.props.value})}break;case"Enter":if(e.preventDefault(),n){if(o&&n){var p=a.find((function(e){return(null===e||void 0===e?void 0:e.props.value)===o}));p&&r.handleItemSelection(p.props.value)}}else if(r.openPopover(),!o){var f=l();f&&r.setState({focusedDescendantId:f.props.value})}break;case"Escape":n&&(e.stopPropagation(),r.focusToButtonAndClosePopover())}}})),(0,u.Z)((0,i.Z)(r),"handleOnBlur",(function(){var e=(0,D.r3)(r.buttonRef);e&&requestAnimationFrame((function(){var t,o,n=null===(t=r.popoverRef.current)||void 0===t?void 0:t.contains(e.activeElement);if(!n){r.props.onBlur&&r.props.onBlur();var a=null===(o=r.buttonRef.current)||void 0===o?void 0:o.contains(e.activeElement),i=n||a;i||r.setState({showPopover:i})}}))})),r.buttonRef=d.createRef(),r.popoverRef=d.createRef(),r}return(0,a.Z)(o,[{key:"isOutsideClick",value:function(e){return!!this.buttonRef&&this.buttonRef.current.contains(e.target)}},{key:"handleItemSelection",value:function(e){var t;this.props.onChange&&this.props.onChange(e),this.setState({selectedValue:e,selectedValueText:o.parseSelectedValueText(e,this.props.children),focusedDescendantId:e}),null===(t=this.buttonRef.current)||void 0===t||t.focus(),this.setState({showPopover:!1})}},{key:"getFirstItemValue",value:function(){return Array.isArray(this.props.children)?this.props.children[0].props.value:this.props.children?this.props.children.props.value:null}},{key:"getDisplayValue",value:function(){var e;return this.props.alwaysShowVisualPlaceholder?this.props.visualPlaceholder:null!==(e=this.state.selectedValueText)&&void 0!==e?e:this.props.visualPlaceholder}},{key:"focusToButtonAndClosePopover",value:function(){var e;null===(e=this.buttonRef.current)||void 0===e||e.focus(),this.setState({showPopover:!1})}},{key:"openPopover",value:function(){var e=this;this.setState({showPopover:!0}),setTimeout((function(){var t;null===(t=e.popoverRef.current)||void 0===t||t.focus()}),200)}},{key:"render",value:function(){var e,t=this,o=this.props,n=o.id,a=o.name,i=o.disabled,l=o.children,s=o.labelText,c=o.labelMode,p=o.forwardedRef,f=o.optionalText,m=o["aria-labelledby"],P=o.hintText,S=o.status,Z=o.statusText,C=o.visualPlaceholder,B=o.alwaysShowVisualPlaceholder,j=o.className;o.onChange,o.onBlur;var K=o.tooltipComponent,F=o.portal,L=void 0===F||F,M=o.statusTextAriaLiveMode,W=void 0===M?"assertive":M,H=o.fullWidth,q=o.wrapperProps,G=(0,r.Z)(o,E);if(d.Children.count(l)<1)return(0,b.j)().warn("Dropdown '".concat(s,"' does not contain items")),null;var J=this.state,Y=J.selectedValue,Q=J.selectedValueText,U=J.showPopover,X=J.focusedDescendantId,$="".concat(n,"-label"),ee="".concat(n,"_button"),te="".concat(n,"-popover"),oe=P?"".concat(n,"-hintText"):void 0,re=Z?"".concat(n,"-statusText"):void 0,ne=Q?"".concat(n,"-displayValue"):void 0,ae=X?"".concat(n,"-").concat(X):"",ie=this.getDisplayValue(),le=C&&!B&&!Y,se=p||null;return d.createElement(y.hh,R({className:h()(j,N,(e={},(0,u.Z)(e,A.disabled,!!i),(0,u.Z)(e,A.open,!!U),(0,u.Z)(e,A.error,"error"===S),(0,u.Z)(e,A.italicize,le),(0,u.Z)(e,A.fullWidth,H),e)),id:n},q),d.createElement(k._,{id:$,labelMode:c,optionalText:f,className:h()((0,u.Z)({},A.labelIsVisible,"hidden"!==c)),tooltipComponent:K,onClick:function(){var e;i||(null===(e=t.buttonRef.current)||void 0===e||e.focus())}},s),d.createElement(V.Q,{id:oe},P),d.createElement(y.hh,{className:A.inputWrapper},d.createElement(w.S,R(R(R({"aria-haspopup":"listbox",tabIndex:i?-1:0,forwardedRef:(0,D.K_)(this.buttonRef,se),id:ee,className:A.button},(0,v.I5)("aria-labelledby",[ne,m,$])),(0,v.I5)("aria-describedby",[re,oe])),{},{"aria-owns":te,"aria-expanded":U,onClick:function(){U?t.focusToButtonAndClosePopover():t.openPopover()},onKeyDown:this.handleKeyDown,onBlur:this.handleOnBlur},G),d.createElement(g.I,{className:A.displayValue},ie),d.createElement(x.X,{tabIndex:-1,type:"hidden",name:a,value:Y||""})),d.createElement(_.T,{id:ne},ie),d.createElement(I.r,{id:re,className:h()((0,u.Z)({},A.statusTextHasContent,!!Z)),status:S,disabled:i,ariaLiveMode:W},Z),U&&d.createElement(O.J,{sourceRef:this.buttonRef,onClickOutside:function(e){t.isOutsideClick(e)||t.setState({showPopover:!1})},matchWidth:!0,onKeyDown:this.handleKeyDown,portal:L},d.createElement(z,{value:{onItemClick:function(e){return t.handleItemSelection(e)},selectedDropdownValue:Y,id:n,focusedItemValue:X,noSelectedStyles:B,onItemTabPress:function(){return t.focusToButtonAndClosePopover()}}},d.createElement(T.A,{id:te,ref:this.popoverRef,focusedDescendantId:ae,className:A.itemList,onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),t.focusToButtonAndClosePopover())}},l||[])))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.value;return"value"in e&&r!==t.selectedValue?{selectedValue:r,selectedValueText:o.parseSelectedValueText(r,e.children)}:null}},{key:"parseSelectedValueText",value:function(e,t){if(void 0!==e&&void 0!==t){if(!Array.isArray(t))return(0,D.j1)(t);for(var o=0;o<t.length;o+=1){var r=t[o];if(r.props.value===e)return(0,D.j1)(r)}}}}]),o}(d.Component),W=(0,p.ZP)((function(e){e.theme;var t=(0,r.Z)(e,Z);return d.createElement(M,R({},t))})).withConfig({componentId:"sc-ykxi7a-0"})(["",""],(function(e){return function(e){return(0,p.iv)(["width:290px;.fi-dropdown_item-list{padding-top:0;}&.fi-dropdown{display:inline-block;.fi-dropdown_label--visible{margin-bottom:",";}.fi-hint-text{margin-bottom:",";}.fi-status-text{line-height:1.1rem;&.fi-dropdown_statusText--has-content{margin-top:",";}}.fi-dropdown_button{"," position:relative;display:inline-block;word-break:break-word;width:100%;overflow-wrap:break-word;height:40px;padding:7px 38px 7px 7px;border-color:",";text-align:left;line-height:1.5;background-color:",";box-shadow:",";cursor:pointer;user-select:none;white-space:nowrap;&:focus-visible{outline:none;}&:before{content:'';position:absolute;top:50%;right:16px;margin-top:-3px;border-style:solid;border-color:"," transparent transparent transparent;border-width:6px 4px 0 4px;}&[aria-expanded='true']:before{border-color:transparent transparent "," transparent;border-width:0 4px 6px 4px;}}.fi-dropdown_display-value{width:100%;height:100%;display:inline-block;line-height:1.5;overflow:hidden;}.fi-dropdown_popover{"," "," margin-top:-1px;padding:0;box-sizing:border-box;font-size:100%;border:0;background-color:",";border-color:",";border-style:solid;border-width:0 1px 1px 1px;border-radius:0px 0px "," ",";max-height:265px;overflow-y:auto;overflow-x:hidden;&:focus-within{outline:0;box-shadow:none;}}&--full-width{width:100%;}&--open{.fi-dropdown_button{border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;padding-bottom:8px;}}&--error{.fi-dropdown_button{border-color:",";border-width:2px;}}&--italicize{.fi-dropdown_button{font-style:italic;color:",";opacity:1;}}&--disabled{.fi-dropdown_input-wrapper{cursor:not-allowed;.fi-dropdown_button{background-color:",";color:",";opacity:1;pointer-events:none;&:before{border-color:"," transparent transparent transparent;}}}}&:not(.fi-dropdown--open){.fi-dropdown_button{&:focus{outline:3px solid transparent;position:relative;&:after{","}}}}}"],e.spacing.xs,e.spacing.xs,e.spacing.xxs,(0,P.qH)(e),e.colors.depthDark3,e.colors.whiteBase,e.shadows.actionElementBoxShadow,e.colors.blackBase,e.colors.blackBase,(0,P.bG)(e),e.typography.actionElementInnerText,e.colors.whiteBase,e.colors.depthDark3,e.radiuses.basic,e.radiuses.basic,e.colors.alertBase,e.colors.depthDark2,e.colors.depthLight3,e.colors.depthBase,e.colors.depthBase,e.focuses.absoluteFocus)}(e.theme)})),H=(0,d.forwardRef)((function(e,t){var o=e.id,n=(0,r.Z)(e,C);return d.createElement(S.cY,null,(function(e){var r=e.suomifiTheme;return d.createElement(m.z,{id:o},(function(e){return d.createElement(W,R({theme:r,id:e,forwardedRef:t},n))}))}))}));H.displayName="Dropdown"},99533:function(e,t,o){o.d(t,{h:function(){return y}});var r=o(41518),n=o(67434),a=o(67294),i=o(32125),l=o(2763),s=o(71153),c=o(94184),u=o.n(c),d=o(72465),p=o(73705),f=o(49651),h=["children","className","theme","consumer","value"];function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach((function(t){(0,r.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var m={hasKeyboardFocus:"".concat(s.p3.item,"--hasKeyboardFocus"),selected:"".concat(s.p3.item,"--selected"),noSelectedStyles:"".concat(s.p3.item,"--noSelectedStyles"),icon:"".concat(s.p3.item,"_icon")},w=(0,i.ZP)((function(e){var t,o=e.children,i=e.className;e.theme;var l=e.consumer,c=e.value,d=(0,n.Z)(e,h),v=l.selectedDropdownValue===c,w=l.focusedItemValue===c,y="".concat(l.id,"-").concat(c);return a.createElement(p.r,b({className:u()(i,s.p3.item,(t={},(0,r.Z)(t,m.hasKeyboardFocus,w),(0,r.Z)(t,m.selected,v),(0,r.Z)(t,m.noSelectedStyles,l.noSelectedStyles),t)),tabIndex:-1,role:"option","aria-selected":v,id:y,onClick:function(){l.onItemClick(c)}},d),o,v&&!l.noSelectedStyles&&a.createElement(f.JO,{icon:"check",className:m.icon,"aria-hidden":!0}))})).withConfig({componentId:"sc-18aaa06-0"})(["",""],(function(e){return function(e){return(0,i.iv)(["&.fi-dropdown_item{"," "," cursor:pointer;line-height:1.5;padding:",";border:0;position:relative;&:focus{outline:0;}&:hover{background-color:",";color:",";}.fi-dropdown_item_icon{position:absolute;top:14px;right:10px;height:12px;width:12px;}&--selected{background-color:",";color:",";}&--hasKeyboardFocus{background-color:",";color:",";}&--noSelectedStyles{&.fi-dropdown_item--selected{background-color:",";color:",";&.fi-dropdown_item--hasKeyboardFocus{background-color:",";color:",";}}}@media (forced-colors:active){&--hasKeyboardFocus,&:hover{background-color:Highlight;}}}"],(0,l.bG)(e),e.typography.actionElementInnerText,e.spacing.insetM,e.colors.highlightBase,e.colors.whiteBase,e.colors.depthSecondaryDark1,e.colors.blackBase,e.colors.highlightBase,e.colors.whiteBase,e.colors.whiteBase,e.colors.blackBase,e.colors.highlightBase,e.colors.whiteBase)}(e.theme)})),y=function(e){return a.createElement(d.cY,null,(function(t){var o=t.suomifiTheme;return a.createElement(s._e,null,(function(t){return a.createElement(w,b({theme:o,consumer:t},e))}))}))};y.displayName="DropdownItem"}}]);