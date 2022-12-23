import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@ace-ex/react";

export default {
  title: "Typography/Text",
  component: Text,
  id: "text",
  parameters: {
    docs: {
      description: {
        component: "Um componente para textos.",
      },
    },
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "select",
      },
      description: "Tamanhos disponíveis de texto.",
      table: {
        type: {
          summary:
            '"xxs"| "xs" | sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"',
        },
      },
    },
    as: {
      description: "Trocar do elemento padrão (p) para outro tipo de Elemento.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "ElementType<any>",
        },
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: "Lorem ipsum dolor",
    size: "md",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
