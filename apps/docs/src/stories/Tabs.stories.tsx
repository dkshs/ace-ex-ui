import type { Meta, StoryObj } from "@storybook/react";
import {
  TabsRootProps,
  Tabs,
  Box,
  Text,
  TextInput,
  Button,
} from "@ace-ex/react";

export default {
  title: "Components/Tabs",
  component: Tabs.Root,
  id: "tabs",
  parameters: {
    docs: {
      description: {
        component: "Um componente de Tabs.",
      },
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
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
  },
  args: {
    size: "md",
    defaultValue: "conta",
    children: [
      <Tabs.List key={1}>
        <Tabs.Trigger value="conta">Conta</Tabs.Trigger>
        <Tabs.Trigger value="senha">Senha</Tabs.Trigger>
      </Tabs.List>,
      <Tabs.Content key={2} value="conta">
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
            <TextInput.Complete
              placeholder="Digite seu username"
              id="username"
            />
            <Box
              css={{ mt: "$5", display: "flex", justifyContent: "flex-end" }}
            >
              <Button fullWidth>Salvar alterações</Button>
            </Box>
          </Box>
        </Box>
      </Tabs.Content>,
      <Tabs.Content key={3} value="senha">
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
            <Box
              css={{ mt: "$5", display: "flex", justifyContent: "flex-end" }}
            >
              <Button fullWidth>Salvar alterações</Button>
            </Box>
          </Box>
        </Box>
      </Tabs.Content>,
    ],
  },
} as Meta<TabsRootProps>;

export const Primary: StoryObj<TabsRootProps> = {};

export const Small: StoryObj<TabsRootProps> = {
  args: {
    size: "sm",
  },
};
export const Medium: StoryObj<TabsRootProps> = {
  args: {
    size: "md",
  },
};
export const Large: StoryObj<TabsRootProps> = {
  args: {
    size: "lg",
  },
};
export const ExtraLarge: StoryObj<TabsRootProps> = {
  args: {
    size: "xl",
  },
};
export const Full: StoryObj<TabsRootProps> = {
  args: {
    size: "full",
  },
};

export const Simple: StoryObj<TabsRootProps> = {
  args: {
    children: [
      <Tabs.List key={1}>
        <Tabs.Trigger value="conta">Conta</Tabs.Trigger>
        <Tabs.Trigger value="senha">Senha</Tabs.Trigger>
      </Tabs.List>,
      <Tabs.Content
        css={{ textAlign: "center", py: "$3" }}
        key={2}
        value="conta"
      >
        Conta
      </Tabs.Content>,
      <Tabs.Content
        css={{ textAlign: "center", py: "$3" }}
        key={3}
        value="senha"
      >
        Senha
      </Tabs.Content>,
    ],
  },
};
