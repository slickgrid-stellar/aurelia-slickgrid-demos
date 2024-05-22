"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[31],{1031:(e,t,i)=>{i.r(t),i.d(t,{Example12:()=>g});var o={};i.r(o),i.d(o,{bindables:()=>d,default:()=>l,dependencies:()=>s,name:()=>a,register:()=>c,template:()=>r});var n=i(3680);const a="example12",r='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example12.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<hr />\n\n<div class="row">\n  <div class="col-sm-12">\n    <span style="margin-left: 20px">\n      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="exportToFile(\'csv\')">\n        <i class="mdi mdi-download"></i>\n        Download to CSV\n      </button>\n      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="exportToFile(\'txt\')">\n        <i class="mdi mdi-download"></i>\n        Download to Text\n      </button>\n      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="exportToExcel()">\n        <i class="mdi mdi-file-excel-outline text-success"></i>\n        Download to Excel\n      </button>\n    </span>\n    <span style="margin-left: 10px">\n      <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="dynamicallyAddTitleHeader()">\n        <i class="mdi mdi-shape-square-plus"></i>\n        Dynamically Duplicate Title Column\n      </button>\n    </span>\n  </div>\n</div>\n<aurelia-slickgrid grid-id="grid12"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-grid-state-changed.trigger="gridStateChanged($event.detail)"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)">\n</aurelia-slickgrid>\n',l=r,s=[],d=[];let T;function c(e){T||(T=n.K94.define({name:a,template:r,dependencies:s,bindables:d})),e.register(T)}var E=i(8003),m=i(3271),u=i(8211);const p={TEXT_ALL_SELECTED:"Tout sélectionnés",TEXT_CANCEL:"Annuler",TEXT_CLEAR_ALL_FILTERS:"Supprimer tous les filtres",TEXT_CLEAR_ALL_GROUPING:"Supprimer tous les groupes",TEXT_CLEAR_ALL_SORTING:"Supprimer tous les tris",TEXT_COLLAPSE_ALL_GROUPS:"Réduire tous les groupes",TEXT_COLUMNS:"Colonnes",TEXT_COMMANDS:"Commandes",TEXT_CONTAINS:"Contient",TEXT_COPY:"Copier",TEXT_ENDS_WITH:"Se termine par",TEXT_EQUALS:"Égale",TEXT_EXPAND_ALL_GROUPS:"Étendre tous les groupes",TEXT_EXPORT_TO_CSV:"Exporter en format CSV",TEXT_EXPORT_TO_EXCEL:"Exporter vers Excel",TEXT_EXPORT_TO_TAB_DELIMITED:"Exporter en format texte (délimité par tabulation)",TEXT_EXPORT_TO_TEXT_FORMAT:"Exporter en format texte",TEXT_FORCE_FIT_COLUMNS:"Ajustement forcé des colonnes",TEXT_GROUP_BY:"Grouper par",TEXT_HIDE_COLUMN:"Cacher la colonne",TEXT_LAST_UPDATE:"Dernière mise à jour",TEXT_OK:"Terminé",TEXT_REMOVE_FILTER:"Supprimer le filtre",TEXT_REMOVE_SORT:"Supprimer le tri",TEXT_SAVE:"Sauvegarder",TEXT_SELECT_ALL:"Sélectionner tout",TEXT_SORT_ASCENDING:"Trier par ordre croissant",TEXT_SORT_DESCENDING:"Trier par ordre décroissant",TEXT_STARTS_WITH:"Commence par",TEXT_X_OF_Y_SELECTED:"# de % sélectionné",TEXT_X_OF_Y_MASS_SELECTED:"{{x}} de {{y}} sélectionnés",TEXT_CLEAR_PINNING:"Dégeler les colonnes/rangées",TEXT_EQUAL_TO:"Égal à",TEXT_GREATER_THAN:"Plus grand que",TEXT_GREATER_THAN_OR_EQUAL_TO:"Plus grand ou égal à",TEXT_LESS_THAN:"Plus petit que",TEXT_LESS_THAN_OR_EQUAL_TO:"Plus petit ou égal à",TEXT_NOT_CONTAINS:"Ne contient pas",TEXT_NOT_EQUAL_TO:"Non égal à",TEXT_ALL_X_RECORDS_SELECTED:"Sur tous les {{x}} éléments",TEXT_APPLY_MASS_UPDATE:"Mettre à jour en masse",TEXT_APPLY_TO_SELECTION:"Mettre à jour la sélection",TEXT_CLONE:"Cloner",TEXT_ITEMS:"éléments",TEXT_ITEMS_PER_PAGE:"éléments par page",TEXT_OF:"de",TEXT_PAGE:"Page",TEXT_REFRESH_DATASET:"Rafraîchir les données",TEXT_SYNCHRONOUS_RESIZE:"Redimension synchrone",TEXT_TOGGLE_FILTER_ROW:"Basculer la ligne des filtres",TEXT_TOGGLE_PRE_HEADER_ROW:"Basculer la ligne de pré-en-tête"};i(6757);const _=(e,t,i,o,n,a)=>void 0!==i?`Titre ${i}`:"",h=(e,t,i,o,n,a)=>i?"Vrai":"Faux";class g{constructor(){this.title="Example 12: Localization with Single Custom Locales",this.subTitle='This Examples uses French Locales but you could use your own custom locales\n    <ul>\n      <li>Defining your own Custom Locales must include all necessary text, see the default (<a href="https://github.com/ghiscoding/aurelia-slickgrid-demos/blob/master/webpack-bs4-demo-with-locales/src/locales/en.ts" target="_blank">English Custom Locales</a>)</li>\n      <li>Support Custom Locales (through the "locales" grid option), following these steps (<a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/Localization-with-Custom-Locales" target="_blank">Wiki docs</a>)</li>\n      <li>For more info about "Download to File", read the <a href=https://github.com/ghiscoding/aurelia-slickgrid/wiki/Export-to-File" target="_blank">Wiki page</a></li>\n    </ul>',this.columnDefinitions=[],this.dataset=[],this.duplicateTitleHeaderCount=1,this.excelExportService=new E.N,this.textExportService=new m.f,this.defineGrid()}attached(){this.getData(1500)}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e.slickGrid}defineGrid(){this.columnDefinitions=[{id:"title",name:"Titre",field:"id",sortable:!0,minWidth:100,filterable:!0,formatter:_,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80},{id:"duration",name:"Durée (jours)",field:"duration",sortable:!0,formatter:u._tQ.percentCompleteBar,minWidth:100,filterable:!0,filter:{model:u.CuW.compoundSlider,operator:">="}},{id:"start",name:"Début",field:"start",formatter:u._tQ.dateIso,outputType:u.PUO.dateIso,type:u.PUO.date,minWidth:100,filterable:!0,filter:{model:u.CuW.compoundDate}},{id:"finish",name:"Fin",field:"finish",formatter:u._tQ.dateIso,outputType:u.PUO.dateIso,type:u.PUO.date,minWidth:100,filterable:!0,filter:{model:u.CuW.compoundDate}},{id:"completedBool",name:"Complétée",field:"completedBool",minWidth:100,sortable:!0,formatter:u._tQ.checkmarkMaterial,exportCustomFormatter:h,filterable:!0,filter:{collection:[{value:!0,label:"Vrai"},{value:!1,label:"Faux"}],model:u.CuW.multipleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCheckboxSelector:!0,enableRowSelection:!0,locale:"fr",locales:p,showCustomFooter:!0,customFooterOptions:{metricTexts:{items:"Éléments",of:"de",lastUpdateKey:"Dernière mise à jour"},dateFormat:"YYYY-MM-DD hh:mm a",hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},gridMenu:{hideExportCsvCommand:!1,hideExportTextDelimitedCommand:!1},enableExcelExport:!0,enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService]}}getData(e){const t=[];for(let i=0;i<e;i++){const e=2e3+Math.floor(10*Math.random()),o=Math.floor(11*Math.random()),n=Math.floor(29*Math.random());t[i]={id:i,description:i%5?"desc "+i:"🚀🦄 español",duration:Math.round(100*Math.random())+"",start:new Date(e,o,n),finish:new Date(e,o+1,n),completedBool:i%5==0,completed:i%5==0?"TRUE":"FALSE"}}this.dataset=t}dynamicallyAddTitleHeader(){const e={id:"title"+this.duplicateTitleHeaderCount++,field:"id",name:"Titre",formatter:_,sortable:!0,minWidth:100,filterable:!0,params:{useFormatterOuputToFilter:!0}};this.columnDefinitions.push(e),this.columnDefinitions=this.columnDefinitions.slice()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:u.ptE.xlsx})}exportToFile(e="csv"){this.textExportService.exportToFile({delimiter:"csv"===e?u.IQ1.comma:u.IQ1.tab,filename:"myExport",format:"csv"===e?u.ptE.csv:u.ptE.txt})}gridStateChanged(e){console.log("Grid State changed:: ",e),console.log("Grid State changed:: ",e.change)}}n.K94.define(o,g)}}]);