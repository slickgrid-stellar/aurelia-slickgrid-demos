(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{wMS7:function(e,t,n){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */
e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,o=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,l=Object.create,c="undefined"!=typeof Reflect&&Reflect,s=c.apply,u=c.construct;s||(s=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var f,m=w(Array.prototype.forEach),p=w(Array.prototype.pop),d=w(Array.prototype.push),g=w(String.prototype.toLowerCase),h=w(String.prototype.match),y=w(String.prototype.replace),v=w(String.prototype.indexOf),b=w(String.prototype.trim),A=w(RegExp.prototype.test),T=(f=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(f,t)});function w(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return s(e,t,r)}}function x(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var a=g(i);a!==i&&(n(r)||(r[o]=a),i=a)}e[i]=!0}return e}function S(t){var n=l(null),r=void 0;for(r in t)s(e,t,[r])&&(n[r]=t[r]);return n}function k(e,t){for(;null!==e;){var n=o(e,t);if(n){if(n.get)return w(n.get);if("function"==typeof n.value)return w(n.value)}e=r(e)}return function(e){return console.warn("fallback value for",e),null}}var E=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),_=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),D=i(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),N=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),O=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),L=i(["#text"]),M=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),F=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),C=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),I=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),U=a(/<%[\s\S]*|[\s\S]*%>/gm),H=a(/^data-[\-\w.\u00B7-\uFFFF]/),j=a(/^aria-[\-\w]+$/),P=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),B=a(/^(?:\w+script|data):/i),W=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function q(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var K=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":G(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),n=function(t){return e(t)};if(n.version="2.2.8",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,f=t.NamedNodeMap,w=void 0===f?t.NamedNodeMap||t.MozNamedAttrMap:f,Y=t.Text,J=t.Comment,X=t.DOMParser,$=t.trustedTypes,Z=s.prototype,Q=k(Z,"cloneNode"),ee=k(Z,"nextSibling"),te=k(Z,"childNodes"),ne=k(Z,"parentNode");if("function"==typeof l){var re=o.createElement("template");re.content&&re.content.ownerDocument&&(o=re.content.ownerDocument)}var oe=V($,r),ie=oe&&Ie?oe.createHTML(""):"",ae=o,le=ae.implementation,ce=ae.createNodeIterator,se=ae.createDocumentFragment,ue=r.importNode,fe={};try{fe=S(o).documentMode?o.documentMode:{}}catch(e){}var me={};n.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==fe;var pe=z,de=U,ge=H,he=j,ye=B,ve=W,be=P,Ae=null,Te=x({},[].concat(q(E),q(R),q(_),q(N),q(L))),we=null,xe=x({},[].concat(q(M),q(F),q(C),q(I))),Se=null,ke=null,Ee=!0,Re=!0,_e=!1,De=!1,Ne=!1,Oe=!1,Le=!1,Me=!1,Fe=!1,Ce=!0,Ie=!1,ze=!0,Ue=!0,He=!1,je={},Pe=x({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Be=null,We=x({},["audio","video","img","source","image","track"]),Ge=null,qe=x({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ke="http://www.w3.org/1998/Math/MathML",Ve="http://www.w3.org/2000/svg",Ye="http://www.w3.org/1999/xhtml",Je=Ye,Xe=null,$e=o.createElement("form"),Ze=function(e){Xe&&Xe===e||(e&&"object"===(void 0===e?"undefined":G(e))||(e={}),e=S(e),Ae="ALLOWED_TAGS"in e?x({},e.ALLOWED_TAGS):Te,we="ALLOWED_ATTR"in e?x({},e.ALLOWED_ATTR):xe,Ge="ADD_URI_SAFE_ATTR"in e?x(S(qe),e.ADD_URI_SAFE_ATTR):qe,Be="ADD_DATA_URI_TAGS"in e?x(S(We),e.ADD_DATA_URI_TAGS):We,Se="FORBID_TAGS"in e?x({},e.FORBID_TAGS):{},ke="FORBID_ATTR"in e?x({},e.FORBID_ATTR):{},je="USE_PROFILES"in e&&e.USE_PROFILES,Ee=!1!==e.ALLOW_ARIA_ATTR,Re=!1!==e.ALLOW_DATA_ATTR,_e=e.ALLOW_UNKNOWN_PROTOCOLS||!1,De=e.SAFE_FOR_TEMPLATES||!1,Ne=e.WHOLE_DOCUMENT||!1,Me=e.RETURN_DOM||!1,Fe=e.RETURN_DOM_FRAGMENT||!1,Ce=!1!==e.RETURN_DOM_IMPORT,Ie=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,ze=!1!==e.SANITIZE_DOM,Ue=!1!==e.KEEP_CONTENT,He=e.IN_PLACE||!1,be=e.ALLOWED_URI_REGEXP||be,Je=e.NAMESPACE||Je,De&&(Re=!1),Fe&&(Me=!0),je&&(Ae=x({},[].concat(q(L))),we=[],!0===je.html&&(x(Ae,E),x(we,M)),!0===je.svg&&(x(Ae,R),x(we,F),x(we,I)),!0===je.svgFilters&&(x(Ae,_),x(we,F),x(we,I)),!0===je.mathMl&&(x(Ae,N),x(we,C),x(we,I))),e.ADD_TAGS&&(Ae===Te&&(Ae=S(Ae)),x(Ae,e.ADD_TAGS)),e.ADD_ATTR&&(we===xe&&(we=S(we)),x(we,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&x(Ge,e.ADD_URI_SAFE_ATTR),Ue&&(Ae["#text"]=!0),Ne&&x(Ae,["html","head","body"]),Ae.table&&(x(Ae,["tbody"]),delete Se.tbody),i&&i(e),Xe=e)},Qe=x({},["mi","mo","mn","ms","mtext"]),et=x({},["foreignobject","desc","title","annotation-xml"]),tt=x({},R);x(tt,_),x(tt,D);var nt=x({},N);x(nt,O);var rt=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:Ye,tagName:"template"});var n=g(e.tagName),r=g(t.tagName);if(e.namespaceURI===Ve)return t.namespaceURI===Ye?"svg"===n:t.namespaceURI===Ke?"svg"===n&&("annotation-xml"===r||Qe[r]):Boolean(tt[n]);if(e.namespaceURI===Ke)return t.namespaceURI===Ye?"math"===n:t.namespaceURI===Ve?"math"===n&&et[r]:Boolean(nt[n]);if(e.namespaceURI===Ye){if(t.namespaceURI===Ve&&!et[r])return!1;if(t.namespaceURI===Ke&&!Qe[r])return!1;var o=x({},["title","style","font","a","script"]);return!nt[n]&&(o[n]||!tt[n])}return!1},ot=function(e){d(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},it=function(e,t){try{d(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){d(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!we[e])if(Me||Fe)try{ot(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},at=function(e){var t=void 0,n=void 0;if(Le)e="<remove></remove>"+e;else{var r=h(e,/^[\r\n\t ]+/);n=r&&r[0]}var i=oe?oe.createHTML(e):e;if(Je===Ye)try{t=(new X).parseFromString(i,"text/html")}catch(e){}t&&t.documentElement||((t=le.createDocument(Je,"template",null)).documentElement.innerHTML=i);var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Ne?t.documentElement:a},lt=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,(function(){return u.FILTER_ACCEPT}),!1)},ct=function(e){return!(e instanceof Y||e instanceof J||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof w&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},st=function(e){return"object"===(void 0===c?"undefined":G(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":G(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ut=function(e,t,r){me[e]&&m(me[e],(function(e){e.call(n,t,r,Xe)}))},ft=function(e){var t=void 0;if(ut("beforeSanitizeElements",e,null),ct(e))return ot(e),!0;if(h(e.nodeName,/[\u0080-\uFFFF]/))return ot(e),!0;var r=g(e.nodeName);if(ut("uponSanitizeElement",e,{tagName:r,allowedTags:Ae}),!st(e.firstElementChild)&&(!st(e.content)||!st(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent))return ot(e),!0;if(!Ae[r]||Se[r]){if(Ue&&!Pe[r]){var o=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(Q(i[a],!0),ee(e))}return ot(e),!0}return e instanceof s&&!rt(e)?(ot(e),!0):"noscript"!==r&&"noembed"!==r||!A(/<\/no(script|embed)/i,e.innerHTML)?(De&&3===e.nodeType&&(t=e.textContent,t=y(t,pe," "),t=y(t,de," "),e.textContent!==t&&(d(n.removed,{element:e.cloneNode()}),e.textContent=t)),ut("afterSanitizeElements",e,null),!1):(ot(e),!0)},mt=function(e,t,n){if(ze&&("id"===t||"name"===t)&&(n in o||n in $e))return!1;if(Re&&A(ge,t));else if(Ee&&A(he,t));else{if(!we[t]||ke[t])return!1;if(Ge[t]);else if(A(be,y(n,ve,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!Be[e])if(_e&&!A(ye,y(n,ve,"")));else if(n)return!1}return!0},pt=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;ut("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:we};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r=b(t.value),o=g(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,ut("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(it(s,e),l.keepAttr))if(A(/\/>/i,r))it(s,e);else{De&&(r=y(r,pe," "),r=y(r,de," "));var f=e.nodeName.toLowerCase();if(mt(f,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),p(n.removed)}catch(e){}}}ut("afterSanitizeAttributes",e,null)}},dt=function e(t){var n=void 0,r=lt(t);for(ut("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ut("uponSanitizeShadowNode",n,null),ft(n)||(n.content instanceof a&&e(n.content),pt(n));ut("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,o){var i=void 0,l=void 0,s=void 0,u=void 0,f=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!st(e)){if("function"!=typeof e.toString)throw T("toString is not a function");if("string"!=typeof(e=e.toString()))throw T("dirty is not a string, aborting")}if(!n.isSupported){if("object"===G(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(st(e))return t.toStaticHTML(e.outerHTML)}return e}if(Oe||Ze(o),n.removed=[],"string"==typeof e&&(He=!1),He);else if(e instanceof c)1===(l=(i=at("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?i=l:i.appendChild(l);else{if(!Me&&!De&&!Ne&&-1===e.indexOf("<"))return oe&&Ie?oe.createHTML(e):e;if(!(i=at(e)))return Me?null:ie}i&&Le&&ot(i.firstChild);for(var m=lt(He?e:i);s=m.nextNode();)3===s.nodeType&&s===u||ft(s)||(s.content instanceof a&&dt(s.content),pt(s),u=s);if(u=null,He)return e;if(Me){if(Fe)for(f=se.call(i.ownerDocument);i.firstChild;)f.appendChild(i.firstChild);else f=i;return Ce&&(f=ue.call(r,f,!0)),f}var p=Ne?i.outerHTML:i.innerHTML;return De&&(p=y(p,pe," "),p=y(p,de," ")),oe&&Ie?oe.createHTML(p):p},n.setConfig=function(e){Ze(e),Oe=!0},n.clearConfig=function(){Xe=null,Oe=!1},n.isValidAttribute=function(e,t,n){Xe||Ze({});var r=g(e),o=g(t);return mt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],d(me[e],t))},n.removeHook=function(e){me[e]&&p(me[e])},n.removeHooks=function(e){me[e]&&(me[e]=[])},n.removeAllHooks=function(){me={}},n}()}()}}]);
//# sourceMappingURL=vendors~3ef9df38.b1a5c5c2a9e28579aa1a.bundle.map