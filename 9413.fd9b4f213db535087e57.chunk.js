"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[9413],{854:(e,t,i)=>{i.d(t,{M:()=>s});var r=i(6609);class s{constructor(){this._clearFilterTriggered=!1,this._shouldTriggerQuery=!0,this.searchTerms=[],this.operator=r.huT.equal}get columnFilter(){return this.columnDef?.filter??{}}get gridOptions(){return this.grid?.getOptions()??{}}init(e){this.grid=e.grid,this.callback=e.callback,this.columnDef=e.columnDef,this.searchTerms=(e.hasOwnProperty("searchTerms")?e.searchTerms:[])||[];const t=Array.isArray(this.searchTerms)&&this.searchTerms.length>0?this.searchTerms[0]:"";this.filterElm=this.createDomElement(t),this.filterElm.addEventListener("keyup",this.handleKeyup.bind(this))}handleKeyup(e){let t=e.target?.value??"";const i=this.gridOptions.enableFilterTrimWhiteSpace||this.columnFilter.enableTrimWhiteSpace;"string"==typeof t&&i&&(t=t.trim()),this._clearFilterTriggered?(this.callback(e,{columnDef:this.columnDef,clearFilterTriggered:this._clearFilterTriggered,shouldTriggerQuery:this._shouldTriggerQuery}),this.filterElm.classList.remove("filled")):(""===t?this.filterElm.classList.remove("filled"):this.filterElm.classList.add("filled"),this.callback(e,{columnDef:this.columnDef,searchTerms:[t],shouldTriggerQuery:this._shouldTriggerQuery})),this._clearFilterTriggered=!1,this._shouldTriggerQuery=!0}clear(e=!0){this.filterElm&&(this._clearFilterTriggered=!0,this._shouldTriggerQuery=e,this.filterElm.value="",this.filterElm.dispatchEvent(new Event("keyup")))}destroy(){this.filterElm&&(this.filterElm.removeEventListener("keyup",this.handleKeyup),this.filterElm.remove())}setValues(e){e&&(this.filterElm.value=e)}createDomElement(e){const t=this.grid.getHeaderRowColumn(this.columnDef.id);(0,r.i3Z)(t);let i=this.gridOptions?.defaultFilterPlaceholder??"";this.columnFilter?.placeholder&&(i=this.columnFilter.placeholder);const s=document.createElement("input");s.className="form-control search-filter",s.placeholder=i;const n=e;return s.value=n,s.dataset.columnid=`${this.columnDef.id}`,t&&t.appendChild(s),s}}},9413:(e,t,i)=>{i.r(t),i.d(t,{Example3:()=>O});var r={};i.r(r),i.d(r,{bindables:()=>c,default:()=>l,dependencies:()=>o,name:()=>n,register:()=>h,template:()=>a});var s=i(5394);const n="example3",a='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example3.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <div class="col-sm-6">\n    <label>autoEdit setting</label>\n    <br />\n    <span id="radioAutoEdit">\n      <div class="row">\n\n        <label class="radio-inline control-label"\n                for="radioTrue">\n          <input type="radio"\n                  name="inlineRadioOptions"\n                  id="radioTrue"\n                  checked\n                  value.bind="isAutoEdit"\n                  click.trigger="setAutoEdit(true)"> ON\n          (single-click)\n        </label>\n        <label class="radio-inline control-label"\n                for="radioFalse">\n          <input type="radio"\n                  name="inlineRadioOptions"\n                  id="radioFalse"\n                  value.bind="isAutoEdit"\n                  click.trigger="setAutoEdit(false)"> OFF\n          (double-click)\n        </label>\n      </div>\n      <div class="row col-sm-12">\n        <span>\n          <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="undo()" data-test="undo-btn">\n            <i class="mdi mdi-undo"></i>\n            Undo last edit(s)\n          </button>\n          <label class="checkbox-inline control-label"\n                  for="autoCommitEdit">\n            <input type="checkbox"\n                    id="autoCommitEdit"\n                    data-test="auto-commit"\n                    value.bind="gridOptions.autoCommitEdit"\n                    click.trigger="changeAutoCommit()">\n            Auto Commit Edit\n          </label>\n        </span>\n      </div>\n    </span>\n    <div class="row" style="margin-top: 5px">\n      <div class="col-sm-12">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="aureliaGrid.filterService.clearFilters()">Clear\n          Filters</button>\n        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="aureliaGrid.sortService.clearSorting()">Clear\n          Sorting</button>\n        <button class="btn btn-outline-primary btn-sm" data-test="add-item-btn" click.trigger="addItem()"\n                title="Clear Filters &amp; Sorting to see it better">\n          Add item\n        </button>\n        <button class="btn btn-outline-danger btn-sm" data-test="delete-item-btn" click.trigger="deleteItem()">Delete\n          item</button>\n      </div>\n    </div>\n    <div class="row" style="margin-top: 5px">\n      <div class="col-sm-12">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="add-title-column"\n                click.trigger="dynamicallyAddTitleHeader()">\n          <i class="mdi mdi-shape-square-plus"></i>\n          Dynamically Duplicate Title Column\n        </button>\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="remove-title-column"\n                click.trigger="dynamicallyRemoveLastColumn()">\n          <i class="mdi mdi-minus"></i>\n          Dynamically Remove Last Column\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class="col-sm-6">\n    <div class="alert alert-info"\n          show.bind="updatedObject">\n      <strong>Updated Item:</strong> ${updatedObject | stringify}\n    </div>\n    <div class="alert alert-warning"\n          show.bind="alertWarning">\n      ${alertWarning}\n    </div>\n  </div>\n</div>\n\n<div id="grid-container" class="col-sm-12">\n  <aurelia-slickgrid grid-id="grid3"\n                      column-definitions.bind="columnDefinitions"\n                      grid-options.bind="gridOptions"\n                      dataset.bind="dataset"\n                      instances.bind="aureliaGrid"\n                      on-cell-change.trigger="onCellChanged($event.detail.eventData, $event.detail.args)"\n                      on-click.trigger="onCellClicked($event.detail.eventData, $event.detail.args)"\n                      on-validation-error.trigger="onCellValidationError($event.detail.eventData, $event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n',l=a,o=[],c={};let d;function h(e){d||(d=s.K9.define({name:n,template:a,dependencies:o,bindables:c})),e.register(d)}var u=i(8880),m=i(7557),f=i(6609);class p{constructor(e){this.args=e,this.init()}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get validator(){return this.columnEditor?.validator||this.columnDef?.validator}init(){const e=this.columnEditor?.placeholder||"";this.inputElm=document.createElement("input"),this.inputElm.className="editor-text",this.inputElm.placeholder=e,this.args.container.appendChild(this.inputElm),this.inputElm.addEventListener("keydown",this.handleKeydown.bind(this)),setTimeout((()=>{this.inputElm.focus(),this.inputElm.select()}),50)}handleKeydown(e){this._lastInputEvent=e,"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||e.stopImmediatePropagation()}destroy(){this.inputElm.removeEventListener("keydown",this.handleKeydown.bind(this)),this.inputElm.remove()}focus(){this.inputElm.focus()}getValue(){return this.inputElm.value}setValue(e){this.inputElm.value=e}loadValue(e){this.defaultValue=e[this.args.column.field]||"",this.inputElm.value=this.defaultValue,this.inputElm.defaultValue=this.defaultValue,this.inputElm.select()}serializeValue(){return this.inputElm.value}applyValue(e,t){const i=this.validate(t);e[this.args.column.field]=i&&i.valid?t:""}isValueChanged(){const e=this._lastInputEvent?.key;return!(!this.columnEditor?.alwaysSaveOnEnterKey||"Enter"!==e)||!(""===this.inputElm.value&&null===this.defaultValue)&&this.inputElm.value!==this.defaultValue}validate(e){if(this.validator){const t=void 0!==e?e:this.inputElm?.value;return this.validator(t,this.args)}return{valid:!0,msg:null}}}var g=i(854);const b=e=>delete window[e],y=e=>{const t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)},v=function(e,t={}){let i=e;const r=t.timeout||5e3,s=t.jsonpCallback||"callback";let n;return new Promise(((a,l)=>{const o=t.jsonpCallbackFunction||`jsonp_${Date.now()}_${Math.ceil(1e5*Math.random())}`,c=`${s}_${o}`;window[o]=e=>{a({ok:!0,json:()=>Promise.resolve(e)}),n&&clearTimeout(n),y(c),b(o)},i+=-1===i.indexOf("?")?"?":"&";const d=document.createElement("script");d.setAttribute("src",`${i}${s}=${o}`),t.charset&&d.setAttribute("charset",t.charset),t.nonce&&d.setAttribute("nonce",t.nonce),t.referrerPolicy&&d.setAttribute("referrerPolicy",t.referrerPolicy),t.crossorigin&&d.setAttribute("crossorigin","true"),d.id=c,document.getElementsByTagName("head")[0].appendChild(d),n=setTimeout((()=>{l(new Error(`JSONP request to ${e} timed out`)),b(o),y(c),window[o]=()=>{b(o)}}),r),d.onerror=()=>{l(new Error(`JSONP request to ${e} failed`)),b(o),y(c),n&&clearTimeout(n)}}))};i(6757);const C="assets/data/collection_100_numbers.json",E="assets/data/countries.json",k="assets/data/country_names.json",w=e=>null!=e&&e.length?/^Task\s\d+$/.test(e)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number'}:{valid:!1,msg:"This is a required field"},T=(e,t,i)=>{if(i&&Array.isArray(i)){const e=i.map((e=>`Task ${e}`)).join(", ");return`<span title="${e}">${e}</span>`}return""};let O=(()=>{let e,t,i=[(0,s.EM)(r)],n=[];return t=class{constructor(e=(0,m.hd)((0,m.pn)(u.xl))){this.http=e,this.title="Example 3: Editors / Delete",this.subTitle='\n  Grid with Inline Editors and onCellClick actions (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/editors" target="_blank">Wiki docs</a>).\n  <ul>\n    <li>When using "enableCellNavigation: true", clicking on a cell will automatically make it active &amp; selected.</li>\n    <ul><li>If you don\'t want this behavior, then you should disable "enableCellNavigation"</li></ul>\n    <li>Inline Editors requires "enableCellNavigation: true" (not sure why though)</li>\n    <li>\n        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag.\n        Note that it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExcelExportOptions" or "TextExportOptions" or the column definition)\n    </li>\n    <li>Support of "collectionAsync" is possible, click on "Clear Filters/Sorting" then add/delete item(s) and look at "Prerequisites" Select Filter</li>\n  </ul>\n  ',this._commandQueue=[],this.columnDefinitions=[],this.dataset=[],this.isAutoEdit=!0,this.duplicateTitleHeaderCount=1,this.defineGrid()}attached(){this.dataset=this.mockData(100)}defineGrid(){this.columnDefinitions=[{id:"edit",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f._tQ.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(e,t)=>{console.log(t),this.alertWarning=`Editing: ${t.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(t.row,1500),this.aureliaGrid.gridService.setSelectedRow(t.row)}},{id:"delete",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f._tQ.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30},{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,type:f.PUO.string,editor:{model:f.R8o.longText,placeholder:"something",title:"some title",validator:w},minWidth:100,onCellChange:(e,t)=>{console.log(t),this.alertWarning=`Updated Title: ${t.dataContext.title}`}},{id:"title2",name:"Title, Custom Editor",field:"title",filterable:!0,sortable:!0,type:f.PUO.string,editor:{model:p,placeholder:"custom",validator:w},filter:{model:g.M,placeholder:"🔎︎ custom"},minWidth:70},{id:"duration",name:"Duration (days)",field:"duration",filterable:!0,minWidth:100,sortable:!0,type:f.PUO.number,filter:{model:f.CuW.slider,filterOptions:{hideSliderNumber:!1}},editor:{model:f.R8o.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",filterable:!0,formatter:f._tQ.multiple,type:f.PUO.number,editor:{enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map((e=>({value:e,label:e,symbol:'<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>'}))),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:!0},collectionFilterBy:{property:"value",value:0,operator:f.huT.notEqual},model:f.R8o.singleSelect},minWidth:100,params:{formatters:[f._tQ.collectionEditor,f._tQ.percentCompleteBar]}},{id:"start",name:"Start",field:"start",filterable:!0,filter:{model:f.CuW.compoundDate},formatter:f._tQ.dateIso,sortable:!0,minWidth:100,type:f.PUO.date,editor:{model:f.R8o.date}},{id:"finish",name:"Finish",field:"finish",filterable:!0,filter:{model:f.CuW.compoundDate},formatter:f._tQ.dateIso,sortable:!0,minWidth:100,type:f.PUO.date,saveOutputType:f.PUO.dateUtc,editor:{model:f.R8o.date,editorOptions:{range:{min:"today"}}}},{id:"cityOfOrigin",name:"City of Origin",field:"cityOfOrigin",filterable:!0,sortable:!0,minWidth:100,editor:{model:f.R8o.autocompleter,placeholder:"🔎︎ search city",editorOptions:{minLength:3,forceUserInput:!0,fetch:(e,t)=>{v(`http://gd.geobytes.com/AutoCompleteCity?q=${e}`).then((e=>e.json())).then((e=>t(e))).catch((e=>console.log("invalid JSONP response",e)))}}},filter:{model:f.CuW.autocompleter,filterOptions:{minLength:3,fetch:(e,t)=>{v(`http://gd.geobytes.com/AutoCompleteCity?q=${e}`).then((e=>e.json())).then((e=>t(e))).catch((e=>console.log("invalid JSONP response",e)))}}}},{id:"countryOfOrigin",name:"Country of Origin",field:"countryOfOrigin",formatter:f._tQ.complexObject,dataKey:"code",labelKey:"name",type:f.PUO.object,sortComparer:f.Luy.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:f.R8o.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(E)},filter:{model:f.CuW.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(E)}},{id:"countryOfOriginName",name:"Country of Origin Name",field:"countryOfOriginName",filterable:!0,sortable:!0,minWidth:100,editor:{model:f.R8o.autocompleter,collectionAsync:this.http.fetch(k)},filter:{model:f.CuW.autocompleter,collectionAsync:this.http.fetch(k)}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",filterable:!0,type:f.PUO.boolean,filter:{model:f.CuW.singleSelect,collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}]},formatter:f._tQ.checkmarkMaterial,editor:{model:f.R8o.checkbox},minWidth:70},{id:"prerequisites",name:"Prerequisites",field:"prerequisites",filterable:!0,formatter:T,exportWithFormatter:!0,sanitizeDataExport:!0,minWidth:100,sortable:!0,type:f.PUO.string,editor:{collectionAsync:this.http.fetch(C),collectionSortBy:{property:"value",sortDesc:!0,fieldType:f.PUO.number},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:f.R8o.multipleSelect},filter:{collectionAsync:this.http.fetch(C),collectionSortBy:{property:"value",sortDesc:!0,fieldType:f.PUO.number},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:f.CuW.multipleSelect,operator:f.huT.inContains}}],this.gridOptions={autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:"#demo-container",rightPadding:10},editable:!0,enableCellNavigation:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,editCommandHandler:(e,t,i)=>{this._commandQueue.push(i),i.execute()}}}addItem(){const e=this.dataset.length,t=this.mockData(1,e);setTimeout((()=>{const i=this.columnDefinitions.find((e=>"prerequisites"===e.id));if(i){const r=i.editor.collection,s=i.filter.collection;Array.isArray(r)&&Array.isArray(s)&&(this.aureliaGrid.gridService.addItem(t[0],{highlightRow:!1}),r.push({value:e,label:e,prefix:"Task",suffix:"days"}),s.push({value:e,label:e,prefix:"Task",suffix:"days"}))}}),250)}deleteItem(){const e=this.columnDefinitions.find((e=>"prerequisites"===e.id));if(e){const t=e.editor.collection,i=e.filter.collection;if(Array.isArray(t)&&Array.isArray(i)){const e=this.sortCollectionDescending(t).pop();this.sortCollectionDescending(i).pop(),this.aureliaGrid.gridService.deleteItemById(e.value)}}}sortCollectionDescending(e){return e.sort(((e,t)=>e.value-t.value))}mockData(e,t=0){const i=[];for(let r=t;r<t+e;r++){const e=2e3+this.randomBetween(4,15),t=(new Date).getFullYear()-3+Math.floor(10*Math.random()),s=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),a=Math.round(100*Math.random()),l=new Date(t,s+1,n);i.push({id:r,title:"Task "+r,duration:Math.round(100*Math.random())+"",percentComplete:a,percentCompleteNumber:a,start:new Date(e,s,n),finish:l<new Date?"":l,effortDriven:r%5==0,prerequisites:r%2==0&&0!==r&&r<12?[r,r-1]:[],countryOfOrigin:r%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"},countryOfOriginName:r%2?"Canada":"United States",cityOfOrigin:r%2?"Vancouver, BC, Canada":"Boston, MA, United States"})}return i}randomBetween(e,t){return Math.floor(Math.random()*(t-e+1)+e)}onCellChanged(e,t){console.log("onCellChange",t),this.updatedObject={...t.item}}onCellClicked(e,t){const i=this.aureliaGrid.gridService.getColumnFromEventArguments(t);console.log(i),"edit"===i.columnDef.id?(this.alertWarning=`open a modal window to edit: ${i.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(t.row,1500)):"delete"===i.columnDef.id&&confirm("Are you sure?")&&(this.aureliaGrid.gridService.deleteItemById(i.dataContext.id),this.alertWarning=`Deleted: ${i.dataContext.title}`)}onCellValidationError(e,t){t.validationResults&&alert(t.validationResults.msg)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid.slickGrid.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}dynamicallyAddTitleHeader(){const e={id:"title"+this.duplicateTitleHeaderCount++,name:"Title",field:"title",editor:{model:f.R8o.text,required:!0,validator:w},sortable:!0,minWidth:100,filterable:!0};this.columnDefinitions.push(e)}dynamicallyRemoveLastColumn(){this.columnDefinitions.pop()}setAutoEdit(e){return this.isAutoEdit=e,this.aureliaGrid.slickGrid.setOptions({autoEdit:e}),!0}undo(){const e=this._commandQueue.pop();e&&f.W9y.cancelCurrentEdit()&&(e.undo(),this.aureliaGrid.slickGrid.gotoCell(e.row,e.cell,!1))}},a=t,"symbol"==typeof(l="Example3")&&(l=l.description?"[".concat(l.description,"]"):""),Object.defineProperty(a,"name",{configurable:!0,value:o?"".concat(o," ",l):l}),(()=>{const r="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(function(e,t,i,r,s,n){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var l,o=r.kind,c="getter"===o?"get":"setter"===o?"set":"value",d=!t&&e?r.static?e:e.prototype:null,h=t||(d?Object.getOwnPropertyDescriptor(d,r.name):{}),u=!1,m=i.length-1;m>=0;m--){var f={};for(var p in r)f[p]="access"===p?{}:r[p];for(var p in r.access)f.access[p]=r.access[p];f.addInitializer=function(e){if(u)throw new TypeError("Cannot add initializers after decoration has completed");n.push(a(e||null))};var g=(0,i[m])("accessor"===o?{get:h.get,set:h.set}:h[c],f);if("accessor"===o){if(void 0===g)continue;if(null===g||"object"!=typeof g)throw new TypeError("Object expected");(l=a(g.get))&&(h.get=l),(l=a(g.set))&&(h.set=l),(l=a(g.init))&&s.unshift(l)}else(l=a(g))&&("field"===o?s.unshift(l):h[c]=l)}d&&Object.defineProperty(d,r.name,h),u=!0})(null,e={value:t},i,{kind:"class",name:t.name,metadata:r},null,n),t=e.value,r&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:r}),function(e,t,i){for(var r=arguments.length>2,s=0;s<t.length;s++)i=r?t[s].call(e,i):t[s].call(e)}(t,n)})(),t;var a,l,o})()},8880:(e,t,i)=>{i.d(t,{Pq:()=>s,xl:()=>u});var r=i(7557);function s(e,t){return JSON.stringify(void 0!==e?e:{},t)}class n{constructor(){this.cache=new Map,this.delete=e=>this.cache.delete(e),this.has=e=>this.cache.has(e),this.set=(e,t)=>this.cache.set(e,t),this.get=e=>this.cache.get(e),this.clear=()=>this.cache.clear()}}const a=r.DI.createInterface((e=>e.singleton(n)));class l{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null,this.c=(0,r.hd)(r.p7)}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:o})}withRetry(e){const t=this.c.invoke(R,[e]);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function o(e){if(!e.ok)throw e;return e}const c=(e,...t)=>new Error(`AUR${String(e).padStart(4,"0")}:${t.map(String)}`),d=/^([a-z][a-z0-9+\-.]*:)?\/\//i,h=r.DI.createInterface("fetch",(e=>{if("function"!=typeof fetch)throw c(5e3);return e.instance(fetch)})),u=r.DI.createInterface("IHttpClient",(e=>e.aliasTo(m)));class m{constructor(){this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.t=[],this.i=null,this.h=(0,r.hd)((0,r.P9)(l)),this.u=(0,r.hd)(h)}get interceptors(){return this.t.slice(0)}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw c(5002,typeof e);{t=this.h(),t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.t,t.dispatcher=this.i;const i=e(t);if(null!=i){if("object"!=typeof i)throw c(5001,typeof i);t=i}}}const i=t.defaults;if(i?.headers instanceof Headers)throw c(5003);const r=t.interceptors;if(r?.length>0){if(r.filter((e=>e instanceof R)).length>1)throw c(5004);const e=r.findIndex((e=>e instanceof R));if(e>=0&&e!==r.length-1)throw c(5005)}return this.baseUrl=t.baseUrl,this.defaults=i,this.t=t.interceptors??[],this.i=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.C();let i=this.buildRequest(e,t);return this.processRequest(i,this.t).then((e=>{let t;if(e instanceof Response)t=Promise.resolve(e);else{if(!(e instanceof Request))throw c(5006,e);i=e,t=this.u.call(void 0,i)}return this.processResponse(t,this.t,i)})).then((e=>e instanceof Request?this.fetch(e):e)).then((e=>(this.R(),e)),(e=>{throw this.R(),e}))}buildRequest(e,t){const i=this.defaults??{};let r,s,n;const a=function(e){const t={},i=e??{};for(const e of Object.keys(i))t[e]="function"==typeof i[e]?i[e]():i[e];return t}(i.headers);if(e instanceof Request)r=e,n=new Headers(r.headers).get("Content-Type");else{t||(t={}),s=t.body;const a=void 0!==s?{body:s}:null,l={...i,headers:{},...t,...a};n=new Headers(l.headers).get("Content-Type"),r=new Request(f(this.baseUrl,e),l)}return n||(new Headers(a).has("content-type")?r.headers.set("Content-Type",new Headers(a).get("content-type")):void 0!==s&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(s)&&r.headers.set("Content-Type","application/json")),function(e,t){const i=t??{};for(const t of Object.keys(i))e.has(t)||e.set(t,i[t])}(r.headers,a),s instanceof Blob&&s.type&&r.headers.set("Content-Type",s.type),r}get(e,t){return this.fetch(e,t)}post(e,t,i){return this.I(e,t,i,"POST")}put(e,t,i){return this.I(e,t,i,"PUT")}patch(e,t,i){return this.I(e,t,i,"PATCH")}delete(e,t,i){return this.I(e,t,i,"DELETE")}dispose(){this.t.forEach((e=>e.dispose?.())),this.t.length=0,this.i=null}C(){this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!=this.i&&b(this.i,y.started)}R(){this.isRequesting=!! --this.activeRequestCount,this.isRequesting||null==this.i||b(this.i,y.drained)}processRequest(e,t){return this.B(e,t,"request","requestError",Request,this)}processResponse(e,t,i){return this.B(e,t,"response","responseError",Response,i,this)}B(e,t,i,r,s,...n){return(t??[]).reduce(((e,t)=>{const a=t[i],l=t[r];return e.then(a?e=>e instanceof s?a.call(t,e,...n):e:p,l?e=>l.call(t,e,...n):g)}),Promise.resolve(e))}I(e,t,i,r){return i||(i={}),i.method=r,null!=t&&(i.body=t),this.fetch(e,i)}}function f(e,t){return d.test(t)?t:(e??"")+t}function p(e){return e}function g(e){throw e}function b(e,t){const i=new e.ownerDocument.defaultView.CustomEvent(t,{bubbles:!0,cancelable:!0});setTimeout((()=>{e.dispatchEvent(i)}),1)}const y=Object.freeze({started:"aurelia-fetch-client-request-started",drained:"aurelia-fetch-client-requests-drained"}),v=r.DI.createInterface((e=>e.singleton(E))),C=Object.freeze({Set:"au:fetch:cache:set",Get:"au:fetch:cache:get",Clear:"au:fetch:cache:clear",Reset:"au:fetch:cache:reset",Dispose:"au:fetch:cache:dispose",CacheHit:"au:fetch:cache:hit",CacheMiss:"au:fetch:cache:miss",CacheStale:"au:fetch:cache:stale",CacheStaleRefreshed:"au:fetch:cache:stale:refreshed",CacheExpired:"au:fetch:cache:expired",CacheBackgroundRefreshed:"au:fetch:cache:background:refreshed",CacheBackgroundRefreshing:"au:fetch:cache:background:refreshing",CacheBackgroundStopped:"au:fetch:cache:background:stopped"});class E{constructor(){this.storage=(0,r.hd)(a),this.p=(0,r.hd)(r.r_),this.ea=(0,r.hd)(r.xe),this.q=(0,r.hd)(u),this.H=[],this.O=-1,this.j=[],this.T=new Map}subscribe(e,t){const i=this.ea.subscribe(e,t);return this.H.push(i),i}subscribeOnce(e,t){const i=this.ea.subscribeOnce(e,t);return this.H.push(i),i}setStaleTimer(e,t,i){const r=this.p.setTimeout((async()=>{this.delete(e),await this.q.get(i);const t=this.getItem(e);this.ea.publish(C.CacheStaleRefreshed,{key:e,value:t}),this.N(r)}),t);this.j.push(r)}startBackgroundRefresh(e){!e||this.O>-1||(this.O=this.p.setInterval((()=>{this.ea.publish(C.CacheBackgroundRefreshing),this.T.forEach(((e,t)=>{this.delete(t),this.q.get(e).then((()=>{const e=this.getItem(t);this.ea.publish(C.CacheBackgroundRefreshed,{key:t,value:e})}))}))}),e))}stopBackgroundRefresh(){this.p.clearInterval(this.O),this.O=-1,this.ea.publish(C.CacheBackgroundStopped)}set(e,t,i,r){const s={data:t,...i};this.setItem(e,s,r)}get(e){return this.getItem(e)?.data}setItem(e,t,i){t.lastCached=Date.now(),this.storage.set(e,t),this.T.set(e,i),this.ea.publish(C.Set,{key:e,value:t})}getItem(e){if(!this.storage.has(e))return void this.ea.publish(C.CacheMiss,{key:e});const t=this.storage.get(e);if(!t?.staleTime||!t?.lastCached)return this.ea.publish(C.CacheHit,{key:e,value:t}),t;const i=Date.now();if(i>t.lastCached+(t.staleTime??0))this.ea.publish(C.CacheStale,{key:e,value:t});else{if(!(i>t.lastCached+(t.cacheTime??0)))return this.ea.publish(C.CacheHit,{key:e,value:t}),t;this.ea.publish(C.CacheExpired,{key:e,value:t})}}delete(e){this.storage.delete(e),this.ea.publish(C.Clear,{key:e})}clear(){this.storage.clear(),this.T.clear(),this.ea.publish(C.Reset),this.stopBackgroundRefresh(),this.j.forEach((e=>{this.p.clearTimeout(e)})),this.j.length=0}dispose(){this.clear(),this.H.forEach((e=>e.dispose())),this.ea.publish(C.Dispose)}N(e){this.p.clearTimeout(e);const t=this.j.indexOf(e);t>-1&&this.j.splice(t,1)}}const k={cacheTime:3e5,staleTime:0,refreshStaleImmediate:!1,refreshInterval:0};class w{constructor(e){this.P=(0,r.hd)(v),this.cf={...k,...e??{}}}request(e){if(this.P.startBackgroundRefresh(this.cf.refreshInterval),"GET"!==e.method)return e;const t=this.P.get(this.key(e));return this.mark(t)??e}response(e,t){if(!t)return e;if(e.headers.has(w.cacheHeader))return e;const i=this.key(t);return this.P.setItem(i,{data:e,...this.cf},t),this.cf?.refreshStaleImmediate&&this.cf.staleTime>0&&this.P.setStaleTimer(i,this.cf.staleTime,t),e}dispose(){this.P.stopBackgroundRefresh()}key(e){return`${w.prefix}${e.url}`}mark(e){return e?.headers.set(w.cacheHeader,"hit"),e}}w.prefix="au:interceptor:",w.cacheHeader="x-au-fetch-cache";class T{constructor(){this.cache=(0,r.hd)(r.r_).globalThis.indexedDB,this.getStore=()=>this.database.transaction(T.cacheName,"readwrite").objectStore(T.cacheName),this.delete=e=>{this.getStore().delete(e)},this.has=e=>this.getStore().count(e).result>0,this.set=(e,t)=>this.getStore().put(t,e),this.get=e=>this.getStore().get(e).result,this.clear=()=>{const e=this.getStore();e.getAllKeys().result.forEach((t=>{e.delete(t)}))},this.database=this.cache.open(T.cacheName).result}}T.cacheName="au-cache";const O=Object.freeze({fixed:0,incremental:1,exponential:2,random:3}),x={maxRetries:3,interval:1e3,strategy:O.fixed};class R{constructor(e){if(this.p=(0,r.hd)(r.r_),this.retryConfig={...x,...e??{}},this.retryConfig.strategy===O.exponential&&this.retryConfig.interval<=1e3)throw c(5007,this.retryConfig.interval)}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return delete t.retryConfig,e}responseError(e,t,i){const{retryConfig:r}=t,{requestClone:s}=r;return Promise.resolve().then((()=>{if(r.counter<r.maxRetries){const n=null==r.doRetry||r.doRetry(e,t);return Promise.resolve(n).then((n=>{if(n){r.counter++;const e=function(e){const{interval:t,strategy:i,minRandomInterval:r,maxRandomInterval:s,counter:n}=e;if("function"==typeof i)return e.strategy(n);switch(i){case O.fixed:return S[O.fixed](t);case O.incremental:return S[O.incremental](n,t);case O.exponential:return S[O.exponential](n,t);case O.random:return S[O.random](n,t,r,s);default:throw c(5008,i)}}(r);return new Promise((t=>this.p.setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=s.clone();return"function"==typeof r.beforeRetry?r.beforeRetry(e,i):e})).then((e=>{const t={...e,retryConfig:r};return i.fetch(t)}))}throw delete t.retryConfig,e}))}throw delete t.retryConfig,e}))}}const S=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,i=0,r=6e4)=>Math.random()*(r-i)+i]}}]);