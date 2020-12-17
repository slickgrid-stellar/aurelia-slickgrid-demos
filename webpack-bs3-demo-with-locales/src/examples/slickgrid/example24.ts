import { autoinject } from 'aurelia-framework';
import {
  AureliaGridInstance,
  Column,
  ContextMenu,
  ExtensionName,
  FieldType,
  Filters,
  Formatter,
  Formatters,
  GridOption,
} from 'aurelia-slickgrid';
import './example24.scss'; // provide custom CSS/SASS styling

const actionFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  if (dataContext.priority === 3) { // option 3 is High
    return `<div class="fake-hyperlink">Action <i class="fa fa-caret-down"></i></div>`;
  }
  return `<div class="disabled">Action <i class="fa fa-caret-down"></i></div>`;
};

const priorityFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  if (!value) {
    return '';
  }
  let output = '';
  const count = +(value >= 3 ? 3 : value);
  const color = count === 3 ? 'red' : (count === 2 ? 'orange' : 'yellow');
  const icon = `<i class="fa fa-star ${color}" aria-hidden="true"></i>`;

  for (let i = 1; i <= count; i++) {
    output += icon;
  }
  return output;
};

const priorityExportFormatter: Formatter = (row, cell, value, columnDef, dataContext, grid) => {
  if (!value) {
    return '';
  }
  const count = +(value >= 3 ? 3 : value);
  return count === 3 ? 'High' : (count === 2 ? 'Medium' : 'Low');
};

const taskFormatter: Formatter = (row: number, cell: number, value: any, columnDef: any, dataContext: any, grid: any) => {
  return value !== undefined ? `Title ${value}` : '';
};

@autoinject()
export class Example24 {
  title = 'Example 24: Cell Menu & Context Menu Plugins';
  subTitle = `Add Cell Menu and Context Menu
    <ul>
      <li>This example demonstrates 2 SlickGrid plugins
      <ol>
        <li>Using the <b>Slick.Plugins.CellMenu</b> plugin, often used for an Action Menu(s), 1 or more per grid
          (<a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/Cell-Menu" target="_blank">Wiki docs</a>).
        </li>
        <li>Using the <b>Slick.Plugins.ContextMenu</b> plugin, shown after a mouse right+click, only 1 per grid.
        (<a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/Context-Menu" target="_blank">Wiki docs</a>).
        </li>
      </ol>
      <li>It will also "autoAdjustDrop" (bottom/top) and "autoAlignSide" (left/right) by default but could be turned off</li>
      <li>Both plugins have 2 sections, 1st section can have an array of Options (to change value of a field) and 2nd section an array of Commands (execute a command)</li>
      <li>There are 2 ways to execute a Command/Option</li>
      <ol>
        <li>via onCommand/onOptionSelected (use a switch/case to parse command/option and do something with it)</li>
        <li>via action callback (that can be defined on each command/option)</li>
      </ol>
      <li>Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list</li>
      <ol>
        <li>These callbacks are: "menuUsabilityOverride", "itemVisibilityOverride", "itemUsabilityOverride"</li>
        <li>... e.g. in the demo, the "Action" Cell Menu is only available when Priority is set to "High" via "menuUsabilityOverride"</li>
        <li>... e.g. in the demo, the Context Menu is only available on the first 20 Tasks via "menuUsabilityOverride"</li>
      </ol>
    </ul>`;

  aureliaGrid: AureliaGridInstance;
  gridOptions: GridOption;
  columnDefinitions: Column[];
  dataset: any[];

  constructor() {
    // define the grid options & columns and then create the grid itself
    this.defineGrid();
  }

  get cellMenuInstance(): any {
    return this.aureliaGrid && this.aureliaGrid.extensionService.getSlickgridAddonInstance(ExtensionName.cellMenu) || {};
  }

  get contextMenuInstance(): any {
    return this.aureliaGrid && this.aureliaGrid.extensionService.getSlickgridAddonInstance(ExtensionName.contextMenu) || {};
  }

  attached() {
    // populate the dataset once the grid is ready
    this.dataset = this.getData(1000);
  }

