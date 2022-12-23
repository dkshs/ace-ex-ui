import type { Meta, StoryObj } from "@storybook/react";
import {
  TabProps,
  TabsCompleteProps,
  Tabs,
  Box,
  Text,
  TextInput,
  Button,
} from "@ace-ex/react";

const tabs: TabProps[] = [
  {
    title: "Conta",
    value: "conta",
    content: (
      <Box
        css={{
          p: "$5",
          mt: "$2",
          display: "flex",
          flexDirection: "column",
          gap: "$5",
        }}
      >
        <Text css={{ textAlign: "center" }}>
          Faça alterações em sua conta aqui. Clique em salvar quando terminar.
        </Text>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$1",
            mb: "$4",
            maxWidth: "520px",
            width: "100%",
            mx: "auto",
          }}
        >
          <Text as="label" htmlFor="nome">
            Nome
          </Text>
          <TextInput.Complete
            boxCss={{ mb: "$3-5" }}
            placeholder="Digite seu nome"
            id="nome"
          />
          <Text as="label" htmlFor="username">
            Username
          </Text>
          <TextInput.Complete placeholder="Digite seu username" id="username" />
          <Box css={{ mt: "$5", display: "flex", justifyContent: "flex-end" }}>
            <Button fullWidth>Salvar alterações</Button>
          </Box>
        </Box>
      </Box>
    ),
  },
  {
    title: "Senha",
    value: "senha",
    content: (
      <Box
        css={{
          p: "$5",
          mt: "$2",
          display: "flex",
          flexDirection: "column",
          gap: "$5",
        }}
      >
        <Text css={{ textAlign: "center" }}>
          Altere sua senha aqui. Depois de salvar, você será desconectado.
        </Text>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$1",
            mb: "$4",
            maxWidth: "520px",
            width: "100%",
            mx: "auto",
          }}
        >
          <Text as="label" htmlFor="current-password">
            Senha atual
          </Text>
          <TextInput.Complete
            boxCss={{ mb: "$3" }}
            type="password"
            placeholder="Digite sua senha atual"
            id="current-password"
          />
          <Text as="label" htmlFor="new-password">
            Nova senha
          </Text>
          <TextInput.Complete
            boxCss={{ mb: "$3" }}
            type="password"
            placeholder="Digite sua nova senha"
            id="new-password"
          />
          <Text as="label" htmlFor="confirm-password">
            Confirmar senha
          </Text>
          <TextInput.Complete
            type="password"
            placeholder="Confirme sua senha"
            id="confirm-password"
          />
          <Box css={{ mt: "$5", display: "flex", justifyContent: "flex-end" }}>
            <Button fullWidth>Salvar alterações</Button>
          </Box>
        </Box>
      </Box>
    ),
  },
];

export default {
  title: "Components/Tabs Complete",
  component: Tabs.Complete,
  id: "tabs-complete",
  parameters: {
    docs: {
      description: {
        component: "Um componente de Tabs.",
      },
    },
  },
  argTypes: {
    tabs: {
      description: "Tabs que irão estar no componente.",
      table: {
        type: {
          summary: "TabProps[]",
          detail:
            "{\n  title: string,\n  value: string,\n  content: ReactNode,\n  triggerCSS?: object,\n  contentCSS?: object\n}",
        },
      },
      control: {
        type: "object",
      },
    },
    defaultValue: {
      description: "Qual tab será a inicial?",
      table: {
        type: {
          summary: "string",
        },
      },
      control: {
        type: "text",
      },
    },
    size: {
      description: "Largura da Tabs.",
      control: {
        type: "inline-radio",
        options: ["sm", "md", "lg", "xl", "full"],
      },
      table: {
        type: { summary: '"sm" | "md" | "lg" | "xl" | "full"' },
      },
    },
    tabsListProps: {
      description: "Propriedades da lista de Trigger(Tabs).",
      table: {
        type: { summary: "HTMLAttributes<any>" },
      },
    },
  },
  args: {
    tabs,
    size: "md",
    defaultValue: "conta",
    tabsListProps: {
      "aria-label": "Gerenciar sua conta",
    },
  },
} as Meta<TabsCompleteProps>;

export const Primary: StoryObj<TabsCompleteProps> = {};

export const Small: StoryObj<TabsCompleteProps> = {
  args: {
    size: "sm",
  },
};
export const Medium: StoryObj<TabsCompleteProps> = {
  args: {
    size: "md",
  },
};
export const Large: StoryObj<TabsCompleteProps> = {
  args: {
    size: "lg",
  },
};
export const ExtraLarge: StoryObj<TabsCompleteProps> = {
  args: {
    size: "xl",
  },
};
export const Full: StoryObj<TabsCompleteProps> = {
  args: {
    size: "full",
  },
};
