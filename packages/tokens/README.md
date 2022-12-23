<div align="center">

# @ace-ex/tokens

Visuais primitivos, como tipografia, cor e espaçamento, que são compartilhados entre plataformas, baseado na [System UI Theme Specification](https://github.com/system-ui/theme-specification) do Brent Jackson.

[![Version](https://img.shields.io/npm/v/@ace-ex/tokens)](https://www.npmjs.com/package/@ace-ex/tokens) [![License](https://img.shields.io/badge/licence-MIT-blue)](https://github.com/ShadowsS01/ace-ex-ui/blob/main/packages/tokens/LICENSE)

</div>

## Instalação

Dependendo de sua preferência, execute uma das seguintes opções em seu terminal:

```sh
# Com Yarn
yarn add @ace-ex/tokens

# Com pnpm
pnpm i @ace-ex/tokens

# Com npm
npm install @ace-ex/tokens
```

## Usando

O pacote atualmente exporta: colors, fontSizes, fontWeights, fonts, lineHeights, media, radii, shadows e space que podem ser utilizados para criar temas.

Aqui tem um exemplo utilizando [Stitches](https://stitches.dev/):

```jsx
import { colors, space, fontSizes, media } from "@ace-ex/tokens";
import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      ...colors, // Cores do `@ace-ex/tokens`

      // Outras cores
      purple500: "hsl(252,78%,60%)",
      // ...
    },
    // Se você não quiser colocar outros valores
    space,
    // ...
  },

  // Media: Breakpoints, etc...
  media: {
    ...media,

    // Outros breakpoints...
  },
});
```

Para mais detalhes sobre cada token acessar a [documentação](https://ace-ex-ui.vercel.app/?path=/docs/features-theme-tema--page) de tema.
