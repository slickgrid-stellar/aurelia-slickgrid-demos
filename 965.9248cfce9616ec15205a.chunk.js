"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[965],{2437:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(1601),o=n.n(i),l=n(6314),r=n.n(l)()(o());r.push([e.id,".slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696 !important}.slick-pane-bottom{border-top:1px solid #969696 !important}",""]);const a=r},965:(e,t,n)=>{n.r(t),n.d(t,{Example20:()=>R});var i={};n.r(i),n.d(i,{bindables:()=>c,default:()=>s,dependencies:()=>d,name:()=>r,register:()=>m,template:()=>a});var o=n(3680),l=n(2437);const r="example20",a='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example20.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<br>\n\n<div class="row">\n  <div class="col-sm-12">\n    <span>\n      <label for="">Pinned Rows: </label>\n      <input type="number"\n              value.bind="frozenRowCount">\n      <button class="btn btn-outline-secondary btn-xs btn-icon"\n              click.trigger="changeFrozenRowCount()">\n        Set\n      </button>\n    </span>\n    <span style="margin-left: 10px">\n      <label for="">Pinned Columns: </label>\n      <input type="number"\n              value.bind="frozenColumnCount">\n      <button class="btn btn-outline-secondary btn-xs btn-icon"\n              click.trigger="changeFrozenColumnCount()">\n        Set\n      </button>\n    </span>\n  </div>\n</div>\n\n<div class="row mt-2">\n  <div class="col-sm-12">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="setFrozenColumns(-1)"\n            data-test="remove-frozen-column-button">\n      <i class="mdi mdi-close"></i> Remove Frozen Columns\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="setFrozenColumns(2)"\n            data-test="set-3frozen-columns">\n      <i class="mdi mdi-pin-outline"></i> Set 3 Frozen Columns\n    </button>\n    <span style="margin-left: 15px">\n      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleFrozenBottomRows()">\n        <i class="mdi mdi-flip-vertical"></i> Toggle Pinned Rows\n      </button>\n      <span style="font-weight: bold;">: ${ isFrozenBottom ? \'Bottom\' : \'Top\' }</span>\n    </span>\n  </div>\n</div>\n\n<div class="col-sm-12">\n  <hr>\n</div>\n\n<aurelia-slickgrid grid-id="grid20"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-validation-error.trigger="onCellValidationError($event.detail.eventData, $event.detail.args)"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)">\n</aurelia-slickgrid>\n',s=a,d=[],c={};let u;function m(e){u||(u=o.K94.define({name:r,template:a,dependencies:d,bindables:c})),e.register(u)}var b=n(8211),h=n(5072),f=n.n(h),p=n(7825),g=n.n(p),v=n(7659),w=n.n(v),C=n(5056),z=n.n(C),y=n(540),O=n.n(y),k=n(1113),x=n.n(k),F={};F.styleTagTransform=x(),F.setAttributes=z(),F.insert=w().bind(null,"head"),F.domAPI=g(),F.insertStyleElement=O(),f()(l.A,F),l.A&&l.A.locals&&l.A.locals,n(6757);let R=(()=>{let e,t,n=[(0,o.EMX)(i)],l=[];return t=class{constructor(){this.title="Example 20: Pinned (frozen) Columns/Rows",this.subTitle='\n    This example demonstrates the use of Pinned (aka frozen) Columns and/or Rows (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/frozen-columns-rows" target="_blank">Wiki docs</a>)\n    <ul>\n      <li>Option to pin any number of columns (left only) or rows</li>\n      <li>Option to pin the rows at the bottom instead of the top (default)</li>\n      <li>You can also dynamically any of these options, through SlickGrid "setOptions()"</li>\n      <li>Possibility to change the styling of the line border between pinned columns/rows</li>\n    </ul>\n  ',this.columnDefinitions=[],this.frozenColumnCount=2,this.frozenRowCount=3,this.isFrozenBottom=!1,this.dataset=[],this.defineGrid(),this.slickEventHandler=new b.JD8}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e&&e.slickGrid,this.slickEventHandler.subscribe(this.gridObj.onMouseEnter,(e=>this.colorizeHoveringRow(e,!0))),this.slickEventHandler.subscribe(this.gridObj.onMouseLeave,(e=>this.colorizeHoveringRow(e,!1)))}colorizeHoveringRow(e,t){const n=this.gridObj.getCellFromEvent(e),i=t?[n?.row??0]:[];this.gridObj.setSelectedRows(i),e.preventDefault()}attached(){this.getData()}detaching(){this.slickEventHandler.unsubscribeAll()}defineGrid(){this.columnDefinitions=[{id:"sel",name:"#",field:"id",minWidth:40,width:40,maxWidth:40,cannotTriggerInsert:!0,resizable:!1,unselectable:!0},{id:"title",name:"Title",field:"title",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",resizable:!1,minWidth:130,width:140,formatter:b._tQ.percentCompleteBar,type:b.PUO.number,filterable:!0,filter:{model:b.CuW.slider,operator:">="},sortable:!0},{id:"start",name:"Start",field:"start",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:b._tQ.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:b._tQ.dateIso},{id:"cost",name:"Cost | Duration",field:"cost",formatter:this.costDurationFormatter.bind(this),minWidth:150,width:170,sortable:!0,filter:{model:b.CuW.compoundSlider},editor:{model:b.R8o.dualInput,params:{leftInput:{field:"cost",type:"float",decimal:2,minValue:0,maxValue:5e4,placeholder:"< 50K",errorMessage:"Cost must be positive and below $50K."},rightInput:{field:"duration",type:"float",minValue:0,maxValue:100,title:"make sure Duration is withing its range of 0 to 100",errorMessage:"Duration must be between 0 and 100."}}}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",minWidth:100,width:120,formatter:b._tQ.checkmarkMaterial,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:b.CuW.singleSelect},sortable:!0},{id:"title1",name:"Title 1",field:"title1",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title2",name:"Title 2",field:"title2",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title3",name:"Title 3",field:"title3",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title4",name:"Title 4",field:"title4",minWidth:100,width:120,filterable:!0,sortable:!0}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},gridWidth:920,enableCellNavigation:!0,editable:!0,autoEdit:!0,enableExcelCopyBuffer:!0,frozenColumn:this.frozenColumnCount,frozenRow:this.frozenRowCount,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}}}getData(){const e=[];for(let t=0;t<500;t++)e[t]={id:t,title:"Task "+t,cost:t%33==0?null:1e4*Math.random(),duration:t%8?Math.round(100*Math.random())+"":null,percentComplete:Math.round(100*Math.random()),start:new Date(2009,0,1),finish:new Date(2009,4,5),effortDriven:t%5==0,title1:`Some Text ${Math.round(25*Math.random())}`,title2:`Some Text ${Math.round(25*Math.random())}`,title3:`Some Text ${Math.round(25*Math.random())}`,title4:`Some Text ${Math.round(25*Math.random())}`};this.dataset=e}changeFrozenColumnCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenColumn:this.frozenColumnCount})}changeFrozenRowCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenRow:this.frozenRowCount})}costDurationFormatter(e,t,n,i,o){const l=this.isNullUndefinedOrEmpty(o.cost)?"n/a":(0,b.ZVp)(o.cost,0,2,!1,"$","",".",",");let r="n/a";return!this.isNullUndefinedOrEmpty(o.duration)&&o.duration>=0&&(r=`${o.duration} ${o.duration>1?"days":"day"}`),`<b>${l}</b> | ${r}`}isNullUndefinedOrEmpty(e){return""===e||null==e}onCellValidationError(e,t){alert(t.validationResults.msg)}setFrozenColumns(e){this.gridObj.setOptions({frozenColumn:e}),this.gridOptions=this.gridObj.getOptions()}toggleFrozenBottomRows(){this.gridObj&&this.gridObj.setOptions&&(this.gridObj.setOptions({frozenBottom:!this.isFrozenBottom}),this.isFrozenBottom=!this.isFrozenBottom)}},r=t,"symbol"==typeof(a="Example20")&&(a=a.description?"[".concat(a.description,"]"):""),Object.defineProperty(r,"name",{configurable:!0,value:s?"".concat(s," ",a):a}),(()=>{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;(function(e,t,n,i,o,l){function r(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var a,s=i.kind,d="getter"===s?"get":"setter"===s?"set":"value",c=!t&&e?i.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,i.name):{}),m=!1,b=n.length-1;b>=0;b--){var h={};for(var f in i)h[f]="access"===f?{}:i[f];for(var f in i.access)h.access[f]=i.access[f];h.addInitializer=function(e){if(m)throw new TypeError("Cannot add initializers after decoration has completed");l.push(r(e||null))};var p=(0,n[b])("accessor"===s?{get:u.get,set:u.set}:u[d],h);if("accessor"===s){if(void 0===p)continue;if(null===p||"object"!=typeof p)throw new TypeError("Object expected");(a=r(p.get))&&(u.get=a),(a=r(p.set))&&(u.set=a),(a=r(p.init))&&o.unshift(a)}else(a=r(p))&&("field"===s?o.unshift(a):u[d]=a)}c&&Object.defineProperty(c,i.name,u),m=!0})(null,e={value:t},n,{kind:"class",name:t.name,metadata:i},null,l),t=e.value,i&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),function(e,t,n){for(var i=arguments.length>2,o=0;o<t.length;o++)n=i?t[o].call(e,n):t[o].call(e)}(t,l)})(),t;var r,a,s})()}}]);