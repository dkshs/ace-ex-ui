import type { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputCompleteProps, Icon } from "@ace-ex/react";

export default {
  title: "Form/Text Input Complete",
  component: TextInput.Complete,
  id: "text-input-complete",
  argTypes: {
    placeholder: {
      description: "Placeholder do Elemento.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    boxSize: {
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
      description: "Trocar o elemento Box(div) para outro tipo de Elemento.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "ElementType<any>",
        },
      },
    },
    disabled: {
      description: "O input está desabilitado?",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    onChange: {
      action: "change",
    },
  },
  args: {
    boxSize: "md",
    variant: "default",
    placeholder: "Type your site address",
    disabled: false,
    readOnly: false,
  },
} as Meta<TextInputCompleteProps>;

export const Primary: StoryObj<TextInputCompleteProps> = {
  args: {
    variant: "primary",
  },
};

export const Default: StoryObj<TextInputCompleteProps> = {
  args: {
    variant: "default",
  },
};

export const Error: StoryObj<TextInputCompleteProps> = {
  args: {
    variant: "error",
  },
};

export const RootOtherElement: StoryObj<TextInputCompleteProps> = {
  args: {
    as: "label",
  },
};

export const WithIcon: StoryObj<TextInputCompleteProps> = {
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

export const WithPrefix: StoryObj<TextInputCompleteProps> = {
  args: {
    prefix: "https://",
    as: "label",
  },
};

export const Disabled: StoryObj<TextInputCompleteProps> = {
  args: {
    disabled: true,
  },
};
export const DisabledWithIcon: StoryObj<TextInputCompleteProps> = {
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    icon: <Icon iconName="Email" size={24} />,
    disabled: true,
  },
};
export const DisabledWithPrefix: StoryObj<TextInputCompleteProps> = {
  args: {
    prefix: "https://",
    disabled: true,
  },
};

export const WithTextInputIconComponent: StoryObj<TextInputCompleteProps> = {
  args: {
    as: "label",
    children: [
      <TextInput.Icon key={1}>
        <Icon iconName="Email" size={24} />
      </TextInput.Icon>,
    ],
  },
};

export const WithTextInputPrefixComponent: StoryObj<TextInputCompleteProps> = {
  args: {
    as: "label",
    children: [<TextInput.Prefix key={1}>https://</TextInput.Prefix>],
  },
};