  /* Define grid Options and Columns */
  defineGrid() {
    this.columnDefinitions = [
      { id: 'id', name: '#', field: 'id', maxWidth: 45, sortable: true, filterable: true },
      {
        id: 'title', name: 'Title', field: 'id', minWidth: 100,
        formatter: taskFormatter,
        sortable: true,
        filterable: true,
        params: { useFormatterOuputToFilter: true }
      },
      {
        id: 'percentComplete', name: 'Percent Complete', field: 'percentComplete', minWidth: 100,
        exportWithFormatter: false,
        sortable: true, filterable: true,
        filter: { model: Filters.slider, operator: '>=' },
        formatter: Formatters.percentCompleteBar, type: FieldType.number,
      },
      {
        id: 'start', name: 'Start', field: 'start', minWidth: 100,
        formatter: Formatters.dateIso, outputType: FieldType.dateIso, type: FieldType.date,
        filterable: true, filter: { model: Filters.compoundDate }
      },
      { id: 'finish', name: 'Finish', field: 'finish', formatter: Formatters.dateIso, outputType: FieldType.dateIso, type: FieldType.date, minWidth: 100, filterable: true, filter: { model: Filters.compoundDate } },
      {
        id: 'priority', name: 'Priority', field: 'priority',
        exportCustomFormatter: priorityExportFormatter,
        formatter: priorityFormatter,
        sortable: true, filterable: true,
        filter: {
          collection: [{ value: '', label: '' }, { value: 1, label: 'Low' }, { value: 2, label: 'Medium' }, { value: 3, label: 'High' }],
          model: Filters.singleSelect,
          filterOptions: {
            autoDropWidth: true
          }
        }
      },
      {
        id: 'completed', name: 'Completed', field: 'completed',
        formatter: Formatters.checkmark,
        sortable: true, filterable: true,
        filter: {
          collection: [{ value: '', label: '' }, { value: true, label: 'True' }, { value: false, label: 'False' }],
          model: Filters.singleSelect,
          filterOptions: {
            autoDropWidth: true
          }
        }
      },
      {
        id: 'action', name: 'Action', field: 'action', width: 110, maxWidth: 200,
        excludeFromExport: true,
        formatter: actionFormatter,
        cellMenu: {
          hideCloseButton: false,
          width: 200,
          // you can override the logic of when the menu is usable
          // for example say that we want to show a menu only when then Priority is set to 'High'.
          // Note that this ONLY overrides the usability itself NOT the text displayed in the cell,
          // if you wish to change the cell text (or hide it)
          // then you SHOULD use it in combination with a custom formatter (actionFormatter) and use the same logic in that formatter
          menuUsabilityOverride: (args) => {
            return (args.dataContext.priority === 3); // option 3 is High
          },

          commandTitle: 'Commands', // optional title
          commandItems: [
            // array of command item objects, you can also use the "positionOrder" that will be used to sort the items in the list
            {
              command: 'command2', title: 'Command 2', positionOrder: 62,
              // you can use the "action" callback and/or use "onCallback" callback from the grid options, they both have the same arguments
              action: (e, args) => {
                console.log(args.dataContext, args.column);
                // action callback.. do something
              },
              // only enable command when the task is not completed
              itemUsabilityOverride: (args) => {
                return !args.dataContext.completed;
              }
            },
            { command: 'command1', title: 'Command 1', cssClass: 'orange', positionOrder: 61 },
            {
              command: 'delete-row', title: 'Delete Row', positionOrder: 64,
              iconCssClass: 'fa fa-times', cssClass: 'red', textCssClass: 'bold',
              // only show command to 'Delete Row' when the task is not completed
              itemVisibilityOverride: (args) => {
                return !args.dataContext.completed;
              }
            },
            // you can pass divider as a string or an object with a boolean (if sorting by position, then use the object)
            // note you should use the "divider" string only when items array is already sorted and positionOrder are not specified
            { divider: true, command: '', positionOrder: 63 },
            // 'divider',

            {
              command: 'help',
              title: 'Help',
              iconCssClass: 'fa fa-question-circle',
              positionOrder: 66,
            },
            { command: 'something', title: 'Disabled Command', disabled: true, positionOrder: 67, }
          ],
          optionTitle: 'Change Completed Flag',
          optionItems: [
            { option: true, title: 'True', iconCssClass: 'fa fa-check-square-o' },
            { option: false, title: 'False', iconCssClass: 'fa fa-square-o' },
            {
              option: null, title: 'null', cssClass: 'italic',
              // you can use the "action" callback and/or use "onCallback" callback from the grid options, they both have the same arguments
              action: (e, args) => {
                // action callback.. do something
              },
              // only enable Action menu when the Priority is set to High
              itemUsabilityOverride: (args) => {
                return (args.dataContext.priority === 3);
              },
              // only show command to 'Delete Row' when the task is not completed
              itemVisibilityOverride: (args) => {
                return !args.dataContext.completed;
              }
            },
          ]
        }
      },
    ];

    this.gridOptions = {
      autoResize: {
        container: '#demo-container',
        rightPadding: 10
      },
      enableCellNavigation: true,
      enableFiltering: true,
      enableSorting: true,
      excelExportOptions: {
        exportWithFormatter: true,
        customColumnWidth: 15,

        // you can customize how the header titles will be styled (defaults to Bold)
        columnHeaderStyle: { font: { bold: true, italic: true } }
      },
      enableContextMenu: true,
      enableCellMenu: true,

      // when using the cellMenu, you can change some of the default options and all use some of the callback methods
      cellMenu: {
        // all the Cell Menu callback methods (except the action callback)
        // are available under the grid options as shown below
        onCommand: (e, args) => this.executeCommand(e, args),
        onOptionSelected: (e, args) => {
          // change "Completed" property with new option selected from the Cell Menu
          const dataContext = args && args.dataContext;
          if (dataContext && dataContext.hasOwnProperty('completed')) {
            dataContext.completed = args.item.option;
            this.aureliaGrid.gridService.updateItem(dataContext);
          }
        },
        onBeforeMenuShow: ((e, args) => {
          // for example, you could select the row that the click originated
          // this.aureliaGrid.gridService.setSelectedRows([args.row]);
          console.log('Before the Cell Menu is shown', args);
        }),
        onBeforeMenuClose: ((e, args) => console.log('Cell Menu is closing', args)),
      },

      // load Context Menu structure
      contextMenu: this.getContextMenuOptions(),
    };
  }

