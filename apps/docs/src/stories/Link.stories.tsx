import type { Meta, StoryObj } from "@storybook/react";
import { Link, LinkProps } from "@ace-ex/react";

export default {
  title: "Components/Link",
  component: Link,
  id: "link",
  parameters: {
    docs: {
      description: {
        component: "Um componente para links.",
      },
    },
  },
  argTypes: {
    variant: {
      options: [
        "blue",
        "subtle",
        "contrast",
        "blueShadow",
        "subtleShadow",
        "contrastShadow",
      ],
      control: {
        type: "select",
      },
      description: "Variações do link.",
      table: {
        type: {
          summary:
            '"blue" | "subtle" | "contrast" | "blueShadow" | "subtleShadow" | "contrastShadow"',
        },
      },
    },
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
      description: "Tamanhos disponíveis.",
      table: {
        type: {
          summary:
            '"xxs"| "xs" | sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"',
        },
      },
    },
    children: {
      table: { type: { summary: "ReactNode" } },
    },
    as: {
      table: {
        disable: true,
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
    target: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: "Link to",
    variant: "blue",
    size: "md",
    href: "https://github.com/dkshs/",
    target: "_blank",
  },
} as Meta<LinkProps>;

export const Primary: StoryObj<LinkProps> = {};

export const Subtle: StoryObj<LinkProps> = {
  args: {
    variant: "subtle",
  },
};

export const Contrast: StoryObj<LinkProps> = {
  args: {
    variant: "contrast",
  },
};

export const BlueShadow: StoryObj<LinkProps> = {
  args: {
    variant: "blueShadow",
  },
};

export const SubtleShadow: StoryObj<LinkProps> = {
  args: {
    variant: "subtleShadow",
  },
};

export const ContrastShadow: StoryObj<LinkProps> = {
  args: {
    variant: "contrastShadow",
  },
};
