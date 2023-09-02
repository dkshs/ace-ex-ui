"use strict";(self.webpackChunk_ace_ex_docs=self.webpackChunk_ace_ex_docs||[]).push([[2672],{"../../node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GA:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Typeset,VZ:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ColorPalette,Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,c6:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ColorItem,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/pages/Packages/aceTemplate.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,{title:"Packages/ace-template",mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h1",{id:"ace-exace-template"},"@ace-ex/ace-template"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Um modelo de ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/create-next-app",target:"_blank",rel:"nofollow noopener noreferrer"},"create-next-app template")," para apps TypeScript Next.js com o front-end do AceEx UI."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@ace-ex/react",target:"_blank",rel:"nofollow noopener noreferrer"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@ace-ex/react",alt:"Version"}))," ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"p",href:"https://github.com/dkshs/ace-ex-ui/blob/main/packages/ace-template/LICENSE",target:"_blank",rel:"nofollow noopener noreferrer"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/licence-MIT-blue",alt:"License"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h2",{id:"pré-requisitos"},"Pré-requisitos"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("li",{parentName:"ul"},"Você deve ter o ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("strong",{parentName:"li"},"Node.js")," instalado em uma versão igual ou superior à ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("strong",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"strong"},"v14.17.0")),".")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h2",{id:"configurando-um-novo-projeto-aceex-nextjs"},"Configurando um novo projeto AceEx Next.js"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("li",{parentName:"ol"},"Abra seu terminal."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("li",{parentName:"ol"},"Navegue até o diretório no qual você gostaria de colocar seu projeto."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("li",{parentName:"ol"},"Rode:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app@latest -e https://github.com/dkshs/ace-ex-ui/tree/main/packages/ace-template/template my-app\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Ou com Yarn:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create next-app -e https://github.com/dkshs/ace-ex-ui/tree/main/packages/ace-template/template my-app\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Ou com pnpm:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create next-app -e https://github.com/dkshs/ace-ex-ui/tree/main/packages/ace-template/template my-app\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"O ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"p"},"my-app")," é o nome do seu projeto."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Isso criará a pasta ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"p"},"my-app")," e inicializará um novo projeto dentro dela. O projeto será baseado em ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/",target:"_blank",rel:"nofollow noopener noreferrer"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"a"},"Next.js"))," e usará a biblioteca de componentes ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"p",href:"/docs/introduction-welcome--page"},"AceEx UI"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h2",{id:"fluxo-de-trabalho-de-desenvolvimento"},"Fluxo de trabalho de desenvolvimento"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h3",{id:"ativando-as-ferramentas"},"Ativando as ferramentas"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Execute ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"p"},"npm run dev")," para iniciar a compilação de desenvolvimento. O aplicativo deve abrir automaticamente no seu navegador. As alterações feitas em ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"p"},"src/pages/index.tsx")," devem ficar visíveis na página quase imediatamente."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Para criar um build de produção do seu app, execute ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"p"},"npm run build"),". ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"p"},"Next.js"),"criará uma compilação de produção otimizada de seu aplicativo dentro da pasta ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"p"},".next/")," de seu projeto. Ele também fornecerá detalhes adicionais sobre o que fazer com eles."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h3",{id:"linting"},"Linting"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Um linter é uma ferramenta que verifica seu código para"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("li",{parentName:"ul"},"problemas que farão com que ele quebre quando executado, ou"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("li",{parentName:"ul"},"estilo de código que viola um determinado conjunto de regras que o projeto está seguindo.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("p",null,"Seu projeto será configurado para usar uma versão do popular linter ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"p",href:"https://eslint.org",target:"_blank",rel:"nofollow noopener noreferrer"},"ESLint")," para TypeScript com ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"p",href:"https://prettier.io/",target:"_blank",rel:"nofollow noopener noreferrer"},"Prettier")," fornecido pela AceEx. Você pode limpar seu código e aplicar correções automáticas executando ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"p"},"npm run lint:fix")," ou ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"p"},"npm run lint")," caso queira só fazer uma verificação no código."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("h2",{id:"recursos-úteis"},"Recursos úteis"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("li",{parentName:"ul"},"A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"li",href:"https://nextjs.org/docs#setup",target:"_blank",rel:"nofollow noopener noreferrer"},"documentação")," para criar o ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("inlineCode",{parentName:"li"},"create-next-app")," contêm muitas soluções para problemas comuns ao escrever um aplicativo React."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)("a",{parentName:"li",href:"/docs/introduction-welcome--page"},"Documentação")," do AceEx UI.")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Packages/ace-template",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(MDXContent,null))}});const __WEBPACK_DEFAULT_EXPORT__=componentMeta;var __namedExportsOrder=["__page"]}}]);