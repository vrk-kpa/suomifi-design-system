(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{399:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});var i=a(32),r=(a(1),a(406)),s=a(409),n=a(423),o=a(422),l=a(458),d=a(440),u=a(421),c=a(407);t.default=Object(s.withI18next)()(function(){return Object(i.a)(r.NamespacesConsumer,{ns:["typography"]},function(e){return Object(i.a)(n.a,{sideNavData:Object(l.a)(e)},Object(i.a)(o.a,{title:e("title")}),Object(i.a)(c.a.h1,null,e("title")),Object(i.a)("p",null,Object(i.a)(c.b.lead,null,e("intro"))),Object(i.a)(d.a,{title:e("note.title"),items:e("note.items")}),e("sections").map(function(e,t){return Object(i.a)(u.a,{key:t,mainTitle:e.title,paragraphs:e.paragraphs,links:e.links})}))})});var f="2520468691"},415:function(e,t,a){"use strict";var i=a(32),r=(a(1),a(411)),s=function(e){return e&&!!e.text&&!!e.url};t.a=function(e){var t=e.links,a=void 0===t?[]:t;if(1===(a=function(e){return e.filter(s)}(a)).length){var n=a[0];return Object(i.a)(r.a,{text:n.text,url:n.url})}return a.length>1?Object(i.a)("ul",{style:{margin:0,padding:0,listStyle:"none"}},a.map(function(e,t){return Object(i.a)("li",{key:t,style:{margin:"1rem 0"}},Object(i.a)(r.a,{text:e.text,url:e.url}))})):null}},420:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAB2klEQVQoz2P4//8/AxAwmpqZcx0/fd7g4vW7Jheu3TE+f+Wm2ZnzF0UZoEA9c0swEM8wyN/WY1y4vc+wYHufCZDWztnaCxSfqJG1RRmsEGggI5Bibe/qq/jw4cP/V69e/Xn69NmvH9+//X/1+s0muIFp6zJUU9ftMSvYuNahbMsG29LNGxzLt2zQy96wXiV13Wb19HXaMANBFE9Nc++sTSef/t959snfA5ee/zly4/3/m4/eHINayPDv//8cIPvI1x9/trz88HP7uy+/tr/48GM7UAyEd3/89lsX2YW8PROnzzh5693/nWce/dl3/vHvQ9fe/L/77P1xoDwzSN2zt19DX3/8PvPl+++9z99963/x/ls/iH754Xv/qw/fJ91/8RnFy7yTp86YAWT///Xt45+vn979AbF/fP9+Ytu5FywgdU/e/Sp6+Obn+fMPPu8D4oMXgPj03U8Hrz35ehAod/Txu1/6yAbydfdNnAoy5NvXb38+ffwINvDb9x+HYGG46+DR2J0HjqzYe/jEbCCeC8J7gBgoPhcovnDngaNqKAb2TpgMNvDF289/Xr//DDPwML+KNjgM12zamrF645a9G7ftXLd+644N67ZsB+M1m7duWL1p6xagPDhSAETuVsS/070NAAAAAElFTkSuQmCC",aspectRatio:2.8260869565217392,src:"/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/bb341/buttonsMobileFI.png",srcSet:"/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/7c0ed/buttonsMobileFI.png 200w,\n/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/647de/buttonsMobileFI.png 400w,\n/suomifi-design-system/static/2820e7771fbb75085aba3492a8b0b8bb/bb341/buttonsMobileFI.png 715w",sizes:"(max-width: 715px) 100vw, 715px"}}}}}},421:function(e,t,a){"use strict";var i=a(32),r=a(1),s=a(172),n=a.n(s),o=a(20),l=a.n(o),d=a(86),u=a.n(d),c=a(420),f=a(412),p=a(429),g=a.n(p),b=function(e){return Object(i.a)(f.StaticQuery,{query:"3539101165",render:function(t){return Object(i.a)(g.a,u()({fluid:t.image.childImageSharp.fluid},e))},data:c})},h=function(e){function t(){for(var t,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).images={ButtonsMobileFI:b},t}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.imgKey,a=n()(e,["imgKey"]),r=this.images[t];return Object(i.a)(r,a)},t}(r.Component),m=a(407),y=a(415),v=function(e){return e&&!!e.text},S=function(e){var t=e.items,a=void 0===t?[]:t;return(a=function(e){return e.filter(v)}(a)).length>0?Object(i.a)("ul",null,a.map(function(e,t){return Object(i.a)("li",{key:t},Object(i.a)(m.b,null,e.text))})):null};t.a=function(e){var t=e.mainTitle,a=e.title,r=e.paragraphs,s=e.links;return Object(i.a)("section",null,!!t&&Object(i.a)(m.a.h2,null,t),!!a&&Object(i.a)(m.a.h3,null,a),r.map(function(e,t){return Object(i.a)("div",{key:t},!!e["image.key"]&&Object(i.a)("div",{"aria-hidden":!0},Object(i.a)(h,{imgKey:e["image.key"],alt:e["image.alt"]})),!!e.text&&Object(i.a)("p",null,Object(i.a)(m.b,null,e.text)),Object(i.a)("div",{style:{margin:"1rem 0"}},Object(i.a)(S,{items:e.listItems})))}),Object(i.a)("div",{style:{margin:"1rem 0 2rem"}},Object(i.a)(y.a,{links:s})))}},429:function(e,t,a){"use strict";var i=a(28);t.__esModule=!0,t.default=void 0;var r,s=i(a(20)),n=i(a(87)),o=i(a(172)),l=i(a(86)),d=i(a(1)),u=i(a(14)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g=new WeakMap;var b=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),g.set(e,t)),function(){a.unobserve(e),g.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+r+t+n+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,u=e.onError,c=e.nativeLazyLoadSupported,f=e.loading,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),g={};return c&&(g.loading=f),d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},p,{onLoad:n,onError:u,ref:t},g,{style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});m.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,o=!1,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(i=!0,o=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var u=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:s,hasNoScript:u,seenBefore:l,nativeLazyLoadSupported:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=b(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,b=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,S=e.Tag,w=e.itemProp,O=(e.critical,c(this.props).loading);var L=this.state.nativeLazyLoadSupported,j=this.state.imgLoaded||!1===this.state.fadeIn,A=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:j?1:0,transition:A?"opacity "+v+"ms":"none"},o),I="boolean"==typeof y?"lightgray":y,E={transitionDelay:v+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},A&&E,o,f),N={title:t,alt:this.state.isVisible?"":a,style:x,className:p};if(g){var R=g;return d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),I&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&E)}),R.base64&&d.default.createElement(m,(0,l.default)({src:R.base64},N)),R.tracedSVG&&d.default.createElement(m,(0,l.default)({src:R.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement(m,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,nativeLazyLoadSupported:L,loading:O})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,loading:O},R))}}))}if(b){var k=b,M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},s);return"inherit"===s.display&&delete M.display,d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},I&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:I,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},A&&E)}),k.base64&&d.default.createElement(m,(0,l.default)({src:k.base64},N)),k.tracedSVG&&d.default.createElement(m,(0,l.default)({src:k.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement(m,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,nativeLazyLoadSupported:L,loading:O})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,loading:O},k))}}))}return null},t}(d.default.Component);y.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),S=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"])};var w=y;t.default=w},440:function(e,t,a){"use strict";var i=a(32),r=(a(1),a(432)),s=a(407);t.a=function(e){var t=e.title,a=e.items;return Object(i.a)("section",{style:{background:r.a.colors.highlightLight50,margin:"2rem 0",padding:"20px",border:"1px solid "+r.a.colors.depthLight13}},Object(i.a)(s.a.h3,{as:"h2"},t),Object(i.a)("ul",{style:{margin:0,padding:"0 0 0 2rem"}},a.map(function(e,t){return!!e&&Object(i.a)("li",{key:t,style:{marginTop:"1rem"}},Object(i.a)(s.b,null,e))})))}},458:function(e,t,a){"use strict";var i=a(32),r=(a(1),a(466));t.a=function(e){return{title:e("styles:title"),icon:Object(i.a)(r.a,{icon:"staticIllustrationWand"}),items:[{to:"/styles/",showAsTo:"/styles/info/",label:e("styles:info.title")},{to:"/styles/colors/",label:e("colors:title")},{to:"/styles/typography/",label:e("typography:title")}]}}}}]);
//# sourceMappingURL=component---src-pages-styles-typography-tsx-f18df1316216377a9152.js.map