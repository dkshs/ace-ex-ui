import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectRootProps, Box } from "@ace-ex/react";

export default {
  title: "Form/Select",
  component: Select.Root,
  id: "select",
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    defaultValue: {
      type: "string",
      description: "Valor padrão.",
      control: { type: "text" },
      table: {
        type: {
          summary: "string",
        },
      },
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
    onValueChange: {
      action: "change",
    },
  },
  args: {
    children: [
      <Select.Trigger key={1} size="md">
        <Select.Value placeholder="Types" />
      </Select.Trigger>,
      <Select.Content key={2}>
        <Select.Group>
          <Select.Label>Types</Select.Label>
          <Select.Item size="md" value="error">
            Error
          </Select.Item>
          <Select.Item size="md" value="done">
            Done
          </Select.Item>
          <Select.Item size="md" value="warn">
            Warn
          </Select.Item>
        </Select.Group>
      </Select.Content>,
    ],
    disabled: false,
  },
} as Meta<SelectRootProps>;

export const Primary: StoryObj<SelectRootProps> = {};

export const TriggerSmall: StoryObj<SelectRootProps> = {
  args: {
    children: [
      <Select.Trigger key={1} size="sm">
        <Select.Value placeholder="Types" />
      </Select.Trigger>,
      <Select.Content key={2}>
        <Select.Group>
          <Select.Label>Types</Select.Label>
          <Select.Item size="md" value="error">
            Error
          </Select.Item>
          <Select.Item size="md" value="done">
            Done
          </Select.Item>
          <Select.Item size="md" value="warn">
            Warn
          </Select.Item>
        </Select.Group>
      </Select.Content>,
    ],
  },
};
export const TriggerDefault: StoryObj<SelectRootProps> = {
  args: {
    children: [
      <Select.Trigger key={1} size="md">
        <Select.Value placeholder="Types" />
      </Select.Trigger>,
      <Select.Content key={2}>
        <Select.Group>
          <Select.Label>Types</Select.Label>
          <Select.Item size="md" value="error">
            Error
          </Select.Item>
          <Select.Item size="md" value="done">
            Done
          </Select.Item>
          <Select.Item size="md" value="warn">
            Warn
          </Select.Item>
        </Select.Group>
      </Select.Content>,
    ],
  },
};
export const TriggerLarge: StoryObj<SelectRootProps> = {
  args: {
    children: [
      <Select.Trigger key={1} size="lg">
        <Select.Value placeholder="Types" />
      </Select.Trigger>,
      <Select.Content key={2}>
        <Select.Group>
          <Select.Label>Types</Select.Label>
          <Select.Item size="md" value="error">
            Error
          </Select.Item>
          <Select.Item size="md" value="done">
            Done
          </Select.Item>
          <Select.Item size="md" value="warn">
            Warn
          </Select.Item>
        </Select.Group>
      </Select.Content>,
    ],
  },
};

export const ItemSmall: StoryObj<SelectRootProps> = {
  args: {
    children: [
      <Select.Trigger key={1} size="md">
        <Select.Value placeholder="Types" />
      </Select.Trigger>,
      <Select.Content key={2}>
        <Select.Group>
          <Select.Label>Types</Select.Label>
          <Select.Item size="sm" value="error">
            Error
          </Select.Item>
          <Select.Item size="sm" value="done">
            Done
          </Select.Item>
          <Select.Item size="sm" value="warn">
            Warn
          </Select.Item>
        </Select.Group>
      </Select.Content>,
    ],
  },
};

export const ItemDefault: StoryObj<SelectRootProps> = {
  args: {
    children: [
      <Select.Trigger key={1} size="md">
        <Select.Value placeholder="Types" />
      </Select.Trigger>,
      <Select.Content key={2}>
        <Select.Group>
          <Select.Label>Types</Select.Label>
          <Select.Item size="md" value="error">
            Error
          </Select.Item>
          <Select.Item size="md" value="done">
            Done
          </Select.Item>
          <Select.Item size="md" value="warn">
            Warn
          </Select.Item>
        </Select.Group>
      </Select.Content>,
    ],
  },
};

export const Disabled: StoryObj<SelectRootProps> = {
  args: {
    disabled: true,
  },
};

export const DefaultValue: StoryObj<SelectRootProps> = {
  args: {
    defaultValue: "error",
  },
};

export const TriggerSizes: StoryObj<SelectRootProps> = {
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: "flex", gap: "$4" }}>
          <Select.Root>
            <Select.Trigger key={1} size="sm">
              <Select.Value placeholder="Types" />
            </Select.Trigger>
            <Select.Content key={2}>
              <Select.Group>
                <Select.Label>Types</Select.Label>
                <Select.Item size="md" value="error">
                  Error
                </Select.Item>
                <Select.Item size="md" value="done">
                  Done
                </Select.Item>
                <Select.Item size="md" value="warn">
                  Warn
                </Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
          {Story()}
          <Select.Root>
            <Select.Trigger key={1} size="lg">
              <Select.Value placeholder="Types" />
            </Select.Trigger>
            <Select.Content key={2}>
              <Select.Group>
                <Select.Label>Types</Select.Label>
                <Select.Item size="md" value="error">
                  Error
                </Select.Item>
                <Select.Item size="md" value="done">
                  Done
                </Select.Item>
                <Select.Item size="md" value="warn">
                  Warn
                </Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Box>
      );
    },
  ],
};

export const ItemSizes: StoryObj<SelectRootProps> = {
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: "flex", gap: "$4" }}>
          <Select.Root>
            <Select.Trigger key={1} size="md">
              <Select.Value placeholder="Types" />
            </Select.Trigger>
            <Select.Content key={2}>
              <Select.Group>
                <Select.Label>Types</Select.Label>
                <Select.Item size="sm" value="error">
                  Error
                </Select.Item>
                <Select.Item size="sm" value="done">
                  Done
                </Select.Item>
                <Select.Item size="sm" value="warn">
                  Warn
                </Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
          {Story()}
        </Box>
      );
    },
  ],
};
