import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "@ace-ex/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  id: "checkbox",
  argTypes: {
    size: {
      control: {
        options: ["sm", "md", "lg"],
        type: "inline-radio",
      },
      description: "Altura do Checkbox.",
      table: {
        type: {
          summary: '"sm" | "md" | "lg"',
        },
      },
    },
    label: {
      description: "Label do elemento.",
      control: { type: "text" },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    size: "md",
  },
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};

export const WithLabel: StoryObj<CheckboxProps> = {
  args: {
    label: "Accept terms of use",
  },
};

export const Small: StoryObj<CheckboxProps> = {
  args: {
    size: "sm",
  },
};
export const Medium: StoryObj<CheckboxProps> = {
  args: {
    size: "md",
  },
};
export const Large: StoryObj<CheckboxProps> = {
  args: {
    size: "lg",
  },
};

export const Checked: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
  },
};
