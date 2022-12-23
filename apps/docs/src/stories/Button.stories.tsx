import type { Meta, StoryObj } from "@storybook/react";

import { Box, Button, Icon, type ButtonProps } from "@ace-ex/react";

export default {
  title: "Components/Button",
  component: Button,
  id: "button",
  parameters: {
    docs: {
      description: {
        component:
          "Button é o componente que você usa para obter toques e cliques do usuário.",
      },
    },
  },
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "danger",
        "dangerOutlined",
        "confirm",
        "confirmOutlined",
      ],
      control: {
        type: "select",
      },
      description: "Variações de botão.",
      table: {
        type: {
          summary:
            '"primary" | "secondary" | "tertiary" | "danger" | "dangerOutlined" | "confirm" | "confirmOutlined"',
        },
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
      description: "Altura dos botões.",
      table: { type: { summary: '"sm" | "md" | "lg"' } },
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
      type: "boolean",
      description: "Utilizar a largura máxima.",
      table: { type: { summary: "boolean" } },
    },
    rounded: {
      options: ["none", "xs", "sm", "md", "lg", "full"],
      control: {
        type: "inline-radio",
      },
      description: "Border radius do botão.",
      table: {
        type: {
          summary: '"none" | "xs" | "sm" | "md" | "lg" | "full"',
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      type: "boolean",
      description: "O botão está desabilitado?",
      table: { type: { summary: "boolean" } },
    },
    onClick: {
      action: "click",
    },
    as: {
      description:
        "Trocar do elemento padrão(button) para outro tipo de Elemento",
      control: {
        type: "text",
      },
      table: { type: { summary: "ElementType<any>" } },
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
    children: "Button",
    variant: "primary",
    rounded: "md",
    size: "md",
    fullWidth: false,
    disabled: false,
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
  },
};

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: "danger",
  },
};
export const DangerOutlined: StoryObj<ButtonProps> = {
  args: {
    variant: "dangerOutlined",
  },
};
export const Confirm: StoryObj<ButtonProps> = {
  args: {
    variant: "confirm",
  },
};
export const ConfirmOutlined: StoryObj<ButtonProps> = {
  args: {
    variant: "confirmOutlined",
  },
};

export const AllVariants: StoryObj<ButtonProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    fullWidth: false,
  },
  decorators: [
    (Story, { args }) => {
      return (
        <Box css={{ display: "flex", gap: "$4", p: "$4", flexWrap: "wrap" }}>
          <Button
            onClick={args.onClick}
            disabled={args.disabled}
            size={args.size}
            variant="primary"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          >
            Primary
          </Button>
          <Button
            onClick={args.onClick}
            disabled={args.disabled}
            size={args.size}
            variant="secondary"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          >
            Secondary
          </Button>
          <Button
            onClick={args.onClick}
            disabled={args.disabled}
            size={args.size}
            variant="tertiary"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          >
            Tertiary
          </Button>
          <Button
            onClick={args.onClick}
            disabled={args.disabled}
            size={args.size}
            variant="danger"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          >
            Danger
          </Button>
          <Button
            onClick={args.onClick}
            disabled={args.disabled}
            size={args.size}
            variant="dangerOutlined"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          >
            Danger Outlined
          </Button>
          <Button
            onClick={args.onClick}
            disabled={args.disabled}
            size={args.size}
            variant="confirm"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          >
            Confirm
          </Button>
          <Button
            onClick={args.onClick}
            disabled={args.disabled}
            size={args.size}
            variant="confirmOutlined"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          >
            Confirm Outlined
          </Button>
        </Box>
      );
    },
  ],
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};
export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: "md",
  },
};
export const Large: StoryObj<ButtonProps> = {
  args: {
    size: "lg",
  },
};

export const FullWidth: StoryObj<ButtonProps> = {
  args: {
    fullWidth: true,
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: [
      "Próximo passo",
      <Icon iconName="ArrowRight" weight="bold" key={1} />,
    ],
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
};
