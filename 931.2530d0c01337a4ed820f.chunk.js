"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[931],{9931:(e,t,s)=>{function r(e){return"object"==typeof e&&null!==e||"function"==typeof e}s.d(t,{xl:()=>je,Pq:()=>ke});const i={get:(e,t)=>t[Symbol.metadata]?.[e],define(e,t,...s){let r=Object.getOwnPropertyDescriptor(t,Symbol.metadata)?.value;null==r&&Object.defineProperty(t,Symbol.metadata,{value:r=Object.create(null),enumerable:!0,configurable:!0,writable:!0});const i=s.length;switch(i){case 0:throw new Error("At least one key must be provided");case 1:return void(r[s[0]]=e);case 2:return void(r[s[0]]=r[s[1]]=e);default:for(let t=0;t<i;++t)r[s[t]]=e;return}},has(e,t){const s=t[Symbol.metadata];return null!=s&&e in s},delete(e,t){const s=t[Symbol.metadata];null!=s&&Reflect.deleteProperty(s,e)}},n=Object.freeze,o=Object.assign,a=String,h=i.get,c=i.define,l=e=>"function"==typeof e,u=e=>"string"==typeof e,f=()=>Object.create(null),d=(Object.is,(e,...t)=>new Error(`AUR${a(e).padStart(4,"0")}:${t.map(a)}`)),g=(()=>{const e={};let t=!1,s=0,r=0,i=0;return n=>{switch(typeof n){case"number":return n>=0&&(0|n)===n;case"string":if(t=e[n],void 0!==t)return t;if(s=n.length,0===s)return e[n]=!1;for(r=0,i=0;i<s;++i)if(r=n.charCodeAt(i),0===i&&48===r&&s>1||r<48||r>57)return e[n]=!1;return e[n]=!0;default:return!1}}})(),p=(e,t)=>{const s=t.name;t.addInitializer((function(){Reflect.defineProperty(this,s,{value:e.bind(this),writable:!0,configurable:!0,enumerable:!1})}))};function m(...e){return o(f(),...e)}const y=(()=>{const e=new WeakMap;let t=!1,s="",r=0;return i=>(t=e.get(i),null==t&&(r=(s=i.toString()).length,t=r>28&&s.indexOf("[native code] }")===r-15,e.set(i,t)),t)})(),v=(e,t)=>new ee(e,1,t),b=(e,t)=>new ee(t,5,e),w=new WeakMap,R="au:annotation",k=(e,t)=>void 0===t?`${R}:${e}`:`${R}:${e}:${t}`,C="au:resource";Object.prototype.hasOwnProperty;const I=Symbol.for("au:registrable"),T={none(e){throw d(2,e)},singleton:e=>new ee(e,1,e),transient:e=>new ee(e,2,e)};class S{constructor(e,t){this.inheritParentResources=e,this.defaultResolver=t}static from(e){return void 0===e||e===S.DEFAULT?S.DEFAULT:new S(e.inheritParentResources??!1,e.defaultResolver??T.singleton)}}S.DEFAULT=S.from({});const O=e=>new P(null,S.from(e)),$=new Set("Array ArrayBuffer Boolean DataView Date Error EvalError Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Number Object Promise RangeError ReferenceError RegExp Set SharedArrayBuffer String SyntaxError TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array URIError WeakMap WeakSet".split(" "));let E=0,j=null;class P{get depth(){return null===this.t?0:this.t.depth+1}get parent(){return this.t}constructor(e,t){if(this.id=++E,this.i=0,this.u=new Map,this.t=e,this.config=t,this.h=new Map,this.res={},null===e)this.root=this,this.R=new Map;else if(this.root=e.root,this.R=e.R,t.inheritParentResources)for(const t in e.res)this.registerResolver(t,e.res[t]);this.h.set(Y,B)}register(...e){if(100==++this.i)throw d(6,...e);let t,s,i,n,o,a,c=0,l=e.length;for(;c<l;++c)if(t=e[c],r(t))if(_(t))t.register(this);else if(null!=(a=h(C,t)))a.register(this);else if(L(t)){const e=t[Symbol.metadata]?.[I];if(_(e))e.register(this);else if(u(t.$au?.type)){const e=t.$au,s=(t.aliases??te).concat(e.aliases??te);let r=`${C}:${e.type}:${e.name}`;if(this.has(r,!1))continue;for(b(t,r).register(this),this.has(t,!1)||v(t,t).register(this),n=0,o=s.length;n<o;++n)r=`${C}:${e.type}:${s[n]}`,this.has(r,!1)||b(t,r).register(this)}else v(t,t).register(this)}else for(s=Object.keys(t),n=0,o=s.length;n<o;++n)i=t[s[n]],r(i)&&(_(i)?i.register(this):this.register(i));return--this.i,this}registerResolver(e,t,s=!1){A(e);const r=this.h,i=r.get(e);if(null==i){if(r.set(e,t),U(e)){if(void 0!==this.res[e])throw d(7,e);this.res[e]=t}}else i instanceof ee&&4===i.$?i._state.push(t):r.set(e,new ee(e,4,[i,t]));return s&&this.u.set(e,t),t}deregister(e){A(e);const t=this.h.get(e);null!=t&&(this.h.delete(e),U(e)&&delete this.res[e],this.u.has(e)&&(t.dispose(),this.u.delete(e)))}registerTransformer(e,t){const s=this.getResolver(e);if(null==s)return!1;if(s.getFactory){const e=s.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(A(e),void 0!==e.resolve)return e;const s=j;let r,i,n=j=this;try{for(;null!=n;){if(r=n.h.get(e),null!=r)return r;if(null==n.t)return i=H(e)?this:n,t?this.C(e,i):null;n=n.t}}finally{j=s}return null}has(e,t=!1){return this.h.has(e)||U(e)&&e in this.res||((t&&this.t?.has(e,!0))??!1)}get(e){if(A(e),e.$isResolver)return e.resolve(this,this);const t=j;let s,r,i=j=this;try{for(;null!=i;){if(s=i.h.get(e),null!=s)return s.resolve(i,this);if(null==i.t)return r=H(e)?this:i,s=this.C(e,r),s.resolve(i,this);i=i.t}}finally{j=t}throw d(8,e)}getAll(e,t=!1){A(e);const s=j,r=j=this;let i,n=r,o=te;try{if(t){for(;null!=n;)i=n.h.get(e),null!=i&&(o=o.concat(N(i,n,r))),n=n.t;return o}for(;null!=n;){if(i=n.h.get(e),null!=i)return N(i,n,r);if(n=n.t,null==n)return te}}finally{j=s}return te}invoke(e,t){if(y(e))throw d(15,e);const s=j;j=this;try{return void 0===t?new e(...K(e).map(x,this)):new e(...K(e).map(x,this),...t)}finally{j=s}}hasFactory(e){return this.R.has(e)}getFactory(e){let t=this.R.get(e);if(void 0===t){if(y(e))throw d(15,e);this.R.set(e,t=new q(e,K(e)))}return t}registerFactory(e,t){this.R.set(e,t)}createChild(e){return void 0===e&&this.config.inheritParentResources?this.config===S.DEFAULT?new P(this,this.config):new P(this,S.from({...this.config,inheritParentResources:!1})):new P(this,S.from(e??this.config))}disposeResolvers(){const e=this.h,t=this.u;let s,r;for([r,s]of t.entries())s.dispose?.(),e.delete(r);t.clear()}useResources(e){const t=e.res;for(const e in t)this.registerResolver(e,t[e])}find(e,t){const s=u(t)?`${C}:${e}:${t}`:e;let r=this,i=r.res[s];return null==i&&(r=r.root,i=r.res[s]),null==i?null:i.getFactory?.(r)?.Type??null}dispose(){this.u.size>0&&this.disposeResolvers(),this.h.clear(),this.root===this&&(this.R.clear(),this.res={})}C(e,t){const s=_(e);if(!l(e)&&!s)throw d(9,e);if($.has(e.name))throw d(10,e);if(s){const s=e.register(t,e);if(!(s instanceof Object)||null==s.resolve){const s=t.h.get(e);if(null!=s)return s;throw d(11,e)}return s}if(e.$isInterface)throw d(12,e.friendlyName);const r=this.config.defaultResolver(e,t);return t.h.set(e,r),r}}class q{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){const s=j;let r;j=e;try{return r=void 0===t?new this.Type(...this.dependencies.map(x,e)):new this.Type(...this.dependencies.map(x,e),...t),null==this.transformers?r:this.transformers.reduce(F,r)}finally{j=s}}registerTransformer(e){(this.transformers??=[]).push(e)}}function F(e,t){return t(e)}function A(e){if(null==e)throw d(14)}function x(e){return this.get(e)}function D(...e){if(null==j)throw d(16,...e);return 1===e.length?j.get(e[0]):e.map(x,j)}const N=(e,t,s)=>{if(e instanceof ee&&4===e.$){const r=e._state,i=r.length,n=Array(i);let o=0;for(;o<i;++o)n[o]=r[o].resolve(t,s);return n}return[e.resolve(t,s)]},B={$isResolver:!0,resolve:(e,t)=>t},_=e=>l(e?.register),H=e=>(e=>_(e)&&"boolean"==typeof e.registerInRequestor)(e)&&e.registerInRequestor,L=e=>void 0!==e.prototype,U=e=>u(e)&&e.indexOf(":")>0;class M{constructor(e,t){this.c=e,this.k=t}instance(e){return this.O(0,e)}singleton(e){return this.O(1,e)}transient(e){return this.O(2,e)}callback(e){return this.O(3,e)}cachedCallback(e){return this.O(3,(e=>(t,s,r)=>{let i=w.get(t);if(void 0===i&&w.set(t,i=new WeakMap),i.has(r))return i.get(r);const n=e(t,s,r);return i.set(r,n),n})(e))}aliasTo(e){return this.O(5,e)}O(e,t){const{c:s,k:r}=this;return this.c=this.k=void 0,s.registerResolver(r,new ee(r,e,t))}}const W=e=>{const t=e.slice(),s=Object.keys(e),r=s.length;let i;for(let n=0;n<r;++n)i=s[n],g(i)||(t[i]=e[i]);return t},G=k("di:paramtypes"),z=e=>h("design:paramtypes",e),Q=e=>e.metadata[G]??=[],K=e=>{const t=k("di:dependencies");let s=h(t,e);if(void 0===s){const r=e.inject;if(void 0===r){const t=z(e),r=(e=>h(G,e))(e);if(void 0===t)if(void 0===r){const t=Object.getPrototypeOf(e);s=l(t)&&t!==Function.prototype?W(K(t)):[]}else s=W(r);else if(void 0===r)s=W(t);else{s=W(t);let e,i=r.length,n=0;for(;n<i;++n)e=r[n],void 0!==e&&(s[n]=e);const o=Object.keys(r);let a;for(n=0,i=o.length,n=0;n<i;++n)a=o[n],g(a)||(s[a]=r[a])}}else s=W(r);c(s,e,t)}return s},J=(e,t)=>{const s=l(e)?e:t,r=(u(e)?e:void 0)??"(anonymous)",i={$isInterface:!0,friendlyName:r,toString:()=>`InterfaceSymbol<${r}>`,register:null!=s?(e,t)=>s(new M(e,t??i)):void 0};return i},V=(...e)=>(t,s)=>{switch(s.kind){case"class":{const t=Q(s);let r,i=0;for(;i<e.length;++i)r=e[i],void 0!==r&&(t[i]=r);break}case"field":{const t=Q(s),r=e[0];void 0!==r&&(t[s.name]=r);break}default:throw d(22,String(s.name),s.kind)}},X=(()=>(Symbol.metadata??=Symbol.for("Symbol.metadata"),{createContainer:O,getDesignParamtypes:z,getDependencies:K,createInterface:J,inject:V,transient:e=>(e.register=function(t){return((e,t)=>new ee(e,2,t))(e,e).register(t,e)},e.registerInRequestor=!1,e),singleton:(e,t=Z)=>(e.register=function(t){return v(e,e).register(t,e)},e.registerInRequestor=t.scoped,e)}))(),Y=J("IContainer"),Z={scoped:!1};X.singleton;class ee{get $isResolver(){return!0}constructor(e,t,s){this.I=!1,this.A=null,this.k=e,this.$=t,this._state=s}register(e,t){return e.registerResolver(t||this.k,this)}resolve(e,t){switch(this.$){case 0:return this._state;case 1:if(this.I)throw d(3,this._state.name);return this.I=!0,this._state=(this.A=e.getFactory(this._state)).construct(t),this.$=0,this.I=!1,this._state;case 2:{const s=e.getFactory(this._state);if(null===s)throw d(4,this.k);return s.construct(t)}case 3:return this._state(e,t,this);case 4:return this._state[0].resolve(e,t);case 5:return t.get(this._state);default:throw d(5,this.$)}}getFactory(e){switch(this.$){case 1:case 2:return e.getFactory(this._state);case 5:return e.getResolver(this._state)?.getFactory?.(e)??null;case 0:return this.A;default:return null}}}const te=n([]);n({});const se=J("IPlatform");function re(e){return function(t){function s(e,t){V(s)(e,t)}return s.$isResolver=!0,s.resolve=function(s,r){return e(t,s,r)},s}}const ie=re(((e,t,s)=>s.has(e,!0)?s.get(e):void 0)),ne=re(((e,t,s)=>(...r)=>t.getFactory(e).construct(s,r)));function oe(e,t,s,r,i,n){function o(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var a,h=r.kind,c="getter"===h?"get":"setter"===h?"set":"value",l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),f=!1,d=s.length-1;d>=0;d--){var g={};for(var p in r)g[p]="access"===p?{}:r[p];for(var p in r.access)g.access[p]=r.access[p];g.addInitializer=function(e){if(f)throw new TypeError("Cannot add initializers after decoration has completed");n.push(o(e||null))};var m=(0,s[d])("accessor"===h?{get:u.get,set:u.set}:u[c],g);if("accessor"===h){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(a=o(m.get))&&(u.get=a),(a=o(m.set))&&(u.set=a),(a=o(m.init))&&i.unshift(a)}else(a=o(m))&&("field"===h?i.unshift(a):u[c]=a)}l&&Object.defineProperty(l,r.name,u),f=!0}n({trace:0,debug:1,info:2,warn:3,error:4,fatal:5,none:6});const ae=J("ILogConfig",(e=>e.instance(new de("no-colors",3)))),he=J("ISink"),ce=J("ILogEventFactory",(e=>e.singleton(ve))),le=J("ILogScope"),ue=n({key:k("logger-sink-handles"),define(e,t){c(t.handles,e,this.key)},getHandles(e){return h(this.key,e.constructor)}}),fe=m({red:e=>`[31m${e}[39m`,green:e=>`[32m${e}[39m`,yellow:e=>`[33m${e}[39m`,blue:e=>`[34m${e}[39m`,magenta:e=>`[35m${e}[39m`,cyan:e=>`[36m${e}[39m`,white:e=>`[37m${e}[39m`,grey:e=>`[90m${e}[39m`});class de{constructor(e,t){this.colorOptions=e,this.level=t}}const ge=function(){const e={"no-colors":m({TRC:"TRC",DBG:"DBG",INF:"INF",WRN:"WRN",ERR:"ERR",FTL:"FTL",QQQ:"???"}),colors:m({TRC:fe.grey("TRC"),DBG:fe.grey("DBG"),INF:fe.white("INF"),WRN:fe.yellow("WRN"),ERR:fe.red("ERR"),FTL:fe.red("FTL"),QQQ:fe.grey("???")})};return(t,s)=>t<=0?e[s].TRC:t<=1?e[s].DBG:t<=2?e[s].INF:t<=3?e[s].WRN:t<=4?e[s].ERR:t<=5?e[s].FTL:e[s].QQQ}(),pe=(e,t)=>"no-colors"===t?e.join("."):e.map(fe.cyan).join("."),me=(e,t)=>"no-colors"===t?new Date(e).toISOString():fe.grey(new Date(e).toISOString());class ye{constructor(e,t,s,r,i,n){this.severity=e,this.message=t,this.optionalParams=s,this.scope=r,this.colorOptions=i,this.timestamp=n}toString(){const{severity:e,message:t,scope:s,colorOptions:r,timestamp:i}=this;return 0===s.length?`${me(i,r)} [${ge(e,r)}] ${t}`:`${me(i,r)} [${ge(e,r)} ${pe(s,r)}] ${t}`}getFormattedLogInfo(e=!1){const{severity:t,message:s,scope:r,colorOptions:i,timestamp:n,optionalParams:o}=this;let a=null,h="";e&&s instanceof Error?a=s:h=s;const c=0===r.length?"":` ${pe(r,i)}`;let l=`${me(n,i)} [${ge(t,i)}${c}] ${h}`;if(void 0===o||0===o.length)return null===a?[l]:[l,a];let u=0;for(;l.includes("%s");)l=l.replace("%s",String(o[u++]));return null!==a?[l,a,...o.slice(u)]:[l,...o.slice(u)]}}class ve{constructor(){this.config=D(ae)}createLogEvent(e,t,s,r){return new ye(t,s,r,e.scope,this.config.colorOptions,Date.now())}}(()=>{var e;let t,s,r,i,n,o,a=[];e=class{constructor(e=D(ae),t=D(ce),s=D(((e,t=!1)=>{function s(e,t){V(s)(e,t)}return s.$isResolver=!0,s.resolve=(s,r)=>r.getAll(e,t),s})(he)),r=D(ie(le))??[],i=null){let n,o,h,c,l,u;if(this.scope=(function(e,t,s){for(var r=arguments.length>2,i=0;i<t.length;i++)s=r?t[i].call(e,s):t[i].call(e)}(this,a),r),this._=f(),this.config=e,this.f=t,this.sinks=s,null===i){this.root=this,this.parent=this,n=this.M=[],o=this.T=[],h=this.P=[],c=this.K=[],l=this.N=[],u=this.G=[];for(const e of s){const t=ue.getHandles(e);(t?.includes(0)??1)&&n.push(e),(t?.includes(1)??1)&&o.push(e),(t?.includes(2)??1)&&h.push(e),(t?.includes(3)??1)&&c.push(e),(t?.includes(4)??1)&&l.push(e),(t?.includes(5)??1)&&u.push(e)}}else this.root=i.root,this.parent=i,n=this.M=i.M,o=this.T=i.T,h=this.P=i.P,c=this.K=i.K,l=this.N=i.N,u=this.G=i.G}trace(e,...t){this.config.level<=0&&this.W(this.M,0,e,t)}debug(e,...t){this.config.level<=1&&this.W(this.T,1,e,t)}info(e,...t){this.config.level<=2&&this.W(this.P,2,e,t)}warn(e,...t){this.config.level<=3&&this.W(this.K,3,e,t)}error(e,...t){this.config.level<=4&&this.W(this.N,4,e,t)}fatal(e,...t){this.config.level<=5&&this.W(this.G,5,e,t)}scopeTo(t){const s=this._;let r=s[t];return void 0===r&&(r=s[t]=new e(this.config,this.f,null,this.scope.concat(t),this)),r}W(e,t,s,r){const i=l(s)?s():s,n=this.f.createLogEvent(this,t,i,r);for(let t=0,s=e.length;t<s;++t)e[t].handleEvent(n)}},(()=>{const h="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;t=[p],s=[p],r=[p],i=[p],n=[p],o=[p],oe(e,null,t,{kind:"method",name:"trace",static:!1,private:!1,access:{has:e=>"trace"in e,get:e=>e.trace},metadata:h},null,a),oe(e,null,s,{kind:"method",name:"debug",static:!1,private:!1,access:{has:e=>"debug"in e,get:e=>e.debug},metadata:h},null,a),oe(e,null,r,{kind:"method",name:"info",static:!1,private:!1,access:{has:e=>"info"in e,get:e=>e.info},metadata:h},null,a),oe(e,null,i,{kind:"method",name:"warn",static:!1,private:!1,access:{has:e=>"warn"in e,get:e=>e.warn},metadata:h},null,a),oe(e,null,n,{kind:"method",name:"error",static:!1,private:!1,access:{has:e=>"error"in e,get:e=>e.error},metadata:h},null,a),oe(e,null,o,{kind:"method",name:"fatal",static:!1,private:!1,access:{has:e=>"fatal"in e,get:e=>e.fatal},metadata:h},null,a),h&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:h})})()})();class be{constructor(e,t){this.type=e,this.cb=t}handle(e){e instanceof this.type&&this.cb.call(null,e)}}const we=J("IEventAggregator",(e=>e.singleton(Re)));class Re{constructor(){this.eventLookup={},this.messageHandlers=[]}publish(e,t){if(!e)throw d(18,e);if(u(e)){let s=this.eventLookup[e];if(void 0!==s){s=s.slice();let r=s.length;for(;r-- >0;)s[r](t,e)}}else{const t=this.messageHandlers.slice();let s=t.length;for(;s-- >0;)t[s].handle(e)}}subscribe(e,t){if(!e)throw d(19,e);let s,r;return u(e)?(void 0===this.eventLookup[e]&&(this.eventLookup[e]=[]),s=t,r=this.eventLookup[e]):(s=new be(e,t),r=this.messageHandlers),r.push(s),{dispose(){const e=r.indexOf(s);-1!==e&&r.splice(e,1)}}}subscribeOnce(e,t){const s=this.subscribe(e,((e,r)=>{s.dispose(),t(e,r)}));return s}}function ke(e,t){return JSON.stringify(void 0!==e?e:{},t)}class Ce{constructor(){this.cache=new Map,this.delete=e=>this.cache.delete(e),this.has=e=>this.cache.has(e),this.set=(e,t)=>this.cache.set(e,t),this.get=e=>this.cache.get(e),this.clear=()=>this.cache.clear()}}const Ie=X.createInterface((e=>e.singleton(Ce)));class Te{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null,this.c=D(Y)}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:Se})}withRetry(e){const t=this.c.invoke(We,[e]);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function Se(e){if(!e.ok)throw e;return e}const Oe=(e,...t)=>new Error(`AUR${String(e).padStart(4,"0")}:${t.map(String)}`),$e=/^([a-z][a-z0-9+\-.]*:)?\/\//i,Ee=X.createInterface("fetch",(e=>{if("function"!=typeof fetch)throw Oe(5e3);return e.instance(fetch)})),je=X.createInterface("IHttpClient",(e=>e.aliasTo(Pe)));class Pe{constructor(){this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.t=[],this.i=null,this.h=D(ne(Te)),this.u=D(Ee)}get interceptors(){return this.t.slice(0)}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw Oe(5002,typeof e);{t=this.h(),t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.t,t.dispatcher=this.i;const s=e(t);if(null!=s){if("object"!=typeof s)throw Oe(5001,typeof s);t=s}}}const s=t.defaults;if(s?.headers instanceof Headers)throw Oe(5003);const r=t.interceptors;if(r?.length>0){if(r.filter((e=>e instanceof We)).length>1)throw Oe(5004);const e=r.findIndex((e=>e instanceof We));if(e>=0&&e!==r.length-1)throw Oe(5005)}return this.baseUrl=t.baseUrl,this.defaults=s,this.t=t.interceptors??[],this.i=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.C();let s=this.buildRequest(e,t);return this.processRequest(s,this.t).then((e=>{let t;if(e instanceof Response)t=Promise.resolve(e);else{if(!(e instanceof Request))throw Oe(5006,e);s=e,t=this.u.call(void 0,s)}return this.processResponse(t,this.t,s)})).then((e=>e instanceof Request?this.fetch(e):e)).then((e=>(this.R(),e)),(e=>{throw this.R(),e}))}buildRequest(e,t){const s=this.defaults??{};let r,i,n;const o=function(e){const t={},s=e??{};for(const e of Object.keys(s))t[e]="function"==typeof s[e]?s[e]():s[e];return t}(s.headers);if(e instanceof Request)r=e,n=new Headers(r.headers).get("Content-Type");else{t||(t={}),i=t.body;const o=void 0!==i?{body:i}:null,a={...s,headers:{},...t,...o};n=new Headers(a.headers).get("Content-Type"),r=new Request(function(e,t){return $e.test(t)?t:(e??"")+t}(this.baseUrl,e),a)}return n||(new Headers(o).has("content-type")?r.headers.set("Content-Type",new Headers(o).get("content-type")):void 0!==i&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(i)&&r.headers.set("Content-Type","application/json")),function(e,t){const s=t??{};for(const t of Object.keys(s))e.has(t)||e.set(t,s[t])}(r.headers,o),i instanceof Blob&&i.type&&r.headers.set("Content-Type",i.type),r}get(e,t){return this.fetch(e,t)}post(e,t,s){return this.I(e,t,s,"POST")}put(e,t,s){return this.I(e,t,s,"PUT")}patch(e,t,s){return this.I(e,t,s,"PATCH")}delete(e,t,s){return this.I(e,t,s,"DELETE")}dispose(){this.t.forEach((e=>e.dispose?.())),this.t.length=0,this.i=null}C(){this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!=this.i&&Ae(this.i,xe.started)}R(){this.isRequesting=!! --this.activeRequestCount,this.isRequesting||null==this.i||Ae(this.i,xe.drained)}processRequest(e,t){return this.B(e,t,"request","requestError",Request,this)}processResponse(e,t,s){return this.B(e,t,"response","responseError",Response,s,this)}B(e,t,s,r,i,...n){return(t??[]).reduce(((e,t)=>{const o=t[s],a=t[r];return e.then(o?e=>e instanceof i?o.call(t,e,...n):e:qe,a?e=>a.call(t,e,...n):Fe)}),Promise.resolve(e))}I(e,t,s,r){return s||(s={}),s.method=r,null!=t&&(s.body=t),this.fetch(e,s)}}function qe(e){return e}function Fe(e){throw e}function Ae(e,t){const s=new e.ownerDocument.defaultView.CustomEvent(t,{bubbles:!0,cancelable:!0});setTimeout((()=>{e.dispatchEvent(s)}),1)}const xe=Object.freeze({started:"aurelia-fetch-client-request-started",drained:"aurelia-fetch-client-requests-drained"}),De=X.createInterface((e=>e.singleton(Be))),Ne=Object.freeze({Set:"au:fetch:cache:set",Get:"au:fetch:cache:get",Clear:"au:fetch:cache:clear",Reset:"au:fetch:cache:reset",Dispose:"au:fetch:cache:dispose",CacheHit:"au:fetch:cache:hit",CacheMiss:"au:fetch:cache:miss",CacheStale:"au:fetch:cache:stale",CacheStaleRefreshed:"au:fetch:cache:stale:refreshed",CacheExpired:"au:fetch:cache:expired",CacheBackgroundRefreshed:"au:fetch:cache:background:refreshed",CacheBackgroundRefreshing:"au:fetch:cache:background:refreshing",CacheBackgroundStopped:"au:fetch:cache:background:stopped"});class Be{constructor(){this.storage=D(Ie),this.p=D(se),this.ea=D(we),this.q=D(je),this.H=[],this.O=-1,this.j=[],this.T=new Map}subscribe(e,t){const s=this.ea.subscribe(e,t);return this.H.push(s),s}subscribeOnce(e,t){const s=this.ea.subscribeOnce(e,t);return this.H.push(s),s}setStaleTimer(e,t,s){const r=this.p.setTimeout((async()=>{this.delete(e),await this.q.get(s);const t=this.getItem(e);this.ea.publish(Ne.CacheStaleRefreshed,{key:e,value:t}),this.N(r)}),t);this.j.push(r)}startBackgroundRefresh(e){!e||this.O>-1||(this.O=this.p.setInterval((()=>{this.ea.publish(Ne.CacheBackgroundRefreshing),this.T.forEach(((e,t)=>{this.delete(t),this.q.get(e).then((()=>{const e=this.getItem(t);this.ea.publish(Ne.CacheBackgroundRefreshed,{key:t,value:e})}))}))}),e))}stopBackgroundRefresh(){this.p.clearInterval(this.O),this.O=-1,this.ea.publish(Ne.CacheBackgroundStopped)}set(e,t,s,r){const i={data:t,...s};this.setItem(e,i,r)}get(e){return this.getItem(e)?.data}setItem(e,t,s){t.lastCached=Date.now(),this.storage.set(e,t),this.T.set(e,s),this.ea.publish(Ne.Set,{key:e,value:t})}getItem(e){if(!this.storage.has(e))return void this.ea.publish(Ne.CacheMiss,{key:e});const t=this.storage.get(e);if(!t?.staleTime||!t?.lastCached)return this.ea.publish(Ne.CacheHit,{key:e,value:t}),t;const s=Date.now();if(s>t.lastCached+(t.staleTime??0))this.ea.publish(Ne.CacheStale,{key:e,value:t});else{if(!(s>t.lastCached+(t.cacheTime??0)))return this.ea.publish(Ne.CacheHit,{key:e,value:t}),t;this.ea.publish(Ne.CacheExpired,{key:e,value:t})}}delete(e){this.storage.delete(e),this.ea.publish(Ne.Clear,{key:e})}clear(){this.storage.clear(),this.T.clear(),this.ea.publish(Ne.Reset),this.stopBackgroundRefresh(),this.j.forEach((e=>{this.p.clearTimeout(e)})),this.j.length=0}dispose(){this.clear(),this.H.forEach((e=>e.dispose())),this.ea.publish(Ne.Dispose)}N(e){this.p.clearTimeout(e);const t=this.j.indexOf(e);t>-1&&this.j.splice(t,1)}}const _e={cacheTime:3e5,staleTime:0,refreshStaleImmediate:!1,refreshInterval:0};class He{constructor(e){this.P=D(De),this.cf={..._e,...e??{}}}request(e){if(this.P.startBackgroundRefresh(this.cf.refreshInterval),"GET"!==e.method)return e;const t=this.P.get(this.key(e));return this.mark(t)??e}response(e,t){if(!t)return e;if(e.headers.has(He.cacheHeader))return e;const s=this.key(t);return this.P.setItem(s,{data:e,...this.cf},t),this.cf?.refreshStaleImmediate&&this.cf.staleTime>0&&this.P.setStaleTimer(s,this.cf.staleTime,t),e}dispose(){this.P.stopBackgroundRefresh()}key(e){return`${He.prefix}${e.url}`}mark(e){return e?.headers.set(He.cacheHeader,"hit"),e}}He.prefix="au:interceptor:",He.cacheHeader="x-au-fetch-cache";class Le{constructor(){this.cache=D(se).globalThis.indexedDB,this.getStore=()=>this.database.transaction(Le.cacheName,"readwrite").objectStore(Le.cacheName),this.delete=e=>{this.getStore().delete(e)},this.has=e=>this.getStore().count(e).result>0,this.set=(e,t)=>this.getStore().put(t,e),this.get=e=>this.getStore().get(e).result,this.clear=()=>{const e=this.getStore();e.getAllKeys().result.forEach((t=>{e.delete(t)}))},this.database=this.cache.open(Le.cacheName).result}}Le.cacheName="au-cache";const Ue=Object.freeze({fixed:0,incremental:1,exponential:2,random:3}),Me={maxRetries:3,interval:1e3,strategy:Ue.fixed};class We{constructor(e){if(this.p=D(se),this.retryConfig={...Me,...e??{}},this.retryConfig.strategy===Ue.exponential&&this.retryConfig.interval<=1e3)throw Oe(5007,this.retryConfig.interval)}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return delete t.retryConfig,e}responseError(e,t,s){const{retryConfig:r}=t,{requestClone:i}=r;return Promise.resolve().then((()=>{if(r.counter<r.maxRetries){const n=null==r.doRetry||r.doRetry(e,t);return Promise.resolve(n).then((n=>{if(n){r.counter++;const e=function(e){const{interval:t,strategy:s,minRandomInterval:r,maxRandomInterval:i,counter:n}=e;if("function"==typeof s)return e.strategy(n);switch(s){case Ue.fixed:return Ge[Ue.fixed](t);case Ue.incremental:return Ge[Ue.incremental](n,t);case Ue.exponential:return Ge[Ue.exponential](n,t);case Ue.random:return Ge[Ue.random](n,t,r,i);default:throw Oe(5008,s)}}(r);return new Promise((t=>this.p.setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=i.clone();return"function"==typeof r.beforeRetry?r.beforeRetry(e,s):e})).then((e=>{const t={...e,retryConfig:r};return s.fetch(t)}))}throw delete t.retryConfig,e}))}throw delete t.retryConfig,e}))}}const Ge=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,s=0,r=6e4)=>Math.random()*(r-s)+s]}}]);