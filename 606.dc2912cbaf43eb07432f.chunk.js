"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[606],{9606:(t,e,i)=>{i.d(e,{T:()=>r});var o=i(7514),l=i(2227);const s=["title","data-slick-tooltip"],n="[title], [data-slick-tooltip]";class r{constructor(){this.name="CustomTooltip",this._cellType="slick-cell",this._rxjs=null,this._sharedService=null,this._mousePosition={x:0,y:0},this._hasMultipleTooltips=!1,this._defaultOptions={bodyClassName:"tooltip-body",className:"",offsetArrow:3,offsetLeft:0,offsetRight:0,offsetTopBottom:4,hideArrow:!1,regularTooltipWhiteSpace:"pre-line",whiteSpace:"normal"},this._eventHandler=new o.JD8}get addonOptions(){return this._addonOptions}get cancellablePromise(){return this._cancellablePromise}get cellAddonOptions(){return this._cellAddonOptions}get bodyClassName(){return this._cellAddonOptions?.bodyClassName??"tooltip-body"}get className(){let t="slick-custom-tooltip";return this._addonOptions?.className&&(t+=` ${this._addonOptions.className}`),t}get dataView(){return this._grid.getData()||{}}get gridOptions(){return this._grid?.getOptions()||{}}get gridUid(){return this._grid?.getUID()||""}get gridUidSelector(){return this.gridUid?`.${this.gridUid}`:""}get tooltipElm(){return this._tooltipElm}addRxJsResource(t){this._rxjs=t}init(t,e){this._grid=t,this._rxjs=e.get("RxJsFacade"),this._sharedService=e.get("SharedService"),this._addonOptions={...this._defaultOptions,...this._sharedService?.gridOptions?.customTooltip},this._eventHandler.subscribe(t.onMouseEnter,this.handleOnMouseOver.bind(this)).subscribe(t.onHeaderMouseOver,((t,e)=>this.handleOnHeaderMouseOverByType(t,e,"slick-header-column"))).subscribe(t.onHeaderRowMouseOver,((t,e)=>this.handleOnHeaderMouseOverByType(t,e,"slick-headerrow-column"))).subscribe(t.onMouseLeave,this.hideTooltip.bind(this)).subscribe(t.onHeaderMouseOut,this.hideTooltip.bind(this)).subscribe(t.onHeaderRowMouseOut,this.hideTooltip.bind(this))}dispose(){this.hideTooltip(),this._cancellablePromise=void 0,this._eventHandler.unsubscribeAll()}hideTooltip(){this._cancellablePromise?.cancel(),this._observable$?.unsubscribe();const t=(0,l.classNameToList)(this.className).join("."),e=document.body.querySelector(`.${t}${this.gridUidSelector}`);e?.remove()}getOptions(){return this._addonOptions}setOptions(t){this._addonOptions={...this._addonOptions,...t}}asyncProcessCallback(t,e,i,o,l){this.hideTooltip();const s={...l,[this.addonOptions?.asyncParamsPropName??"__params"]:t};this._cellAddonOptions?.useRegularTooltip?this.renderRegularTooltip(this._cellAddonOptions.asyncPostFormatter,e,i,o,s):this.renderTooltipFormatter(this._cellAddonOptions.asyncPostFormatter,e,i,o,s)}handleOnHeaderMouseOverByType(t,e,i){this._cellType=i,this._mousePosition={x:t.clientX||0,y:t.clientY||0},this._mouseTarget=document.elementFromPoint(t.clientX||0,t.clientY||0)?.closest(n),this.hideTooltip();const o={row:-1,cell:this._grid.getColumns().findIndex((t=>(e?.column?.id??"")===t.id))},l=e.column,s={},r="slick-headerrow-column"===i;if((e=e||{}).cell=o.cell,e.row=o.row,e.columnDef=l,e.dataContext=s,e.grid=this._grid,e.type=r?"header-row":"header",this._cellAddonOptions={...this._addonOptions,...l?.customTooltip},!l?.disableTooltip&&("function"!=typeof this._cellAddonOptions?.usabilityOverride||this._cellAddonOptions.usabilityOverride(e))&&l&&t.target){this._cellNodeElm=t.target.closest(`.${i}`);const e=r?this._cellAddonOptions.headerRowFormatter:this._cellAddonOptions.headerFormatter;if(this._cellAddonOptions?.useRegularTooltip||!e){const t=r?this._cellAddonOptions?.useRegularTooltip?null:e:l.name;this.renderRegularTooltip(t,o,null,l,s)}else this._cellNodeElm&&"function"==typeof e&&this.renderTooltipFormatter(e,o,null,l,s)}}async handleOnMouseOver(t){if(this._cellType="slick-cell",this._mousePosition={x:t.clientX||0,y:t.clientY||0},this._mouseTarget=document.elementFromPoint(t.clientX||0,t.clientY||0)?.closest(n),this.hideTooltip(),t&&this._grid){const e=t?.target?.closest(".slick-cell")?.className,i=e&&/l\d+/.exec(e||"")?this._grid.getCellFromEvent(t):null;if(i){const t=this.dataView?this.dataView.getItem(i.row):this._grid.getDataItem(i.row),e=this._grid.getColumns()[i.cell];if(this._cellNodeElm=this._grid.getCellNode(i.row,i.cell),t&&e){if(this._cellAddonOptions={...this._addonOptions,...e?.customTooltip},e?.disableTooltip||"function"==typeof this._cellAddonOptions?.usabilityOverride&&!this._cellAddonOptions.usabilityOverride({cell:i.cell,row:i.row,dataContext:t,column:e,grid:this._grid,type:"cell"}))return;const l=t.hasOwnProperty(e.field)?t[e.field]:null,s=this._grid.getEditorLock().isActive()?null:l;if(this._cellAddonOptions.useRegularTooltip&&!this._cellAddonOptions?.asyncProcess||!this._cellAddonOptions?.formatter)this.renderRegularTooltip(e.formatter,i,s,e,t);else if("function"==typeof this._cellAddonOptions?.formatter&&this.renderTooltipFormatter(this._cellAddonOptions.formatter,i,s,e,t),"function"==typeof this._cellAddonOptions?.asyncProcess){const s=this._cellAddonOptions.asyncProcess(i.row,i.cell,l,e,t,this._grid);if(this._cellAddonOptions.asyncPostFormatter||console.error('[Slickgrid-Universal] when using "asyncProcess" with Custom Tooltip, you must also provide an "asyncPostFormatter" formatter.'),s instanceof Promise)this._cancellablePromise=(0,o.oCj)(s),this._cancellablePromise.promise.then((o=>this.asyncProcessCallback(o,i,l,e,t))).catch((t=>{t instanceof o.J2I||console.error(t)}));else if(this._rxjs?.isObservable(s)){const o=this._rxjs;this._observable$=s.pipe(o.switchMap((t=>o.of(t)))).subscribe((o=>this.asyncProcessCallback(o,i,l,e,t)),(t=>console.error(t)))}}}}}}parseFormatterAndSanitize(t,e,i,o,s){if("function"==typeof t){const n=t(e.row,e.cell,i,o,s,this._grid),r=(0,l.isPrimitiveOrHTML)(n)?n:n.html||n.text;return this._grid.sanitizeHtmlString((r instanceof HTMLElement?r.textContent:r)||"")}return"string"==typeof t?this._grid.sanitizeHtmlString(t):""}renderRegularTooltip(t,e,i,l,r){const d=document.createElement("div");let a;this._grid.applyHtmlCode(d,this.parseFormatterAndSanitize(t,e,i,l,r)),this._hasMultipleTooltips=(this._cellNodeElm?.querySelectorAll(n).length||0)>1;const h=this._cellAddonOptions?.useRegularTooltipFromCellTextOnly||!this._mouseTarget?this._cellNodeElm:this._mouseTarget;let c=l?.toolTip??"";c||("slick-cell"===this._cellType&&h&&h.clientWidth<h.scrollWidth&&!this._cellAddonOptions?.useRegularTooltipFromFormatterOnly?(c=h.textContent?.trim()??"",this._cellAddonOptions?.tooltipTextMaxLength&&c.length>this._cellAddonOptions?.tooltipTextMaxLength&&(c=c.substring(0,this._cellAddonOptions.tooltipTextMaxLength-3)+"..."),a=h):(this._cellAddonOptions?.useRegularTooltipFromFormatterOnly?a=d.querySelector(n):(a=(0,o.KI7)(h,s)?h:d.querySelector(n),a&&(0,o.KI7)(a,s)||!h||(a=h.querySelector(n))),"none"===a?.style.display||this._hasMultipleTooltips&&(!h||h===this._cellNodeElm)?c="":(!c||"function"==typeof t&&this._cellAddonOptions?.useRegularTooltipFromFormatterOnly)&&(c=(0,o.KI7)(a,s)||""))),""!==c&&this.renderTooltipFormatter(t,e,i,l,r,c,a),this.swapAndClearTitleAttribute(a,c)}renderTooltipFormatter(t,e,i,l,r,d,a){if(this._tooltipElm=(0,o.fhB)("div",{className:this.className}),this._tooltipBodyElm=(0,o.fhB)("div",{className:this.bodyClassName}),this._tooltipElm.classList.add(this.gridUid),this._tooltipElm.classList.add("l"+e.cell),this._tooltipElm.classList.add("r"+e.cell),this.tooltipElm?.appendChild(this._tooltipBodyElm),null==i){const t=this._cellNodeElm?.querySelector(n);i=(0,o.KI7)(t,s)||i}let h=d||this.parseFormatterAndSanitize(t,e,i,l,r)||"";h=this._cellAddonOptions?.tooltipTextMaxLength&&h.length>this._cellAddonOptions.tooltipTextMaxLength?h.substring(0,this._cellAddonOptions.tooltipTextMaxLength-3)+"...":h;let c="";!d||this._cellAddonOptions?.renderRegularTooltipAsHtml?(c=this._grid.sanitizeHtmlString(h),this._grid.applyHtmlCode(this._tooltipBodyElm,c),this._tooltipBodyElm.style.whiteSpace=this._cellAddonOptions?.whiteSpace??this._defaultOptions.whiteSpace):(c=h||"",this._tooltipBodyElm.textContent=c,this._tooltipBodyElm.style.whiteSpace=this._cellAddonOptions?.regularTooltipWhiteSpace??this._defaultOptions.regularTooltipWhiteSpace),this._cellAddonOptions?.maxHeight&&(this._tooltipElm.style.maxHeight=`${this._cellAddonOptions.maxHeight}px`),this._cellAddonOptions?.maxWidth&&(this._tooltipElm.style.maxWidth=`${this._cellAddonOptions.maxWidth}px`),c.toString()&&(document.body.appendChild(this._tooltipElm),this.reposition(e),this._cellAddonOptions?.hideArrow||this._tooltipElm.classList.add("tooltip-arrow"),this.swapAndClearTitleAttribute(a,h))}reposition(t){if(this._tooltipElm){this._cellNodeElm=this._cellNodeElm||this._grid.getCellNode(t.row,t.cell);const e=(0,o.A3q)(this._cellNodeElm)||{top:0,left:0},i=this._cellNodeElm.offsetWidth,l=this._tooltipElm.getBoundingClientRect().height,s=this._tooltipElm.getBoundingClientRect().width,n=document.body.offsetWidth||window.innerWidth;let r=(e.top||0)-this._tooltipElm.offsetHeight-(this._cellAddonOptions?.offsetTopBottom??0),d=(e.left||0)-(this._cellAddonOptions?.offsetRight??0);const a=this._cellAddonOptions?.position??"auto";let h="";if("center"===a?(d+=i/2-s/2+(this._cellAddonOptions?.offsetRight??0),h="top-center",this._tooltipElm.classList.remove("arrow-left-align","arrow-right-align"),this._tooltipElm.classList.add("arrow-center-align")):"right-align"===a||("auto"===a||"left-align"!==a)&&d+s>n?(h="right",d-=s-i-(this._cellAddonOptions?.offsetLeft??0),this._tooltipElm.classList.remove("arrow-center-align","arrow-left-align"),this._tooltipElm.classList.add("arrow-right-align")):(h="left",this._tooltipElm.classList.remove("arrow-center-align","arrow-right-align"),this._tooltipElm.classList.add("arrow-left-align")),"bottom"===a||("auto"===a||"top"!==a)&&l>(0,o.gJz)(this._cellNodeElm).top?(r=(e.top||0)+(this.gridOptions.rowHeight??0)+(this._cellAddonOptions?.offsetTopBottom??0),h=`bottom-${h}`,this._tooltipElm.classList.remove("arrow-down"),this._tooltipElm.classList.add("arrow-up")):(h=`top-${h}`,this._tooltipElm.classList.remove("arrow-up"),this._tooltipElm.classList.add("arrow-down")),this._tooltipElm&&(this._hasMultipleTooltips||this.cellAddonOptions?.repositionByMouseOverTarget)){const t=(0,o.A3q)(this._mouseTarget);h.includes("left")||"top-center"===h?d=t.left-(this._addonOptions?.offsetArrow??3):h.includes("right")&&(d=t.left-s+(this._mouseTarget?.offsetWidth??0)+(this._addonOptions?.offsetArrow??3))}this._tooltipElm.style.top=`${r}px`,this._tooltipElm.style.left=`${d}px`}}swapAndClearTitleAttribute(t,e){let i;t&&(i=this._cellNodeElm&&(this._cellNodeElm.hasAttribute("title")&&this._cellNodeElm.getAttribute("title")?this._cellNodeElm:this._cellNodeElm?.querySelector("[title]")));const o=t||this._cellNodeElm&&(this._cellNodeElm.hasAttribute("title")&&this._cellNodeElm.getAttribute("title")?this._cellNodeElm:this._cellNodeElm?.querySelector("[title]"));o&&(o.setAttribute("data-slick-tooltip",e||""),o.hasAttribute("title")&&o.setAttribute("title",""),i?.hasAttribute("title")&&i.setAttribute("title",""))}}}}]);