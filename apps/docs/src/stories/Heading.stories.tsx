import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@ace-ex/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  id: "heading",
  parameters: {
    docs: {
      description: {
        component: "Um componente para títulos.",
      },
    },
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
      control: {
        type: "select",
      },
      description: "Tamanhos disponíveis de texto.",
      table: {
        type: {
          summary:
            '"sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"',
        },
      },
    },
    as: {
      description:
        "Trocar do elemento padrão (h2) para outro tipo de Elemento.",
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
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 heading",
    as: "h1",
  },
};
