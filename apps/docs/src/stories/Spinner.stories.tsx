import { Meta, StoryObj } from "@storybook/react";
import { Spinner, SpinnerProps } from "@ace-ex/react";

export default {
  title: "Components/Spinner",
  component: Spinner,
  id: "spinner",
  argTypes: {
    size: {
      description: "Tamanho do Spinner.",
      control: {
        options: ["sm", "md", "lg"],
        type: "inline-radio",
      },
      table: {
        type: {
          summary: '"sm" | "md" | "lg"',
        },
      },
    },
    text: {
      description: "O Texto do Spinner.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    textFirst: {
      description: "O Texto vem primeiro?",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    size: "md",
  },
} as Meta<SpinnerProps>;

export const Primary: StoryObj<SpinnerProps> = {};

export const WithText: StoryObj<SpinnerProps> = {
  args: {
    text: "Loading",
    textFirst: true,
  },
};
