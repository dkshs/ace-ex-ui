import type { Meta, StoryObj } from "@storybook/react";
import { transparentize } from "polished";

import { colors } from "@ace-ex/tokens";
import {
  darkTheme,
  Box,
  Button,
  Icon,
  Animations,
  type BoxProps,
} from "@ace-ex/react";

export default {
  title: "Components/Animations",
  component: Box,
  id: "animations",
  parameters: {
    docs: {
      description: {
        component:
          'Animações. Pode ser utilizada importando: `import { Animations } from "@ace-ex/react";`; e utilizando: `Animations.ping`',
      },
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
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
  args: {},
} as Meta<BoxProps>;

export const Ping: StoryObj<BoxProps> = {
  args: {
    children: [
      <Box
        key={1}
        as="span"
        css={{
          position: "relative",
          display: "inline-flex",
        }}
      >
        <Button size="md" variant="tertiary">
          Notifications
        </Button>
        <Box
          as="span"
          css={{
            position: "absolute",
            display: "flex",
            size: "$3",
            top: 0,
            right: 0,
            mt: "-$1",
            mr: "-$1",
          }}
        >
          <Box
            as="span"
            css={{
              animation: `${Animations.ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
              position: "absolute",
              display: "inline-flex",
              br: "$full",
              size: "100%",
              bc: "$blue400",
              opacity: 0.75,
            }}
          />
          <Box
            as="span"
            css={{
              position: "relative",
              display: "inline-flex",
              br: "$full",
              bc: "$blue500",
              size: "100%",
            }}
          />
        </Box>
      </Box>,
    ],
  },
};

export const Spin: StoryObj<BoxProps> = {
  parameters: {
    docs: {
      description: {
        story:
          "Spin. Para adicionar uma animação de rotação linear a elementos como indicadores de carregamento.",
      },
    },
  },
  args: {
    children: [
      <Button
        key={1}
        disabled
        css={{
          maxWidth: "300px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Icon
          size={20}
          iconName="Spinner"
          css={{ animation: `${Animations.spin} 1s linear infinite` }}
        />
        Processando
      </Button>,
    ],
  },
};

export const Pulse: StoryObj<BoxProps> = {
  parameters: {
    docs: {
      description: {
        story:
          "Pulse. para fazer com que um elemento apareça e desapareça suavemente - útil para coisas como carregamento de esqueletos.",
      },
    },
  },
  args: {
    css: {
      bc: "$backgroundOpacity",
      p: "$4",
      height: "$28",
      br: "$md",
      shadowMd: `${transparentize(0.6, colors.black)}`,
    },
    children: [
      <Box
        key={1}
        css={{
          display: "flex",
          gap: "$4",
          animation: `${Animations.pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
        }}
      >
        <Box
          css={{
            br: "$full",
            bc: "$gray200",
            size: "$10",
            [`.${darkTheme} &`]: {
              bc: "$gray700",
            },
          }}
        />
        <Box css={{ flex: 1, gap: "$1" }}>
          <Box
            css={{
              br: "$md",
              height: "$2-5",
              bc: "$gray200",
              [`.${darkTheme} &`]: {
                bc: "$gray700",
              },
            }}
          />
          <Box css={{ mt: "$3" }}>
            <Box
              css={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "$4",
              }}
            >
              <Box
                css={{
                  gridColumn: "span 2 / span 2",
                  br: "$md",
                  height: "$2-5",
                  bc: "$gray200",
                  [`.${darkTheme} &`]: {
                    bc: "$gray700",
                  },
                }}
              />
              <Box
                css={{
                  gridColumn: "span 1 / span 1",
                  br: "$md",
                  height: "$2-5",
                  bc: "$gray200",
                  [`.${darkTheme} &`]: {
                    bc: "$gray700",
                  },
                }}
              />
            </Box>
            <Box
              css={{
                mt: "$3",
                br: "$md",
                height: "$2-5",
                bc: "$gray200",
                [`.${darkTheme} &`]: {
                  bc: "$gray700",
                },
              }}
            />
          </Box>
        </Box>
      </Box>,
    ],
  },
};

export const Bounce: StoryObj<BoxProps> = {
  parameters: {
    docs: {
      description: {
        story:
          "Bounce. para fazer um elemento saltar para cima e para baixo — útil para coisas como indicadores de “rolar para baixo”.        ",
      },
    },
  },
  args: {
    css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid $gray300",
      animation: `${Animations.bounce} 1s infinite`,
      bc: "$gray200",
      p: "$2",
      size: "$10",
      br: "$full",

      [`.${darkTheme} &`]: {
        border: "1px solid $gray700",
        bc: "$gray800",
      },
    },
    children: [<Icon key={1} iconName="ChevronDown" />],
  },
};