  executeCommand(e, args) {
    const columnDef = args.columnDef;
    const command = args.command;
    const dataContext = args.dataContext;

    switch (command) {
      case 'command1':
        alert('Command 1');
        break;
      case 'command2':
        alert('Command 2');
        break;
      case 'help':
        alert('Please help!');
        break;
      case 'delete-row':
        if (confirm(`Do you really want to delete row ${args.row + 1} with Task ${dataContext.id}`)) {
          this.aureliaGrid.dataView.deleteItem(dataContext.id);
        }
        break;
    }
  }

  getData(count: number): any[] {
    // mock a dataset
    const tmpData = [];
    for (let i = 0; i < count; i++) {
      const randomYear = 2000 + Math.floor(Math.random() * 30);
      const randomMonth = Math.floor(Math.random() * 11);
      const randomDay = Math.floor((Math.random() * 29));

      tmpData[i] = {
        id: i,
        duration: Math.floor(Math.random() * 25) + ' days',
        percentComplete: Math.floor(Math.random() * 100),
        start: new Date(randomYear, randomMonth, randomDay),
        finish: new Date(randomYear, (randomMonth + 1), randomDay),
        priority: i % 3 ? 2 : (i % 5 ? 3 : 1),
        completed: (i % 4 === 0),
      };
    }
    return tmpData;
  }

