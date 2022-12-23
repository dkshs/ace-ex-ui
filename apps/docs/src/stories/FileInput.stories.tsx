import type { Meta, StoryObj } from "@storybook/react";
import { FileInput, FileInputProps, Box, Icon } from "@ace-ex/react";

export default {
  title: "Form/File Input",
  component: FileInput,
  id: "file-input",
  argTypes: {
    content: {
      description: "Conteúdo que irá aparecer",
    },
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
      description: "Variações de Input.",
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
      description: "Altura do Input.",
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
      description: "Border radius do input.",
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
      description: "O input está desabilitado?",
      table: { type: { summary: "boolean" } },
    },
    onChange: {
      action: "change",
    },
    css: {
      table: { disable: true },
    },
  },
  args: {
    content: "Escolha um arquivo",
    variant: "primary",
    rounded: "md",
    size: "md",
    fullWidth: false,
    disabled: false,
  },
} as Meta<FileInputProps>;

export const Primary: StoryObj<FileInputProps> = {};

export const Secondary: StoryObj<FileInputProps> = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: StoryObj<FileInputProps> = {
  args: {
    variant: "tertiary",
  },
};

export const Danger: StoryObj<FileInputProps> = {
  args: {
    variant: "danger",
  },
};
export const DangerOutlined: StoryObj<FileInputProps> = {
  args: {
    variant: "dangerOutlined",
  },
};
export const Confirm: StoryObj<FileInputProps> = {
  args: {
    variant: "confirm",
  },
};
export const ConfirmOutlined: StoryObj<FileInputProps> = {
  args: {
    variant: "confirmOutlined",
  },
};

export const AllVariants: StoryObj<FileInputProps> = {
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  decorators: [
    (Story, { args }) => {
      return (
        <Box css={{ display: "flex", gap: "$4", p: "$4", flexWrap: "wrap" }}>
          <FileInput
            onChange={args.onChange}
            disabled={args.disabled}
            size={args.size}
            variant="primary"
            content="Primary"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          />
          <FileInput
            onChange={args.onChange}
            disabled={args.disabled}
            size={args.size}
            variant="secondary"
            content="Secondary"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          />
          <FileInput
            onChange={args.onChange}
            disabled={args.disabled}
            size={args.size}
            variant="tertiary"
            content="Tertiary"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          />
          <FileInput
            onChange={args.onChange}
            disabled={args.disabled}
            size={args.size}
            variant="danger"
            content="Danger"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          />
          <FileInput
            onChange={args.onChange}
            disabled={args.disabled}
            size={args.size}
            variant="dangerOutlined"
            content="Danger Outlined"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          />
          <FileInput
            onChange={args.onChange}
            disabled={args.disabled}
            size={args.size}
            variant="confirm"
            content="Confirm"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          />
          <FileInput
            onChange={args.onChange}
            disabled={args.disabled}
            size={args.size}
            variant="confirmOutlined"
            content="Confirm Outlined"
            fullWidth={args.fullWidth}
            rounded={args.rounded}
          />
        </Box>
      );
    },
  ],
};

export const Small: StoryObj<FileInputProps> = {
  args: {
    size: "sm",
  },
};
export const Medium: StoryObj<FileInputProps> = {
  args: {
    size: "md",
  },
};
export const Large: StoryObj<FileInputProps> = {
  args: {
    size: "lg",
  },
};

export const FullWidth: StoryObj<FileInputProps> = {
  args: {
    fullWidth: true,
  },
};

export const Disabled: StoryObj<FileInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithIcon: StoryObj<FileInputProps> = {
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    content: (
      <>
        Escolha um arquivo <Icon iconName="FileAdd" size={24} key={1} />
      </>
    ),
  },
};
