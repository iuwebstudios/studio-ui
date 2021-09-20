(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1341:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(58),_clientLogger=__webpack_require__(39),_configFilename=__webpack_require__(1342);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1342:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(553);var parameters={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered"}},1343:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(438).configure)([__webpack_require__(1344),__webpack_require__(1346)],module,!1)}).call(this,__webpack_require__(86)(module))},1344:function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":1345};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1344},1345:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(231);__webpack_require__(553);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,{title:"Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1",{id:"studio-ui"},"Studio-UI"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"A React/Typescript UI component library that extends ","[rivet-react]"," (",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",_extends({parentName:"p"},{href:"https://indiana-university.github.io/rivet-react",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://indiana-university.github.io/rivet-react"),")"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",{id:"using-studio-ui"},"Using Studio-UI"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"To use this component library:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li",{parentName:"ul"},"Add the npm package to your project",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code",_extends({parentName:"pre"},{}),"$ npm install @iuwebstudios/studio-ui\n")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",{id:"installation-guide"},"Installation guide"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"In the project directory, you can run:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h3",{id:"npm-start"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"h3"},"npm start")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Launches the component explorer on port 6006"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h3",{id:"npm-test"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"h3"},"npm test")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Launches the test runner in the interactive watch mode.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("br",null),"\nSee the section about ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",_extends({parentName:"p"},{href:"https://facebook.github.io/create-react-app/docs/running-tests",target:"_blank",rel:"nofollow noopener noreferrer"}),"running tests")," for more information."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h3",{id:"npm-run-build"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"h3"},"npm run build")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Builds the package library."))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXContent,null))},__webpack_exports__.default=componentMeta},1346:function(module,exports,__webpack_require__){var map={"./icon/Icon.stories.tsx":1347,"./table/SortableTable.stories.tsx":1410};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1346},1347:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"AllIcons",(function(){return AllIcons}));var _home_runner_work_studio_ui_studio_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_Icon__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(67)),_Drawings__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(175),rivet_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(102);__webpack_require__(1403);__webpack_exports__.default={title:"Visual/Icons",component:_Icon__WEBPACK_IMPORTED_MODULE_3__.a};var Default=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"icon-search-story",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.a,Object(_home_runner_work_studio_ui_studio_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))})}.bind({});Default.args={name:"alert"};var AllIcons=function SearchTemplate(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"icon-search-story",children:Object.keys(_Drawings__WEBPACK_IMPORTED_MODULE_4__.a).map((function(key){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(rivet_react__WEBPACK_IMPORTED_MODULE_5__.Button,{size:"small",title:key,variant:"plain",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_3__.a,{iconString:key})},key)}))})}.bind({});Default.parameters=Object(_home_runner_work_studio_ui_studio_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:'(args) => <div className="icon-search-story"><Icon {...args} /></div>'}},Default.parameters),AllIcons.parameters=Object(_home_runner_work_studio_ui_studio_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:'() => {\n\n    return (\n        <div className="icon-search-story">\n            {\n                Object.keys(drawings).map(key =>\n                    <Button key={key} size="small" title={key} variant={"plain"}>\n                        <Icon iconString={key}/>\n                    </Button>\n                )\n            }\n\n        </div>\n    );\n}'}},AllIcons.parameters)},1349:function(module,exports,__webpack_require__){},1403:function(module,exports,__webpack_require__){},1404:function(module,exports,__webpack_require__){},1405:function(module,exports,__webpack_require__){},1410:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pageable",(function(){return Pageable}));var objectSpread2=__webpack_require__(68),jsx_runtime=__webpack_require__(1),react=__webpack_require__(0),slicedToArray=__webpack_require__(356),components=(__webpack_require__(1404),__webpack_require__(102)),Icon=__webpack_require__(67),SortButton_SortButton=function SortButton(_ref){var title=_ref.title,sortAsc=_ref.sortAsc,active=_ref.active,onClick=_ref.onClick,children=_ref.children,SortIcon=function SortIcon(){return sortAsc?Object(jsx_runtime.jsx)(Icon.a,{name:"sort-desc"}):Object(jsx_runtime.jsx)(Icon.a,{name:"sort-asc"})};return Object(jsx_runtime.jsxs)(components.Button,{variant:"plain",title:title,onClick:onClick,children:[children,active?Object(jsx_runtime.jsx)(SortIcon,{}):""]})};try{SortButton_SortButton.displayName="SortButton",SortButton_SortButton.__docgenInfo={description:"",displayName:"SortButton",props:{title:{defaultValue:null,description:"button title, corresponds to title on hover",name:"title",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"if true, the button edges are rounded",name:"active",required:!1,type:{name:"boolean"}},sortAsc:{defaultValue:null,description:"",name:"sortAsc",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/SortButton.tsx#SortButton"]={docgenInfo:SortButton_SortButton.__docgenInfo,name:"SortButton",path:"src/button/SortButton.tsx#SortButton"})}catch(__react_docgen_typescript_loader_error){}var SortableTable_SortableTable=function SortableTable(_ref){var title=_ref.title,defaultPageSize=_ref.defaultPageSize,sortBy=_ref.sortBy,children=_ref.children,header=children.header,rows=children.rows,_useState=Object(react.useState)(sortBy||{index:0}),_useState2=Object(slicedToArray.a)(_useState,2),sort=_useState2[0],setSort=_useState2[1],_useState3=Object(react.useState)({num:0,size:defaultPageSize||20}),_useState4=Object(slicedToArray.a)(_useState3,2),page=_useState4[0],setPage=_useState4[1],totalPage=Math.ceil(rows.length/page.size),pageEndIndex=function pageEndIndex(){return(page.num+1)*page.size};return Object(jsx_runtime.jsxs)(components.Table,{className:"studio-sortable-table",children:[Object(jsx_runtime.jsx)("caption",{className:"sr-only",children:title}),Object(jsx_runtime.jsx)("thead",{children:Object(jsx_runtime.jsx)("tr",{children:header.map((function(head,index){return Object(jsx_runtime.jsx)("th",{scope:"col",children:"string"==typeof head.name?Object(jsx_runtime.jsx)("div",{className:"sort-button",children:Object(jsx_runtime.jsx)(SortButton_SortButton,{onClick:function onClick(){!function handleSortClicked(index){sort.index===index?setSort(Object(objectSpread2.a)(Object(objectSpread2.a)({},sort),{},{desc:!sort.desc})):setSort({index:index})}(index)},active:sort.index===index,sortAsc:!sort.desc,children:head.name})}):head.name},"row-head-"+head.name)}))})}),Object(jsx_runtime.jsx)("tbody",{children:function sortRows(){if(header[sort.index].sort){var currentRows=rows.sort(header[sort.index].sort);return sort.desc?currentRows.reverse():currentRows}return rows.sort((function(a,b){var _a$sort$index,_b$sort$index,_a$sort$index2,_a$sort$index2$value,_b$sort$index2,_b$sort$index2$value;if(null===(null===(_a$sort$index=a[sort.index])||void 0===_a$sort$index?void 0:_a$sort$index.value)||null===(null===(_b$sort$index=b[sort.index])||void 0===_b$sort$index?void 0:_b$sort$index.value))return 0;var first=null===(_a$sort$index2=a[sort.index])||void 0===_a$sort$index2||null===(_a$sort$index2$value=_a$sort$index2.value)||void 0===_a$sort$index2$value?void 0:_a$sort$index2$value.toString().toLowerCase(),second=null===(_b$sort$index2=b[sort.index])||void 0===_b$sort$index2||null===(_b$sort$index2$value=_b$sort$index2.value)||void 0===_b$sort$index2$value?void 0:_b$sort$index2$value.toString().toLowerCase(),result=first.localeCompare(second);return sort.desc?-result:result}))}().slice(page.num*page.size,pageEndIndex()-1).map((function(cols,rowIndex){return Object(jsx_runtime.jsx)("tr",{children:cols.map((function(col,colIndex){return Object(jsx_runtime.jsx)("td",{children:col.content},"row-col"+rowIndex+colIndex)}))},"row-"+rowIndex)}))}),Object(jsx_runtime.jsx)("tfoot",{children:totalPage>1?Object(jsx_runtime.jsxs)(components.Pagination,{children:[Object(jsx_runtime.jsx)(components.Button,{variant:"plain","aria-label":"Previous set of pages",disabled:0===page.num,onClick:function onClick(){page.num>0&&setPage(Object(objectSpread2.a)(Object(objectSpread2.a)({},page),{},{num:page.num-1}))},children:"Previous"}),Object(jsx_runtime.jsx)(components.Button,{"aria-label":"Next set of pages",disabled:page.num===totalPage-1,variant:"plain",onClick:function onClick(){page.num<totalPage-1&&setPage(Object(objectSpread2.a)(Object(objectSpread2.a)({},page),{},{num:page.num+1}))},children:"Next"}),Object(jsx_runtime.jsxs)("div",{children:["( ",page.num*page.size+1," - ",pageEndIndex()<rows.length?pageEndIndex():rows.length," of ",rows.length,")"]})]}):""})]})};try{SortableTable_SortableTable.displayName="SortableTable",SortableTable_SortableTable.__docgenInfo={description:"",displayName:"SortableTable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},sortBy:{defaultValue:null,description:"",name:"sortBy",required:!1,type:{name:"Sort"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table/SortableTable.tsx#SortableTable"]={docgenInfo:SortableTable_SortableTable.__docgenInfo,name:"SortableTable",path:"src/table/SortableTable.tsx#SortableTable"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(1405),__webpack_exports__.default={title:"Data Display/Table",component:SortableTable_SortableTable};var Default=function Template(){return Object(jsx_runtime.jsx)("div",{className:"story-table",children:Object(jsx_runtime.jsx)(SortableTable_SortableTable,{title:"My table",children:{header:[{name:"Id",title:"Id"},{name:"Name",title:"First name and Last name"},{name:"Email",title:"Email Address"},{name:"Phone",title:"Phone Number"},{name:"Eligibility",title:"Eligibility"},{name:Object(jsx_runtime.jsx)(Icon.a,{name:"plus"})}],rows:[[{value:"1",content:Object(jsx_runtime.jsx)("a",{href:"google.com",children:"1"})},{value:"James Dean",content:"James Dean"},{value:"jamesdean@gmail.com",content:Object(jsx_runtime.jsx)("a",{href:"mailto:jamesdean@gmail.com",children:"jamesdean@gmail.com"})},{value:"123456",content:Object(jsx_runtime.jsx)("a",{href:"test:123456",children:"123-456"})},{value:"false",content:"No"},{value:"1",content:Object(jsx_runtime.jsx)(Icon.a,{name:"plus"})}],[{value:"2",content:Object(jsx_runtime.jsx)("a",{href:"google.com",children:"2"})},{value:"Dean Smith",content:"Dean Smith"},{value:"dean@gmail.com",content:Object(jsx_runtime.jsx)("a",{href:"mailto:dean@gmail.com",children:"dean@gmail.com"})},{value:"111456",content:Object(jsx_runtime.jsx)("a",{href:"test:111456",children:"111-456"})},{value:"true",content:"Yes"},{value:"1",content:Object(jsx_runtime.jsx)(Icon.a,{name:"plus"})}],[{value:"3",content:Object(jsx_runtime.jsx)("a",{href:"google.com",children:"3"})},{value:"James Buckner",content:"James Buckner"},{value:"james@gmail.com",content:Object(jsx_runtime.jsx)("a",{href:"mailto:james@gmail.com",children:"james@gmail.com"})},{value:"123777",content:Object(jsx_runtime.jsx)("a",{href:"test:123777",children:"123-777"})},{value:"true",content:"Yes"},{value:"1",content:Object(jsx_runtime.jsx)(Icon.a,{name:"plus"})}],[{value:"4",content:Object(jsx_runtime.jsx)("a",{href:"google.com",children:"4"})},{value:"Robert Muller",content:"Robert Muller"},{value:"muller@gmail.com",content:Object(jsx_runtime.jsx)("a",{href:"mailto:muller@gmail.com",children:"muller@gmail.com"})},{value:"112576",content:Object(jsx_runtime.jsx)("a",{href:"test:112576",children:"112-576"})},{value:"true",content:"Yes"},{value:"1",content:Object(jsx_runtime.jsx)(Icon.a,{name:"plus"})}],[{value:"5",content:Object(jsx_runtime.jsx)("a",{href:"google.com",children:"5"})},{value:"Herman Miller",content:"Herman Miller"},{value:"millern@gmail.com",content:Object(jsx_runtime.jsx)("a",{href:"mailto:millern@gmail.com",children:"millern@gmail.com"})},{value:"116754",content:Object(jsx_runtime.jsx)("a",{href:"test:116754",children:"116-754"})},{value:"false",content:"No"},{value:"1",content:Object(jsx_runtime.jsx)(Icon.a,{name:"plus"})}]]}})})}.bind({});Default.args={};var SortableTable_stories_genratePhone=function genratePhone(){var num=Math.floor(1e5+9e5*Math.random()).toString();return{value:num,content:Object(jsx_runtime.jsx)("a",{href:"tel:"+num,children:num})}},Pageable=function PageTemplate(){var names=["Lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","Ut","at","libero","eu","risus","blandit","semper","Duis","euismod","aliquam","lectus","id","rhoncus","Cras","eget","nisi","quis","mi","feugiat","viverra","Nunc","vehicula","eu","dolor","nec","laoreet","Integer","ut","felis","sit","amet","libero","feugiat","sagittis","In","hac","habitasse","platea","dictumst","Nam","viverra","lectus","pulvinar","feugiat","iaculis","In","non"];return Object(jsx_runtime.jsx)("div",{className:"story-table",children:Object(jsx_runtime.jsx)(SortableTable_SortableTable,{title:"My table",children:{header:[{name:"Id",title:"Id",sort:function sort(a,b){return+a-+b}},{name:"Name",title:"First name and Last name"},{name:"Email",title:"Email Address"},{name:"Phone",title:"Phone Number"}],rows:function rows(){var data=[];return names.forEach((function(name,index){data.push([{value:index.toString(),content:Object(jsx_runtime.jsx)("a",{href:"google.com",children:index.toString()})},{value:name,content:name},{value:name+"@gmail.com",content:Object(jsx_runtime.jsx)("a",{href:"mailto:"+name+"@gmail.com",children:name+"@gmail.com"})},SortableTable_stories_genratePhone()])})),data}()}})})}.bind({});Pageable.args={},Default.parameters=Object(objectSpread2.a)({storySource:{source:'() =>\n    <div className="story-table">\n        <SortableTable title="My table">{{\n            header: [\n                {name: "Id", title: "Id"},\n                {name: "Name", title: "First name and Last name"},\n                {name: "Email", title: "Email Address"},\n                {name: "Phone", title: "Phone Number"},\n                {name: "Eligibility", title: "Eligibility"},\n                {name: <Icon name="plus"/>}\n\n            ], rows: [\n                [\n                    {value: "1", content: <a href="google.com">1</a>},\n                    {value: "James Dean", content: "James Dean"},\n                    {\n                        value: "jamesdean@gmail.com",\n                        content: <a href="mailto:jamesdean@gmail.com">jamesdean@gmail.com</a>\n                    },\n                    {value: "123456", content: <a href="test:123456">123-456</a>},\n                    {value: "false", content: "No"},\n                    {value: "1", content: <Icon name="plus"/>},\n                ],\n                [\n                    {value: "2", content: <a href="google.com">2</a>},\n                    {value: "Dean Smith", content: "Dean Smith"},\n                    {value: "dean@gmail.com", content: <a href="mailto:dean@gmail.com">dean@gmail.com</a>},\n                    {value: "111456", content: <a href="test:111456">111-456</a>},\n                    {value: "true", content: "Yes"},\n                    {value: "1", content: <Icon name="plus"/>},\n                ],\n                [\n                    {value: "3", content: <a href="google.com">3</a>},\n                    {value: "James Buckner", content: "James Buckner"},\n                    {value: "james@gmail.com", content: <a href="mailto:james@gmail.com">james@gmail.com</a>},\n                    {value: "123777", content: <a href="test:123777">123-777</a>},\n                    {value: "true", content: "Yes"},\n                    {value: "1", content: <Icon name="plus"/>},\n                ],\n                [\n                    {value: "4", content: <a href="google.com">4</a>},\n                    {value: "Robert Muller", content: "Robert Muller"},\n                    {value: "muller@gmail.com", content: <a href="mailto:muller@gmail.com">muller@gmail.com</a>},\n                    {value: "112576", content: <a href="test:112576">112-576</a>},\n                    {value: "true", content: "Yes"},\n                    {value: "1", content: <Icon name="plus"/>},\n                ],\n                [\n                    {value: "5", content: <a href="google.com">5</a>},\n                    {value: "Herman Miller", content: "Herman Miller"},\n                    {value: "millern@gmail.com", content: <a href="mailto:millern@gmail.com">millern@gmail.com</a>},\n                    {value: "116754", content: <a href="test:116754">116-754</a>},\n                    {value: "false", content: "No"},\n                    {value: "1", content: <Icon name="plus"/>},\n                ],\n            ]\n        }}</SortableTable>\n    </div>'}},Default.parameters),Pageable.parameters=Object(objectSpread2.a)({storySource:{source:'() => {\n    const names = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Ut", "at", "libero", "eu", "risus", "blandit", "semper", "Duis", "euismod", "aliquam", "lectus", "id", "rhoncus", "Cras", "eget", "nisi", "quis", "mi", "feugiat", "viverra", "Nunc", "vehicula", "eu", "dolor", "nec", "laoreet", "Integer", "ut", "felis", "sit", "amet", "libero", "feugiat", "sagittis", "In", "hac", "habitasse", "platea", "dictumst", "Nam", "viverra", "lectus", "pulvinar", "feugiat", "iaculis", "In", "non"];\n    const rows = (): Col[][] => {\n        const data: Col[][] = [];\n        names.forEach((name, index) => {\n            data.push([\n                {value: index.toString(), content: <a href="google.com">{index.toString()}</a>},\n                {value: name, content: name},\n                {\n                    value: name + "@gmail.com",\n                    content: <a href={"mailto:" + name + "@gmail.com"}>{name + "@gmail.com"}</a>\n                },\n                genratePhone()\n            ]);\n        });\n        return data;\n    };\n    return (<div className="story-table">\n        <SortableTable title={"My table"}>{{\n            header: [\n                {name: "Id", title: "Id", sort: (a, b) => +a - +b},\n                {name: "Name", title: "First name and Last name"},\n                {name: "Email", title: "Email Address"},\n                {name: "Phone", title: "Phone Number"}\n\n            ], rows: rows()\n        }\n        }</SortableTable>\n    </div>)\n}'}},Pageable.parameters)},175:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return drawings}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),drawings={alert:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"12",cy:"12",r:"10"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),help:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"12",cy:"12",r:"10"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),info:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"12",cy:"12",r:"10"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),close:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"12",cy:"12",r:"10"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),search:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),filter:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),reset:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"8",y1:"2",x2:"18",y2:"23"})]}),"sort-asc":Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11 5h4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11 9h7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11 13h10"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M3 17l3 3 3-3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M6 18V4"})]}),"sort-desc":Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11 8h10"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11 12h7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11 16h4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M6 18V4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline",{points:"10 5 6 2 2 5"})]}),user:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"12",cy:"7",r:"4"})]}),plus:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"12",cy:"12",r:"10"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),minus:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"12",cy:"12",r:"10"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),"chevron-left":Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline",{points:"15 18 9 12 15 6"})}),"chevron-right":Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline",{points:"9 18 15 12 9 6"})}),"log-in":Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline",{points:"10 17 15 12 10 7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]}),"log-out":Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline",{points:"16 17 21 12 16 7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),home:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),more:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"12",cy:"12",r:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"12",cy:"5",r:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"12",cy:"19",r:"1"})]}),trash:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline",{points:"3 6 5 6 21 6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),save:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline",{points:"7 3 7 8 15 8"})]}),settings:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"12",cy:"12",r:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}},553:function(module,exports,__webpack_require__){},576:function(module,exports,__webpack_require__){__webpack_require__(577),__webpack_require__(893),__webpack_require__(894),__webpack_require__(1056),__webpack_require__(1274),__webpack_require__(1306),__webpack_require__(1314),__webpack_require__(1326),__webpack_require__(1328),__webpack_require__(1333),__webpack_require__(1335),__webpack_require__(1338),__webpack_require__(1341),module.exports=__webpack_require__(1343)},67:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Icon}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Drawings__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(175)),Icon=(__webpack_require__(1349),function Icon(_ref){var name=_ref.name,onClick=_ref.onClick,iconString=_ref.iconString;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"studio-icon",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",onClick:onClick,children:name?_Drawings__WEBPACK_IMPORTED_MODULE_2__.a[name]:iconString?Object(_Drawings__WEBPACK_IMPORTED_MODULE_2__.a)[iconString]:""})})});try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{onClick:{defaultValue:null,description:"icon click handler",name:"onClick",required:!1,type:{name:"((e: MouseEvent<SVGSVGElement, MouseEvent>) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:'"alert" | "help" | "info" | "close" | "search" | "filter" | "reset" | "sort-asc" | "sort-desc" | "user" | "plus" | "minus" | "chevron-left" | "chevron-right" | "log-in" | "log-out" | ... 5 more ...'}},iconString:{defaultValue:null,description:"",name:"iconString",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},687:function(module,exports){},894:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(438)}},[[576,1,2]]]);
//# sourceMappingURL=main.5bdba76a37b76dd2975b.bundle.js.map