import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps } from "@ace-ex/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  id: "box",
  parameters: {
    docs: {
      description: {
        component:
          "A Box é o componente mais básico que temos. A ideia é ser a representação de uma “caixa” na UI. Ele pode ser usado para criar um contêiner para outros componentes. Você também pode fornecer um suporte de `tag` onde você altera a tag exibida para semântica na web.",
      },
    },
  },
  argTypes: {
    as: {
      description:
        "Trocar do elemento padrão(div) para outro tipo de Elemento.",
      table: { type: { summary: "ElementType<any>" } },
      control: {
        type: "text",
      },
    },
    css: {
      description: "Estilizações css inline podem ser colocadas aqui!",
      table: { type: { summary: "Object" } },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: "Box",
    css: { color: "$primary" },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};

export const WithStyles: StoryObj<BoxProps> = {
  args: {
    css: { bc: "$blue500", p: "$4", br: "$md", color: "$white" },
  },
  parameters: {
    docs: {
      description: {
        story: "O componente Box com estilizações css inline",
      },
    },
  },
};

export const WithOtherElement: StoryObj<BoxProps> = {
  args: {
    as: "section",
    children: "Section",
  },
  parameters: {
    docs: {
      description: {
        story: "O componente Box utilizando outro tipo de elemento.",
      },
    },
  },
};
