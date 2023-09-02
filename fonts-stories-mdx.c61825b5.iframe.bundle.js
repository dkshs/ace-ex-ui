"use strict";(self.webpackChunk_ace_ex_docs=self.webpackChunk_ace_ex_docs||[]).push([[4411],{"../../node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GA:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Typeset,VZ:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ColorPalette,Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,c6:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ColorItem,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/pages/Features/fonts.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/index.js"),_ace_ex_tokens__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/tokens/dist/index.mjs"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,{title:"Features/Theme/Fonts",mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h1",{id:"fonts"},"Fonts"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Essas são as fontes presentes no ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@ace-ex/tokens",target:"_blank",rel:"nofollow noopener noreferrer"},"@ace-ex/tokens"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(_components__WEBPACK_IMPORTED_MODULE_8__.yB,{tokens:_ace_ex_tokens__WEBPACK_IMPORTED_MODULE_9__.Rq,mdxType:"TokensGrid"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Features/Theme/Fonts",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(MDXContent,null))}});const __WEBPACK_DEFAULT_EXPORT__=componentMeta;var __namedExportsOrder=["__page"]},"./src/components/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cM:()=>BorderRadius,MB:()=>Preview,Ki:()=>Spacing,m4:()=>Swatch,yB:()=>TokensGrid,ZT:()=>Typography});var dist=__webpack_require__("../../packages/react/dist/index.mjs"),tokens_dist=__webpack_require__("../../packages/tokens/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Swatch=function Swatch(_ref){var colorName=_ref.colorName;return(0,jsx_runtime.jsxs)(dist.xu,{css:{display:"inline-block",mr:"$3",mb:"$3"},children:[(0,jsx_runtime.jsx)(dist.xu,{css:{size:"$24",br:"$md",bc:tokens_dist.O9[colorName],border:"1px solid $gray600"}}),(0,jsx_runtime.jsx)(dist.xu,{css:{"& *":{color:"$gray100"},display:"flex",justifyContent:"center",py:"$2"},children:(0,jsx_runtime.jsx)(dist.xv,{children:colorName})})]})};Swatch.displayName="Swatch";try{Swatch.displayName="Swatch",Swatch.__docgenInfo={description:"",displayName:"Swatch",props:{colorName:{defaultValue:null,description:"",name:"colorName",required:!0,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"zinc900"'},{value:'"zinc800"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"gray50"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Swatch.tsx#Swatch"]={docgenInfo:Swatch.__docgenInfo,name:"Swatch",path:"src/components/Swatch.tsx#Swatch"})}catch(__react_docgen_typescript_loader_error){}var Spacing=function Spacing(_ref){var spaceName=_ref.spaceName;return(0,jsx_runtime.jsxs)(dist.xu,{css:{display:"flex",alignItems:"center",mb:"$4","& *":{color:"$gray100"}},children:[(0,jsx_runtime.jsx)(dist.xu,{css:{size:tokens_dist.Dh[spaceName],bc:"$blue500",mr:"$4"}}),(0,jsx_runtime.jsxs)(dist.xu,{css:{display:"flex",alignItems:"center",gap:"$4"},children:[(0,jsx_runtime.jsx)(dist.xv,{children:spaceName}),(0,jsx_runtime.jsx)(dist.xv,{size:"sm",css:{opacity:.8},children:tokens_dist.Dh[spaceName]})]})]})};Spacing.displayName="Spacing";try{Spacing.displayName="Spacing",Spacing.__docgenInfo={description:"",displayName:"Spacing",props:{spaceName:{defaultValue:null,description:"",name:"spaceName",required:!0,type:{name:"enum",value:[{value:'"px"'},{value:"16"},{value:'"0-5"'},{value:"1"},{value:'"1-5"'},{value:"2"},{value:'"2-5"'},{value:"3"},{value:'"3-5"'},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"14"},{value:"20"},{value:"24"},{value:"28"},{value:"32"},{value:"36"},{value:"40"},{value:"64"},{value:"80"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spacing.tsx#Spacing"]={docgenInfo:Spacing.__docgenInfo,name:"Spacing",path:"src/components/Spacing.tsx#Spacing"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("../../node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Preview=function Preview(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(esm.Xz,Object.assign({},props,{children:(0,jsx_runtime.jsx)(dist.xu,{children})}))};Preview.displayName="Preview",Preview.__docgenInfo={description:"",methods:[],displayName:"Preview"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Preview.js"]={name:"Preview",docgenInfo:Preview.__docgenInfo,path:"src/components/Preview.js"});__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.ends-with.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TokensGrid(_ref){var tokens=_ref.tokens,_ref$hasRemValue=_ref.hasRemValue,hasRemValue=void 0!==_ref$hasRemValue&&_ref$hasRemValue,_ref$hasMediaQuery=_ref.hasMediaQuery,hasMediaQuery=void 0!==_ref$hasMediaQuery&&_ref$hasMediaQuery;return(0,jsx_runtime.jsxs)(dist.xu,{as:"table",css:{width:"100%","& *":{color:"$gray100"},borderCollapse:"collapse"},className:"tokens-grid",children:[(0,jsx_runtime.jsx)(dist.xu,{as:"thead",css:{"& th":{p:"$3 $4",textAlign:"left"}},children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Name"}),(0,jsx_runtime.jsx)("th",{children:"Value"}),hasRemValue&&(0,jsx_runtime.jsx)("th",{children:"Pixels"})]})}),(0,jsx_runtime.jsx)(dist.xu,{as:"tbody",css:{"& td":{p:"$3 $4"},"& td:first-child":{btlr:"$md",bblr:"$md"},"& td:last-child":{btrr:"$md",bbrr:"$md"},"& tr:nth-child(odd) td":{bc:"$gray800"}},children:Object.entries(tokens).map((function(_ref2){var _ref3=_slicedToArray(_ref2,2),key=_ref3[0],value=_ref3[1],valueRem=value.endsWith("rem")?16*Number(value.replace("rem","")):value.replace("px","");return(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:hasMediaQuery?"@"+key:"$"+key}),(0,jsx_runtime.jsx)("td",{children:value}),hasRemValue&&(0,jsx_runtime.jsxs)("td",{children:[valueRem,"px"]})]},key)}))})]})}TokensGrid.displayName="TokensGrid";try{TokensGrid.displayName="TokensGrid",TokensGrid.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}},hasMediaQuery:{defaultValue:{value:"false"},description:"",name:"hasMediaQuery",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:TokensGrid.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch(__react_docgen_typescript_loader_error){}var BorderRadius=function BorderRadius(_ref){var borderRadius=_ref.borderRadius;return(0,jsx_runtime.jsxs)(dist.xu,{css:{display:"flex",alignItems:"center",mb:"$4","& *":{color:"$gray100"}},children:[(0,jsx_runtime.jsx)(dist.xu,{css:{size:"$8",br:tokens_dist.pD[borderRadius],bc:"$blue500",mr:"$4"}}),(0,jsx_runtime.jsxs)(dist.xu,{css:{display:"flex",alignItems:"center",gap:"$4"},children:[(0,jsx_runtime.jsx)(dist.xv,{children:borderRadius}),(0,jsx_runtime.jsx)(dist.xv,{size:"sm",css:{opacity:.8},children:tokens_dist.pD[borderRadius]})]})]})};BorderRadius.displayName="BorderRadius";try{BorderRadius.displayName="BorderRadius",BorderRadius.__docgenInfo={description:"",displayName:"BorderRadius",props:{borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!0,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"none"'},{value:'"px"'},{value:'"full"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BorderRadius.tsx#BorderRadius"]={docgenInfo:BorderRadius.__docgenInfo,name:"BorderRadius",path:"src/components/BorderRadius.tsx#BorderRadius"})}catch(__react_docgen_typescript_loader_error){}function Typography_slicedToArray(arr,i){return function Typography_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Typography_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function Typography_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Typography_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Typography_arrayLikeToArray(o,minLen)}(arr,i)||function Typography_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Typography_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var fontSizes=[];Object.entries(tokens_dist.CH).map((function(_ref){var valueInPixels,_ref2=Typography_slicedToArray(_ref,2),value=(_ref2[0],_ref2[1]);return value.endsWith("rem")&&(valueInPixels=16*Number(value.replace("rem",""))),fontSizes.push(valueInPixels)}));var SampleText="Lorem ipsum dolor",Typography=function Typography(_ref3){var fontName=_ref3.fontName;return(0,jsx_runtime.jsxs)(dist.xu,{css:{"& *":{color:"$gray100"}},children:[(0,jsx_runtime.jsxs)(dist.xv,{css:{display:"inline-flex"},children:[(0,jsx_runtime.jsx)(dist.xv,{css:{fontWeight:"$bold"},children:"Weight"}),": 400(regular)"]}),(0,jsx_runtime.jsx)(esm.GA,{sampleText:SampleText,fontSizes,fontWeight:400,fontFamily:tokens_dist.Rq[fontName]}),(0,jsx_runtime.jsxs)(dist.xv,{css:{display:"inline-flex"},children:[(0,jsx_runtime.jsx)(dist.xv,{css:{fontWeight:"$bold"},children:"Weight"}),": 500(medium)"]}),(0,jsx_runtime.jsx)(esm.GA,{sampleText:SampleText,fontSizes,fontWeight:500,fontFamily:tokens_dist.Rq[fontName]}),(0,jsx_runtime.jsxs)(dist.xv,{css:{display:"inline-flex"},children:[(0,jsx_runtime.jsx)(dist.xv,{css:{fontWeight:"$bold"},children:"Weight"}),": 600(semi-bold)"]}),(0,jsx_runtime.jsx)(esm.GA,{sampleText:SampleText,fontSizes,fontWeight:600,fontFamily:tokens_dist.Rq[fontName]}),(0,jsx_runtime.jsxs)(dist.xv,{css:{display:"inline-flex"},children:[(0,jsx_runtime.jsx)(dist.xv,{css:{fontWeight:"$bold"},children:"Weight"}),": 700(bold)"]}),(0,jsx_runtime.jsx)(esm.GA,{sampleText:SampleText,fontSizes,fontWeight:700,fontFamily:tokens_dist.Rq[fontName]})]})};Typography.displayName="Typography";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{fontName:{defaultValue:null,description:"",name:"fontName",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"inter"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}}}]);