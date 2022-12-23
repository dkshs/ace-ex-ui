import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@ace-ex/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
  id: "text-area",
  argTypes: {
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
    placeholder: {
      description: "Placeholder do Elemento.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      type: "boolean",
      description: "A Text Area está desabilitada?",
      table: {
        type: {
          summary: "boolean",
        },
      },
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
  },
  args: {
    placeholder: "Add any observations...",
    disabled: false,
    variant: "primary",
  },
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {};

export const Default: StoryObj<TextAreaProps> = {
  args: {
    variant: "default",
  },
};

export const Error: StoryObj<TextAreaProps> = {
  args: {
    variant: "error",
  },
};

export const WithExample: StoryObj<TextAreaProps> = {
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$2",
          }}
        >
          <Text size="sm" css={{ fontWeight: "$medium" }}>
            Observations
          </Text>
          {Story()}
        </Box>
      );
    },
  ],
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
