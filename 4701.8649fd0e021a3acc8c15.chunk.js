"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[4701],{4701:(e,t,n)=>{n.r(t),n.d(t,{Example40:()=>p});var i={};n.r(i),n.d(i,{bindables:()=>d,default:()=>s,dependencies:()=>o,name:()=>r,register:()=>u,template:()=>l});var a=n(5394);const r="example40",l='<div class="demo40">\n  <h2>\n    Example 40: Infinite Scroll from JSON data\n    <span class="float-end">\n      <a style="font-size: 18px" target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example40.ts">\n        <span class="mdi mdi-link-variant"></span> code\n      </a>\n    </span>\n  </h2>\n\n  <h6 class="title is-6 italic content">\n    <ul>\n      <li>\n        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position.\n        In its simplest form, the more the user scrolls down, the more rows get loaded.\n      </li>\n      <li>NOTES: <code>presets.pagination</code> is not supported with Infinite Scroll and will revert to the first page,\n          simply because since we keep appending data, we always have to start from index zero (no offset).\n      </li>\n    </ul>\n  </h6>\n\n  <div class="row">\n    <div class="col-sm-12">\n      <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-filters-sorting"\n              click.trigger="clearAllFiltersAndSorts()" title="Clear all Filters & Sorts">\n        <span class="mdi mdi-close"></span>\n        <span>Clear all Filter & Sorts</span>\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-filter" click.trigger="setFiltersDynamically()">\n        Set Filters Dynamically\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" data-test="set-dynamic-sorting" click.trigger="setSortingDynamically()">\n        Set Sorting Dynamically\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" data-test="group-by-duration" click.trigger="groupByDuration()">\n        Group by Duration\n      </button>\n\n      <label class="ml-4">Reset Dataset <code>onSort</code>:</label>\n      <button class="btn btn-outline-secondary btn-sm" data-test="onsort-on" click.trigger="onSortReset(true)">\n        ON\n      </button>\n      <button class="btn btn-outline-secondary btn-sm" data-test="onsort-off" click.trigger="onSortReset(false)">\n        OFF\n      </button>\n    </div>\n  </div>\n\n  <div show.bind="metrics" class="mt-2" style="margin: 10px 0px">\n    <b>Metrics:</b>\n    <span>\n    <span>${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'}</span> —\n      <span data-test="totalItemCount">${metrics.totalItemCount}</span>\n      items\n    </span>\n  </div>\n\n  <aurelia-slickgrid\n    grid-id="grid40"\n    column-definitions.bind="columnDefinitions"\n    grid-options.bind="gridOptions"\n    dataset.bind="dataset"\n    instances.bind="aureliaGrid"\n    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n    on-row-count-changed.trigger="refreshMetrics($event.detail.args)"\n    on-sort.trigger="handleOnSort()"\n    on-scroll.trigger="handleOnScroll($event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n',s=l,o=[],d={};let c;function u(e){c||(c=a.K94.define({name:r,template:l,dependencies:o,bindables:d})),e.register(c)}var m=n(8211),h=(n(6757),function(e,t,n,i,a,r){function l(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,o=i.kind,d="getter"===o?"get":"setter"===o?"set":"value",c=!t&&e?i.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,i.name):{}),m=!1,h=n.length-1;h>=0;h--){var p={};for(var g in i)p[g]="access"===g?{}:i[g];for(var g in i.access)p.access[g]=i.access[g];p.addInitializer=function(e){if(m)throw new TypeError("Cannot add initializers after decoration has completed");r.push(l(e||null))};var f=(0,n[h])("accessor"===o?{get:u.get,set:u.set}:u[d],p);if("accessor"===o){if(void 0===f)continue;if(null===f||"object"!=typeof f)throw new TypeError("Object expected");(s=l(f.get))&&(u.get=s),(s=l(f.set))&&(u.set=s),(s=l(f.init))&&a.unshift(s)}else(s=l(f))&&("field"===o?a.unshift(s):u[d]=s)}c&&Object.defineProperty(c,i.name,u),m=!0});let p=(()=>{let e,t,n=[(0,a.EMX)(i)],r=[];return t=class{constructor(){this.dataset=[],this.scrollEndCalled=!1,this.shouldResetOnSort=!1,this.defineGrid(),this.dataset=this.loadData(0,50),this.metrics={itemCount:50,totalItemCount:50}}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100,filterable:!0,type:m.PUO.number},{id:"percentComplete",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100,filterable:!0,type:m.PUO.number},{id:"start",name:"Start",field:"start",formatter:m._tQ.dateIso,exportWithFormatter:!0,filterable:!0},{id:"finish",name:"Finish",field:"finish",formatter:m._tQ.dateIso,exportWithFormatter:!0,filterable:!0},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100,filterable:!0,formatter:m._tQ.checkmarkMaterial}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:!0,enableFiltering:!0,enableGrouping:!0,editable:!1,rowHeight:33}}handleOnScroll(e){const t=e.grid.getViewportNode();if(["mousewheel","scroll"].includes(e.triggeredBy||"")&&!this.scrollEndCalled&&t.scrollTop>0&&Math.ceil(t.offsetHeight+e.scrollTop)>=e.scrollHeight){console.log("onScroll end reached, add more items");const e=this.aureliaGrid.dataView?.getItemCount()||0,t=this.loadData(e,50);this.aureliaGrid.dataView?.addItems(t),this.scrollEndCalled=!1}}handleOnSort(){if(this.shouldResetOnSort){const e=this.loadData(0,50);this.aureliaGrid.slickGrid?.scrollTo(0),this.aureliaGrid.dataView?.setItems(e),this.aureliaGrid.dataView?.reSort()}}groupByDuration(){this.aureliaGrid?.dataView?.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,t)=>m.Luy.numeric(e.value,t.value,m.Lo1.asc),aggregators:[new m.J2q.Avg("percentComplete"),new m.J2q.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.aureliaGrid?.slickGrid?.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.aureliaGrid?.slickGrid?.invalidate()}loadData(e,t){const n=[];for(let i=e;i<e+t;i++)n.push(this.newItem(i));return n}newItem(e){const t=2e3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),i=Math.floor(29*Math.random()),a=Math.round(100*Math.random());return{id:e,title:"Task "+e,duration:Math.round(100*Math.random())+"",percentComplete:a,start:new Date(t,n+1,i),finish:new Date(t+1,n+1,i),effortDriven:e%5==0}}onSortReset(e){this.shouldResetOnSort=e}clearAllFiltersAndSorts(){this.aureliaGrid?.gridService&&this.aureliaGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.aureliaGrid?.filterService.updateFilters([{columnId:"percentComplete",searchTerms:["50"],operator:">="}])}refreshMetrics(e){this.aureliaGrid&&e?.current>=0&&(this.metrics.itemCount=this.aureliaGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=e.itemCount||0)}setSortingDynamically(){this.aureliaGrid?.sortService.updateSorting([{columnId:"title",direction:"DESC"}])}},l=t,"symbol"==typeof(s="Example40")&&(s=s.description?"[".concat(s.description,"]"):""),Object.defineProperty(l,"name",{configurable:!0,value:o?"".concat(o," ",s):s}),(()=>{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;h(null,e={value:t},n,{kind:"class",name:t.name,metadata:i},null,r),t=e.value,i&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),function(e,t,n){for(var i=arguments.length>2,a=0;a<t.length;a++)n=i?t[a].call(e,n):t[a].call(e)}(t,r)})(),t;var l,s,o})()}}]);