  getContextMenuOptions(): ContextMenu {
    return {
      hideCloseButton: false,
      width: 200,
      // optionally and conditionally define when the the menu is usable,
      // this should be used with a custom formatter to show/hide/disable the menu
      menuUsabilityOverride: (args) => {
        const dataContext = args && args.dataContext;
        return (dataContext.id < 21); // say we want to display the menu only from Task 0 to 20
      },
      // which column to show the command list? when not defined it will be shown over all columns
      commandShownOverColumnIds: ['id', 'title', 'percentComplete', 'start', 'finish', 'completed' /*, 'priority', 'action' */],
      commandTitle: 'Commands', // this title is optional
      commandItems: [
        { divider: true, command: '', positionOrder: 61 },
        { command: 'delete-row', title: 'Delete Row', iconCssClass: 'fa fa-times', cssClass: 'red', textCssClass: 'bold', positionOrder: 62 },
        // you can pass divider as a string or an object with a boolean (if sorting by position, then use the object)
        // note you should use the "divider" string only when items array is already sorted and positionOrder are not specified
        // 'divider',
        { divider: true, command: '', positionOrder: 63 },
        {
          command: 'help', title: 'Help', iconCssClass: 'fa fa-question-circle', positionOrder: 64,
          // you can use the 'action' callback and/or subscribe to the 'onCallback' event, they both have the same arguments
          action: (e, args) => {
            // action callback.. do something
          },
          // only show command to 'Help' when the task is Not Completed
          itemVisibilityOverride: (args) => {
            const dataContext = args && args.dataContext;
            return (!dataContext.completed);
          }
        },
        { command: 'something', title: 'Disabled Command', disabled: true, positionOrder: 65 },
      ],

      // Options allows you to edit a column from an option chose a list
      // for example, changing the Priority value
      // you can also optionally define an array of column ids that you wish to display this option list (when not defined it will show over all columns)
      optionTitle: 'Change Priority',
      optionShownOverColumnIds: ['priority'], // optional, when defined it will only show over the columns (column id) defined in the array
      optionItems: [
        {
          option: 0, title: 'n/a', textCssClass: 'italic',
          // only enable this option when the task is Not Completed
          itemUsabilityOverride: (args) => {
            const dataContext = args && args.dataContext;
            return (!dataContext.completed);
          },
          // you can use the 'action' callback and/or subscribe to the 'onCallback' event, they both have the same arguments
          action: (e, args) => {
            // action callback.. do something
          },
        },
        { option: 1, iconCssClass: 'fa fa-star-o yellow', title: 'Low' },
        { option: 2, iconCssClass: 'fa fa-star-half-o orange', title: 'Medium' },
        { option: 3, iconCssClass: 'fa fa-star red', title: 'High' },
        // you can pass divider as a string or an object with a boolean (if sorting by position, then use the object)
        // note you should use the "divider" string only when items array is already sorted and positionOrder are not specified
        'divider',
        // { divider: true, option: '', positionOrder: 3 },
        {
          option: 4, title: 'Extreme', iconCssClass: 'fa fa-fire', disabled: true,
          // only shown when the task is Not Completed
          itemVisibilityOverride: (args) => {
            const dataContext = args && args.dataContext;
            return (!dataContext.completed);
          }
        },
      ],
      // subscribe to Context Menu
      onBeforeMenuShow: ((e, args) => {
        // for example, you could select the row it was clicked with
        // grid.setSelectedRows([args.row]); // select the entire row
        this.aureliaGrid.slickGrid.setActiveCell(args.row, args.cell, false); // select the cell that the click originated
        console.log('Before the global Context Menu is shown', args);
      }),
      onBeforeMenuClose: ((e, args) => console.log('Global Context Menu is closing', args)),

      // subscribe to Context Menu onCommand event (or use the action callback on each command)
      onCommand: ((e, args) => this.executeCommand(e, args)),

      // subscribe to Context Menu onOptionSelected event (or use the action callback on each option)
      onOptionSelected: ((e, args) => {
        // change Priority
        const dataContext = args && args.dataContext;
        if (dataContext && dataContext.hasOwnProperty('priority')) {
          dataContext.priority = args.item.option;
          this.aureliaGrid.gridService.updateItem(dataContext);
        }
      }),
    };
  }

  showContextCommandsAndOptions(showBothList: boolean) {
    // when showing both Commands/Options, we can just pass an empty array to show over all columns
    // else show on all columns except Priority
    const showOverColumnIds = showBothList ? [] : ['id', 'title', 'complete', 'start', 'finish', 'completed', 'action'];
    this.contextMenuInstance.setOptions({
      commandShownOverColumnIds: showOverColumnIds,
      // hideCommandSection: !showBothList
    });
  }

  showCellMenuCommandsAndOptions(showBothList) {
    // change via the plugin setOptions
    this.cellMenuInstance.setOptions({
      hideOptionSection: !showBothList
    });

    // OR find the column, then change the same hide property
    // var actionColumn = columns.find(function (column) { return column.id === 'action' });
    // actionColumn.cellMenu.hideOptionSection = !showBothList;
  }
}
