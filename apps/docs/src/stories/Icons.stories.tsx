import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconProps, Icons, Box, Heading, Text } from "@ace-ex/react";

export default {
  title: "Components/Icon",
  component: Icon,
  id: "icon",
  argTypes: {
    iconName: {
      options: [
        "User",
        "Check",
        "ArrowRight",
        "ChevronRight",
        "ChevronUp",
        "ChevronDown",
        "Circle",
        "Close",
        "Menu",
        "FileAdd",
        "Spinner",
        "Email",
        "Sun",
        "Moon",
      ],
      control: {
        type: "select",
      },
      description: "Ícones disponíveis.",
      type: { name: "other", value: "Array<string>", required: true },
      table: {
        type: {
          summary:
            '"User" | "Check" | "ArrowRight" | "ChevronRight" | "ChevronUp" | "ChevronDown" | "Circle" | "Close" | "Menu" | "FileAdd" | "Spinner" | "Email" | "Sun" | "Moon"',
        },
      },
    },
    weight: {
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
      control: {
        type: "select",
      },
      description: "Peso dos ícones.",
      type: { name: "other", value: "Array<string>" },
      table: {
        type: {
          summary: '"thin" | "light" | "regular" | "bold" | "fill" | "duotone"',
        },
      },
    },
    color: {
      description: "Cores dos ícones",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      description: "Tamanho dos ícones.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
  },
  args: {
    iconName: "Email",
    weight: "regular",
    color: "#fff",
    size: 20,
  },
} as Meta<IconProps>;

export const Primary: StoryObj<IconProps> = {};

export const Labels = () => (
  <>
    <Heading size="sm" css={{ m: "$3-5", color: "$primary" }}>
      {Object.keys(Icons).length} icons
    </Heading>
    <Box
      as="ul"
      css={{
        display: "flex",
        flexFlow: "row wrap",
        color: "$primary",
      }}
    >
      {Object.keys(Icons).map((key) => (
        <Box
          as="li"
          key={key}
          css={{
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            flex: "0 1 16%",
            minWidth: "120px",
            m: "$3-5",
            color: "$primary",

            "& svg": {
              mr: "$1-5",
              size: "$5",
              color: "$primary",
            },
          }}
        >
          <Icon iconName={key as keyof typeof Icons} aria-label={key} />
          <Text size="sm" css={{ color: "#666" }}>
            {key}
          </Text>
        </Box>
      ))}
    </Box>
  </>
);

export const NoLabels = () => (
  <>
    <Heading size="sm" css={{ m: "$3-5", color: "$primary" }}>
      {Object.keys(Icons).length} icons
    </Heading>
    <Box
      as="ul"
      css={{
        display: "flex",
        flexFlow: "row wrap",
        color: "$primary",
      }}
    >
      {Object.keys(Icons).map((key) => (
        <Box
          as="li"
          key={key}
          css={{
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            flex: "none",
            minWidth: "auto",
            m: "$3-5",
            color: "$primary",

            "& svg": {
              display: "block",
              size: "$5",
              color: "$primary",
            },
          }}
        >
          <Icon aria-hidden iconName={key as keyof typeof Icons} />
        </Box>
      ))}
    </Box>
  </>
);
