import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectCompleteProps, Box } from "@ace-ex/react";

export default {
  title: "Form/SelectComplete",
  component: Select.Complete,
  id: "select-complete",
  argTypes: {
    placeholder: {
      description: "Placeholder do Elemento.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    groupLabel: {
      description: "Label que irá aparecer sobre os items do Select.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    options: {
      description: 'Um Array de objetos contendo "label" e "value".',
      type: { name: "other", value: "Array<object>", required: true },
      table: {
        type: {
          summary: "Array<object>",
          detail: "{label: string, value: string}[]",
        },
      },
    },
    triggerSize: {
      description: "Size do Select.",
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
    itemSize: {
      description: "Size dos items do Select.",
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
    onValueChange: {
      action: "onValueChange",
    },
    onOpenChange: {
      action: "onOpenChange",
    },
    disabled: {
      type: "boolean",
      description: "O Select está desabilitado?",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
  args: {
    placeholder: "Types",
    groupLabel: "Types",
    options: [
      {
        label: "Error",
        value: "error",
      },
      {
        label: "Done",
        value: "done",
      },
      {
        label: "Warn",
        value: "warn",
      },
    ],
    triggerSize: "md",
    itemSize: "md",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          "O mesmo que o componente Select, mas usando somente um componente.",
      },
    },
  },
} as Meta<SelectCompleteProps>;

export const Primary: StoryObj<SelectCompleteProps> = {};

export const TriggerSmall: StoryObj<SelectCompleteProps> = {
  args: {
    triggerSize: "sm",
  },
};
export const TriggerDefault: StoryObj<SelectCompleteProps> = {
  args: {
    triggerSize: "md",
  },
};
export const TriggerLarge: StoryObj<SelectCompleteProps> = {
  args: {
    triggerSize: "lg",
  },
};

export const ItemSmall: StoryObj<SelectCompleteProps> = {
  args: {
    itemSize: "sm",
  },
};

export const ItemDefault: StoryObj<SelectCompleteProps> = {
  args: {
    itemSize: "md",
  },
};

export const Disabled: StoryObj<SelectCompleteProps> = {
  args: {
    disabled: true,
  },
};

export const DefaultValue: StoryObj<SelectCompleteProps> = {
  args: {
    defaultValue: "error",
  },
};

export const TriggerSizes: StoryObj<SelectCompleteProps> = {
  argTypes: {
    triggerSize: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story, { args }) => {
      const options = args.options;

      return (
        <Box css={{ display: "flex", gap: "$4" }}>
          <Select.Complete
            placeholder={args.placeholder}
            groupLabel={args.groupLabel}
            options={options}
            triggerSize="sm"
            disabled={args.disabled}
            itemSize={args.itemSize}
          />
          <Select.Complete
            placeholder={args.placeholder}
            groupLabel={args.groupLabel}
            options={options}
            triggerSize="md"
            disabled={args.disabled}
            itemSize={args.itemSize}
          />
          <Select.Complete
            placeholder={args.placeholder}
            groupLabel={args.groupLabel}
            options={options}
            triggerSize="lg"
            disabled={args.disabled}
            itemSize={args.itemSize}
          />
        </Box>
      );
    },
  ],
};

export const ItemSizes: StoryObj<SelectCompleteProps> = {
  argTypes: {
    itemSize: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story, { args }) => {
      const options = args.options;

      return (
        <Box css={{ display: "flex", gap: "$4" }}>
          <Select.Complete
            placeholder={args.placeholder}
            groupLabel={args.groupLabel}
            options={options}
            triggerSize={args.triggerSize}
            itemSize="sm"
            disabled={args.disabled}
          />
          <Select.Complete
            placeholder={args.placeholder}
            groupLabel={args.groupLabel}
            options={options}
            triggerSize={args.triggerSize}
            itemSize="md"
            disabled={args.disabled}
          />
        </Box>
      );
    },
  ],
};
