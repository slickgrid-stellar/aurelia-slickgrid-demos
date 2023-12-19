# Aurelia-Slickgrid - Client Demos
## [Aurelia-Slickgrid](https://github.com/ghiscoding/aurelia-slickgrid) library client demos with different bundler types.

### Requires Aurelia 2
The latest code only works with Aurelia 2, if you still wish to use Aurelia 1 then take a look at the [version6](https://github.com/ghiscoding/aurelia-slickgrid-demos/tree/version6) branch.

## Important Note
### Aurelia-Slickgrid & Slickgrid-Universal compatibility
For a full compatibility table of Aurelia-Slickgrid with Slickgrid-Universal, you can consult the [Versions Compatibility Table - Wiki](https://github.com/ghiscoding/aurelia-slickgrid/wiki/Versions-Compatibility-Table)

### Optional NPM Packages
Please note that some of the npm packages installed in these demos are **optional** and are installed **only** for demo purposes. If you don't need the feature then don't install it (remove it from your `package.json`) and you'll end up with a smaller production build.

Again the following dependencies are totally **OPTIONAL**

| Package Name | Version | Description |
| ------------ | ------- | ----------- |
| [@slickgrid-universal/composite-editor-component](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/composite-editor-component) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/composite-editor-component.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/composite-editor-component) | Composite Editor Modal Component |
| [@slickgrid-universal/custom-tooltip-plugin](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/custom-tooltip-plugin) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/custom-tooltip-plugin.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/custom-tooltip-plugin) | Custom Tooltip Plugin |
| [@slickgrid-universal/excel-export](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/excel-export) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/excel-export.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/excel-export) | Export to Excel Service (xls/xlsx) |
| [@slickgrid-universal/text-export](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/text-export) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/text-export.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/text-export) | Export to Text File Service (csv/txt) |
| [@slickgrid-universal/graphql](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/graphql) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/graphql.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/graphql) | GraphQL Query Service (support Filter/Sort/Pagination) |
| [@slickgrid-universal/odata](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/odata) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/odata.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/odata) | OData Query Service (support Filter/Sort/Pagination) |
| [@slickgrid-universal/rxjs-observable](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/rxjs-observable) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/rxjs-observable.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/rxjs-observable) | RxJS Observable Service Wrapper |

---

### Build Demo
```bash
npm run build # OR yarn run build
```

## Webpack and Bootstrap 5 (with TypeScript)
### Install and Start Demo
```bash
git clone https://github.com/ghiscoding/aurelia-slickgrid-demos
cd webpack-bs5-demo
npm install # OR yarn install
npm start # OR yarn start
```

Then open your browser to
```html
http://localhost:8080
```

### Build Demo
```bash
npm run build # OR yarn run build
```

## Webpack and Bootstrap 5 with single Locale & without I18N (TypeScript)
### Install and Start Demo
```bash
git clone https://github.com/ghiscoding/aurelia-slickgrid-demos
cd webpack-bs5-demo-with-locales
npm install # OR yarn install
npm run start # OR yarn start
```

Then open your browser to
```html
http://localhost:8080
```

### Build Demo
```bash
run run build # OR yarn run build
```
