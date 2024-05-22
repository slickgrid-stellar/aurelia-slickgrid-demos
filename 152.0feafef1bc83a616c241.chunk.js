"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[152],{6441:(e,t,s)=>{s.d(t,{r:()=>o});var i=s(7514),r=s(2227);class n{set columnDefinitions(e){this._columnDefinitions=e}set datasetIdPropName(e){this._datasetIdPropName=e}constructor(){this._filterCount=0,this._columnDefinitions=[],this._datasetIdPropName="id",this._odataOptions={filterQueue:[],orderBy:""},this._defaultSortBy="",this._columnFilters={}}buildQuery(){if(!this._odataOptions)throw new Error('Odata Service requires certain options like "top" for it to work');this._odataOptions.filterQueue=[];const e=[];if(this._odataOptions&&!0===this._odataOptions.enableCount){const t=this._odataOptions.version&&this._odataOptions.version>=4?"$count=true":"$inlinecount=allpages";e.push(t)}if(this._odataOptions.top&&e.push(`$top=${this._odataOptions.top}`),this._odataOptions.skip&&e.push(`$skip=${this._odataOptions.skip}`),this._odataOptions.orderBy){let t="";t=Array.isArray(this._odataOptions.orderBy)?this._odataOptions.orderBy.join(","):this._odataOptions.orderBy,e.push(`$orderby=${t}`)}if(this._odataOptions.filterBy||this._odataOptions.filter){const e=this._odataOptions.filter||this._odataOptions.filterBy;if(e){this._filterCount=1,this._odataOptions.filterQueue=[];let t=e;Array.isArray(e)&&(this._filterCount=e.length,t=e.join(` ${this._odataOptions.filterBySeparator||"and"} `)),"string"==typeof t&&("("!==t[0]||")"!==t.slice(-1)?this.addToFilterQueueWhenNotExists(`(${t})`):this.addToFilterQueueWhenNotExists(t))}}if(this._odataOptions.filterQueue.length>0){const t=this._odataOptions.filterQueue.join(` ${this._odataOptions.filterBySeparator||"and"} `);this._odataOptions.filter=t,e.push(`$filter=${t}`)}if(this._odataOptions.enableSelect||this._odataOptions.enableExpand){const t=this._columnDefinitions.flatMap((e=>e.fields??[e.field]));t.unshift(this._datasetIdPropName);const s=this.buildSelectExpand([...new Set(t)]);if(this._odataOptions.enableSelect){const t=s.selectParts.join(",");e.push(`$select=${t}`)}if(this._odataOptions.enableExpand){const t=s.expandParts.join(",");e.push(`$expand=${t}`)}}return e.join("&")}getFilterCount(){return this._filterCount}get columnFilters(){return this._columnFilters}get options(){return this._odataOptions}set options(e){this._odataOptions=e}removeColumnFilter(e){this._columnFilters&&this._columnFilters.hasOwnProperty(e)&&delete this._columnFilters[e]}saveColumnFilter(e,t,s){this._columnFilters[e]={search:s,value:t}}updateOptions(e){for(const t of Object.keys(e))if(e.hasOwnProperty(t)&&(this._odataOptions[t]=e[t]),"orderBy"===t||"sortBy"===t){let s=e[t];this._odataOptions.caseType===i.X3g.pascalCase&&(Array.isArray(s)?s.forEach(((e,t,s)=>{s[t]=(0,r.titleCase)(e)})):s=(0,r.titleCase)(e[t])),this._odataOptions.orderBy=s,this._defaultSortBy=s}}addToFilterQueueWhenNotExists(e){this._odataOptions.filterQueue&&-1===this._odataOptions.filterQueue.indexOf(e)&&this._odataOptions.filterQueue.push(e)}buildSelectExpand(e){const t={},s=new Set;for(const i of e){const e=i.split("/");if(1===e.length)s.add(i);else{const i=e[0],r=e.splice(1).join("/");t[i]||(t[i]=[]),t[i].push(r),!this._odataOptions.enableExpand||this._odataOptions.version&&this._odataOptions.version>=4||s.add(i)}}return{selectParts:[...s],expandParts:this._odataOptions.enableExpand?this.buildExpand(t):[]}}buildExpand(e){const t=[];for(const s of Object.keys(e))if(this._odataOptions.enableSelect&&this._odataOptions.version&&this._odataOptions.version>=4){const i=this.buildSelectExpand(e[s]);let r=i.selectParts.join(",");r.length>0&&(r="$select="+r),this._odataOptions.enableExpand&&i.expandParts.length>0&&(r+=(r.length>0?";":"")+"$expand="+i.expandParts.join(",")),r.length>0&&(r="("+r+")"),t.push(s+r)}else t.push(s);return t}}class o{get columnDefinitions(){return this._columnDefinitions}get odataService(){return this._odataService}get _gridOptions(){return this._grid?.getOptions()??{}}constructor(){this._currentFilters=[],this._currentPagination=null,this._currentSorters=[],this._columnDefinitions=[],this.defaultOptions={top:25,orderBy:"",caseType:i.X3g.pascalCase},this._odataService=new n}init(e,t,s,i){this._grid=s;const r={...this.defaultOptions,...e};if(this._gridOptions&&!this._gridOptions.enablePagination)this._odataService.options={...r,top:void 0},this._currentPagination=null;else{const e=t&&t.pageSize?t.pageSize:this.defaultOptions.top;this._odataService.options={...r,top:e},this._currentPagination={pageNumber:1,pageSize:this._odataService.options.top||this.defaultOptions.top||20}}if(this.options=this._odataService.options,this.pagination=t,s?.getColumns){const e=i?.allColumns??s.getColumns()??[];this._columnDefinitions=e.filter((e=>!e.excludeFromQuery))}this._odataService.columnDefinitions=this._columnDefinitions,this._odataService.datasetIdPropName=this._gridOptions.datasetIdPropertyName||"id"}buildQuery(){return this._odataService.buildQuery()}postProcess(e){const t=this._odataService?.options?.version??2;if(this.pagination&&this._odataService?.options?.enableCount){const s=(this._odataService?.options?.countExtractor??t>=4?e=>e?.["@odata.count"]:3===t?e=>e?.__count:e=>e?.d?.__count)(e);"number"==typeof s&&(this.pagination.totalItems=s)}if(this._odataService?.options?.enableExpand){const s=(this._odataService?.options?.datasetExtractor??t>=4?e=>e?.value:3===t?e=>e?.results:e=>e?.d?.results)(e);if(Array.isArray(s)){const e=new Set(this._columnDefinitions.flatMap((e=>e.fields??[e.field])).filter((e=>e.includes("/"))));if(e.size>0){const t=new Set;for(const i of s){for(const s of e){const e=s.split("/"),r=e[0];t.add(r);let n=i[r];for(let t=1;t<e.length;t++){const s=e[t];n&&"object"==typeof n&&s in n&&(n=n[s])}i[s]=n}for(const e of t)"object"==typeof i[e]&&delete i[e]}}}}}clearFilters(){this._currentFilters=[],this.updateFilters([])}clearSorters(){this._currentSorters=[],this.updateSorters([])}updateOptions(e){this.options={...this.options,...e},this._odataService.options=this.options}removeColumnFilter(e){this._odataService.removeColumnFilter(e)}getCurrentFilters(){return this._currentFilters}getCurrentPagination(){return this._currentPagination}getCurrentSorters(){return this._currentSorters}mapOdataOperator(e){let t="";switch(e){case"<":t="lt";break;case"<=":t="le";break;case">":t="gt";break;case">=":t="ge";break;case"<>":case"!=":t="ne";break;default:t="eq"}return t}resetPaginationOptions(){this._odataService.updateOptions({skip:0})}saveColumnFilter(e,t,s){this._odataService.saveColumnFilter(e,t,s)}processOnFilterChanged(e,t){if(void 0===this._gridOptions.backendServiceApi)throw new Error('Something went wrong in the GridOdataService, "backendServiceApi" is not initialized');if(this._currentFilters=this.castFilterToColumnFilters(t.columnFilters),!t||!t.grid)throw new Error('Something went wrong when trying create the GridOdataService, it seems that "args" is not populated correctly');return this.updateFilters(t.columnFilters),this.resetPaginationOptions(),this._odataService.buildQuery()}processOnPaginationChanged(e,t){const s=+(t.pageSize||(this.pagination?this.pagination.pageSize:20));return this.updatePagination(t.newPage,s),this._odataService.buildQuery()}processOnSortChanged(e,t){const s=t.multiColumnSort?t.sortCols:new Array({columnId:t.sortCol?.id??"",sortCol:t.sortCol,sortAsc:t.sortAsc});return this.updateSorters(s),this._odataService.buildQuery()}updateFilters(e,t){let s="";const n=[],o=this._odataService?.options?.version??2;t&&(this._currentFilters=this.castFilterToColumnFilters(e));for(const a in e)if(e.hasOwnProperty(a)){const h=e[a];let c;if(c=t&&Array.isArray(this._columnDefinitions)?this._columnDefinitions.find((e=>e.id===h.columnId)):h.columnDef,!c)throw new Error("[GridOData Service]: Something went wrong in trying to get the column definition of the specified filter (or preset filters). Did you make a typo on the filter columnId?");let l=c.filter?.queryField||c.queryFieldFilter||c.queryField||c.field||c.name||"";l instanceof HTMLElement&&(l=(0,r.stripTags)(l.innerHTML));const u=c.type||i.PUO.string;let d=(h?.searchTerms?[...h.searchTerms]:null)||[],p=Array.isArray(d)&&1===d.length?d[0]:"";if(void 0===p&&(p=""),!l)throw new Error('GridOData filter could not find the field name to query the search, your column definition must include a valid "field" or "name" (optionally you can also use the "queryfield").');if(this._odataService.options.useVerbatimSearchTerms||h.verbatimSearchTerms){n.push(`${l} ${h.operator} ${JSON.stringify(h.searchTerms)}`.trim());continue}p=null==p?"":`${p}`;const f=!1!==(c.autoParseInputFilterOperator??this._gridOptions.autoParseInputFilterOperator)?p.match(/^([<>!=*]{0,2})(.*[^<>!=*])([*]?)$/):[p,"",p,""];let g=h.operator||f?.[1],y=f?.[2]||"";const m=f?.[3]||"*z"===g||g===i.huT.endsWith?"*":"",_=h.bypassBackendQuery||!1;if(l&&""===y&&d.length<=1){this.removeColumnFilter((0,r.getHtmlStringOutput)(l));continue}if(Array.isArray(d)&&1===d.length&&"string"==typeof d[0]&&d[0].indexOf("..")>=0&&(g!==i.huT.rangeInclusive&&g!==i.huT.rangeExclusive&&(g=this._gridOptions.defaultFilterRangeOperator??i.huT.rangeInclusive),d=d[0].split("..",2),""===d[0]?(g=g===i.huT.rangeInclusive?"<=":g===i.huT.rangeExclusive?"<":g,d=d.slice(1),y=d[0]):""===d[1]&&(g=g===i.huT.rangeInclusive?">=":g===i.huT.rangeExclusive?">":g,d=d.slice(0,1),y=d[0])),!g&&c.filter&&(g=c.filter.operator),!g&&Array.isArray(d)&&2===d.length&&d[0]&&d[1]&&(g=this._gridOptions.defaultFilterRangeOperator),g!==i.huT.rangeInclusive&&g!==i.huT.rangeExclusive||!Array.isArray(d)||1!==d.length||u!==i.PUO.date||(g=i.huT.equal),g||(g=(0,i.OIR)(u)),_)l&&this.saveColumnFilter((0,r.getHtmlStringOutput)(l),p,d);else{if(y=this.normalizeSearchValue(u,y,o),Array.isArray(d)&&d.forEach(((e,t)=>{d[t]=this.normalizeSearchValue(u,d[t],o)})),s="",this._odataService.options.caseType===i.X3g.pascalCase&&(l=(0,r.titleCase)((0,r.getHtmlStringOutput)(l||""))),d&&d.length>1&&("IN"===g||"NIN"===g||"NOTIN"===g||"NOT IN"===g||"NOT_IN"===g)){const e=[];if("IN"===g){for(let t=0,s=d.length;t<s;t++)e.push(`${l} eq ${d[t]}`);s=e.join(" or ")}else{for(let t=0,s=d.length;t<s;t++)e.push(`${l} ne ${d[t]}`);s=e.join(" and ")}"string"==typeof s&&"("===s[0]&&")"===s.slice(-1)||(s=`(${s})`)}else"*"===g||"a*"===g||"*z"===g||"*"===m||g===i.huT.startsWith||g===i.huT.endsWith?s="*"===g||"*z"===g||g===i.huT.endsWith?`endswith(${l}, ${y})`:`startswith(${l}, ${y})`:g===i.huT.rangeExclusive||g===i.huT.rangeInclusive?s=this.filterBySearchTermRange((0,r.getHtmlStringOutput)(l),g,d):""!==g&&g!==i.huT.contains&&g!==i.huT.notContains||u!==i.PUO.string&&u!==i.PUO.text&&u!==i.PUO.readonly?s=`${l} ${this.mapOdataOperator(g)} ${y}`:(s=o>=4?`contains(${l}, ${y})`:`substringof(${y}, ${l})`,g===i.huT.notContains&&(s=`not ${s}`));""!==s&&(n.push(s.trim()),this.saveColumnFilter((0,r.getHtmlStringOutput)(l||""),p,y))}}this._odataService.updateOptions({filter:n.length>0?n.join(" and "):"",skip:void 0})}updatePagination(e,t){this._currentPagination={pageNumber:e,pageSize:t},!this._gridOptions||!this._gridOptions.enablePagination&&this._gridOptions.hasOwnProperty("enablePagination")||this._odataService.updateOptions({top:t,skip:(e-1)*t})}updateSorters(e,t){let s=[];const n=[];if(!e&&t){s=t,s.forEach((e=>e.direction=e.direction.toLowerCase()));const e=s.map((e=>{const t=this._columnDefinitions.find((t=>t.id===e.columnId));return n.push({field:t?(t.queryFieldSorter||t.queryField||t.field)+"":e.columnId+"",direction:e.direction}),t?{columnId:e.columnId,sortAsc:e.direction.toUpperCase()===i.UEL.ASC}:null}));Array.isArray(e)&&this._grid&&this._grid.setSortColumns(e)}else if(e&&!t)if(0===e?.length);else if(e)for(const t of e)if(t.sortCol){let e=(t.sortCol.queryFieldSorter||t.sortCol.queryField||t.sortCol.field)+"",o=(t.sortCol.field||t.sortCol.id)+"",a=(t.sortCol.queryFieldSorter||t.sortCol.queryField||t.sortCol.field||"")+"";this._odataService.options.caseType===i.X3g.pascalCase&&(e=(0,r.titleCase)(e),o=(0,r.titleCase)(o),a=(0,r.titleCase)(a)),s.push({columnId:t.sortCol.id,direction:t.sortAsc?i.UEL.asc:i.UEL.desc}),""!==a&&n.push({field:a,direction:t.sortAsc?i.UEL.ASC:i.UEL.DESC})}s=s||[];const o=n.map((e=>{let t="";return e&&e.field&&(t=`${this._odataService.options.caseType===i.X3g.pascalCase?(0,r.titleCase)(e.field):e.field} ${e&&e.direction&&e.direction.toLowerCase()||""}`),t})).join(",");return this._odataService.updateOptions({orderBy:o}),this._currentSorters=s,this._odataService.buildQuery()}castFilterToColumnFilters(e){const t="object"==typeof e?Object.keys(e).map((t=>e[t])):e;return Array.isArray(t)?t.map((e=>{const t={columnId:e.columnId||""};return e.operator&&(t.operator=e.operator),e.targetSelector&&(t.targetSelector=e.targetSelector),Array.isArray(e.searchTerms)&&(t.searchTerms=e.searchTerms),t})):[]}filterBySearchTermRange(e,t,s){let r="";return Array.isArray(s)&&2===s.length&&(t===i.huT.rangeInclusive?(r=`(${e} ge ${s[0]}`,""!==s[1]&&(r+=` and ${e} le ${s[1]}`),r+=")"):t===i.huT.rangeExclusive&&(r=`(${e} gt ${s[0]}`,""!==s[1]&&(r+=` and ${e} lt ${s[1]}`),r+=")")),r}normalizeSearchValue(e,t,s){switch(e){case i.PUO.date:t=(0,i.Odt)(t),t=s>=4?t:`DateTime'${t}'`;break;case i.PUO.string:case i.PUO.text:case i.PUO.readonly:"string"==typeof t&&(t=t.replace(/'/g,"''"),t=`'${t=encodeURIComponent(t)}'`);break;case i.PUO.integer:case i.PUO.number:case i.PUO.float:"string"==typeof t&&(""!==(t=(t=(t=(t=(t=t.replace(/\.\./g,".")).replace(/\.+$/g,"")).replace(/^\.+/g,"0.")).replace(/^-+\.+/g,"-0.")).replace(/(?!^-)[^\d.]/g,""))&&"-"!==t||(t="0"))}return t}}},8880:(e,t,s)=>{s.d(t,{Pq:()=>r,xl:()=>u});var i=s(7557);function r(e,t){return JSON.stringify(void 0!==e?e:{},t)}class n{constructor(){this.cache=new Map,this.delete=e=>this.cache.delete(e),this.has=e=>this.cache.has(e),this.set=(e,t)=>this.cache.set(e,t),this.get=e=>this.cache.get(e),this.clear=()=>this.cache.clear()}}const o=i.DI.createInterface((e=>e.singleton(n)));class a{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null,this.c=(0,i.hd)(i.p7)}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:h})}withRetry(e){const t=this.c.invoke(I,[e]);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function h(e){if(!e.ok)throw e;return e}const c=/^([a-z][a-z0-9+\-.]*:)?\/\//i,l=i.DI.createInterface("fetch",(e=>{if("function"!=typeof fetch)throw new Error("Could not resolve fetch function. Please provide a fetch function implementation or a polyfill for the global fetch function.");return e.instance(fetch)})),u=i.DI.createInterface("IHttpClient",(e=>e.aliasTo(d)));class d{constructor(){this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.t=[],this.i=null,this.h=(0,i.hd)((0,i.P9)(a)),this.u=(0,i.hd)(l)}get interceptors(){return this.t.slice(0)}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw new Error("invalid config, expecting a function or an object, received "+typeof e);{t=this.h(),t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.t,t.dispatcher=this.i;const s=e(t);if(null!=s){if("object"!=typeof s)throw new Error("The config callback did not return a valid HttpClientConfiguration like instance. Received "+typeof s);t=s}}}const s=t.defaults;if(s?.headers instanceof Headers)throw new Error("Default headers must be a plain object.");const i=t.interceptors;if(i?.length>0){if(i.filter((e=>e instanceof I)).length>1)throw new Error("Only one RetryInterceptor is allowed.");const e=i.findIndex((e=>e instanceof I));if(e>=0&&e!==i.length-1)throw new Error("The retry interceptor must be the last interceptor defined.")}return this.baseUrl=t.baseUrl,this.defaults=s,this.t=t.interceptors??[],this.i=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.C();let s=this.buildRequest(e,t);return this.processRequest(s,this.t).then((e=>{let t;if(e instanceof Response)t=Promise.resolve(e);else{if(!(e instanceof Request))throw new Error(`An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [${e}]`);s=e,t=this.u.call(void 0,s)}return this.processResponse(t,this.t,s)})).then((e=>e instanceof Request?this.fetch(e):e)).then((e=>(this.R(),e)),(e=>{throw this.R(),e}))}buildRequest(e,t){const s=this.defaults??{};let i,r,n;const o=function(e){const t={},s=e??{};for(const e of Object.keys(s))t[e]="function"==typeof s[e]?s[e]():s[e];return t}(s.headers);if(e instanceof Request)i=e,n=new Headers(i.headers).get("Content-Type");else{t||(t={}),r=t.body;const o=void 0!==r?{body:r}:null,a={...s,headers:{},...t,...o};n=new Headers(a.headers).get("Content-Type"),i=new Request(p(this.baseUrl,e),a)}return n||(new Headers(o).has("content-type")?i.headers.set("Content-Type",new Headers(o).get("content-type")):void 0!==r&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(r)&&i.headers.set("Content-Type","application/json")),function(e,t){const s=t??{};for(const t of Object.keys(s))e.has(t)||e.set(t,s[t])}(i.headers,o),r instanceof Blob&&r.type&&i.headers.set("Content-Type",r.type),i}get(e,t){return this.fetch(e,t)}post(e,t,s){return this.I(e,t,s,"POST")}put(e,t,s){return this.I(e,t,s,"PUT")}patch(e,t,s){return this.I(e,t,s,"PATCH")}delete(e,t,s){return this.I(e,t,s,"DELETE")}dispose(){this.t.forEach((e=>e.dispose?.())),this.t.length=0,this.i=null}C(){this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!=this.i&&y(this.i,m.started)}R(){this.isRequesting=!! --this.activeRequestCount,this.isRequesting||null==this.i||y(this.i,m.drained)}processRequest(e,t){return this.B(e,t,"request","requestError",Request,this)}processResponse(e,t,s){return this.B(e,t,"response","responseError",Response,s,this)}B(e,t,s,i,r,...n){return(t??[]).reduce(((e,t)=>{const o=t[s],a=t[i];return e.then(o?e=>e instanceof r?o.call(t,e,...n):e:f,a?e=>a.call(t,e,...n):g)}),Promise.resolve(e))}I(e,t,s,i){return s||(s={}),s.method=i,null!=t&&(s.body=t),this.fetch(e,s)}}function p(e,t){return c.test(t)?t:(e??"")+t}function f(e){return e}function g(e){throw e}function y(e,t){const s=new e.ownerDocument.defaultView.CustomEvent(t,{bubbles:!0,cancelable:!0});setTimeout((()=>{e.dispatchEvent(s)}),1)}const m=Object.freeze({started:"aurelia-fetch-client-request-started",drained:"aurelia-fetch-client-requests-drained"}),_=i.DI.createInterface((e=>e.singleton(C))),O=Object.freeze({Set:"au:fetch:cache:set",Get:"au:fetch:cache:get",Clear:"au:fetch:cache:clear",Reset:"au:fetch:cache:reset",Dispose:"au:fetch:cache:dispose",CacheHit:"au:fetch:cache:hit",CacheMiss:"au:fetch:cache:miss",CacheStale:"au:fetch:cache:stale",CacheStaleRefreshed:"au:fetch:cache:stale:refreshed",CacheExpired:"au:fetch:cache:expired",CacheBackgroundRefreshed:"au:fetch:cache:background:refreshed",CacheBackgroundRefreshing:"au:fetch:cache:background:refreshing",CacheBackgroundStopped:"au:fetch:cache:background:stopped"});class C{constructor(){this.storage=(0,i.hd)(o),this.p=(0,i.hd)(i.r_),this.ea=(0,i.hd)(i.xe),this.q=(0,i.hd)(u),this.H=[],this.O=-1,this.j=[],this.T=new Map}subscribe(e,t){const s=this.ea.subscribe(e,t);return this.H.push(s),s}subscribeOnce(e,t){const s=this.ea.subscribeOnce(e,t);return this.H.push(s),s}setStaleTimer(e,t,s){const i=this.p.setTimeout((async()=>{this.delete(e),await this.q.get(s);const t=this.getItem(e);this.ea.publish(O.CacheStaleRefreshed,{key:e,value:t}),this.P(i)}),t);this.j.push(i)}startBackgroundRefresh(e){!e||this.O>-1||(this.O=this.p.setInterval((()=>{this.ea.publish(O.CacheBackgroundRefreshing),this.T.forEach(((e,t)=>{this.delete(t),this.q.get(e).then((()=>{const e=this.getItem(t);this.ea.publish(O.CacheBackgroundRefreshed,{key:t,value:e})}))}))}),e))}stopBackgroundRefresh(){this.p.clearInterval(this.O),this.O=-1,this.ea.publish(O.CacheBackgroundStopped)}set(e,t,s,i){const r={data:t,...s};this.setItem(e,r,i)}get(e){return this.getItem(e)?.data}setItem(e,t,s){t.lastCached=Date.now(),this.storage.set(e,t),this.T.set(e,s),this.ea.publish(O.Set,{key:e,value:t})}getItem(e){if(!this.storage.has(e))return void this.ea.publish(O.CacheMiss,{key:e});const t=this.storage.get(e);if(!t?.staleTime||!t?.lastCached)return this.ea.publish(O.CacheHit,{key:e,value:t}),t;const s=Date.now();if(s>t.lastCached+(t.staleTime??0))this.ea.publish(O.CacheStale,{key:e,value:t});else{if(!(s>t.lastCached+(t.cacheTime??0)))return this.ea.publish(O.CacheHit,{key:e,value:t}),t;this.ea.publish(O.CacheExpired,{key:e,value:t})}}delete(e){this.storage.delete(e),this.ea.publish(O.Clear,{key:e})}clear(){this.storage.clear(),this.T.clear(),this.ea.publish(O.Reset),this.stopBackgroundRefresh(),this.j.forEach((e=>{this.p.clearTimeout(e)})),this.j.length=0}dispose(){this.clear(),this.H.forEach((e=>e.dispose())),this.ea.publish(O.Dispose)}P(e){this.p.clearTimeout(e);const t=this.j.indexOf(e);t>-1&&this.j.splice(t,1)}}const b={cacheTime:3e5,staleTime:0,refreshStaleImmediate:!1,refreshInterval:0};class S{constructor(e){this.N=(0,i.hd)(_),this.cf={...b,...e??{}}}request(e){if(this.N.startBackgroundRefresh(this.cf.refreshInterval),"GET"!==e.method)return e;const t=this.N.get(this.key(e));return this.mark(t)??e}response(e,t){if(!t)return e;if(e.headers.has(S.cacheHeader))return e;const s=this.key(t);return this.N.setItem(s,{data:e,...this.cf},t),this.cf?.refreshStaleImmediate&&this.cf.staleTime>0&&this.N.setStaleTimer(s,this.cf.staleTime,t),e}dispose(){this.N.stopBackgroundRefresh()}key(e){return`${S.prefix}${e.url}`}mark(e){return e?.headers.set(S.cacheHeader,"hit"),e}}S.prefix="au:interceptor:",S.cacheHeader="x-au-fetch-cache";class v{constructor(){this.cache=(0,i.hd)(i.r_).globalThis.indexedDB,this.getStore=()=>this.database.transaction(v.cacheName,"readwrite").objectStore(v.cacheName),this.delete=e=>{this.getStore().delete(e)},this.has=e=>this.getStore().count(e).result>0,this.set=(e,t)=>this.getStore().put(t,e),this.get=e=>this.getStore().get(e).result,this.clear=()=>{const e=this.getStore();e.getAllKeys().result.forEach((t=>{e.delete(t)}))},this.database=this.cache.open(v.cacheName).result}}v.cacheName="au-cache";const w=Object.freeze({fixed:0,incremental:1,exponential:2,random:3}),T={maxRetries:3,interval:1e3,strategy:w.fixed};class I{constructor(e){if(this.p=(0,i.hd)(i.r_),this.retryConfig={...T,...e??{}},this.retryConfig.strategy===w.exponential&&this.retryConfig.interval<=1e3)throw new Error("An interval less than or equal to 1 second is not allowed when using the exponential retry strategy")}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return delete t.retryConfig,e}responseError(e,t,s){const{retryConfig:i}=t,{requestClone:r}=i;return Promise.resolve().then((()=>{if(i.counter<i.maxRetries){const n=null==i.doRetry||i.doRetry(e,t);return Promise.resolve(n).then((n=>{if(n){i.counter++;const e=function(e){const{interval:t,strategy:s,minRandomInterval:i,maxRandomInterval:r,counter:n}=e;if("function"==typeof s)return e.strategy(n);switch(s){case w.fixed:return E[w.fixed](t);case w.incremental:return E[w.incremental](n,t);case w.exponential:return E[w.exponential](n,t);case w.random:return E[w.random](n,t,i,r);default:throw new Error("Unrecognized retry strategy")}}(i);return new Promise((t=>this.p.setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=r.clone();return"function"==typeof i.beforeRetry?i.beforeRetry(e,s):e})).then((e=>{const t={...e,retryConfig:i};return s.fetch(t)}))}throw delete t.retryConfig,e}))}throw delete t.retryConfig,e}))}}const E=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,s=0,i=6e4)=>Math.random()*(i-s)+s]}}]);