<div align="center">

# @ace-ex/ts-config

Configurações do TypeScript.

[![Version](https://img.shields.io/npm/v/@ace-ex/ts-config)](https://www.npmjs.com/package/@ace-ex/ts-config) [![License](https://img.shields.io/badge/licence-MIT-blue)](https://github.com/ShadowsS01/ace-ex-ui/blob/main/packages/ts-config/LICENSE)

</div>

## Instalação

Dependendo de sua preferência, execute uma das seguintes opções em seu terminal:

```sh
# Com Yarn
yarn add -D @ace-ex/ts-config

# com pnpm
pnpm i -D @ace-ex/ts-config

# Com npm
npm i -D @ace-ex/ts-config
```

## Usando

Para utilizar você precisa extender o `@ace-ex/ts-config` no seu `tsconfig.json`. Temos três opções de tsconfig:

**[base](https://github.com/ShadowsS01/ace-ex-ui/blob/main/packages/ts-config/base.json):**

```json
{
  "extends": "@ace-ex/ts-config/base.json"
}
```

**[node16](https://github.com/ShadowsS01/ace-ex-ui/blob/main/packages/ts-config/node16.json):**

```json
{
  "extends": "@ace-ex/ts-config/node16.json"
}
```

**[react](https://github.com/ShadowsS01/ace-ex-ui/blob/main/packages/ts-config/react.json):**

```json
{
  "extends": "@ace-ex/ts-config/react.json"
}
```
