!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
 * modernizr v3.6.0
 * Build https://modernizr.com/download?-svg-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */!function(e,t,n){var s=[],i={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},a=function(){};a.prototype=i,a=new a;var o=[];var c=t.documentElement,l="svg"===c.nodeName.toLowerCase();
/*!
  {
    "name": "SVG",
    "property": "svg",
    "caniuse": "svg",
    "tags": ["svg"],
    "authors": ["Erik Dahlstrom"],
    "polyfills": [
      "svgweb",
      "raphael",
      "amplesdk",
      "canvg",
      "svg-boilerplate",
      "sie",
      "dojogfx",
      "fabricjs"
    ]
  }
  !*/
a.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,i,c,l,u,d;for(var f in s)if(s.hasOwnProperty(f)){if(e=[],(t=s[f]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(u=t.fn,d="function",i=r(u)===d?t.fn():t.fn,c=0;c<e.length;c++)1===(l=e[c].split(".")).length?a[l[0]]=i:(!a[l[0]]||a[l[0]]instanceof Boolean||(a[l[0]]=new Boolean(a[l[0]])),a[l[0]][l[1]]=i),o.push((i?"":"no-")+l.join("-"))}}(),function(e){var t=c.className,n=a._config.classPrefix||"";if(l&&(t=t.baseVal),a._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}a._config.enableClasses&&(t+=" "+n+e.join(" "+n),l?c.className.baseVal=t:c.className=t)}(o),delete i.addTest,delete i.addAsyncTest;for(var u=0;u<a._q.length;u++)a._q[u]();e.Modernizr=a}(window,document)},function(e,t,n){var r;
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
!function(e){var t,n,r,s,i,a,o,c=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(c)&&c.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(n=document.createElement("source"),r=function(e){var t,r,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)},n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i))}(window),
/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */
function(s,i,a){"use strict";var o,c,l;i.createElement("picture");var u={},d=!1,f=function(){},p=i.createElement("img"),m=p.getAttribute,h=p.setAttribute,g=p.removeAttribute,A=i.documentElement,v={},y={algorithm:""},b=navigator.userAgent,z=/rident/.test(b)||/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1>35,w="currentSrc",E=/\s+\+?\d+(e\d+)?w/,S=/(\([^)]+\))?\s*(.+)/,C=s.picturefillCFG,x="font-size:100%!important;",T=!0,M={},L={},R=s.devicePixelRatio,P={px:1,in:96},_=i.createElement("a"),B=!1,N=/^[ \t\n\r\u000c]+/,W=/^[, \t\n\r\u000c]+/,$=/^[^ \t\n\r\u000c]+/,D=/[,]+$/,k=/^\d+$/,O=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,I=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},F=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}};function U(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var j,H,Q,q,G,V,J,K,X,Y,Z,ee,te,ne,re,se,ie=(j=/^([\d\.]+)(em|vw|px)$/,H=F(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in M))if(M[e]=!1,t&&(n=e.match(j)))M[e]=n[1]*P[n[2]];else try{M[e]=new Function("e",H(e))(P)}catch(e){}return M[e]}),ae=function(e,t){return e.w?(e.cWidth=u.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},oe=function(e){if(d){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),r=(t=s.elements||u.qsa(s.context||i,s.reevaluate||s.reselect?u.sel:u.selShort)).length){for(u.setupRun(s),B=!0,n=0;n<r;n++)u.fillImg(t[n],s);u.teardownRun(s)}}};function ce(e,t){return e.res-t.res}function le(e,t){var n,r,s;if(e&&t)for(s=u.parseSet(t),e=u.makeUrl(e),n=0;n<s.length;n++)if(e===u.makeUrl(s[n].url)){r=s[n];break}return r}s.console&&console.warn,w in p||(w="src"),v["image/jpeg"]=!0,v["image/gif"]=!0,v["image/png"]=!0,v["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),u.ns=("pf"+(new Date).getTime()).substr(0,9),u.supSrcset="srcset"in p,u.supSizes="sizes"in p,u.supPicture=!!s.HTMLPictureElement,u.supSrcset&&u.supPicture&&!u.supSizes&&(Q=i.createElement("img"),p.srcset="data:,a",Q.src="data:,a",u.supSrcset=p.complete===Q.complete,u.supPicture=u.supSrcset&&u.supPicture),u.supSrcset&&!u.supSizes?(q="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",G=i.createElement("img"),V=function(){2===G.width&&(u.supSizes=!0),c=u.supSrcset&&!u.supSizes,d=!0,setTimeout(oe)},G.onload=V,G.onerror=V,G.setAttribute("sizes","9px"),G.srcset=q+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",G.src=q):d=!0,u.selShort="picture>img,img[srcset]",u.sel=u.selShort,u.cfg=y,u.DPR=R||1,u.u=P,u.types=v,u.setSize=f,u.makeUrl=F(function(e){return _.href=e,_.href}),u.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},u.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?u.matchesMedia=function(e){return!e||matchMedia(e).matches}:u.matchesMedia=u.mMQ,u.matchesMedia.apply(this,arguments)},u.mMQ=function(e){return!e||ie(e)},u.calcLength=function(e){var t=ie(e,!0)||!1;return t<0&&(t=!1),t},u.supportsType=function(e){return!e||v[e]},u.parseSize=F(function(e){var t=(e||"").match(S);return{media:t&&t[1],length:t&&t[2]}}),u.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,r=t.exec(e.substring(l));if(r)return n=r[0],l+=n.length,n}var r,s,i,a,o,c=e.length,l=0,u=[];function d(){var e,n,i,a,o,c,l,d,f,p=!1,m={};for(a=0;a<s.length;a++)c=(o=s[a])[o.length-1],l=o.substring(0,o.length-1),d=parseInt(l,10),f=parseFloat(l),k.test(l)&&"w"===c?((e||n)&&(p=!0),0===d?p=!0:e=d):O.test(l)&&"x"===c?((e||n||i)&&(p=!0),f<0?p=!0:n=f):k.test(l)&&"h"===c?((i||n)&&(p=!0),0===d?p=!0:i=d):p=!0;p||(m.url=r,e&&(m.w=e),n&&(m.d=n),i&&(m.h=i),i||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,u.push(m))}function f(){for(n(N),i="",a="in descriptor";;){if(o=e.charAt(l),"in descriptor"===a)if(U(o))i&&(s.push(i),i="",a="after descriptor");else{if(","===o)return l+=1,i&&s.push(i),void d();if("("===o)i+=o,a="in parens";else{if(""===o)return i&&s.push(i),void d();i+=o}}else if("in parens"===a)if(")"===o)i+=o,a="in descriptor";else{if(""===o)return s.push(i),void d();i+=o}else if("after descriptor"===a)if(U(o));else{if(""===o)return void d();a="in descriptor",l-=1}l+=1}}for(;;){if(n(W),l>=c)return u;r=n($),s=[],","===r.slice(-1)?(r=r.replace(D,""),d()):f()}}(e.srcset,e)),e.cands},u.getEmValue=function(){var e;if(!o&&(e=i.body)){var t=i.createElement("div"),n=A.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",A.style.cssText=x,e.style.cssText=x,e.appendChild(t),o=t.offsetWidth,e.removeChild(t),o=parseFloat(o,10),A.style.cssText=n,e.style.cssText=r}return o||16},u.calcListLength=function(e){if(!(e in L)||y.uT){var t=u.calcLength(function(e){var t,n,r,s,i,a,o,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],s=[],i=0,a=0,o=!1;function c(){n&&(r.push(n),n="")}function l(){r[0]&&(s.push(r),r=[])}for(;;){if(""===(t=e.charAt(a)))return c(),l(),s;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,c();continue}a+=1}else{if(U(t)){if(e.charAt(a-1)&&U(e.charAt(a-1))||!n){a+=1;continue}if(0===i){c(),a+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){c(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<r;t++)if(i=(s=n[t])[s.length-1],o=i,c.test(o)&&parseFloat(o)>=0||l.test(o)||"0"===o||"-0"===o||"+0"===o){if(a=i,s.pop(),0===s.length)return a;if(s=s.join(" "),u.matchesMedia(s))return a}return"100vw"}(e));L[e]=t||P.width}return L[e]},u.setRes=function(e){var t;if(e)for(var n=0,r=(t=u.parseSet(e)).length;n<r;n++)ae(t[n],e.sizes);return t},u.setRes.res=ae,u.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,c,l,d,f,p,m,h,g,A,v,b=t[u.ns],E=u.DPR;if(o=b.curSrc||t[w],(c=b.curCan||function(e,t,n){var r;return!n&&t&&(n=(n=e[u.ns].sets)&&n[n.length-1]),(r=le(t,n))&&(t=u.makeUrl(t),e[u.ns].curSrc=t,e[u.ns].curCan=r,r.res||ae(r,r.set.sizes)),r}(t,o,e[0].set))&&c.set===e[0].set&&((d=z&&!t.complete&&c.res-.1>E)||(c.cached=!0,c.res>=E&&(a=c))),!a)for(e.sort(ce),a=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=E){a=e[s=r-1]&&(d||o!==u.makeUrl(n.url))&&(f=e[s].res,p=n.res,m=E,h=e[s].cached,g=void 0,A=void 0,v=void 0,"saveData"===y.algorithm?f>2.7?v=m+1:(A=(p-m)*(g=Math.pow(f-.6,1.5)),h&&(A+=.1*g),v=f+A):v=m>1?Math.sqrt(f*p):f,v>m)?e[s]:n;break}a&&(l=u.makeUrl(a.url),b.curSrc=l,b.curCan=a,l!==o&&u.setSrc(t,a),u.setSize(t))}},u.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},u.getSet=function(e){var t,n,r,s=!1,i=e[u.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&u.matchesMedia(n.media)&&(r=u.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},u.parseSets=function(e,t,n){var r,s,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),l=e[u.ns];(void 0===l.src||n.src)&&(l.src=m.call(e,"src"),l.src?h.call(e,"data-pfsrc",l.src):g.call(e,"data-pfsrc")),(void 0===l.srcset||n.srcset||!u.supSrcset||e.srcset)&&(r=m.call(e,"srcset"),l.srcset=r,a=!0),l.sets=[],o&&(l.pic=!0,function(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(s=a[n])[u.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,l.sets)),l.srcset?(s={srcset:l.srcset,sizes:m.call(e,"sizes")},l.sets.push(s),(i=(c||l.src)&&E.test(l.srcset||""))||!l.src||le(l.src,s)||s.has1x||(s.srcset+=", "+l.src,s.cands.push({url:l.src,d:1,set:s}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=void 0,l.supported=!(o||s&&!u.supSrcset||i&&!u.supSizes),a&&u.supSrcset&&!l.supported&&(r?(h.call(e,"data-pfsrcset",r),e.srcset=""):g.call(e,"data-pfsrcset")),l.supported&&!l.srcset&&(!l.src&&e.src||e.src!==u.makeUrl(l.src))&&(null===l.src?e.removeAttribute("src"):e.src=l.src),l.parsed=!0},u.fillImg=function(e,t){var n,r,s,i,a,o=t.reselect||t.reevaluate;(e[u.ns]||(e[u.ns]={}),n=e[u.ns],o||n.evaled!==l)&&(n.parsed&&!t.reevaluate||u.parseSets(e,e.parentNode,t),n.supported?n.evaled=l:(r=e,i=u.getSet(r),a=!1,"pending"!==i&&(a=l,i&&(s=u.setRes(i),u.applySetCandidate(s,r))),r[u.ns].evaled=a))},u.setupRun=function(){B&&!T&&R===s.devicePixelRatio||(T=!1,R=s.devicePixelRatio,M={},L={},u.DPR=R||1,P.width=Math.max(s.innerWidth||0,A.clientWidth),P.height=Math.max(s.innerHeight||0,A.clientHeight),P.vw=P.width/100,P.vh=P.height/100,l=[P.height,P.width,R].join("-"),P.em=u.getEmValue(),P.rem=P.em)},u.supPicture?(oe=f,u.fillImg=f):(te=s.attachEvent?/d$|^c/:/d$|^c|^i/,ne=function(){var e=i.readyState||"";re=setTimeout(ne,"loading"===e?200:999),i.body&&(u.fillImgs(),(J=J||te.test(e))&&clearTimeout(re))},re=setTimeout(ne,i.body?9:99),se=A.clientHeight,I(s,"resize",(K=function(){T=Math.max(s.innerWidth||0,A.clientWidth)!==P.width||A.clientHeight!==se,se=A.clientHeight,T&&u.fillImgs()},X=99,ee=function(){var e=new Date-Z;e<X?Y=setTimeout(ee,X-e):(Y=null,K())},function(){Z=new Date,Y||(Y=setTimeout(ee,X))})),I(i,"readystatechange",ne)),u.picturefill=oe,u.fillImgs=oe,u.teardownRun=f,oe._=u,s.picturefillCFG={pf:u,push:function(e){var t=e.shift();"function"==typeof u[t]?u[t].apply(u,e):(y[t]=e[0],B&&u.fillImgs({reselect:!0}))}};for(;C&&C.length;)s.picturefillCFG.push(C.shift());s.picturefill=oe,"object"==typeof e.exports?e.exports=oe:void 0===(r=function(){return oe}.call(t,n,t,e))||(e.exports=r),u.supPicture||(v["image/webp"]=function(e,t){var n=new s.Image;return n.onerror=function(){v[e]=!1,oe()},n.onload=function(){v[e]=1===n.width,oe()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t,n){!function(t,n){var r=function(e,t){"use strict";if(!t.getElementsByClassName)return;var n,r,s=t.documentElement,i=e.Date,a=e.HTMLPictureElement,o=e.addEventListener,c=e.setTimeout,l=e.requestAnimationFrame||c,u=e.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,h=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},g=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},A=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},v=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&v(e,t),f.forEach(function(n){e[r](n,t)})},y=function(e,r,s,i,a){var o=t.createEvent("CustomEvent");return s||(s={}),s.instance=n,o.initCustomEvent(r,!i,!a,s),e.dispatchEvent(o),o},b=function(t,n){var s;!a&&(s=e.picturefill||r.pf)?s({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},E=(M=[],L=[],R=M,P=function(){var e=R;for(R=M.length?L:M,x=!0,T=!1;e.length;)e.shift()();x=!1},_=function(e,n){x&&!n?e.apply(this,arguments):(R.push(e),T||(T=!0,(t.hidden?c:l)(P)))},_._lsFlush=P,_),S=function(e,t){return t?function(){E(e)}:function(){var t=this,n=arguments;E(function(){e.apply(t,n)})}},C=function(e){var t,n,r=function(){t=null,e()},s=function(){var e=i.now()-n;e<99?c(s,99-e):(u||r)(r)};return function(){n=i.now(),t||(t=c(s,99))}};var x,T,M,L,R,P,_;!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,c(function(){r.init&&W()})}();var B=function(){var a,l,f,p,w,x,T,M,L,R,P,_,B,W,$,D,k,O,I,F,U=/^img$/i,j=/^iframe$/i,H="onscroll"in e&&!/glebot/.test(navigator.userAgent),Q=0,q=0,G=-1,V=function(e){q--,e&&e.target&&v(e.target,V),(!e||q<0||!e.target)&&(q=0)},J=function(e,n){var r,i=e,a="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(M-=n,P+=n,L-=n,R+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=s;)(a=(z(i,"opacity")||1)>0)&&"visible"!=z(i,"overflow")&&(r=i.getBoundingClientRect(),a=R>r.left&&L<r.right&&P>r.top-1&&M<r.bottom+1);return a},K=function(){var e,i,o,c,u,d,f,m,h,g=n.elements;if((p=r.loadMode)&&q<8&&(e=g.length)){i=0,G++,null==B&&("expand"in r||(r.expand=s.clientHeight>500&&s.clientWidth>500?500:370),_=r.expand,B=_*r.expFactor),Q<B&&q<1&&G>2&&p>2&&!t.hidden?(Q=B,G=0):Q=p>1&&G>1&&q<6?_:0;for(;i<e;i++)if(g[i]&&!g[i]._lazyRace)if(H)if((m=g[i].getAttribute("data-expand"))&&(d=1*m)||(d=Q),h!==d&&(x=innerWidth+d*W,T=innerHeight+d,f=-1*d,h=d),o=g[i].getBoundingClientRect(),(P=o.bottom)>=f&&(M=o.top)<=T&&(R=o.right)>=f*W&&(L=o.left)<=x&&(P||R||L||M)&&(r.loadHidden||"hidden"!=z(g[i],"visibility"))&&(l&&q<3&&!m&&(p<3||G<4)||J(g[i],d))){if(re(g[i]),u=!0,q>9)break}else!u&&l&&!c&&q<4&&G<4&&p>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!m&&(P||R||L||M||"auto"!=g[i].getAttribute(r.sizesAttr)))&&(c=a[0]||g[i]);else re(g[i]);c&&!u&&re(c)}},X=($=K,k=0,O=r.ricTimeout,I=function(){D=!1,k=i.now(),$()},F=u&&r.ricTimeout?function(){u(I,{timeout:O}),O!==r.ricTimeout&&(O=r.ricTimeout)}:S(function(){c(I)},!0),function(e){var t;(e=!0===e)&&(O=33),D||(D=!0,(t=125-(i.now()-k))<0&&(t=0),e||t<9&&u?F():c(F,t))}),Y=function(e){g(e.target,r.loadedClass),A(e.target,r.loadingClass),v(e.target,ee),y(e.target,"lazyloaded")},Z=S(Y),ee=function(e){Z({target:e.target})},te=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},ne=S(function(e,t,n,s,i){var a,o,l,u,p,h;(p=y(e,"lazybeforeunveil",t)).defaultPrevented||(s&&(n?g(e,r.autosizesClass):e.setAttribute("sizes",s)),o=e.getAttribute(r.srcsetAttr),a=e.getAttribute(r.srcAttr),i&&(l=e.parentNode,u=l&&d.test(l.nodeName||"")),h=t.firesLoad||"src"in e&&(o||a||u),p={target:e},h&&(v(e,V,!0),clearTimeout(f),f=c(V,2500),g(e,r.loadingClass),v(e,ee,!0)),u&&m.call(l.getElementsByTagName("source"),te),o?e.setAttribute("srcset",o):a&&!u&&(j.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,a):e.src=a),i&&(o||u)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,A(e,r.lazyClass),E(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?V(p):q--,Y(p))},!0)}),re=function(e){var t,n=U.test(e.nodeName),s=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),i="auto"==s;(!i&&l||!n||!e.getAttribute("src")&&!e.srcset||e.complete||h(e,r.errorClass)||!h(e,r.lazyClass))&&(t=y(e,"lazyunveilread").detail,i&&N.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,q++,ne(e,t,i,s,n))},se=function(){if(!l)if(i.now()-w<999)c(se,999);else{var e=C(function(){r.loadMode=3,X()});l=!0,r.loadMode=3,X(),o("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){w=i.now(),n.elements=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),W=r.hFac,o("scroll",X,!0),o("resize",X,!0),e.MutationObserver?new MutationObserver(X).observe(s,{childList:!0,subtree:!0,attributes:!0}):(s.addEventListener("DOMNodeInserted",X,!0),s.addEventListener("DOMAttrModified",X,!0),setInterval(X,999)),o("hashchange",X,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,X,!0)}),/d$|^c/.test(t.readyState)?se():(o("load",se),t.addEventListener("DOMContentLoaded",X),c(se,2e4)),n.elements.length?(K(),E._lsFlush()):X()},checkElems:X,unveil:re}}(),N=(D=S(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),d.test(t.nodeName||""))for(s=t.getElementsByTagName("source"),i=0,a=s.length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||b(e,n.detail)}),k=function(e,t,n){var r,s=e.parentNode;s&&(n=w(e,s,n),(r=y(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&D(e,s,r,n))},O=C(function(){var e,t=$.length;if(t)for(e=0;e<t;e++)k($[e])}),{_:function(){$=t.getElementsByClassName(r.autosizesClass),o("resize",O)},checkElems:O,updateElem:k}),W=function(){W.i||(W.i=!0,N._(),B._())};var $,D,k,O;return n={cfg:r,autoSizer:N,loader:B,init:W,uP:b,aC:g,rC:A,hC:h,fire:y,gW:w,rAF:E}}(t,t.document);t.lazySizes=r,e.exports&&(e.exports=r)}(window)}]);