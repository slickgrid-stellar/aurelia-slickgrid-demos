"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[441],{6441:(t,e,i)=>{i.d(e,{r:()=>n});var s=i(7514),r=i(2227);class o{set columnDefinitions(t){this._columnDefinitions=t}set datasetIdPropName(t){this._datasetIdPropName=t}constructor(){this._filterCount=0,this._columnDefinitions=[],this._datasetIdPropName="id",this._odataOptions={filterQueue:[],orderBy:""},this._defaultSortBy="",this._columnFilters={}}buildQuery(){if(!this._odataOptions)throw new Error('Odata Service requires certain options like "top" for it to work');this._odataOptions.filterQueue=[];const t=[];if(this._odataOptions&&!0===this._odataOptions.enableCount){const e=this._odataOptions.version&&this._odataOptions.version>=4?"$count=true":"$inlinecount=allpages";t.push(e)}if(this._odataOptions.top&&t.push(`$top=${this._odataOptions.top}`),this._odataOptions.skip&&t.push(`$skip=${this._odataOptions.skip}`),this._odataOptions.orderBy){let e="";e=Array.isArray(this._odataOptions.orderBy)?this._odataOptions.orderBy.join(","):this._odataOptions.orderBy,t.push(`$orderby=${e}`)}if(this._odataOptions.filterBy||this._odataOptions.filter){const t=this._odataOptions.filter||this._odataOptions.filterBy;if(t){this._filterCount=1,this._odataOptions.filterQueue=[];let e=t;Array.isArray(t)&&(this._filterCount=t.length,e=t.join(` ${this._odataOptions.filterBySeparator||"and"} `)),"string"==typeof e&&("("!==e[0]||")"!==e.slice(-1)?this.addToFilterQueueWhenNotExists(`(${e})`):this.addToFilterQueueWhenNotExists(e))}}if(this._odataOptions.filterQueue.length>0){const e=this._odataOptions.filterQueue.join(` ${this._odataOptions.filterBySeparator||"and"} `);this._odataOptions.filter=e,t.push(`$filter=${e}`)}if(this._odataOptions.enableSelect||this._odataOptions.enableExpand){const e=this._columnDefinitions.flatMap((t=>t.fields??[t.field]));e.unshift(this._datasetIdPropName);const i=this.buildSelectExpand([...new Set(e)]);if(this._odataOptions.enableSelect){const e=i.selectParts.join(",");t.push(`$select=${e}`)}if(this._odataOptions.enableExpand){const e=i.expandParts.join(",");t.push(`$expand=${e}`)}}return t.join("&")}getFilterCount(){return this._filterCount}get columnFilters(){return this._columnFilters}get options(){return this._odataOptions}set options(t){this._odataOptions=t}removeColumnFilter(t){this._columnFilters&&this._columnFilters.hasOwnProperty(t)&&delete this._columnFilters[t]}saveColumnFilter(t,e,i){this._columnFilters[t]={search:i,value:e}}updateOptions(t){for(const e of Object.keys(t))if(t.hasOwnProperty(e)&&(this._odataOptions[e]=t[e]),"orderBy"===e||"sortBy"===e){let i=t[e];this._odataOptions.caseType===s.X3g.pascalCase&&(Array.isArray(i)?i.forEach(((t,e,i)=>{i[e]=(0,r.titleCase)(t)})):i=(0,r.titleCase)(t[e])),this._odataOptions.orderBy=i,this._defaultSortBy=i}}addToFilterQueueWhenNotExists(t){this._odataOptions.filterQueue&&-1===this._odataOptions.filterQueue.indexOf(t)&&this._odataOptions.filterQueue.push(t)}buildSelectExpand(t){const e={},i=new Set;for(const s of t){const t=s.split("/");if(1===t.length)i.add(s);else{const s=t[0],r=t.splice(1).join("/");e[s]||(e[s]=[]),e[s].push(r),!this._odataOptions.enableExpand||this._odataOptions.version&&this._odataOptions.version>=4||i.add(s)}}return{selectParts:[...i],expandParts:this._odataOptions.enableExpand?this.buildExpand(e):[]}}buildExpand(t){const e=[];for(const i of Object.keys(t))if(this._odataOptions.enableSelect&&this._odataOptions.version&&this._odataOptions.version>=4){const s=this.buildSelectExpand(t[i]);let r=s.selectParts.join(",");r.length>0&&(r="$select="+r),this._odataOptions.enableExpand&&s.expandParts.length>0&&(r+=(r.length>0?";":"")+"$expand="+s.expandParts.join(",")),r.length>0&&(r="("+r+")"),e.push(i+r)}else e.push(i);return e}}class n{get columnDefinitions(){return this._columnDefinitions}get odataService(){return this._odataService}get _gridOptions(){return this._grid?.getOptions()??{}}constructor(){this._currentFilters=[],this._currentPagination=null,this._currentSorters=[],this._columnDefinitions=[],this.defaultOptions={top:25,orderBy:"",caseType:s.X3g.pascalCase},this._odataService=new o}init(t,e,i,s){this._grid=i;const r={...this.defaultOptions,...t};if(this._gridOptions&&!this._gridOptions.enablePagination)this._odataService.options={...r,top:void 0},this._currentPagination=null;else{const t=e&&e.pageSize?e.pageSize:this.defaultOptions.top;this._odataService.options={...r,top:t},this._currentPagination={pageNumber:1,pageSize:this._odataService.options.top||this.defaultOptions.top||20}}if(this.options=this._odataService.options,this.pagination=e,i?.getColumns){const t=s?.allColumns??i.getColumns()??[];this._columnDefinitions=t.filter((t=>!t.excludeFromQuery))}this._odataService.columnDefinitions=this._columnDefinitions,this._odataService.datasetIdPropName=this._gridOptions.datasetIdPropertyName||"id"}buildQuery(){return this._odataService.buildQuery()}postProcess(t){const e=this._odataService.options.version??2;if(this.pagination&&this._odataService.options.enableCount){const i=(this._odataService.options.countExtractor??e>=4?t=>t?.["@odata.count"]:3===e?t=>t?.__count:t=>t?.d?.__count)(t);"number"==typeof i&&(this.pagination.totalItems=i)}if(this._odataService.options.enableExpand){const i=(this._odataService.options.datasetExtractor??e>=4?t=>t?.value:3===e?t=>t?.results:t=>t?.d?.results)(t);if(Array.isArray(i)){const t=new Set(this._columnDefinitions.flatMap((t=>t.fields??[t.field])).filter((t=>t.includes("/"))));if(t.size>0){const e=new Set;for(const s of i){for(const i of t){const t=i.split("/"),r=t[0];e.add(r);let o=s[r];for(let e=1;e<t.length;e++){const i=t[e];o&&"object"==typeof o&&i in o&&(o=o[i])}s[i]=o}for(const t of e)"object"==typeof s[t]&&delete s[t]}}}}}clearFilters(){this._currentFilters=[],this.updateFilters([])}clearSorters(){this._currentSorters=[],this.updateSorters([])}updateOptions(t){this.options={...this.options,...t},this._odataService.options=this.options}removeColumnFilter(t){this._odataService.removeColumnFilter(t)}getCurrentFilters(){return this._currentFilters}getCurrentPagination(){return this._currentPagination}getCurrentSorters(){return this._currentSorters}mapOdataOperator(t){let e="";switch(t){case"<":e="lt";break;case"<=":e="le";break;case">":e="gt";break;case">=":e="ge";break;case"<>":case"!=":e="ne";break;default:e="eq"}return e}resetPaginationOptions(){this._odataService.updateOptions({skip:0})}saveColumnFilter(t,e,i){this._odataService.saveColumnFilter(t,e,i)}processOnFilterChanged(t,e){if(void 0===this._gridOptions.backendServiceApi)throw new Error('Something went wrong in the GridOdataService, "backendServiceApi" is not initialized');if(this._currentFilters=this.castFilterToColumnFilters(e.columnFilters),!e||!e.grid)throw new Error('Something went wrong when trying create the GridOdataService, it seems that "args" is not populated correctly');return this.updateFilters(e.columnFilters),this.resetPaginationOptions(),this._odataService.buildQuery()}processOnPaginationChanged(t,e){const i=+(e.pageSize||(this.pagination?this.pagination.pageSize:20));return this.updatePagination(e.newPage,i),this._odataService.buildQuery()}processOnSortChanged(t,e){const i=e.multiColumnSort?e.sortCols:new Array({columnId:e.sortCol?.id??"",sortCol:e.sortCol,sortAsc:e.sortAsc});return this.updateSorters(i),this._odataService.buildQuery()}updateFilters(t,e){let i="";const o=[],n=this._odataService.options.version??2;e&&(this._currentFilters=this.castFilterToColumnFilters(t));for(const a in t)if(t.hasOwnProperty(a)){const l=t[a];let d;if(d=e&&Array.isArray(this._columnDefinitions)?this._columnDefinitions.find((t=>t.id===l.columnId)):l.columnDef,!d)throw new Error("[GridOData Service]: Something went wrong in trying to get the column definition of the specified filter (or preset filters). Did you make a typo on the filter columnId?");let u=d.filter?.queryField||d.queryFieldFilter||d.queryField||d.field||d.name||"";u instanceof HTMLElement&&(u=(0,r.stripTags)(u.innerHTML));const h=d.type||s.PUO.string;let c=(l?.searchTerms?[...l.searchTerms]:null)||[],p=Array.isArray(c)&&1===c.length?c[0]:"";if(void 0===p&&(p=""),!u)throw new Error('GridOData filter could not find the field name to query the search, your column definition must include a valid "field" or "name" (optionally you can also use the "queryfield").');if(this._odataService.options.useVerbatimSearchTerms||l.verbatimSearchTerms){o.push(`${u} ${l.operator} ${JSON.stringify(l.searchTerms)}`.trim());continue}p=null==p?"":`${p}`;const f=!1!==(d.autoParseInputFilterOperator??this._gridOptions.autoParseInputFilterOperator)?p.match(/^((.*[^\\*\r\n])[*]{1}(.*[^*\r\n]))|^([<>!=*]{0,2})(.*[^<>!=*])([*]?)$/)||[]:[p,"","","","",p,""],g=f?.[2]||"",_=f?.[3]||"";let O=l.operator||f?.[4],m=f?.[1]||f?.[5]||"";const y=f?.[6]||"*z"===O||O===s.huT.endsWith?"*":"",S=l.bypassBackendQuery||!1;if(u&&""===m&&c.length<=1){this.removeColumnFilter((0,r.getHtmlStringOutput)(u));continue}if(g&&_?(c=[g,_],O=s.huT.startsWithEndsWith):Array.isArray(c)&&1===c.length&&"string"==typeof c[0]&&c[0].indexOf("..")>=0&&(O!==s.huT.rangeInclusive&&O!==s.huT.rangeExclusive&&(O=this._gridOptions.defaultFilterRangeOperator??s.huT.rangeInclusive),c=c[0].split("..",2),""===c[0]?(O=O===s.huT.rangeInclusive?"<=":O===s.huT.rangeExclusive?"<":O,c=c.slice(1),m=c[0]):""===c[1]&&(O=O===s.huT.rangeInclusive?">=":O===s.huT.rangeExclusive?">":O,c=c.slice(0,1),m=c[0])),!O&&d.filter&&(O=d.filter.operator),!O&&Array.isArray(c)&&2===c.length&&c[0]&&c[1]&&(O=this._gridOptions.defaultFilterRangeOperator),O!==s.huT.rangeInclusive&&O!==s.huT.rangeExclusive||!Array.isArray(c)||1!==c.length||h!==s.PUO.date||(O=s.huT.equal),O||(O=(0,s.OIR)(h)),S)u&&this.saveColumnFilter((0,r.getHtmlStringOutput)(u),p,c);else{let t;if(m=this.normalizeSearchValue(h,m,n),Array.isArray(c)&&c.forEach(((t,e)=>{c[e]=this.normalizeSearchValue(h,c[e],n)})),i="",this._odataService.options.caseType===s.X3g.pascalCase&&(u=(0,r.titleCase)((0,r.getHtmlStringOutput)(u||""))),"function"==typeof this._odataService.options.filterQueryOverride&&(t=this._odataService.options.filterQueryOverride({fieldName:(0,r.getHtmlStringOutput)(u),columnDef:d,operator:O,columnFilterOperator:l.operator,searchValue:m,grid:this._grid})),void 0!==t)i=t;else if(O===s.huT.startsWithEndsWith&&Array.isArray(c)&&2===c.length){const t=[],[e,s]=c;t.push(`startswith(${u}, ${e})`),t.push(`endswith(${u}, ${s})`),i=t.join(" and ")}else if(c?.length>1&&("IN"===O||"NIN"===O||"NOTIN"===O||"NOT IN"===O||"NOT_IN"===O)){const t=[];if("IN"===O){for(let e=0,i=c.length;e<i;e++)t.push(`${u} eq ${c[e]}`);i=t.join(" or ")}else{for(let e=0,i=c.length;e<i;e++)t.push(`${u} ne ${c[e]}`);i=t.join(" and ")}"string"==typeof i&&"("===i[0]&&")"===i.slice(-1)||(i=`(${i})`)}else"*"===O||"a*"===O||"*z"===O||"*"===y||O===s.huT.startsWith||O===s.huT.endsWith?i="*"===O||"*z"===O||O===s.huT.endsWith?`endswith(${u}, ${m})`:`startswith(${u}, ${m})`:O===s.huT.rangeExclusive||O===s.huT.rangeInclusive?i=this.filterBySearchTermRange((0,r.getHtmlStringOutput)(u),O,c):""!==O&&O!==s.huT.contains&&O!==s.huT.notContains||h!==s.PUO.string&&h!==s.PUO.text&&h!==s.PUO.readonly?i=`${u} ${this.mapOdataOperator(O)} ${m}`:(i=n>=4?`contains(${u}, ${m})`:`substringof(${m}, ${u})`,O===s.huT.notContains&&(i=`not ${i}`));""!==i&&(o.push(i.trim()),this.saveColumnFilter((0,r.getHtmlStringOutput)(u||""),p,m))}}this._odataService.updateOptions({filter:o.length>0?o.join(" and "):"",skip:void 0})}updatePagination(t,e){this._currentPagination={pageNumber:t,pageSize:e},!this._gridOptions||!this._gridOptions.enablePagination&&this._gridOptions.hasOwnProperty("enablePagination")||this._odataService.updateOptions({top:e,skip:(t-1)*e})}updateSorters(t,e){let i=[];const o=[];if(!t&&e){i=e,i.forEach((t=>t.direction=t.direction.toLowerCase()));const t=i.map((t=>{const e=this._columnDefinitions.find((e=>e.id===t.columnId));return o.push({field:e?(e.queryFieldSorter||e.queryField||e.field)+"":t.columnId+"",direction:t.direction}),e?{columnId:t.columnId,sortAsc:t.direction.toUpperCase()===s.UEL.ASC}:null}));Array.isArray(t)&&this._grid&&this._grid.setSortColumns(t)}else if(t&&!e)if(0===t?.length);else if(t)for(const e of t)if(e.sortCol){let t=(e.sortCol.queryFieldSorter||e.sortCol.queryField||e.sortCol.field)+"",n=(e.sortCol.field||e.sortCol.id)+"",a=(e.sortCol.queryFieldSorter||e.sortCol.queryField||e.sortCol.field||"")+"";this._odataService.options.caseType===s.X3g.pascalCase&&(t=(0,r.titleCase)(t),n=(0,r.titleCase)(n),a=(0,r.titleCase)(a)),i.push({columnId:e.sortCol.id,direction:e.sortAsc?s.UEL.asc:s.UEL.desc}),""!==a&&o.push({field:a,direction:e.sortAsc?s.UEL.ASC:s.UEL.DESC})}i=i||[];const n=o.map((t=>{let e="";return t&&t.field&&(e=`${this._odataService.options.caseType===s.X3g.pascalCase?(0,r.titleCase)(t.field):t.field} ${t&&t.direction&&t.direction.toLowerCase()||""}`),e})).join(",");return this._odataService.updateOptions({orderBy:n}),this._currentSorters=i,this._odataService.buildQuery()}castFilterToColumnFilters(t){const e="object"==typeof t?Object.keys(t).map((e=>t[e])):t;return Array.isArray(e)?e.map((t=>{const e={columnId:t.columnId||""};return t.operator&&(e.operator=t.operator),t.targetSelector&&(e.targetSelector=t.targetSelector),Array.isArray(t.searchTerms)&&(e.searchTerms=t.searchTerms),e})):[]}filterBySearchTermRange(t,e,i){let r="";return Array.isArray(i)&&2===i.length&&(e===s.huT.rangeInclusive?(r=`(${t} ge ${i[0]}`,""!==i[1]&&(r+=` and ${t} le ${i[1]}`),r+=")"):e===s.huT.rangeExclusive&&(r=`(${t} gt ${i[0]}`,""!==i[1]&&(r+=` and ${t} lt ${i[1]}`),r+=")")),r}normalizeSearchValue(t,e,i){switch(t){case s.PUO.date:e=(0,s.Odt)(e),e=i>=4?e:`DateTime'${e}'`;break;case s.PUO.string:case s.PUO.text:case s.PUO.readonly:"string"==typeof e&&(e=e.replace(/'/g,"''"),e=`'${e=encodeURIComponent(e)}'`);break;case s.PUO.integer:case s.PUO.number:case s.PUO.float:"string"==typeof e&&(""!==(e=(e=(e=(e=(e=e.replace(/\.\./g,".")).replace(/\.+$/g,"")).replace(/^\.+/g,"0.")).replace(/^-+\.+/g,"-0.")).replace(/(?!^-)[^\d.]/g,""))&&"-"!==e||(e="0"))}return e}}}}]);