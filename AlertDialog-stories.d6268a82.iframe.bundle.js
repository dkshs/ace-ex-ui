"use strict";(self.webpackChunk_ace_ex_docs=self.webpackChunk_ace_ex_docs||[]).push([[1114],{"./src/stories/AlertDialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Functional:()=>Functional,Primary:()=>Primary,WithTriggerCustom:()=>WithTriggerCustom,WithTriggerCustomDisabled:()=>WithTriggerCustomDisabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js");var react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/react/index.js"),_ace_ex_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../packages/react/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/AlertDialog",component:_ace_ex_react__WEBPACK_IMPORTED_MODULE_14__.aR.Root,id:"alert-dialog",parameters:{docs:{description:{component:"Um componente de alerta de Diálogo."}}},argTypes:{dialogSize:{description:"Largura do AlertDialog.",control:{type:"inline-radio",options:["sm","md","lg","xl"]},table:{type:{summary:'"sm" | "md" | "lg" | "xl"'}}},triggerButton:{description:"Quer colocar um botão personalizado?",table:{type:{summary:"ReactNode"}}},onOpenChange:{description:"Handler do AlertDialog.",action:"change"},open:{description:"O AlertDialog está aberto?",table:{type:{summary:"boolean"}}},triggerContent:{description:"O conteúdo do botão do AlertDialog.",table:{type:{summary:"ReactNode"}}},dialogTitle:{description:"Titulo do AlertDialog.",table:{type:{summary:"ReactNode"}}},dialogDescription:{description:"Descrição do AlertDialog.",table:{type:{summary:"ReactNode"}}},buttonAction:{description:"Botão que irá fazer uma ação.",control:{type:null},table:{type:{summary:"ReactNode"}}},buttonCancel:{description:"Botão que irá cancelar a ação.",control:{type:null},table:{type:{summary:"ReactNode"}}}},args:{open:!1,dialogSize:"md",triggerContent:"Deletar conta",dialogTitle:"Você tem certeza absoluta?",dialogDescription:"Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.",buttonAction:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ace_ex_react__WEBPACK_IMPORTED_MODULE_14__.zx,{variant:"danger",size:"lg",children:"Sim, excluir conta"}),buttonCancel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ace_ex_react__WEBPACK_IMPORTED_MODULE_14__.zx,{variant:"tertiary",size:"lg",children:"Cancelar"})},decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ace_ex_react__WEBPACK_IMPORTED_MODULE_14__.xu,{css:{maxWidth:"150px"},children:Story()})}]};var Primary={},WithTriggerCustom={args:{triggerButton:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ace_ex_react__WEBPACK_IMPORTED_MODULE_14__.zx,{variant:"tertiary",size:"md",children:"Deletar conta"})}},Functional=function Functional(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(!1),2),isOpen=_useState2[0],setIsOpen=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ace_ex_react__WEBPACK_IMPORTED_MODULE_14__.aR.Root,{dialogTitle:"Você tem certeza absoluta?",dialogDescription:"Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.",triggerContent:"Deletar conta",open:isOpen,onOpenChange:setIsOpen,dialogSize:"xl",buttonAction:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ace_ex_react__WEBPACK_IMPORTED_MODULE_14__.zx,{variant:"danger",size:"lg",children:"Sim, excluir conta"}),buttonCancel:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ace_ex_react__WEBPACK_IMPORTED_MODULE_14__.zx,{variant:"tertiary",size:"lg",children:"Cancelar"})})};Functional.displayName="Functional";var WithTriggerCustomDisabled={args:{triggerButton:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ace_ex_react__WEBPACK_IMPORTED_MODULE_14__.zx,{disabled:!0,variant:"tertiary",size:"md",children:"Disabled"})}};Functional.parameters=Object.assign({storySource:{source:'() => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <AlertDialog.Root\n      dialogTitle="Você tem certeza absoluta?"\n      dialogDescription="Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores."\n      triggerContent="Deletar conta"\n      open={isOpen}\n      onOpenChange={setIsOpen}\n      dialogSize="xl"\n      buttonAction={\n        <Button variant="danger" size="lg">\n          Sim, excluir conta\n        </Button>\n      }\n      buttonCancel={\n        <Button variant="tertiary" size="lg">\n          Cancelar\n        </Button>\n      }\n    />\n  );\n}'}},Functional.parameters);var __namedExportsOrder=["Primary","WithTriggerCustom","Functional","WithTriggerCustomDisabled"]}}]);