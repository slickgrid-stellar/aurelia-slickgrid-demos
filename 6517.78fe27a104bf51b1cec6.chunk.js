"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[6517],{6517:(e,t,i)=>{i.r(t),i.d(t,{Example43:()=>m});var n={};i.r(n),i.d(n,{bindables:()=>d,default:()=>o,dependencies:()=>r,name:()=>l,register:()=>u,template:()=>s});var a=i(5394);const l="example43",s='<div class="container-fluid">\n  <h2>\n    Example 43: Dynamically Create Grid from CSV / Excel import\n    <span class="float-end">\n      <a style="font-size: 18px" target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example43.ts">\n        <span class="mdi mdi-link-variant"></span> code\n      </a>\n    </span>\n    <button\n      class="ms-2 btn btn-outline-secondary btn-sm btn-icon"\n      type="button"\n      data-test="toggle-subtitle"\n      click.trigger="toggleSubTitle()"\n    >\n      <span class="mdi mdi-information-outline" title="Toggle example sub-title details"></span>\n    </button>\n  </h2>\n\n  <div if.bind="showSubTitle" class="subtitle">\n    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will\n    consider the first row as the column header and create the column definitions accordingly, while the next few rows will be\n    considered the dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt\n    an Excel file uploading.\n  </div>\n\n  <div>A default CSV file can be download <a id="template-dl" href.bind="templateUrl">here</a>.</div>\n\n  <div class="d-flex mt-5 align-items-end">\n    <div class="file-upload">\n      <label for="formFile" class="form-label">Choose a CSV file…</label>\n      <input class="form-control" type="file" data-test="file-upload-input" value.bind="uploadFileRef" change.trigger="handleFileImport($event)" />\n    </div>\n    <span class="mx-3">or</span>\n    <div>\n      <button id="uploadBtn" data-test="static-data-btn" class="btn btn-outline-secondary" click.trigger="handleDefaultCsv">\n        Use default CSV data\n      </button>\n      <button class="btn btn-outline-danger" click.trigger="destroyGrid()">Destroy Grid</button>\n    </div>\n  </div>\n\n  <hr />\n\n  <aurelia-slickgrid\n    if="value.bind: gridCreated; cache: false"\n    grid-id="grid43"\n    column-definitions.bind="columnDefinitions"\n    grid-options.bind="gridOptions"\n    dataset.bind="dataset">\n  </aurelia-slickgrid>\n</div>\n',o=s,r=[],d={};let c;function u(e){c||(c=a.K9.define({name:l,template:s,dependencies:r,bindables:d})),e.register(c)}var f=i(6609),p=i(7793),h=(i(6757),function(e,t,i,n,a,l){function s(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var o,r=n.kind,d="getter"===r?"get":"setter"===r?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),f=!1,p=i.length-1;p>=0;p--){var h={};for(var m in n)h[m]="access"===m?{}:n[m];for(var m in n.access)h.access[m]=n.access[m];h.addInitializer=function(e){if(f)throw new TypeError("Cannot add initializers after decoration has completed");l.push(s(e||null))};var b=(0,i[p])("accessor"===r?{get:u.get,set:u.set}:u[d],h);if("accessor"===r){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw new TypeError("Object expected");(o=s(b.get))&&(u.get=o),(o=s(b.set))&&(u.set=o),(o=s(b.init))&&a.unshift(o)}else(o=s(b))&&("field"===r?a.unshift(o):u[d]=o)}c&&Object.defineProperty(c,n.name,u),f=!0});let m=(()=>{let e,t,i=[(0,a.EM)(n)],l=[];return t=class{constructor(){this.columnDefinitions=[],this.gridCreated=!1,this.showSubTitle=!0,this.dataset=[],this.paginationPosition="top",this.templateUrl="assets/data/users.csv",this.uploadFileRef=""}destroyGrid(){this.gridCreated=!1}handleFileImport(e){const t=e.target.files[0];if(t){const e=new FileReader;e.onload=e=>{const t=e.target.result;this.dynamicallyCreateGrid(t)},e.readAsText(t)}}handleDefaultCsv(){this.dynamicallyCreateGrid("First Name,Last Name,Age,Type\nBob,Smith,33,Teacher\nJohn,Doe,20,Student\nJane,Doe,21,Student"),this.uploadFileRef=""}dynamicallyCreateGrid(e){this.gridCreated=!1;const t=e?.split("\n"),i=[],n=[];t.forEach(((e,t)=>{const a=e.split(","),l={};if(0===t)for(const e of a){const t=(0,f.Cby)(e);i.push({id:t,name:e,field:t,filterable:!0,sortable:!0})}else a.forEach(((e,t)=>{l[i[t].id]=e})),"id"in l?n.push(l):n.push({...l,id:t})})),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:!0,enableExcelExport:!0,externalResources:[new p.N],headerRowHeight:35,rowHeight:33},this.dataset=n,this.columnDefinitions=i,console.log(this.columnDefinitions,this.dataset),this.gridCreated=!0}toggleSubTitle(){this.showSubTitle=!this.showSubTitle;const e=this.showSubTitle?"remove":"add";document.querySelector(".subtitle")?.classList[e]("hidden")}},s=t,"symbol"==typeof(o="Example43")&&(o=o.description?"[".concat(o.description,"]"):""),Object.defineProperty(s,"name",{configurable:!0,value:r?"".concat(r," ",o):o}),(()=>{const n="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;h(null,e={value:t},i,{kind:"class",name:t.name,metadata:n},null,l),t=e.value,n&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n}),function(e,t,i){for(var n=arguments.length>2,a=0;a<t.length;a++)i=n?t[a].call(e,i):t[a].call(e)}(t,l)})(),t;var s,o,r})()}}]);