import type { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps, Icon } from "@ace-ex/react";

export default {
  title: "Form/Text Input",
  component: TextInput.Root,
  id: "text-input",
  argTypes: {
    size: {
      description: "Altura do Box do input.",
      control: {
        options: ["sm", "md"],
        type: "inline-radio",
      },
      table: {
        type: {
          summary: '"sm" | "md"',
        },
      },
    },
    variant: {
      description: "Variações do Box do input.",
      control: {
        options: ["primary", "default", "error"],
        type: "inline-radio",
      },
      table: {
        type: {
          summary: '"primary" | "default" | "error',
        },
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    icon: {
      description: "Colocar ícone no input.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    prefix: {
      description: "Colocar um prefixo no input.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    as: {
      description:
        "Trocar o elemento Root padrão(div) para outro tipo de Elemento.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "ElementType<any>",
        },
      },
    },
    onChange: {
      action: "change",
    },
  },
  args: {
    size: "md",
    children: <TextInput.Input placeholder="Type your email address" />,
    variant: "default",
  },
} as Meta<TextInputRootProps>;

export const Primary: StoryObj<TextInputRootProps> = {
  args: {
    variant: "primary",
  },
};

export const Default: StoryObj<TextInputRootProps> = {
  args: {
    variant: "default",
  },
};

export const Error: StoryObj<TextInputRootProps> = {
  args: {
    variant: "error",
  },
};

export const RootOtherElement: StoryObj<TextInputRootProps> = {
  args: {
    as: "label",
  },
};

export const WithIcon: StoryObj<TextInputRootProps> = {
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    icon: <Icon iconName="Email" size={24} />,
    as: "label",
  },
};

export const WithPrefix: StoryObj<TextInputRootProps> = {
  args: {
    prefix: "https://",
    as: "label",
  },
};

export const Disabled: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input
        key={1}
        disabled
        placeholder="Type your email address"
      />,
    ],
  },
};
export const DisabledWithIcon: StoryObj<TextInputRootProps> = {
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    icon: <Icon iconName="Email" size={24} />,
    children: [
      <TextInput.Input
        key={1}
        disabled
        placeholder="Type your email address"
      />,
    ],
  },
};
export const DisabledWithPrefix: StoryObj<TextInputRootProps> = {
  args: {
    prefix: "https://",
    children: [
      <TextInput.Input
        key={1}
        disabled
        placeholder="Type your email address"
      />,
    ],
  },
};

export const WithTextInputIconComponent: StoryObj<TextInputRootProps> = {
  args: {
    as: "label",
    children: [
      <TextInput.Icon key={1}>
        <Icon iconName="Email" size={24} />
      </TextInput.Icon>,
      <TextInput.Input key={2} placeholder="Type your email address" />,
    ],
  },
};

export const WithTextInputPrefixComponent: StoryObj<TextInputRootProps> = {
  args: {
    as: "label",
    children: [
      <TextInput.Prefix key={1}>https://</TextInput.Prefix>,
      <TextInput.Input key={2} placeholder="Type your email address" />,
    ],
  },
};
